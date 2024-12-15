// FloatingBottomBar.jsx
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion'; 
import clsx from 'clsx'; 
import { Home, NotebookText, User,MessageSquareText } from 'lucide-react';
import { CoolMode } from '@/components/ui/cool-mode';
import { useRouter } from 'next/router';

const FloatingBottomBar = () => {
  const [activeIndex, setActiveIndex] = useState("/");
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const router = useRouter();

  const navItems = [
    { name: 'Home', href: '/', icon: <Home size={24} /> },
    { name: 'Healers', href: '/healers', icon: <User size={24} /> },
    { name: 'Blogs', href: '/blogs', icon: <NotebookText size={24} /> },
    { name: 'Testimonials', href: '/testimonials', icon: <MessageSquareText size={24} /> },
  ];

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY) {
      setIsVisible(false); // Hide when scrolling down
    } else {
      setIsVisible(true); // Show when scrolling up
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={clsx(
        "fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-[#333] p-2 shadow-lg rounded-full h-16 flex gap-4 w-full max-w-md sm:max-w-sm md:max-w-lg lg:max-w-xl z-50 transition-transform duration-300",
        isVisible ? "translate-y-0" : "translate-y-20"
      )}
    >
      {navItems.map((item, index) => (
              <CoolMode>
<Link
          key={index}
          href={item.href}
          onClick={() => setActiveIndex(item.href)}
          className="relative flex items-center gap-2 justify-center w-full"
        >
          {/* Highlight Bar */}
          {item.href === router.pathname && (
            <motion.div
              className="absolute inset-0 bg-[#1E5128] rounded-full"
              style={{ margin: '2px' }}
              layoutId="highlight"
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            />
          )}
          {/* Icon */}
          <span
            className={clsx(
              "z-10 transition-colors",
              item.href === router.pathname ? "text-white" : "text-gray-500"
            )}
          >
            {item.icon}
          </span>
          {/* Label */}
          <span
            className={clsx(
              "z-10 text-sm transition-colors font-medium",
              item.href === router.pathname ? "text-white" : "text-gray-500"
            )}
          >
            {item.name}
          </span>
        </Link>
              </CoolMode>
        
      ))}
    </nav>
  );
};

export default FloatingBottomBar;
