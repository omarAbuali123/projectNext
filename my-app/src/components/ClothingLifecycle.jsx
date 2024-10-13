import React from 'react';
import { motion } from 'framer-motion';
import { Shirt, Scissors, Zap, Recycle, Truck } from 'lucide-react';

const ClothingLifecycle = () => {
  const stages = [
    { icon: <Shirt size={40} />, title: 'Donation', description: 'Bring your old clothes to us' },
    { icon: <Scissors size={40} />, title: 'Deconstruction', description: 'We carefully take apart each garment' },
    { icon: <Zap size={40} />, title: 'Reimagination', description: 'Our designers create new concepts' },
    { icon: <Recycle size={40} />, title: 'Reconstruction', description: 'Clothes are given new life' },
    { icon: <Truck size={40} />, title: 'Distribution', description: 'New items reach conscious consumers' },
  ];

  return (
    <section className="py-20 bg-green-50">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12"
        >
          The Journey of Your Clothes
        </motion.h2>
        <div className="flex flex-wrap justify-center">
          {stages.map((stage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="w-full sm:w-1/2 md:w-1/5 p-4"
            >
              <div className="bg-white rounded-lg shadow-lg p-6 h-full flex flex-col items-center">
                <div className="text-green-600 mb-4">{stage.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-center">{stage.title}</h3>
                <p className="text-gray-600 text-center">{stage.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClothingLifecycle;