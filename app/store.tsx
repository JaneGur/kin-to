import { configureStore } from "@reduxjs/toolkit"
import {adminSlice, appReducer} from "@/app/admin/admin-slice";

export const store = configureStore({
    reducer: {
        [adminSlice.name]: appReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// для возможности обращения к store в консоли браузера
// @ts-ignore
window.store = store
