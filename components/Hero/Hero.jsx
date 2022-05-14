import Link from "next/link";
import { Fade, Zoom } from "react-reveal";

const Hero = () => {
  return (
    <div
      className="z-0 h-screen min-h-screen bg-center bg-no-repeat bg-cover md:bg-right"
      style={{ backgroundImage: "url(/images/bg-hero.webp)" }}
    >
      <div className="absolute inset-0 h-screen min-h-screen bg-black opacity-80"></div>
      <div className="container relative z-10 flex items-center w-full h-screen px-5 py-32 mx-auto">
        <div className="relative z-10 flex flex-col items-center w-full">
          <Fade right><span className="font-bold uppercase text-primary">ICT COMBINER</span></Fade>
          <Fade left>
            <h1 className="text-center items-center text-3xl font-bold pt-4 text-white md:text-5xl lg:w-2/3 md:leading-[3.5rem]">
              Solusi untuk berbagai layanan pengembangan web
            </h1>
          </Fade>
          <Fade right>
            <p className="w-full pt-3 text-sm text-center text-white md:text-lg">
              Merancang dan mengembangkan aplikasi / web sesuai kebutuhan Anda.
            </p>
          </Fade>
          <Zoom>
            <Link href="#LearnMore">
              <a className="mt-10 btn btn-primary rounded-xl text-gradient dark:text-black">
                Pelajari Lebih Lanjut
              </a>
            </Link>
          </Zoom>
        </div>
      </div>
    </div>
  );
};

export default Hero;
