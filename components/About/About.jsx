import Image from "next/image";

const About = () => {
  return (
    <>
      <div className="lg:grid lg:grid-cols-2">
        <div className="justify-center hidden w-full md:px-10 py-10 my-20 space-x-5 lg:flex aspect-auto">
          <div className="space-y-5">
            <div className="h-64 -translate-x-24 xl:translate-x-0 w-64 rounded-xl shadow-xl bg-[url('/images/benefit-image-06.jpg')] bg-cover aspect-auto"></div>
            <div className="flex flex-col items-center justify-center w-64 h-64 translate-x-24 shadow-xl xl:translate-x-0 bg-neutral rounded-xl p-7 aspect-auto">
              <p className="text-2xl text-center">Berpengalaman lebih dari</p>
              <h1 className="w-full mx-auto font-bold text-center text-9xl">
                3
              </h1>
              <h2 className="text-2xl font-semibold text-center">Tahun</h2>
            </div>
          </div>
            <div className="hidden xl:block h-full w-72 rounded-xl shadow-xl bg-[url('/images/benefit-image-06.jpg')] bg-cover aspect-auto"></div>
        </div>
        <div className="flex items-center px-10 py-10 my-20 lg:px-0 lg:pr-10 xl:pl-10">
          <div className="justify-items-center">
              <h1 className="w-full mb-5 text-4xl font-bold text-center lg:text-left">Tentang Kami</h1>
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
