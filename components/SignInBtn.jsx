"use client";

import Image from "next/image";
import {signIn} from "next-auth/react";

const SignInBtn = () => {
  return (
    <button
      onClick={() => signIn("google")}
      className="flex items-center gap-4 shadow-xl rounded-lg pl-4 mt-5">
      <Image
        alt="google-logo"
        width={30}
        height={30}
        src={"/google-logo.png"}
      />
      <span className="bg-blue-500 text-white px-4 py-3 rounded">
        Sign In with Google
      </span>
    </button>
  );
};

export default SignInBtn;
