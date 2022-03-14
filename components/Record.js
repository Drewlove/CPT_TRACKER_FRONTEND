import styled from 'styled-components';
import Link from 'next/link';

const VisitRecord = styled.a`
  display: flex;
  justify-content: space-around;
  border: 3px solid lightgray;
  margin: 5px 0px;
  border-radius: 10px;
  padding: 5px;
  :hover {
    text-decoration: none;
    background-color: gray;
    color: white;
    cursor: pointer;
  }
`;

const VisitRecordItem = styled.div`
  flex: 1 1 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: center;
`;

export default function Record(props) {
  const { mrn, cpt, rvu, visitType, id } = props.visit;
  return (
    <Link href={`/record/${id}`}>
      <VisitRecord>
        <VisitRecordItem>{mrn}</VisitRecordItem>
        <VisitRecordItem>{visitType}</VisitRecordItem>
        <VisitRecordItem>{cpt}</VisitRecordItem>
        <VisitRecordItem>{rvu}</VisitRecordItem>
      </VisitRecord>
    </Link>
  );
}
