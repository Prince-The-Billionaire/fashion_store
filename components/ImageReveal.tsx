// components/ImageReveal.tsx
'use client';
import { useRef, useEffect, useState } from 'react';

export default function ImageReveal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [maskStyle, setMaskStyle] = useState({});

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      setMaskStyle({
        WebkitMaskImage: `radial-gradient(circle 300px at ${x}px ${y}px, transparent 0%, black 100%)`,
        maskImage: `radial-gradient(circle 300px at ${x}px ${y}px, transparent 0%, black 100%)`,
      });
    };

    const node = containerRef.current;
    if (node) node.addEventListener('mousemove', handleMouseMove);

    return () => {
      if (node) node.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className='w-screen h-screen relative'>
        <div ref={containerRef} className="relative w-full h-screen overflow-hidden">
      <img
        src="/mask3.png"
        alt="Under"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <img
        src="/mask2.png"
        alt="Over"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        style={maskStyle}
      />
    </div>
    <div className='absolute z-[70] max-md:rotate-0 max-md:relative max-md:text-xl max-md:mx-12 max-md:right-0 max-md:top-10 -rotate-90 text-6xl top-[40%] text-center right-10 '>
        <p><span className='text-amber-600'>EXQUISITE</span> FASHION <br/> EXTRAORDINARY <span className='text-amber-600'> LUXURY</span></p>
    </div>
    </div>
  );
}
