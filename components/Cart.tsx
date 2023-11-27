"use client";
import React, { useRef } from "react";
import Link from "next/link";
import { AiOutlineLeft, AiOutlineShopping } from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import { urlForImage } from "@/sanity/lib/image";
import { useCartContext } from "@/context/CartContext";
import { Quantity } from ".";
import { handlePayment } from "@/handlers/paymentHandler";

const Cart = () => {
  const cartRef = useRef<HTMLDivElement | null>(null);
  const {
    showCart,
    setShowCart,
    totalPrice,
    totalQuantities,
    cartItems,
    onRemove,
  } = useCartContext();

  if (showCart)
    return (
      <div className="cart-wrapper" ref={cartRef}>
        <div className="cart-container">
          <button
            type="button"
            className="cart-heading"
            onClick={() => setShowCart(!showCart)}
          >
            <AiOutlineLeft />
            <span className="heading">Your Cart</span>
            <span className="cart-num-items">({totalQuantities} items)</span>
          </button>
          {cartItems.length < 1 && (
            <div className="empty-cart">
              <AiOutlineShopping size={150} />
              <h3>Your cart is empty</h3>
              <Link href="/">
                <button
                  type="button"
                  className="btn"
                  onClick={() => setShowCart(!showCart)}
                >
                  Continue Shopping
                </button>
              </Link>
            </div>
          )}
          <div className="product-container">
            {cartItems.length >= 1 &&
              cartItems.map((item) => (
                <div className="product" key={item._id}>
                  <img
                    src={urlForImage(item.image[0]).url()}
                    alt=""
                    className="cart-product-image"
                  />
                  <div className="item-desc">
                    <div className="flex top">
                      <h5>{item.name}</h5>
                      <h4>SEK {item.price}</h4>
                    </div>
                    <div className="flex bottom">
                      <div>
                        <p className="quantity-desc">
                          <Quantity data="minusC" item={item} />
                          <Quantity data="qtyC" item={item} />
                          <Quantity data="plusC" item={item} />
                        </p>
                      </div>
                      <button
                        type="button"
                        className="remove-item"
                        onClick={() => onRemove(item)}
                      >
                        <TiDeleteOutline />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          {cartItems.length >= 1 && (
            <div className="cart-bottom">
              <div className="total">
                <h3>Subtotal:</h3>
                <h3>SEK {totalPrice}</h3>
              </div>
              <div className="btn-container">
                <button
                  type="button"
                  className="btn"
                  onClick={() => handlePayment(cartItems)}
                >
                  Pay with Stripe
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  else return null;
};

export default Cart;
