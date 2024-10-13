"use client";
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      <button
        onClick={toggleSidebar}
        className="lg:hidden fixed top-4 left-4 z-20 p-2 bg-indigo-600 text-white rounded-md"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      <div
        className={`
          fixed top-0 left-0 z-10
          lg:translate-x-0 lg:w-64
          h-full w-64 bg-white text-indigo-900 shadow-md
          transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <Link href="/admin" className="block">
          <h1 className="text-2xl font-bold p-4 text-indigo-900 hover:text-indigo-700">Admin Dashboard</h1>
        </Link>
        <ul className="flex-grow">
          <li className="hover:bg-indigo-100 p-2">
            <Link href="/admin/products" className="block">Products</Link>
          </li>
          <li className="hover:bg-indigo-100 p-2">
            <Link href="/admin/orders" className="block">Orders</Link>
          </li>
          <li className="hover:bg-indigo-100 p-2">
            <Link href="/admin/appointments" className="block">Appointments</Link>
          </li>
          <li className="hover:bg-indigo-100 p-2">
            <Link href="/admin/contact" className="block">Contact Messages</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;