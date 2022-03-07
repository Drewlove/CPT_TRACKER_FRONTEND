import styled from 'styled-components';

const VisitRecord = styled.div`
  display: flex;
  justify-content: space-around;
`;

const VisitRecordItem = styled.p`
  flex: 1 1 0px;
`;

export default function Record(props) {
  const { mrn, cpt, rvu, visitType } = props.visit;
  return (
    <VisitRecord>
      <VisitRecordItem>{mrn}</VisitRecordItem>
      <VisitRecordItem>{visitType}</VisitRecordItem>
      <VisitRecordItem>{cpt}</VisitRecordItem>
      <VisitRecordItem>{rvu}</VisitRecordItem>
    </VisitRecord>
  );
}
