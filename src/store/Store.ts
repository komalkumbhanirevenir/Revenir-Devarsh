// store.ts
import { configureStore } from '@reduxjs/toolkit';
import applicantsReducer from '../slices/ApplicantIdSlice';

const Store = configureStore({
    reducer: {
        applicants: applicantsReducer,
    },
});

export default Store;
