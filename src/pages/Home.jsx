import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import jursey1 from "@/asserts/jersey1.png"
import jursey2 from "@/asserts/jersey2.png"
import jursey3 from "@/asserts/jersey3.png"
import partner1 from "@/asserts/partner1.png"
import partner2 from "@/asserts/partner2.png"
import partner3 from "@/asserts/partner3.png"
import partner4 from "@/asserts/partner4.png"
import training from "@/asserts/training.png"
import manager1 from "@/asserts/manager1.png"
import manager4 from "@/asserts/manager4.jpeg"
import manager3 from "@/asserts/manager3.jpeg"
import manager2 from "@/asserts/manager2.png"
import manager5 from "@/asserts/manager5.jpeg"
import manager6 from "@/asserts/manager6.jpeg"
import fun1 from "@/asserts/fun1.jpeg"
import fun2 from "@/asserts/fun2.jpeg"
import fun3 from "@/asserts/fun3.jpeg"
import fun4 from "@/asserts/fun4.jpeg"
import fun5 from "@/asserts/fun5.jpeg"
import fun6 from "@/asserts/fun6.jpeg"
import fun7 from "@/asserts/fun7.jpeg"
import fun8 from "@/asserts/fun8.jpeg"
import fun9 from "@/asserts/fun9.jpeg"
import fun10 from "@/asserts/fun10.jpeg"
import hero1 from "@/asserts/hero1.png"
import hero2 from "@/asserts/hero2.png"
import hero3 from "@/asserts/hero3.png"
import hero4 from "@/asserts/hero4.png"
import hero5 from "@/asserts/hero5.png"
import ball from "@/asserts/ball.png"
import bat from "@/asserts/bat.png"
import boys1 from "@/asserts/boys1.png"
import boys2 from "@/asserts/boys2.png"
import boys3 from "@/asserts/boys3.png"
import boys4 from "@/asserts/boys4.png"
import boys5 from "@/asserts/boys5.png"
import boys6 from "@/asserts/boys6.png"
import a1 from "@/asserts/a1.png"
import a2 from "@/asserts/a2.png"
import a3 from "@/asserts/a3.png"
import a4 from "@/asserts/a4.png"
import a5 from "@/asserts/a5.jpeg"
import a8 from "@/asserts/a8.jpeg"
import a6 from "@/asserts/a6.jpeg"
import a7 from "@/asserts/a7.jpeg"
import a9 from "@/asserts/a9.jpeg"
import a10 from "@/asserts/a10.jpeg"

import { Facebook, Instagram, Mail } from "lucide-react";
const images = [
  hero1, hero2, hero3, hero4, hero5
];

const boysImages = [
  boys1, boys2, boys3, boys4, boys5, boys6, fun1, fun2, fun3, fun4, fun5, fun6, fun7, fun8, fun9, fun10
];

