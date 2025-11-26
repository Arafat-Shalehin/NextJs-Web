import { NextResponse, NextRequest } from "next/server";
import connectionToDatabase from "@/lib/db";
import User from "@/models/User";
import { getDataFromToken } from "@/lib/getDataFromToken";

connectionToDatabase();
export async function POST(NextRequest) {
  try {
    const userId = await getDataFromToken(NextRequest);
    const user = await User.findOne({ _id: userId }).select("-password -name");

    if (!user) {
      return NextResponse.json(
        { error: "User Not Found" },
        { status: 400 }
      );
    }

    return NextResponse.json({
      message: "User Found",
      data: user,
    });
  } catch (error) {
    console.log(error);
  }
}
