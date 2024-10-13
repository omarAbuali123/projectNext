// import React, { useState, useEffect } from 'react';

// const DiscountCodes = ({ userId }) => {
//   const [discounts, setDiscounts] = useState({ valid: [], invalid: [] });

//   useEffect(() => {
//     const fetchDiscounts = async () => {
//       const token = localStorage.getItem('token');
//       try {
//         const response = await fetch(`/api/profile/discounts/${userId}`, {
//           headers: {
//             'Authorization': `Bearer ${token}`
//           }
//         });

//         if (response.ok) {
//           const data = await response.json();
//           setDiscounts(data);
//         } else {
//           throw new Error('Failed to fetch discount codes');
//         }
//       } catch (error) {
//         console.error('Error fetching discount codes:', error);
//       }
//     };

//     fetchDiscounts();
//   }, [userId]);

//   return (
//     <div>
//       <h2 className="text-2xl font-semibold mb-4">Discount Codes</h2>
//       <div className="space-y-6">
//         <div>
//           <h3 className="text-xl font-semibold mb-2">Valid Discount Codes</h3>
//           {discounts.valid.map(discount => (
//             <div key={discount._id} className="border p-4 rounded mb-2">
//               <p>Discount ID: {discount._id}</p>
//               <p>Value: {discount.value}</p>
//             </div>
//           ))}
//         </div>
//         <div>
//           <h3 className="text-xl font-semibold mb-2">Invalid Discount Codes</h3>
//           {discounts.invalid.map(discount => (
//             <div key={discount._id} className="border p-4 rounded mb-2">
//               <p>Discount ID: {discount._id}</p>
//               <p>Value: {discount.value}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DiscountCodes;








import React, { useState, useEffect } from 'react';

const DiscountCodes = ({ userId }) => {
  const [discounts, setDiscounts] = useState({ valid: [], invalid: [] });

  useEffect(() => {
    const fetchDiscounts = async () => {
      try {
        const response = await fetch(`/api/profile/discounts/${userId}`);

        if (response.ok) {
          const data = await response.json();
          setDiscounts(data);
        } else {
          throw new Error('Failed to fetch discount codes');
        }
      } catch (error) {
        console.error('Error fetching discount codes:', error);
      }
    };

    fetchDiscounts();
  }, [userId]);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Discount Codes</h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-2">Valid Discount Codes</h3>
          {discounts.valid.map(discount => (
            <div key={discount._id} className="border p-4 rounded mb-2">
              <p>Discount ID: {discount._id}</p>
              <p>Value: {discount.value}</p>
            </div>
          ))}
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Invalid Discount Codes</h3>
          {discounts.invalid.map(discount => (
            <div key={discount._id} className="border p-4 rounded mb-2">
              <p>Discount ID: {discount._id}</p>
              <p>Value: {discount.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiscountCodes;
