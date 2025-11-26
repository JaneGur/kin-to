import React, {useMemo} from 'react';
import {AlertTriangle, ChefHat, Send, Smartphone} from "lucide-react";
import {useAppSelector} from "@/common/hooks/useAppSelector";
import {MetricCard} from "@/widgets/Admin/admin-header";
import {selectOrders} from "@/entities/admin/order/model/slice";

export const AdminStats = () => {

    const orders = useAppSelector(selectOrders);

    const stats = useMemo(() => {
        const newOrders = orders.filter((item) => item.status === "new").length;
        const cooking = orders.filter((item) => item.status === "cooking").length;
        const sent = orders.filter((item) => item.status === "sent").length;
        const totalRevenue = orders
            .filter((item) => ["accepted", "cooking", "sent", "closed"].includes(item.status))
            .reduce((sum, order) => sum + order.total, 0);

        return { newOrders, cooking, sent, totalRevenue };
    }, [orders]);

    return (
        <div className="grid gap-4 md:grid-cols-4">
            <MetricCard
                label="Новые заказы"
                value={stats.newOrders}
                icon={<AlertTriangle className="size-5 text-yellow-400" />}
                accent="from-yellow-500/40 via-yellow-500/10 to-transparent"
            />
            <MetricCard
                label="Готовятся"
                value={stats.cooking}
                icon={<ChefHat className="size-5 text-emerald-300" />}
                accent="from-emerald-500/30 via-emerald-500/5 to-transparent"
            />
            <MetricCard
                label="В доставке"
                value={stats.sent}
                icon={<Send className="size-5 text-sky-300" />}
                accent="from-sky-500/30 via-sky-500/5 to-transparent"
            />
            <MetricCard
                label="Выручка сегодня"
                value={`${stats.totalRevenue.toLocaleString("ru-RU")} ₽`}
                icon={<Smartphone className="size-5 text-white" />}
                accent="from-white/15 via-white/5 to-transparent"
            />
        </div>
    );
};