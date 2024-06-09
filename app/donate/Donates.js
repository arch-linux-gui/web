"use client";
import React, { useEffect, useState } from "react";
import { getUserCountry } from "../lib/getUserCountry";
import Razorpay from "razorpay";
import Image from "next/image";

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

  const handleRazorpayPayment = async () => {
    const payment_capture = 1;
    const amount = 1;
    const currency = "INR";
    const options = {
      amount: (amount * 100).toString(),
      currency,
      receipt: shortid.generate(),
      payment_capture,
    };
    const rzp = new Razorpay({
      key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      key_secret: process.env.NEXT_PUBLIC_RAZORPAY_KEY_SEC,
    });
    try {
      const response = await rzp.orders.create(options);
      res.status(200).json({
        id: response.id,
        currency: response.currency,
        amount: response.amount,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#090E0E] text-white p-6">
      <h1 className="text-4xl sm:text-5xl font-extrabold m-8 text-center">
        Support Our Cause
      </h1>
      <div className="bg-[#1e2228] p-8 rounded-lg mb-8 shadow-2xl max-w-lg text-center">
        <h2 className="text-3xl font-semibold mb-6 text-purple-400">
          Benefits and Perks
        </h2>
        <ul className="list-none space-y-3 text-lg text-gray-300">
          <li className="flex items-center space-x-3">
            <svg
              className="w-8 h-8 text-purple-400 lg:w-6 lg:h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            <span>Support independent content creation</span>
          </li>
          <li className="flex items-center space-x-3">
            <svg
              className="w-6 h-6 text-purple-400"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            <span>Exclusive updates and news</span>
          </li>
          <li className="flex items-center space-x-3">
            <svg
              className="w-6 h-6 text-purple-400"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            <span>Access to premium content</span>
          </li>
          <li className="flex items-center space-x-3">
            <svg
              className="w-6 h-6 text-purple-400"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            <span>Recognition on our platform</span>
          </li>
        </ul>
      </div>
      {isIndia ? (
        <div className="flex flex-col items-center space-y-6">
          <button
            onClick={handleRazorpayPayment}
            className="flex items-center justify-center px-6 py-3 bg-purple-600 text-white rounded-md w-full max-w-xs shadow-lg opacity-50 cursor-not-allowed"
            disabled
          >
            <Image
              src="/razorpay.png"
              alt="Razorpay"
              width={24}
              height={24}
              className="w-6 h-6 mr-2"
            />
            Donate with Razorpay
          </button>
          <span className="inline-block bg-gray-200 text-gray-800 px-2 py-1 text-sm opacity-50 rounded-md">
            Note: Razorpay is currently under construction.
          </span>
          <a
            href="https://liberapay.com/your-username/donate"
            className="flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 w-full max-w-xs shadow-lg"
          >
            <Image
              src="/liberapay.png"
              alt="Liberapay"
              width={24}
              height={24}
              className="w-6 h-6 mr-2"
            />
            Donate with Liberapay
          </a>
          <a
            href="https://www.buymeacoffee.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-6 py-3 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 w-full max-w-xs shadow-lg"
          >
            <Image
              src="/bmc.png"
              alt="Buy Me a Coffee"
              width={24}
              height={24}
              className="w-6 h-6 mr-2"
            />
            Buy Me a Coffee
          </a>
        </div>
      ) : (
        <div className="flex flex-col items-center space-y-6">
          <a
            href="https://liberapay.com/your-username/donate"
            className="flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 w-full max-w-xs shadow-lg"
          >
            <Image
              src="/liberapay.png"
              alt="Liberapay"
              width={24}
              height={24}
              className="w-6 h-6 mr-2"
            />
            Donate with Liberapay
          </a>
          <a
            href="https://www.buymeacoffee.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-6 py-3 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 w-full max-w-xs shadow-lg"
          >
            <Image
              src="/bmc.png"
              alt="Buy Me a Coffee"
              width={24}
              height={24}
              className="w-6 h-6 mr-2"
            />
            Buy Me a Coffee
          </a>
        </div>
      )}
    </div>
  );
};

export default DonationPage;
