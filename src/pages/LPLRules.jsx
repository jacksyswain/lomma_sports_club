
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Trophy,
  Clock,
  Building2,
  CircleDot,
  Swords,
  ShieldCheck,
  Users,
  Gavel,
  AlertTriangle,
  UserRoundCheck,
  ClipboardList,
} from "lucide-react";

const ruleSections = [
  {
    title: "Match Structure",
    icon: Clock,
    rules: [
      "Each match consists of 6 overs per side.",
      "The Eliminator match will be limited to 4 overs per side.",
      "The Final will be played based on the time available.",
      "Each team will play 5 league matches (one against every other team).",
    ],
  },
  {
    title: "Playoff Format",
    icon: Trophy,
    rules: [
      "The team finishing 1st in the league table qualifies directly for the Final.",
      "The teams finishing 2nd and 3rd will play the Eliminator, and the winner will advance to the Final.",
    ],
  },
  {
    title: "Indoor Venue",
    icon: Building2,
    rules: [
      "Matches will be played across the full length of the indoor sports hall.",
      "The playing surface will be a mat pitch.",
    ],
  },
  {
    title: "Indoor Ground Rules",
    icon: CircleDot,
    rules: [
      "A ball that hits the straight wall after bouncing or touches any part of the hall before hitting the straight wall is awarded 4 runs.",
      "A ball that hits the straight wall directly is awarded 6 runs. If the ball touches the side wall before reaching the straight wall, it will not be considered a Four.",
      "Apart from fours and sixes, runs may be scored by running between the wickets.",
      "Overthrows require the batters to run; no boundary runs will be awarded.",
      "If the ball hits the side wall and behind the keeper wall directly and is then caught by a fielder, the batter is out.",
      "If the ball hits the roof and is caught both-hand by a fielder before touching the ground, the batter is out.",
      "If the ball gets stuck somewhere before hitting the straight wall, one run will be declared and the batter can remain on strike.",
    ],
  },
  {
    title: "Batting Restrictions",
    icon: Swords,
    rules: [
      "A batter may face a maximum 10 legal balls , no balls , wide balls will not be added to 10 balls, no matter how many overs are left at the end. This applies to both innings in a match.",
      "The last batter will be provided with a runner from the same team. If the runner is dismissed, the last batter will also be considered out.",
      "Byes are not allowed.",
      "A new batter must take a strike after a dismissal, except in the case of a run-out where the batting order remains unchanged if applicable.",
    ],
  },
  {
    title: "Bowling Restrictions",
    icon: ShieldCheck,
    rules: [
      "A delivery that lands outside the pitch on either side is considered a no-ball (not behind the wicket).",
      "A player may bowl a maximum of 1 over per match.",
      "An illegal bowling action will result in a warning, and any subsequent violation will be called a no-ball.",
      "Only one bouncer per over is allowed.",
      "There is no free hit if bowler bowls no ball only a extra ball and 1 extra run.",
      "A wide or no-ball results in 1 extra run.",
    ],
  },
  {
    title: "Wicketkeeping",
    icon: ShieldCheck,
    rules: [
      "Stumping is allowed either by hand or through an underarm throw at the stumps.",
    ],
  },
  {
    title: "Fielding Restrictions",
    icon: Users,
    rules: [
      "Fielders must remain within their designated zones before the ball is delivered. Any violation will result in a no-ball.",
    ],
  },
  {
    title: "Umpiring and Disputes",
    icon: Gavel,
    rules: [
      "Only team captains may discuss decisions with the umpires.",
      "All umpiring decisions are final and binding.",
    ],
  },
  {
    title: "Penalties",
    icon: AlertTriangle,
    rules: [
      "Arguments, misconduct, or fighting may result in a 5-run penalty against the offending team.",
      "Major disruptions or unsporting behavior may result in a 1-point reduction in Net Run Rate (NRR) or other disciplinary action, as decided by the organizers.",
    ],
  },
  {
    title: "Player Replacements",
    icon: UserRoundCheck,
    rules: [
      "Reserve players may replace injured players.",
      "Reserve players may participate in any match throughout the tournament, provided they are registered with a single team.",
      "A walkover will be awarded if a team is unable to field at least 6 players for a match.",
    ],
  },
  {
    title: "Additional Rules",
    icon: ClipboardList,
    rules: [
      "Standard cricket rules will apply where no specific tournament rule exists.",
      "Alcohol is strictly prohibited inside the indoor sports hall.",
      "In the event of any dispute, or where a rule has not been defined, the organizer reserves the right to make a final decision on the spot.",
      "Umpire decision is final decision.",
    ],
  },
];

