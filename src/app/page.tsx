import { auth } from "@/auth";
import AdminDashboard from "@/components/AdminDashboard";
import DeliveryBoyDashboard from "@/components/DeliveryBoyDashboard";
import EditRoleMobile from "@/components/EditRoleMobile";
import Nav from "@/components/Navbar";
import UserDashboard from "@/components/UserDashboard";
import connectDB from "@/lib/db";
import User from "@/models/user.model";
import { redirect } from "next/navigation";
import React from "react";

async function Home() {
  await connectDB();
  const session = await auth();

  // If no session, redirect
  if (!session?.user?.id) {
    redirect("/login");
  }

  // Find user in DB
  const user = await User.findById(session.user.id);
  if (!user) {
    redirect("/login");
  }

  const inComplete =
    !user.mobile || !user.role || (!user.mobile && user.role == "user");
  if (inComplete) {
    return <EditRoleMobile />;
  }

  const plainuser = JSON.parse(JSON.stringify(user));
  return (
    <>
      <Nav user={plainuser} />
      {user.role == "user" ? (
        <UserDashboard />
      ) : user.role == "admin" ? (
        <AdminDashboard />
      ) : (
        <DeliveryBoyDashboard />
      )}
    </>
  );
}

export default Home;
