import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {Order} from "@/entities/admin/order/model/types";
import {INITIAL_ORDERS} from "@/shared/lib/constants/admin-constants";


export const orderSlice = createSlice({
    name: "admin-order",
    initialState: {
        orders: INITIAL_ORDERS,
        selectedOrderId: INITIAL_ORDERS[0]?.id ?? null,
    },
    selectors: {
        selectOrders: (state) => state.orders,
        selectSelectedOrderId: (state) => state.selectedOrderId,
    },
    reducers: {
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

export const {selectOrders, selectSelectedOrderId} = orderSlice.selectors
export const {setSelectedOrderIdAC, updateOrderAC} = orderSlice.actions
export const orderReducer = orderSlice.reducer