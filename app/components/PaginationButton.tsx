"use client";

import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationButtonProps {
  onClick: () => void;
  disabled?: boolean;
  children: React.ReactNode;
  direction: "prev" | "next";
}

export function PaginationButton({
  onClick,
  disabled = false,
  children,
  direction,
}: PaginationButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
        disabled
          ? "bg-gray-800 text-gray-600 cursor-not-allowed opacity-50"
          : "bg-gray-800 text-gray-200 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
      }`}
      aria-label={direction === "prev" ? "Previous page" : "Next page"}
    >
      {direction === "prev" && <ChevronLeft size={18} />}
      {children}
      {direction === "next" && <ChevronRight size={18} />}
    </button>
  );
}
