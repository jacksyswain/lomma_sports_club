import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="bg-white text-black">

      {/* 🔥 HERO SECTION */}
      <section className="relative h-screen w-full overflow-hidden">
        <video autoPlay loop muted className="absolute w-full h-full object-cover">
          <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-16 text-white">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-6xl font-bold"
          >
            Welcome to <br /> LOMMA Sports Club
          </motion.h1>

          <p className="mt-4 text-gray-300 max-w-xl">
            Building champions since 2020. Passion, teamwork, and dedication define our journey.
          </p>

          <div className="mt-6 flex gap-4">
            <button className="px-6 py-3 rounded-full bg-orange-500 text-black font-semibold hover:bg-orange-400">
              About Us
            </button>

            <button className="px-6 py-3 rounded-full border border-white hover:bg-white hover:text-black">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* 🏏 TEAM SECTION */}
      <section className="py-16 px-6 md:px-16 grid md:grid-cols-2 gap-10 items-center">
        <img src="/team.jpg" className="rounded-2xl shadow-lg" />

        <div>
          <h2 className="text-3xl font-bold mb-4">Team Hunters</h2>

          <p className="text-gray-700 mb-4">
            "Stockholm Hunters" is one of the fast-growing cricket clubs based in Stockholm, Sweden.
          </p>

          <p className="text-gray-700 mb-4">
            Our journey started with a vision of creating history in the Swedish Cricket League. We aim to build a home for ambitious players and staff.
          </p>

          <p className="text-gray-700 mb-4">
            We develop young talent through experienced coaches and provide a welcoming platform for all.
          </p>

          <p className="font-semibold">
            Member of Swedish Cricket Federation (SCF)
          </p>
        </div>
      </section>

      {/* 🎥 VIDEOS */}
      <section className="py-16 px-6 md:px-16 text-center bg-gray-100">
        <h2 className="text-3xl font-bold mb-10">Videos</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <iframe
            className="w-full h-64 rounded-xl"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            allowFullScreen
          />
          <iframe
            className="w-full h-64 rounded-xl"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            allowFullScreen
          />
        </div>
      </section>

      {/* 👨‍💼 FOUNDERS */}
      <section className="py-16 px-6 md:px-16 text-center">
        <h2 className="text-3xl font-bold mb-10">Founders</h2>

        <div className="flex flex-wrap justify-center gap-10">
          <div>
            <img src="/founder1.jpg" className="w-40 h-40 rounded-xl object-cover" />
            <p className="mt-2 font-semibold">Founder 1</p>
          </div>

          <div>
            <img src="/founder2.jpg" className="w-40 h-40 rounded-xl object-cover" />
            <p className="mt-2 font-semibold">Founder 2</p>
          </div>
        </div>
      </section>

      {/* 🧑‍🏫 COACH */}
      <section className="py-16 px-6 md:px-16 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-10">Our Coach</h2>

        <div className="flex flex-col md:flex-row items-center gap-10">
          <img src="/coach.jpg" className="w-60 h-60 rounded-xl object-cover" />

          <p className="max-w-xl text-gray-700">
            Our coach brings years of experience and helps players achieve excellence in cricket.
          </p>
        </div>
      </section>

      {/* 👕 JERSEY */}
      <section className="py-16 px-6 md:px-16 text-center">
        <h2 className="text-3xl font-bold mb-10">Our Jersey</h2>

        <div className="flex flex-wrap justify-center gap-6">
          <img src="/jersey1.png" className="w-40" />
          <img src="/jersey2.png" className="w-40" />
          <img src="/jersey3.png" className="w-40" />
        </div>
      </section>

      {/* 🤝 PARTNERS */}
      <section className="py-16 px-6 md:px-16 text-center bg-gray-100">
        <h2 className="text-3xl font-bold mb-10">Our Partners</h2>

        <div className="flex flex-wrap justify-center gap-8">
          <img src="/partner1.png" className="h-12" />
          <img src="/partner2.png" className="h-12" />
          <img src="/partner3.png" className="h-12" />
        </div>
      </section>

      {/* 📩 CONTACT */}
      <section className="py-20 px-6 md:px-16 bg-black text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>

        <p>LOMMA Sports Club</p>
        <p>Email: contact@lomma.com</p>
        <p>Phone: +91 XXXXX XXXXX</p>
      </section>

    </div>
  );
}