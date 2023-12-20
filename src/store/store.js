import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/AuthSlice";
import { jobsApi } from "../services/jobsApi";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [jobsApi.reducerPath]: jobsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(jobsApi.middleware),
});
