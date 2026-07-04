import React, { useState } from "react";
import { MapPin, Navigation, Compass, AlertCircle, Sparkles, CheckCircle2 } from "lucide-react";

export default function AnveshDynamicMap({ destinationName }) {
  const [accessibleMode, setAccessibleMode] = useState(false);
  const [hoveredNode, setHoveredNode] = useState(null);

  // Setup cultural routes depending on city
  const isKyoto = (destinationName || "").toLowerCase().includes("kyoto");
  const isMumbai = (destinationName || "").toLowerCase().includes("mumbai");

  const routeNodes = isKyoto
    ? [
        { name: "Honen-in Temple Moss Paths", type: "Heritage", x: 45, y: 35, desc: "Step-free viewing available on stone walkways." },
        { name: "Nishiki Market Back-Alley", type: "Culinary", x: 120, y: 90, desc: "Narrow lane, flat concrete floor, best visited early." },
        { name: "Nishijin Machiya Loom", type: "Crafts", x: 165, y: 140, desc: "Level entrance accessible via rear screen door." }
      ]
    : isMumbai
    ? [
        { name: "Banganga Sacred Water Tank", type: "Spiritual", x: 40, y: 130, desc: "Steep stone steps down to pool; flat perimeter viewing." },
        { name: "Sassoon Docks Morning Auction", type: "Local Life", x: 110, y: 70, desc: "Wet floors, flat concrete surfaces, high activity." },
        { name: "Dharavi Leather Crafts Guild", type: "Crafts", x: 155, y: 30, desc: "Paved ground floor workshops, ramp accessible." }
      ]
    : [
        { name: "Cultural Point A", type: "Heritage", x: 50, y: 110, desc: "Verified step-free pathways." },
        { name: "Cultural Point B", type: "Local Life", x: 130, y: 60, desc: "Flat paved walking trail." }
      ];

  // Plotted path lines coordinates
  const pathD = routeNodes.reduce((acc, node, idx) => {
    return acc + (idx === 0 ? `M${node.x} ${node.y}` : ` L${node.x} ${node.y}`);
  }, "");

  return (
    <div className="bg-white border border-stone-200 rounded-3xl p-5 shadow-sm flex flex-col gap-4 w-full">
      {/* Route Flow Animation Style */}
      <style>{`
        @keyframes routeFlow {
          from { stroke-dashoffset: 20; }
          to { stroke-dashoffset: 0; }
        }
        .route-flow-line {
          stroke-dasharray: 6, 4;
          animation: routeFlow 1.5s infinite linear;
        }
      `}</style>

      {/* Header Info */}
      <div className="flex items-center justify-between">
        <div>
          <span className="text-[9px] font-bold text-[#8ab836] bg-[#8ab836]/10 px-2 py-0.5 rounded-full uppercase tracking-wider">
            Interactive Live Map
          </span>
          <h3 className="text-xs font-extrabold text-stone-900 mt-1.5 flex items-center gap-1">
            <Compass className="w-3.5 h-3.5 text-[#8ab836]" />
            <span>Anvesh Dynamic Route</span>
          </h3>
        </div>
        <div className="flex items-center gap-1.5">
          <button 
            type="button"
            onClick={() => setAccessibleMode(!accessibleMode)}
            className={`px-2.5 py-1 rounded-full text-[9px] font-bold border transition-all cursor-pointer ${
              accessibleMode 
                ? "bg-[#8ab836]/15 border-[#8ab836]/30 text-[#8ab836] shadow-sm font-extrabold animate-pulse" 
                : "bg-stone-50 border-stone-200 text-stone-500 hover:bg-stone-100"
            }`}
          >
            ♿ Wheelchair Mode
          </button>
        </div>
      </div>

      {/* Map Graphic Canvas */}
      <div className="relative aspect-[16/10] bg-stone-50 border border-stone-200 rounded-2xl overflow-hidden shadow-inner">
        
        {/* Verification Accessibility Badge Overlay */}
        {accessibleMode && (
          <div className="absolute top-3 left-3 z-20 bg-emerald-500 text-white border border-white/20 px-2 py-1 rounded-lg flex items-center gap-1 text-[8px] font-extrabold tracking-wide uppercase shadow-md animate-bounce">
            <CheckCircle2 className="w-3 h-3 fill-white text-emerald-500" />
            <span>Accessible Pathway Verified</span>
          </div>
        )}

        {/* Floating coordinates indicator */}
        <div className="absolute bottom-2.5 right-2.5 z-10 bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded text-[8px] font-mono text-stone-300">
          {isKyoto ? "35.0116° N, 135.7681° E" : isMumbai ? "18.9220° N, 72.8347° E" : "GPS Signal Lat Long"}
        </div>

        {/* Abstract SVG Mapping Vector */}
        <svg className="absolute inset-0 w-full h-full z-0" viewBox="0 0 200 160" preserveAspectRatio="none">
          
          {/* Grid lines */}
          <defs>
            <pattern id="mapGrid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e2e2e0" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#mapGrid)" opacity="0.4" />

          {/* Abstract Rivers and Parks */}
          <path d="M-10,40 Q60,35 120,60 T220,110 L220,160 L-10,160 Z" fill="#e2e8f0" opacity="0.5" />
          <path d="M60,-10 C80,30 70,80 90,170" stroke="#bae6fd" strokeWidth="6" fill="none" opacity="0.4" />

          {/* Plotted Route Line */}
          {pathD && (
            <path
              d={pathD}
              fill="none"
              stroke={accessibleMode ? "#10b981" : "#8ab836"}
              strokeWidth={accessibleMode ? "3.5" : "2.5"}
              className={`transition-all duration-300 ${accessibleMode ? "" : "route-flow-line"}`}
              style={{
                filter: accessibleMode ? "drop-shadow(0 0 4px #10b981)" : "none"
              }}
            />
          )}

          {/* SVG Connectors pulsing circles */}
          {accessibleMode && routeNodes.map((node, i) => (
            <circle
              key={i}
              cx={node.x}
              cy={node.y}
              r="8"
              fill="#10b981"
              opacity="0.15"
              className="animate-ping"
            />
          ))}

        </svg>

        {/* HTML Markers layer overlay */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          {routeNodes.map((node, idx) => {
            const isHovered = hoveredNode === idx;
            return (
              <button
                key={idx}
                type="button"
                className="absolute transform -translate-x-1/2 -translate-y-1/2 pointer-events-auto cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#8ab836] rounded-full"
                style={{ left: `${(node.x / 200) * 100}%`, top: `${(node.y / 160) * 100}%` }}
                onMouseEnter={() => setHoveredNode(idx)}
                onMouseLeave={() => setHoveredNode(null)}
                onFocus={() => setHoveredNode(idx)}
                onBlur={() => setHoveredNode(null)}
                aria-label={`Route Stop ${idx + 1}: ${node.name}`}
                aria-expanded={isHovered}
              >
                {/* Marker Pin */}
                <div className={`w-5 h-5 rounded-full border flex items-center justify-center shadow-md transition-all ${
                  accessibleMode 
                    ? "bg-emerald-500 border-white text-white"
                    : "bg-[#8ab836] border-white text-white"
                } hover:scale-125`}>
                  <span className="text-[9px] font-black">{idx + 1}</span>
                </div>

                {/* Floating Node Tooltip */}
                {isHovered && (
                  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-stone-900 text-white text-[9px] font-semibold p-2 rounded-lg shadow-lg z-30 w-36 leading-normal pointer-events-none text-left">
                    <span className="font-extrabold block text-stone-100">{node.name}</span>
                    <span className="text-[7px] text-[#a2d149] uppercase tracking-wider block mt-0.5">{node.type} node</span>
                    <span className="text-stone-300 block mt-1 leading-tight">{node.desc}</span>
                  </div>
                )}
              </button>
            );
          })}
        </div>

      </div>

      {/* Details Footer */}
      <div className="bg-stone-50 border border-stone-200 rounded-xl p-3 flex flex-col gap-1.5">
        <span className="text-[8px] font-bold text-stone-400 uppercase tracking-wider block">Plotted Cultural Landmarks:</span>
        <div className="flex flex-col gap-1 text-[10px] text-stone-600 font-semibold">
          {routeNodes.map((n, idx) => (
            <div key={idx} className="flex gap-1.5 items-center">
              <span className={`w-3.5 h-3.5 rounded-full flex items-center justify-center text-[8px] font-bold text-white ${
                accessibleMode ? "bg-emerald-500" : "bg-[#8ab836]"
              }`}>{idx + 1}</span>
              <span className="text-stone-850 truncate">{n.name}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
