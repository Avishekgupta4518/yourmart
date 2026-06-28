"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShoppingBasket, Bike, ArrowRight } from "lucide-react";
type propType={
    nextStep:(s:number)=>void
}
const Welcome = ({nextStep}:propType
) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-6 bg-linear-to-b from-green-100 to-white">
      
      {/* Logo + Title */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex items-center gap-3"
      >
        <ShoppingBasket className="w-10 h-10 text-green-600" />
        <h1 className="text-4xl md:text-5xl font-extrabold text-green-700">
          SnapCart
        </h1>
      </motion.div>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-lg md:text-xl text-gray-600 mt-4 max-w-xl"
      >
        Your one-stop destination for fresh groceries, organic products, and
        daily essentials delivered right to your doorstep.
      </motion.p>

      {/* Icons showcase */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="flex items-center justify-center gap-10 mt-10"
      >
        <ShoppingBasket className="w-24 h-24 md:w-32 md:h-32 text-green-600 drop-shadow-md" />
        <Bike className="w-24 h-24 md:w-32 md:h-32 text-orange-500 drop-shadow-md" />
      </motion.div>

      {/* Call-to-action button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="mt-10 flex items-center gap-2 px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 hover:shadow-lg transition-all"
        onClick={()=>nextStep(2)}
      >
        Next
        <ArrowRight className="w-5 h-5" />
      </motion.button>
    </div>
  );
};

export default Welcome;
