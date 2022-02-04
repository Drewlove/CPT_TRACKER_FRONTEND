import styled, { keyframes } from 'styled-components';
// How to update each item? Work onChange handler

// name for each input needs to be specific to that input,
// ie you will get multiple inputs with name of 'mrn', 'visitType' etc.
// since each daily schedule line will generate an mrn, visitType, etc.

const VisitType = styled.div`
  display: flex;
`;

export default function visitType({ props }) {
  const { visitData } = props;
  console.log(props);
  console.log(visitData);
  return (
    <VisitType>
      <label htmlFor={`mrn-${props.id}`}>
        MRN
        <input
          type="number"
          id={`mrn-${props.id}`}
          name="mrn"
          placeholder="0"
          value={visitData.mrn}
          // onChange={handleChange}
        />
      </label>

      <label htmlFor={`visitType-${props.id}`}>
        Visit Type
        <input
          type="text"
          id={`visitType-${props.type}`}
          name="visitType"
          placeholder="0"
          value={visitData.type}
          // onChange={handleChange}
        />
      </label>

      <label htmlFor={`cpt-${props.id}`}>
        CPT
        <input
          type="number"
          id={`cpt-${props.type}`}
          name="cpt"
          placeholder="0"
          value={visitData.cpt}
          // onChange={handleChange}
        />
      </label>
      <label htmlFor={`rvu-${props.id}`}>
        RVU
        <input
          type="number"
          id={`rvu-${props.type}`}
          name="rvu"
          placeholder="0"
          value={visitData.rvu}
          // onChange={handleChange}
        />
      </label>
    </VisitType>
  );
}
