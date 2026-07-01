"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Package } from "lucide-react";
import Link from "next/link";

const OrderSuccess = () => {
  return (
    <div className="relative overflow-hidden flex flex-col items-center justify-center min-h-screen text-center bg-linear-to-b from-green-50 via-white to-green-100 px-6">

      {/* Background Glow */}
      <div className="absolute -top-28 -left-28 w-72 h-72 bg-green-300/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-28 -right-28 w-80 h-80 bg-green-200/30 rounded-full blur-3xl" />

      {/* Floating Particles */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute top-20 left-[10%] w-3 h-3 bg-green-400 rounded-full"
      />

      <motion.div
        animate={{ scale: [1, 1.5, 1] }}
        transition={{ repeat: Infinity, duration: 2.5 }}
        className="absolute top-32 left-[30%] w-2 h-2 bg-green-500 rounded-full"
      />

      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
        className="absolute top-24 left-[50%] w-2 h-2 bg-green-400 rounded-full"
      />

      <motion.div
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute top-16 left-[70%] w-3 h-3 bg-green-500 rounded-full"
      />

      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 2.8 }}
        className="absolute bottom-24 left-[15%] w-3 h-3 bg-green-300 rounded-full"
      />

      <motion.div
        animate={{ scale: [1, 1.7, 1] }}
        transition={{ repeat: Infinity, duration: 3 }}
        className="absolute bottom-20 right-[18%] w-2 h-2 bg-green-500 rounded-full"
      />

      <motion.div
        animate={{ opacity: [0.2, 1, 0.2] }}
        transition={{ repeat: Infinity, duration: 2.5 }}
        className="absolute bottom-10 left-[45%] w-2 h-2 bg-green-400 rounded-full"
      />

      {/* Success Icon */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{
          opacity: 1,
          scale: [0.8, 1.1, 1],
        }}
        transition={{ duration: 0.8 }}
      >
        <CheckCircle className="w-24 h-24 text-green-600 drop-shadow-2xl" />
      </motion.div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-3xl sm:text-4xl font-bold text-green-700 mt-6"
      >
        Order Placed Successfully 🎉
      </motion.h1>

      {/* Message */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-gray-600 text-center max-w-md mt-4 mb-8 leading-7"
      >
        Thank you for shopping with us! Your order has been placed and is
        being processed. You can track its progress in your{" "}
        <span className="font-semibold text-green-700">
          My Orders
        </span>{" "}
        section.
      </motion.p>

      {/* Package Icon */}
      <motion.div
        initial={{ opacity: 0, rotate: -20 }}
        animate={{
          opacity: 1,
          rotate: 0,
          y: [0, -10, 0],
        }}
        transition={{
          duration: 0.7,
          y: {
            repeat: Infinity,
            duration: 2,
          },
        }}
        className="mb-8"
      >
        <Package className="w-16 h-16 text-green-600 drop-shadow-xl" />
      </motion.div>

      {/* Button */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <Link href="/user/my-orders">
          <button className="group relative overflow-hidden bg-green-600 text-white px-7 py-3 rounded-xl font-semibold shadow-lg hover:bg-green-700 hover:scale-105 transition-all duration-300">
            <span className="relative z-10">
              Go to My Orders →
            </span>

            <span className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
          </button>
        </Link>
      </motion.div>

      {/* Decorative Ring */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="absolute w-52 h-52 border border-green-200 rounded-full opacity-20"
      />
    </div>
  );
};

export default OrderSuccess;