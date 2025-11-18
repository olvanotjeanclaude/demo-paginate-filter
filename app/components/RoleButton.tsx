"use client";

import { Role } from "@/type";
import { Shield, User as UserIcon } from "lucide-react";

interface RoleButtonProps {
  role: Role;
  isActive: boolean;
  onClick: () => void;
}

export const ROLES: Array<Exclude<Role, "ALL">> = ["Admin", "User"];

export function RoleButton({ role, isActive, onClick }: RoleButtonProps) {
  const baseStyles = "px-4 py-2 rounded-lg font-medium transition-all duration-200 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-blue-500";

  if (role === "ALL") {
    return (
      <button
        onClick={onClick}
        className={`${baseStyles} ${
          isActive
            ? "bg-gray-700 text-white"
            : "bg-gray-800 text-gray-300 hover:bg-gray-700"
        }`}
      >
        Clear Filter
      </button>
    );
  }

  const isAdminRole = role === "Admin";

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} flex items-center gap-2 ${
        isActive
          ? isAdminRole
            ? "bg-amber-600 text-white shadow-lg shadow-amber-600/50"
            : "bg-blue-600 text-white shadow-lg shadow-blue-600/50"
          : isAdminRole
          ? "bg-amber-950 text-amber-200 hover:bg-amber-900"
          : "bg-blue-950 text-blue-200 hover:bg-blue-900"
      }`}
    >
      {isAdminRole ? <Shield size={16} /> : <UserIcon size={16} />}
      {role}
    </button>
  );
}
