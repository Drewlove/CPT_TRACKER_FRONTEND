import { useQuery } from '@apollo/client';
import { fieldNameFromStoreName } from '@apollo/client/cache';
import { visit } from 'graphql';
import gql from 'graphql-tag';
import Head from 'next/head';
import styled from 'styled-components';
import SingleRecordPage from '../pages/record/[id]';
import DisplayError from './ErrorMessage';

// NEXT:
// Update single visit
// Delete single visit
// AddVisitForm should have date field

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

export default function SingleRecord({ id }) {
  const { data, loading, error } = useQuery(SINGLE_RECORD_QUERY, {
    variables: { id },
  });
  if (loading) return <p>Loading...</p>;
  //   if (error) return <DisplayError error={error} />;
  //   const { PatientVisit } = data;
  console.log(data);
  return <p>Single Product</p>;
}
