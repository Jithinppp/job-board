// libs
import { motion } from "framer-motion";
// others
import { useGetListOfJobsQuery } from "../services/jobsApi";
// comps
import Loader from "../components/ui/Loader/Loader";
import JobCard from "../components/JobCard/JobCard";
import SearchInputForm from "../components/SearchInputForm/SearchInputForm";
import { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

function Jobs() {
  const [page, setPage] = useState(1);
  const { data, isLoading, isSuccess } = useGetListOfJobsQuery({
    limit: 5,
    page,
  });
  console.log(data);
  console.log(page);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col transition-all"
    >
      <SearchInputForm />
      <motion.div className="md:hidden block bg-rose-400">filters</motion.div>
      {isLoading && <Loader styles={"mx-auto mb-10"} />}
      {isSuccess && (
        <div className="grid md:grid-cols-jobContainerCol grid-rows-1">
          {/* search bar - */}
          {/* sortby  relevance  date - */}
          {/* employmentType - */}
          {/* work mode */}
          {/* expr 0 - any */}
          {/* salary 0-10000 10000-40000,40000-1000000 */}
          {/* company type  mnc ,corporate, indian, startup*/}
          {/* education any,degree,12,10,diploma,... */}
          <div className="hidden md:block">filters</div>
          <div className="space-y-6">
            {data.data.map((job) => (
              <JobCard key={job._id} jobDetails={job} />
            ))}
          </div>
        </div>
      )}
      {isSuccess && (
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
      )}
    </motion.div>
  );
}

export default Jobs;
