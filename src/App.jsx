import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Teams from "./pages/Teams";
import Matches from "./pages/Matches";
import About from "./pages/About";
import Gallery from "./pages/Gallery";

export default function App() {
  return (
    <BrowserRouter>

      {/* 🔥 NAVBAR */}
      <Navbar />

      {/* 📄 MAIN CONTENT */}
      <main className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/matches" element={<Matches />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      {/* 🔻 FOOTER */}
      <Footer />

    </BrowserRouter>
  );
}