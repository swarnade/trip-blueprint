import { useEffect, useState } from "react";
import axios from "axios";

const upcomingTrips = [
  {
    id: 1,
    destination: "Kolkata",
    country: "West Bengal, India",
    dates: "Apr 12 – Apr 18",
    daysLeft: 18,
    progress: 72,
    cover: "https://images.unsplash.com/photo-1558431382-27e303142255?w=800&q=80",
    tag: "Heritage City",
    travelers: 2,
    emoji: "🏛️",
  },
  {
    id: 2,
    destination: "Delhi",
    country: "New Delhi, India",
    dates: "May 5 – May 12",
    daysLeft: 41,
    progress: 55,
    cover: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&q=80",
    tag: "Capital City",
    travelers: 3,
    emoji: "🕌",
  },
  {
    id: 3,
    destination: "Mumbai",
    country: "Maharashtra, India",
    dates: "Jun 3 – Jun 9",
    daysLeft: 70,
    progress: 35,
    cover: "https://images.unsplash.com/photo-1595658658481-d53d3f999875?w=800&q=80",
    tag: "City of Dreams",
    travelers: 4,
    emoji: "🌊",
  },
  {
    id: 4,
    destination: "Chennai",
    country: "Tamil Nadu, India",
    dates: "Jul 14 – Jul 20",
    daysLeft: 110,
    progress: 20,
    cover: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80",
    tag: "Cultural Hub",
    travelers: 2,
    emoji: "🏖️",
  },
  {
    id: 5,
    destination: "Bengaluru",
    country: "Karnataka, India",
    dates: "Aug 8 – Aug 14",
    daysLeft: 135,
    progress: 15,
    cover: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=800&q=80",
    tag: "Garden City",
    travelers: 3,
    emoji: "🌿",
  },
  {
    id: 6,
    destination: "Hyderabad",
    country: "Telangana, India",
    dates: "Sep 20 – Sep 27",
    daysLeft: 178,
    progress: 8,
    cover: "https://images.unsplash.com/photo-1563448927898-6f5b6c970d3d?w=800&q=80",
    tag: "City of Pearls",
    travelers: 5,
    emoji: "👑",
  },
];

const hotels = [
  {
    name: "The Oberoi Grand",
    location: "Kolkata, West Bengal",
    price: 180,
    rating: 9.5,
    img: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&q=80",
    tag: "Booked",
    tagColor: "bg-emerald-500/20 text-emerald-400",
  },
  {
    name: "The Imperial Hotel",
    location: "New Delhi",
    price: 220,
    rating: 9.3,
    img: "https://images.unsplash.com/photo-1549294413-26f195200c16?w=400&q=80",
    tag: "Saved",
    tagColor: "bg-amber-500/20 text-amber-400",
  },
  {
    name: "Taj Mahal Palace",
    location: "Mumbai, Maharashtra",
    price: 350,
    rating: 9.8,
    img: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&q=80",
    tag: "Exploring",
    tagColor: "bg-sky-500/20 text-sky-400",
  },
];

const itinerary = [
  { time: "08:00", event: "Flight 6E204 → Kolkata (CCU)", type: "flight", done: true, icon: "✈️" },
  { time: "11:30", event: "Check-in: The Oberoi Grand", type: "hotel", done: true, icon: "🏨" },
  { time: "15:00", event: "Victoria Memorial & Maidan", type: "activity", done: false, icon: "🏛️" },
  { time: "19:00", event: "Dinner at Oh! Calcutta", type: "dining", done: false, icon: "🍽️" },
  { time: "Day 2", event: "Howrah Bridge & Flower Market", type: "activity", done: false, icon: "🌸" },
  { time: "Day 3", event: "Return Flight CCU → Home", type: "flight", done: false, icon: "✈️" },
];

