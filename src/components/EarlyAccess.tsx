import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export const EarlyAccess = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail("");
  };

  return (
    <motion.section
      id="early-access"
      className="glass-card max-w-3xl mx-auto mt-20 px-6 py-16 text-center text-white"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl md:text-4xl font-semibold mb-4 drop-shadow">
        {t("get_early_access")}
      </h2>
      <p className="text-slate-100 mb-8 text-sm md:text-base">{t("notify_text")}</p>

      {submitted ? (
        <motion.p
          className="text-green-400 font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {t("success_message")}
        </motion.p>
      ) : (
        <motion.form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row gap-4 items-center justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
            className="bg-white/20 backdrop-blur-md text-white placeholder-white/60 px-4 py-2 rounded-xl w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="px-5 py-2 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-md hover:scale-105 transition-transform text-sm"
          >
            {t("notify_button")}
          </button>
        </motion.form>
      )}
    </motion.section>
  );
};
