"use client";
import { LogOut } from "lucide-react";
import Confirm from "./alerts/Confirm";
import { signOut } from "next-auth/react";
import { useState } from "react";

export default function LogoutButton({
  isCollapsed,
}: {
  isCollapsed: boolean;
}) {
  const [isConfirmVisible, setIsConfirmVisible] = useState(false);

  const handleLogout = () => {
    setIsConfirmVisible(true);
  };

  const handleConfirmLogout = async () => {
    await signOut({ redirectTo: "/login" });
  };
  return (
    <>
      <button
        onClick={handleLogout}
        className={`bg-card m-5 ${isCollapsed ? "p-1" : "p-3"}  flex items-center border-border border cursor-pointer rounded-2xl`}
      >
        <span className="flex items-center justify-center w-8 h-8 rounded-full  text-red-500 ">
          <LogOut />
        </span>
        {!isCollapsed && (
          <span className="font-medium text-text-color">Logout</span>
        )}
      </button>
      <Confirm
        isOpen={isConfirmVisible}
        setIsOpen={(flag) => setIsConfirmVisible(flag)}
        onConfirm={handleConfirmLogout}
        message="Are you sure you want to Logout?"
        button="Logout"
      />
    </>
  );
}
