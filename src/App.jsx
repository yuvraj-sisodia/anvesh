import React, { useState } from "react";
import Header from "./components/Header";
import ExploreView from "./components/ExploreView";
import ProfileView from "./components/ProfileView";
import { Sparkles, Heart } from "lucide-react";

export default function App() {
  const [currentTab, setCurrentTab] = useState("explore");

  return (
    <div className="min-h-screen bg-[#fafaf9] text-stone-800 flex flex-col font-sans selection:bg-[#8ab836] selection:text-white">
      
      {/* Premium Header Switcher */}
      <Header 
        currentTab={currentTab} 
        setCurrentTab={setCurrentTab}
      />

      {/* Main Layout Area */}
      <main className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-6 flex-grow w-full">
        
        {/* Banner Notification */}
        <div className="mb-6 p-4 bg-[#8ab836]/10 border border-[#8ab836]/20 rounded-2xl flex items-center gap-3">
          <Sparkles className="h-5 w-5 text-[#8ab836] shrink-0" />
          <p className="text-xs sm:text-sm text-stone-700 font-semibold leading-relaxed">
            Welcome to the new Anvesh — your Gen AI powered travel companion. Enter your Google Gemini API Key in the settings to generate immersive cultural guides and live interactive maps for any destination in the world!
          </p>
        </div>

        {/* Tab View Render */}
        <div className="w-full transition-all animate-in fade-in duration-300">
          {currentTab === "explore" ? (
            <ExploreView onNavigate={setCurrentTab} />
          ) : (
            <ProfileView />
          )}
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
