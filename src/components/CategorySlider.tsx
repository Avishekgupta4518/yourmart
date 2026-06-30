"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Apple,
  Milk,
  Wheat,
  Cookie,
  Flame,
  Coffee,
  Heart,
  Home,
  Box,
  Baby,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const CategorySlider = () => {
  const categories = [
    {
      id: 1,
      name: "Fruits & Vegetables",
      icon: Apple,
      color: "bg-green-100",
    },
    {
      id: 2,
      name: "Dairy & Eggs",
      icon: Milk,
      color: "bg-yellow-100",
    },
    {
      id: 3,
      name: "Rice, Atta & Grains",
      icon: Wheat,
      color: "bg-orange-100",
    },
    {
      id: 4,
      name: "Snacks & Biscuits",
      icon: Cookie,
      color: "bg-pink-100",
    },
    {
      id: 5,
      name: "Spices & Masalas",
      icon: Flame,
      color: "bg-red-100",
    },
    {
      id: 6,
      name: "Beverages & Drinks",
      icon: Coffee,
      color: "bg-blue-100",
    },
    {
      id: 7,
      name: "Personal Care",
      icon: Heart,
      color: "bg-purple-100",
    },
    {
      id: 8,
      name: "Household Essentials",
      icon: Home,
      color: "bg-lime-100",
    },
    {
      id: 9,
      name: "Instant & Packaged Food",
      icon: Box,
      color: "bg-teal-100",
    },
    {
      id: 10,
      name: "Baby & Pet Care",
      icon: Baby,
      color: "bg-rose-100",
    },
  ];

  const scrollRef = useRef<HTMLDivElement>(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScroll = () => {
    if (!scrollRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

    setCanScrollLeft(scrollLeft > 5);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
  };

  useEffect(() => {
  const interval = setInterval(() => {
    if (!scrollRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

    if (scrollLeft + clientWidth >= scrollWidth - 5) {
      // Go back to the beginning
      scrollRef.current.scrollTo({
        left: 0,
        behavior: "smooth",
      });
    } else {
      // Move right
      scrollRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  }, 2000);

  return () => clearInterval(interval);
}, []);
  const smoothUpdate = () => {
    let frame: number;

    const update = () => {
      checkScroll();

      if (!scrollRef.current) return;

      const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;

      if (
        scrollLeft > 5 &&
        scrollLeft + clientWidth < scrollWidth - 5
      ) {
        frame = requestAnimationFrame(update);
      } else {
        checkScroll();
        cancelAnimationFrame(frame);
      }
    };

    requestAnimationFrame(update);
  };

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({
      left: -250,
      behavior: "smooth",
    });

    smoothUpdate();
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({
      left: 250,
      behavior: "smooth",
    });

    smoothUpdate();
  };

  useEffect(() => {
    const slider = scrollRef.current;
    if (!slider) return;

    slider.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);

    checkScroll();

    return () => {
      slider.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  return (
    <motion.div
      className="w-[90%] md:w-[80%] mx-auto mt-10 relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.5 }}
    >
      <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-6 text-center">
        🛒 Shop by Category
      </h2>

      {/* Left Button */}
      {canScrollLeft && (
        <button 
          onClick={scrollLeft}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white rounded-full shadow-lg w-10 h-10 flex items-center justify-center hover:bg-green-100 transition"
        >
          <ChevronLeft className="w-6 h-6 text-green-700" />
        </button>
      )}

      {/* Categories */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto px-10 pb-4 scrollbar-hide scroll-smooth"
      >
        {categories.map((cat) => {
          const Icon = cat.icon;

          return (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: cat.id * 0.05,
              }}
              className={`flex flex-col items-center justify-center min-w-35 p-6 rounded-2xl shadow-md hover:shadow-lg hover:scale-105 transition cursor-pointer ${cat.color}`}
            >
              <Icon className="w-8 h-8 text-green-700 mb-2" />

              <span className="text-sm font-semibold text-gray-700 text-center">
                {cat.name}
              </span>
            </motion.div>
          );
        })}
      </div>

      {/* Right Button */}
      {canScrollRight && (
        <button
          onClick={scrollRight}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white rounded-full shadow-lg w-10 h-10 flex items-center justify-center hover:bg-green-100 transition"
        >
          <ChevronRight className="w-6 h-6 text-green-700" />
        </button>
      )}
    </motion.div>
  );
};

export default CategorySlider;