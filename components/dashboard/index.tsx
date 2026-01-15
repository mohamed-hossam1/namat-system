// components/staffDashboard/index.tsx
"use client";
import { useEffect, useState } from "react";
import {
  Wallet,
  Coins,
  CheckCircle,
  Clock,
  TrendingUp,
  DollarSign,
  Activity,
} from "lucide-react";

import StatsCard from "./StatsCard";
import ChartCard from "./ChartCard";
import ActivityCard from "./ActivityCard";
import QuickActions from "./QuickActions";
import DonutChart from "./DonutChart";

const StaffDashboard = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [recentActivities, setRecentActivities] = useState<any[]>([]);

  // useEffect(() => {
  //   fetchDashboardData();
  // }, []);

  // const fetchDashboardData = async () => {
  //   try {
  //     setLoading(true);

  //     const { data: cashRequests } = await getAllCash();
  //     const { data: expenses } = await getAllExpenses();

  //     const dashboardStats: StaffStats = {
  //       cashRequests: {
  //         total: cashRequests.length,
  //         pending: cashRequests.filter((c: any) => c.status === "PENDING")
  //           .length,
  //         approved: cashRequests.filter((c: any) => c.status === "APPROVED")
  //           .length,
  //         rejected: cashRequests.filter((c: any) => c.status === "REJECTED")
  //           .length,
  //         disbursed: cashRequests.filter((c: any) => c.status === "DISBURSED")
  //           .length,
  //         totalAmount: cashRequests.reduce(
  //           (sum: number, c: any) => sum + (c.amount || 0),
  //           0
  //         ),
  //       },
  //       expenses: {
  //         total: expenses.length,
  //         verified: expenses.filter((e: any) => e.verified === true).length,
  //         unverified: expenses.filter((e: any) => e.verified === false).length,
  //         totalAmount: expenses.reduce(
  //           (sum: number, e: any) => sum + (e.amount || 0),
  //           0
  //         ),
  //       },
  //     };

  //     setStats(dashboardStats);

  //     const recent = [
  //       ...cashRequests
  //         .slice(0, 4)
  //         .map((c: any) => ({ type: "Cash Request", ...c })),
  //       ...expenses.slice(0, 4).map((e: any) => ({ type: "Expense", ...e })),
  //     ]
  //       .sort(
  //         (a, b) =>
  //           new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  //       )
  //       .slice(0, 5);

  //     setRecentActivities(recent);
  //   } catch (error) {
  //     console.error("Error fetching dashboard data:", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-100 space-y-4">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
        <p className="text-slate-500 font-medium">Loading dashboard...</p>
      </div>
    );
  }

  if (!stats) return null;


  return (
    <div className="p-4 md:p-6 space-y-6">
      <div className="relative  overflow-hidden bg-card rounded-2xl p-6 md:p-8 shadow-lg border border-border/50">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-foreground/10 rounded-full blur-3xl -mr-32 -mt-32" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-foreground/5 rounded-full blur-3xl -ml-24 -mb-24" />

        <div className="relative">
          <div className="flex items-center gap-2 mb-2">
            <Activity size={24} className="text-primary-foreground" />
            <span className="text-xs font-bold text-primary-foreground uppercase tracking-wider">
              Dashboard
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-text-color mb-2">
            Welcome Back!
          </h1>
          <p className="text-secondary text-sm md:text-base">
            Here's your financial overview and recent activities
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        <StatsCard
          title="Total Requests"
          value={10}
          icon={Wallet}
          subtitle={`$${10}`}
        />
        <StatsCard
          title="Pending"
          value={10}
          icon={Clock}
          subtitle="Awaiting approval"
        />
      </div>

      {/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
        <QuickActions />
        <div className="lg:col-span-2">
          <DonutChart
            title="Expenses Overview"
            data={expensesDonutData}
            centerLabel="Expenses"
          />
        </div>
      </div> */}

      {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        <ChartCard
          title="Requests Status"
          data={requestsChartData}
          type="bar"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <StatsCard
            title="Approval Rate"
            value={`${approvalRate}%`}
            icon={TrendingUp}
            subtitle={`6 of 18 approved`}
          />
          <StatsCard
            title="Average Request"
            value={`${
              stats.cashRequests.total > 0
                ? Math.round(
                    stats.cashRequests.totalAmount / stats.cashRequests.total
                  ).toLocaleString()
                : 0
            }`}
            icon={DollarSign}
            subtitle={`Per cash request`}
          />
          <StatsCard
            title="Verification Rate"
            value={`${verificationRate}%`}
            icon={CheckCircle}
            subtitle={`${stats.expenses.verified} of ${stats.expenses.total} verified`}
          />
        </div>
      </div> */}

      <ActivityCard activities={recentActivities} />
    </div>
  );
};

export default StaffDashboard;
