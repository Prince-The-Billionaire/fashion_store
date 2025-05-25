// store/categoryStore.ts
import { create } from 'zustand';

type CategoryState = {
  category: string;
  setCategory: (newCategory: string) => void;
};

export const useCategoryStore = create<CategoryState>((set) => ({
  category: 'Corporate', // default value
  setCategory: (newCategory) => set({ category: newCategory }),
}));
