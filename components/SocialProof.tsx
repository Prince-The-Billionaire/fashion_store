'use client';
import React, { useEffect, useRef } from 'react';
import TestimonyCard from './TestimonyCard';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import useSound from 'use-sound';

gsap.registerPlugin(ScrollTrigger);

const SocialProof = () => {
  const containerRef = useRef(null);
  const statsRef = useRef<(HTMLHeadingElement | null)[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [playCountSound] = useSound('/sounds/count_up.mp3', { volume: 0.5 });
  const [playCardSound] = useSound('/sounds/cards.mp3', { volume: 0.5 });

  const stats = [
    { label: 'Customers WorldWide', value: 30000 },
    { label: 'Outfits Designed', value: 150000 },
    { label: 'Fashion Awards', value: 30 },
  ];

  useEffect(() => {
    if (!containerRef.current) return;

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top 80%',
      once: true,
      onEnter: () => {
        statsRef.current.forEach((el, i) => {
          if (!el) return;
          const value = stats[i].value;
          const obj = { count: 0 };
          gsap.to(obj, {
            count: value,
            duration: 2,
            ease: 'power2.out',
            onUpdate: () => {
              el.innerText = Math.floor(obj.count).toLocaleString();
            },
            onStart: () => playCountSound(),
            delay: i * 0.2,
          });
        });

        gsap.fromTo(
          cardRefs.current,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.3,
            ease: 'power3.out',
            onStart: () => playCardSound(),
          }
        );
      },
    });
  }, [playCountSound, playCardSound]);

  return (
    <section
      ref={containerRef}
      className="w-screen min-h-screen items-center justify-center px-4"
    >
      <div className="flex flex-row max-md:flex-col mt-36 -ml-24 max-md:ml-0 max-md:mt-12 justify-center text-center text-3xl items-center gap-10">
        {stats.map((stat, i) => (
          <div key={i}>
            <h1
              className="text-4xl font-bold"
              ref={(el) => {
                statsRef.current[i] = el;
              }}
            >
              0
            </h1>
            <p className="text-lg mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="flex max-md:flex-col items-center justify-center gap-10 mt-16">
        {[0, 1, 2].map((_, i) => (
          <div
            key={i}
            ref={(el) => {
              cardRefs.current[i] = el;
            }}
            className="opacity-0 translate-y-10"
          >
            <TestimonyCard />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SocialProof;