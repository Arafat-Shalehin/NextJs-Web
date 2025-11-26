"use client"

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";

export default function ProfilePage() {
  const router = useRouter();
  const [data, setData] = useState("No Data");

  const getUserDetails = async () => {
    try {
      const res = await axios.post("/api/auth/profile");
      console.log(res.data);
      setData(res.data.data._id);
    } catch (error) {
      console.log(error);
    }
  };

  const logOut = async () => {
    try {
      await axios.get("/api/auth/logout");
      console.log("Logout Successful");
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="py-10 text-center space-y-5">
      <h1>Profile page</h1>
      <hr />
      <h2>
        {data === "No Data" ? (
          "No Data"
        ) : (
          <Link href={`/profile/${data}`}>{data}</Link>
        )}
      </h2>
      <hr />
      <button onClick={logOut} className="mr-3 px-6 py-1 rounded bg-blue-700 text-white">LogOut</button>
      <button onClick={getUserDetails} className="px-6 py-1 rounded bg-green-700 text-white">Get User Data</button>
    </div>
  );
}
