import { motion } from "framer-motion";

const sections = [
  {
    title: "Intense Training",
    images: ["/gallery1.jpg", "/gallery2.jpg", "/gallery3.jpg"],
  },
  {
    title: "Fun Time",
    images: ["/gallery4.jpg", "/gallery5.jpg", "/gallery6.jpg"],
  },
  {
    title: "Kids Practice",
    images: ["/gallery1.jpg", "/gallery3.jpg", "/gallery5.jpg"],
  },
  {
    title: "Match Highlights",
    images: ["/gallery2.jpg", "/gallery4.jpg", "/gallery6.jpg"],
  },
];

export default function Gallery() {
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

        {sections.map((section, sIndex) => (
          <motion.div
            key={sIndex}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* SECTION TITLE */}
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-orange-400">
              {section.title}
            </h2>

            {/* GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

              {section.images.map((img, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="relative overflow-hidden rounded-2xl cursor-pointer group bg-white/5 backdrop-blur-lg border border-white/10"
                >
                  {/* IMAGE */}
                  <img
                    src={img}
                    alt="gallery"
                    className="w-full h-64 object-cover transition duration-500 group-hover:scale-110"
                  />

                  {/* 🔥 OVERLAY */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                    <p className="text-white font-semibold tracking-wide">
                      View Moment
                    </p>
                  </div>

                  {/* 🔥 GLOW BORDER ON HOVER */}
                  <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-orange-400 transition" />
                </motion.div>
              ))}

            </div>
          </motion.div>
        ))}

      </div>

    </div>
  );
}