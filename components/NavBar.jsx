"use client";

import Link from "next/link";
import {signIn, signOut, useSession} from "next-auth/react";

const NavBar = () => {
  const {status} = useSession();
  return (
    <div className="flex justify-between p-4 items-center shadow-md">
      <Link className="font-semibold text-2xl text-indigo-500" href={"/"}>
        NextAuth.js
      </Link>
      {status === "authenticated" ? (
        <button
          onClick={() => signOut()}
          className="bg-slate-900 text-white px-6 py-2 rounded-md">
          Sign Out
        </button>
      ) : (
        <Link
          href={"/login"}
          className="bg-slate-900 text-white px-6 py-2 rounded-md">
          Login
        </Link>
      )}
    </div>
  );
};

export default NavBar;
