import User from "@/models/User";
import { FieldType } from "@/types";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";
const mongoURL: any = process.env.DB_URL;

export async function connect() {
  // connect
  let client;
  try {
    client = await mongoose.connect(mongoURL);
    console.log("conect db successfully!");
    Response.json({ message: "Connect successfully" }, { status: 200 });
  } catch (err) {
    console.log(err);
    Response.json({ message: "Connect failed" }, { status: 500 });
  }
}

async function RegisterUser(data: FieldType) {
  try {
    const newUser = await new User({
      username: data.username,
      email: data.email,
      password: data.password,
    });
    const user = await newUser.save();
    return Response.json({ user }, { status: 201 });
  } catch (err) {
    return Response.json({ err }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  // connect
  try {
    await connect();
    const data = await req.json();
    await RegisterUser(data);
    return NextResponse.json(
      { message: "Register successfully!" },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json({ message: "Register failed!" }, { status: 500 });
  }
}
