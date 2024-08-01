import React from "react";
import { CONTACT } from "../contstants";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Get In Touch
      </motion.h2>
      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="my-4"
        >
          {CONTACT.address}
        </motion.p>
        <p className="my-4">{CONTACT.phoneNo}</p>
        <a href="#">{CONTACT.email}</a>
      </div>
    </div>
  );
};

export default Contact;
