import {configureStore} from "@reduxjs/toolkit";
import {preloadedState} from "./preloadedState";
import {reducer} from "../reducers/root.reducer";

export const store = configureStore({
    reducer,
    preloadedState,
});

export default store;
