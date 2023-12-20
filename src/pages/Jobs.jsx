import { useGetJobsQuery } from "../services/jobsApi";
import Loader from "../components/ui/Loader/Loader";
import JobCard from "../components/JobCard/JobCard";
import SearchInputForm from "../components/SearchInputForm/SearchInputForm";

function Jobs() {
  const { data, isLoading, isSuccess } = useGetJobsQuery({ limit: 5, page: 1 });

  return (
    <div className="flex flex-col">
      <SearchInputForm />
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
      <div className="mt-4">pagination</div>
    </div>
  );
}

export default Jobs;
