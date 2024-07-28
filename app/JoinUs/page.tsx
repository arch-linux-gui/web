import Navbar from "../Navbar";
import Footer from "../Footer";
import Career from "./Career";

export const metadata = {
  title: "Join Us | ALG",
  description: "ALG",
};

export default function JoinUsPage() {
  return (
    <section className="relative">
      <Navbar />
      <Career />
      <Footer />
    </section>
  );
}
