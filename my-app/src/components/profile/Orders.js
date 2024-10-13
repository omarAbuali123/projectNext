import React, { useState, useEffect } from 'react';

const Orders = ({ userId }) => {
  const [orders, setOrders] = useState({ scheduled: [], completed: [] });

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch(`/api/profile/orders/${userId}`);

        if (response.ok) {
          const data = await response.json();
          setOrders(data);
        } else {
          throw new Error('Failed to fetch orders');
        }
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, [userId]);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Orders</h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-2">Scheduled Orders</h3>
          {orders.scheduled.map(order => (
            <div key={order._id} className="border p-4 rounded mb-2">
              <p>Order ID: {order._id}</p>
              <p>Total Price: ${order.totalPrice}</p>
              <p>Status: {order.status}</p>
            </div>
          ))}
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Completed Orders</h3>
          {orders.completed.map(order => (
            <div key={order._id} className="border p-4 rounded mb-2">
              <p>Order ID: {order._id}</p>
              <p>Total Price: ${order.totalPrice}</p>
              <p>Status: {order.status}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Orders;
