// src/app/admin/orders/page.jsx

"use client";

import OrderList from '../components/OrderList';

const OrdersPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Order List</h1>
      <OrderList />
    </div>
  );
};

export default OrdersPage;