const budget = [
  { label: "Flights", spent: 1240, total: 1400, color: "bg-sky-500" },
  { label: "Hotels", spent: 2100, total: 2500, color: "bg-violet-500" },
  { label: "Activities", spent: 340, total: 600, color: "bg-emerald-500" },
  { label: "Dining", spent: 480, total: 500, color: "bg-orange-500" },
  { label: "Transport", spent: 120, total: 300, color: "bg-pink-500" },
];

const packing = [
  {
    cat: "Essentials",
    items: [
      { name: "Passport", done: true },
      { name: "Travel Insurance", done: true },
      { name: "Currency Exchange", done: false },
      { name: "Visa Docs", done: true },
    ],
  },
  {
    cat: "Clothing",
    items: [
      { name: "Swimwear", done: false },
      { name: "Light Dresses", done: true },
      { name: "Sunhat", done: false },
      { name: "Evening Wear", done: false },
    ],
  },
  {
    cat: "Tech",
    items: [
      { name: "Camera", done: true },
      { name: "Power Adapter", done: true },
      { name: "Portable Charger", done: false },
      { name: "Earbuds", done: true },
    ],
  },
];

const navItems = [
  { icon: "⊞", label: "Dashboard", active: true },
  { icon: "✈", label: "My Trips", active: false },
  { icon: "🏨", label: "Hotels", active: false },
  { icon: "🗺", label: "Explore", active: false },
  { icon: "📋", label: "Itinerary", active: false },
  { icon: "💳", label: "Budget", active: false },
];

