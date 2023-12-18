import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/AuthSlice";
import { jobListApi } from "./features/apiSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [jobListApi.reducerPath]: jobListApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(jobListApi.middleware),
});
