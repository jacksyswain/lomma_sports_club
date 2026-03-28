import { motion } from "framer-motion";
import { useState } from "react";
import a1 from "@/asserts/a1.png"
import a2 from "@/asserts/a2.png"
import a3 from "@/asserts/a3.png"
import a4 from "@/asserts/a4.png"
import a5 from "@/asserts/a5.jpeg"
import a8 from "@/asserts/a8.jpeg"
import a6 from "@/asserts/a6.jpeg"
import a7 from "@/asserts/a7.jpeg"
import a9 from "@/asserts/a9.jpeg"
import thumb1 from "@/asserts/thumb1.png"
import thumb2 from "@/asserts/thumb2.png"
import thumb3 from "@/asserts/thumb3.png"
import thumb4 from "@/asserts/thumb4.png"
import a10 from "@/asserts/a10.jpeg"
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
import kid1 from "@/asserts/kid1.png"
import kid2 from "@/asserts/kid2.png"
import kid3 from "@/asserts/kid3.png"
import vid1 from "@/asserts/vid1.mp4"
import vid2 from "@/asserts/vid2.mp4"
import vid3 from "@/asserts/vid3.mp4"
import vid4 from "@/asserts/vid4.mp4"

const sections = [
  {
    title: "scoreCard",
    images: [a6, a7, a8, a9],
  },
  {
    title: "Fun Time",
    images: [fun1, fun2, fun3, fun4, fun5, fun6, fun7, fun8, fun9, fun10],
  },
  {
    title: "Kids Practice",
    images: [kid1, kid2, kid3],
  },
  {
    title: "Achievements",
    images: [a1, a2, a3, a4, a5, a10],
  },
];
// 🔥 VIDEO DATA
const videoList = [
  {
    thumb: thumb1,
    src: vid1,
  },
  {
    thumb: thumb2,
    src: vid2,
  },
  {
    thumb: thumb3,
    src: vid3,
  },
  {
    thumb: thumb4,
    src: vid4,
  },
];

export default function Gallery() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [activeVideo, setActiveVideo] = useState(null);
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white px-6 md:px-16 py-20 relative overflow-hidden">

      {/* 🔥 BACKGROUND GLOW */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/20 blur-3xl rounded-full" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-yellow-400/10 blur-3xl rounded-full" />

      {/* 🔥 HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16 relative z-10"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent">
          Gallery
        </h1>

        <p className="text-gray-400 max-w-xl mx-auto">
          Explore moments from Lomma Sports Club — training intensity, match highlights, and memories beyond cricket.
        </p>
      </motion.div>

      {/* 🔥 SECTIONS */}
      <div className="flex flex-col gap-20 relative z-10">

        {sections.map((section, sIndex) => {
          const imagesPerSlide = 3;

          const slides = [];
          for (let i = 0; i < section.images.length; i += imagesPerSlide) {
            slides.push(section.images.slice(i, i + imagesPerSlide));
          }

          const current = slideIndex % slides.length;

          return (
            <motion.div
              key={sIndex}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* TITLE */}
              <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-orange-400">
                {section.title}
              </h2>

              {/* 🔥 SLIDER */}
              <div className="relative">

                {/* 🔥 SLIDES */}
                <motion.div
                  key={current}
                  initial={{ opacity: 0, x: 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -60 }}
                  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
                >
                  {slides[current].map((img, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="relative rounded-2xl cursor-pointer group bg-white/5 backdrop-blur-lg border border-white/10 flex items-center justify-center p-4 min-h-[260px]"
                    >
                      {/* IMAGE */}
                      <img
                        src={img}
                        className="max-h-60 w-full object-contain transition duration-500 group-hover:scale-105"
                      />

                      {/* OVERLAY */}
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center rounded-2xl">
                        <p className="text-white font-semibold">View Moment</p>
                      </div>

                      {/* BORDER */}
                      <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-orange-400 transition" />
                    </motion.div>
                  ))}
                </motion.div>

                {/* 🔥 CONTROLS */}
                <div className="flex justify-center gap-6 mt-8">

                  <button
                    onClick={() =>
                      setSlideIndex((prev) =>
                        prev === 0 ? slides.length - 1 : prev - 1
                      )
                    }
                    className="px-6 py-2 rounded-full bg-white/10 hover:bg-orange-500 hover:text-black transition"
                  >
                    ← Prev
                  </button>

                  <button
                    onClick={() =>
                      setSlideIndex((prev) =>
                        prev === slides.length - 1 ? 0 : prev + 1
                      )
                    }
                    className="px-6 py-2 rounded-full bg-white/10 hover:bg-orange-500 hover:text-black transition"
                  >
                    Next →
                  </button>

                </div>

              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mt-20"
      >
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-orange-400">
          Practice Matches
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {videoList.map((video, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="relative rounded-2xl overflow-hidden bg-white/5 backdrop-blur-lg border border-white/10 cursor-pointer group"
              onClick={() => setActiveVideo(video.src)}
            >

              {/* THUMBNAIL */}
              <img
                src={video.thumb}
                className="w-full h-64 md:h-80 object-cover group-hover:scale-110 transition duration-500"
              />

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition" />

              {/* PLAY BUTTON */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition">
                  ▶
                </div>
              </div>

            </motion.div>
          ))}

        </div>

        {/* 🔥 MODAL PLAYER */}
        {activeVideo && (
          <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            onClick={() => setActiveVideo(null)}
          >
            <div className="w-[90%] md:w-[70%] aspect-video">
              <iframe
                src={activeVideo}
                className="w-full h-full rounded-xl"
                allowFullScreen
              />
            </div>
          </div>
        )}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mt-10"
      >
        {/* TITLE */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-orange-400">
          Practice Matches
        </h2>

        {/* VIDEO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {[
            "https://www.youtube.com/embed/o7FCTneI1cc",
            "https://www.youtube.com/embed/CuukjWkqT4Q",
            "https://www.youtube.com/embed/DwM7-N-dDZg",
            "https://www.youtube.com/embed/BRq1wByjfC4",
          ].map((video, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className="rounded-2xl overflow-hidden bg-white/5 backdrop-blur-lg border border-white/10 shadow-xl"
            >
              <iframe
                src={video}
                title={`video-${i}`}
                className="w-full h-64 md:h-80"
                allowFullScreen
              />

              {/* OPTIONAL CAPTION */}
              <div className="p-4 text-left">
                <p className="text-sm text-gray-300">
                  Practice Match Highlights #{i + 1}
                </p>
              </div>
            </motion.div>
          ))}

        </div>
      </motion.div>

    </div>
  );
}