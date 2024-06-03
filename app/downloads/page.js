import Navbar from "../Navbar";
import Footer from "../Footer";
import Requirements from "./Requirements";
import Flavours from "./Flavours";
import { Switch } from "@nextui-org/switch";

export const metadata = {
  title: "ALG - Downloads",
  description: "ALG",
};

export default function Downloads() {
  return (
    <section className="relative">
      <Navbar />
      <Requirements />
      <Flavours />

      <Switch defaultSelected={true} aria-label="Theme edition"></Switch>
      <Footer />
    </section>
  );
}
