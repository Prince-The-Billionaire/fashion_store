// components/BottomBar.tsx
'use client';

import { useCategoryStore } from '@/store/categoryStore';
import useSound from 'use-sound';
import { FaBriefcase, FaLeaf, FaTshirt, FaGift } from 'react-icons/fa';

const categories = [
  { name: 'Corporate', icon: <FaBriefcase size={24} /> },
  { name: 'Ankara', icon: <FaLeaf size={24} /> },
  { name: 'Casual', icon: <FaTshirt size={24} /> },
  { name: 'Christmas', icon: <FaGift size={24} /> },
];

export default function BottomBar() {
  const { category, setCategory } = useCategoryStore();
  const [play] = useSound('/sounds/click.mp3', { volume: 3 });

  return (
    <div className="sticky top-[95%] left-[40%] z-50 backdrop-blur-lg max-md:gap-4 max-md:left-[0] max-md:w-screen bg-black/20 border-t w-fit gap-10 border-white/20 rounded-t-xl shadow-md flex justify-around items-center py-3 px-4">
      {categories.map((cat) => (
        <button
          key={cat.name}
          onClick={() => {
            setCategory(cat.name);
            play();
          }}
          className={`flex flex-col max-sm:text-xs items-center gap-1 text-sm transition-all ${
            category === cat.name ? 'text-amber-500' : 'text-gray-400'
          }`}
        >
          {cat.icon}
          <span>{cat.name}</span>
        </button>
      ))}
    </div>
  );
}
