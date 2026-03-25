import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, MessageCircle } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-black text-gray-300">

            {/* 🔥 MAIN FOOTER */}
            <div className="px-6 md:px-16 py-16 grid md:grid-cols-3 gap-10">

                {/* 🏏 CLUB INFO */}
                <div>
                    <h2 className="text-2xl font-bold text-white mb-4">
                        LOMMA Sports Club
                    </h2>

                    <p className="text-sm mb-2">
                        Building champions since 2020.
                    </p>

                    <p className="text-sm mt-4">
                        <span className="text-white font-semibold">Org No:</span> 802530-7573
                    </p>

                    <p className="text-sm">
                        <span className="text-white font-semibold">Registered:</span> 2020-05-29
                    </p>

                    <p className="text-sm">
                        <span className="text-white font-semibold">Type:</span> Non-profit association
                    </p>

                    <p className="text-sm mt-4">
                        <span className="text-white font-semibold">Industry:</span><br />
                        93120 Activities of sports clubs and associations
                    </p>


                </div>

                {/* 🔗 QUICK LINKS */}
                <div>
                    <h2 className="text-xl font-semibold text-white mb-4">
                        Quick Links
                    </h2>

                    <div className="flex flex-col gap-3">
                        <Link to="/" className="hover:text-orange-400 transition">Home</Link>
                        <Link to="/teams" className="hover:text-orange-400 transition">Teams</Link>
                        
                        <Link to="/gallery" className="hover:text-orange-400 transition">Gallery</Link>
                        <Link to="/about" className="hover:text-orange-400 transition">About</Link>
                    </div>
                </div>

                {/* 📍 ADDRESS */}
                <div>
                    <h2 className="text-xl font-semibold text-white mb-4">
                        Contact & Address
                    </h2>

                    <p className="text-sm leading-relaxed">
                        c/o NAJAM UL HAQUE <br />
                        Nils Fredrikssongatan 11 b <br />
                        Apartment 1201 <br />
                        233 32 Svedala
                    </p>
                    {/* 🔥 SOCIAL ICONS */}
                    <div className="flex gap-4 mt-6">

                        <a
                            href="https://www.facebook.com/profile.php?id=100031961756749"
                            target="_blank"
                            className="p-2 rounded-full bg-white/10 hover:bg-orange-500 transition"
                        >
                            <Facebook size={18} />
                        </a>

                        <a
                            href="https://www.instagram.com/lommasportsclub/?hl=en"
                            target="_blank"
                            className="p-2 rounded-full bg-white/10 hover:bg-orange-500 transition"
                        >
                            <Instagram size={18} />
                        </a>

                        <a
                            href="mailto:lommasportsclub@gmail.com"
                            className="p-2 rounded-full bg-white/10 hover:bg-orange-500 transition"
                        >
                            <Mail size={18} />
                        </a>

                        <a
                            href="https://wa.me/+46761800951"
                            target="_blank"
                            className="p-2 rounded-full bg-white/10 hover:bg-orange-500 transition"
                        >
                            <MessageCircle size={18} />
                        </a>

                    </div>
                </div>

            </div>

            {/* 🔻 BOTTOM BAR */}
            <div className="border-t border-white/10 text-center py-4 text-sm text-gray-400">
                © {new Date().getFullYear()} LOMMA Sports Club. All rights reserved.
            </div>

        </footer>
    );
}