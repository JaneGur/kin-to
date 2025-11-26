import {Button} from "@/components/ui";
import {Send} from "lucide-react";
import React, {useMemo} from "react";
import {useAppSelector} from "@/common/hooks/useAppSelector";
import {useAppDispatch} from "@/common/hooks/useAppDispatch";
import {selectOrders, selectSelectedOrderId, updateOrderAC} from "@/entities/admin/order/model/slice";

export const OrderSendToPresto = () => {

    const orders = useAppSelector(selectOrders);
    const selectedOrderId = useAppSelector(selectSelectedOrderId);
    const dispatch = useAppDispatch();

    const selectedOrder = useMemo(
        () => orders.find((order) => order.id === selectedOrderId) ?? null,
        [orders, selectedOrderId],
    );

    const handleSendToPresto = () => {
        if (!selectedOrder) return;
        dispatch(updateOrderAC({
            orderId: selectedOrder.id,
            payload: {
                sentToPresto: true,
                status: selectedOrder.status === "new" ? "accepted" : selectedOrder.status,
            }
        }));
    };

    return (
        <Button
            variant="secondary"
            onClick={handleSendToPresto}
            disabled={!selectedOrder || selectedOrder.sentToPresto}
            className="flex-1 border border-white/20 bg-white/10 text-white hover:bg-white/20"
        >
            <Send className="size-4" />
            {selectedOrder?.sentToPresto ? "Отправлено" : "В Presto"}
        </Button>
    );
};
