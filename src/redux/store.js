import {configureStore} from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query/react'

import exampleReducer from './exampleSlice';

 const store = configureStore({
  reducer: {
    example: exampleReducer,
  },
});

export default store;


