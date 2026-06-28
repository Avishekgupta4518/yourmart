"use client";

import React, { useState } from "react";
import { UserCog, User, Bike, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import axios from "axios";
import { useRouter } from "next/navigation";

const EditRoleMobile = () => {
  const [roles] = useState([
    { id: "admin", label: "Admin", icon: UserCog },
    { id: "user", label: "User", icon: User },
    { id: "deliveryBoy", label: "Delivery Boy", icon: Bike },
  ]);
  const [selectedRole, setSelectedRole] = useState("");
  const [mobile, setMobile] = useState("");
  const router = useRouter();

  const handleEdit = async () => {
    try {
      await axios.post("/api/user/edit-role-mobile", {
        role: selectedRole,
        mobile,
      });
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen p-6 w-full items-center justify-center bg-white">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-extrabold text-green-700 text-center mt-8"
      >
        Select Your Role
      </motion.h1>

      {/* Role options */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-10">
        {roles.map((role) => {
          const Icon = role.icon;
          const isSelected = selectedRole === role.id;
          return (
            <motion.div
              key={role.id}
              whileTap={{ scale: 0.94 }}
              onClick={() => setSelectedRole(role.id)}
              className={`flex flex-col items-center justify-center w-48 h-44 rounded-2xl border-2 transition-all ${
                isSelected
                  ? "border-green-600 bg-green-100 shadow-lg"
                  : "border-gray-300 bg-white hover:border-green-400"
              }`}
            >
              <Icon className="w-8 h-8 text-green-600 mb-2" />
              <span className="font-medium">{role.label}</span>
            </motion.div>
          );
        })}
      </div>

      {/* Mobile input */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="flex flex-col items-center mt-10"
      >
        <label
          htmlFor="mobile"
          className="text-gray-700 font-medium mb-2"
        >
          Enter your mobile no.
        </label>
        <input
          type="tel"
          id="mobile"
          placeholder="Enter Your Mobile No. (eg. 0000000000)"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          className="w-64 md:w-80 px-4 py-3 border rounded-xl mb-6 border-gray-300 focus:ring-2 focus:ring-green-500 focus:outline-none text-gray-800"
        />
      </motion.div>

      {/* Submit button */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        onClick={handleEdit}
        disabled={mobile.length !== 10 || !selectedRole}
        className={`inline-flex items-center gap-2 font-semibold py-3 px-8 rounded-2xl shadow-md transition-all duration-200 w-50 ${
          selectedRole && mobile.length === 10
            ? "bg-green-600 hover:bg-green-700 text-white"
            : "bg-gray-300 text-gray-500 cursor-not-allowed"
        }`}
      >
        Go to home
        <ArrowRight />
      </motion.button>
    </div>
  );
};

export default EditRoleMobile;
