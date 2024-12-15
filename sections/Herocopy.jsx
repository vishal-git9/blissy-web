'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import styles from '../styles';
import { slideIn, staggerContainer } from '../utils/motion';

const Hero = () => {
  const [startRotation, setStartRotation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartRotation(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const rotateVariant = {
    initial: (i) => ({
      rotate: 180, 
      opacity: 1,
    }),
    animate: (i) => ({
      rotate: 0, 
      opacity: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
      },
    }),
  };

  // Define the text
  const title = "Awaits";
  const letters = title.split('');

  return (
    <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <div className="flex justify-center items-center flex-col relative z-10">
          <motion.h1 className={styles.heroHeading}>
            Healing
          </motion.h1>

          <motion.h1 className={`${styles.heroHeading} flex`}>
            {letters.map((letter, index) => (
              <motion.span
                key={index}
                custom={index}
                variants={rotateVariant}
                initial="initial"
                animate={startRotation ? 'animate' : 'initial'}
                className="inline-block"
              >
                {letter}
              </motion.span>
            ))}
          </motion.h1>
        </div>

        <motion.div
          variants={slideIn('right', 'tween', 0.2, 1)}
          className="relative w-full md:-mt-[20px] -mt-[12px]"
        >
          <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]" />

          <img
            src="/blissybanner.png"
            alt="hero_cover"
            className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