export default function Dashboard() {
  const [activeTrip, setActiveTrip] = useState(0);
  const [tab, setTab] = useState("itinerary");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 80);
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/profile/dashboard", {
          withCredentials: true,
        });
        console.log(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const trip = upcomingTrips[activeTrip];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=DM+Sans:wght@300;400;500;600;700&display=swap');
        * { box-sizing: border-box; }
        .fade-in { animation: fadeIn 0.6s ease forwards; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .card-hover { transition: transform 0.22s ease, box-shadow 0.22s ease; }
        .card-hover:hover { transform: translateY(-3px); box-shadow: 0 16px 48px rgba(0,0,0,0.5); }
        .progress-bar { transition: width 1.3s cubic-bezier(0.4,0,0.2,1); }
        .hero-img { transition: transform 0.7s ease; }
        .hero-wrap:hover .hero-img { transform: scale(1.05); }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-thumb { background: #1e2535; border-radius: 4px; }
        .font-display { font-family: 'Cormorant Garamond', Georgia, serif !important; }
        body { font-family: 'DM Sans', sans-serif; background: #080a0f; }
      `}</style>

      <div
        className={`flex min-h-screen bg-[#080a0f] text-slate-200 overflow-hidden ${loaded ? "fade-in" : "opacity-0"}`}
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        {/* ── SIDEBAR ── */}
        <aside className="w-56 min-h-screen bg-[#0c0e16] border-r border-white/[0.05] flex flex-col py-7 flex-shrink-0">
          <div className="flex items-center gap-2 px-6 pb-8">
            <span className="text-amber-400 text-2xl">◈</span>
            <span
              className="text-white text-2xl font-bold tracking-widest font-display"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              VOYA
            </span>
          </div>

          <nav className="flex-1 flex flex-col gap-0.5 px-3">
            {navItems.map(({ icon, label, active }) => (
              <div
                key={label}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl cursor-pointer text-sm transition-all duration-200 ${
                  active
                    ? "bg-white/[0.07] text-white font-medium"
                    : "text-slate-500 hover:text-slate-300 hover:bg-white/[0.03]"
                }`}
              >
                <span className="text-base w-5 text-center">{icon}</span>
                <span>{label}</span>
                {active && <div className="w-1.5 h-1.5 rounded-full bg-amber-400 ml-auto" />}
              </div>
            ))}
          </nav>

          <div className="px-4 pt-4 border-t border-white/[0.05] mt-4">
            <div className="flex items-center gap-2.5">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&q=80"
                alt="Sofia"
                className="w-9 h-9 rounded-full object-cover ring-2 ring-amber-400/50"
              />
              <div>
                <div className="text-sm font-semibold text-white leading-tight">Sofia Reyes</div>
                <div className="text-[10px] text-amber-400 tracking-wider uppercase mt-0.5">
                  Explorer Pro
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* ── MAIN ── */}
        <main className="flex-1 px-8 py-7 overflow-y-auto min-w-0">
          {/* Header */}
          <header className="flex items-center justify-between mb-7">
            <div>
              <h1 className="text-[22px] font-bold text-white tracking-tight">
                Good morning, Sofia ☀️
              </h1>
              <p className="text-sm text-slate-500 mt-0.5">
                You have 3 upcoming adventures planned
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 bg-[#0c0e16] border border-white/[0.07] rounded-xl px-4 py-2.5">
                <span className="text-slate-500 text-xs">🔍</span>
                <input
                  placeholder="Search destinations..."
                  className="bg-transparent outline-none text-sm text-slate-300 placeholder-slate-600 w-40"
                />
              </div>
              <div className="relative bg-[#0c0e16] border border-white/[0.07] rounded-xl px-3.5 py-2.5 cursor-pointer hover:bg-white/[0.04] transition-colors">
                <span className="text-lg">🔔</span>
                <span className="absolute top-2 right-2.5 w-1.5 h-1.5 bg-amber-400 rounded-full border-2 border-[#080a0f]" />
              </div>
              <button className="flex items-center gap-1.5 bg-amber-400 hover:bg-amber-300 transition-colors text-black text-sm font-bold px-4 py-2.5 rounded-xl">
                ＋ New Trip
              </button>
            </div>
          </header>

          {/* Stats Row */}
          <div className="grid grid-cols-4 gap-4 mb-7">
            {[
              { label: "Trips Planned", value: "12", icon: "✈️", delta: "+3 this year", accent: "text-sky-400" },
              { label: "Countries Visited", value: "24", icon: "🌍", delta: "6 continents", accent: "text-violet-400" },
              { label: "Hotels Booked", value: "8", icon: "🏨", delta: "4 upcoming", accent: "text-amber-400" },
              { label: "Miles Traveled", value: "48k", icon: "📍", delta: "+12k this year", accent: "text-emerald-400" },
            ].map((s) => (
              <div
                key={s.label}
                className="bg-[#0c0e16] border border-white/[0.06] rounded-2xl p-5 card-hover cursor-default"
              >
                <div className="text-2xl mb-3">{s.icon}</div>
                <div
                  className="text-3xl font-bold text-white leading-none"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {s.value}
                </div>
                <div className="text-xs text-slate-500 mt-1.5">{s.label}</div>
                <div className={`text-xs mt-2 font-medium ${s.accent}`}>{s.delta}</div>
              </div>
            ))}
          </div>

          {/* Body */}
          <div className="flex gap-6">
            {/* ── LEFT ── */}
            <div className="flex-1 min-w-0 flex flex-col gap-5">
              {/* Trip Tabs */}
              <div className="flex items-center gap-2 flex-wrap">
                {upcomingTrips.map((t, i) => (
                  <button
                    key={t.id}
                    onClick={() => setActiveTrip(i)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 border ${
                      i === activeTrip
                        ? "bg-amber-400/10 border-amber-400/40 text-amber-300"
                        : "bg-transparent border-white/[0.06] text-slate-500 hover:text-slate-300 hover:border-white/[0.12]"
                    }`}
                  >
                    <span>{t.emoji}</span>
                    <span>{t.destination}</span>
                  </button>
                ))}
                <button className="ml-auto flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium border border-dashed border-white/[0.1] text-slate-500 hover:text-slate-300 hover:border-white/20 transition-all">
                  ＋ Add Trip
                </button>
              </div>

              {/* Hero */}
              <div className="relative rounded-2xl overflow-hidden h-72 card-hover cursor-pointer hero-wrap">
                <img
                  src={trip.cover}
                  alt={trip.destination}
                  className="w-full h-full object-cover hero-img"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-full border border-white/20">
                  {trip.tag}
                </div>
                <div className="absolute top-4 right-4 bg-amber-400 text-black text-xs font-bold px-3 py-1.5 rounded-full">
                  ⏳ {trip.daysLeft} days away
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="text-slate-400 text-[10px] tracking-[0.2em] uppercase mb-1">
                    {trip.country}
                  </div>
                  <div
                    className="text-4xl font-bold text-white leading-none mb-3"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {trip.destination}
                  </div>
                  <div className="flex items-center gap-4 text-slate-300 text-xs mb-4">
                    <span>📅 {trip.dates}</span>
                    <span>👥 {trip.travelers} travelers</span>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="text-slate-400">Planning Progress</span>
                      <span className="text-emerald-400 font-semibold">{trip.progress}%</span>
                    </div>
                    <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-amber-400 to-emerald-400 rounded-full progress-bar"
                        style={{ width: `${trip.progress}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Hotels */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h2 className="text-white font-semibold text-sm">Recommended Hotels</h2>
                  <button className="text-xs text-amber-400 hover:text-amber-300 transition-colors">
                    View all →
                  </button>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {hotels.map((h) => (
                    <div
                      key={h.name}
                      className="bg-[#0c0e16] border border-white/[0.06] rounded-2xl overflow-hidden card-hover cursor-pointer"
                    >
                      <div className="relative h-32 overflow-hidden">
                        <img
                          src={h.img}
                          alt={h.name}
                          className="w-full h-full object-cover"
                        />
                        <span
                          className={`absolute top-2 right-2 text-[10px] font-semibold px-2 py-0.5 rounded-full ${h.tagColor}`}
                        >
                          {h.tag}
                        </span>
                      </div>
                      <div className="p-3">
                        <div className="text-white text-sm font-semibold truncate">{h.name}</div>
                        <div className="text-slate-500 text-xs mt-0.5">📍 {h.location}</div>
                        <div className="flex items-center justify-between mt-2.5">
                          <div className="text-white font-bold text-sm">
                            ${h.price}
                            <span className="text-slate-500 font-normal text-xs">/night</span>
                          </div>
                          <div className="text-amber-400 text-xs font-semibold">⭐ {h.rating}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ── RIGHT ── */}
            <div className="w-[300px] flex-shrink-0 flex flex-col gap-4">
              {/* Detail Panel */}
              <div className="bg-[#0c0e16] border border-white/[0.06] rounded-2xl overflow-hidden">
                <div className="px-5 pt-5">
                  <h2 className="text-white font-semibold text-sm mb-4">Trip Details</h2>
                  <div className="flex gap-1 bg-white/[0.04] rounded-xl p-1 mb-4">
                    {["itinerary", "budget", "packing"].map((t) => (
                      <button
                        key={t}
                        onClick={() => setTab(t)}
                        className={`flex-1 py-1.5 rounded-lg text-xs font-medium capitalize transition-all duration-200 ${
                          tab === t
                            ? "bg-white/10 text-white"
                            : "text-slate-500 hover:text-slate-300"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Itinerary */}
                {tab === "itinerary" && (
                  <div className="px-5 pb-5">
                    {itinerary.map((item, i) => (
                      <div key={i} className="flex gap-3">
                        <div className="flex flex-col items-center">
                          <div
                            className={`w-7 h-7 rounded-full flex items-center justify-center text-xs flex-shrink-0 border ${
                              item.done
                                ? "bg-white/[0.03] border-white/[0.06] opacity-40"
                                : "bg-amber-400/10 border-amber-400/30"
                            }`}
                          >
                            {item.icon}
                          </div>
                          {i < itinerary.length - 1 && (
                            <div className="w-px h-4 bg-white/[0.06] my-1" />
                          )}
                        </div>
                        <div className={`pb-3 pt-0.5 ${item.done ? "opacity-40" : ""}`}>
                          <div className="text-[10px] text-slate-500 uppercase tracking-wider font-medium">
                            {item.time}
                          </div>
                          <div className="text-xs text-slate-200 mt-0.5 leading-snug">
                            {item.event}
                          </div>
                          {item.done && (
                            <div className="text-[10px] text-emerald-400 mt-0.5">✓ Done</div>
                          )}
                        </div>
                      </div>
                    ))}
                    <button className="mt-1 w-full py-2.5 border border-dashed border-white/[0.1] rounded-xl text-xs text-slate-500 hover:text-slate-300 hover:border-white/20 transition-all">
                      ＋ Add to itinerary
                    </button>
                  </div>
                )}

                {/* Budget */}
                {tab === "budget" && (
                  <div className="px-5 pb-5 flex flex-col gap-3">
                    {budget.map((b) => (
                      <div key={b.label}>
                        <div className="flex justify-between text-xs mb-1.5">
                          <span className="text-slate-400">{b.label}</span>
                          <span className="text-white font-medium">
                            ${b.spent.toLocaleString()}
                            <span className="text-slate-600"> /{b.total.toLocaleString()}</span>
                          </span>
                        </div>
                        <div className="h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full progress-bar ${b.color}`}
                            style={{ width: `${(b.spent / b.total) * 100}%` }}
                          />
                        </div>
                      </div>
                    ))}
                    <div className="pt-3 border-t border-white/[0.06] flex justify-between items-center">
                      <span className="text-slate-400 text-xs">Total Spent</span>
                      <span
                        className="text-2xl font-bold text-emerald-400"
                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                      >
                        $4,280
                      </span>
                    </div>
                    <div className="bg-amber-400/10 border border-amber-400/20 rounded-xl p-3 text-xs text-amber-300">
                      ⚠️ Dining at 96% of budget — consider adjusting
                    </div>
                  </div>
                )}

                {/* Packing */}
                {tab === "packing" && (
                  <div className="px-5 pb-5 flex flex-col gap-4">
                    {packing.map((section) => (
                      <div key={section.cat}>
                        <div className="text-[10px] uppercase tracking-[0.15em] text-amber-400 font-semibold mb-2">
                          {section.cat}
                        </div>
                        <div className="flex flex-col gap-1.5">
                          {section.items.map((item) => (
                            <div
                              key={item.name}
                              className={`flex items-center gap-2 text-xs ${
                                item.done
                                  ? "text-slate-600 line-through"
                                  : "text-slate-300"
                              }`}
                            >
                              <span
                                className={`text-sm ${
                                  item.done ? "text-emerald-600" : "text-slate-600"
                                }`}
                              >
                                {item.done ? "☑" : "☐"}
                              </span>
                              {item.name}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* AI Suggestion */}
              <div className="bg-gradient-to-br from-violet-950/70 to-indigo-950/70 border border-violet-500/20 rounded-2xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span>✨</span>
                  <span className="text-violet-300 text-[10px] font-semibold uppercase tracking-wider">
                    AI Suggestion
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mb-3">
                  Based on your Kolkata trip, you might love{" "}
                  <span className="text-white font-semibold">Varanasi</span> next — rich heritage,
                  spiritual ghats, and incredible street food.
                </p>
                <button className="w-full py-2 bg-violet-500/20 hover:bg-violet-500/30 transition-colors border border-violet-500/30 rounded-xl text-violet-300 text-xs font-medium">
                  Explore This Idea →
                </button>
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-2 gap-2">
                {[
                  { icon: "🗺️", label: "Explore Map" },
                  { icon: "💬", label: "Trip Chat" },
                  { icon: "📸", label: "Photos" },
                  { icon: "👥", label: "Travelers" },
                ].map((a) => (
                  <button
                    key={a.label}
                    className="bg-[#0c0e16] border border-white/[0.06] hover:border-white/[0.14] rounded-xl p-3 flex items-center gap-2 text-xs text-slate-400 hover:text-slate-200 transition-all duration-200 card-hover"
                  >
                    <span className="text-base">{a.icon}</span>
                    <span className="font-medium">{a.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}