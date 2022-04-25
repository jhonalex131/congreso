import Link from "next/link";
import About from "../components/About/About";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Hero />

      <section id="AboutUs">
        <About />
      </section>
      <Footer />
    </div>
  );
}