function RuleCard({ section, index, open, onToggle }) {
  const Icon = section.icon;

  return (
    <div className="overflow-hidden rounded-xl border border-yellow-500/30 bg-[#101a3b] transition-colors hover:border-yellow-400/70">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center gap-4 p-4 text-left sm:p-5"
      >
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-yellow-400/10 text-yellow-400">
          <Icon size={22} />
        </span>

        <span className="flex-1 font-semibold text-white sm:text-lg">
          <span className="mr-2 text-yellow-400">
            {String(index + 1).padStart(2, "0")}
          </span>
          {section.title}
        </span>

        <ChevronDown
          size={20}
          className={`shrink-0 text-yellow-400 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <ol className="space-y-3 border-t border-yellow-500/20 px-5 py-5 pl-12 sm:pl-16">
              {section.rules.map((rule, ruleIndex) => (
                <li
                  key={ruleIndex}
                  className="relative list-decimal pl-2 text-sm leading-7 text-slate-300 marker:font-semibold marker:text-yellow-400 sm:text-base"
                >
                  {rule}
                </li>
              ))}
            </ol>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function LPLRules() {
  const [openSections, setOpenSections] = useState([0]);

  const toggleSection = (index) => {
    setOpenSections((current) =>
      current.includes(index)
        ? current.filter((item) => item !== index)
        : [...current, index]
    );
  };

  const expandAll = () => {
    setOpenSections((current) =>
      current.length === ruleSections.length
        ? []
        : ruleSections.map((_, index) => index)
    );
  };

  const allExpanded = openSections.length === ruleSections.length;

  return (
    <section
      id="rules"
      className="relative overflow-hidden bg-[#080f2c] px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8"
    >
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-20 h-72 w-72 rounded-full bg-yellow-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center sm:mb-14"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-yellow-400">
            <ShieldCheck size={15} />
            Official Tournament Guidelines
          </span>

          <h2 className="mt-5 text-3xl font-black uppercase tracking-tight sm:text-5xl">
            LPL <span className="text-yellow-400">2026</span> Rules
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            Please review the tournament rules and regulations before
            participating in the Lomma Premier League 2026.
          </p>

          <button
            type="button"
            onClick={expandAll}
            className="mt-6 rounded-full border border-yellow-400/40 px-5 py-2.5 text-sm font-semibold text-yellow-400 transition hover:bg-yellow-400 hover:text-[#080f2c]"
          >
            {allExpanded ? "Collapse All Rules" : "View All Rules"}
          </button>
        </motion.div>

        <div className="space-y-3">
          {ruleSections.map((section, index) => (
            <RuleCard
              key={section.title}
              section={section}
              index={index}
              open={openSections.includes(index)}
              onToggle={() => toggleSection(index)}
            />
          ))}
        </div>

        <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5 sm:p-6">
          <div className="flex items-start gap-3">
            <Gavel className="mt-1 shrink-0 text-yellow-400" size={24} />
            <div>
              <h3 className="font-bold text-yellow-400">
                Final Authority
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                All umpiring decisions are final. In the event of a dispute
                or an undefined rule, the organizer reserves the right to
                make the final decision on the spot.
              </p>
            </div>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-slate-500">
          Lomma Premier League 2026 · Play Fair. Respect the Game.
        </p>
      </div>
    </section>
  );
}
