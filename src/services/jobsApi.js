import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const jobsApi = createApi({
  reducerPath: "jobsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://joboard-server.onrender.com",
  }),
  endpoints: (builder) => ({
    // name of this function will be exported as use__Query
    getListOfJobs: builder.query({
      query: ({ limit, page }) => `/api/jobs?limit=${limit}&page=${page}`,
    }),
    getSingleJob: builder.query({
      query: ({ id }) => `/api/job/${id}`,
    }),
    getFewJobs: builder.query({
      query: ({ limit }) => `/api/jobs/get-few/?limit=${limit}`,
    }),
    searchJobs: builder.query({
      query: ({ q, limit, page }) =>
        `/api/jobs/search?q=${q}&limit=${limit}&page=${page}`,
    }),
  }),
});

export const {
  useGetFewJobsQuery,
  useGetListOfJobsQuery,
  useGetSingleJobQuery,
  useSearchJobsQuery,
} = jobsApi;
