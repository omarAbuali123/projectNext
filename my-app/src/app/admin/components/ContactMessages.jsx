"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, AlertCircle } from 'lucide-react';

const ContactMessages = () => {
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState('');

  const fetchMessages = async () => {
    try {
      const response = await fetch('/api/admin/contact');
      if (!response.ok) {
        throw new Error('Failed to fetch messages');
      }
      const data = await response.json();
      setMessages(data.data);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <div className="lg:ml-64 p-4 md:p-8 bg-white min-h-screen">
      <h2 className="text-2xl md:text-3xl font-bold text-indigo-600 mb-6">Contact Messages</h2>
      {error && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4 rounded"
        >
          <div className="flex items-center">
            <AlertCircle className="mr-2" />
            <p>{error}</p>
          </div>
        </motion.div>
      )}
      <motion.ul 
        className="space-y-4 mt-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.1 }}
      >
        {messages.map((message) => (
          <motion.li 
            key={message._id}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-purple-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="font-semibold text-lg text-purple-800">{message.name}</h3>
            <p className="text-indigo-600 mb-2">{message.email}</p>
            <p className="text-gray-700 mb-4">{message.message}</p>
            <a 
              href={`mailto:${message.email}`} 
              className="inline-flex items-center text-indigo-600 hover:text-purple-700 transition-colors duration-300"
            >
              <Mail className="mr-2" size={18} />
              Reply via Email
            </a>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default ContactMessages;