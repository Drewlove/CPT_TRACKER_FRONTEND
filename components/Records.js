import { useQuery, useLazyQuery } from '@apollo/client';
import gql from 'graphql-tag';
import styled from 'styled-components';
import Link from 'next/link';
import React, { useState } from 'react';
import { perPage } from '../config';
import Record from './Record';
import AdvancedSearch from './AdvancedSearch';

// NEXT: sort by mrn, cpt, rvu,
// only retrieve records with specific mrn, cpt, rvu

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

// const SORT_VISITS = gql`
//   query SORT_VISITS {
//     allPatientVisits(sortBy: mrn_ASC) {
//       id
//       mrn
//       visitType
//       visitDate
//       cpt
//       rvu
//     }
//   }
// `;

const MRN_QUERY = gql`
  query MRN_QUERY($mrn: Int!) {
    allPatientVisits(where: { mrn: $mrn }) {
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
  const [search, setSearch] = useState({
    mrn: 0,
  });
  // const { data, error, loading } = useQuery(ALL_PATIENT_VISITS_QUERY, {
  //   variables: {
  //     skip: page * perPage - perPage,
  //     first: perPage,
  //   },
  // });

  const allVisits = useQuery(ALL_PATIENT_VISITS_QUERY, {
    variables: {
      skip: page * perPage - perPage,
      first: perPage,
    },
  });

  const doStuff = () => {
    console.log('hi');
  };

  // START HERE
  // useLazyQuery seems to fire automatically,
  // see this thread: https://github.com/apollographql/apollo-client/issues/7484
  // use skip to fix? See comment by "pronovaso ".
  const [
    filterVisitsMrn,
    {
      data: filterVisitsMrnData,
      error: filterVisitsMrnError,
      loading: filterVisitsMrnLoading,
    },
  ] = useLazyQuery(MRN_QUERY, {
    variables: {
      mrn: search.mrn,
      onCompleted: doStuff(),
      // skip: page * perPage - perPage,
      // first: perPage,
    },
  });

  const handleChange = (e) => {
    let { name, value, type } = e.target;
    if (type === 'number') value = parseInt(value);
    setSearch({ ...search, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit');
    filterVisitsMrn();
  };

  // const handleClick = () => {
  //   refetch();
  // };

  // NEXT:
  // how to sort data by MRN, and other variables (CPT, RVU, visit type, date)
  // do you just manually sort the data? i.e. do NOT run another query, just sort the data
  // that was already retrieved from the first query? This might be the answer
  // In doing so, how to label 'data', 'error', and 'loading'
  // https://stackoverflow.com/questions/62340697/react-query-how-to-usequery-when-button-is-clicked

  // THEN, sort by all input types (MRN, CPT, RVU, Date)
  // THEN, advanced search: filter for visits within certain date ranges, or just one mrn, or just one visit type
  // THEN, update and delete records
  // const {data, error, loading, refetch } = useQuery(SORT_VISITS);

  if (allVisits.loading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error.message}</p>;
  if (allVisits.error) return <p>Error</p>;

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
    allVisits.data.allPatientVisits.map((visit) => (
      <Record key={visit.id} visit={visit} />
    ));

  return (
    <>
      <AdvancedSearch
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        search={search}
      />
      {renderVisitRecordLabels()}
      {renderVisitRecords()}

      {/* <ProductsListStyles>{displayProducts()}</ProductsListStyles> */}
    </>
  );
}
