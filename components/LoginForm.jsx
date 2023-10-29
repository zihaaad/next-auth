"use client";

import Link from "next/link";
import React, {useState} from "react";
import SignInBtn from "./SignInBtn";
import {signIn} from "next-auth/react";
import {useRouter} from "next/navigation";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res.error) {
        setError("Invailed Credentials");
      }
      router.replace("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="grid place-items-center mt-24">
      <div className="shadow-lg p-5 rounded-lg border-t-4 border-green-400">
        <h1 className="text-xl font-bold my-4">Enter The Details</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
          <button
            className="bg-green-600 text-white font-bold cursor-pointer px-6 py-2"
            type="submit">
            Login
          </button>

          {error && (
            <div className="bg-red-500 rounded text-sm text-white py-1 px-3 mt-2 w-fit">
              {error}
            </div>
          )}
          <Link className="text-sm text-right" href={"/register"}>
            Don't Have an Account? <span className="underline">Register</span>
          </Link>
        </form>
      </div>
      <SignInBtn />
    </div>
  );
};
