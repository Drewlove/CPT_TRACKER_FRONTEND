export default function AdvancedSearch(props) {
  const { handleChange, handleSubmit, search } = props;
  return (
    <>
      <h1>Advanced Search</h1>
      <form>
        <label htmlFor="mrn">
          <input
            type="number"
            id="mrn"
            name="mrn"
            placeholder="0"
            value={search.mrn}
            onChange={(e) => handleChange(e)}
          />
        </label>
        <button type="submit" onClick={handleSubmit}>
          Search
        </button>
      </form>
    </>
  );
}
