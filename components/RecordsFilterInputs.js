import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function RecordsFilterInputs(props) {
  const {
    filterTypes,
    filterTerms,
    handleChangeFilterTerms,
    handleChangeFilterTypes,
    handleChangeDate,
  } = props;
  const { filterTypeDate, filterTypeMrn, filterTypeVisitType, filterTypeCpt } =
    filterTypes;

  const displayInputDate = () => (
    <>
      <DatePicker
        id="visitDate_gte"
        name="visitDate_gte"
        selected={filterTerms.visitDate_gte}
        onChange={(date) => handleChangeDate(date, 'visitDate_gte')}
      />
      <DatePicker
        id="visitDate_lte"
        name="visitDate_lte"
        selected={filterTerms.visitDate_lte}
        onChange={(date) => handleChangeDate(date, 'visitDate_lte')}
      />
    </>
  );

  const displayInputMRN = () => (
    <label htmlFor="mrn">
      <input
        // type="number"
        type="text"
        id="mrn"
        name="mrn"
        placeholder="mrn"
        value={filterTerms.mrn}
        onChange={(e) => handleChangeFilterTerms(e)}
      />
    </label>
  );

  const displayInputVisitType = () => (
    <label htmlFor="visitType">
      <input
        type="text"
        id="visitType"
        name="visitType"
        placeholder="visit type"
        value={filterTerms.visitType}
        onChange={(e) => handleChangeFilterTerms(e)}
      />
    </label>
  );

  const displayInputCpt = () => (
    <label htmlFor="visitType">
      <input
        // type="number"
        type="text"
        id="cpt"
        name="cpt"
        placeholder="CPT"
        value={filterTerms.cpt}
        onChange={(e) => handleChangeFilterTerms(e)}
      />
    </label>
  );

  return (
    <>
      <div>
        <label htmlFor="filterTypeDate">
          <input
            type="checkbox"
            id="visitDate"
            name="filterTypeDate"
            value={filterTypeDate}
            onChange={(e) => handleChangeFilterTypes(e)}
          />
          Date
        </label>
        {filterTypeDate ? displayInputDate() : null}
      </div>
      <div>
        <label htmlFor="filterTypeMrn">
          <input
            type="checkbox"
            id="mrn"
            name="filterTypeMrn"
            value={filterTypeMrn}
            onChange={(e) => handleChangeFilterTypes(e)}
          />
          MRN
        </label>
        {filterTypeMrn ? displayInputMRN() : null}
      </div>
      <div>
        <label htmlFor="filterTypeVisitType">
          <input
            type="checkbox"
            id="visitType"
            name="filterTypeVisitType"
            value={filterTypeVisitType}
            onChange={(e) => handleChangeFilterTypes(e)}
          />
          Visit Type
        </label>
        {filterTypeVisitType ? displayInputVisitType() : null}
      </div>
      <div>
        <label htmlFor="filterTypeVisitType">
          <input
            type="checkbox"
            id="cpt"
            name="filterTypeCpt"
            value={filterTypeCpt}
            onChange={(e) => handleChangeFilterTypes(e)}
          />
          CPT
        </label>
        {filterTypeCpt ? displayInputCpt() : null}
      </div>
    </>
  );
}
