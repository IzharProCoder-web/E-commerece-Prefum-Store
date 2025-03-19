/* eslint-disable no-unused-vars */
import React from "react";
import { FaEnvelope, FaClock, FaMapMarkerAlt } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { contactData } from "./../../data.js"; // Import the data
import { motion } from "framer-motion"; // Import Framer Motion

const iconComponents = {
  FaMapMarkerAlt,
  FiPhoneCall,
  FaClock,
  FaEnvelope,
};

// Animation variants for the contact cards
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// Animation variants for the container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Stagger the animation of each child
    },
  },
};

const ContactInfoComp = () => {
  return (
    <motion.section
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-8 lg:px-4 my-12 lg:justify-center items-center"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }} // Animate only once
    >
      {contactData.map((contact) => {
        const IconComponent = iconComponents[contact.icon]; // Get the corresponding icon component
        return (
          <motion.div
            key={contact.id}
            className="flex items-center"
            variants={cardVariants}
            whileHover={{ scale: 1.05 }} // Add hover animation
          >
            <div className="mr-[10px] border-dotted border-[2px] p-2 rounded-full border-[#000]">
              <IconComponent size={24} color="#666" /> {/* Render the icon dynamically */}
            </div>
            <div>
              <h3 className="font-[Gabarito] text-[#000] font-bold text-[26px]">
                {contact.title}
              </h3>
              {contact.details.map((detail, index) => (
                <p key={index} className="text-[#666]">
                  {detail}
                </p>
              ))}
            </div>
          </motion.div>
        );
      })}
    </motion.section>
  );
};

export default ContactInfoComp;