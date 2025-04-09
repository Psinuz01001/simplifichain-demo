import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend
);

const MODALS: Record<string, string> = {
  blockchain:
    "A blockchain is like a shared notebook. Everyone can write in it, no one can erase the past. It's safe, open, and permanent.",
  decentralization:
    "Instead of one company holding your money, it's spread across many computers. No middlemen. No banks.",
  contracts:
    "Smart contracts are like automatic agreements written in code. They run themselves — no cheating, no delays.",
};

const coinOptions = [
  { id: "bitcoin", label: "Bitcoin (BTC)" },
  { id: "ethereum", label: "Ethereum (ETH)" },
  { id: "solana", label: "Solana (SOL)" },
  { id: "dogecoin", label: "Dogecoin (DOGE)" },
];

export const BlockchainIntro = () => {
  const [modal, setModal] = useState<null | keyof typeof MODALS>(null);
  const [coin, setCoin] = useState("bitcoin");
  const [prices, setPrices] = useState<number[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchPrices = async (coinId: string) => {
    setLoading(true);
    const res = await fetch(
      `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=7`
    );
    const data = await res.json();
    const extracted = data.prices.map((p: number[]) => p[1]);
    setPrices(extracted);
    setLoading(false);
  };

  useEffect(() => {
    fetchPrices(coin);
  }, [coin]);

  const chartData = {
    labels: prices.map((_, i) => `Day ${i + 1}`),
    datasets: [
      {
        label: `${coinOptions.find((c) => c.id === coin)?.label} Price`,
        data: prices,
        fill: true,
        borderColor: "#60a5fa",
        backgroundColor: "rgba(96, 165, 250, 0.15)",
        tension: 0.4,
        pointRadius: 0,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        labels: { color: "#fff" },
      },
    },
    scales: {
      x: {
        ticks: { color: "#ddd" },
        grid: { color: "rgba(255,255,255,0.05)" },
      },
      y: {
        ticks: { color: "#ddd" },
        grid: { color: "rgba(255,255,255,0.05)" },
      },
    },
  };

  return (
    <section
      id="blockchain"
      className="glass-card max-w-6xl mx-auto mt-20 px-6 py-20 text-center text-white"
    >
      <h2 className="text-4xl font-semibold mb-12">Blockchain. Explained.</h2>

      {/* Три карточки с модалками */}
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {[
          { key: "blockchain", label: "What is Blockchain?" },
          { key: "decentralization", label: "Why Decentralization?" },
          { key: "contracts", label: "Smart Contracts" },
        ].map((item) => (
          <div
            key={item.key}
            onClick={() => setModal(item.key as keyof typeof MODALS)}
            className="cursor-pointer bg-white/20 backdrop-blur-md text-white rounded-2xl p-6 shadow hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold mb-2">{item.label}</h3>
            <p className="text-slate-200 text-sm">
              Click to understand simply.
            </p>
          </div>
        ))}
      </div>

      {/* Выбор монеты */}
      <div className="mb-6">
        <label className="mr-2 text-sm text-slate-200">Select coin:</label>
        <select
          className="bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={coin}
          onChange={(e) => setCoin(e.target.value)}
        >
          {coinOptions.map((c) => (
            <option key={c.id} value={c.id} className="bg-slate-800 text-white">
              {c.label}
            </option>
          ))}
        </select>
      </div>

      {/* График */}
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-lg">
        {loading ? (
          <p className="text-slate-200">Loading...</p>
        ) : (
          <Line data={chartData} options={chartOptions} />
        )}
      </div>

      {/* Модальное окно */}
      {modal && (
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
              Let’s break it down
            </h3>
            <p className="text-gray-700 text-base leading-relaxed">
              {MODALS[modal]}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};
