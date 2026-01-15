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
      <Sidebar isMobileOpen={isMobileOpen} setIsMobileOpen={setIsMobileOpen} />

      <main className="flex-1 flex flex-col">
        <Header setIsMobileOpen={setIsMobileOpen} />

        <div className="bg-background rounded-2xl mt-5">{children}</div>
      </main>
    </div>
  );
}
