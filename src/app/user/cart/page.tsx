"use client";

import React from "react";
import Image from "next/image";

const CartPage = () => {
  // Example cart data (replace with Redux or API data)
  const cartItems = [
    { id: 1, name: "Amul Milk", price: 80, quantity: 1, image: "/milk.png" },
    { id: 2, name: "Apple 1 kg", price: 199, quantity: 1, image: "/apple.png" },
    { id: 3, name: "Aashirwad Atta 10 kg", price: 499, quantity: 1, image: "/atta.png" },
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFee = 0;
  const total = subtotal + deliveryFee;

  return (
    <div className="w-[90%] md:w-[80%] mx-auto mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Cart Items */}
      <div className="md:col-span-2 bg-white rounded-2xl shadow-md p-6">
        <h2 className="text-2xl font-bold text-green-700 mb-6">Your Shopping Cart</h2>
        <div className="flex flex-col gap-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b border-gray-200 pb-4"
            >
              <div className="flex items-center gap-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={60}
                  height={60}
                  className="object-contain"
                />
                <div>
                  <h3 className="font-semibold text-gray-800">{item.name}</h3>
                  <p className="text-sm text-gray-500">₹{item.price.toFixed(2)}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button className="w-8 h-8 flex items-center justify-center rounded-full bg-green-100 hover:bg-green-200 transition">
                  -
                </button>
                <span className="font-semibold">{item.quantity}</span>
                <button className="w-8 h-8 flex items-center justify-center rounded-full bg-green-100 hover:bg-green-200 transition">
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Order Summary */}
      <div className="bg-white rounded-2xl shadow-md p-6 h-fit">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Order Summary</h2>
        <div className="flex justify-between text-gray-600 mb-2">
          <span>Subtotal:</span>
          <span>₹{subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-gray-600 mb-2">
          <span>Delivery Fee:</span>
          <span>₹{deliveryFee.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-bold text-green-700 text-lg mb-6">
          <span>Total:</span>
          <span>₹{total.toFixed(2)}</span>
        </div>
        <button className="w-full bg-green-600 hover:bg-green-700 text-white rounded-full py-2 font-medium mb-3">
          Proceed to Checkout
        </button>
        <button className="w-full bg-red-500 hover:bg-red-600 text-white rounded-full py-2 font-medium">
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default CartPage;
