import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import { perPage } from '../config';
import Record from './Record';

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

export default function RecordList(props) {
  const renderVisitRecordLabels = () => (
    <VisitTypeLabelWrapper>
      <VisitTypeLabel key="mrn">MRN</VisitTypeLabel>
      <VisitTypeLabel key="visit">Visit Type</VisitTypeLabel>
      <VisitTypeLabel key="cpt">CPT</VisitTypeLabel>
      <VisitTypeLabel key="rvu">RVU</VisitTypeLabel>
      <VisitTypeLabel key="date">Date</VisitTypeLabel>
    </VisitTypeLabelWrapper>
  );

  const renderVisitRecords = () => {
    const { data } = props;
    return data.map((key) => <Record visit={key} id={key.id} />);
  };
  return (
    <>
      {renderVisitRecordLabels()}
      {renderVisitRecords()}
    </>
  );
}
