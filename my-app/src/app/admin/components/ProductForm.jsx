"use client";

import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { PlusCircle, Edit2, Trash2 } from 'lucide-react';

const ProductForm = () => {
  const [product, setProduct] = useState({ name: '', price: '', img_url: '' });
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const response = await fetch('/api/admin/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      });

      if (!response.ok) {
        throw new Error('Failed to create product');
      }

      const data = await response.json();
      setSuccess('Product created successfully!');
      setProduct({ name: '', price: '', img_url: '' });
      fetchProducts(); // Refresh the product list
    } catch (err) {
      setError(err.message);
    }
  };

  const fetchProducts = async () => {
    try {
      const response = await fetch('/api/admin/products');
      const result = await response.json();
      if (result.success) {
        setProducts(result.data);
      } else {
        setError('Failed to fetch products');
      }
    } catch (err) {
      setError('Failed to fetch products');
    }
  };

  const handleUpdate = async (product) => {
    const { value: formValues } = await Swal.fire({
      title: 'Update Product',
      html:
        `<input id="name" class="swal2-input" placeholder="Product Name" value="${product.name}">` +
        `<input id="price" class="swal2-input" placeholder="Price" value="${product.price}">` +
        `<input id="img_url" class="swal2-input" placeholder="Image URL" value="${product.img_url}">`,
      focusConfirm: false,
      preConfirm: () => {
        return {
          _id: product._id,
          name: document.getElementById('name').value,
          price: document.getElementById('price').value,
          img_url: document.getElementById('img_url').value,
        };
      },
    });

    if (formValues) {
      try {
        const response = await fetch('/api/admin/products', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formValues),
        });

        if (!response.ok) {
          throw new Error('Failed to update product');
        }

        setSuccess('Product updated successfully!');
        fetchProducts();
      } catch (err) {
        setError(err.message);
      }
    }
  };

  const handleDelete = async (productId) => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
    });

    if (result.isConfirmed) {
      try {
        const response = await fetch('/api/admin/products', {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ _id: productId }),
        });

        if (!response.ok) {
          throw new Error('Failed to delete product');
        }

        setSuccess('Product deleted successfully!');
        fetchProducts();
      } catch (err) {
        setError(err.message);
      }
    }
  };

  useEffect(() => {
    fetchProducts(); // Fetch products on component mount
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-50">
      <h1 className="text-3xl font-bold text-indigo-800 mb-8">Product Management</h1>
      
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Add New Product</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role="alert">{error}</div>}
          {success && <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-4" role="alert">{success}</div>}
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Product Name</label>
              <input
                type="text"
                name="name"
                value={product.name}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Price</label>
              <input
                type="number"
                name="price"
                value={product.price}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Image URL</label>
            <input
              type="text"
              name="img_url"
              value={product.img_url}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <button type="submit" className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300 flex items-center">
            <PlusCircle size={20} className="mr-2" />
            Add Product
          </button>
        </form>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Existing Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((prod) => (
            <div key={prod._id} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition duration-300">
              <img src={prod.img_url} alt={prod.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{prod.name}</h3>
                <p className="text-indigo-600 font-bold mt-1">${prod.price}</p>
                <div className="flex justify-between mt-4">
                  <button
                    onClick={() => handleUpdate(prod)}
                    className="bg-yellow-500 text-white py-2 px-3 rounded-md hover:bg-yellow-600 transition duration-300 flex items-center"
                  >
                    <Edit2 size={16} className="mr-1" />
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(prod._id)}
                    className="bg-red-600 text-white py-2 px-3 rounded-md hover:bg-red-700 transition duration-300 flex items-center"
                  >
                    <Trash2 size={16} className="mr-1" />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductForm;