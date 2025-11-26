import {Button} from "@/components/ui";
import {Power} from "lucide-react";
import {useState} from "react";


export const SiteToggle = () => {

    const [siteOnline, setSiteOnline] = useState(true);

    return (
        <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
            <div>
                <p className="text-xs uppercase text-white/60">Сайт для пользователей</p>
                <p className="text-lg font-medium">{siteOnline ? "Включён" : "Отключён"}</p>
            </div>
            <Button
                variant={siteOnline ? "destructive" : "default"}
                className="bg-yellow-400 text-black hover:bg-yellow-300"
                onClick={() => setSiteOnline((prev) => !prev)}
            >
                <Power className="size-4" />
                {siteOnline ? "Отключить" : "Включить"}
            </Button>
        </div>


    );
};
