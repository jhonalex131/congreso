import Image from "next/image";

const About = () => {
  return (
    <>
      <div className="lg:grid lg:grid-cols-2">
        <div className="hidden lg:flex w-full px-10 my-20 justify-center space-x-5 py-10 aspect-auto">
          <div className="space-y-5">
            <div className="h-64 w-64 rounded-xl shadow-xl bg-[url('/images/benefit-image-06.jpg')] bg-cover aspect-auto"></div>
            <div className="h-64 w-64 bg-neutral rounded-xl shadow-xl items-center justify-center flex flex-col p-7 aspect-auto">
              <p className="text-2xl text-center">Berpengalaman lebih dari</p>
              <h1 className="text-9xl font-bold w-full mx-auto text-center">
                3
              </h1>
              <h2 className="text-2xl font-semibold text-center">Tahun</h2>
            </div>
          </div>
            <div className="hidden xl:block h-full w-72 rounded-xl shadow-xl bg-[url('/images/benefit-image-06.jpg')] bg-cover aspect-auto"></div>
        </div>
        <div className="my-20 py-10 px-10 lg:px-0 lg:pr-10 xl:pl-10 items-center flex">
          <div className="justify-items-center">
              <h1 className="text-4xl font-bold mb-5 w-full text-center lg:text-left">Tentang Kami</h1>
              <p className="text-center lg:text-left xl:pr-14">
                ICT Combiner adalah perusahaan pengembangan web yang berlokasi di
                Bandung, Jawa Barat. Kami memiliki pengalaman bertahun-tahun dalam
                layanan pengembangan web maupun aplikasi mobile. Kami memiliki
                catatan yang terbukti dalam memberikan solusi aplikasi web yang
                kompleks, mulai dari perencanaan, desain, pengerjaan hingga
                pemeliharaan.
              </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
