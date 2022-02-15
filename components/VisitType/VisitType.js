import styled, { keyframes } from 'styled-components';

const VisitType = styled.div`
  display: flex;
  justify-content: space-around;
`;

export default function visitType(props) {
  console.log(props);
  const { mrn, data, visitType, cpt, rvu, visitId } = props.visitData;

  const handleChange = (e, visitId) => {
    console.log(`test`, visitId);
    props.handleChange(e, visitId);
  };

  return (
    <VisitType>
      <label htmlFor={`mrn-${visitId}`}>
        <input
          type="number"
          id={`mrn-${visitId}`}
          name="mrn"
          placeholder="0"
          value={mrn}
          onChange={(e) => handleChange(e, visitId)}
        />
      </label>
      <label htmlFor={`visitType-${visitId}`}>
        <input
          type="text"
          id={`visitType-${visitId}`}
          name="visitType"
          placeholder=""
          value={visitType}
          onChange={(e) => handleChange(e, visitId)}
        />
      </label>

      <label htmlFor={`cpt-${visitId}`}>
        <input
          type="number"
          id={`cpt-${visitId}`}
          name="cpt"
          placeholder="0"
          value={cpt}
          onChange={(e) => handleChange(e, visitId)}
        />
      </label>
      <label htmlFor={`rvu-${visitId}`}>
        <input
          type="number"
          id={`rvu-${visitId}`}
          name="rvu"
          placeholder="0"
          value={rvu}
          onChange={(e) => handleChange(e, visitId)}
        />
      </label>
    </VisitType>
  );
}
