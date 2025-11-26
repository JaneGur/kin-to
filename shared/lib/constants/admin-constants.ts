import {Order, OrderStatus} from "@/entities/admin/order/model/types";
import {StopItem} from "@/entities/admin/stop-list/model/types";


export const ORDER_STATUS_OPTIONS: { value: OrderStatus; label: string }[] = [
    { value: "new", label: "Новый" },
    { value: "accepted", label: "Принят" },
    { value: "cooking", label: "В процессе" },
    { value: "sent", label: "Отправлен" },
    { value: "closed", label: "Закрыт" },
    { value: "rejected", label: "Отклонён" },
];

export const INITIAL_ORDERS: Order[] = [
    {
        id: "ord-7812",
        number: "7812",
        customerName: "Иван Петров",
        customerPhone: "+7 921 000-00-11",
        address: "СПб, ул. Рубинштейна, 25",
        payment: "online",
        comment: "Без соуса",
        discount: 10,
        gift: "Лимонад 0.5L",
        total: 1890,
        status: "new",
        sentToPresto: false,
        createdAt: "10:24",
        etaMinutes: 45,
        items: [
            { name: "Пицца Пепперони 30 см", qty: 1, category: "Горячие блюда" },
            { name: "Ролл Филадельфия", qty: 2, category: "Роллы", modifiers: ["Доп. сыр"] },
        ],
    },
    {
        id: "ord-7813",
        number: "7813",
        customerName: "Мария Смирнова",
        customerPhone: "+7 999 555-33-22",
        address: "СПб, пр. Просвещения, 15",
        payment: "cash",
        total: 1240,
        status: "accepted",
        sentToPresto: true,
        createdAt: "10:28",
        etaMinutes: 35,
        items: [
            { name: "Суп Том Ям", qty: 1, category: "Супы" },
            { name: "Матча-латте", qty: 1, category: "Напитки" },
        ],
    },
    {
        id: "ord-7814",
        number: "7814",
        customerName: "Алексей Морозов",
        customerPhone: "+7 911 111-22-33",
        address: "СПб, ул. Савушкина, 85",
        payment: "card",
        total: 2360,
        status: "cooking",
        sentToPresto: true,
        createdAt: "10:32",
        etaMinutes: 30,
        items: [
            { name: "Боул с лососем", qty: 1, category: "Боулы" },
            { name: "Сет «Классика»", qty: 1, category: "Сеты" },
        ],
    },
];

export const INITIAL_STOP_LIST: StopItem[] = [
    { id: "stop-1", name: "Ролл Дракон", category: "Роллы", inStop: false },
    { id: "stop-2", name: "Стейк Рибай", category: "Гриль", inStop: true },
    { id: "stop-3", name: "Смузи Манго", category: "Напитки", inStop: false },
    { id: "stop-4", name: "Суп Фо Бо", category: "Супы", inStop: false },
];

export const STATUS_BADGES: Record<OrderStatus, string> = {
    new: "bg-yellow-500/20 text-yellow-400",
    accepted: "bg-emerald-500/15 text-emerald-400",
    cooking: "bg-sky-500/15 text-sky-400",
    sent: "bg-indigo-500/15 text-indigo-400",
    closed: "bg-gray-100 text-gray-800",
    rejected: "bg-red-500/20 text-red-400",
};