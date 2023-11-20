import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";
import { connect } from "../route";

export async function POST(req: NextRequest) {
  try {
    await connect();
    const data = await req.json();
    const { username, password } = data;

    const foundUser = await User.findOne({
      username: username,
    });

    if (!foundUser) {
      console.log("User not found");
      return NextResponse.json({ status: 404 });
    }
    if (foundUser) {
      console.log("User found", foundUser);
      return NextResponse.json({ foundUser }, { status: 200 });
    }
  } catch (err) {
    return NextResponse.json({ err }, { status: 500 });
  }
}
