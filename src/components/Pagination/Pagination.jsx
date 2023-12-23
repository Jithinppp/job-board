// libs
import { motion } from "framer-motion";
import PropTypes from "prop-types";
// comps
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

function Pagination({ data, setPage, page }) {
  if (!data) return null;
  return (
    <div className="mt-4 flex items-center justify-center">
      {data.previous && (
        <motion.button whileTap={{ scale: 0.7 }}>
          <FaAngleLeft
            onClick={() => setPage((prev) => prev - 1)}
            className="w-4 h-4  text-gray-400"
          />
        </motion.button>
      )}

      <span className="mx-3 font-semibold">{page}</span>
      {data.next && (
        <motion.button whileTap={{ scale: 0.7 }}>
          <FaAngleRight
            onClick={() => setPage((prev) => prev + 1)}
            className="w-4 h-4 text-gray-400"
          />
        </motion.button>
      )}
    </div>
  );
}

Pagination.propTypes = {
  data: PropTypes.object,
  setPage: PropTypes.func,
  page: PropTypes.number,
};

export default Pagination;
