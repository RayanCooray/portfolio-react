import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Navbar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [active, setActive] = useState(false);

  // Collapse into circle after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setCollapsed(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <motion.nav
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
        animate={{
          width: collapsed && !active ? 60 : 320,
          borderRadius: collapsed ? 999 : 20,
        }}
        transition={{ type: "spring", stiffness: 120, damping: 15 }}
        className="backdrop-blur-xl bg-neutral-900/70 border border-neutral-800 shadow-2xl"
      >
        <div className="flex items-center justify-center px-4 py-3">
          <AnimatePresence mode="wait">
            {collapsed && !active ? (
              // CIRCLE MODE (after 5s)
              <motion.div
                key="circle"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                className="text-xl"
              >⭕
            
              </motion.div>
            ) : (
              // FULL FLOATING BAR
              <motion.div
                key="full"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex items-center gap-6 text-xl"
              >
                <a
                  href="https://www.linkedin.com/in/rayan-cooray-3193a1262/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-400 transition"
                >
                  <FaLinkedin />
                </a>

                <a
                  href="https://github.com/rayanCooray/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-400 transition"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://www.instagram.com/rayan_cooray/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-400 transition"
                >
                  <FaInstagram />
                </a>

                <a
                  href="https://twitter.com/rayan_cooray"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-400 transition"
                >
                  <FaSquareXTwitter />
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
    </div>
  );
};

export default Navbar;