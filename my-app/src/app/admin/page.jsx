"use client";
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const salesData = [
  { month: 'Jan', sales: 4000 },
  { month: 'Feb', sales: 3000 },
  { month: 'Mar', sales: 5000 },
  { month: 'Apr', sales: 2780 },
  { month: 'May', sales: 1890 },
  { month: 'Jun', sales: 2390 },
];

const DashboardContent = () => {
  return (
    <div className="lg:ml-64 p-4 md:p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-indigo-900">Dashboard</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
        <div className="bg-purple-100 p-6 rounded-lg shadow-md">
          <h2 className="text-lg md:text-xl font-semibold mb-2 text-purple-800">Total Sales</h2>
          <p className="text-2xl md:text-3xl font-bold text-purple-900">$24,567</p>
        </div>
        <div className="bg-blue-100 p-6 rounded-lg shadow-md">
          <h2 className="text-lg md:text-xl font-semibold mb-2 text-blue-800">Eco Products Sold</h2>
          <p className="text-2xl md:text-3xl font-bold text-blue-900">1,234</p>
        </div>
        <div className="bg-pink-100 p-6 rounded-lg shadow-md">
          <h2 className="text-lg md:text-xl font-semibold mb-2 text-pink-800">Customer Satisfaction</h2>
          <p className="text-2xl md:text-3xl font-bold text-pink-900">98%</p>
        </div>
      </div>

      <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
        <h2 className="text-xl md:text-2xl font-semibold mb-4 text-indigo-900">Monthly Sales</h2>
        <div className="h-64 md:h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="sales" stroke="#6366f1" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;