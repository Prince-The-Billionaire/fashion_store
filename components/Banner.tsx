// components/ChildrenDayBanner.tsx
"use client";
import React from "react";
import Link from "next/link";
import { LuSparkles } from "react-icons/lu";
import Image from "next/image";

const ChildrenDayBanner = () => {
  return (
    <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-pink-900 via-amber-800 to-yellow-700 p-6 sm:p-10 shadow-lg my-8">
      {/* Sparkles Icon */}
      <div className="absolute top-4 left-4 text-white opacity-30 text-7xl animate-pulse">
        <LuSparkles />
        
      </div>

      {/* Text Content */}
      <div className="relative z-10 text-center sm:text-left flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
      <Image
            src="/children.png"
            alt="Sparkles"
            width={200}
            height={200}
            className="rounded-2xl  "
        />
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white drop-shadow">
            Children’s Day Mega Sale!
          </h2>
          <p className="text-white text-sm sm:text-base mt-2 max-w-md">
            Shop adorable outfits for your little stars with <strong>up to 50% off</strong>! Offer valid till May 30.
          </p>
        </div>

        <Link
          href="/category/children"
          className="bg-white text-pink-600 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-pink-100 transition duration-300 text-sm"
        >
          Shop Kidswear
        </Link>
      </div>
    </div>
  );
};

export default ChildrenDayBanner;
