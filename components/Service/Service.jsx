import Image from "next/image";

const Service = (props) => {
  return (
    <div className="flex items-center mb-16 flex-cols-4">
      <div className="flex items-center">
        <Image src={props.imgService} alt="Icon" width={props.width} height={props.height} layout="fixed" priority />
      </div>
      <div className="col-span-3 ml-10">
        <h3 className="mb-3 font-semibold text-md md:text-2xl">{props.title}</h3>
        <p className="text-xs md:text-md">
          {props.children}
        </p>
      </div>
    </div>
  );
};

export default Service;
