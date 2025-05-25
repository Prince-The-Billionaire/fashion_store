import {create} from 'zustand'

type CartItem = {
    items: number;
    setItems: (newitems : number) => void;
}

export const useCartStore = create<CartItem>((set) => ({
    items:0,
    setItems: (newitems:number) => set({items:newitems})
}))

