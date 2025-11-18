"use client";

import { CONFIG } from "@/config";
import { faker } from "@faker-js/faker/locale/fr";
import { useEffect, useState, useMemo } from "react";
import { usePagination } from "react-paginate-filter";
import { Search, Loader2, Users } from "lucide-react";
import { PaginationButton } from "./PaginationButton";
import { RoleButton, ROLES } from "./RoleButton";
import { UserCard } from "./UserCard";
import { User } from "@/type";

export default function Demo() {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const generateUsers = async () => {
      await new Promise((resolve) => setTimeout(resolve, 300));

      const generated: User[] = Array.from(
        { length: CONFIG.TOTAL_USERS },
        (_, index) => ({
          id: `user_${index}_${Date.now()}`,
          name: faker.person.fullName(),
          role: faker.helpers.arrayElement([...ROLES]),
          age: faker.number.int({
            min: CONFIG.MIN_AGE,
            max: CONFIG.MAX_AGE,
          }),
        })
      );

      setUsers(generated);
      setIsLoading(false);
    };

    generateUsers();
  }, []);

  const {
    paginatedData,
    search,
    setSearch,
    filters,
    setFilter,
    currentPage,
    totalPages,
    setCurrentPage,
  } = usePagination(users, {
    itemsPerPage: CONFIG.ITEMS_PER_PAGE,
    searchKeys: ["name", "role"],
  });

  const activeRoleFilter = useMemo(() => {
    return filters.role || null;
  }, [filters]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <Loader2 size={48} className="text-blue-500 animate-spin" />
          </div>
          <p className="text-gray-400 text-lg font-medium">
            Generating user data...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center justify-center gap-3 mb-2">
            <Users className="text-blue-500" size={40} />
            <h1 className="text-3xl sm:text-4xl font-bold text-white">
              User Directory
            </h1>
          </div>
          <p className="text-gray-400 text-center">
            Manage and filter {users.length} users with ease
          </p>
        </div>

        <div className="mb-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div className="relative flex-1">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
              size={20}
            />
            <input
              type="text"
              placeholder="Search by name or role..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-gray-800 border border-gray-700 rounded-xl pl-12 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              aria-label="Search users"
            />
          </div>

          <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
            <RoleButton
              role="Admin"
              isActive={activeRoleFilter === "Admin"}
              onClick={() => setFilter("role", "Admin")}
            />
            <RoleButton
              role="User"
              isActive={activeRoleFilter === "User"}
              onClick={() => setFilter("role", "User")}
            />
            <RoleButton
              role="ALL"
              isActive={activeRoleFilter === null}
              onClick={() => setFilter("role", null)}
            />
          </div>

          <div className="text-center text-gray-400 text-sm lg:text-left">
            <p>
              Showing{" "}
              <span className="font-semibold text-gray-300">
                {paginatedData.length}
              </span>{" "}
              of{" "}
              <span className="font-semibold text-gray-300">
                {users.length}
              </span>{" "}
              users
            </p>
          </div>
        </div>

        {paginatedData.length > 0 ? (
          <div className="space-y-3 mb-8">
            {paginatedData.map((user) => (
              <UserCard key={user.id} user={user} />
            ))}
          </div>
        ) : (
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-12 text-center mb-8">
            <Users className="text-gray-600 mx-auto mb-4" size={48} />
            <p className="text-gray-400 text-lg">
              No users found matching your criteria
            </p>
          </div>
        )}

        <div className="flex items-center justify-center gap-2 bg-gray-800 border border-gray-700 rounded-xl p-4 flex-wrap">
          <PaginationButton
            direction="prev"
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Prev
          </PaginationButton>

          <div className="flex items-center gap-2 px-6 py-2">
            <span className="text-gray-400 text-sm">
              Page{" "}
              <span className="font-semibold text-white text-base">
                {currentPage}
              </span>{" "}
              of{" "}
              <span className="font-semibold text-white text-base">
                {totalPages}
              </span>
            </span>
          </div>

          <PaginationButton
            direction="next"
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </PaginationButton>
        </div>
      </div>
    </div>
  );
}
