import { useState } from "react";
import { motion } from "framer-motion";

const teamsData = [
  {
    name: "Lomma CC",

    players: [
      { name: "Aamir Iqbal", link: "#" },
      { name: "Mohsin Aziz", link: "#" },
      { name: "Kumar Gauravsingh", link: "#" },
      { name: "Ram Nanduri", link: "#" },
      { name: "Sharim Afzal", link: "#" },
      { name: "Nidhin Sudhakaran", link: "#" },
      { name: "Abdul Khan", link: "#" },
      { name: "Adnan Khan", link: "#" },
      { name: "Ahmed Mehmood", link: "#" },
      { name: "Ans Ahmad", link: "#" },
      { name: "Arshad Khan", link: "#" },
      { name: "Bikram Bhatia", link: "#" },
      { name: "Bilal Ahmad", link: "#" },
      { name: "Chaitanya Palley", link: "#" },
      { name: "Daud Khan", link: "#" },
      { name: "Farooq Asim", link: "#" },
      { name: "Fazal Rahman", link: "#" },
      { name: "Gibin Thomas", link: "#" },
      { name: "Gopalakrishnan Srinivasan", link: "#" },
      { name: "Hassan Khan", link: "#" },
      { name: "Imran Nabeei", link: "#" },
      { name: "Irfan Mehmood", link: "#" },
      { name: "Jawad Ahmad", link: "#" },
      { name: "Mohan Kona", link: "#" },
      { name: "Mohsin Ahmed", link: "#" },
      { name: "Mubarak Ahmed", link: "#" },
      { name: "Mubashar Tahir", link: "#" },
      { name: "Muhammad Toheed", link: "#" },
      { name: "Nadir Bajwa", link: "#" },
      { name: "Najam Ul-Haque", link: "#" },
      { name: "Nasir Iqbal", link: "#" },
      { name: "Nayaab Omar", link: "#" },
      { name: "Prashant Kumar", link: "#" },
      { name: "Rajat Varshney", link: "#" },
      { name: "Rajeev Swain", link: "#" },
      { name: "Rizwan Afzal", link: "#" },
      { name: "Rohan Raghunath", link: "#" },
      { name: "Sajid Ahmed", link: "#" },
      { name: "Satya Sahoo", link: "#" },
      { name: "Shabeer Shafiq", link: "#" },
      { name: "Shekhar Jadhav", link: "#" },
      { name: "Sriram Iyer", link: "#" },
      { name: "Tahir Mukhtar", link: "#" },
      { name: "Usman Khalid", link: "#" },
      { name: "Yahya Mubashir", link: "#" },
      { name: "Zulkifl Rashid", link: "#" },
    ],

    previous: [
      {
        date: "4 Oct 2025",
        match: "Landskrona CC vs Lomma CC",
        result: "Abandoned",
        score: "0/0 vs 0/0",
      },
      {
        date: "19 Jul 2025",
        match: "Kristianstad CC vs Lomma CC",
        result: "Lomma CC won by 10 Wickets",
        score: "130/8 vs 132/0",
      },
      {
        date: "19 Jul 2025",
        match: "Lomma CC vs Göteborgs CC (3rd XI)",
        result: "Forfeited (Winner: Lomma CC)",
        score: "0/0 vs 0/0",
      },
      {
        date: "6 Jul 2025",
        match: "Lomma CC vs UNITED CC",
        result: "UNITED CC won by 6 Wickets",
        score: "159/10 vs 161/4",
      },
      {
        date: "15 Jun 2025",
        match: "Evergreen B vs Lomma CC",
        result: "Lomma CC won by 6 Wickets",
        score: "140/8 vs 141/4",
      },
      {
        date: "8 Jun 2025",
        match: "Ängelholms CF vs Lomma CC",
        result: "Abandoned",
        score: "6/0 vs 0/0",
      },
      {
        date: "25 May 2025",
        match: "Malmö CC 2nd XI vs Lomma CC",
        result: "Lomma CC won by 9 Wickets",
        score: "110/9 vs 114/1",
      },
      {
        date: "18 May 2025",
        match: "Lomma CC vs Ariana CC 2nd XI",
        result: "Lomma CC won by 11 Runs",
        score: "168/9 vs 157/8",
      },
      {
        date: "11 May 2025",
        match: "Lomma CC vs Helsingborg Stars",
        result: "Lomma CC won by 55 Runs",
        score: "135/10 vs 80/10",
      },
      {
        date: "4 May 2025",
        match: "LUNDCC A vs Lomma CC",
        result: "LUNDCC A won by 18 Runs",
        score: "143/9 vs 125/10",
      },
    ],

    upcoming: [
      {
        date: "4 Jul 2026",
        day: "Saturday",
        time: "10:00 AM",
        match: "UNITED Shaheens vs Lomma CC",
        league: "2026 T20 - Superettan",
        venue: "Limhamnsfältet 2",
      },
      {
        date: "5 Jul 2026",
        day: "Sunday",
        time: "2:00 PM",
        match: "Lugi Blazers vs Lomma CC",
        league: "2026 T20 - Superettan",
        venue: "Limhamnsfältet 2",
      },
      {
        date: "11 Jul 2026",
        day: "Saturday",
        time: "10:00 AM",
        match: "Malmo Kings vs Lomma CC",
        league: "2026 T20 - Superettan",
        venue: "Limhamnsfältet 2",
      },
      {
        date: "12 Jul 2026",
        day: "Sunday",
        time: "2:00 PM",
        match: "Malmöhus 1st XI vs Lomma CC",
        league: "2026 T20 - Superettan",
        venue: "Limhamnsfältet 2",
      },
      {
        date: "18 Jul 2026",
        day: "Saturday",
        time: "10:00 AM",
        match: "Ariana CC 2nd XI vs Lomma CC",
        league: "2026 T20 - Superettan",
        venue: "Limhamnsfältet 1",
      },
      {
        date: "25 Jul 2026",
        day: "Saturday",
        time: "10:00 AM",
        match: "Nordic CC vs Lomma CC",
        league: "2026 T20 - Superettan",
        venue: "Limhamnsfältet 1",
      },
      {
        date: "1 Aug 2026",
        day: "Saturday",
        time: "10:00 AM",
        match: "Lomma CC vs Helsingborg Gymkhana Titans",
        league: "2026 T20 - Superettan",
        venue: "Limhamnsfältet 1",
      },
      {
        date: "8 Aug 2026",
        day: "Saturday",
        time: "10:00 AM",
        match: "Lomma CC vs Landskrona CC (1st XI)",
        league: "2026 T20 - Superettan",
        venue: "Limhamnsfältet 1",
      },
      {
        date: "15 Aug 2026",
        day: "Saturday",
        time: "10:00 AM",
        match: "Lomma CC vs Malmö CC 2nd XI",
        league: "2026 T20 - Superettan",
        venue: "Limhamnsfältet 1",
      },
      {
        date: "22 Aug 2026",
        day: "Saturday",
        time: "10:00 AM",
        match: "Evergreen B vs Lomma CC",
        league: "2026 T20 - Superettan",
        venue: "Limhamnsfältet 1",
      },
      {
        date: "29 Aug 2026",
        day: "Saturday",
        time: "10:00 AM",
        match: "Lomma CC vs HCA Kings XI",
        league: "2026 T20 - Superettan",
        venue: "Limhamnsfältet 1",
      },
      {
        date: "12 Sep 2026",
        day: "Saturday",
        time: "10:00 AM",
        match: "Lomma CC vs Helsingborg Stars",
        league: "2026 T20 - Superettan",
        venue: "Limhamnsfältet 1",
      },
    ],
  },

  {
    name: "Lomma Gold Monks",
    players: [
      { name: "Aamir Iqbal", link: "#" },
      { name: "Mohsin Aziz", link: "#" },
      { name: "Sharim Afzal", link: "#" },
      { name: "Adnan Khan", link: "#" },
      { name: "Ahmed Mehmood", link: "#" },
      { name: "Ans Ahmad", link: "#" },
      { name: "Arshad Khan", link: "#" },
      { name: "Azim Khan", link: "#" },
      { name: "Bilal Ahmad", link: "#" },
      { name: "Daud Khan", link: "#" },
      { name: "Fazal Rahman", link: "#" },
      { name: "Haroon Sediai", link: "#" },
      { name: "Hassan Khan", link: "#" },
      { name: "Irfan Mehmood", link: "#" },
      { name: "Malyar Muhayuddin", link: "#" },
      { name: "Mohsin Ahmed", link: "#" },
      { name: "Nadir Bajwa", link: "#" },
      { name: "Najam Ul-Haque", link: "#" },
      { name: "Prashant Kumar", link: "#" },
      { name: "Rehan Bajwa", link: "#" },
      { name: "Rizwan Afzal", link: "#" },
      { name: "Sajid Ahmed", link: "#" },
      { name: "Saleem Din", link: "#" },
      { name: "Shabeer Shafiq", link: "#" },
      { name: "Shazil Afzal", link: "#" },
      { name: "Siraj Ud Din Badri", link: "#" },
      { name: "Syedhameed Akber", link: "#" },
      { name: "Talmeez Sheikh", link: "#" },
      { name: "Thangaraj Moorthi", link: "#" },
      { name: "Toheed Ayyan", link: "#" },
      { name: "Ziaulhaq Zadran", link: "#" },
      { name: "Zohaib Ayyan", link: "#" },
      { name: "Zulkifl Rashid", link: "#" },
    ],
    previous: [{
      date: "4 Oct 2025",
      match: "Landskrona CC vs Lomma CC",
      result: "Abandoned",
      score: "0/0 vs 0/0",
    },
    {
      date: "19 Jul 2025",
      match: "Kristianstad CC vs Lomma CC",
      result: "Lomma CC won by 10 Wickets",
      score: "130/8 vs 132/0",
    },],
    upcoming: [
      {
        date: "25 Apr 2026",
        day: "Saturday",
        time: "10:00 AM",
        match: "Lomma Gold Monks vs Helsingborg Gymkhana Titans",
        league: "2026 T30 Div 1",
        venue: "Lomma Cricket Ground",
      },
      {
        date: "2 May 2026",
        day: "Saturday",
        time: "10:00 AM",
        match: "Lomma Gold Monks vs Malmö Warriors",
        league: "2026 T30 Div 1",
        venue: "Lomma Cricket Ground",
      },
      {
        date: "17 May 2026",
        day: "Sunday",
        time: "9:00 AM",
        match: "Lugi Chargers vs Lomma Gold Monks",
        league: "2026 T30 Div 1",
        venue: "Limhamnsfältet 2",
      },
      {
        date: "23 May 2026",
        day: "Saturday",
        time: "9:00 AM",
        match: "Lomma Gold Monks vs Kalmar CF",
        league: "2026 T30 Div 1",
        venue: "Lomma Cricket Ground",
      },
      {
        date: "30 May 2026",
        day: "Saturday",
        time: "9:00 AM",
        match: "Malmöhus 2nd XI vs Lomma Gold Monks",
        league: "2026 T30 Div 1",
        venue: "Lindängen Malmö",
      },
      {
        date: "6 Jun 2026",
        day: "Saturday",
        time: "1:30 PM",
        match: "Lomma Gold Monks vs Malmö CC 2nd XI",
        league: "2026 T30 Div 1",
        venue: "Lomma Cricket Ground",
      },
      {
        date: "14 Jun 2026",
        day: "Sunday",
        time: "10:00 AM",
        match: "UNITED Shaheens vs Lomma Gold Monks",
        league: "2026 T30 Div 1",
        venue: "Limhamnsfältet 1",
      },
    ],
  },

  {
    name: "Lomma Kings XI",
    players: [
      { name: "Mohsin Aziz", link: "#" },
      { name: "Kumar Gauravsingh", link: "#" },
      { name: "Ram Nanduri", link: "#" },
      { name: "Nidhin Sudhakaran", link: "#" },
      { name: "Abdul Khan", link: "#" },
      { name: "Chaitanya Palley", link: "#" },
      { name: "Gibin Thomas", link: "#" },
      { name: "Mohan Kona", link: "#" },
      { name: "Nadir Bajwa", link: "#" },
      { name: "Najam Ul-Haque", link: "#" },
      { name: "Nasir Iqbal", link: "#" },
      { name: "Prashant Kumar", link: "#" },
      { name: "Rajat Varshney", link: "#" },
      { name: "Rajeev Swain", link: "#" },
      { name: "Rajwan Chowdhury", link: "#" },
      { name: "Ratikant Rath", link: "#" },
      { name: "Rohan Raghunath", link: "#" },
      { name: "Sajid Ahmed", link: "#" },
      { name: "Satya Sahoo", link: "#" },
      { name: "Shabeer Shafiq", link: "#" },
      { name: "Shekhar Jadhav", link: "#" },
      { name: "Siddharth Ubale", link: "#" },
      { name: "Sriram Iyer", link: "#" },
      { name: "Sushil Rajasekaran", link: "#" },
      { name: "Thangaraj Moorthi", link: "#" },
      { name: "Usman Khalid", link: "#" },
      { name: "Vijayavignesh Vijayakumar", link: "#" },
    ],
    previous: [{
      date: "4 Oct 2025",
      match: "Landskrona CC vs Lomma CC",
      result: "Abandoned",
      score: "0/0 vs 0/0",
    },
    {
      date: "19 Jul 2025",
      match: "Kristianstad CC vs Lomma CC",
      result: "Lomma CC won by 10 Wickets",
      score: "130/8 vs 132/0",
    },],
    upcoming: [
      {
        day: "Saturday",
        date: "2 May 2026",
        time: "10:00 AM",
        match: "Lugi Strikers vs Lomma Kings XI",
        league: "2026 T30 - Div 1",
        venue: "Lindängen Malmö",
      },
      {
        day: "Saturday",
        date: "16 May 2026",
        time: "10:00 AM",
        match: "Landskrona CC (1st XI) vs Lomma Kings XI",
        league: "2026 T30 - Div 1",
        venue: "Landskrona",
      },
      {
        day: "Saturday",
        date: "23 May 2026",
        time: "1:30 PM",
        match: "Lomma Kings XI vs Helsingborg Gymkhana Challengers",
        league: "2026 T30 - Div 1",
        venue: "Lomma Cricket Ground",
      },
      {
        day: "Saturday",
        date: "30 May 2026",
        time: "10:00 AM",
        match: "Lomma Kings XI vs HCA Kings XI Extended",
        league: "2026 T30 - Div 1",
        venue: "Lomma Cricket Ground",
      },
      {
        day: "Saturday",
        date: "6 June 2026",
        time: "10:00 AM",
        match: "Lomma Kings XI vs Helsingborg Stars",
        league: "2026 T30 - Div 1",
        venue: "Lomma Cricket Ground",
      },
      {
        day: "Saturday",
        date: "13 June 2026",
        time: "10:00 AM",
        match: "Lomma Kings XI vs Kristianstad CC",
        league: "2026 T30 - Div 1",
        venue: "Lomma Cricket Ground",
      },
      {
        day: "Saturday",
        date: "20 June 2026",
        time: "1:30 PM",
        match: "Helsingborg Gymkhana Strikers vs Lomma Kings XI",
        league: "2026 T30 - Div 1",
        venue: "Helsingborg",
      },
    ],
  },

  {
    name: "Lomma Panthers",
    players: [
      { name: "Aamir Iqbal", link: "#" },
      { name: "Mohsin Aziz", link: "#" },
      { name: "Adnan Khan", link: "#" },
      { name: "Bikram Bhatia", link: "#" },
      { name: "Bilal Ahmad", link: "#" },
      { name: "Daud Khan", link: "#" },
      { name: "Eranda Atulugama", link: "#" },
      { name: "Harshit Sharma", link: "#" },
      { name: "Hassan Khan", link: "#" },
      { name: "Malyar Muhayuddin", link: "#" },
      { name: "Mohsin Ahmed", link: "#" },
      { name: "Nadir Bajwa", link: "#" },
      { name: "Najam Ul-Haque", link: "#" },
      { name: "Nitheesh Thirupathi", link: "#" },
      { name: "Prashant Kumar", link: "#" },
      { name: "Priyesh Ranjan", link: "#" },
      { name: "Rajeev Swain", link: "#" },
      { name: "Ratikant Rath", link: "#" },
      { name: "Sajid Ahmed", link: "#" },
      { name: "Satya Sahoo", link: "#" },
      { name: "Shabeer Shafiq", link: "#" },
      { name: "Sushil Rajasekaran", link: "#" },
      { name: "Talmeez Sheikh", link: "#" },
      { name: "Thangaraj Moorthi", link: "#" },
      { name: "Zulkifl Rashid", link: "#" },
    ],
    previous: [{
      date: "4 Oct 2025",
      match: "Landskrona CC vs Lomma CC",
      result: "Abandoned",
      score: "0/0 vs 0/0",
    },
    {
      date: "19 Jul 2025",
      match: "Kristianstad CC vs Lomma CC",
      result: "Lomma CC won by 10 Wickets",
      score: "130/8 vs 132/0",
    },],
    upcoming: [
      {
        date: "27 Jun 2026",
        day: "Saturday",
        time: "10:00 AM",
        match: "Lugi Chargers vs Lomma Panthers",
        league: "2026 T20 Div 1",
        venue: "Lindängen Malmö",
      },
      {
        date: "5 Jul 2026",
        day: "Sunday",
        time: "2:00 PM",
        match: "Landskrona CC (2nd XI) vs Lomma Panthers",
        league: "2026 T20 Div 1",
        venue: "LCC Landskrona",
      },
      {
        date: "12 Jul 2026",
        day: "Sunday",
        time: "2:00 PM",
        match: "Lomma Panthers vs Kristianstad CC",
        league: "2026 T20 Div 1",
        venue: "Limhamnsfältet 1",
      },
      {
        date: "19 Jul 2026",
        day: "Sunday",
        time: "2:00 PM",
        match: "Lomma Panthers vs Helsingborg Gymkhana Strikers",
        league: "2026 T20 Div 1",
        venue: "Limhamnsfältet 2",
      },
      {
        date: "16 Aug 2026",
        day: "Sunday",
        time: "10:00 AM",
        match: "Lomma Panthers vs HCA Kings XI Extended",
        league: "2026 T20 Div 1",
        venue: "Lindängen Malmö",
      },
      {
        date: "23 Aug 2026",
        day: "Sunday",
        time: "10:00 AM",
        match: "Malmöhus 2nd XI vs Lomma Panthers",
        league: "2026 T20 Div 1",
        venue: "Limhamnsfältet 1",
      },
      {
        date: "30 Aug 2026",
        day: "Sunday",
        time: "2:00 PM",
        match: "Lomma Panthers vs Kalmar CF",
        league: "2026 T20 Div 1",
        venue: "Limhamnsfältet 2",
      },
    ],
  },
];

