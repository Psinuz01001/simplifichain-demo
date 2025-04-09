import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { Header } from "./components/Header";
import { ScrollToTopButton } from "./components/ScrollToTopButton";
import { LenisProvider } from "./components/LenisProvider";

export default function App() {
  return (
    <LenisProvider>
    <div className="relative min-h-screen overflow-x-hidden font-sans">
      {/* 🔮 Фиксированный фон с блюром и затемнением */}
      <div className="fixed inset-0 -z-10">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{
            backgroundImage: `url('/bg.png')`,
            backgroundAttachment: "fixed",
          }}
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      </div>

      {/* 🌐 Шапка */}
      <Header />

      {/* 🔗 Контент */}
      <div className="relative z-10 pt-20">
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Router>

        <ScrollToTopButton />
      </div>
    </div>
    </LenisProvider>
  );
}
