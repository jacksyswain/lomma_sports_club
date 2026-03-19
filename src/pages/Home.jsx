import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="home">
      <div className="hero">
        
        <div className="overlay">
          <motion.h1 initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
            Welcome to Loma Sports Club
          </motion.h1>

        </div>
      </div>
    </div>
  );
}