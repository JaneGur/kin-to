import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {INITIAL_ORDERS} from "@/lib/constants/constants";
import {Order, ThemeMode} from "@/app/admin/type/type";

export const adminSlice = createSlice({
    name: "admin",
    initialState: {
        themeMode: "dark" as ThemeMode,
        orders: INITIAL_ORDERS,
        selectedOrderId: INITIAL_ORDERS[0]?.id ?? null,
    },
    selectors: {
        selectThemeMode: (state) => state.themeMode,
        selectOrders: (state) => state.orders,
        selectSelectedOrderId: (state) => state.selectedOrderId,
    },
    reducers: {
        changeThemeModeAC: (state, action: PayloadAction<{ themeMode: ThemeMode }>) => {
            state.themeMode = action.payload.themeMode;
        },
        setSelectedOrderIdAC: (state, action: PayloadAction<string>) => {
            state.selectedOrderId = action.payload;
        },
        updateOrderAC: (state, action: PayloadAction<{ orderId: string; payload: Partial<Order> }>) => {
            const order = state.orders.find((o: Order) => o.id === action.payload.orderId);
            if (order) {
                Object.assign(order, action.payload.payload);
            }
        },
    },
})

export const {selectThemeMode, selectOrders, selectSelectedOrderId} = adminSlice.selectors
export const {changeThemeModeAC, setSelectedOrderIdAC, updateOrderAC} = adminSlice.actions
export const appReducer = adminSlice.reducer