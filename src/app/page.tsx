import DashboardLayout from "@/layout/dashboard-layout";
import Contents from "@/parts/content";

import Image from "next/image";

export default function Home() {
  return (
    <>
      <DashboardLayout>
        <Contents />
      </DashboardLayout>
    </>
  );
}
