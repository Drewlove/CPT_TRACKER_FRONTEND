import { useQuery, useLazyQuery } from '@apollo/client';
import React, { useState, useEffect } from 'react';
import gql from 'graphql-tag';
import styled from 'styled-components';
import Record from './Record';
import RecordList from './RecordList';
/* 
NEXT:Why are you unable to do a hard refresh on the Search page?
It seems to be unable to complete loading on a hard refresh
Records page, by comparison, can do a hard refresh, fetch data, render, and stop loading

*/

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

export default function Search() {
  const [inputs, setInputs] = useState({
    mrn: '',
  });

  const [
    mrnFilter,
    {
      data: filterVisitsMrnData,
      error: filterVisitsMrnError,
      loading: filterVisitsMrnLoading,
    },
  ] = useLazyQuery(MRN_QUERY, {
    variables: {
      // mrn: search.mrn,
      mrn: inputs.mrn,
      // onCompleted: doStuff(filterVisitsMrnData),
      // skip: page * perPage - perPage,
      // first: perPage,
    },
  });

  const handleChange = (e) => {
    let { name, value, type } = e.target;
    if (type === 'number') value = parseInt(value);
    setInputs({ ...inputs, [name]: value });
  };

  function clearForm() {
    const blankState = Object.fromEntries(
      Object.entries(inputs).map(([key, value]) => [key, ''])
    );
    setInputs(blankState);
  }

  return (
    <>
      <div>
        <form>
          <label htmlFor="mrn">
            <input
              type="number"
              id="mrn"
              name="mrn"
              placeholder="0"
              value={inputs.mrn}
              onChange={(e) => handleChange(e)}
            />
          </label>
        </form>
        <button type="button" onClick={() => mrnFilter()}>
          Filter
        </button>
        <button type="button" onClick={() => clearForm()}>
          Clear
        </button>
        {filterVisitsMrnData?.allPatientVisits && (
          <RecordList data={filterVisitsMrnData.allPatientVisits} />
        )}
      </div>
    </>
  );
}
