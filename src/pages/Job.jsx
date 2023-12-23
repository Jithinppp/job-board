// libs
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import dateFormat from "dateformat";
import { useGetSingleJobQuery } from "../services/jobsApi";
// comps
import Loader from "../components/UI/Loader/Loader";
import {
  MdBookmarkBorder,
  MdLocationOn,
  MdOutlineCases,
  MdOutlineChecklist,
  MdOutlineDateRange,
} from "react-icons/md";
import Button from "../components/UI/Button/Button";

function Job() {
  const { id } = useParams();
  const { data, isLoading, isSuccess } = useGetSingleJobQuery({ id });

  if (isLoading) return <Loader styles={"mx-auto flex my-10"} />;
  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl font-semibold tracking-tighter my-3  text-gray-900 pl-1 py-2 rounded-sm">
          {data.data.title}
        </h1>
        {/* company link */}
        <Link href={"#"} className=" text-lg border-b-[1px] border-gray-300">
          {data.data.company}
        </Link>
        {/* location */}
        <div className="flex items-center mt-2">
          <MdLocationOn className="text-xl text-neutral-500" />
          <p className="my-2 italic ">{data.data.location}</p>
        </div>
        {/* publishedDate */}
        <div className="flex items-center gap-2 my-2">
          <MdOutlineDateRange className="text-xl text-neutral-500" />
          <p>Posted on {dateFormat(data.data.publishedDate, "mm/dd/yyyy")}</p>
        </div>
        {/* workMode and employmentType */}
        <div className="flex items-center gap-2 mt-2">
          <MdOutlineCases className="text-xl text-neutral-500" />
          <p className="font-semibold">
            {data.data.workMode} | {data.data.employmentType}
          </p>
        </div>
        {/* skills */}
        <div className="flex items-center my-7 ">
          <MdOutlineChecklist className="w-6 h-6 flex-shrink: 0 text-neutral-500" />
          <div className="flex flex-wrap gap-2">
            {data.data.requiredSkills.map((skill, idx) => (
              <span
                className="bg-gray-200 rounded-full px-3 py-1 mx-1"
                key={idx}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        {/*  */}
        <div className="flex items-center">
          <MdBookmarkBorder className="w-6 h-6 text-neutral-500" />
          <p>
            Industry Type |{" "}
            <span className="font-semibold">{data.data.industryType}</span>
          </p>
        </div>
        {/* description */}
        <div className="my-10">
          <p className="font-semibold text-lg border-b-[1px] border-gray-300 w-max">
            About the job
          </p>
          <p className="">{data.data.description}</p>
        </div>
        {/* education */}
        <div className="my-10">
          <p className="font-semibold text-lg border-b-[1px] border-gray-300 w-max">
            Education
          </p>
          <p className=" text">{data.data.education}</p>
        </div>
        {/* experience */}
        <div className="my-10">
          <p>
            Experience:
            <span className="mx-2 text-lg font-semibold">
              {data.data.experience} Years
            </span>
          </p>
        </div>
        {/* apply */}
        <div className="my-10">
          <Button variant={"primary"}>Apply now</Button>
        </div>
      </motion.div>
    );
  }
}
export default Job;
