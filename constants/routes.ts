import {
  Blocks,
  CalendarDays,
  LayoutDashboard,
  Logs,
  Users,
} from "lucide-react";

export const ROUTES = {
  LABDING: "/",
  LOGIN: "/login",
  ADMIN: "/admin",
  USERS: "/admin/users",
  CALENDAR: "/admin/calendar",
  PROJECTS: "/admin/projects",
  ACTIVITYLOG: "/admin/activity-log",
};

export const NAV_ITEMS = [
  {
    label: "Dashboard",
    href: ROUTES.ADMIN,
    icon: LayoutDashboard,
  },
  {
    label: "Calendar",
    href: ROUTES.CALENDAR,
    icon: CalendarDays,
  },
  {
    label: "Projects",
    href: ROUTES.PROJECTS,
    icon: Blocks,
  },
  {
    label: "Users",
    href: ROUTES.USERS,
    icon: Users,
  },
  {
    label: "Activity Logs",
    href: ROUTES.ACTIVITYLOG,
    icon: Logs,
  },
];
