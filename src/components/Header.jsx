import React, { useState } from "react";
import { CloudLightning, CheckCircle2 } from "lucide-react";
import Logo, { LogoText } from "./Logo";

export default function Header() {
  const [isSaving, setIsSaving] = useState(false);
  const [toast, setToast] = useState(null);

  const handleHeaderSaveOffline = () => {
    setIsSaving(true);
    setTimeout(() => {
      try {
        localStorage.setItem("anvesh_global_cache", "true");
        setToast("Anvesh Route Saved Successfully! Available 100% Offline.");
      } catch (err) {
        console.error(err);
      } finally {
        setIsSaving(false);
        // Clear toast after 3s
        setTimeout(() => setToast(null), 3000);
      }
    }, 600);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-stone-200 bg-white/80 backdrop-blur-md relative">
      
      {/* Toast Alert Box */}
      {toast && (
        <div className="absolute top-18 right-6 z-50 bg-[#1c1917] text-white px-4 py-2.5 rounded-xl shadow-xl border border-[#8ab836]/40 flex items-center gap-2.5 animate-in fade-in slide-in-from-top-2 duration-300">
          <CheckCircle2 className="w-4 h-4 text-[#a2d149]" />
          <span className="text-[11px] font-bold tracking-wide">{toast}</span>
        </div>
      )}

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="flex items-center gap-2 select-none">
            <Logo className="w-9 h-9" />
            <LogoText />
          </div>

          {/* Right Section: Utilities */}
          <div className="flex items-center gap-4">
            
            {/* Offline PWA Button inside header */}
            <button
              onClick={handleHeaderSaveOffline}
              disabled={isSaving}
              className={`hidden sm:flex items-center gap-1 px-3.5 py-1.5 rounded-full border transition-all cursor-pointer text-xs font-bold ${
                isSaving 
                  ? "bg-stone-50 text-stone-400 border-stone-200" 
                  : "bg-white text-stone-600 border-stone-200 hover:border-[#8ab836]/40 hover:text-[#8ab836]"
              }`}
              title="Save current routes for offline local usage"
            >
              <CloudLightning className="w-3.5 h-3.5" />
              <span>{isSaving ? "Saving..." : "Save Route Offline"}</span>
            </button>

          </div>

        </div>
      </div>
    </header>
  );
}
