import classes from "./loader.module.css";
import Types from "prop-types";

function Loader({ styles }) {
  return <div className={`${classes.loader} ${styles}`}></div>;
}
Loader.propTypes = {
  styles: Types.string,
};

export default Loader;
