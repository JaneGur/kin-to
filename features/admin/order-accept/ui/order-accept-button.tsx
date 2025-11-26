import {Button} from "@/components/ui";
import {CheckCircle2} from "lucide-react";
import React, {useMemo} from "react";
import {useAppSelector} from "@/common/hooks/useAppSelector";
import {useAppDispatch} from "@/common/hooks/useAppDispatch";
import {selectOrders, selectSelectedOrderId, updateOrderAC} from "@/entities/admin/order/model/slice";

export const OrderAccept = () => {

    const orders = useAppSelector(selectOrders);
    const selectedOrderId = useAppSelector(selectSelectedOrderId);
    const dispatch = useAppDispatch();

    const selectedOrder = useMemo(
        () => orders.find((order) => order.id === selectedOrderId) ?? null,
        [orders, selectedOrderId],
    );

    const handleAccept = () => {
        if (!selectedOrder || selectedOrder.status !== "new") return;
        dispatch(updateOrderAC({ orderId: selectedOrder.id, payload: { status: "accepted" } }));
    };

    return (
        <Button
            onClick={handleAccept}
            disabled={!selectedOrder || selectedOrder.status !== "new"}
            className="flex-1 bg-yellow-400 text-black hover:bg-yellow-300"
        >
            <CheckCircle2 className="size-4" />
            Принять заказ
        </Button>
    );
};