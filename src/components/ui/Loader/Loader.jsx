import classes from "./loader.module.css";
import PropTypes from "prop-types";

function Loader({ styles }) {
  return <div className={`${classes.loader} ${styles}`}></div>;
}
Loader.propTypes = {
  styles: PropTypes.string,
};

export default Loader;
