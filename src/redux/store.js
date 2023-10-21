import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./slices/modalSlice";
import alertSlice from "./slices/alertSlice";

export const store = configureStore({
    reducer: {
        alert: alertSlice,
        modal: modalSlice
    }
})