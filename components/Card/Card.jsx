import Image from "next/image";
import { Zoom } from "react-reveal";

const Card = (props) => {
  return (
    <>
      <Zoom>
        <div className="z-0 w-full shadow-xl card bg-base-100 image-full mb-7">
          <figure>
            <Image
              src="/images/benefit-image-06.jpg"
              alt="Shoes"
              layout="fill"
              priority
            />
            <div className="absolute inset-0 h-screen min-h-screen opacity-60 bg-neutral bg-blend-darken"></div>
          </figure>
          <div className="card-body">
            <h2 className="card-title">{props.title}</h2>
            <p className="text-sm">{props.description}</p>
            <div className="justify-end mt-3 card-actions">
              <button className="rounded-xl btn btn-primary">Lihat Demo</button>
            </div>
          </div>
        </div>
      </Zoom>
    </>
  );
};

export default Card;
