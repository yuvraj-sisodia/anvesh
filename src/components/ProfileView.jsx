import React, { useState, useEffect } from "react";
import { User, Award, MapPin, Star, Heart, Calendar, ChevronRight, LogOut, Key, Eye, EyeOff, CheckCircle } from "lucide-react";
import { hasApiKey, getApiKey } from "../services/geminiService";

export default function ProfileView() {
  const [apiKey, setApiKey] = useState("");
  const [showKey, setShowKey] = useState(false);
  const [keySaved, setKeySaved] = useState(false);
  const [activeKeyStatus, setActiveKeyStatus] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("anvesh_gemini_key") || "";
    setApiKey(saved);
    setActiveKeyStatus(hasApiKey());
  }, []);

  const stats = [
    { label: "Bookings", value: "18" },
    { label: "Reviews", value: "7" },
    { label: "Saved Guides", value: "24" },
    { label: "Badges", value: "11" }
  ];

  const badges = [
    { emoji: "📷", name: "Photographer", desc: "Share 10 landmark photos" },
    { emoji: "📖", name: "Story Teller", desc: "Read 5 oral histories" },
    { emoji: "🎪", name: "Event Goer", desc: "Attend 3 cultural events" }
  ];

  const menuItems = [
    { label: "My Bookings", count: "3 upcoming" },
    { label: "Saved Places", count: "12 locations" },
    { label: "Travel Journal", count: "5 entries" },
    { label: "Settings", count: "" }
  ];

  const handleSaveKey = (e) => {
    e.preventDefault();
    if (apiKey.trim()) {
      localStorage.setItem("anvesh_gemini_key", apiKey.trim());
      setKeySaved(true);
      setActiveKeyStatus(true);
      setTimeout(() => setKeySaved(false), 2500);
    } else {
      localStorage.removeItem("anvesh_gemini_key");
      setActiveKeyStatus(hasApiKey());
    }
  };

  return (
    <div className="w-full bg-[#fdfbf7] border border-stone-200 rounded-3xl p-4 sm:p-5 shadow-sm flex flex-col gap-4 min-h-[500px]">
      
      {/* Header */}
      <div>
        <h2 className="text-base font-bold text-stone-900 flex items-center gap-1.5">
          <span>Profile & Settings</span>
        </h2>
        <p className="text-[10px] text-stone-500 font-semibold leading-none mt-1">Manage your account and track your journeys</p>
      </div>

      {/* User Info Block */}
      <div className="bg-white border border-stone-200 rounded-2xl p-4 shadow-sm flex items-center gap-4">
        <div className="w-14 h-14 rounded-full bg-[#8ab836]/15 text-[#8ab836] flex items-center justify-center border border-[#8ab836]/30 overflow-hidden relative">
          <User className="w-7 h-7" />
        </div>
        <div>
          <h3 className="text-sm font-extrabold text-stone-900 leading-tight">Arjun Sharma</h3>
          <span className="text-[10px] text-stone-400 font-bold block mt-0.5">arjun.sharma@email.com</span>
          
          <div className="flex items-center gap-1 bg-[#8ab836]/10 border border-[#8ab836]/20 px-2 py-0.5 rounded-full mt-2 w-fit">
            <span className="text-[9px] font-extrabold text-[#8ab836] leading-none">Walk Points:</span>
            <span className="text-[9px] font-black text-[#8ab836] leading-none">12,680</span>
          </div>
        </div>
      </div>

      {/* 🗝️ GOOGLE GEMINI API KEY CONFIGURATION */}
      <div className="bg-white border border-stone-200 rounded-2xl p-4 shadow-sm flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-extrabold text-stone-900 flex items-center gap-1.5">
            <Key className="w-3.5 h-3.5 text-[#8ab836]" />
            <span>Google Gemini API Config</span>
          </span>
          <span className={`text-[8px] font-extrabold uppercase px-2 py-0.5 rounded-full ${
            activeKeyStatus 
              ? "bg-emerald-100 text-emerald-700 border border-emerald-200" 
              : "bg-amber-100 text-amber-700 border border-amber-200"
          }`}>
            {activeKeyStatus ? "GenAI Active" : "Demo Mode"}
          </span>
        </div>
        
        <p className="text-[10px] text-stone-500 font-semibold leading-relaxed">
          Provide your Gemini API key to enable real-time cultural discovery. If empty, the app runs in demo mode with pre-cached destinations.
        </p>

        <form onSubmit={handleSaveKey} className="flex flex-col gap-2 mt-1">
          <div className="relative flex items-center">
            <input 
              type={showKey ? "text" : "password"}
              placeholder="Paste Google AI Studio API Key..."
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              className="w-full pl-3 pr-9 py-2 border border-stone-200 rounded-xl text-[10px] font-semibold text-stone-850 bg-stone-50 focus:outline-none focus:ring-1 focus:ring-[#8ab836]"
            />
            <button
              type="button"
              onClick={() => setShowKey(!showKey)}
              className="absolute right-2.5 p-1 rounded hover:bg-stone-250 text-stone-400 cursor-pointer"
            >
              {showKey ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
            </button>
          </div>
          
          <button 
            type="submit"
            className="w-full py-2 bg-[#8ab836] hover:bg-[#729c29] text-white rounded-xl text-[10px] font-extrabold shadow flex items-center justify-center gap-1 transition-all cursor-pointer"
          >
            {keySaved ? (
              <>
                <CheckCircle className="w-3.5 h-3.5" />
                <span>API Key Configured!</span>
              </>
            ) : (
              <span>Save API Configuration</span>
            )}
          </button>
        </form>
      </div>

      {/* Statistics Block */}
      <div className="grid grid-cols-4 gap-2 text-center bg-white border border-stone-200 rounded-2xl p-3 shadow-sm">
        {stats.map((s) => (
          <div key={s.label} className="border-r last:border-r-0 border-stone-100">
            <span className="text-sm font-black text-stone-900 block leading-tight">{s.value}</span>
            <span className="text-[8px] text-stone-400 font-bold uppercase block mt-0.5 leading-none">{s.label}</span>
          </div>
        ))}
      </div>

      {/* Badges Earned */}
      <div className="flex flex-col gap-2">
        <span className="text-[9px] font-bold uppercase tracking-wider text-stone-400">Badges Earned</span>
        
        <div className="grid grid-cols-3 gap-2">
          {badges.map((b) => (
            <div key={b.name} className="bg-white border border-stone-200 p-2.5 rounded-2xl text-center flex flex-col items-center gap-1.5 hover:border-[#8ab836]/20 transition-all cursor-pointer">
              <span className="text-xl">{b.emoji}</span>
              <div>
                <span className="text-[9px] font-bold text-stone-900 block leading-none">{b.name}</span>
                <span className="text-[7px] text-stone-400 font-semibold block mt-0.5 leading-tight">{b.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Menu Options */}
      <div className="flex flex-col gap-2">
        <span className="text-[9px] font-bold uppercase tracking-wider text-stone-400">Activity & Settings</span>
        
        <div className="bg-white border border-stone-200 rounded-2xl p-2.5 flex flex-col gap-1 shadow-sm">
          {menuItems.map((item) => (
            <button
              key={item.label}
              className="w-full flex items-center justify-between p-2 rounded-xl hover:bg-stone-50 transition-colors text-left cursor-pointer group"
            >
              <span className="text-[11px] font-semibold text-stone-700 group-hover:text-stone-900">{item.label}</span>
              <div className="flex items-center gap-1 shrink-0">
                <span className="text-[9px] text-stone-400 font-bold">{item.count}</span>
                <ChevronRight className="w-3 h-3 text-stone-400 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </button>
          ))}
          
          <button className="w-full flex items-center justify-between p-2 rounded-xl hover:bg-red-50 transition-colors text-left cursor-pointer group border-t border-stone-100 pt-2 mt-1">
            <span className="text-[11px] font-bold text-red-500">Log Out</span>
            <LogOut className="w-3.5 h-3.5 text-red-400" />
          </button>
        </div>
      </div>

    </div>
  );
}
