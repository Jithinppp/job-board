import PropTypes from "prop-types";
import { MdError } from "react-icons/md";
function Error({ msg, styles }) {
  return (
    <div className={`${styles} flex items-center space-x-2`}>
      <MdError className="w-7 h-7" />
      <span className="text-lg font-light">{msg}</span>
    </div>
  );
}
Error.propTypes = {
  msg: PropTypes.string,
  styles: PropTypes.string,
};
export default Error;
