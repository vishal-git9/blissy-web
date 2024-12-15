import { motion } from "framer-motion";
import { Button } from "@/components/ui/button"; // Assuming ShadCN's button component is properly set up
import Meteors from "@/components/ui/meteors";
import Card from "components/healercard";
import { textVariant } from "utils/motion";

import styles from "../styles/hero.module.css"
import Ourhealers from "sections/Healers/ourhealers";
import Footer from "components/Footer";
import NumberTicker from "@/components/ui/number-ticker";
import Journeys from "sections/Healers/journey";
import dummyData from "data/healer";


const Testimonials = () => {
  return (
    <div
      className="relative flex flex-col overflow-hidden w-screen bg-primary-black text-white"
    >
      {/* Background Component */}
      <Meteors />
      <Ourhealers />

      <motion.div
        className="w-full mt-16 z-10 flex items-center justify-center flex-wrap gap-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.2, duration: 0.8 }}
      >
        {dummyData.map((person, index) => (
          <motion.div
            key={index}
            className=""
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
          >
            <Card
              url={person.url}
              name={person.name}
              rating={person.rating}
              reviews={person.reviews}
              issue={person.issue}
              age={person.age}
              gender={person.gender}
              description={person.description}
              experience={person.experience}
              onTalkNowClick={() => console.log(`${person.name} - Talk Now clicked`)}
            />
          </motion.div>
        ))}
      </motion.div>
     <Journeys/>
      <Footer />

    </div>
  );
};

export default Testimonials;