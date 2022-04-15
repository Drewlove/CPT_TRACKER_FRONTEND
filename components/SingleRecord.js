import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import Router from 'next/router';
import DeleteVisit from './DeleteVisit';
import DisplayError from './ErrorMessage';

const SINGLE_RECORD_QUERY = gql`
  query SINGLE_RECORD_QUERY($id: ID!) {
    PatientVisit(where: { id: $id }) {
      id
      mrn
      visitType
      cpt
      rvu
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
    onCompleted: (data) => setPatientVisit(data.PatientVisit),
  });

  const [updatePatientVisit, { updateLoading, updateError, updateData }] =
    useMutation(UPDATE_PATIENT_VISIT_MUTATION);

  if (loading) return <p>Loading...</p>;

  const handleChange = (e) => {
    let { value, name } = e.target;
    if (e.target.type === 'number') value = parseInt(value);
    setPatientVisit({ ...patientVisit, [name]: value });
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
    <>
      <form>
        <label htmlFor="mrn">
          <input
            type="number"
            id="mrn"
            name="mrn"
            placeholder="0"
            value={patientVisit.mrn}
            onChange={(e) => handleChange(e)}
          />
        </label>
        <label htmlFor="visitType">
          <input
            type="text"
            id="visitType"
            name="visitType"
            placeholder=""
            value={patientVisit.visitType}
            onChange={(e) => handleChange(e)}
          />
        </label>

        <label htmlFor="cpt">
          <input
            type="number"
            id="cpt"
            name="cpt"
            placeholder="0"
            value={patientVisit.cpt}
            onChange={(e) => handleChange(e)}
          />
        </label>
        <label htmlFor="rvu">
          <input
            type="number"
            id="rvu"
            name="rvu"
            placeholder="0"
            value={patientVisit.rvu}
            onChange={(e) => handleChange(e)}
          />
        </label>
        <button type="submit" onClick={(e) => handleSubmit(e)}>
          Save
        </button>
      </form>
      <DeleteVisit id={id} />
    </>
  );

  const renderLoading = () => <p>Loading...</p>;
  return <>{patientVisit?.id ? renderForm() : renderLoading()}</>;
}
