'use client';

import { AnveshAPIResponse } from '@/types/anvesh';
import ChatCompanion from './ChatCompanion';
import { useState } from 'react';

interface DashboardProps {
  data: AnveshAPIResponse;
  isMidnightMode: boolean;
  onSendMessage: (text: string) => void;
  onPlanMyTrip: () => void;
  isTyping?: boolean;
}

export default function Dashboard({
  data,
  isMidnightMode,
  onSendMessage,
  onPlanMyTrip,
  isTyping = false,
}: DashboardProps) {
  const [searchText, setSearchText] = useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchText.trim()) return;
    onSendMessage(searchText.trim());
    setSearchText('');
  };

  return (
    <section className="px-6 md:px-12 pt-24 pb-20 max-w-7xl mx-auto flex flex-col gap-6" style={{ animation: 'fadeIn 0.6s ease-out' }}>
      
      {/* Main Grid Wrapper */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* LEFT COLUMN: Hero landscape background + search + pills + inspiration (Col 8) */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          
          {/* Main Hero Card */}
          <div
            className="glass-panel relative rounded-3xl overflow-hidden min-h-[480px] p-8 md:p-10 flex flex-col justify-between"
          >
            {/* Background Image with Dark Vignette */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-all duration-1000 brightness-[0.6] saturate-95"
              style={{ backgroundImage: `url(${data.bg_image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/30" />

            {/* Top Row: Weather Widget Card (Top Right) */}
            <div className="z-10 flex items-start justify-between w-full">
              <span className="text-[10px] font-mono tracking-widest uppercase text-white/50 bg-slate-900/40 px-3 py-1 rounded-full backdrop-blur-sm border border-white/5">
                Overview
              </span>

              {/* Weather Panel */}
              <div
                className="rounded-2xl p-4 flex flex-col gap-1 w-52 backdrop-blur-md border border-[var(--border-color)]"
                style={{ background: 'var(--card-bg)' }}
              >
                <span className="text-[10px] font-semibold text-white truncate">{data.destination}</span>
                <span className="text-[9px] text-gray-400 font-medium truncate">{data.country}</span>
                
                <div className="flex items-center justify-between mt-2 pt-2 border-t border-[rgba(255,255,255,0.06)]">
                  <span className="text-2xl font-bold text-white leading-none">{data.temp}</span>
                  
                  {/* Rain Cloud SVG Icon */}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-300">
                    <path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25" />
                    <line x1="8" y1="20" x2="8" y2="22" />
                    <line x1="12" y1="20" x2="12" y2="22" />
                    <line x1="16" y1="20" x2="16" y2="22" />
                  </svg>
                </div>
                <span className="text-[9px] text-gray-300 font-medium mt-1 truncate">{data.weather_description}</span>
              </div>
            </div>

            {/* Middle Content Section */}
            <div className="z-10 flex flex-col gap-6 mt-8">
              
              {/* Left Headline Text */}
              <div className="flex flex-col gap-2 max-w-lg">
                <span className="text-[10px] font-semibold tracking-wider text-gray-400 uppercase">Where will curiosity take you today?</span>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
                  Explore more.<br />Worry less.
                </h2>
                
                {/* Visual line trace next to helper text */}
                <div className="flex gap-3 items-stretch mt-3 pl-1">
                  <div className="w-0.5 bg-gradient-to-b from-[var(--accent)] to-transparent rounded-full opacity-60" />
                  <p className="text-[11px] text-gray-300 font-light max-w-sm leading-relaxed">
                    Your AI travel companion that plans, guides and inspires every step of your journey.
                  </p>
                </div>
              </div>

              {/* Central Search Bar Input Form */}
              <form onSubmit={handleSearchSubmit} className="relative max-w-xl w-full flex items-center">
                <div className="absolute left-4 pointer-events-none">
                  {/* Compass SVG Icon */}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-gray-400">
                    <circle cx="12" cy="12" r="10" />
                    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
                  </svg>
                </div>
                
                <input
                  type="text"
                  placeholder="Ask anything about your next adventure..."
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  className="w-full pl-11 pr-14 py-3.5 bg-slate-950/40 border border-[var(--border-color)] rounded-2xl text-xs text-white placeholder-gray-400 focus:outline-none focus:border-[var(--accent)] focus:bg-slate-950/60 transition-all backdrop-blur-md"
                />

                <button
                  type="submit"
                  className="absolute right-2 p-2 rounded-xl bg-white/10 border border-white/5 text-white transition-all hover:bg-white/20 active:scale-95"
                >
                  {/* Directional arrow icon */}
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
                </button>
              </form>

            </div>

            {/* Bottom Row suggestions */}
            <div className="z-10 flex flex-col gap-2 mt-6">
              <span className="text-[10px] font-semibold tracking-wider text-gray-400">Suggestions to get you started</span>
              <div className="flex flex-wrap gap-2.5">
                {data.suggestions.map((sug, idx) => (
                  <button
                    key={idx}
                    onClick={() => onSendMessage(sug)}
                    className="px-3.5 py-1.5 rounded-full bg-slate-900/40 hover:bg-slate-900/70 border border-white/5 hover:border-[var(--accent)] text-[10px] text-gray-300 hover:text-white transition-all duration-200 active:scale-95 cursor-pointer backdrop-blur-sm"
                  >
                    {sug}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Inspiration for you: 5 column slots */}
          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <h3 className="text-xs font-semibold tracking-wider text-gray-400 uppercase">Inspiration for you</h3>
              <button className="flex items-center gap-1 text-[10px] font-semibold text-gray-400 hover:text-[var(--accent)] transition-colors">
                <span>View all</span>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </button>
            </div>

            {/* Row of 5 cards */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              {data.inspiration_cards.map((card, idx) => (
                <div
                  key={idx}
                  onClick={() => onSendMessage(`Show me a travel itinerary for ${card.name}`)}
                  className="group relative h-40 rounded-2xl overflow-hidden cursor-pointer border border-[var(--border-color)] transition-all duration-300 hover:scale-[1.03]"
                >
                  {/* Card Background image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 brightness-[0.7] group-hover:brightness-[0.8]"
                    style={{ backgroundImage: `url(${card.image_url})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />

                  {/* Top-Right arrow symbol */}
                  <div className="absolute top-2.5 right-2.5 p-1 rounded-lg bg-slate-950/40 border border-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-white"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
                  </div>

                  {/* Bottom Text metadata */}
                  <div className="absolute bottom-3 left-3 right-3 flex flex-col gap-0.5">
                    <span className="text-[10px] font-bold text-white tracking-wide">{card.name}</span>
                    <span className="text-[8px] text-gray-400 font-medium truncate">{card.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: AI Companion Chat (Col 4) */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <ChatCompanion
            messages={data.chat_companion.messages}
            onSendMessage={onSendMessage}
            isTyping={isTyping}
          />
        </div>

      </div>

      {/* Floating Bottom Banner Dock */}
      <div className="w-full glass-panel mt-4 px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left Side Branding Slogan */}
        <div className="flex items-center gap-2">
          {/* Compass Icon */}
          <div className="p-1.5 rounded-lg bg-[rgba(56,189,248,0.1)] border border-[rgba(56,189,248,0.15)] text-[var(--accent)]">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>
          </div>
          <span className="text-[10px] font-medium tracking-wide text-gray-300">Let curiosity lead. Anvesh will handle the rest.</span>
        </div>

        {/* Right Side feature badges */}
        <div className="flex flex-wrap items-center gap-5 justify-center">
          <div className="flex items-center gap-1.5 opacity-80">
            {/* Route Map path Icon */}
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-gray-400"><path d="M9 18l6-6-6-6"/></svg>
            <span className="text-[9px] font-semibold text-gray-300">Smart Itineraries</span>
          </div>

          <div className="flex items-center gap-1.5 opacity-80">
            {/* Real-time Info Icon */}
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-gray-400"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            <span className="text-[9px] font-semibold text-gray-300">Real-time Info</span>
          </div>

          <div className="flex items-center gap-1.5 opacity-80">
            {/* Local Insights Icon */}
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-gray-400"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/></svg>
            <span className="text-[9px] font-semibold text-gray-300">Local Insights</span>
          </div>

          <div className="flex items-center gap-1.5 opacity-80">
            {/* 24/7 Assistance Icon */}
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-gray-400"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
            <span className="text-[9px] font-semibold text-gray-300">24/7 Assistance</span>
          </div>
        </div>
      </div>

    </section>
  );
}
