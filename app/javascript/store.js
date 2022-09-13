import { configureStore } from "@reduxjs/toolkit";
import helloReducer from "./redux/helloReducer";

const store = configureStore({
  reducer: {
    hello: helloReducer,
  },
});

export default store;