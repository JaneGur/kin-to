"use client";

import style from './style.module.css'
import {Container} from "@/shared/ui/container";
import {AdminOrderDetails, AdminOrdersList, AdminStats, AdminStopList, HeaderTitle} from "@/widgets/AdminCabinet/ui";
import {useAppSelector} from "@/common/hooks/useAppSelector";
import {selectThemeMode} from "@/app/admin/admin-slice";

export default function AdminCabinetPage() {

  const theme = useAppSelector(selectThemeMode)

  return (
    <main className={`admin-page ${theme === 'dark' ? "admin-page--dark" : style.adminPageLight} bg-[#050505] text-white min-h-screen`}>
      <Container className="px-4 py-8 space-y-8">
        <section className="flex flex-col gap-4">
          <HeaderTitle />
          <AdminStats />
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
          <AdminOrdersList />
          <div className="space-y-4">
            <AdminOrderDetails />
            <AdminStopList />
          </div>
        </section>
      </Container>
    </main>
  );
}





