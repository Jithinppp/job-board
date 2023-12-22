// libs
import { motion } from "framer-motion";

function Employers() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      Employers
    </motion.div>
  );
}
export default Employers;
