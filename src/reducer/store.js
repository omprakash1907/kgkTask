import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./CategorySlice";

export const store = configureStore({
    reducer: {
        category : categoryReducer,
    }
})

export default store;
