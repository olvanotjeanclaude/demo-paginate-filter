"use client";

import { Shield, User as UserIcon } from "lucide-react";

interface User {
  id: string;
  name: string;
  role: "Admin" | "User";
  age: number;
}

interface UserCardProps {
  user: User;
}

export function UserCard({ user }: UserCardProps) {
  const getRoleBadgeStyles = (role: User["role"]) =>
    role === "Admin"
      ? "bg-amber-600/20 text-amber-400 border border-amber-600/30"
      : "bg-blue-600/20 text-blue-400 border border-blue-600/30";

  const getRoleIcon = (role: User["role"]) =>
    role === "Admin" ? <Shield size={14} /> : <UserIcon size={14} />;

  return (
    <div className="bg-gray-800 border border-gray-700 rounded-xl p-4 transition-all duration-200 hover:border-gray-600 hover:shadow-lg hover:shadow-gray-900/50">
      <div className="flex items-center justify-between gap-4">
        {/* User Name */}
        <div className="flex-1 min-w-0">
          <h3 className="text-white font-semibold text-base truncate">
            {user.name}
          </h3>
        </div>

        {/* Role Badge + Age */}
        <div className="flex items-center gap-3 shrink-0">
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1.5 ${getRoleBadgeStyles(
              user.role
            )}`}
          >
            {getRoleIcon(user.role)}
            {user.role}
          </span>
          <span className="text-gray-400 text-sm font-medium whitespace-nowrap">
            {user.age} years
          </span>
        </div>
      </div>
    </div>
  );
}
