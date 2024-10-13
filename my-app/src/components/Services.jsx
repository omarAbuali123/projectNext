import React from 'react';
import { motion } from 'framer-motion';
import { Recycle, Shirt, Leaf } from 'lucide-react';

const Services = () => {
  const services = [
    { icon: <Recycle size={40} />, title: 'Recycling', description: 'We turn your old clothes into new, useful products' },
    { icon: <Shirt size={40} />, title: 'New Designs', description: 'We redesign clothes to fit current fashion trends' },
    { icon: <Leaf size={40} />, title: 'Eco-Friendly', description: 'We contribute to environmental preservation by reducing waste' },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Our Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 border rounded-lg shadow-lg bg-green-50"
            >
              <div className="text-green-600 mb-4 flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;