"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useCart } from "@/contexts/CartContext";
import Swal from "sweetalert2";

export default function ProductDetailsPage({ params }) {
  const { dispatch } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = params;

  const handleAddToCart = () => {
    if (product) {
      dispatch({ type: "ADD_TO_CART", payload: product });

      Swal.fire({
        title: "Added to Cart!",
        text: `${product.name} has been added to your cart.`,
        icon: "success",
        confirmButtonText: "Continue Shopping",
        timer: 3000,
        timerProgressBar: true,
      });
    }
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/products/${id}`,
          {
            cache: "no-store",
          }
        );

        if (!response.ok) {
          throw new Error("Product not found");
        }

        const productData = await response.json();
        setProduct(productData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div className="text-center text-2xl mt-10">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-2xl mt-10">{error}</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 items-center min-h-screen content-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative aspect-square">
          <Image
            src={product.picture[0]}
            alt={product.name}
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-gray-600 mb-6">{product.description}</p>
            <p className="text-2xl font-semibold mb-6">
              ${product.price.toFixed(2)}
            </p>
          </div>
          <button
            onClick={handleAddToCart}
            className="w-full bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-600 transition duration-300 text-lg font-semibold"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
