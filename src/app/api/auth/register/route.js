import { NextResponse, NextRequest } from "next/server";
import connectionToDatabase from "@/lib/db";
import User from "@/models/User";
import bcryptjs from 'bcryptjs';

export async function POST(NextRequest) {
  try {
    const { name, email, password } = await NextRequest.json();
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

    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const savedUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    console.log(savedUser);

    return NextResponse.json(
      { message: "User registered successfully." },
      { status: 201 }
    );

  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Fail to register user." },
      { status: 500 }
    );
  }
}
