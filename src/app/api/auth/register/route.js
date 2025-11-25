import { NextResponse, NextRequest } from "next/server";
import connectionToDatabase from "@/lib/db";
import User from "@/models/User";

export async function POST(NextRequest) {
  try {
    const { email, password } = await NextRequest.json();
    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and Password are required." },
        { status: 400 }
      );
    }

    await connectionToDatabase();

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return NextResponse.json(
        { error: "Email already exist." },
        { status: 400 }
      );
    }

    await User.create({
      email,
      password,
    });

    return NextResponse.json(
      { message: "User registered successfully." },
      { status: 201 }
    );

    // const {name, email} = await NextRequest.json()
    // const newUser = new User({name, email})
    // await newUser.save()
    // return NextResponse.json(newUser, {status: 201})
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Fail to register user." },
      { status: 500 }
    );
  }
}
