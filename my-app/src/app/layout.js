// // src/app/layout.js
// "use client";
// import { CartProvider } from "@/contexts/CartContext";
// import localFont from "next/font/local";
// import "./globals.css";
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// import React from "react";

// const stripePromise = loadStripe(
//   process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
// );

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

// export default function ClientLayout({ children }) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         <Elements stripe={stripePromise}>
//           <CartProvider>{children}</CartProvider>
//         </Elements>
//       </body>
//     </html>
//   );
// }










// src/app/layout.js
"use client";
import { usePathname } from "next/navigation"; // استيراد usePathname
import { CartProvider } from "@/contexts/CartContext";
import localFont from "next/font/local";
import "./globals.css";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import Footer from "../components/Footer"; // تأكد من مسار المكون
import Header from "../components/Header";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function ClientLayout({ children }) {
  const pathname = usePathname(); // الحصول على المسار الحالي

  // تحقق مما إذا كان المسار هو "/login" أو "/signup"
  const isAuthPage = pathname === "/login" || pathname === "/signup";

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Elements stripe={stripePromise}>
          <CartProvider>
            {/* عرض Navbar وFooter فقط إذا لم يكن المسار هو صفحة تسجيل الدخول أو التسجيل */}
            {!isAuthPage && <Header />}
            {children}
            {!isAuthPage && <Footer />}
          </CartProvider>
        </Elements>
      </body>
    </html>
  );
}
