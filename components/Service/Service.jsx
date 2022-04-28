import Image from "next/image";

const Service = (props) => {
  return (
    <div className="flex flex-cols-4 items-center mb-16">
      <div className="flex items-center">
        <Image src={props.imgService} alt="Icon" width={props.width} height={props.height} layout="fixed" />
      </div>
      <div className="ml-10 col-span-3">
        <h3 className="mb-3 text-md md:text-2xl font-semibold">{props.title}</h3>
        <p className="text-xs md:text-md">
          {props.children}
        </p>
      </div>
    </div>
  );
};

export default Service;
