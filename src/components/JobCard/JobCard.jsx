import PropTypes from "prop-types";
import { MdOutlineLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";

function JobCard({ jobDetails }) {
  const { jobId, title, company, industryType, location, description } =
    jobDetails;
  return (
    <div className="bg-neutral-50 p-4 rounded shadow-sm hover:shadow transition-all">
      <Link
        to={`/job/${jobId}`}
        className="font-semibold text-gray-900 text-lg tracking-tight my-1"
      >
        {title}
      </Link>
      <p className="text-gray-700 font-light">
        {company} | {industryType}
      </p>
      <div className="flex items-center my-1">
        <MdOutlineLocationOn className=" w-4 h-4 text-gray-600 mb-[2px]" />
        <p className="text-gray-600">{location}</p>
      </div>
      <p className="text-sm my-1 font-light text-gray-600">
        {description.slice(0, -30)}...
      </p>
    </div>
  );
}
JobCard.propTypes = {
  jobDetails: PropTypes.object,
};

export default JobCard;
