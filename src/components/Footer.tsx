import React from "react";
import {
  FaTwitter,
  FaTelegramPlane,
  FaGithub,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { i18n } = useTranslation();

  const switchLang = () => {
    i18n.changeLanguage(i18n.language === "en" ? "ru" : "en");
  };

  return (
    <footer className="bg-white/10 backdrop-blur-md text-white mt-20 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Лого */}
        <div className="text-2xl font-semibold">SimplifiChain</div>

        {/* Навигация */}
        <nav className="flex gap-6 text-sm text-slate-200">
          <a href="#" className="hover:text-white transition">About</a>
          <a href="#" className="hover:text-white transition">Docs</a>
          <a href="#" className="hover:text-white transition">Community</a>
          <a href="#" className="hover:text-white transition">Contact</a>
        </nav>

        {/* Соцсети + язык */}
        <div className="flex items-center gap-4 text-xl">
          <a href="#" className="hover:text-blue-400 transition"><FaTwitter /></a>
          <a href="#" className="hover:text-cyan-400 transition"><FaTelegramPlane /></a>
          <a href="#" className="hover:text-slate-200 transition"><FaGithub /></a>

          {/* Переключатель языка */}
          <button
            onClick={switchLang}
            className="ml-4 text-sm text-white bg-white/20 px-3 py-1 rounded-lg hover:bg-white/30 transition"
          >
            {i18n.language === "en" ? "🇬🇧 EN" : "🇷🇺 RU"}
          </button>
        </div>
      </div>

      <p className="text-center text-xs text-slate-300 mt-6">
        © 2025 SimplifiChain. All rights reserved.
      </p>
    </footer>
  );
};
