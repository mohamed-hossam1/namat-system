import DashboardShell from "@/components/admin-layout/DashboardShell";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="overflow-hidden">
      <DashboardShell>{children}</DashboardShell>
    </div>
  );
}
