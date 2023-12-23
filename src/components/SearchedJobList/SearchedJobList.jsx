// libs
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { useSearchJobsQuery } from "../../services/jobsApi";
import JobCard from "../JobCard/JobCard";
import Loader from "../ui/Loader/Loader";

function SearchedJobList({ query }) {
  const { data, isLoading, isSuccess, isError } = useSearchJobsQuery({
    q: query,
    limit: 2,
    page: 1,
  });
  if (isLoading) return <Loader styles={"mx-auto"} />;
  if (isError) return <p>No jobs found</p>;
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
        {/* <Pagination data={data} page={page} setPage={setPage} /> */}
      </motion.div>
    );
}
SearchedJobList.propTypes = {
  query: PropTypes.string,
};
export default SearchedJobList;
