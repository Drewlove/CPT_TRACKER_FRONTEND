import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import styled from 'styled-components';
import { perPage } from '../config';
import Record from './Record';
import RecordList from './RecordList';

export const ALL_PATIENT_VISITS_QUERY = gql`
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

// const VisitTypeLabelWrapper = styled.div`
//   display: flex;
//   justify-content: space-around;
//   position: sticky;
//   top: 0px;
//   background-color: white;
//   height: 50px;
// `;

// const VisitTypeLabel = styled.button`
//   flex: 1 1 0px;
//   &:hover {
//     cursor: pointer;
//   }
// `;

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

  // const renderVisitRecordLabels = () => (
  //   <VisitTypeLabelWrapper>
  //     <VisitTypeLabel onClick={() => handleClick()}>MRN</VisitTypeLabel>
  //     <VisitTypeLabel>Visit Type</VisitTypeLabel>
  //     <VisitTypeLabel>CPT</VisitTypeLabel>
  //     <VisitTypeLabel>RVU</VisitTypeLabel>
  //     <VisitTypeLabel>Date</VisitTypeLabel>
  //   </VisitTypeLabelWrapper>
  // );

  // const renderVisitRecords = () =>
  //   allVisits.data.allPatientVisits.map((visit) => (
  //     <Record key={visit.id} visit={visit} />
  //   ));

  return (
    <>
      {<RecordList data={data.allPatientVisits} />}
      {/* <RecordList data={allVisits.data.allPatientVisits} /> */}
      {/* {/* {renderVisitRecordLabels()} */}
      {/* {renderVisitRecords()} */}
    </>
  );
}
