"use client";
import React, { useState, useEffect } from "react";
import { useCartOperations } from "../../hooks/useCart";
import Image from "next/image";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Elements } from "@stripe/react-stripe-js";
import StripePaymentForm from "@/components/StripePaymentForm";
import stripePromise from "@/lib/stripe";

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity, getCartTotal } =
    useCartOperations();
  const [clientSecret, setClientSecret] = useState("");
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [isMounted, setIsMounted] = useState(false); // Track if the component has mounted

  useEffect(() => {
    setIsMounted(true);
    const total = getCartTotal();
    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Include the token from the cookie if needed
        Authorization: `Bearer ${document.cookie.replace(
          /(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/,
          "$1"
        )}`,
      },
      body: JSON.stringify({ amount: total * 100 }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const handlePaymentSuccess = async (paymentIntentId) => {
    try {
      const orderProducts = cart.map((item) => item._id);
      const totalPrice = getCartTotal();

      const response = await fetch("/api/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Include the token from the cookie
          Authorization: `Bearer ${document.cookie.replace(
            /(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/,
            "$1"
          )}`,
        },
        body: JSON.stringify({
          orderProducts,
          totalPrice,
          deliveryAddress,
          paymentIntentId,
        }),
      });

      if (response.ok) {
        const { order } = await response.json();
        setPaymentStatus({
          type: "success",
          message: `Payment successful! Order ID: ${order._id}`,
        });
        // Clear cart or perform other post-payment actions
      } else {
        throw new Error("Failed to create order");
      }
    } catch (error) {
      console.error("Error creating order:", error);
      setPaymentStatus({
        type: "error",
        message:
          "Payment successful, but order creation failed. Please contact support.",
      });
    }
  };

  const handlePaymentError = (message) => {
    setPaymentStatus({ type: "error", message });
  };

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  if (!isMounted) {
    return null; // Return null on the server to prevent hydration mismatch
  }

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row md:space-x-8">
      <div className="md:w-2/3">
        <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            {cart.map((item) => (
              <div
                key={item._id}
                className="flex items-center justify-between border-b py-4"
              >
                <div className="flex gap-2 items-end">
                  <Image
                    src={item.picture[0]}
                    alt={item.name}
                    width={60}
                    height={60}
                  />
                  <div>
                    <h2 className="font-semibold">{item.name}</h2>
                    <p className="text-gray-600">${item.price.toFixed(2)}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={() =>
                      updateQuantity(item._id, Math.max(1, item.quantity - 1))
                    }
                    className="px-2 py-1 bg-gray-200 rounded"
                  >
                    -
                  </button>
                  <span className="mx-2">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item._id, item.quantity + 1)}
                    className="px-2 py-1 bg-gray-200 rounded"
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeFromCart(item._id)}
                    className="ml-4 text-red-500"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </>
        )}
      </div>

      <div className="md:w-1/3 mt-8 md:mt-0">
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Payment</h2>
          <p className="text-lg font-semibold mb-4">
            Total: ${getCartTotal().toFixed(2)}
          </p>
          {clientSecret && (
            <Elements options={options} stripe={stripePromise}>
              <StripePaymentForm
                clientSecret={clientSecret}
                onPaymentSuccess={handlePaymentSuccess}
                onPaymentError={handlePaymentError}
              />
            </Elements>
          )}
          {paymentStatus && (
            <Alert
              className="mt-4"
              variant={
                paymentStatus.type === "success" ? "default" : "destructive"
              }
            >
              <AlertTitle>
                {paymentStatus.type === "success"
                  ? "Payment Successful"
                  : "Payment Failed"}
              </AlertTitle>
              <AlertDescription>{paymentStatus.message}</AlertDescription>
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
