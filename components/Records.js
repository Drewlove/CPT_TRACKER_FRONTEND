import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import styled from 'styled-components';
import { perPage } from '../config';
import VisitTypeLabels from './styles/VisitTypeLabels';
import Record from './Record';

// NEXT: PAGINATION
// NEXT: sort by mrn, cpt, rvu,
// only retrieve records with specific mrn, cpt, rvu

const VisitTypeLabel = styled.div`
  flex: 1 1 0px;
`;

const ALL_PATIENT_VISITS_QUERY = gql`
  query ALL_PATIENT_VISITS_QUERY($skip: Int = 0, $first: Int) {
    allPatientVisits(first: $first, skip: $skip) {
      id
      mrn
      visitType
      cpt
      rvu
    }
  }
`;

export default function Records({ page }) {
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
    <VisitTypeLabels>
      <VisitTypeLabel>MRN</VisitTypeLabel>
      <VisitTypeLabel>Visit Type</VisitTypeLabel>
      <VisitTypeLabel>CPT</VisitTypeLabel>
      <VisitTypeLabel>RVU</VisitTypeLabel>
    </VisitTypeLabels>
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
