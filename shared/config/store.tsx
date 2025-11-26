import { configureStore } from "@reduxjs/toolkit"
import {orderReducer, orderSlice} from "@/entities/admin/order/model/slice";
import {themeModeReducer, themeModeSlice} from "@/entities/admin/theme/model/slice";


export const store = configureStore({
    reducer: {
        [orderSlice.name]: orderReducer,
        [themeModeSlice.name]: themeModeReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// для возможности обращения к store в консоли браузера
// @ts-ignore
window.store = store
