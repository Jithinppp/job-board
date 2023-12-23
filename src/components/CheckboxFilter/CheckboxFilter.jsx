// libs
import PropTypes from "prop-types";

function CheckboxFilter({ checkboxTitle, checkboxArr }) {
  return (
    <div className="md:my-10 max-w-[180px]">
      <p className="mb-1 font-medium">{checkboxTitle}</p>
      {checkboxArr.map((label, idx) => (
        <div key={idx} className="flex items-center space-x-2 my-2">
          <input
            type="checkbox"
            className=" h-5 w-5"
            name={label}
            onChange={(e) => console.log(e.target.checked, e.target.name)}
          />
          <label>{label}</label>
        </div>
      ))}
    </div>
  );
}
CheckboxFilter.propTypes = {
  checkboxArr: PropTypes.array,
  checkboxTitle: PropTypes.string,
};

export default CheckboxFilter;
