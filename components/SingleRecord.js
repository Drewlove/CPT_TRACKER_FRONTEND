import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import Router from 'next/router';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import DeleteVisit from './DeleteVisit';
// import DisplayError from './ErrorMessage';

// NEXT: display text to user once record has successfully been confirmed, THEN redirect to records page

const FormWrapper = styled.div`
  justify-content: center;
  display: flex;
`;

const LabelWrapper = styled.label`
  display: flex;
  align-items: center;
  padding: 5px;
`;

const LabelTitle = styled.div`
  width: 100px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const Main = styled.main`
  max-width: 750px;
  margin: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 1px solid black;
`;

const SaveButton = styled.button`
  margin: 25px;
  width: 100px;
  height: 50px;
  :hover {
    cursor: pointer;
  }
`;

const DatePickerWrapper = styled.div`
  width: auto;
`;

const SINGLE_RECORD_QUERY = gql`
  query SINGLE_RECORD_QUERY($id: ID!) {
    PatientVisit(where: { id: $id }) {
      id
      mrn
      visitType
      cpt
      rvu
      visitDate
    }
  }
`;

const UPDATE_PATIENT_VISIT_MUTATION = gql`
  mutation UPDATE_PATIENT_VISIT_MUTATION(
    $id: ID!
    $mrn: Int
    $visitType: String
    $cpt: Int
    $rvu: Int
    $visitDate: String
  ) {
    updatePatientVisit(
      id: $id
      data: {
        mrn: $mrn
        visitType: $visitType
        cpt: $cpt
        rvu: $rvu
        visitDate: $visitDate
      }
    ) {
      id
      mrn
      visitType
      cpt
      rvu
      visitDate
    }
  }
`;

export default function SingleRecord({ id }) {
  const [patientVisit, setPatientVisit] = useState({
    id: '',
    mrn: '',
    visitType: '',
    visitDate: new Date(),
    cpt: 0,
    rvu: 0,
  });

  const { loading, error } = useQuery(SINGLE_RECORD_QUERY, {
    variables: { id },
    // onCompleted: (data) => setPatientVisit(data.PatientVisit),
    onCompleted: (data) => {
      let patientVisitData = data.PatientVisit;
      patientVisitData = {
        ...patientVisitData,
        visitDate: new Date(
          new Date(data.PatientVisit.visitDate).setHours(0, 0, 0, 0)
        ),
      };
      setPatientVisit(patientVisitData);
    },
  });

  const [updatePatientVisit, { updateLoading, updateError, updateData }] =
    useMutation(UPDATE_PATIENT_VISIT_MUTATION);

  if (loading) return <p>Loading...</p>;

  const handleChange = (e) => {
    let { value, name } = e.target;
    if (e.target.type === 'number') value = parseInt(value);
    setPatientVisit({ ...patientVisit, [name]: value });
  };

  const handleDateChange = (date) => {
    const newDate = new Date(new Date(date).setHours(0, 0, 0, 0));
    setPatientVisit({ ...patientVisit, visitDate: newDate });
  };

  // async\await FIRST updates the visit THEN redirects to 'records' page
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await updatePatientVisit({
      variables: {
        id: patientVisit.id,
        mrn: patientVisit.mrn,
        visitType: patientVisit.visitType,
        visitDate: patientVisit.visitDate,
        cpt: patientVisit.cpt,
        rvu: patientVisit.rvu,
      },
    }).catch(console.error);

    Router.push({
      pathname: '/records/',
    });
  };

  const renderForm = () => (
    <Main>
      <DeleteVisit id={id} />
      <FormWrapper>
        <form>
          <LabelWrapper htmlFor="visitDate">
            <LabelTitle>Visit Date</LabelTitle>
            <DatePickerWrapper>
              <DatePicker
                style={{ width: 'auto' }}
                selected={patientVisit.visitDate}
                onChange={(date) => handleDateChange(date)}
              />
            </DatePickerWrapper>
          </LabelWrapper>
          <LabelWrapper htmlFor="mrn">
            <LabelTitle>MRN</LabelTitle>
            <input
              type="number"
              id="mrn"
              name="mrn"
              placeholder="0"
              value={patientVisit.mrn}
              onChange={(e) => handleChange(e)}
            />
          </LabelWrapper>
          <LabelWrapper htmlFor="visitType">
            <LabelTitle>Visit Type</LabelTitle>
            <input
              type="text"
              id="visitType"
              name="visitType"
              placeholder=""
              value={patientVisit.visitType}
              onChange={(e) => handleChange(e)}
            />
          </LabelWrapper>

          <LabelWrapper htmlFor="cpt">
            <LabelTitle>CPT</LabelTitle>
            <input
              type="number"
              id="cpt"
              name="cpt"
              placeholder="0"
              value={patientVisit.cpt}
              onChange={(e) => handleChange(e)}
            />
          </LabelWrapper>
          <LabelWrapper htmlFor="rvu">
            <LabelTitle>RVU</LabelTitle>
            <input
              type="number"
              id="rvu"
              name="rvu"
              placeholder="0"
              value={patientVisit.rvu}
              onChange={(e) => handleChange(e)}
            />
          </LabelWrapper>
          <ButtonWrapper>
            <SaveButton type="submit" onClick={(e) => handleSubmit(e)}>
              Save
            </SaveButton>
          </ButtonWrapper>
        </form>
      </FormWrapper>
    </Main>
  );

  const renderLoading = () => <p>Loading...</p>;
  return <>{patientVisit?.id ? renderForm() : renderLoading()}</>;
}
