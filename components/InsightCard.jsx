'use client';

import { motion } from 'framer-motion';

import { fadeIn } from '../utils/motion';
import { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const InsightCard = ({ imgUrl, title, subtitle, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      variants={fadeIn('up', 'spring', index * 0.5, 1)}
      className="flex flex-col w-full border-b border-gray-600 py-4"
    >
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h1 className="font-bold text-[24px] text-white">
          {title}
        </h1>
        {
          isOpen ? <FaAngleUp color='white' size={25} /> : <FaAngleDown color='white'size={25}  />
        }
      </div>
      {isOpen && (
        <motion.p
          initial={{ height: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          // transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="mt-4 text-[18px] text-secondary-white"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );

}

export default InsightCard;
