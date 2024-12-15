'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { navVariants } from '../utils/motion';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { DrawerTrigger } from '@/components/ui/drawer';
import DrawerMenu from '@/components/drawer';
import SparklesText from '@/components/ui/sparkles-text';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div
      className={`${styles.innerWidth} mx-auto flex justify-center gap-8`}
    >
      {/* <img
        src="/search.svg"
        alt="search"
        className="w-[24px] h-[24px] object-contain"
      /> */}
      {/* <h2 className="font-extrabold text-[24px] leading-[30.24px] text-white">
        Blissy
      </h2> */}
      <SparklesText text="Blissy" className={"font-extrabold text-[28px] leading-[30.24px] text-white"} colors={{first:"#1E5128",second:"#00ff00"}}/>;

     {/* <DrawerMenu children={<img
        src="/menu.svg"
        alt="menu"
        className="w-[24px] h-[24px] object-contain"
      />}/> */}
   
                  {/*  */}

                {/* <SidebarTrigger /> */}

    </div>
  </motion.nav>
);

export default Navbar;
