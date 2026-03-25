import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const teamsData = [
  {
    name: "Lomma CC",
    players: ["Player 1", "Player 2", "Player 3", "Player 4"],
    previous: ["Won vs Kings XI", "Lost vs Panthers"],
    upcoming: ["vs Lions CC - 25 Mar", "vs Panthers - 30 Mar"],
  },
  {
    name: "Lomma Lions CC",
    players: ["Player A", "Player B", "Player C"],
    previous: ["Won vs Panthers"],
    upcoming: ["vs Lomma CC - 25 Mar"],
  },
  {
    name: "Lomma Kings XI",
    players: ["Player X", "Player Y", "Player Z"],
    previous: ["Lost vs Lomma CC"],
    upcoming: ["vs Panthers - 28 Mar"],
  },
  {
    name: "Lomma Panthers",
    players: ["Player M", "Player N", "Player O"],
    previous: ["Won vs Lions"],
    upcoming: ["vs Kings XI - 28 Mar"],
  },
];

export default function Teams() {
  const [activeTeam, setActiveTeam] = useState(0);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-16 py-20">

      {/* 🔥 TITLE */}
      <h1 className="text-4xl md:text-6xl font-bold text-center mb-12">
        Our Teams
      </h1>

      {/* 🔥 TEAM SELECTOR */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {teamsData.map((team, i) => (
          <button
            key={i}
            onClick={() => setActiveTeam(i)}
            className={`px-6 py-2 rounded-full transition ${
              activeTeam === i
                ? "bg-orange-500 text-black"
                : "bg-white/10 hover:bg-orange-400 hover:text-black"
            }`}
          >
            {team.name}
          </button>
        ))}
      </div>

      {/* 🔥 TEAM CONTENT */}
      <motion.div
        key={activeTeam}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid md:grid-cols-3 gap-10"
      >

        {/* 🧑 PLAYERS */}
        <div className="bg-white/10 rounded-2xl p-6">
          <h2 className="text-xl font-bold mb-4">Players</h2>

          <div className="flex flex-col gap-3">
            {teamsData[activeTeam].players.map((player, i) => (
              <div
                key={i}
                onClick={() => navigate(`/player/${player}`)}
                className="cursor-pointer p-2 rounded hover:bg-orange-500 hover:text-black transition"
              >
                {player}
              </div>
            ))}
          </div>
        </div>

        {/* 🏏 PREVIOUS MATCHES */}
        <div className="bg-white/10 rounded-2xl p-6">
          <h2 className="text-xl font-bold mb-4">Previous Matches</h2>

          <div className="flex flex-col gap-3 text-gray-300">
            {teamsData[activeTeam].previous.map((match, i) => (
              <div key={i}>{match}</div>
            ))}
          </div>
        </div>

        {/* 📅 UPCOMING MATCHES */}
        <div className="bg-white/10 rounded-2xl p-6">
          <h2 className="text-xl font-bold mb-4">Upcoming Matches</h2>

          <div className="flex flex-col gap-3 text-gray-300">
            {teamsData[activeTeam].upcoming.map((match, i) => (
              <div key={i}>{match}</div>
            ))}
          </div>
        </div>

      </motion.div>

    </div>
  );
}