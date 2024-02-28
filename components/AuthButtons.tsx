"use client";

import { signIn, signOut } from "next-auth/react";

export const LoginButton = () => {
  const handleSignin = async () => {
    await signIn("google"); // { callbackUrl: "/protected" } redirect to the url if Loged in
  };

  return (
    <button className="border px-4 py-2" onClick={handleSignin}>
      Login with google
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
