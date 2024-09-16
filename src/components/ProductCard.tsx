import Image from "next/image";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

interface PropsType {
  img: string; // Image source
  title: string; // Title of the product
  desc: string; // Description of the product
  rating: number; // Rating of the product
  price: string; // Price of the product
}

// Function to generate stars dynamically based on the rating
const generateStars = (rating: number) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<AiFillStar key={i} />);
    } else {
      stars.push(<AiOutlineStar key={i} />);
    }
  }

  return <div className="flex gap-1 text-[20px] text-[#FF9529]">{stars}</div>;
};

const ProductCard: React.FC<PropsType> = ({ img, title, desc, price, rating }) => {
  return (
    <div className="px-4 border border-gray-200 rounded-xl max-w-[400px]">
      <div>
        <Image
          className="w-full h-auto"
          src={img} // Image source should be a valid URL or public path
          width={200}
          height={300}
          alt={title}
        />
      </div>
      <div className="py-4">
        <h3 className="font-bold">{title}</h3>
        <p>{desc}</p>

        {/* Rating stars */}
        <div>{generateStars(rating)}</div>

        <div className="font-bold">Price: ${price}</div>
      </div>
    </div>
  );
};

export default ProductCard;
