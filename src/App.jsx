import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Teams from "./pages/Teams";
import Matches from "./pages/Matches";
import About from "./pages/About";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/matches" element={<Matches />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}