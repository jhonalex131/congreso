import Image from "next/image";

const Technology = () => {
  return (
    <div className="grid grid-cols-4 mx-auto px-3 xl:px-10 my-20">
      <div className="text-center flex-col w-52 mx-auto rounded-xl h-52 hover:shadow-2xl flex items-center justify-center transition-all duration-500 ease-in-out">
        <Image
          src="/logo/laravel-logo.png"
          alt="logo"
          width={100}
          height={100}
        />
      </div>
      <div className="text-center flex-col w-52 mx-auto rounded-xl h-52 hover:shadow-2xl flex items-center justify-center transition-all duration-500 ease-in-out">
        <Image
          src="/logo/codeigniter-logo.png"
          alt="logo"
          width={86}
          height={100}
        />
      </div>
      <div className="text-center flex-col w-52 mx-auto rounded-xl h-52 hover:shadow-2xl flex items-center justify-center transition-all duration-500 ease-in-out">
        <Image
          src="/logo/nextjs-logo.png"
          alt="logo"
          width={100}
          height={90}
        />
      </div>
      <div className="text-center flex-col w-52 mx-auto rounded-xl h-52 hover:shadow-2xl flex items-center justify-center transition-all duration-500 ease-in-out">
        <Image
          src="/logo/php-logo.png"
          alt="logo"
          width={100}
          height={60}
        />
      </div>
    </div>
  );
};

export default Technology;
