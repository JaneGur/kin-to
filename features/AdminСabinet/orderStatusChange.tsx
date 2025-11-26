import {Select} from "@/components/ui";
import {OrderStatus} from "@/app/admin/type/type";
import {SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {ORDER_STATUS_OPTIONS} from "@/lib/constants/constants";
import React, {useMemo} from "react";
import {selectOrders, selectSelectedOrderId, updateOrderAC} from "@/app/admin/admin-slice";
import {useAppSelector} from "@/common/hooks/useAppSelector";
import {useAppDispatch} from "@/common/hooks/useAppDispatch";


export const OrderStatusChange = () => {

    const orders = useAppSelector(selectOrders);
    const selectedOrderId = useAppSelector(selectSelectedOrderId);
    const dispatch = useAppDispatch();

    const selectedOrder = useMemo(
        () => orders.find((order) => order.id === selectedOrderId) ?? null,
        [orders, selectedOrderId],
    );

    const handleStatusChange = (nextStatus: OrderStatus) => {
        if (!selectedOrder) return;
        dispatch(updateOrderAC({ orderId: selectedOrder.id, payload: { status: nextStatus } }));
    };

    return (
        <div className="space-y-2 rounded-2xl border border-white/10 bg-black/30 p-4">
            <p className="text-sm font-semibold text-white/90">Изменить статус</p>
            <Select
                value={selectedOrder?.status}
                onValueChange={(value) => handleStatusChange(value as OrderStatus)}
            >
                <SelectTrigger className="w-full bg-white/5 text-white">
                    <SelectValue placeholder="Статус заказа" />
                </SelectTrigger>
                <SelectContent className="bg-[#111111] text-white">
                    {ORDER_STATUS_OPTIONS.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                            {option.label}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    );
};