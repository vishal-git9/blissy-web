import { textVariant } from "utils/motion";
import Styles from "../../styles"
import { motion } from "framer-motion";
import ShimmerButton from "@/components/ui/shimmer-button";

const Ourhealers = () => {
    return (
        <motion.div
        className="relative z-10 flex mt-16 flex-col items-center text-center gap-6 px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
            <motion.h1 variants={textVariant(1.1)} className={Styles.mediumHeading}>
                Our Healers
            </motion.h1>

            <blockquote className="italic text-sm md:text-xl">
          <p>“Healing yourself is connected with healing others.”</p>
          <footer className="mt-2 text-sm md:text-base">- Yoko Ono</footer>
        </blockquote>
        <ShimmerButton className="shadow-2xl">
        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
          Become a healer
        </span>
      </ShimmerButton>

        </motion.div>
    )
}

export default Ourhealers