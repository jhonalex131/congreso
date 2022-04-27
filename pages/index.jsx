import Link from "next/link";
import About from "../components/About/About";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import Product from "../components/Product/Product";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Hero />

      <main>
        <section id="AboutUs" className="scroll-mt-5">
          <About />
        </section>
        <section id="Product" className="scroll-mt-36">
          <Product />
        </section>
      </main>
      <Footer />
    </div>
  );
}
