"use client";

import { signIn, signOut } from "next-auth/react";

export const LoginButton = () => {
  return (
    <button className="border px-4 py-2" onClick={() => signIn()}>
      Login
    </button>
  );
};

export const LogoutButton = () => {
  return (
    <button className="border px-4 py-2" onClick={() => signOut()}>
      Logout
    </button>
  );
};
