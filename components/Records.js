import { useQuery, useLazyQuery } from '@apollo/client';
import React, { useState } from 'react';
import styled from 'styled-components';
import Router from 'next/router';
import gql from 'graphql-tag';
import { perPage } from '../config';
import RecordList from './RecordList';
import Pagination from './Pagination';
import RecordsFilterInputs from './RecordsFilterInputs';

// Might be a different way to do pagination: https://www.apollographql.com/tutorials/fullstack-quickstart/fetching-data-with-queries

const RecordsTopSection = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MULTIPLE_FILTER_QUERY = gql`
  query MULTIPLE_FILTER_QUERY($queries: [PatientVisitWhereInput]) {
    allPatientVisits(where: { AND: $queries }) {
      id
      mrn
      visitType
      visitDate
      cpt
      rvu
    }
  }
`;

const ALL_PATIENT_VISITS_QUERY = gql`
  query ALL_PATIENT_VISITS_QUERY {
    allPatientVisits {
      id
      mrn
      visitType
      visitDate
      cpt
      rvu
    }
  }
`;

export default function Records({ page }) {
  const [filteredData, setFilteredData] = useState([]);
  const [viewFilteredData, setViewFilteredData] = useState(false);
  const [filterTypes, setFilterTypes] = useState({
    filterTypeDate: false,
    filterTypeMrn: false,
    filterTypeVisitType: false,
    filterTypeCpt: false,
  });
  // mrn and cpt are strings to eliminate leading 0's issue with numbers
  const [filterTerms, setFilterTerms] = useState({
    visitDate_gte: '',
    visitDate_lte: '',
    mrn: '',
    visitType: '',
    cpt: '',
  });

  const { data, error, loading } = useQuery(ALL_PATIENT_VISITS_QUERY);
  const queries = Object.entries(filterTerms)
    .filter(([k, v]) => v)
    .map(([k, v]) => ({ [k]: v }));
  const [filterMultiple] = useLazyQuery(MULTIPLE_FILTER_QUERY, {
    variables: {
      queries,
    },
  });

  const handleChangeFilterTypes = (e) => {
    const { name, id } = e.target;
    const updatedVal = !filterTypes[name];
    if (!updatedVal) {
      setFilterTerms((prevState) => {
        if (id.startsWith('visitDate')) {
          prevState.visitDate_gte = '';
          prevState.visitDate_lte = '';
        }
        return { ...prevState, [id]: '' };
      });
    }
    setFilterTypes({ ...filterTypes, [name]: updatedVal });
  };

  const handleChangeFilterTerms = (e) => {
    let { name, value } = e.target;
    if (['cpt', 'mrn'].includes(name)) value = parseInt(value);
    setFilterTerms((prevState) => {
      if (value) {
        prevState[name] = value;
      } else {
        prevState[name] = '';
      }
      return { ...prevState };
    });
  };

  const handleChangeDate = (date, dateType) => {
    setFilterTerms({ ...filterTerms, [dateType]: date });
  };

  const handleClickFilter = async () => {
    const { data } = await filterMultiple();
    setFilteredData(data);
    setViewFilteredData(true);
    Router.push({ pathname: `/records` });
  };

  const isFilterButtonDisabled = () => {
    let disabled = true;
    for (const val of Object.values(filterTerms)) {
      if (val !== '' && val !== 0) {
        disabled = false;
      }
    }
    return disabled;
  };

  const getRvus = (dataArr) => {
    let num;
    if (dataArr?.allPatientVisits?.length > 0) {
      num = dataArr.allPatientVisits.reduce((acc, obj) => acc + obj.rvu, 0);
    }
    return <span>{num}</span>;
  };

  const displayFilteredData = () =>
    filteredData?.allPatientVisits && (
      <RecordList data={filteredData?.allPatientVisits} />
    );

  const displayAllData = () =>
    data?.allPatientVisits && <RecordList data={data?.allPatientVisits} />;

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error</p>;

  return (
    <>
      <form>
        <RecordsTopSection>
          <div>
            <RecordsFilterInputs
              filterTypes={filterTypes}
              handleChangeFilterTypes={handleChangeFilterTypes}
              filterTerms={filterTerms}
              handleChangeFilterTerms={handleChangeFilterTerms}
              handleChangeDate={handleChangeDate}
            />
          </div>
          <div>
            <p>
              Total RVUs:
              {viewFilteredData ? getRvus(filteredData) : getRvus(data)}
            </p>
          </div>
        </RecordsTopSection>
        <div>
          <button
            type="button"
            disabled={isFilterButtonDisabled()}
            onClick={() => handleClickFilter()}
          >
            Filter
          </button>
          <button type="button" onClick={() => setViewFilteredData(false)}>
            All Records
          </button>
        </div>
      </form>
      <>{viewFilteredData ? displayFilteredData() : displayAllData()}</>
    </>
  );
}
