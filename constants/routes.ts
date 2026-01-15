import { LayoutDashboard, Users } from "lucide-react";


export const ROUTES = {
  LABDING: "/",
  LOGIN: "/login",
  ADMIN: "/admin",
  USERS: "/admin/users",
};

export const NAV_ITEMS = [
  {
    label: "Dashboard",
    href: ROUTES.ADMIN,
    icon: LayoutDashboard,
  },
  {
    label: "Users",
    href: ROUTES.USERS,
    icon: Users,
  },
];
