import { Link } from "react-router-dom";
import Button from "../components/ui/Button";
import { MdOutlineSearch } from "react-icons/md";
import JobCard from "../components/JobCard/JobCard";
import Loader from "../components/ui/Loader/Loader";
import Error from "../components/ui/Error/Error";
import { useGetJobsQuery } from "../services/jobsApi";

function Home() {
  const { isSuccess, data, isLoading, isError } = useGetJobsQuery({
    limit: 6,
    page: 1,
  });

  console.log(data);
  return (
    <div>
      <div className="flex flex-col items-center  mt-14 px-2">
        <h1 className="text-center font-bold text-6xl tracking-[-4px] my-5 text-gray-900">
          The quickest way to get hired
        </h1>
        <p className="text-gray-600 text-center">
          Find your perfect job with joboard, No payments it is completely free
        </p>
        <div className=" space-x-4 mt-7">
          <Button type={"link"} path={"/jobs"} variant={"primary"}>
            Find jobs
          </Button>
          <Button type={"link"} path={"/jobs"} variant={"secondary"}>
            Sign up
          </Button>
        </div>
      </div>
      {/* popular jobs */}
      <section className="mt-16 flex flex-col mx-auto">
        <div className="flex items-center">
          <MdOutlineSearch className="w-5 h-5 mx-1" />
          <Link
            className="text-lg border-b-2 my-4 border-gray-200 transition-all hover:border-gray-700 text-gray-900 w-max"
            to={"/jobs"}
          >
            Latest job openings
          </Link>
        </div>
        {isLoading && <Loader styles={"mx-auto mt-5"} />}
        {isError && (
          <Error msg={"Oops! something went wrong"} styles={"justify-center"} />
        )}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-4">
          {isSuccess &&
            data.data.map((job) => <JobCard key={job._id} jobDetails={job} />)}
        </div>
      </section>
    </div>
  );
}

export default Home;
