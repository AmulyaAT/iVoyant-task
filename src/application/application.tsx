export const Application = () => {
  return (
    <form>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" />
      </div>
      <div>
        <label htmlFor="job-location">Job location:</label>
        <select id="job-location">
          <option value="">Select a country</option>
          <option value="US">United States</option>
          <option value="GB">United Kingdom</option>
          <option value="CA">Canada</option>
          <option value="IN">India</option>
          <option value="RU">Russia</option>
        </select>
      </div>
      <div>
        <label>
          <input type="checkbox" id="items" /> I agree to the terms and
          conditions
        </label>
      </div>
      <button>Submit</button>
    </form>
  );
};
                 