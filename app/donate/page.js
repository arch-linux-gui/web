import Navbar from "../Navbar";
import Footer from "../Footer";
import DonationPage from "./Donates";

export const metadata = {
  title: "ALG - Donate",
  description: "ALG",
};

export default function Donate() {
  return (
    <section className="relative">
      <Navbar />
      <DonationPage />
      <Footer />
    </section>
  );
}

/**
 * 
 * 
            // className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 w-full max-w-xs" // Original CSS
            className="px-6 py-3 bg-blue-500 text-white rounded-md w-full max-w-xs opacity-50 cursor-not-allowed" // For Testing purpose Disabled
 */
