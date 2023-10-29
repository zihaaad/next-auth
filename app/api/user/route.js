import {connectMongoDB} from "@/lib/mongodb";
import GoogleUser from "@/models/googleUser";
// import User from "@/models/user";
import {NextResponse} from "next/server";

export async function POST(req) {
  const {name, email} = await req.json();
  await connectMongoDB();
  await GoogleUser.create({name, email});
  return NextResponse.json({message: "User Registered"}, {status: 201});
}
