import { NavLink } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import lomalogo from "@/asserts/lomalogo.png";

export default function Navbar() {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Teams", path: "/teams" },
    { name: "Matches", path: "/matches" },
    { name: "Gallery", path: "/gallery" },
    { name: "About", path: "/about" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-lg border-b border-white/10">
      <div className="flex items-center justify-between px-6 md:px-12 py-4">

        {/* 🔥 LOGO */}
        <img
          src={lomalogo}
          alt="logo"
          className="h-16 cursor-pointer"
        />

        {/* 🔥 DESKTOP NAV */}
        <div className="hidden md:flex gap-3">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `rounded-full px-5 py-2 text-sm font-medium transition-all duration-300
                ${
                  isActive
                    ? "bg-orange-500 text-black shadow-lg"
                    : "bg-white/10 text-white hover:bg-orange-400 hover:text-black hover:scale-105 active:scale-95"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* 🔥 MOBILE MENU */}
        <Sheet>
          <SheetTrigger asChild>
            <Menu className="md:hidden text-white cursor-pointer" />
          </SheetTrigger>

          <SheetContent side="right" className="bg-black text-white">
            <div className="flex flex-col gap-4 mt-10">

              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `w-full text-center rounded-full px-5 py-3 transition-all duration-300
                    ${
                      isActive
                        ? "bg-orange-500 text-black"
                        : "bg-white/10 text-white hover:bg-orange-400 hover:text-black"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}

            </div>
          </SheetContent>
        </Sheet>

      </div>
    </nav>
  );
}