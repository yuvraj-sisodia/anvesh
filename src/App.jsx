import React from "react";
import ExploreView from "./components/ExploreView";
import { Sparkles, Heart } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-[#fafaf9] text-stone-800 flex flex-col font-sans selection:bg-[#8ab836] selection:text-white relative">
      
      {/* Floating Logo Badge */}
      <div className="fixed top-5 left-6 z-50 flex items-center select-none bg-white/85 backdrop-blur-md px-5 py-3 rounded-2xl border border-stone-200 shadow-md">
        <img src="/logo.png" alt="Anvesh Logo" className="h-10 object-contain" />
      </div>

      {/* Main Layout Area */}
      <main className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-6 flex-grow w-full">

        {/* Tab View Render */}
        <div className="w-full transition-all animate-in fade-in duration-300">
          <ExploreView />
        </div>

      </main>

      {/* Premium Footer */}
      <footer className="border-t border-stone-200 bg-white py-6 text-center text-xs text-stone-500">
        <div className="max-w-[1440px] mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="flex items-center gap-1.5 justify-center sm:justify-start">
            Designed for Universal Culture and Heritage Exploration. Made with <Heart className="h-3.5 w-3.5 text-red-500 fill-red-500" />
          </p>
          <div className="flex gap-4">
            <span className="text-stone-700 font-bold">© 2026 Anvesh</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
