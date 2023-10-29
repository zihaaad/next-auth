"use client";
import Link from "next/link";
import SignInBtn from "./SignInBtn";
import {useState} from "react";
import {useRouter} from "next/navigation";

const RegisterFrom = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      setError("All Fields Are Required");
    }

    try {
      const resUserExists = await fetch("api/userExists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({email}),
      });

      const {user} = await resUserExists.json();

      if (user) {
        setError("User Already Exists");
        return;
      }

      const res = await fetch("api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({name, email, password}),
      });
      if (res.ok) {
        const form = e.target;
        form.reset();
        router.push("/");
      } else {
        console.log("User Registration Failed");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="grid place-items-center mt-24">
      <div className="shadow-lg p-5 rounded-lg border-t-4 border-green-400">
        <h1 className="text-xl font-bold my-4">Register</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Full Name"
          />
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
            Register
          </button>

          {error && (
            <div className="bg-red-500 rounded text-sm text-white py-1 px-3 mt-2 w-fit">
              {error}
            </div>
          )}
          <Link className="text-sm text-right" href={"/"}>
            Already Have an Account? <span className="underline">Login</span>
          </Link>
        </form>
      </div>
      <SignInBtn />
    </div>
  );
};

export default RegisterFrom;
