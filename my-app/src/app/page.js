

// 'use client';
// import React, { useEffect, useState } from 'react'; // تأكد من استيراد useState و useEffect
// import { motion } from 'framer-motion';
// import { ChevronRight, Recycle, Shirt, Leaf, Sun, Wind, Droplet, Heart } from 'lucide-react';

// const HomePage = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
//       <Header />
//       <Hero />
//       <Services />
//       <About />
//       <Footer />
//     </div>
//   );
// };

// const Header = () => {
//   return (
//     <motion.header 
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ type: "spring", stiffness: 100 }}
//       className="bg-white shadow-md sticky top-0 z-50"
//     >
//       <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
//         <motion.div 
//           whileHover={{ scale: 1.1 }}
//           className="text-2xl font-bold text-green-600 flex items-center"
//         >
//           <Recycle className="mr-2" />
//           Eco Fashion
//         </motion.div>
//         <ul className="flex space-x-6">
//           {['Home', 'Our Services', 'About Us', 'Contact Us'].map((item, index) => (
//             <motion.li key={index} whileHover={{ scale: 1.1 }}>
//               <a href={`#${item === 'Home' ? '' : item}`} className="text-gray-600 hover:text-green-600 transition duration-300">
//                 {item}
//               </a>
//             </motion.li>
//           ))}
//         </ul>
//       </nav>
//     </motion.header>
//   );
// };

// const Hero = () => {
//   // قائمة الصور
//   const images = [
//     'url("https://welikesewing.com/wp-content/uploads/2022/02/FEATURE-722x454.jpeg")', 
//     'url("https://i.ytimg.com/vi/deCIlDbKrK8/maxresdefault.jpg")', 
//     'url("https://i.ytimg.com/vi/XmSBrRiN8Ao/maxresdefault.jpg")', 
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   // تغيير الصورة بشكل دوري
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 3000); // تغيير الصورة كل 3 ثواني

//     return () => clearInterval(interval);
//   }, [images.length]);

//   return (
//     <div className="relative overflow-hidden">
//       <div
//         className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
//         style={{ backgroundImage: images[currentIndex], opacity: 0.5 }}
//       />
//       <div className="bg-green-600 text-white relative z-10 overflow-hidden">
//         <div className="container mx-auto px-6 py-20 relative">
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="text-center"
//           >
//             <h1 className="text-5xl font-bold mb-6">Recycle Your Clothes, Save Our Planet</h1>
//             <p className="text-xl mb-8">We turn your old clothes into new and innovative designs</p>
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="bg-white text-green-600 font-bold py-3 px-6 rounded-full inline-flex items-center text-lg"
//             >
//               Start Now
//               <ChevronRight className="ml-2" />
//             </motion.button>
//           </motion.div>
//           <motion.div
//             animate={{ rotate: 360 }}
//             transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
//             className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
//           >
//             <Recycle size={400} className="text-green-500 opacity-10" />
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const Services = () => {
//   const services = [
//     { icon: <Recycle size={40} />, title: 'Recycling', description: 'We turn your old clothes into new and useful products' },
//     { icon: <Shirt size={40} />, title: 'New Design', description: 'We redesign clothes to fit current trends' },
//     { icon: <Leaf size={40} />, title: 'Eco-Friendly', description: 'We contribute to environmental preservation by reducing waste' },
//   ];

//   return (
//     <section id="Our Services" className="py-20 bg-white">
//       <div className="container mx-auto px-6">
//         <motion.h2 
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="text-4xl font-bold text-center mb-12"
//         >
//           Our Services
//         </motion.h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
//           {services.map((service, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               whileHover={{ scale: 1.05 }}
//               className="text-center p-6 border rounded-lg shadow-lg bg-green-50"
//             >
//               <div className="text-green-600 mb-4 flex justify-center">{service.icon}</div>
//               <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
//               <p className="text-gray-600">{service.description}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// const About = () => {
//   return (
//     <section id="About Us" className="py-20 bg-green-100">
//       <div className="container mx-auto px-6">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="max-w-3xl mx-auto text-center"
//         >
//           <h2 className="text-4xl font-bold mb-6">About Us</h2>
//           <p className="text-gray-700 mb-8 text-lg leading-relaxed">
//             We are an innovative company aiming to recycle used clothes and transform them into new and useful products.
//             Our goal is to protect the environment and reduce textile waste while offering stylish and contemporary designs.
//           </p>
//           <div className="flex justify-center space-x-8">
//             <motion.div whileHover={{ scale: 1.1 }} className="text-center">
//               <Sun size={40} className="text-yellow-500 mx-auto mb-2" />
//               <p>Renewable Energy</p>
//             </motion.div>
//             <motion.div whileHover={{ scale: 1.1 }} className="text-center">
//               <Wind size={40} className="text-blue-500 mx-auto mb-2" />
//               <p>Clean Air</p>
//             </motion.div>
//             <motion.div whileHover={{ scale: 1.1 }} className="text-center">
//               <Droplet size={40} className="text-blue-300 mx-auto mb-2" />
//               <p>Pure Water</p>
//             </motion.div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// const Footer = () => {
//   return (
//     <footer id="Contact Us" className="bg-green-800 text-white py-12">
//       <div className="container mx-auto px-6">
//         <div className="flex flex-wrap justify-between items-center">
//           <div className="w-full md:w-1/3 text-center md:text-left mb-6 md:mb-0">
//             <h3 className="text-2xl font-bold flex items-center justify-center md:justify-start">
//               <Heart className="mr-2 text-red-400" /> Eco Fashion
//             </h3>
//             <p className="mt-2">Recycling fashion for a better future</p>
//           </div>
//           <div className="w-full md:w-1/3 text-center mb-6 md:mb-0">
//             <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
//             <ul className="space-y-2">
//               {['Home', 'Our Services', 'About Us', 'Contact Us'].map((item, index) => (
//                 <motion.li key={index} whileHover={{ scale: 1.1 }}>
//                   <a href={`#${item === 'Home' ? '' : item}`} className="hover:underline">
//                     {item}
//                   </a>
//                 </motion.li>
//               ))}
//             </ul>
//           </div>
//           <div className="w-full md:w-1/3 text-center">
//             <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
//             <p>Email: info@ecofashion.com</p>
//             <p>Phone: +123 456 7890</p>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default HomePage;






'use client';

import React from 'react';
// import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Whatdo from '../components/Whatdo';
// import Footer from '../components/Footer';
import ClothingLifecycle from '../components/ClothingLifecycle';
// import CommunityShowcase from '../components/CommunityShowcase';
import EnvironmentalImpact from '@/components/EnvironmentalImpact';
import EcoFAQs from '@/components/EcoFAQs';
// "use client";
// import React, { useEffect, useState } from "react"; // تأكد من استيراد useState و useEffect
// import { motion } from "framer-motion";
// import {
//   ChevronRight,
//   Recycle,
//   Shirt,
//   Leaf,
//   Sun,
//   Wind,
//   Droplet,
//   Heart,
// } from "lucide-react";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      {/* <Header /> */}
      <Hero />
      <Services />
      <Whatdo />
      <ClothingLifecycle />
      {/* <CommunityShowcase /> */}
      <EnvironmentalImpact />
      <EcoFAQs />
      {/* <Footer /> */}
    </div>
  );
};

export default HomePage;

