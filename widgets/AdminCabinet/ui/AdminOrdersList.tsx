import {ChefHat, Clock3} from "lucide-react";
import {useMemo, useState} from "react";
import {ORDER_STATUS_OPTIONS, STATUS_BADGES} from "@/lib/constants/constants";
import {OrderStatus} from "@/app/admin/type/type";
import {useAppSelector} from "@/common/hooks/useAppSelector";
import {selectOrders, selectSelectedOrderId} from "@/app/admin/admin-slice";
import {useAppDispatch} from "@/common/hooks/useAppDispatch";
import {setSelectedOrderIdAC} from "@/app/admin/admin-slice";


export const AdminOrdersList = () => {

    const [statusFilter, setStatusFilter] = useState<OrderStatus | "all">("all");
    const orders = useAppSelector(selectOrders);
    const selectedOrderId = useAppSelector(selectSelectedOrderId);
    const dispatch = useAppDispatch();

    const filteredOrders = useMemo(
        () => (statusFilter === "all" ? orders : orders.filter((order) => order.status === statusFilter)),
        [orders, statusFilter],
    );

    const selectedOrder = useMemo(
        () => orders.find((order) => order.id === selectedOrderId) ?? null,
        [orders, selectedOrderId],
    );

    const handleSelectOrder = (orderId: string) => {
        dispatch(setSelectedOrderIdAC(orderId));
    };

    return (
        <div className="space-y-4 rounded-3xl border border-white/10 bg-white/[0.03] p-4 shadow-[0_10px_50px_rgba(0,0,0,0.45)]">
            <div className="flex flex-wrap items-center gap-2">
                <p className="text-sm font-medium text-white/70">Список заказов</p>
                <div className="flex flex-wrap gap-2">
                    {["all", ...ORDER_STATUS_OPTIONS.map((opt) => opt.value)].map((value) => (
                        <button
                            key={value}
                            onClick={() => setStatusFilter(value as OrderStatus | "all")}
                            className={`rounded-full border px-3 py-1 text-xs uppercase tracking-wide transition ${
                                statusFilter === value
                                    ? "border-yellow-400 bg-yellow-400 text-black"
                                    : "border-white/20 text-white/60 hover:border-white/50"
                            }`}
                        >
                            {value === "all" ? "Все" : ORDER_STATUS_OPTIONS.find((opt) => opt.value === value)?.label}
                        </button>
                    ))}
                </div>
            </div>
            <div className="space-y-3">
                {filteredOrders.length === 0 && (
                    <div className="rounded-2xl border border-dashed border-white/20 px-4 py-6 text-center text-sm text-white/60">
                        Нет заказов в этом статусе
                    </div>
                )}
                {filteredOrders.map((order) => (
                    <button
                        key={order.id}
                        className={`w-full rounded-2xl border px-4 py-4 text-left transition ${
                            selectedOrder?.id === order.id
                                ? "border-yellow-400 bg-yellow-400/5"
                                : "border-white/10 bg-black/30 hover:border-white/30"
                        }`}
                        onClick={() => handleSelectOrder(order.id)}
                    >
                        <div className="flex items-center justify-between gap-2">
                            <div>
                                <p className="text-sm font-semibold">№ {order.number}</p>
                                <p className="text-xs text-white/60">{order.customerName}</p>
                            </div>
                            <span className={`rounded-full px-3 py-1 text-xs font-medium ${STATUS_BADGES[order.status]}`}>
                      {ORDER_STATUS_OPTIONS.find((opt) => opt.value === order.status)?.label}
                    </span>
                        </div>
                        <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-white/60">
                    <span className="flex items-center gap-1">
                      <Clock3 className="size-3.5" />
                        {order.createdAt}
                    </span>
                            <span className="flex items-center gap-1">
                      <ChefHat className="size-3.5" />
                                {order.items.length} позиций
                    </span>
                            <span className="text-yellow-300 font-semibold">{order.total} ₽</span>
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );
};
