// libs
import { motion } from "framer-motion";
function Companies() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      Companies
    </motion.div>
  );
}
export default Companies;
