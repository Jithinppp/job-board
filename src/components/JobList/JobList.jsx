// libs
import { useGetListOfJobsQuery } from "../../services/jobsApi";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
// comps
import Loader from "../ui/Loader/Loader";
import JobCard from "../JobCard/JobCard";
import Pagination from "../Pagination/Pagination";

function JobList({ page, setPage }) {
  const { data, isLoading, isSuccess } = useGetListOfJobsQuery({
    limit: 5,
    page,
  });

  if (isLoading) return <Loader styles={"mx-auto mb-10"} />;
  if (isSuccess)
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* shows list of jobs */}
        <div className="">
          <div className="space-y-6">
            {data.data.map((job) => (
              <JobCard key={job._id} jobDetails={job} />
            ))}
          </div>
        </div>
        {/* pagination */}
        <Pagination data={data} page={page} setPage={setPage} />
      </motion.div>
    );
}

JobList.propTypes = {
  setPage: PropTypes.func,
  page: PropTypes.number,
};
export default JobList;
