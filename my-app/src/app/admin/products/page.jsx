// src/app/admin/products/page.jsx

"use client";

import ProductForm from '../components/ProductForm';

const ProductsPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Manage Products</h1>
      <ProductForm />
    </div>
  );
};

export default ProductsPage;
