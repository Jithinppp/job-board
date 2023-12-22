import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

function SignIn() {
  const [show, setShow] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1>Sign in page</h1>
      <motion.button
        onClick={() => setShow((prev) => !prev)}
        whileTap={{ scale: 0.8 }}
        className="p-3 bg-orange-500 text-white flex items-center justify-center rounded"
      >
        click me
      </motion.button>
      <AnimatePresence>
        {show && (
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-20 h-20 bg-blue-500 text-white rounded-lg m-5"
          ></motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
export default SignIn;
