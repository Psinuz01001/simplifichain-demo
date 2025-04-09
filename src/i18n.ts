import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      // Header / Hero
      logo: "SimplifiChain",
      join_us: "Join us",
      login: "Log in",
      signup: "Sign up",
      hero_title: "Simplify your crypto journey",
      hero_subtitle: "Accessible. Decentralized. Zero-fee transfers.",

      // Early Access
      get_early_access: "Get early access",
      notify_text: "Be among the first to experience the simplified future of finance.",
      notify_button: "Notify me",
      success_message: "Thanks! We'll be in touch.",

      // How It Works
      how_it_works: "How It Works",
      hiw_step1_title: "Connect",
      hiw_step1_desc: "Start in seconds. No KYC needed.",
      hiw_step2_title: "Send",
      hiw_step2_desc: "Send funds to anyone worldwide.",
      hiw_step3_title: "Exchange",
      hiw_step3_desc: "Swap currencies with zero fees.",
      hiw_step4_title: "Done",
      hiw_step4_desc: "Fast, secure, decentralized.",

      // Why Simplify
      why_simplify: "Why Simplify?",
      why_no_fees: "No Fees",
      why_no_fees_desc: "Send crypto with 0% commission.",
      why_no_banks: "No Banks",
      why_no_banks_desc: "Full control without intermediaries.",
      why_secure: "Secure",
      why_secure_desc: "Blockchain-level protection.",

      // What We Simplify
      what_we_simplify: "What We Simplify",

      goal_transfers_title: "Currency Transfers",
      goal_transfers_short: "Send money instantly and globally.",
      goal_transfers_expl: "No banks, no paperwork. Just send money like a message — fast, easy, and free.",

      goal_exchange_title: "Exchange Processes",
      goal_exchange_short: "Convert currencies in one click.",
      goal_exchange_expl: "Forget about complex exchanges and hidden fees. One button, one conversion.",

      goal_access_title: "Blockchain Access",
      goal_access_short: "Use blockchain without being a techie.",
      goal_access_expl: "No wallets, keys, or jargon. You get the power of blockchain with a clean, simple UI.",

      goal_finance_title: "Financial Interactions",
      goal_finance_short: "Make deals without middlemen.",
      goal_finance_expl: "No need for banks or notaries. Smart contracts handle everything securely.",
    },
  },

  ru: {
    translation: {
      // Header / Hero
      logo: "СимплифайЧейн",
      join_us: "Присоединиться",
      login: "Войти",
      signup: "Регистрация",
      hero_title: "Упростите свой путь в крипто",
      hero_subtitle: "Доступно. Децентрализованно. Без комиссий.",

      // Early Access
      get_early_access: "Ранний доступ",
      notify_text: "Будьте в числе первых, кто опробует упрощённое будущее финансов.",
      notify_button: "Уведомить меня",
      success_message: "Спасибо! Мы свяжемся с вами.",

      // How It Works
      how_it_works: "Как это работает",
      hiw_step1_title: "Подключение",
      hiw_step1_desc: "Начните за секунды. Без регистрации.",
      hiw_step2_title: "Перевод",
      hiw_step2_desc: "Отправляйте деньги по всему миру.",
      hiw_step3_title: "Обмен",
      hiw_step3_desc: "Обменивайте валюту без комиссии.",
      hiw_step4_title: "Готово",
      hiw_step4_desc: "Быстро, безопасно и прозрачно.",

      // Why Simplify
      why_simplify: "Почему Упрощение?",
      why_no_fees: "Без комиссий",
      why_no_fees_desc: "Отправляйте крипту без комиссии.",
      why_no_banks: "Без банков",
      why_no_banks_desc: "Полный контроль. Без посредников.",
      why_secure: "Безопасно",
      why_secure_desc: "Защита уровня блокчейна.",

      // What We Simplify
      what_we_simplify: "Что мы упрощаем",

      goal_transfers_title: "Денежные переводы",
      goal_transfers_short: "Мгновенно и по всему миру.",
      goal_transfers_expl: "Без банков и бумажек. Отправляйте деньги как сообщение — быстро, легко и бесплатно.",

      goal_exchange_title: "Обмен валют",
      goal_exchange_short: "Моментальный обмен в один клик.",
      goal_exchange_expl: "Забудьте про сложные биржи и скрытые комиссии. Один клик — и готово.",

      goal_access_title: "Доступ к блокчейну",
      goal_access_short: "Без тех. знаний и кошельков.",
      goal_access_expl: "Никаких ключей и терминов. Только простой и мощный интерфейс.",

      goal_finance_title: "Финансовые действия",
      goal_finance_short: "Без посредников и третьих лиц.",
      goal_finance_expl: "Без банков и нотариусов. Умные контракты всё делают за вас.",
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });

export default i18n;
