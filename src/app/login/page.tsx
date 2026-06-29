"use client";

import {
  Leaf,
  Mail,
  Lock,
  Eye,
  EyeOff,
  LogIn,
  Loader2,
} from "lucide-react";
import React, { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import googleImage from "@/assets/google.png";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const session = useSession();
  console.log(session);

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signIn("credentials", {
        email,
        password,
        redirect: false, // prevents auto redirect, lets you handle manually
      });

        router.push("/"); // redirect to homepage or dashboard
        setLoading(false);
      }
    catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-10 bg-white relative">
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-3xl font-bold text-green-700 mb-2"
      >
        Welcome back
      </motion.h1>
      <p className="text-gray-600 mb-6 flex items-center gap-1">
        Login to YourMart <Leaf className="w-5 h-5 text-green-600" />
      </p>

      {/* Form */}
      <motion.form
        onSubmit={handleLogin}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col gap-5 w-full max-w-sm"
      >
        {/* Email */}
        <div className="relative">
          <Mail className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border py-3 pl-10 pr-4 text-gray-800 focus:ring-2 focus:ring-green-500 focus:outline-none rounded-md"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        {/* Password */}
        <div className="relative">
          <Lock className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Your Password"
            className="w-full border py-3 pl-10 pr-10 text-gray-800 focus:ring-2 focus:ring-green-500 focus:outline-none rounded-md"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          {showPassword ? (
            <EyeOff
              className="absolute right-3 top-3.5 w-5 h-5 text-gray-500 cursor-pointer"
              onClick={() => setShowPassword(false)}
            />
          ) : (
            <Eye
              className="absolute right-3 top-3.5 w-5 h-5 text-gray-500 cursor-pointer"
              onClick={() => setShowPassword(true)}
            />
          )}
        </div>

        {/* Login button */}
        {(() => {
          const formValidation = email !== "" && password !== "";
          return (
            <button
              disabled={!formValidation || loading}
              className={`w-full font-semibold py-3 rounded-md transition-all duration-200 shadow-md inline-flex items-center justify-center gap-2 ${
                formValidation
                  ? "bg-green-600 hover:bg-green-700 text-white"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              {loading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                "Login"
              )}
            </button>
          );
        })()}

        {/* Divider */}
        <div className="flex items-center gap-2 text-gray-400 text-sm mt-2">
          <span className="flex-1 h-px bg-gray-200"></span>
          OR
          <span className="flex-1 h-px bg-gray-200"></span>
        </div>

        {/* Google sign-in */}
        <button
          type="button"
          className="w-full flex items-center justify-center gap-3 border border-gray-300 hover:bg-gray-50 py-3 rounded-md text-gray-700 font-medium transition-all duration-200"
          onClick={() => signIn("google", { callbackUrl: "/" })}
        >
          <Image src={googleImage} width={20} height={20} alt="google" />
          Continue with Google
        </button>
      </motion.form>

      {/* Footer */}
      <p
        className="text-gray-600 mt-6 text-sm flex items-center gap-1 cursor-pointer"
        onClick={() => router.push("/register")}
      >
        Want to create an account?
        <LogIn className="w-4 h-4 text-green-600" />
        <span className="text-green-600 hover:underline">Sign Up</span>
      </p>
    </div>
  );
};

export default Login;
