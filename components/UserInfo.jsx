"use client";

import {useSession} from "next-auth/react";
import Image from "next/image";
import {LoginForm} from "./LoginForm";
import {useRouter} from "next/navigation";

const UserInfo = () => {
  const router = useRouter();
  const {status, data: session} = useSession();

  if (status === "authenticated") {
    console.log(session);
    return (
      <div className="flex items-center gap-4 ">
        {session?.user?.image && (
          <Image
            height={90}
            width={90}
            className="rounded-2xl"
            src={session.user.image}
            alt="user-image"
          />
        )}
        <div>
          <h4 className="text-2xl font-semibold">{session.user.name}</h4>
          <p>{session.user.email}</p>
        </div>
      </div>
    );
  } else {
    return <LoginForm />;
  }
};

export default UserInfo;
