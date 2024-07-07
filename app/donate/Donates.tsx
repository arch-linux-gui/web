"use client";
import React, { useEffect, useState } from "react";
import { getUserCountry } from "../lib/getUserCountry";
import Image from "next/image";
import { Link } from "next-view-transitions";

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

  return (
    <div className="flex flex-col items-center  justify-center min-h-screen bg-[#09090B] text-white p-6">
      <h1 className="m-8 text-4xl font-extrabold text-center md:text-5xl">
        Support Our Cause
      </h1>
      <div className="bg-[#1e2228] p-8 rounded-lg mb-8 shadow-2xl max-w-lg text-center">
        <h2 className="mb-6 text-3xl font-semibold text-purple-400">
          Benefits and Perks
        </h2>
        <ul className="space-y-3 text-lg text-gray-300 list-none">
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
          <Link
            href={"https://payments-test.cashfree.com/forms/alg-donate"}
            className="flex items-center justify-center w-full max-w-xs px-6 py-3 text-white bg-purple-600 rounded-md shadow-lg hover:bg-purple-700"
          >
            <Image
              src="/cashfree.png"
              alt="Cashfree"
              width={30}
              height={30}
              className="w-8 h-6 mr-2"
            />
            Donate with Cashfree
          </Link>
          <a
            href="https://liberapay.com/your-username/donate"
            className="flex items-center justify-center w-full max-w-xs px-6 py-3 text-white bg-green-600 rounded-md shadow-lg hover:bg-green-700"
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
            className="flex items-center justify-center w-full max-w-xs px-6 py-3 text-white bg-yellow-500 rounded-md shadow-lg hover:bg-yellow-600"
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
            className="flex items-center justify-center w-full max-w-xs px-6 py-3 text-white bg-green-600 rounded-md shadow-lg hover:bg-green-700"
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
            className="flex items-center justify-center w-full max-w-xs px-6 py-3 text-white bg-yellow-500 rounded-md shadow-lg hover:bg-yellow-600"
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
