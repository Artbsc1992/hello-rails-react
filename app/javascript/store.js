import { configureStore } from '@reduxjs/toolkit';
import helloReducer from './redux/helloReducer';

const store = configureStore({
  reducer: {
    greet: helloReducer,
  },
});

export default store;
