"use client";

import './style.css'
import {Container} from "@/shared/ui/container";
import {useAppSelector} from "@/common/hooks/useAppSelector";
import {AdminOrderDetails} from "@/widgets/Admin/admin-order-details";
import {AdminOrdersList} from "@/widgets/Admin/admin-orders-list";
import {AdminStats} from "@/widgets/Admin/admin-stats";
import {AdminStopList} from "@/widgets/Admin/admin-stop-list";
import {HeaderTitle} from "@/widgets/Admin/admin-header";
import {selectThemeMode} from "@/entities/admin/theme/model/slice";

export default function AdminCabinetPage() {

  const theme = useAppSelector(selectThemeMode);

  const pageClasses = theme === 'dark'
      ? 'bg-[#050505] text-white'
      : `adminPageLight bg-[#f7f7f8] text-gray-900`;

  return (
      <main className={`admin-page ${pageClasses} min-h-screen transition-all duration-300`}>
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