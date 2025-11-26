import {SiteToggle, ThemeToggle} from "@/features/AdminСabinet";

export const HeaderTitle = () => {

    return (
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
                <p className="text-sm uppercase tracking-wide text-yellow-400/80">Кабинет администратора</p>
                <h1 className="text-3xl font-semibold leading-tight text-white">
                    Управление заказами
                </h1>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end sm:gap-4">
                <SiteToggle/>
                <ThemeToggle />
            </div>
        </div>
    );
};
