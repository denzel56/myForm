import { configureStore } from "@reduxjs/toolkit";
import stepSlice from "./stepSlice";

const store = configureStore({
  reducer: {
    step: stepSlice,
  },
});

export default store;
