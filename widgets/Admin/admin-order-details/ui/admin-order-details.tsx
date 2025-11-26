import React, {useMemo} from 'react';
import {useAppSelector} from "@/common/hooks/useAppSelector";
import {OrderAccept} from "@/features/admin/order-accept";
import {OrderReject} from "@/features/admin/order-reject";
import {OrderStatusChange} from "@/features/admin/order-status-change";
import {OrderSendToPresto} from "@/features/admin/order-send-to-presto";
import {PaymentMethod} from "@/entities/admin/order/model/types";
import {selectOrders, selectSelectedOrderId} from "@/entities/admin/order/model/slice";
import {ORDER_STATUS_OPTIONS, STATUS_BADGES} from "@/shared/lib/constants/admin-constants";


export const AdminOrderDetails = () => {

    const orders = useAppSelector(selectOrders);
    const selectedOrderId = useAppSelector(selectSelectedOrderId);

    const selectedOrder= useMemo(
        () => orders.find((order) => order.id === selectedOrderId) ?? null,
        [orders, selectedOrderId],
    );

    return (
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
            <div className="flex items-center justify-between gap-2">
                <h2 className="text-lg font-semibold">Детали заказа</h2>
                {selectedOrder && (
                    <span className={`rounded-full px-3 py-1 text-xs font-semibold ${STATUS_BADGES[selectedOrder.status]}`}>
                    {ORDER_STATUS_OPTIONS.find((opt) => opt.value === selectedOrder.status)?.label}
                  </span>
                )}
            </div>

            {!selectedOrder ? (
                <p className="mt-4 text-sm text-white/60">Выберите заказ слева, чтобы увидеть детали.</p>
            ) : (
                <div className="mt-4 space-y-5 text-sm text-white/80">
                    <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                        <p className="text-white text-base font-semibold">№ {selectedOrder.number}</p>
                        <div className="mt-3 space-y-1 text-sm text-white/70">
                            <p>{selectedOrder.customerName}</p>
                            <p className="text-white/60">{selectedOrder.customerPhone}</p>
                            <p className="text-white/70">{selectedOrder.address}</p>
                            <p className="text-white/60">Оплата: {paymentLabel(selectedOrder.payment)}</p>
                            {selectedOrder.comment && <p className="text-white/60">Комментарий: {selectedOrder.comment}</p>}
                        </div>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                        <p className="font-semibold text-white">Позиции ({selectedOrder.items.length})</p>
                        <ul className="mt-3 space-y-3">
                            {selectedOrder.items.map((item) => (
                                <li key={`${selectedOrder.id}-${item.name}`} className="flex flex-col rounded-xl bg-white/5 p-3">
                                    <div className="flex items-center justify-between">
                                        <span className="font-medium">{item.name}</span>
                                        <span className="text-yellow-300 font-semibold">×{item.qty}</span>
                                    </div>
                                    <p className="text-xs text-white/60">{item.category}</p>
                                    {item.modifiers && (
                                        <p className="text-xs text-white/50">Модификаторы: {item.modifiers.join(", ")}</p>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex flex-wrap gap-3 rounded-2xl border border-white/10 bg-black/30 p-4 text-sm">
                        {selectedOrder.discount && (
                            <div className="rounded-xl bg-emerald-500/10 px-3 py-2 text-emerald-200">
                                Скидка {selectedOrder.discount}%
                            </div>
                        )}
                        {selectedOrder.gift && (
                            <div className="rounded-xl bg-yellow-500/10 px-3 py-2 text-yellow-200">
                                Подарок: {selectedOrder.gift}
                            </div>
                        )}
                        <div className="rounded-xl bg-white/10 px-3 py-2 font-semibold text-white">
                            Итого: {selectedOrder.total} ₽
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        <OrderAccept />
                        <OrderSendToPresto/>
                    </div>
                    <OrderStatusChange />
                    <OrderReject/>
                </div>
            )}
        </div>
    );
};

function paymentLabel(method: PaymentMethod) {
    switch (method) {
        case "cash":
            return "Наличные";
        case "card":
            return "Картой курьеру";
        case "online":
            return "Онлайн";
        default:
            return method;
    }
}
