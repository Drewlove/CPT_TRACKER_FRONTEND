import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import styled from 'styled-components';
import Link from 'next/link';
import { perPage } from '../config';
import Record from './Record';

// NEXT: PAGINATION
// NEXT: sort by mrn, cpt, rvu,
// only retrieve records with specific mrn, cpt, rvu

const ALL_PATIENT_VISITS_QUERY = gql`
  query ALL_PATIENT_VISITS_QUERY($skip: Int = 0, $first: Int) {
    allPatientVisits(first: $first, skip: $skip) {
      id
      mrn
      visitType
      visitDate
      cpt
      rvu
    }
  }
`;

const SORT_VISITS = gql`
  query SORT_VISITS {
    allPatientVisits(sortBy: mrn_ASC) {
      id
      mrn
      visitType
      visitDate
      cpt
      rvu
    }
  }
`;

const VisitTypeLabelWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  position: sticky;
  top: 0px;
  background-color: white;
  height: 50px;
`;

const VisitTypeLabel = styled.button`
  flex: 1 1 0px;
  &:hover {
    cursor: pointer;
  }
`;

export default function Records({ page }) {
  const handleClick = () => {
    refetch();
  };

  // NEXT: how to sort data by MRN, and other variables (CPT, RVU, visit type)
  // do you just manually sort the data? i.e. do NOT run another query, just sort the data
  // that was already retrieved from the first query? This might be the answer
  // In doing so, how to label 'data', 'error', and 'loading'
  // https://stackoverflow.com/questions/62340697/react-query-how-to-usequery-when-button-is-clicked

  // THEN, sort by all input types (MRN, CPT, RVU, Date)
  // THEN, advanced search: filter for visits within certain date ranges, or just one mrn, or just one visit type
  // THEN, update and delete records
  // const {data, error, loading, refetch } = useQuery(SORT_VISITS);

  const { data, error, loading } = useQuery(ALL_PATIENT_VISITS_QUERY, {
    variables: {
      skip: page * perPage - perPage,
      first: perPage,
    },
  });
  if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error.message}</p>;
  if (error) return <p>Error</p>;

  const renderVisitRecordLabels = () => (
    <VisitTypeLabelWrapper>
      <VisitTypeLabel onClick={() => handleClick()}>MRN</VisitTypeLabel>
      <VisitTypeLabel>Visit Type</VisitTypeLabel>
      <VisitTypeLabel>CPT</VisitTypeLabel>
      <VisitTypeLabel>RVU</VisitTypeLabel>
      <VisitTypeLabel>Date</VisitTypeLabel>
    </VisitTypeLabelWrapper>
  );

  const renderVisitRecords = () =>
    data.allPatientVisits.map((visit) => (
      <Record key={visit.id} visit={visit} />
    ));

  return (
    <>
      {renderVisitRecordLabels()}
      {renderVisitRecords()}

      {/* <ProductsListStyles>{displayProducts()}</ProductsListStyles> */}
    </>
  );
}
