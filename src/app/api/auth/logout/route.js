import { NextResponse, NextRequest } from "next/server";
import connectionToDatabase from "@/lib/db";

connectionToDatabase();
export async function GET(NextRequest) {
  try {

    const response = NextResponse.json({
        message: "Logout Successfully",
        success: true
    })

    response.cookies.set("token", "", {
        httpOnly: true,
        expires: new Date (0)
    })

    return response;

  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Fail to logout user." },
      { status: 500 }
    );
  }
}
