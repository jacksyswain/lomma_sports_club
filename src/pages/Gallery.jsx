import { motion } from "framer-motion";

const images = [
  "/gallery1.jpg",
  "/gallery2.jpg",
  "/gallery3.jpg",
  "/gallery4.jpg",
  "/gallery5.jpg",
  "/gallery6.jpg",
];

export default function Gallery() {
  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-16 py-20">

      {/* 🔥 HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Gallery
        </h1>

        <p className="text-gray-400 max-w-xl mx-auto">
          Explore moments from Lomma Sports Club — matches, training, and unforgettable memories.
        </p>
      </motion.div>

      {/* 🖼️ GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

        {images.map((img, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="overflow-hidden rounded-2xl group cursor-pointer"
          >
            <img
              src={img}
              alt="gallery"
              className="w-full h-64 object-cover transition duration-500 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
              <p className="text-white font-semibold">View</p>
            </div>
          </motion.div>
        ))}

      </div>

    </div>
  );
}