import VisitType from '../styles/VisitTypeStyles';

export default function VisitTypeInputs(props) {
  const { visitType, cpt, rvu, visitId } = props.visitData;

  const handleChange = (e, visitId) => {
    console.log(`test`, visitId);
    props.handleChange(e, visitId);
  };

  return (
    <VisitType>
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
