import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const jobListApi = createApi({
  reducerPath: "jobListApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://joboard-server.onrender.com/",
  }),
  endpoints: (builder) => ({
    // name of this function will be exported as use__Query
    getPosts: builder.query({
      query: () => "api/jobs",
    }),
  }),
});
export const { useGetPostsQuery } = jobListApi;
