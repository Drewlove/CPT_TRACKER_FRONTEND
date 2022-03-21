import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import Router from 'next/router';
import Tesseract from 'tesseract.js';
// import useForm from '../lib/useForm';
import { getDataFromTree } from '@apollo/client/react/ssr';

import styled, { keyframes } from 'styled-components';
import DatePicker from 'react-datepicker';
import DisplayError from '../ErrorMessage';
import { ALL_PRODUCTS_QUERY } from '../Products';
import Form from '../styles/Form';
import VisitTypeInputs from '../VisitTypeInputs/VisitTypeInputs';
import CircleProgress from '../CircleProgress/CircleProgress';
import convertImgToSchedule from '../../lib/convertImgToSchedule';
import VisitTypeLabels from '../styles/VisitTypeLabels';
import VisitTypeDate from '../VisitTypeDate/VisitTypeDate';
import 'react-datepicker/dist/react-datepicker.css';

const CREATE_PATIENT_VISITS_MUTATION = gql`
  mutation CREATE_PATIENT_VISITS_MUTATION($input: [PatientVisitsCreateInput]) {
    createPatientVisits(data: $input) {
      visitDate
      id
      mrn
      cpt
      rvu
      visitType
    }
  }
`;

export default function visitAddForm() {
  const [image, setImage] = useState('');
  const [conversionProgress, setConversionProgress] = useState(0);
  const [visitDate, setVisitDate] = useState(new Date());
  const [patientVisitsList, setPatientVisitsList] = useState([
    {
      id: '',
      mrn: '',
      visitType: '',
      visitDate: new Date(),
      cpt: 0,
      rvu: 0,
    },
  ]);

  const testData = [
    { data: { visitDate: '', mrn: '1', cpt: 1, rvu: 1, visitType: '1' } },
    { data: { visitDate: '', mrn: '2', cpt: 2, rvu: 2, visitType: '2' } },
  ];

  const filterPatientVisitsData = () =>
    patientVisitsList.map(
      selectProps('mrn', 'visitDate', 'visitType', 'cpt', 'rvu')
    );

  const selectProps = (...props) =>
    function (obj) {
      const newObj = { data: {} };
      props.forEach((name) => {
        newObj.data[name] = obj[name];
      });
      return newObj;
    };

  const [createPatientVisits, { loading, error, data }] = useMutation(
    CREATE_PATIENT_VISITS_MUTATION,
    {
      // variables: { input: testData },
      variables: { input: filterPatientVisitsData() },
    }
  );

  // destructuring to get only the desired variables from the object
  // leaves out the id that is created for referencing each visit type
  // when setting values and managing input change handlers

  const handleChangeImg = (e) => {
    let { value } = e.target;
    value = URL.createObjectURL(e.target.files[0]);
    setImage(value);
  };

  const handleChange = (e, visitId) => {
    let { name, value, type } = e.target;
    if (type === 'number') value = parseInt(value);
    const newVisitList = patientVisitsList.map((key) =>
      key.visitId === visitId ? { ...key, [name]: value } : key
    );
    setPatientVisitsList(newVisitList);
  };

  const handleClick = async () => {
    const result = await Tesseract.recognize(image, 'eng', {
      logger: (m) => {
        if (m.status === 'recognizing text') {
          setConversionProgress(m.progress);
        }
      },
    });
    const { lines } = result.data;
    const patientVisitsListData = convertImgToSchedule(lines);
    setPatientVisitsList(patientVisitsListData);
  };

  const displayDefaultPage = () => (
    <Form>
      <DisplayError error={error} />
      <fieldset disabled={loading} aria-busy={loading}>
        <label htmlFor="image">
          Image
          <input
            required
            type="file"
            id="image"
            name="image"
            onChange={handleChangeImg}
          />
        </label>
        <button
          type="button"
          onClick={handleClick}
          disabled={image.length === 0}
        >
          Upload
        </button>
      </fieldset>
    </Form>
  );

  const convertingImage = () =>
    conversionProgress > 0 && conversionProgress < 1;

  const displayCircleProgress = () => (
    <CircleProgress conversionProgress={conversionProgress} />
  );

  const displayVisitForm = () => (
    <Form
      onSubmit={async (e) => {
        e.preventDefault();
        const res = await createPatientVisits();
        Router.push({
          pathname: '/records',
        });
      }}
    >
      <DatePicker
        selected={visitDate}
        onChange={(date) => handleDateChange(date)}
      />
      <VisitTypeLabels>
        <p>MRN</p>
        <p>Visit Type</p>
        <p>CPT</p>
        <p>RVU</p>
      </VisitTypeLabels>
      {displayVisitTypeInputs()}
      <button type="submit">Submit</button>
    </Form>
  );

  const displayVisitTypeInputs = () =>
    patientVisitsList.map((key) => (
      <VisitTypeInputs
        key={key.visitId}
        visitData={key}
        handleChange={handleChange}
      />
    ));

  const handleDateChange = (date) => {
    const updatedVisitList = patientVisitsList.map((key) => ({
      ...key,
      visitDate: new Date(new Date(date).setHours(0, 0, 0, 0)),
    }));
    setVisitDate(date);
    setPatientVisitsList(updatedVisitList);
  };

  return (
    <>
      {conversionProgress === 0 && displayDefaultPage()}
      {convertingImage() && displayCircleProgress()}
      {conversionProgress === 1 && displayVisitForm()}
      {/* <button type="button" onClick={() => testClick()}>
        Test
      </button> */}
    </>
  );
}
