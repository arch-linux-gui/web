import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import BlogPage from "./blogpage";

export const metadata = {
  title: "Blogs | ALG",
  description: "ALG",
};

export default function Donate() {
  return (
    <section className="relative">
      <Navbar />
      <BlogPage />
      <Footer />
    </section>
  );
}