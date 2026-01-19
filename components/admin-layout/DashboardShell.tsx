"use client";

import { useState } from "react";
import Header from "@/components/admin-layout/Header";
import Sidebar from "@/components/admin-layout/Sidebar";

export default function DashboardShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <div className="flex relative bg-foreground">
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] -z-10 bg-primary/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-[10%] right-[%] w-[40%] h-[40%] bg-primary/10 blur-[150px] rounded-full" />

      <Sidebar isMobileOpen={isMobileOpen} setIsMobileOpen={setIsMobileOpen} />

      <main className="flex-1 flex flex-col mr-4">
        <Header setIsMobileOpen={setIsMobileOpen} />

        <div className="bg-background rounded-2xl mt-5">{children}</div>
      </main>
    </div>
  );
}
