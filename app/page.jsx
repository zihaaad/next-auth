import {LoginForm} from "@/components/LoginForm";
import {getServerSession} from "next-auth";
import {redirect} from "next/navigation";
import {authOptions} from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (session) redirect("/dashboard");
  return (
    <div className="grid place-items-center mt-24">
      <LoginForm />
    </div>
  );
}
