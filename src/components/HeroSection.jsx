import React from "react";
import { MapPin, Route, Globe, Users, ChevronDown, Sparkles } from "lucide-react";

const STATS = [
  { icon: Route, value: "10K+", label: "ROUTES" },
  { icon: Globe, value: "120+", label: "COUNTRIES" },
  { icon: Users, value: "2M+", label: "EXPLORERS" },
];

const CATEGORIES = [
  { emoji: "🏛️", name: "Cultural Heritage", desc: "Monuments & Sites" },
  { emoji: "🎭", name: "Local Experiences", desc: "Workshops & Activities" },
  { emoji: "🍜", name: "Food Trails", desc: "Cuisine & Street Food" },
  { emoji: "🎪", name: "Festivals & Events", desc: "Celebrations & Fairs" },
  { emoji: "💎", name: "Hidden Gems", desc: "Undiscovered Places" },
  { emoji: "🌿", name: "Nature Escapes", desc: "Parks, Trails & More" },
];

export default function HeroSection({ onExploreClick }) {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-end overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/anvesh_hero.png"
          alt="Explorer on mountain peak at sunrise"
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-900/80 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-dark-900 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pb-8 pt-32 w-full">
        {/* Tagline */}
        <p className="text-xs sm:text-sm font-bold tracking-[0.35em] text-neutral-300 uppercase mb-4">
          <span className="text-lime-400">One</span> step. Endless discoveries.
        </p>

        {/* Giant Title */}
        <h1 className="text-[clamp(3.5rem,12vw,10rem)] font-black leading-[0.85] tracking-tighter text-white mb-6 max-w-4xl">
          ANV
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-lime-600 [-webkit-text-stroke:2px_#c8ff00] sm:[-webkit-text-stroke:3px_#c8ff00]"
            style={{WebkitTextFillColor: "transparent"}}>
            ESH
          </span>
        </h1>

        {/* Subtitle Block */}
        <div className="flex flex-col sm:flex-row sm:items-end gap-6 sm:gap-12 mb-8">
          <div className="max-w-sm">
            <h2 className="text-lg sm:text-xl font-bold text-white leading-tight mb-1">
              Discover Places.
              <br />
              Experience Cultures.
              <br />
              <span className="text-lime-400">Create Memories.</span>
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mt-3">
              Your AI travel companion that helps you discover destinations, cultures and experiences that stay with you forever.
            </p>
          </div>

          {/* Search Box */}
          <div className="flex-1 max-w-lg">
            <div className="glass-card rounded-2xl p-4 sm:p-5">
              <label className="text-xs font-semibold text-neutral-400 mb-2 block">Where do you want to go?</label>
              <div className="flex items-center gap-3">
                <div className="flex-1 flex items-center gap-2 bg-dark-600/60 rounded-xl px-4 py-3 border border-white/5">
                  <MapPin className="h-4 w-4 text-neutral-500 shrink-0" />
                  <input
                    type="text"
                    placeholder="Ask anything or try..."
                    className="bg-transparent text-white placeholder-neutral-500 text-sm w-full focus:outline-none"
                  />
                </div>
                <button
                  onClick={onExploreClick}
                  className="btn-lime p-3.5 rounded-xl flex items-center justify-center shrink-0 cursor-pointer"
                >
                  <Sparkles className="h-5 w-5" />
                </button>
              </div>

              {/* Quick Tags */}
              <div className="flex flex-wrap gap-2 mt-3">
                {["Weekend Getaway", "Budget Trip", "Cultural Experience"].map(tag => (
                  <span key={tag} className="text-[10px] sm:text-xs px-3 py-1.5 rounded-full bg-dark-500/60 text-neutral-300 border border-white/5 hover:border-lime-400/30 hover:text-lime-400 cursor-pointer transition-all">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="flex flex-wrap items-center gap-6 sm:gap-10 py-5 border-t border-white/10">
          {STATS.map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex items-center gap-2.5">
              <Icon className="h-4 w-4 text-lime-400" />
              <div>
                <span className="text-xl sm:text-2xl font-black text-white">{value}</span>
                <span className="text-[10px] font-bold text-neutral-500 tracking-wider uppercase ml-1.5">{label}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="hidden sm:flex justify-center mt-4">
          <a href="#categories" className="flex flex-col items-center gap-1 text-neutral-500 hover:text-lime-400 transition-colors">
            <span className="text-[10px] font-bold tracking-widest uppercase">Scroll to Explore</span>
            <ChevronDown className="h-4 w-4 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}

export function CategoriesSection() {
  return (
    <section id="categories" className="py-16 bg-dark-900">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">What do you want to explore?</h2>
            <p className="text-sm text-neutral-500 mt-1">Handpicked categories for you</p>
          </div>
          <a href="#" className="text-sm text-lime-400 font-semibold hover:underline hidden sm:block">View all →</a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {CATEGORIES.map((cat, i) => (
            <button
              key={cat.name}
              className={`group flex flex-col items-center gap-3 p-5 sm:p-6 rounded-2xl border transition-all cursor-pointer ${
                i === 0
                  ? "bg-lime-400/10 border-lime-400/20 hover:border-lime-400/40"
                  : "bg-dark-700/50 border-white/5 hover:border-lime-400/20 hover:bg-dark-600/50"
              }`}
            >
              <span className="text-3xl group-hover:scale-110 transition-transform">{cat.emoji}</span>
              <div className="text-center">
                <span className={`text-xs font-bold block leading-tight ${i === 0 ? "text-lime-400" : "text-white"}`}>
                  {cat.name}
                </span>
                <span className="text-[10px] text-neutral-500 block mt-0.5">{cat.desc}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
