import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import Router from 'next/router';
import Tesseract from 'tesseract.js';
// import useForm from '../lib/useForm';
import { getDataFromTree } from '@apollo/client/react/ssr';

import styled, { keyframes } from 'styled-components';
import DisplayError from '../ErrorMessage';
import { ALL_PRODUCTS_QUERY } from '../Products';
import Form from '../styles/Form';
import VisitType from '../VisitType/VisitType';
import CircleProgress from '../CircleProgress/CircleProgress';
import convertImgToSchedule from '../../lib/convertImgToSchedule';
import VisitTypeLabels from '../styles/VisitTypeLabels';

const CREATE_PATIENT_VISIT_MUTATION = gql`
  mutation CREATE_VISIT_MUTATION(
    # Which variables are getting passed in? And What types are they
    $mrn: Int!
    $cpt: Int!
    $rvu: Int!
    $visitType: String!
  ) {
    createPatientVisit(
      data: { mrn: $mrn, cpt: $cpt, rvu: $rvu, visitType: $visitType }
    ) {
      id
      mrn
      cpt
      rvu
      visitType
    }
  }
`;

const CREATE_PATIENT_VISITS_MUTATION = gql`
  mutation CREATE_PATIENT_VISITS_MUTATION(
    # Which variables are getting passed in? And What types are they
    $mrn: Int!
    $cpt: Int!
    $rvu: Int!
    $visitType: String!
  ) {
    createPatientVisits(
      data: [
        { data: { mrn: $mrn, cpt: $cpt, rvu: $rvu, visitType: $visitType } }
      ]
    ) {
      id
      mrn
      cpt
      rvu
      visitType
    }
  }
`;

export default function visitAddForm() {
  const [conversionProgress, setConversionProgress] = useState(0);
  const [visitList, setVisitList] = useState([
    {
      mrn: '',
      visitType: '',
      cpt: '',
      rvu: '',
    },
  ]);
  const [image, setImage] = useState('');
  const [test, setTest] = useState('test');

  // destructuring to get only the desired variables from the object
  // leaves out the id that is created for referencing each visit type
  // when setting values and managing input change handlers
  const visitData = (({ mrn, visitType, cpt, rvu }) => ({
    mrn,
    visitType,
    cpt,
    rvu,
  }))(visitList[0]);

  const [createPatientVisits, { loading, error, data }] = useMutation(
    CREATE_PATIENT_VISITS_MUTATION,
    {
      variables: [
        { data: { mrn: 919, cpt: 919, rvu: 919, visitType: 'stuff' } },
        { data: { mrn: 191, cpt: 191, rvu: 191, visitType: 'stuff' } },
      ],
    }
  );

  const testClick = async () => {
    createPatientVisits();
  };

  const handleChangeImg = (e) => {
    let { value } = e.target;
    value = URL.createObjectURL(e.target.files[0]);
    setImage(value);
  };

  // HERE, NEXT
  // visitType object should each have a property, altVisitType, which is an array
  // altVisitType: [],
  // After uploading the schedule, if the displayed visit type is different from
  // the actual visit type, then the user can correct it by changing the visit Type on the form
  // this updates the altVisitType array
  // the library file, convertImgToSchedule, should check a separate variable, listOfAltVisitTypes,
  // to see if the alternate interpretation of the visitType is in the array
  // if an altVisitType is found while converting the image to text, then the displayed
  // visitType is the actual visit type, not the alt.

  // MUTATION:
  // should you use a mutation similar to CreateProducts? This allows each patient visit to be logged as
  // an independent piece of data.

  // if the visitType displayed is different from the visitType on the image, then
  // the visitType object s

  // Two options for adding visit.
  // 1. Be able to add single visit manually
  // 2. Scan picture to add visit

  // Error if "Upload is clicked" without visit file added.
  // Probably grey out Upload button until visit file is added
  // What happens if try to upload file that has no visit info?

  // Two options for adding visit.
  // 1. Be able to add single visit manually
  // 2. Scan picture to add visit

  const handleChange = (e, visitId) => {
    let { name, value, type } = e.target;
    if (type === 'number') value = parseInt(value);
    const newVisitList = visitList.map((key) =>
      key.visitId === visitId ? { ...key, [name]: value } : key
    );
    setVisitList(newVisitList);
  };

  const handleClick = async () => {
    const result = await Tesseract.recognize(image, 'eng', {
      logger: (m) => {
        if (m.status === 'recognizing text') {
          console.log('status', m.status);
          setConversionProgress(m.progress);
        }
      },
    });
    const { lines } = result.data;
    const allVisitData = convertImgToSchedule(lines);
    setVisitList(allVisitData);
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

  const displayVisitTypeLabels = () => (
    <Form
      onSubmit={async (e) => {
        e.preventDefault();
        // Submit the inputfields to the backend:
        // const res = await createPatientVisit();
        const res = await createPatientVisits();
        Router.push({
          pathname: `/patientVisit/${res.data.createPatientVisit.id}`,
        });
      }}
    >
      <VisitTypeLabels>
        <p>MRN</p>
        <p>Visit Type</p>
        <p>CPT</p>
        <p>RVU</p>
      </VisitTypeLabels>
      {displayVisitTypes()}
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <button type="submit">Submit</button>
    </Form>
  );

  const displayVisitTypes = () =>
    visitList.map((key) => (
      <VisitType
        key={key.visitId}
        visitData={key}
        handleChange={handleChange}
      />
    ));

  return (
    <>
      {conversionProgress === 0 && displayDefaultPage()}
      {convertingImage() && displayCircleProgress()}
      {conversionProgress === 1 && displayVisitTypeLabels()}
      <button type="button" onClick={() => testClick()}>
        Test
      </button>
    </>
  );
}
