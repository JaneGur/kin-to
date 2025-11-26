import React from "react";
import {MetricCardProps} from "@/app/admin/type/type";

export const MetricCard = ({ label, value, icon, accent }: MetricCardProps) => {
    return (
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-black via-black to-black p-4 shadow-[0_25px_80px_rgba(0,0,0,0.45)]">
            <div className={`pointer-events-none absolute h-24 w-24 rounded-full bg-gradient-to-br ${accent} blur-2xl opacity-70`} />
            <div className="relative space-y-2">
                <div className="flex items-center justify-between text-white/70">
                    <p className="text-xs uppercase tracking-wide">{label}</p>
                    <span className="rounded-full bg-white/5 p-2">{icon}</span>
                </div>
                <p className="text-3xl font-semibold text-white">{value}</p>
            </div>
        </div>
    );
};