import Metadata from "@/components/metadata";
import ReleasePage from "./ReleasePage";

export const metadata = {
  title: "Releases | ALG",
  description: "Arka Linux GUI Release History",
};

export default function Releases() {
  return (
    <section className="relative">
      <Metadata params="Releases" />
      <ReleasePage />
    </section>
  );
}
