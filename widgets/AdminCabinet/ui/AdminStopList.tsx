import React, {useState} from 'react';
import {Checkbox} from "@/components/ui";
import {INITIAL_STOP_LIST} from "@/lib/constants/constants";
import {StopItem} from "@/app/admin/type/type";


export const AdminStopList = () => {

    const [stopList, setStopList] = useState<StopItem[]>(INITIAL_STOP_LIST);

    const handleStopToggle = (stopId: string) => {
        setStopList((prev) =>
            prev.map((item) => (item.id === stopId ? { ...item, inStop: !item.inStop } : item)),
        );
    };

    return (
        <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-5">
            <h3 className="text-lg font-semibold text-white">Стоп-лист</h3>
            <p className="text-xs uppercase tracking-wide text-white/50">
                Поставьте блюда в стоп — они сразу пропадут из меню П
            </p>
            <div className="mt-4 space-y-3">
                {stopList.map((item) => (
                    <label
                        key={item.id}
                        className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm"
                    >
                        <div>
                            <p className="font-medium text-white">{item.name}</p>
                            <p className="text-xs text-white/60">{item.category}</p>
                        </div>
                        <div className="flex items-center gap-2">
                      <span className={`text-xs ${item.inStop ? "text-red-300" : "text-emerald-200"}`}>
                        {item.inStop ? "На стопе" : "В продаже"}
                      </span>
                            <Checkbox
                                checked={item.inStop}
                                onCheckedChange={() => handleStopToggle(item.id)}
                                className="size-5 rounded-lg border-white/30 data-[state=checked]:bg-yellow-400 data-[state=checked]:text-black"
                            />
                        </div>
                    </label>
                ))}
            </div>
        </div>
    );
};