export default function Home() {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [boysIndex, setBoysIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBoysIndex((prev) => (prev + 1) % boysImages.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const navigate = useNavigate();
  const jerseys = [jursey1, jursey2, jursey3];
  const [managerIndex, setManagerIndex] = useState(0);

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

      <motion.img
        src={ball}
        className="fixed w-12 z-50 pointer-events-none"
        style={{
          position: "fixed",

          // 🧭 X PATH (left → right → hit → back left)
          left: useTransform(
            scrollYProgress,
            [0, 0.4, 0.7, 1],
            ["10%", "70%", "90%", "10%"]
          ),

          // 🧭 Y PATH (start → down → hit → bounce up)
          top: useTransform(
            scrollYProgress,
            [0, 0.4, 0.7, 1],
            ["70%", "90%", "80%", "10%"]
          ),

          rotate: useTransform(scrollYProgress, [0, 1], [0, 1080]),
        }}
      />
      <motion.img
        src={bat}
        className="fixed w-32 right-[5%] top-[70%] z-40"
        style={{
          rotate: useTransform(scrollYProgress, [0.6, 0.75], [-20, 10]),
        }}
      />
      <motion.div
        className="fixed w-24 h-24 rounded-full bg-orange-400 blur-2xl z-30 pointer-events-none"
        style={{
          left: "80%",
          top: "75%",

          // 💥 show only at impact moment
          scale: useTransform(scrollYProgress, [0.65, 0.7, 0.75], [0, 1.5, 0]),
          opacity: useTransform(scrollYProgress, [0.65, 0.7, 0.75], [0, 1, 0]),
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
            className="text-5xl md:text-7xl font-extrabold leading-tight bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent"
          >
            Welcome to <br /> LOMMA Sports Club
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 text-lg text-gray-300 max-w-2xl"
          >
            More than a cricket club — a community built on passion, discipline,
            and the relentless pursuit of excellence since 2020.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="mt-8 flex gap-4"
          >
            <button
              onClick={() => navigate("/teams")}
              className="px-8 py-3 rounded-full bg-orange-500 text-black font-semibold hover:bg-orange-400 transition transform hover:scale-105"
            >
              Explore Teams
            </button>

            <button
              onClick={() => window.location.href = "mailto:haqnajam@gmail.com"}
              className="px-8 py-3 rounded-full border border-white hover:bg-white hover:text-black transition transform hover:scale-105"
            >
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
            Where Passion Meets Performance .
          </p>
        </motion.div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="py-20 bg-gray-100 px-6 md:px-16"
      >
        <h2 className="text-4xl font-bold text-center mb-10">
          Our Achievements
        </h2>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-12">
          {[
            { label: "Matches Played", value: "120+" },
            { label: "Wins", value: "85+" },
            { label: "Trophies", value: "12" },
            { label: "Players", value: "60+" },
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-2xl font-bold text-orange-500">{item.value}</h3>
              <p className="text-gray-600">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Slider */}
        <div className="flex gap-6 overflow-x-auto scrollbar-hide">
          {[a1, a2, a3, a4, a5, a6, a7, a8, a9, a10].map((img, i) => (
            <div
              key={i}
              className="min-w-[260px] bg-white rounded-xl shadow flex items-center justify-center p-4"
            >
              <img
                src={img}
                className="h-48 w-full object-contain"
              />
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="py-20 px-6 md:px-16 bg-white grid md:grid-cols-2 gap-10 items-center"
      >
        <div className="relative w-full h-[350px] md:h-[450px] rounded-2xl overflow-hidden shadow-xl">

          <AnimatePresence mode="wait">
            <motion.img
              key={boysIndex}
              src={boysImages[boysIndex]}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.2 }}
              transition={{ duration: 0.8 }}
              className="absolute w-full h-full object-cover"
            />
          </AnimatePresence>

        </div>

        <div>
          <h2 className="text-4xl font-bold mb-4">
            Lomma Boys Beyond Cricket
          </h2>

          <p className="text-gray-700 mb-4">
            Lomma Sports Club is not just about cricket — it’s about brotherhood,
            friendships, and unforgettable moments beyond the field.
          </p>

          <p className="text-gray-700 mb-4">
            From team outings to celebrations, we build strong bonds that make us
            stronger players on the field.
          </p>

          <p className="text-orange-500 font-semibold">
            More Than a Team — A Family ❤️
          </p>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="py-20 bg-white px-6 md:px-16 text-center"
      >
        <h2 className="text-4xl font-bold mb-10">
          Our Teams
        </h2>

        <div className="grid md:grid-cols-4 gap-8">

          {[
            { name: "Lomma CC", type: "Lomma CC" },
            { name: "Lomma Gold Monks ", type: "Lomma Gold Monks" },
            { name: "Lomma Kings XI", type: "Lomma Kings XI" },
            { name: "Lomma Panthers", type: "Lomma Panthers" },
          ].map((team, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-gray-100 rounded-2xl shadow-lg hover:shadow-2xl transition"
            >
              <h3 className="text-xl font-bold mb-2">{team.name}</h3>
              <p className="text-gray-600 mb-4">{team.type}</p>

              <button
                onClick={() => navigate("/teams")}
                className="px-4 py-2 rounded-full bg-orange-500 text-black font-semibold hover:bg-orange-400 transition"
              >
                Learn More
              </button>
            </motion.div>
          ))}

        </div>
      </motion.section>

      {/* 🎥 VIDEOS */}
      <motion.section
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="py-20 px-6 md:px-16 text-center bg-gray-100"
      >
        <h2 className="text-4xl font-bold mb-10">Match Highlights</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <iframe className="w-full h-64 rounded-xl" src="https://www.youtube.com/embed/Ti9ko08SEaI" />
          <iframe className="w-full h-64 rounded-xl" src="https://www.youtube.com/embed/k7zZz95-Ds0" />
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="py-20 px-6 md:px-16 text-center bg-gradient-to-b from-black via-gray-900 to-black text-white relative"
      >
        <h2 className="text-4xl font-bold mb-12">
          Club Management
        </h2>

        {/* 🔥 GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">

          {[
            {
              name: "Najam Ul haq",
              img: manager1,
              fb: "#",
              insta: "#",
              mail: "mailto:test@gmail.com",
            },
            {
              name: "Sajid Ahmed",
              img: manager2,
              fb: "#",
              insta: "#",
              mail: "mailto:test@gmail.com",
            },
            {
              name: "rajeev Ranjan Swain",
              img: manager3,
              fb: "https://www.facebook.com/rajeev.swain.5",
              insta: "https://www.instagram.com/rajeevswain17/?hl=en",
              mail: "mailto:rrswn1986@gmail.com",
            },
            {
              name: "gaurav kumar Singh",
              img: manager4,
              fb: "#",
              insta: "#",
              mail: "mailto:test@gmail.com",
            },
            {
              name: "Nidhin Sudhakaran",
              img: manager5,
              fb: "#",
              insta: "#",
              mail: "mailto:test@gmail.com",
            },
            {
              name: "Shekhar Jadhav",
              img: manager6,
              fb: "#",
              insta: "#",
              mail: "mailto:test@gmail.com",
            },
          ].map((person, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10, scale: 1.03 }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-4 shadow-xl transition"
            >
              {/* IMAGE */}
              <img
                src={person.img}
                className="w-full h-48 md:h-56 object-contain bg-black/40 rounded-xl p-3"
              />

              {/* NAME */}
              <h3 className="mt-4 font-semibold text-lg">
                {person.name}
              </h3>

              {/* SOCIAL */}
              <div className="flex justify-center gap-4 mt-4">

                <a href={person.fb} target="_blank">
                  <Facebook size={18} className="hover:text-orange-500 transition" />
                </a>

                <a href={person.insta} target="_blank">
                  <Instagram size={18} className="hover:text-orange-500 transition" />
                </a>

                <a href={person.mail}>
                  <Mail size={18} className="hover:text-orange-500 transition" />
                </a>

              </div>
            </motion.div>
          ))}

        </div>
      </motion.section>

      {/* 🧑‍🏫 COACH */}
      <motion.section
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="py-24 px-6 md:px-16 bg-gradient-to-b from-gray-100 to-white"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Coaching & Training
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* 🔥 LEFT - IMAGE */}
          <motion.img
            src={training}
            whileHover={{ scale: 1.05 }}
            className="w-full max-w-md mx-auto rounded-2xl shadow-xl object-cover"
          />

          {/* 🔥 RIGHT - TEXT */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-orange-500">
              Building Players. Building Champions.
            </h3>

            <p className="text-gray-700 mb-4 leading-relaxed">
              At Lomma Sports Club, we focus on structured training programs,
              teamwork, and continuous improvement. Even without a dedicated
              full-time coach, our players grow through shared knowledge,
              discipline, and match experience.
            </p>

            <p className="text-gray-700 mb-4 leading-relaxed">
              Senior players guide juniors, creating a strong learning
              environment where everyone contributes to each other's success.
            </p>

            <p className="font-semibold text-gray-900">
              Driven by Passion. Powered by Teamwork.
            </p>
          </div>

        </div>
      </motion.section>

      {/* 📖 JOURNEY */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="py-24 px-6 md:px-16 text-center bg-gradient-to-b from-black via-gray-900 to-black text-white"
      >
        {/* 🔥 TITLE */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent">
          Our Journey
        </h2>

        <p className="max-w-2xl mx-auto text-gray-300 mb-16 text-lg">
          From humble beginnings in 2020 to becoming a rising cricket force,
          Lomma Sports Club has built its legacy through passion, unity, and relentless dedication.
        </p>

        {/* 🔥 TIMELINE */}
        <div className="grid md:grid-cols-3 gap-8">

          {[
            {
              year: "2020",
              title: "Foundation",
              desc: "Lomma Sports Club was established with a vision to build a strong cricket community.",
            },
            {
              year: "2022",
              title: "Growth Phase",
              desc: "Expanded teams, improved training, and participated in competitive leagues.",
            },
            {
              year: "2024",
              title: "Rising Force",
              desc: "Achieved major wins and became a recognized name in the cricket circuit.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/10 hover:border-orange-400 transition"
            >
              <h3 className="text-orange-400 font-bold text-xl mb-2">
                {item.year}
              </h3>

              <h4 className="text-lg font-semibold mb-2">
                {item.title}
              </h4>

              <p className="text-gray-300 text-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}

        </div>
      </motion.section>

      
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="py-24 px-6 md:px-16 text-center bg-white via-gray-900 to-white text-black"
      >
        {/* 🔥 TITLE */}
        {/* 🔥 TITLE */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Our Partners
        </h2>

        <p className="text-gray-400 max-w-xl mx-auto mb-12">
          We proudly collaborate with organizations that support our vision,
          helping us grow and achieve excellence on and off the field.
        </p>

        {/* 🔥 PARTNER CARDS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          {[partner1, partner2, partner3, partner4].map((img, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8, scale: 1.05 }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition flex items-center justify-center"
            >
              <img
                src={img}
                className="h-12 object-contain transition duration-300"
              />
            </motion.div>
          ))}

        </div>
      </motion.section>

    </div>
  );
}