import Image, { StaticImageData } from "next/image";
const FeaturedCard = ({image, price, title}:{image:StaticImageData, price:string, title:string}) => {
  return (
    // <div className="w-full">
      <div className=" flex flex-col items-center w-full">
        <Image
          src={image}
          alt="heroBG"
          placeholder="blur"
          className="rounded-md"
          //   blurDataURL="/hero.jpg"
          quality={100}
        />
        <div className=" w-full text-2xl font-semibold flex text-black items-center justify-around mt-3">
          <h3>{title}</h3>
          <p>{price}</p>
        </div>
      </div>
    // </div>
  );
};

export default FeaturedCard;
