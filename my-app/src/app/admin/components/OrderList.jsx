"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Package, DollarSign, Truck } from 'lucide-react';

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchOrders = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('/api/admin/orders');
      if (!response.ok) {
        throw new Error('Failed to fetch orders');
      }
      const data = await response.json();
      setOrders(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'pending': return 'text-yellow-600 bg-yellow-100';
      case 'processing': return 'text-blue-600 bg-blue-100';
      case 'shipped': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="lg:ml-64 p-4 md:p-8 bg-white min-h-screen">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-purple-900">Order List</h2>
      {isLoading && <p className="text-purple-600">Loading orders...</p>}
      {error && <p className="text-red-600">Error: {error}</p>}
      <motion.ul 
        className="space-y-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.1 }}
      >
        {orders.map((order) => (
          <motion.li 
            key={order._id} 
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-purple-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex flex-wrap items-center justify-between">
              <h3 className="font-semibold text-lg text-purple-800 mb-2 md:mb-0">
                <Package className="inline mr-2" size={20} />
                Order ID: {order._id}
              </h3>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                {order.status}
              </span>
            </div>
            <div className="mt-3 flex flex-wrap items-center justify-between">
              <p className="text-purple-600 flex items-center">
                <DollarSign className="mr-1" size={18} />
                Total: ${order.total}
              </p>
              <button className="mt-2 md:mt-0 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors duration-300 flex items-center">
                <Truck className="mr-2" size={18} />
                Update Status
              </button>
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default OrderList;