import {Button} from "@/components/ui";
import {ShieldX} from "lucide-react";
import React, {useMemo, useState} from "react";
import {useAppSelector} from "@/common/hooks/useAppSelector";
import {useAppDispatch} from "@/common/hooks/useAppDispatch";
import {selectOrders, selectSelectedOrderId, updateOrderAC} from "@/entities/admin/order/model/slice";


export const OrderReject = () => {

    const orders = useAppSelector(selectOrders);
    const selectedOrderId = useAppSelector(selectSelectedOrderId);
    const dispatch = useAppDispatch();
    const [rejectReason, setRejectReason] = useState("");

    const selectedOrder = useMemo(
        () => orders.find((order) => order.id === selectedOrderId) ?? null,
        [orders, selectedOrderId],
    );

    const handleReject = () => {
        if (!selectedOrder || !rejectReason.trim()) return;
        dispatch(updateOrderAC({
            orderId: selectedOrder.id,
            payload: {
                status: "rejected",
                rejectionReason: rejectReason.trim(),
            }
        }));
        setRejectReason("");
    };

    return (
        <div className="space-y-3 rounded-2xl border border-red-500/20 bg-red-500/5 p-4">
            <p className="text-sm font-semibold text-red-200">Отклонить заказ</p>
            <textarea
                className="min-h-20 w-full rounded-xl border border-white/10 bg-black/50 px-3 py-2 text-sm outline-none focus:border-yellow-400"
                placeholder="Причина для клиента"
                value={rejectReason}
                onChange={(event) => setRejectReason(event.target.value)}
            />
            <Button
                variant="destructive"
                onClick={handleReject}
                disabled={!rejectReason.trim() || !selectedOrder}
                className="bg-red-500 hover:bg-red-600"
            >
                <ShieldX className="size-4"/>
                Отклонить заказ
            </Button>
        </div>


    );
};
