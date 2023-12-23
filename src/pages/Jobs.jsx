// libs
import { useState } from "react";
import { motion } from "framer-motion";
// others

// comps
import SearchInputForm from "../components/SearchInputForm/SearchInputForm";
import JobList from "../components/JobList/JobList";
import SearchedJobList from "../components/SearchedJobList/SearchedJobList";
import CheckboxFilter from "../components/CheckboxFilter/CheckboxFilter";
import ExperienceBar from "../components/ExperienceBar/ExperienceBar";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

function Jobs() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [showFilter, setShowFilter] = useState(false);

  const setSearchInput = (inputText) => {
    setSearch(inputText);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col transition-all"
    >
      <SearchInputForm onSearch={setSearchInput} />

      <div className="grid md:grid-cols-jobContainerCol grid-rows-1">
        <div className="p-2 mb-5">
          {/* sortby  relevance  date - */}
          <div className="flex justify-between gap-4 flex-wrap md:flex-col">
            <div className="flex items-center">
              <span className="mr-2">Sort by</span>
              <select className="border-2 rounded-sm p-[1px]">
                <option>Relevance</option>
                <option>Date</option>
              </select>
            </div>
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowFilter((prev) => !prev)}
              className="flex justify-between items-center px-4 border-2 py-1 rounded-full w-40 md:mt-8"
            >
              Filters
              {!showFilter ? (
                <FaChevronRight className="text-neutral-400" />
              ) : (
                <FaChevronDown className="text-neutral-400" />
              )}
            </motion.button>
          </div>
          {showFilter && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* expr 0 - any */}
              <ExperienceBar />
              <div className="flex md:block gap-7  flex-wrap mt-4">
                {/* employmentType - */}
                <CheckboxFilter
                  checkboxTitle={"Employment type"}
                  checkboxArr={["Full time", "Part time", "Trainee", "Intern"]}
                />

                {/* work mode */}
                <CheckboxFilter
                  checkboxTitle={"Work mode"}
                  checkboxArr={["Hybrid", "Remote", "Office"]}
                />
                {/* company type  mnc ,corporate, indian, startup*/}
                <CheckboxFilter
                  checkboxTitle={"Industry type"}
                  checkboxArr={["MNC", "Startup", "Corporate"]}
                />
              </div>
            </motion.div>
          )}
        </div>
        {search.length > 0 ? (
          <SearchedJobList query={search} />
        ) : (
          <JobList page={page} setPage={setPage} />
        )}
      </div>
    </motion.div>
  );
}

export default Jobs;
