import Link from "next/link";

const Hero = () => {
  return (
    <div
      className="z-0 h-screen min-h-screen bg-center bg-no-repeat bg-cover md:bg-right"
      style={{ backgroundImage: "url(/images/bg-hero.webp)" }}
    >
      <div className="absolute inset-0 h-screen min-h-screen bg-black opacity-80"></div>
      <div className="container relative z-10 flex w-full items-center h-screen px-5 py-32 mx-auto">
        <div className="relative z-10 flex flex-col w-full items-center">
          <span className="font-bold uppercase text-primary">ICT COMBINER</span>
          <h1 className="text-center items-center text-3xl font-bold pt-4 text-white md:text-5xl lg:w-2/3 md:leading-[3.5rem]">
            Solusi untuk berbagai layanan pengembangan web
          </h1>
          <p className="pt-3 text-sm text-white text-center md:text-lg w-full">
            Merancang dan mengembangkan aplikasi / web sesuai kebutuhan Anda.
          </p>
          <Link href="#LearnMore">
            <a className="mt-10 btn btn-primary rounded-xl text-gradient dark:text-black hover:bg-gray-100">
              Pelajari Lebih Lanjut
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
