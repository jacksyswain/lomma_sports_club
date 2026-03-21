import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import jursey1 from "@/asserts/jersey1.png"
import jursey2 from "@/asserts/jersey2.png"
import jursey3 from "@/asserts/jersey3.png"
import hero1 from "@/asserts/hero1.png"
import hero2 from "@/asserts/hero2.png"
import hero3 from "@/asserts/hero3.png"
import hero4 from "@/asserts/hero4.png"
import hero5 from "@/asserts/hero5.png"
const images = [
  hero1,hero2,hero3,hero4,hero5
];

export default function Home() {
  const [currentVideo, setCurrentVideo] = useState(0);

  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const jerseys = [jursey1, jursey2, jursey3];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % jerseys.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  // 🎯 Parallax effect
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);

  // 🎥 Video switch
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={ref} className="bg-gradient-to-b from-black via-gray-900 to-white text-black overflow-hidden">

      {/* 🔥 FLOATING CRICKET BALL */}
      <motion.img
        src="/ball.png"
        className="fixed w-16 z-50 pointer-events-none"
        style={{
          y,
          x: useTransform(scrollYProgress, [0, 1], [0, 300]),
          rotate: useTransform(scrollYProgress, [0, 1], [0, 360]),
        }}
      />

      {/* 🔥 HERO */}
      <section className="relative h-screen w-full overflow-hidden">

        <AnimatePresence mode="wait">
          <motion.img
            key={currentVideo}
            src={images[currentVideo]}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.2 }}
            transition={{ duration: 1 }}
            className="absolute w-full h-full object-cover"
          />
        </AnimatePresence>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

        {/* CONTENT */}
        <div className="relative z-10 flex flex-col justify-center items-center text-center h-full px-6 text-white">

          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent"
          >
            LOMMA Sports Club
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 text-lg text-gray-300 max-w-2xl"
          >
            Building champions since 2020. Passion, discipline and teamwork define our journey.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="mt-8 flex gap-4"
          >
            <button className="px-8 py-3 rounded-full bg-orange-500 text-black font-semibold hover:bg-orange-400 transition transform hover:scale-105">
              Explore Team
            </button>

            <button className="px-8 py-3 rounded-full border border-white hover:bg-white hover:text-black transition transform hover:scale-105">
              Join Club
            </button>
          </motion.div>

        </div>
      </section>



      {/* 🏏 TEAM */}
      <motion.section
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="py-20 px-6 md:px-16 grid md:grid-cols-2 gap-10 items-center bg-white text-black"
      >
        {/* 🔥 LEFT - JERSEY SLIDER */}
        <div className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center">

          {/* Glow */}
          <div className="absolute w-72 h-72 bg-orange-500/20 blur-3xl rounded-full" />

          <AnimatePresence mode="wait">
            <motion.img
              key={index}
              src={jerseys[index]}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.8 }}
              className="absolute w-[70%] max-w-[350px] object-contain drop-shadow-2xl"
            />
          </AnimatePresence>
        </div>

        {/* 🔥 RIGHT - TEXT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Redefining Cricket Excellence <br />
            <span className="text-orange-500">Lomma Sports Club</span>
          </h2>

          <p className="text-gray-700 mb-5 text-lg leading-relaxed">
            Established in 2020, Lomma Sports Club has rapidly emerged as a
            performance-driven cricket organization focused on excellence,
            discipline, and growth.
          </p>

          <p className="text-gray-700 mb-5 text-lg leading-relaxed">
            Through professional coaching, structured training programs, and a
            competitive environment, we empower players to push boundaries and
            evolve into elite athletes.
          </p>

          <p className="text-orange-500 font-semibold text-lg">
            Where Passion Meets Performance 🚀
          </p>
        </motion.div>
      </motion.section>

      {/* 🎥 VIDEOS */}
      <motion.section
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="py-20 px-6 md:px-16 text-center bg-gray-100"
      >
        <h2 className="text-4xl font-bold mb-10">Match Highlights</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <iframe className="w-full h-64 rounded-xl" src="https://www.youtube.com/embed/dQw4w9WgXcQ" />
          <iframe className="w-full h-64 rounded-xl" src="https://www.youtube.com/embed/dQw4w9WgXcQ" />
        </div>
      </motion.section>

      {/* 👨‍💼 FOUNDERS */}
      <motion.section
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="py-20 text-center bg-white"
      >
        <h2 className="text-4xl font-bold mb-10">Founders</h2>

        <div className="flex justify-center gap-10">
          {["/founder1.jpg", "/founder2.jpg"].map((img, i) => (
            <div key={i}>
              <img src={img} className="w-40 h-40 rounded-xl object-cover shadow-lg" />
              <p className="mt-2 font-semibold">Founder {i + 1}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* 🧑‍🏫 COACH */}
      <motion.section
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="py-20 px-6 md:px-16 bg-gray-100"
      >
        <h2 className="text-4xl font-bold text-center mb-10">Our Coach</h2>

        <div className="flex flex-col md:flex-row items-center gap-10">
          <img src="/coach.jpg" className="w-60 h-60 rounded-xl object-cover shadow-lg" />
          <p className="max-w-xl text-gray-700">
            Our coach brings elite-level expertise and mentorship to develop world-class players.
          </p>
        </div>
      </motion.section>

      {/* 📖 JOURNEY */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="py-20 px-6 md:px-16 text-center bg-black text-white"
      >
        <h2 className="text-4xl font-bold mb-6">Our Journey</h2>

        <p className="max-w-2xl mx-auto text-gray-300">
          Founded in 2020, Lomma Sports Club has rapidly grown into a competitive cricket institution.
          Our journey is driven by passion, teamwork, and excellence.
        </p>
      </motion.section>

      {/* 🤝 PARTNERS */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="py-20 px-6 md:px-16 text-center bg-white"
      >
        <h2 className="text-4xl font-bold mb-10">Our Partners</h2>

        <div className="flex flex-wrap justify-center gap-8">
          {["/partner1.png", "/partner2.png", "/partner3.png"].map((img, i) => (
            <img key={i} src={img} className="h-12 grayscale hover:grayscale-0 transition" />
          ))}
        </div>
      </motion.section>

    </div>
  );
}