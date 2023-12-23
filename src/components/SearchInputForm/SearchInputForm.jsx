// libs
import PropTypes from "prop-types";
// comps
import { MdSearch, MdKeyboardReturn } from "react-icons/md";

function SearchInputForm({ onSearch }) {
  return (
    <form className=" flex items-center bg-neutral-50 w-max p-2 rounded-md mx-auto mb-8">
      <MdSearch className="w-6 h-6 text-neutral-300" />
      <input
        required
        onChange={(e) => onSearch(e.target.value)}
        placeholder="Search jobs..."
        type="text"
        className="bg-neutral-50 border-none outline-none pl-2 sm:w-[500px]"
      />
      <MdKeyboardReturn className="w-6 h-6 text-neutral-300 mr-1" />
    </form>
  );
}
SearchInputForm.propTypes = {
  onSearch: PropTypes.func,
};
export default SearchInputForm;
