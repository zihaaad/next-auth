"use client";

import SignInBtn from "./SignInBtn";
import {useSession} from "next-auth/react";
import Image from "next/image";

const UserInfo = () => {
  const {status, data: session} = useSession();

  if (status === "authenticated") {
    console.log(session);
    return (
      <div className="flex items-center gap-4 ">
        <Image
          height={90}
          width={90}
          className="rounded-2xl"
          src={session.user.image}
          alt="user-image"
        />
        <div>
          <h4 className="text-2xl font-semibold">{session.user.name}</h4>
          <p>{session.user.email}</p>
        </div>
      </div>
    );
  } else {
    return <SignInBtn />;
  }
};

export default UserInfo;