export default function Teams() {
  const [activeTeam, setActiveTeam] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white px-6 md:px-16 py-20 relative overflow-hidden">

      {/* 🔥 BACKGROUND GLOW (same as Home feel) */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/20 blur-3xl rounded-full" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-yellow-400/10 blur-3xl rounded-full" />

      {/* 🔥 TITLE */}
      <h1 className="text-4xl md:text-6xl font-extrabold text-center mb-12 bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent tracking-wide">
        Our Teams
      </h1>

      {/* 🔥 TEAM SELECTOR */}
      <div className="flex flex-wrap justify-center gap-4 mb-14">
        {teamsData.map((team, i) => (
          <button
            key={i}
            onClick={() => setActiveTeam(i)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 backdrop-blur-md border
          ${activeTeam === i
                ? "bg-orange-500 text-black shadow-lg scale-105 border-orange-400"
                : "bg-white/5 border-white/10 hover:bg-orange-400 hover:text-black hover:scale-105"
              }`}
          >
            {team.name}
          </button>
        ))}
      </div>

      {/* 🔥 TEAM NAME */}
      <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-center text-orange-400 tracking-wide">
        {teamsData[activeTeam].name}
      </h2>

      {/* 🔥 CONTENT */}
      <motion.div
        key={activeTeam}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid md:grid-cols-3 gap-8"
      >

        {/* 🧑 PLAYERS */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 h-[520px] flex flex-col shadow-2xl">

          <h3 className="text-lg font-semibold mb-4 sticky top-0 bg-black/60 backdrop-blur-md py-2 border-b border-white/10 z-10">
            Players
          </h3>

          <div className="flex-1 overflow-y-auto pr-2 space-y-2 text-sm scrollbar-thin">
            {teamsData[activeTeam].players.map((player, i) => (
              <a
                key={i}
                href={player.link}
                target="_blank"
                className="block px-3 py-2 rounded-lg transition hover:bg-orange-500 hover:text-black hover:translate-x-1"
              >
                {player.name}
              </a>
            ))}
          </div>
        </div>

        {/* 🏏 PREVIOUS MATCHES */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 h-[520px] flex flex-col shadow-2xl">

          <h3 className="text-lg font-semibold mb-4 sticky top-0 bg-black/60 backdrop-blur-md py-2 border-b border-white/10 z-10">
            Previous Matches
          </h3>

          <div className="flex-1 overflow-y-auto pr-2 space-y-4">
            {teamsData[activeTeam].previous.map((m, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-black/40 border border-white/10 hover:border-orange-400 transition hover:scale-[1.02]"
              >
                <p className="text-xs text-orange-400 mb-1">{m.date}</p>
                <p className="font-medium">{m.match}</p>
                <p className="text-gray-400 text-sm">{m.score}</p>
                <p className={`text-sm mt-1 ${m.result.includes("won") ? "text-green-400" : "text-red-400"
                  }`}>
                  {m.result}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* UPCOMING MATCHES */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 h-[520px] flex flex-col shadow-2xl">

          <h3 className="text-lg font-semibold mb-4 sticky top-0 bg-black/60 backdrop-blur-md py-2 border-b border-white/10 z-10">
            Upcoming Matches
          </h3>

          <div className="flex-1 overflow-y-auto pr-2 space-y-4">
            {teamsData[activeTeam].upcoming.map((m, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-black/40 border border-white/10 hover:border-orange-400 transition hover:scale-[1.02]"
              >
                <p className="text-xs text-orange-400 mb-1">
                  {m.day} • {m.date}
                </p>
                <p className="font-semibold">{m.match}</p>
                <p className="text-gray-400 text-sm">🏟 {m.venue}</p>
                <p className="text-gray-500 text-xs">
                  {m.league} • {m.time}
                </p>
              </div>
            ))}
          </div>
        </div>

      </motion.div>

      <section className="mt-20">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent">
          Match Highlights
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {[
            "https://www.youtube.com/embed/Ti9ko08SEaI",
            "https://www.youtube.com/embed/k7zZz95-Ds0",
            "https://www.youtube.com/embed/DG5kwDHaLBk",
            "https://www.youtube.com/embed/bxvkvnvmEj4",
            "https://www.youtube.com/embed/wkbRKwFYDOk",
            "https://www.youtube.com/embed/Ti9ko08SEaI",
          ].map((video, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden shadow-xl"
            >
              <iframe
                src={video}
                className="w-full h-56 md:h-64"
                allowFullScreen
              />

              <div className="p-4">
                <p className="text-sm text-gray-300">
                  Highlight Match #{i + 1}
                </p>
              </div>
            </motion.div>
          ))}

        </div>
      </section>
    </div>
  );
}