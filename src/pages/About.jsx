import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="bg-black text-white">

      {/* 🔥 HERO SECTION */}
      <section className="relative h-[70vh] flex items-center justify-center text-center overflow-hidden">
        <img
          src="/about-banner.jpg"
          className="absolute w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 px-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent"
          >
            About Lomma Sports Club
          </motion.h1>

          <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
            A professional cricket club shaping athletes, building legacy, and inspiring the next generation since 2020.
          </p>
        </div>
      </section>

      {/* 🏏 ABOUT CLUB */}
      <section className="py-20 px-6 md:px-16 grid md:grid-cols-2 gap-12 items-center">

        <motion.img
          src="/team.jpg"
          className="rounded-2xl shadow-xl"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
        />

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-orange-400">
            Who We Are
          </h2>

          <p className="text-gray-300 mb-4 leading-relaxed">
            Founded in 2020, Lomma Sports Club has quickly established itself as a
            competitive and respected cricket organization. Built on discipline,
            teamwork, and ambition, we continuously strive for excellence both on
            and off the field.
          </p>

          <p className="text-gray-300 mb-4 leading-relaxed">
            Our mission is to nurture talent, develop strong athletes, and create
            opportunities for players to grow into professionals while enjoying the
            spirit of the game.
          </p>

          <p className="text-orange-400 font-semibold">
            Where Passion Meets Performance 🚀
          </p>
        </motion.div>
      </section>

      {/* 🏆 ACHIEVEMENTS */}
      <section className="py-20 px-6 md:px-16 bg-gradient-to-b from-gray-900 to-black text-center">

        <h2 className="text-4xl font-bold mb-12">
          Our Achievements
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {[
            "T40 Allsvenskan Qualified",
            "T20 Qualified Table Topper",
            "T10 Qualified",
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-xl font-semibold text-orange-400">
                {item}
              </h3>
            </motion.div>
          ))}

        </div>
      </section>

      {/* 👶 NEXT GENERATION */}
      <section className="py-20 px-6 md:px-16 grid md:grid-cols-2 gap-12 items-center">

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-orange-400">
            Building the Next Generation
          </h2>

          <p className="text-gray-300 mb-4 leading-relaxed">
            At Lomma Sports Club, we invest in young talent by providing structured
            training, mentorship, and real match exposure.
          </p>

          <p className="text-gray-300 mb-4 leading-relaxed">
            We focus not only on technical skills but also on discipline,
            leadership, and confidence — preparing players for both cricket
            and life.
          </p>

          <p className="text-orange-400 font-semibold">
            Future Stars Start Here ⭐
          </p>
        </motion.div>

        <motion.img
          src="/kids.jpg"
          className="rounded-2xl shadow-xl"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
        />
      </section>

      {/* 📍 CONTACT SECTION */}
      <section className="py-24 px-6 md:px-16 bg-gradient-to-b from-black to-gray-900">

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Get In Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* 📍 LOCATION */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-orange-400">
              Where We Are
            </h3>

            <p className="text-gray-300 mb-4 leading-relaxed">
              Lomma Sports Club is based in Sweden, offering a professional
              cricketing environment for players of all levels.
            </p>

            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
              <p className="text-sm text-gray-300 leading-relaxed">
                📍 Lomma Cricket Ground <br />
                Limhamnsfältet <br />
                Malmö, Sweden
              </p>

              <p className="mt-4 text-sm text-gray-300">
                📧 contact@lomma.com
              </p>

              <p className="text-sm text-gray-300">
                📞 +46 XXX XXX XXX
              </p>
            </div>
          </motion.div>

          {/* 📩 FORM */}
          <motion.form
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white/5 p-8 rounded-2xl border border-white/10 space-y-5"
          >
            <h3 className="text-2xl font-semibold text-orange-400">
              Contact Us
            </h3>

            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-black/50 border border-white/10 focus:border-orange-400 outline-none"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg bg-black/50 border border-white/10 focus:border-orange-400 outline-none"
            />

            <input
              type="tel"
              placeholder="Contact Number"
              className="w-full p-3 rounded-lg bg-black/50 border border-white/10 focus:border-orange-400 outline-none"
            />

            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full p-3 rounded-lg bg-black/50 border border-white/10 focus:border-orange-400 outline-none"
            />

            <button
              type="submit"
              className="w-full py-3 rounded-full bg-orange-500 text-black font-semibold hover:bg-orange-400 transition transform hover:scale-105"
            >
              Send Message
            </button>
          </motion.form>

        </div>
      </section>

    </div>
  );
}