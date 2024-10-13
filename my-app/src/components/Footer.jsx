// import React from 'react';
// import { motion } from 'framer-motion';
// import { Heart } from 'lucide-react';

// const Footer = () => {
//   return (
//     <footer id="contact" className="bg-green-800 text-white py-12">
//       <div className="container mx-auto px-6">
//         <div className="flex flex-wrap justify-between items-center">
//           <div className="w-full md:w-1/3 text-center md:text-left mb-6 md:mb-0">
//             <h3 className="text-2xl font-bold flex items-center justify-center md:justify-start">
//               <Heart className="mr-2 text-red-400" /> EcoFashion
//             </h3>
//             <p className="mt-2">Recycling fashion for a better future</p>
//           </div>
//           <div className="w-full md:w-1/3 text-center mb-6 md:mb-0">
//             <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
//             <ul className="space-y-2">
//               {['Home', 'Services', 'About', 'Contact'].map((item, index) => (
//                 <motion.li key={index} whileHover={{ scale: 1.1 }}>
//                   <a href={`${item.toLowerCase()}`} className="hover:text-green-300 transition duration-300">
//                     {item}
//                   </a>
//                 </motion.li>
//               ))}
//             </ul>
//           </div>
//           <div className="w-full md:w-1/3 text-center md:text-right">
//             <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
//             <p className="mb-2">Email: info@ecofashion.com</p>
//             <p>Phone: 123-456-7890</p>
//           </div>
//         </div>
//         <motion.div 
//           initial={{ scaleX: 0 }}
//           whileInView={{ scaleX: 1 }}
//           transition={{ duration: 0.5 }}
//           className="border-t border-green-700 mt-8 pt-8 text-center"
//         >
//           <p>&copy; 2024 EcoFashion. All rights reserved.</p>
//         </motion.div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;










import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Mail, Phone, Instagram, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  const socialIcons = [
    { Icon: Instagram, href: '#' },
    { Icon: Twitter, href: '#' },
    { Icon: Facebook, href: '#' },
  ];

  return (
    <footer id="contact" className="bg-gradient-to-b from-green-800 to-green-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <h3 className="text-3xl font-bold flex items-center justify-center md:justify-start mb-4">
              <Heart className="mr-2 text-red-400" fill="currentColor" /> 
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-blue-300">
               EcoStitch
              </span>
            </h3>
            <p className="mt-2 text-green-200">Recycling fashion for a better future</p>
            <div className="flex justify-center md:justify-start space-x-4 mt-6">
              {socialIcons.map(({ Icon, href }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-green-300 hover:text-white transition-colors duration-300"
                >
                  <Icon size={24} />
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center"
          >
            <h4 className="text-xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-blue-300">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Services', 'About', 'Contact'].map((item, index) => (
                <motion.li 
                  key={index} 
                  whileHover={{ scale: 1.05, x: 5 }}
                  className="transition duration-300"
                >
                  <a href={`${item.toLowerCase().replace(/\s+/g, '')}`} className="hover:text-green-300 transition duration-300">
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center md:text-right"
          >
            <h4 className="text-xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-blue-300">Contact Us</h4>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center md:justify-end mb-4"
            >
              <Mail className="mr-2 text-green-300" />
              <a href="mailto:info@ecofashion.com" className="hover:text-green-300 transition duration-300">
                info@ecofashion.com
              </a>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center md:justify-end"
            >
              <Phone className="mr-2 text-green-300" />
              <a href="tel:123-456-7890" className="hover:text-green-300 transition duration-300">
                123-456-7890
              </a>
            </motion.div>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.7 }}
          className="border-t border-green-700 mt-12 pt-8 text-center"
        >
          <p className="text-green-200">
            &copy; {new Date().getFullYear()} EcoStitch. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
