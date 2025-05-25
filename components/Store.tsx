"use client";
import React, { useState } from 'react';
import StoreCard from './StoreCard';
import useSound from 'use-sound';
import { useToast } from '@/hooks/use-toast';
import { Toaster } from './ui/toaster';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useCartStore } from '@/store/cartStore';

const Store = () => {
    const [play] = useSound('/sounds/click.mp3', { volume: 3 });
    const [notify] = useSound('/sounds/notify.mp3', { volume: 0.3 });
    const {setItems,items} = useCartStore()
    const { toast } = useToast();
    const [page, setPage] = useState(1);
    const itemsPerPage = 6;
  
    const handleAddToCart = () => {
      setItems(items + 1);
      play();
      notify();
      toast({
        title: "Added to Cart",
        description: "You have added this item to your cart",
      });
    };
  
    const data = [
        {
            image: "/red_track.png",
            title: "Elegant Track",
            price: 15000,
            discount: 20,
            onAddToCart: () => handleAddToCart()
        },
        {
            image: "/vest.png",
            title: "Chic Vest",
            price: 12000,
            discount: 10,
            onAddToCart: () => handleAddToCart()
        },
        {
            image: "/singlet.png",
            title: "Elegant Singlet",
            price: 15000,
            discount: 20,
            onAddToCart: () => handleAddToCart()
        },
        {
            image: "/sweater.png",
            title: "Chic Sweater",
            price: 12000,
            discount: 10,
            onAddToCart: () => handleAddToCart()
        },
        {
            image: "/suit.png",
            title: "Nice Suit",
            price: 15000,
            discount: 20,
            onAddToCart: () => handleAddToCart()
        },
        {
            image: "/white_hoodie.png",
            title: "Chic Hoodie",
            price: 12000,
            discount: 10,
            onAddToCart: () => handleAddToCart()
        },
        {
            image: "/red_track.png",
            title: "Elegant Ankara",
            price: 15000,
            discount: 20,
            onAddToCart: () => handleAddToCart()
        },
        {
            image: "/vest.png",
            title: "Chic Casual",
            price: 12000,
            discount: 10,
            onAddToCart: () => handleAddToCart()
        }
    ]
  
    const totalPages = Math.ceil(data.length / itemsPerPage);
    const paginatedData = data.slice(
      (page - 1) * itemsPerPage,
      page * itemsPerPage
    );
  
    return (
      <div className="px-12 pt-10 min-h-screen">
        <div className='flex flex-row max-md:flex-col items-center justify-between mt-5'>
          <h1 className='text-5xl max-md:text-xl max-md:mt-24'>Order to your Taste</h1>
          <div className='flex flex-row  max-md:mt-10  gap-5 items-center'>
            <input
              type='search'
              placeholder='search here...'
              className='w-[300px] max-md:w-fit h-8 rounded-xl p-5 border border-white/50 bg-white/5 text-white'
            />
            <button className='bg-amber-500 max-md:px-2 max-md:py-2 text-white h-fit w-fit rounded-xl p-3 px-10'>
              Search
            </button>
          </div>
        </div>
  
        <div className='p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-gradient-to-b from-black via-gray-900 rounded-2xl via-90% to-amber-500/20 min-h-screen'>
          {paginatedData.map((item, index) => (
            <StoreCard
              key={index}
              image={item.image}
              title={item.title}
              price={item.price}
              discount={item.discount}
              onAddToCart={item.onAddToCart}
            />
          ))}
        </div>
  
        {/* Pagination */}
        <div className="mt-10 flex justify-center">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                  className={page === 1 ? "pointer-events-none opacity-30" : "cursor-pointer"}
                />
              </PaginationItem>
              <PaginationItem className="text-white px-3 py-1 rounded bg-white/10">
                Page {page} of {totalPages}
              </PaginationItem>
              <PaginationItem>
                <PaginationNext
                  onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
                  className={page === totalPages ? "pointer-events-none opacity-30" : "cursor-pointer"}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
  
        <Toaster />
      </div>
    );
  };
  
  export default Store;
  