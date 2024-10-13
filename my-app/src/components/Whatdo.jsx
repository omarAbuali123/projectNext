import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Wind, Droplet } from 'lucide-react';

const Whatdo = () => {
  return (
    <section id="about" className="py-20 bg-green-100">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-6">What do you do</h2>
          <p className="text-gray-700 mb-8 text-lg leading-relaxed">
            We are an innovative company aimed at recycling used clothes and transforming them into new, useful products.
            Our goal is to preserve the environment and reduce textile waste while offering stylish and modern designs.
          </p>
          <div className="flex justify-center space-x-8">
            <motion.div whileHover={{ scale: 1.1 }} className="text-center">
              <Sun size={40} className="text-yellow-500 mx-auto mb-2" />
              <p>Renewable Energy</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} className="text-center">
              <Wind size={40} className="text-blue-500 mx-auto mb-2" />
              <p>Clean Air</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} className="text-center">
              <Droplet size={40} className="text-blue-300 mx-auto mb-2" />
              <p>Pure Water</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Whatdo;