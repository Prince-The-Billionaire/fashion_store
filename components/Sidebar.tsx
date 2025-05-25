"use client";
import { useCartStore } from '@/store/cartStore';
import Image from 'next/image';
import React from 'react';
import { FaHome, FaTshirt, FaGift, FaBriefcase, FaShoppingCart } from 'react-icons/fa';

const Sidebar = () => {
  const {items} = useCartStore()
  return (
    <nav
      className="
        fixed top-48 left-0 h-fit rounded-2xl max-md:top-0 max-md:flex-row max-md:w-full max-md:justify-between
        max-md:h-10 max-md:rounded-none max-md:p-1  w-20
        bg-white/10 backdrop-blur-lg border-r border-white/30
        flex flex-col items-center py-8 gap-8
        text-white
        z-50
      "
    >
      <a href="#home" className="hover:text-amber-400 transition-colors" title="Home">
        <Image src={'/luxury.png'} alt="Logo" width={50} height={50} className="rounded-full" />
      </a>
      <a href="#casual" className="hover:text-amber-400 transition-colors" title="Casual">
        Shop
      </a>
      <a href="#christmas" className="hover:text-amber-400 transition-colors" title="Christmas">
        Blogs
      </a>
      <a href="#corporate" className="hover:text-amber-400 relative transition-colors" title="Corporate">
        <div className='bg-amber-500 rounded-full size-5 items-center absolute -right-2 -top-3 flex justify-center  text-white text-center'>{items}</div>
        <FaShoppingCart size={28} />
      </a>
    </nav>
  );
};

export default Sidebar;
