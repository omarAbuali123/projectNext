








// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
// import { Leaf, Droplet, Wind, Recycle } from 'lucide-react';

// const EnvironmentalImpact = () => {
//   const [recycledClothes, setRecycledClothes] = useState(10);
//   const [activeTab, setActiveTab] = useState('chart');

//   const environmentalData = [
//     { name: 'Carbon Emissions', standard: 100, recycled: 30 },
//     { name: 'Water Consumption', standard: 100, recycled: 20 },
//     { name: 'Energy Usage', standard: 100, recycled: 40 },
//   ];

//   const calculateImpact = (baseValue) => {
//     return Math.round(baseValue * recycledClothes / 10);
//   };

//   const impactMetrics = [
//     { icon: <Leaf className="w-12 h-12 text-green-500" />, label: 'kg of CO2 emissions saved', value: calculateImpact(7) },
//     { icon: <Droplet className="w-12 h-12 text-blue-500" />, label: 'liters of water saved', value: calculateImpact(2700) },
//     { icon: <Wind className="w-12 h-12 text-purple-500" />, label: 'kWh of energy saved', value: calculateImpact(11) },
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setRecycledClothes((prev) => (prev < 100 ? prev + 1 : 10));
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-5xl font-bold mb-4 text-green-800">إعادة التدوير تساعد كوكبنا</h2>
//           <p className="text-xl text-gray-600">اكتشف كيف يمكن لإعادة تدوير الملابس أن يحدث فرقًا كبيرًا</p>
//         </motion.div>
        
//         <div className="mb-12">
//           <div className="flex justify-center space-x-4 mb-8">
//             <button
//               onClick={() => setActiveTab('chart')}
//               className={`px-6 py-2 rounded-full ${activeTab === 'chart' ? 'bg-green-500 text-white' : 'bg-gray-200'}`}
//             >
//               مخطط المقارنة
//             </button>
//             <button
//               onClick={() => setActiveTab('calculator')}
//               className={`px-6 py-2 rounded-full ${activeTab === 'calculator' ? 'bg-green-500 text-white' : 'bg-gray-200'}`}
//             >
//               حاسبة التأثير
//             </button>
//           </div>

//           <AnimatePresence mode="wait">
//             {activeTab === 'chart' && (
//               <motion.div
//                 key="chart"
//                 initial={{ opacity: 0, x: -100 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 exit={{ opacity: 0, x: 100 }}
//                 transition={{ duration: 0.5 }}
//               >
//                 <h3 className="text-3xl font-semibold mb-6 text-center">مقارنة التأثير البيئي</h3>
//                 <ResponsiveContainer width="100%" height={400}>
//                   <BarChart data={environmentalData} layout="vertical">
//                     <CartesianGrid strokeDasharray="3 3" />
//                     <XAxis type="number" />
//                     <YAxis dataKey="name" type="category" />
//                     <Tooltip />
//                     <Legend />
//                     <Bar dataKey="standard" name="الملابس العادية" fill="#ff9f43" />
//                     <Bar dataKey="recycled" name="الملابس المعاد تدويرها" fill="#1dd1a1" />
//                   </BarChart>
//                 </ResponsiveContainer>
//               </motion.div>
//             )}

//             {activeTab === 'calculator' && (
//               <motion.div
//                 key="calculator"
//                 initial={{ opacity: 0, x: 100 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 exit={{ opacity: 0, x: -100 }}
//                 transition={{ duration: 0.5 }}
//                 className="bg-white p-8 rounded-xl shadow-2xl"
//               >
//                 <h3 className="text-3xl font-semibold mb-6 text-center">حاسبة التأثير البيئي الخاصة بك</h3>
//                 <div className="flex flex-col items-center mb-8">
//                   <label htmlFor="recycledClothes" className="text-xl mb-4">عدد الملابس المعاد تدويرها:</label>
//                   <div className="relative w-full max-w-md">
//                     <input 
//                       type="range" 
//                       id="recycledClothes" 
//                       min="1" 
//                       max="100" 
//                       value={recycledClothes} 
//                       onChange={(e) => setRecycledClothes(Number(e.target.value))}
//                       className="w-full h-3 bg-green-200 rounded-full appearance-none cursor-pointer"
//                     />
//                     <div 
//                       className="absolute top-0 left-0 h-3 bg-green-500 rounded-full pointer-events-none" 
//                       style={{ width: `${recycledClothes}%` }}
//                     ></div>
//                   </div>
//                   <span className="text-2xl font-bold mt-4">{recycledClothes} قطعة</span>
//                 </div>
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                   {impactMetrics.map((metric, index) => (
//                     <motion.div 
//                       key={index}
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ duration: 0.5, delay: index * 0.1 }}
//                       className="bg-gradient-to-br from-green-100 to-blue-100 p-6 rounded-lg shadow-lg text-center"
//                     >
//                       <div className="flex justify-center mb-4">{metric.icon}</div>
//                       <motion.h4 
//                         className="text-3xl font-bold mb-2"
//                         key={metric.value}
//                         initial={{ scale: 1 }}
//                         animate={{ scale: [1, 1.1, 1] }}
//                         transition={{ duration: 0.3 }}
//                       >
//                         {metric.value}
//                       </motion.h4>
//                       <p className="text-gray-700">{metric.label}</p>
//                     </motion.div>
//                   ))}
//                 </div>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>

//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1, delay: 0.5 }}
//           className="text-center"
//         >
//           <p className="text-xl text-gray-700 mb-4">معًا يمكننا إحداث فرق كبير!</p>
//           <Recycle className="w-16 h-16 text-green-500 mx-auto animate-spin-slow" />
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default EnvironmentalImpact;
















import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Leaf, Droplet, Wind, Recycle } from 'lucide-react';

