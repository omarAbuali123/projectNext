import React from 'react';
import { motion } from 'framer-motion';
import { Recycle, HelpCircle } from 'lucide-react';

const EcoFAQs = () => {
  const faqs = [
    {
      question: "What is clothing recycling?",
      answer: "Clothing recycling is the process of turning old clothes and textiles into new products. The materials can be reused to make new clothes or other products such as insulation materials or furniture stuffing."
    },
    {
      question: "Why is clothing recycling important?",
      answer: "It reduces waste in landfills, saves natural resources used in making new clothes, and lowers carbon emissions produced by the fashion industry."
    },
    {
      question: "How can I participate in clothing recycling?",
      answer: "Donate your old clothes to charities or recycling centers, use clothing collection bins in fashion stores, or take part in clothing take-back programs offered by some brands."
    },
    {
      question: "What is sustainable fashion?",
      answer: "Sustainable fashion is an approach to designing, producing, and consuming clothes with consideration for the environment and social justice. It involves using eco-friendly materials and ethical production practices."
    }
  ];

  return (
    <section id="eco-faqs" className="py-20 bg-green-50">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 text-green-800"
        >
          Everything You Need to Know About Recycling
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="flex items-center mb-4">
                <HelpCircle className="text-green-600 mr-2" size={24} />
                <h3 className="text-xl font-semibold text-green-800">{faq.question}</h3>
              </div>
              <p className="text-gray-600">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-lg text-green-800 font-semibold">
            Remember: Every piece of clothing you recycle helps protect the environment and build a more sustainable future!
          </p>
          <Recycle className="text-green-600 mx-auto mt-4" size={48} />
        </motion.div>
      </div>
    </section>
  );
};

export default EcoFAQs;
