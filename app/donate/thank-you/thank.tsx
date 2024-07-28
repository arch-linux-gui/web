"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const ThankYouPage: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    const redirect = setTimeout(() => {
      router.push("/");
    }, 5000);

    return () => clearTimeout(redirect);
  }, [router]);
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">Thank You for your Support!</h1>
        <p className="text-lg">
          You will be redirected to the home page shortly...
        </p>
      </div>
    </div>
  );
};

export default ThankYouPage;
