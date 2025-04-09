import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export const Header = () => {
  const [dark, setDark] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const html = document.documentElement;
    if (dark) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [dark]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center bg-white/10 backdrop-blur-md border-b border-white/10 shadow-md">
      {/* Логотип */}
      <div className="text-white font-semibold text-xl tracking-wide drop-shadow">
        {t("logo")}
      </div>

      {/* Правая часть */}
      <div className="flex items-center gap-4">
        {/* Переключатель темы */}
        <label className="relative inline-block w-12 h-6 cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={dark}
            onChange={() => setDark((prev) => !prev)}
          />
          <div className="w-full h-full bg-white/30 rounded-full peer peer-checked:bg-blue-500 transition-colors duration-300" />
          <span className="absolute top-[2px] left-[2px] w-5 h-5 bg-white rounded-full shadow-md transition-transform duration-300 peer-checked:translate-x-6" />
        </label>

        {/* Кнопки */}
        <button className="px-5 py-2 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-md hover:scale-105 transition-transform text-sm">
          {t("login")}
        </button>
        <button className="px-5 py-2 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-md hover:scale-105 transition-transform text-sm">
          {t("signup")}
        </button>
      </div>
    </header>
  );
};
