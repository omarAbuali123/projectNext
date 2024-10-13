"use client";
import { useState, useEffect } from "react";
import ProductList from "../../components/ProductList";
import { Recycle, Leaf, Globe } from "lucide-react";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("http://localhost:3000/api/products");
      const data = await response.json();
      setProducts(data);
    }
    fetchProducts();
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 py-16 h-96">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
                Give Clothes a Second Life
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                Discover, recycle, and revamp preloved fashion. Join the
                movement towards a sustainable future!
              </p>
              {/* <div className="flex space-x-4">
                <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-full transition duration-300">
                  Shop Now
                </button>
                <button className="bg-transparent hover:bg-green-100 text-green-500 font-semibold py-2 px-6 border border-green-500 rounded-full transition duration-300">
                  Learn More
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Icons Section */}
      <div className="bg-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-12">
            <div className="flex flex-col items-center">
              <Recycle className="h-12 w-12 text-green-500 mb-2" />
              <span className="text-sm font-medium">Recycle</span>
            </div>
            <div className="flex flex-col items-center">
              <Leaf className="h-12 w-12 text-green-500 mb-2" />
              <span className="text-sm font-medium">Sustainable</span>
            </div>
            <div className="flex flex-col items-center">
              <Globe className="h-12 w-12 text-green-500 mb-2" />
              <span className="text-sm font-medium">Eco-Friendly</span>
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Products</h2>
        <ProductList products={products} />
      </div>
    </div>
  );
}
