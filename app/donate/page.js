import Navbar from "../Navbar";
import Footer from "../Footer";
import Donates from "./Donates";

export const metadata = {
  title: "ALG - Donate",
  description: "ALG",
};

export default function Donate() {
  return (
    <section className="relative">
      <Navbar />
      <Donates />
      <Footer />
    </section>
  );
}
