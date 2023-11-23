"use client";
import { ProductT } from "@/types/types";
import React, { createContext, useContext, useState } from "react";
import { toast } from "react-hot-toast";

type CartValueT = {
  showCart: boolean;
  setShowCart: (state: boolean) => void;
  cartItems: any[];
  totalPrice: number;
  totalQuantities: number;
  qty: number;
  toggleCartItemQuantity: (id: any, value: any) => void;
  onRemove: (product: any) => void;
  incQty: () => void;
  decQty: () => void;
  onAdd: (product: any, quantity: number) => void;
};

const cartDefaultValues: CartValueT = {
  showCart: false,
  setShowCart: () => {},
  cartItems: [],
  totalPrice: 0,
  totalQuantities: 0,
  qty: 0,
  onRemove: () => {},
  toggleCartItemQuantity: () => {},
  incQty: () => {},
  decQty: () => {},
  onAdd: () => {},
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

  let foundProduct: ProductT;

  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  };

  const decQty = () => {
    setQty((prevQty) => Math.max(prevQty - 1, 0));
  };

  const onAdd = (product: ProductT, quantity: number) => {
    const checkProductIncart = cartItems.find(
      (item) => item._id === product._id
    );

    setTotalPrice(
      (prevTotalPrice) => prevTotalPrice + product.price * quantity
    );

    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);

    if (checkProductIncart) {
      const updatedCartItems = cartItems.map((cartProduct) => {
        if (cartProduct._id === product._id)
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + quantity,
          };
      });

      setCartItems(updatedCartItems);
    } else {
      product.quantity = quantity;
      setCartItems([...cartItems, { ...product }]);
    }
    toast.success(`${qty} ${product.name} added to cart.`);
  };

  const onRemove = (product: ProductT) => {
    foundProduct = cartItems.find((product) => product._id === product._id);

    const newCartItems = cartItems.filter((item) => item._id !== product._id);
    setCartItems(newCartItems);
    setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price);
    setTotalQuantities(
      (prevTotalQuantities) => prevTotalQuantities - foundProduct.quantity
    );
  };

  const toggleCartItemQuantity = (id: string, value: string) => {
    foundProduct = cartItems.find((item) => item._id === id);

    if (value === "inc") {
      const updatedData = cartItems.map((item) =>
        item._id === id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedData);
      setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price);
      setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1);
    } else if (value === "dec") {
      if (foundProduct.quantity > 1) {
        const updatedData = cartItems.map((item) =>
          item._id === id ? { ...item, quantity: item.quantity - 1 } : item
        );
        setCartItems(updatedData);
        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price);
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - 1);
      }
    }
  };

  const contextValue: CartValueT = {
    showCart,
    setShowCart,
    cartItems,
    totalPrice,
    totalQuantities,
    qty,
    incQty,
    decQty,
    onAdd,
    toggleCartItemQuantity,
    onRemove,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export const useCartContext = (): CartValueT => {
  return useContext(CartContext);
};
