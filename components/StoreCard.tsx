'use client';
import Image from 'next/image';
import { useRef } from 'react';
import { gsap } from 'gsap';

type StoreCardProps = {
  image: string;
  title: string;
  price: number;
  discount: number; // e.g. 20 for 20% off
  onAddToCart: () => void;
};

export default function StoreCard({ image, title, price, discount, onAddToCart }: StoreCardProps) {
  const discountedPrice = (price - (price * discount) / 100).toFixed(2);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = () => {
    if (buttonRef.current) {
      gsap.fromTo(
        buttonRef.current,
        { scale: 1 },
        {
          scale: 0.9,
          duration: 0.1,
          yoyo: true,
          repeat: 1,
          ease: 'power1.inOut',
        }
      );
    }
    onAddToCart(); // Call the original callback
  };

  return (
    <div className="relative w-full sm:w-[300px] h-fit bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl border-2 border-amber-400 transition-transform hover:scale-[1.02]">
      {/* Image container */}
      <div className="relative h-64 w-full">
        <Image
          src={`${image}`}
          alt={title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Info */}
      <div className="p-4 text-white">
        <h3 className="text-lg font-semibold">{title}</h3>
        <div className="flex items-center gap-3 mt-2">
          <span className="text-xl font-bold text-white/70">₦{discountedPrice}</span>
          {discount > 0 && (
            <span className="line-through text-sm text-gray-400">₦{price.toFixed(2)}</span>
          )}
          {discount > 0 && (
            <span className="ml-auto text-sm px-2 py-0.5 bg-red-500/30 text-red-200 rounded-full">
              -{discount}%
            </span>
          )}
        </div>

        <button
          ref={buttonRef}
          onClick={handleClick}
          className="mt-4 w-full py-2 px-4 rounded-lg bg-amber-500 border border-white/20 text-white hover:bg-amber-600 transition-colors text-sm backdrop-blur-lg"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
