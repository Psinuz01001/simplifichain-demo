import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FaCoins, FaUniversity, FaShieldAlt } from "react-icons/fa";

export const WhySimplify = () => {
  const { t } = useTranslation();

  const items = [
    {
      icon: <FaCoins className="text-yellow-400 text-3xl mb-4" />,
      title: t("why_no_fees"),
      desc: t("why_no_fees_desc"),
    },
    {
      icon: <FaUniversity className="text-purple-400 text-3xl mb-4" />,
      title: t("why_no_banks"),
      desc: t("why_no_banks_desc"),
    },
    {
      icon: <FaShieldAlt className="text-green-400 text-3xl mb-4" />,
      title: t("why_secure"),
      desc: t("why_secure_desc"),
    },
  ];

  return (
    <motion.section
      className="glass-card max-w-6xl mx-auto mt-20 px-6 py-20 text-center text-white"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl font-semibold mb-12">{t("why_simplify")}</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {items.map((item, idx) => (
          <motion.div
            key={idx}
            className="bg-white/20 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-[1.03] transition-all cursor-default"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.15, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-slate-100 text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};
