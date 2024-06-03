"use client";
import React, { useEffect, useState } from "react";
import { getUserCountry } from "../lib/getUserCountry";
import Razorpay from "razorpay";

const DonationPage = () => {
  const [country, setCountry] = useState("");
  const [isIndia, setIsIndia] = useState(false);

  useEffect(() => {
    async function fetchCountry() {
      const userCountry = await getUserCountry();
      console.log("User Country:", userCountry);
      setCountry(userCountry);
      setIsIndia(userCountry === "IN");
    }
    fetchCountry();
  }, []);

  useEffect(() => {
    console.log("Country:", country);
    console.log("Is India:", isIndia);
  }, [country, isIndia]);

  const handleRazorpayPayment = () => {
    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY,
      amount: 50000, // Amount in paise
      currency: "INR",
      name: "Your Company",
      description: "Donation",
      handler: function (response) {
        alert("Payment Successful!");
      },
      prefill: {
        name: "Your Name",
        email: "your.email@example.com",
      },
      notes: {
        address: "Your Company Address",
      },
      theme: {
        color: "#3399cc",
      },
    };
    const rzp = new Razorpay(options);
    rzp.open();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#161a1e] text-white p-4">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center">
        Donate to Support Us
      </h1>
      {isIndia ? (
        <div className="flex flex-col items-center space-y-4">
          <button
            onClick={handleRazorpayPayment}
            // className="flex items-center justify-center px-6 py-3 bg-[#6a45d1] text-white rounded-md w-full max-w-xs cursor-not-allowed" // Original CSS
            className="flex items-center justify-center px-6 py-3 bg-[#6a45d1] text-white rounded-md w-full max-w-xs opacity-50 cursor-not-allowed" // For Testing purpose Disabled
            disabled
          >
            <img src="/razorpay.png" alt="Razorpay" className="w-6 h-6 mr-2" />
            Donate with Razorpay
          </button>
          <a
            href="https://liberapay.com/your-username/donate"
            className="flex items-center justify-center px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 w-full max-w-xs text-center"
          >
            <img
              src="/liberapay.png"
              alt="Liberapay"
              className="w-6 h-6 mr-2"
            />
            Donate with Liberapay
          </a>
        </div>
      ) : (
        <a
          href="https://liberapay.com/your-username/donate"
          className="flex items-center justify-center px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 w-full max-w-xs text-center"
        >
          <img src="/liberapay.png" alt="Liberapay" className="w-6 h-6 mr-2" />
          Donate with Liberapay
        </a>
      )}
    </div>
  );
};

export default DonationPage;