const EnvironmentalImpact = () => {
  const [recycledClothes, setRecycledClothes] = useState(10);
  const [activeTab, setActiveTab] = useState('chart');

  const environmentalData = [
    { name: 'Carbon Emissions', standard: 100, recycled: 30 },
    { name: 'Water Consumption', standard: 100, recycled: 20 },
    { name: 'Energy Usage', standard: 100, recycled: 40 },
  ];

  const calculateImpact = (baseValue) => {
    return Math.round(baseValue * recycledClothes / 10);
  };

  const impactMetrics = [
    { icon: <Leaf className="w-12 h-12 text-green-500" />, label: 'kg of CO2 emissions saved', value: calculateImpact(7) },
    { icon: <Droplet className="w-12 h-12 text-blue-500" />, label: 'liters of water saved', value: calculateImpact(2700) },
    { icon: <Wind className="w-12 h-12 text-purple-500" />, label: 'kWh of energy saved', value: calculateImpact(11) },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setRecycledClothes((prev) => (prev < 100 ? prev + 1 : 10));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 text-green-800">Recycling Helps Our Planet</h2>
          <p className="text-xl text-gray-600">Discover how recycling clothes can make a huge difference</p>
        </motion.div>
        
        <div className="mb-12">
          <div className="flex justify-center space-x-4 mb-8">
            <button
              onClick={() => setActiveTab('chart')}
              className={`px-6 py-2 rounded-full ${activeTab === 'chart' ? 'bg-green-500 text-white' : 'bg-gray-200'}`}
            >
              Comparison Chart
            </button>
            <button
              onClick={() => setActiveTab('calculator')}
              className={`px-6 py-2 rounded-full ${activeTab === 'calculator' ? 'bg-green-500 text-white' : 'bg-gray-200'}`}
            >
              Impact Calculator
            </button>
          </div>

          <AnimatePresence mode="wait">
            {activeTab === 'chart' && (
              <motion.div
                key="chart"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-3xl font-semibold mb-6 text-center">Environmental Impact Comparison</h3>
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={environmentalData} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" />
                    <YAxis dataKey="name" type="category" />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="standard" name="Regular Clothes" fill="#ff9f43" />
                    <Bar dataKey="recycled" name="Recycled Clothes" fill="#1dd1a1" />
                  </BarChart>
                </ResponsiveContainer>
              </motion.div>
            )}

            {activeTab === 'calculator' && (
              <motion.div
                key="calculator"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 rounded-xl shadow-2xl"
              >
                <h3 className="text-3xl font-semibold mb-6 text-center">Your Environmental Impact Calculator</h3>
                <div className="flex flex-col items-center mb-8">
                  <label htmlFor="recycledClothes" className="text-xl mb-4">Number of Recycled Clothes:</label>
                  <div className="relative w-full max-w-md">
                    <input 
                      type="range" 
                      id="recycledClothes" 
                      min="1" 
                      max="100" 
                      value={recycledClothes} 
                      onChange={(e) => setRecycledClothes(Number(e.target.value))}
                      className="w-full h-3 bg-green-200 rounded-full appearance-none cursor-pointer"
                    />
                    <div 
                      className="absolute top-0 left-0 h-3 bg-green-500 rounded-full pointer-events-none" 
                      style={{ width: `${recycledClothes}%` }}
                    ></div>
                  </div>
                  <span className="text-2xl font-bold mt-4">{recycledClothes} Items</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {impactMetrics.map((metric, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-gradient-to-br from-green-100 to-blue-100 p-6 rounded-lg shadow-lg text-center"
                    >
                      <div className="flex justify-center mb-4">{metric.icon}</div>
                      <motion.h4 
                        className="text-3xl font-bold mb-2"
                        key={metric.value}
                        initial={{ scale: 1 }}
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 0.3 }}
                      >
                        {metric.value}
                      </motion.h4>
                      <p className="text-gray-700">{metric.label}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center"
        >
          <p className="text-xl text-gray-700 mb-4">Together, we can make a big difference!</p>
          <Recycle className="w-16 h-16 text-green-500 mx-auto animate-spin-slow" />
        </motion.div>
      </div>
    </section>
  );
};

export default EnvironmentalImpact;
