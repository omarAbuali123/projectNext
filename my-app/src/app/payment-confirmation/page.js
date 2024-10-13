"use client";

import React, { useEffect, useState } from "react";
import { useStripe } from "@stripe/react-stripe-js";
import { CheckCircle, XCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useRouter } from "next/navigation";

const PaymentConfirmation = () => {
  const stripe = useStripe();
  const [paymentStatus, setPaymentStatus] = useState("processing");
  const router = useRouter();

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      setPaymentStatus("error");
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case "succeeded":
          setPaymentStatus("succeeded");
          break;
        case "processing":
          setPaymentStatus("processing");
          break;
        case "requires_payment_method":
          setPaymentStatus("failed");
          break;
        default:
          setPaymentStatus("error");
          break;
      }
    });
  }, [stripe]);

  const handleReturnHome = () => {
    router.push("/");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Payment Confirmation</h1>
      {paymentStatus === "processing" && (
        <Alert>
          <AlertTitle>Payment Processing</AlertTitle>
          <AlertDescription>
            Your payment is being processed. Please wait...
          </AlertDescription>
        </Alert>
      )}
      {paymentStatus === "succeeded" && (
        <Alert>
          <CheckCircle className="h-4 w-4" />
          <AlertTitle>Payment Successful</AlertTitle>
          <AlertDescription>
            Thank you for your purchase! Your payment has been processed
            successfully.
          </AlertDescription>
        </Alert>
      )}
      {(paymentStatus === "failed" || paymentStatus === "error") && (
        <Alert variant="destructive">
          <XCircle className="h-4 w-4" />
          <AlertTitle>Payment Failed</AlertTitle>
          <AlertDescription>
            There was an issue processing your payment. Please try again or
            contact support.
          </AlertDescription>
        </Alert>
      )}
      <button onClick={handleReturnHome} className="mt-4">
        Return to Home
      </button>
    </div>
  );
};

export default PaymentConfirmation;
