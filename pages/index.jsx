import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import About from "../components/About/About";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import Product from "../components/Product/Product";
import Service from "../components/Service/Service";
import Technology from "../components/Technology/Technology";

export default function Home() {
  const { theme } = useTheme();

  return (
    <div className="overflow-hidden">
      <Navbar />
      <Hero />

      <main>
        <section id="AboutUs" className="scroll-mt-36 md:-scroll-mt-5 xl:scroll-mt-5">
          <About />
        </section>
        <section id="Product" className="scroll-mt-16 xl:scroll-mt-36">
          <Product />
        </section>
        <section id="Service" className="scroll-mt-20">
          <div className="px-3 md:px-10 py-10 lg:grid lg:grid-cols-2">
            <div>
              <h1 className="mb-16 text-4xl font-bold text-center lg:text-left">Kenapa Memilih Kami</h1>
              <Service
                title="Memiliki Team Yang Professional Di Bidangnya"
                width="56"
                height="56"
                imgService={`${
                  theme == "dark"
                    ? "/assets/team-white.png"
                    : "/assets/team.png"
                }`}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                consequuntur dolorem ipsam provident qui est suscipit dolores id
                odio.
              </Service>
              <Service
                title="Harga Fleksibel"
                width="54"
                height="54"
                imgService={`${
                  theme == "dark"
                    ? "/assets/wallet-white.png"
                    : "/assets/wallet.png"
                }`}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                consequuntur dolorem ipsam provident qui est suscipit dolores id
                odio.
              </Service>
              <Service
                title="Pemeliharaan Sistem Secara Berkala"
                width="54"
                height="54"
                imgService={`${
                  theme == "dark"
                    ? "/assets/maintenance-white.png"
                    : "/assets/maintenance.png"
                }`}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                consequuntur dolorem ipsam provident qui est suscipit dolores id
                odio.
              </Service>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-3/4 h-3/4 shadow-lg bg-[url('/images/office.jpg')] bg-cover bg-bottom rounded-xl">
                {/* <Image src="/images/office.jpg" alt="office" layout="fill" /> */}
              </div>
            </div>
          </div>
        </section>
        <section>
          <Technology />
        </section>
      </main>
      <Footer />
    </div>
  );
}
