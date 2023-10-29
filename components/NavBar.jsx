import Link from "next/link";

const NavBar = () => {
  return (
    <div className="flex justify-between p-4 items-center shadow-md">
      <Link className="font-semibold text-2xl text-indigo-500" href={"/"}>
        NextAuth.js
      </Link>
      <button className="bg-slate-900 text-white px-6 py-2 rounded-md">
        Sign In
      </button>
    </div>
  );
};

export default NavBar;
