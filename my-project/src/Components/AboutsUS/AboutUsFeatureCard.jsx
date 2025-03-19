/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import {
  TruckIcon,
  ChatBubbleBottomCenterTextIcon,
  ArrowPathIcon,
  GiftIcon,
} from "@heroicons/react/24/outline";

const FeatureCard = ({ icon, title, description }) => {
  return (
    <motion.div
      className="flex flex-col items-center text-center p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="p-4 mb-6 bg-[#ff7be5] rounded-full text-white">
        {icon}
      </div>
      <h3 className="text-2xl font-semibold mb-4 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

const ProfessionalFeaturesSection = () => {
  const features = [
    {
      icon: <TruckIcon className="w-8 h-8" />,
      title: "Free Shipping",
      description: "From all orders over $100",
    },
    {
      icon: <ChatBubbleBottomCenterTextIcon className="w-8 h-8" />,
      title: "Quality Support",
      description: "24/7 online feedback",
    },
    {
      icon: <ArrowPathIcon className="w-8 h-8" />,
      title: "Return & Refund",
      description: "Return money within 30 days",
    },
    {
      icon: <GiftIcon className="w-8 h-8" />,
      title: "Gift Voucher",
      description: "20% off when you shop online",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProfessionalFeaturesSection;