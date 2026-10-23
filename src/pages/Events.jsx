import { useMemo, useState } from "react";
import { motion } from "framer-motion";

import team1 from "@/asserts/team1.jpeg";
import team2 from "@/asserts/team2.jpeg";
import team3 from "@/asserts/team3.jpeg";
import team4 from "@/asserts/team4.jpeg";
import team5 from "@/asserts/team5.jpeg";
import team6 from "@/asserts/team6.jpeg";
import LPLRules from "./LPLRules";
import eventhero from "@/asserts/eventhero.png";
import {
  CalendarDays,
   Clock,
  MapPin,
  Trophy,
  Users,
  ShieldCheck,
  Clock3,
  ChevronDown,
  ArrowRight,
  Flag,
  Info,
} from "lucide-react";

const teams = [
  { name: "Gold Monks", logo: team1, color: "from-amber-300/20" },
  { name: "Lund Warriors", logo: team2, color: "from-yellow-300/20" },
  { name: "Bahubali Gang", logo: team3, color: "from-orange-400/20" },
  { name: "Malmo Super Kings", logo: team4, color: "from-sky-300/20" },
  { name: "Senior Citizens", logo: team5, color: "from-blue-300/20" },
  { name: "Lomma Serial Killers", logo: team6, color: "from-red-400/20" },
];

const fixtures = [
  { number: 1, home: "Gold Monks", away: "Lund Warriors", stage: "League" },
  { number: 2, home: "Bahubali Gang", away: "Senior Citizens", stage: "League" },
  { number: 3, home: "Malmo Super Kings", away: "Lomma Serial Killers", stage: "League" },
  { number: 4, home: "Gold Monks", away: "Bahubali Gang", stage: "League" },
  { number: 5, home: "Lund Warriors", away: "Malmo Super Kings", stage: "League" },
  { number: 6, home: "Senior Citizens", away: "Lomma Serial Killers", stage: "League" },
  { number: 7, home: "Gold Monks", away: "Senior Citizens", stage: "League" },
  { number: 8, home: "Lund Warriors", away: "Lomma Serial Killers", stage: "League" },
  { number: 9, home: "Bahubali Gang", away: "Malmo Super Kings", stage: "League" },
  { number: 10, home: "Gold Monks", away: "Malmo Super Kings", stage: "League" },
  { number: 11, home: "Lund Warriors", away: "Senior Citizens", stage: "League" },
  { number: 12, home: "Bahubali Gang", away: "Lomma Serial Killers", stage: "League" },
  { number: 13, home: "Gold Monks", away: "Lomma Serial Killers", stage: "League" },
  { number: 14, home: "Lund Warriors", away: "Bahubali Gang", stage: "League" },
  { number: 15, home: "Senior Citizens", away: "Malmo Super Kings", stage: "League" },
  { number: 16, home: "2nd Place", away: "3rd Place", stage: "Playoffs", note: "Eliminator" },
  { number: 17, home: "1st Place", away: "Winner of Match 16", stage: "Playoffs", note: "Final" },
];




function TeamLogo({ name, size = "normal" }) {
  const team = teams.find((item) => item.name === name);
  if (!team) return <span className="text-sm font-bold text-white">{name}</span>;
  return (
    <img
      src={team.logo}
      alt={`${team.name} logo`}
      className={`${size === "small" ? "h-12 w-12" : "h-20 w-20 sm:h-24 sm:w-24"} rounded-xl object-contain bg-white p-1.5 shadow-md`}
      loading="lazy"
    />
  );
}

export default function Events() {
  const [stage, setStage] = useState("All Matches");
  const [expandedRule, setExpandedRule] = useState(0);

  const visibleFixtures = useMemo(
    () => (stage === "All Matches" ? fixtures : fixtures.filter((match) => match.stage === stage)),
    [stage]
  );

  const scrollToSchedule = () =>
    document.getElementById("match-schedule")?.scrollIntoView({ behavior: "smooth" });

  return (
    <main className="min-h-screen overflow-hidden bg-[#080f2d] text-white">
      {/* HERO */}
      <section className="relative isolate min-h-[580px] w-full overflow-hidden sm:min-h-[650px]">
        <img
          src={eventhero}
          alt="Lomma Premier League 2026 tournament banner"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
          fetchPriority="high"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#070d28]/55 via-[#070d28]/55 to-[#080f2d]" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#080f2d]/70 via-transparent to-[#080f2d]/30" />

        <div className="mx-auto flex min-h-[580px] max-w-7xl items-end px-5 pb-16 pt-28 sm:min-h-[650px] sm:px-8 sm:pb-20 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#facc15]/50 bg-[#080f2d]/65 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-yellow-300 backdrop-blur-md sm:text-sm">
              <Trophy className="h-4 w-4" /> Tournament Event · 2026
            </div>
            <h1 className="text-4xl font-black uppercase leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">
              Lomma <span className="block text-yellow-300">Premier League</span>
              <span className="mt-2 block text-3xl text-white sm:text-5xl">2026</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-200 sm:text-lg">
              Six teams. One trophy. A day of cricket, competition and community.
            </p>
             
            <div className="mt-7 grid grid-cols-1 gap-3 text-sm sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
  {/* Date */}
  <div className="group flex items-center gap-3 rounded-2xl border border-white/15 bg-[#080f2d]/70 px-4 py-4 shadow-lg backdrop-blur-md transition duration-300 hover:border-yellow-300/60 hover:bg-[#111b3d]/90">
    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-yellow-300/10">
      <CalendarDays className="h-5 w-5 text-yellow-300" />
    </div>
    <div className="min-w-0">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
        Tournament Date
      </p>
      <p className="mt-1 font-bold text-white">
        31 October 2026
      </p>
    </div>
  </div>

  {/* Start Time */}
  <div className="group flex items-center gap-3 rounded-2xl border border-yellow-300/30 bg-[#080f2d]/80 px-4 py-4 shadow-lg backdrop-blur-md transition duration-300 hover:border-yellow-300/70 hover:bg-[#111b3d]/90">
    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-yellow-300/15">
      <Clock className="h-5 w-5 text-yellow-300" />
    </div>
    <div className="min-w-0">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
        Start Time
      </p>
      <p className="mt-1 font-extrabold text-yellow-300">
        8:30 AM
      </p>
    </div>
  </div>

  {/* Venue */}
  <div className="group flex items-center gap-3 rounded-2xl border border-white/15 bg-[#080f2d]/70 px-4 py-4 shadow-lg backdrop-blur-md transition duration-300 hover:border-yellow-300/60 hover:bg-[#111b3d]/90 sm:col-span-2 lg:col-span-1">
    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-yellow-300/10">
      <MapPin className="h-5 w-5 text-yellow-300" />
    </div>
    <div className="min-w-0">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
        Venue
      </p>
      <p className="mt-1 font-bold leading-5 text-white">
        Slättängshallen Indoor Hall, Lomma
      </p>
    </div>
  </div>
</div>

            <button
              onClick={scrollToSchedule}
              className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-yellow-300 px-6 py-3.5 font-extrabold text-[#080f2d] transition hover:-translate-y-0.5 hover:bg-yellow-200 focus:outline-none focus:ring-2 focus:ring-yellow-100 focus:ring-offset-2 focus:ring-offset-[#080f2d]"
            >
              View Match Schedule <ArrowRight className="h-4 w-4" />
            </button>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-yellow-300 to-transparent" />
      </section>

      {/* QUICK FACTS */}
      <section className="mx-auto grid max-w-7xl grid-cols-2 gap-3 px-5 py-8 sm:grid-cols-4 sm:px-8 lg:px-12">
        {[
          { icon: Users, value: "06", label: "Participating teams" },
          { icon: CalendarDays, value: "15", label: "League matches" },
          { icon: Trophy, value: "02", label: "Playoff matches" },
          { icon: Flag, value: "17", label: "Total fixtures" },
        ].map(({ icon: Icon, value, label }) => (
          <div key={label} className="rounded-2xl border border-yellow-300/20 bg-white/[0.035] p-4 sm:p-5">
            <Icon className="mb-3 h-5 w-5 text-yellow-300" />
            <p className="text-3xl font-black text-white sm:text-4xl">{value}</p>
            <p className="mt-1 text-xs text-slate-400 sm:text-sm">{label}</p>
          </div>
        ))}
      </section>

      {/* TEAMS */}
      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:px-12" id="participating-teams">
        <SectionHeading eyebrow="The contenders" title="Meet the teams" description="Six teams. Six identities. One Lomma Premier League trophy." />
        <div className="mt-9 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {teams.map((team, index) => (
            <motion.article
              key={team.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.06, duration: 0.4 }}
              whileHover={{ y: -6 }}
              className={`group rounded-2xl border border-yellow-300/20 bg-gradient-to-br ${team.color} to-white/[0.025] p-4 text-center transition hover:border-yellow-300/60 hover:shadow-[0_12px_40px_rgba(250,204,21,0.08)] sm:p-5`}
            >
              <div className="flex min-h-24 items-center justify-center sm:min-h-28">
                <img src={team.logo} alt={`${team.name} logo`} loading="lazy" className="h-20 w-20 rounded-xl bg-white p-1.5 object-contain transition duration-300 group-hover:scale-105 sm:h-24 sm:w-24" />
              </div>
              <h3 className="mt-4 text-sm font-extrabold leading-snug text-white sm:text-base">{team.name}</h3>
              <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.18em] text-yellow-300/80">Competing · 2026</p>
            </motion.article>
          ))}
        </div>
      </section>

      {/* SCHEDULE */}
      <section id="match-schedule" className="border-y border-white/5 bg-[#0b1436] py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <SectionHeading eyebrow="Every game matters" title="Match schedule" description="Follow the league fixtures through to the eliminator and the final." />
          <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filter matches by stage">
            {["All Matches", "League", "Playoffs"].map((item) => (
              <button
                key={item}
                onClick={() => setStage(item)}
                aria-pressed={stage === item}
                className={`rounded-full border px-4 py-2 text-sm font-bold transition ${stage === item ? "border-yellow-300 bg-yellow-300 text-[#080f2d]" : "border-white/15 bg-white/[0.03] text-slate-300 hover:border-yellow-300/60 hover:text-white"}`}
              >{item}</button>
            ))}
          </div>

          <div className="mt-5 space-y-3">
            {visibleFixtures.map((match, index) => (
              <motion.article
                layout
                key={match.number}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.22, delay: index * 0.015 }}
                className="rounded-2xl border border-yellow-300/25 bg-[#080f2d] p-4 transition hover:border-yellow-300/60 sm:p-5"
              >
                <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-black uppercase tracking-[0.16em] text-yellow-300">
                    {match.note ? `Match ${match.number} · ${match.note}` : `Match ${match.number}`}
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    {match.stage === "League" ? "League stage" : "Playoffs"}
                  </span>
                </div>
                <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 sm:gap-5">
                  <div className="flex min-w-0 flex-col items-center gap-2 text-center sm:flex-row sm:gap-3 sm:text-left">
                    {teams.some((team) => team.name === match.home) ? <TeamLogo name={match.home} size="small" /> : <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-yellow-300/30 bg-yellow-300/10"><Trophy className="h-5 w-5 text-yellow-300" /></div>}
                    <span className="text-xs font-bold leading-snug text-white sm:text-sm">{match.home}</span>
                  </div>
                  <span className="rounded-lg bg-white/[0.06] px-2 py-1 text-[10px] font-black uppercase tracking-wider text-yellow-300 sm:px-3 sm:text-xs">VS</span>
                  <div className="flex min-w-0 flex-col items-center gap-2 text-center sm:flex-row-reverse sm:gap-3 sm:text-right">
                    {teams.some((team) => team.name === match.away) ? <TeamLogo name={match.away} size="small" /> : <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-yellow-300/30 bg-yellow-300/10"><Trophy className="h-5 w-5 text-yellow-300" /></div>}
                    <span className="text-xs font-bold leading-snug text-white sm:text-sm">{match.away}</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
          <p className="mt-5 text-xs leading-5 text-slate-500">The supplied fixture poster does not specify individual match times. Please confirm exact timings with the organisers before publishing them.</p>
        </div>
      </section>

      {/* EVENT DETAILS */}
      
        <LPLRules />
     

      {/* CTA */}
      <section className="px-5 pb-16 sm:px-8 sm:pb-20 lg:px-12">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-yellow-300/30 bg-gradient-to-r from-[#111d49] via-[#101a40] to-[#18264e] px-6 py-10 text-center sm:px-12 sm:py-14">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-yellow-300">Teams · Passion · Community</p>
          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-black sm:text-4xl">See you at the ground.</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-300 sm:text-base">Join us for Lomma Premier League 2026 and celebrate the spirit of cricket in Lomma.</p>
          <button onClick={scrollToSchedule} className="mt-6 inline-flex items-center gap-2 rounded-full bg-yellow-300 px-6 py-3 font-extrabold text-[#080f2d] transition hover:bg-yellow-200">
            Explore Fixtures <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>
    </main>
  );
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45 }}
    >
      <p className="text-xs font-black uppercase tracking-[0.24em] text-yellow-300">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">{title}</h2>
      <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">{description}</p>
    </motion.div>
  );
}
