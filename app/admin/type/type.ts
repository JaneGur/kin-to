import React from "react";

export type PaymentMethod = "cash" | "card" | "online";
export type OrderStatus = "new" | "accepted" | "cooking" | "sent" | "closed" | "rejected";

export type Order = {
    id: string;
    number: string;
    customerName: string;
    customerPhone: string;
    address: string;
    payment: PaymentMethod;
    comment?: string;
    discount?: number;
    gift?: string;
    total: number;
    status: OrderStatus;
    sentToPresto: boolean;
    createdAt: string;
    etaMinutes: number;
    items: {
        name: string;
        qty: number;
        category: string;
        modifiers?: string[];
    }[];
    rejectionReason?: string;
};

export type StopItem = {
    id: string;
    name: string;
    category: string;
    inStop: boolean;
};

export type AdminState = {
    themeMode: ThemeMode
    orders: Order[]
    selectedOrderId: string | null
}

export type ThemeMode = "dark" | "light"

export type MetricCardProps = {
    label: string;
    value: number | string;
    icon: React.ReactNode;
    accent: string;
};