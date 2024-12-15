import NumberTicker from "@/components/ui/number-ticker";
import { motion } from "framer-motion";

const Journeys = () => {
    return (
        <motion.div className="flex flex-col justify-center items-center mt-5">
            <div>
            <NumberTicker className={"text-white text-4xl text-center font-bold"} value={100} /> <span className="font-bold text-center text-middle">+</span>
            </div>
            <p className="whitespace-pre-wrap text-xl font-medium tracking-tighter text-center text-white dark:text-white">

                and counting...
            </p>
            
        </motion.div>
    )
}

export default Journeys