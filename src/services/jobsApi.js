import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const jobsApi = createApi({
  reducerPath: "jobsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://joboard-server.onrender.com/",
  }),
  endpoints: (builder) => ({
    // name of this function will be exported as use__Query
    getJobs: builder.query({
      query: ({ limit, page }) => `/api/jobs?limit=${limit}&page=${page}`,
    }),
  }),
});

export const { useGetJobsQuery } = jobsApi;
