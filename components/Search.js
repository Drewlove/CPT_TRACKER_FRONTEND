// import { useQuery, useLazyQuery } from '@apollo/client';
// import React, { useState, useEffect } from 'react';
// import gql from 'graphql-tag';
// import styled from 'styled-components';
// import { useRouter } from 'next/dist/client/router';
// import Record from './Record';
// import RecordList from './RecordList';
// import Pagination from './Pagination';
// import Records from './Records';
// /*
// NEXT:Why are you unable to do a hard refresh on the Search page?
// It seems to be unable to complete loading on a hard refresh
// Records page, by comparison, can do a hard refresh, fetch data, render, and stop loading

// */

// const MRN_QUERY = gql`
//   query MRN_QUERY($mrn: Int!) {
//     allPatientVisits(where: { mrn: $mrn }) {
//       id
//       mrn
//       visitType
//       visitDate
//       cpt
//       rvu
//     }
//   }
// `;

// const VISIT_TYPE_QUERY = gql`
//   query VISIT_TYPE_QUERY($visitType: String!) {
//     allPatientVisits(where: { visitType: $visitType }) {
//       id
//       mrn
//       visitType
//       visitDate
//       cpt
//       rvu
//     }
//   }
// `;

// const COMBO_QUERY = gql`
//   query COMBO_QUERY($mrn: Int!, $visitType: String!) {
//     allPatientVisits(
//       where: { OR: [{ visitType: $visitType }, { mrn: $mrn }] }
//     ) {
//       id
//       mrn
//       visitType
//       visitDate
//       cpt
//       rvu
//     }
//   }
// `;

// export default function Search() {
//   const [filteredData, setFilteredData] = useState({});
//   const [inputs, setInputs] = useState({
//     mrn: 0,
//     visitType: '',
//   });

//   const [
//     visitTypeFilter,
//     {
//       data: filterVisitsVisitTypeData,
//       error: filterVisitsVisitTypeError,
//       loading: filterVisitsVisitTypeLoading,
//     },
//   ] = useLazyQuery(VISIT_TYPE_QUERY, {
//     variables: {
//       visitType: inputs.visitType,
//     },
//   });

//   const [
//     mrnFilter,
//     {
//       data: filterVisitsMrnData,
//       error: filterVisitsMrnError,
//       loading: filterVisitsMrnLoading,
//     },
//   ] = useLazyQuery(MRN_QUERY, {
//     variables: {
//       mrn: inputs.mrn,
//     },
//   });

//   const [
//     comboFilter,
//     { data: comboData, error: comboError, loading: comboLoading },
//   ] = useLazyQuery(COMBO_QUERY, {
//     variables: {
//       visitType: inputs.visitType,
//       mrn: inputs.mrn,
//     },
//   });

//   const handleChange = (e) => {
//     let { name, value, type } = e.target;
//     if (type === 'number') value = parseInt(value);
//     setInputs({ ...inputs, [name]: value });
//   };

//   function clearForm() {
//     const blankState = Object.fromEntries(
//       Object.entries(inputs).map(([key, value]) => [key, ''])
//     );
//     setInputs(blankState);
//   }

//   // const handleClickMRN = async () => {
//   //   const { data } = await mrnFilter();
//   //   setFilteredData(data);
//   // };

//   // const handleClickVisitType = async () => {
//   //   console.log('visit type');
//   //   const { data } = await visitTypeFilter();
//   //   console.log(data);
//   //   setFilteredData(data);
//   // };

//   const handleClickCombo = async () => {
//     console.log('visit type');
//     const { data } = await comboFilter();
//     console.log(data);
//     setFilteredData(data);
//   };

//   // # // const handleTest = async () => {
//   // # //   mrnFilter();
//   // # //   const { data } = await visitTypeFilter();
//   // # //   console.log(data);
//   // # //   setFilteredData(data);
//   // # // };

//   // # const handleClick = async (visitType) => {
//   // #   // const { data } = await getFilter(visitType);
//   // #   // console.log(data);
//   // #   // setFilteredData(data);
//   // #   // START HERE, HOW TO REFACTOR CODE SO IMPLEMENT ONLY ONE HANDLECLICK FUNCTION
//   // #   // FUNCTION THEN RETURNS FILTERED DATA BASED UPON WHICH BUTTON THE USER CLICKED
//   // #   // filterData(visitType);
//   // #   // console.log(things);
//   // # };

//   // # const filterData = async (visitType) => {
//   // #   let theData;
//   // #   switch (visitType) {
//   // #     case 'mrn':
//   // #       theData = await mrnFilter();
//   // #       break;
//   // #     case 'visitType':
//   // #       visitTypeFilter();
//   // #     default:
//   // #   }
//   // #   console.log(theData);
//   // #   // return setFilteredData(theData);
//   // # };

//   const displaySearchResults = () => {
//     if (filteredData?.allPatientVisits?.length === 0) return displayNoResults();
//     return displayRecords();
//   };

//   const displayRecords = () =>
//     filteredData?.allPatientVisits && (
//       <RecordList data={filteredData.allPatientVisits} />
//     );

//   const displayNoResults = () => <p>No Results</p>;

//   const { query } = useRouter();
//   const page = parseInt(query.page);

//   return (
//     <div>
//       <form>
//         <label htmlFor="mrn">
//           MRN
//           <input
//             type="number"
//             id="mrn"
//             name="mrn"
//             placeholder="0"
//             value={inputs.mrn}
//             onChange={(e) => handleChange(e)}
//           />
//         </label>
//         <div>
//           {/* <button type="button" onClick={() => handleClickMRN()}> */}
//           {/* <button type="button" onClick={() => handleClick('mrn')}> */}
//           <button type="button" onClick={() => handleClickCombo()}>
//             Filter
//           </button>
//           <button type="button" onClick={() => clearForm()}>
//             Clear
//           </button>
//         </div>
//         <label htmlFor="visitType">
//           Visit Type
//           <input
//             type="text"
//             id="visitType"
//             name="visitType"
//             placeholder="visit type"
//             value={inputs.visitType}
//             onChange={(e) => handleChange(e)}
//           />
//         </label>
//         <div>
//           <button type="button" onClick={() => handleClickCombo()}>
//             Filter
//           </button>
//           <button type="button" onClick={() => clearForm()}>
//             Clear
//           </button>
//         </div>
//       </form>
//       <div>
//         <Pagination page={page || 1} />
//         <Records page={page || 1} />
//         <Pagination page={page || 1} />
//       </div>
//       {displaySearchResults()}
//     </div>
//   );
// }
