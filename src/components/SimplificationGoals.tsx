import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  FaExchangeAlt,
  FaMoneyBillWave,
  FaUnlock,
  FaUserShield,
} from "react-icons/fa";

export const SimplificationGoals = () => {
  const { t } = useTranslation();
  const [modal, setModal] = useState<null | string>(null);

  const goals = [
    {
      key: "transfers",
      icon: <FaMoneyBillWave className="text-green-400 text-3xl" />,
      title: t("goal_transfers_title"),
      short: t("goal_transfers_short"),
      explanation: t("goal_transfers_expl"),
    },
    {
      key: "exchange",
      icon: <FaExchangeAlt className="text-blue-400 text-3xl" />,
      title: t("goal_exchange_title"),
      short: t("goal_exchange_short"),
      explanation: t("goal_exchange_expl"),
    },
    {
      key: "access",
      icon: <FaUnlock className="text-yellow-400 text-3xl" />,
      title: t("goal_access_title"),
      short: t("goal_access_short"),
      explanation: t("goal_access_expl"),
    },
    {
      key: "finance",
      icon: <FaUserShield className="text-purple-400 text-3xl" />,
      title: t("goal_finance_title"),
      short: t("goal_finance_short"),
      explanation: t("goal_finance_expl"),
    },
  ];

  const selected = goals.find((g) => g.key === modal);

  return (
    <motion.section
      id="simplify"
      className="glass-card max-w-6xl mx-auto mt-20 px-6 py-20 text-center text-white"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl font-semibold mb-12">
        {t("what_we_simplify")}
      </h2>

      <div className="grid gap-8 md:grid-cols-2">
        {goals.map((goal, idx) => (
          <motion.div
            key={goal.key}
            onClick={() => setModal(goal.key)}
            className="bg-white/30 backdrop-blur-md text-white rounded-2xl shadow-md p-6 hover:shadow-xl hover:scale-[1.02] transition cursor-pointer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.15, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="mb-4 flex justify-center">{goal.icon}</div>
            <h3 className="text-xl font-semibold mb-2 drop-shadow">
              {goal.title}
            </h3>
            <p className="text-slate-100 text-sm">{goal.short}</p>
          </motion.div>
        ))}
      </div>

      {selected && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setModal(null)}
        >
          <div
            className="bg-white max-w-lg w-[90%] mx-auto p-8 rounded-3xl shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModal(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-3xl"
            >
              ×
            </button>
            <h3 className="text-2xl font-semibold mb-4 text-slate-800">
              {selected.title}
            </h3>
            <p className="text-gray-700 text-base leading-relaxed">
              {selected.explanation}
            </p>
          </div>
        </div>
      )}
    </motion.section>
  );
};
