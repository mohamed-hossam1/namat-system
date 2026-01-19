import { LogOut, User } from "lucide-react";
import Confirm from "./alerts/Confirm";
import { useRef, useState } from "react";

import { signOut } from "next-auth/react";
import { useClickOutside } from "@/hooks/useClickOutside";

export default function UserLogout() {
  const [isConfirmVisible, setIsConfirmVisible] = useState(false);

  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useClickOutside(dropdownRef, () => setIsDropDownOpen(false), {
    enabled: isDropDownOpen,
    closeOnEsc: true,
  });

  const handleDropDown = () => {
    setIsDropDownOpen(!isDropDownOpen);
  };
  const handleLogout = () => {
    setIsDropDownOpen(false);
    setIsConfirmVisible(true);
  };
  const handleConfirmLogout = async () => {
    await signOut({ redirectTo: "/login" });
  };

  return (
    <>
      <div
        ref={dropdownRef}
        className="flex bg-background-secondary border border-border  p-[5px] rounded-[8px] text-text-color text-4xl ml-auto "
      >
        <button className="cursor-pointer" onClick={handleDropDown}>
          <User />
        </button>
        {isDropDownOpen && (
          <div className="absolute top-18 right-5 mt-2 w-48 bg-popover hover:bg-accent border border-border rounded-lg shadow-xl  z-500 animate-in fade-in zoom-in duration-200">
            <button
              className="flex items-center w-full h-full px-4 py-2 text-sm text-gray-700 rounded-lg  hover:bg-accent hover:text-red-600transition-colors cursor-pointer group"
              onClick={handleLogout}
            ></button>
          </div>
        )}
      </div>

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
