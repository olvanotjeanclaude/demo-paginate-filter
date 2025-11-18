export interface User {
  id: string;
  name: string;
  role: "Admin" | "User";
  age: number;
}

export const ROLES: Array<"Admin" | "User"> = ["Admin", "User"];

export type Role = "Admin" | "User" | "ALL";
