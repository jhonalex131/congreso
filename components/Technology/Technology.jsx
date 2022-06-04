import { useTheme } from "next-themes";
import Image from "next/image";
import { Zoom } from "react-reveal";
import Modal from "../Modal/Modal";

const Technology = () => {
  const { theme } = useTheme();
  return (
    <Zoom cascade>
      <div className="grid justify-center px-3 mx-auto my-20 md:grid-cols-2 lg:grid-cols-4 xl:px-10">
        <label
          htmlFor="my-modal-1"
          className="flex flex-col items-center justify-center mx-auto text-center transition-all duration-500 ease-in-out cursor-pointer modal-button w-52 rounded-xl h-52 hover:shadow-2xl"
        >
          <Image
            src="/logo/php-logo.png"
            alt="logo"
            width={100}
            priority
            height={60}
          />
        </label>
        <div className="flex flex-col items-center justify-center mx-auto text-center transition-all duration-500 ease-in-out w-52 rounded-xl h-52 hover:shadow-2xl">
          <Image
            src={`${
              theme == "dark"
                ? "/logo/nodejs-logo-white.png"
                : "/logo/nodejs-logo.png"
            }`}
            alt="logo"
            width={100}
            priority
            height={60}
          />
        </div>
        <div className="flex flex-col items-center justify-center mx-auto text-center transition-all duration-500 ease-in-out w-52 rounded-xl h-52 hover:shadow-2xl">
          <Image
            src={`${
              theme == "dark"
                ? "/logo/python-logo-white.png"
                : "/logo/python-logo.png"
            }`}
            alt="logo"
            width={110}
            priority
            height={35}
          />
        </div>
        <div className="flex flex-col items-center justify-center mx-auto text-center transition-all duration-500 ease-in-out w-52 rounded-xl h-52 hover:shadow-2xl">
          <Image
            src="/logo/reactjs-logo.png"
            alt="logo"
            width={70}
            priority
            height={70}
          />
        </div>
        <div className="flex flex-col items-center justify-center mx-auto text-center transition-all duration-500 ease-in-out w-52 rounded-xl h-52 hover:shadow-2xl">
          <Image
            src="/logo/codeigniter-logo.png"
            alt="logo"
            width={80}
            priority
            height={90}
          />
        </div>
        <div className="flex flex-col items-center justify-center mx-auto text-center transition-all duration-500 ease-in-out w-52 rounded-xl h-52 hover:shadow-2xl">
          <Image
            src="/logo/laravel-logo.png"
            alt="logo"
            width={70}
            priority
            height={70}
          />
        </div>
        <div className="flex flex-col items-center justify-center mx-auto text-center transition-all duration-500 ease-in-out w-52 rounded-xl h-52 hover:shadow-2xl">
          <Image
            src="/logo/nextjs-logo.png"
            alt="logo"
            width={80}
            priority
            height={80}
          />
        </div>
        <div className="flex flex-col items-center justify-center mx-auto text-center transition-all duration-500 ease-in-out w-52 rounded-xl h-52 hover:shadow-2xl">
          <Image
            src="/logo/react-native-logo.png"
            alt="logo"
            width={70}
            priority
            height={70}
          />
        </div>
      </div>
      <Modal
        for="my-modal-1"
        title="PHP"
        content="adalah bahasa skrip dengan fungsi umum yang terutama digunakan untuk pengembangan web. Bahasa ini awalnya dibuat oleh seorang pemrogram Denmark-Kanada Rasmus Lerdorf pada tahun 1994. Implementasi referensi PHP sekarang diproduksi oleh The PHP Group. PHP awalnya merupakan singkatan dari Personal Home Page, tetapi sekarang merupakan singkatan dari inisialisasi rekursif PHP: Hypertext Preprocessor."
        source="Wikipedia"
        linkSource="https://id.wikipedia.org/wiki/PHP"
      />
    </Zoom>
  );
};

export default Technology;
