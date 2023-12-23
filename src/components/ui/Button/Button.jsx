import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Button({ children, variant, handleClick, type, path }) {
  const v = {
    primary: "bg-blue-700 text-white hover:opacity-90",
    secondary: " text-black border-2 hover:border-slate-300",
  };

  if (type === "link") {
    return (
      <Link
        className={`px-6 py-3 rounded font-medium transition-all ${v[variant]}`}
        to={path}
      >
        {children}
      </Link>
    );
  }
  return (
    <button
      className={`px-6 py-3 rounded font-medium transition-all ${v[variant]}`}
      onClick={() => handleClick()}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.string,
  handleClick: PropTypes.func,
  type: PropTypes.string,
  path: PropTypes.string,
};

export default Button;
