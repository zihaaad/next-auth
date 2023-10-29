import Image from "next/image";

const SignInBtn = () => {
  return (
    <button className="flex items-center gap-4 shadow-xl rounded-lg pl-4">
      <Image width={30} height={30} src={"/google-logo.png"} />
      <span className="bg-blue-500 text-white px-4 py-3 rounded">
        Sign In with Google
      </span>
    </button>
  );
};

export default SignInBtn;
