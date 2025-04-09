import React from "react";
import { FaPlug, FaPaperPlane, FaExchangeAlt, FaCheckCircle } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export const HowItWorks = () => {
  const { t } = useTranslation();

  const steps = [
    {
      icon: <FaPlug className="text-blue-400 text-3xl" />,
      title: t("hiw_step1_title"),
      description: t("hiw_step1_desc"),
    },
    {
      icon: <FaPaperPlane className="text-purple-400 text-3xl" />,
      title: t("hiw_step2_title"),
      description: t("hiw_step2_desc"),
    },
    {
      icon: <FaExchangeAlt className="text-yellow-400 text-3xl" />,
      title: t("hiw_step3_title"),
      description: t("hiw_step3_desc"),
    },
    {
      icon: <FaCheckCircle className="text-green-400 text-3xl" />,
      title: t("hiw_step4_title"),
      description: t("hiw_step4_desc"),
    },
  ];

  return (
    <motion.section
      id="how"
      className="glass-card max-w-6xl mx-auto mt-20 px-6 py-20 text-center text-white"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h2 className="text-4xl font-semibold mb-12">{t("how_it_works")}</h2>
      <div className="grid gap-8 md:grid-cols-4">
        {steps.map((step, idx) => (
          <motion.div
            key={idx}
            className="bg-white/20 backdrop-blur-md rounded-2xl p-6 shadow-md hover:shadow-xl transition"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.15, duration: 0.6, ease: "easeOut" }}
          >
            <div className="mb-4 flex justify-center">{step.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-slate-100 text-sm">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};
