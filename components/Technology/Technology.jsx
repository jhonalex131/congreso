import { useTheme } from "next-themes";
import Image from "next/image";
import { Zoom } from "react-reveal";

const Technology = () => {
  const { theme } = useTheme();
  return (
    <Zoom cascade>
      <div className="grid justify-center px-3 mx-auto my-20 md:grid-cols-2 lg:grid-cols-4 xl:px-10">
        <div className="flex flex-col items-center justify-center mx-auto text-center transition-all duration-500 ease-in-out w-52 rounded-xl h-52 hover:shadow-2xl">
          <Image
            src="/logo/php-logo.png"
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
            src={`${
              theme == "dark"
                ? "/logo/mongodb-logo-white.png"
                : "/logo/mongodb-logo.png"
            }`}
            alt="logo"
            width={110}
            priority
            height={30}
          />
        </div>
        <div className="flex flex-col items-center justify-center mx-auto text-center transition-all duration-500 ease-in-out w-52 rounded-xl h-52 hover:shadow-2xl">
          <Image
            src="/logo/mySQL-logo.png"
            alt="logo"
            width={110}
            priority
            height={70}
          />
        </div>
        <div className="flex flex-col items-center justify-center mx-auto text-center transition-all duration-500 ease-in-out w-52 rounded-xl h-52 hover:shadow-2xl">
          <Image
            src="/logo/postgreSQL-logo.png"
            alt="logo"
            width={80}
            priority
            height={70}
          />
        </div>
      </div>
    </Zoom>
  );
};

export default Technology;
