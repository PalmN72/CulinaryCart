"use client";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useReducer,
} from "react";
import { toast } from "react-hot-toast";

type CartValueT = {
  showCart: boolean;
  cartItems: any[];
  totalPrice: number;
  totalQuantities: number;
  qty: number;
  incQty: () => void;
  decQty: () => void;
};

const cartDefaultValues: CartValueT = {
  showCart: false,
  cartItems: [],
  totalPrice: 0,
  totalQuantities: 0,
  qty: 0,
  incQty: () => {},
  decQty: () => {},
};

const CartContext = createContext<CartValueT>(cartDefaultValues);

type Props = {
  children: React.ReactNode;
};

export const CartContextProvider = ({ children }: Props) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [totalQuantities, setTotalQuantities] = useState<number>(0);
  const [qty, setQty] = useState(1);

  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  };

  const decQty = () => {
    setQty((prevQty) => Math.max(prevQty - 1, 0));
  };

  const contextValue: CartValueT = {
    showCart,
    cartItems,
    totalPrice,
    totalQuantities,
    qty,
    incQty,
    decQty,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export const useCartContext = (): CartValueT => {
  return useContext(CartContext);
};
