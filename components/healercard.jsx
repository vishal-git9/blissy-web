import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";

const Card = ({
  name,
  rating,
  reviews,
  issue,
  age,
  url,
  gender,
  description,
  experience,
  onTalkNowClick,
}) => {
  return (
    <motion.div
      className="flex flex-col p-4 bg-[#333] text-white rounded-lg shadow-lg hover:shadow-xl transition-shadow md:w-80"
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex items-center mb-4">
        <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-700">
          <Image
            src={url}
            alt={`${name}'s profile picture`}
            width={64}
            height={64}
            className="object-cover"
          />
        </div>
        <div className="ml-4">
          <h2 className="text-lg font-semibold">{name}</h2>
          <p className="text-sm text-gray-400">
            {rating} ★ ({reviews}) - {issue}
          </p>
        </div>
      </div>
      <div className="text-sm text-gray-300 mb-4">
        <p>{description}</p>
      </div>
      <div className="flex justify-between items-center text-sm mb-4">
        <p className="text-gray-400">{gender} - {age} yrs</p>
        <p className="text-gray-400">Exp: {experience} Hrs</p>
      </div>
      <Button
        onClick={onTalkNowClick}
        className="w-full bg-[#1E5128] hover:bg-green-600 text-white font-semibold py-2 rounded-full"
      >
        Talk Now
      </Button>
    </motion.div>
  );
};

export default Card;


