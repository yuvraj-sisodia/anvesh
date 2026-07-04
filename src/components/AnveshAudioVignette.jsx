import React, { useState, useEffect, useRef } from "react";
import { Play, Pause, Volume2, VolumeX, RotateCcw, AlertTriangle } from "lucide-react";

export default function AnveshAudioVignette({ audioTitle, audioScript }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [muted, setMuted] = useState(false);
  const [ttsSupported, setTtsSupported] = useState(true);
  
  const utteranceRef = useRef(null);
  const progressIntervalRef = useRef(null);

  // Check Text-to-Speech support on mount
  useEffect(() => {
    if (!("speechSynthesis" in window)) {
      setTtsSupported(false);
    }
    
    // Cleanup speech synthesis on unmount
    return () => {
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
      clearInterval(progressIntervalRef.current);
    };
  }, []);

  // Sync isPlaying state with page focus changes
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden && isPlaying) {
        handlePause();
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, [isPlaying]);

  // Simulate progress bar movement based on estimated speech duration
  useEffect(() => {
    if (isPlaying) {
      const estimatedDuration = (audioScript || "").length * 68 || 8000; // ~68ms per char
      const updateInterval = 100; // ms
      const step = (updateInterval / estimatedDuration) * 100;

      progressIntervalRef.current = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            handleStop();
            return 100;
          }
          return prev + step;
        });
      }, updateInterval);
    } else {
      clearInterval(progressIntervalRef.current);
    }

    return () => clearInterval(progressIntervalRef.current);
  }, [isPlaying, audioScript]);

  const handlePlay = () => {
    if (!ttsSupported) {
      setIsPlaying(true);
      return;
    }

    window.speechSynthesis.cancel(); // Stop any current speech

    const textToSpeak = audioScript || "Welcome to Anvesh discovery experience.";
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utteranceRef.current = utterance;

    utterance.onend = () => {
      handleStop();
    };

    utterance.onerror = (e) => {
      if (e.error !== "interrupted") {
        console.error("TTS synthesis error:", e);
        handleStop();
      }
    };

    utterance.rate = 0.9; 
    utterance.pitch = 1.0;
    utterance.volume = muted ? 0 : 1;

    // Optional natural voice selector
    const voices = window.speechSynthesis.getVoices();
    const naturalVoice = voices.find(
      (v) => v.lang.startsWith("en") && (v.name.includes("Natural") || v.name.includes("Google"))
    );
    if (naturalVoice) {
      utterance.voice = naturalVoice;
    }

    window.speechSynthesis.speak(utterance);
    setIsPlaying(true);
  };

  const handlePause = () => {
    if (ttsSupported) {
      window.speechSynthesis.cancel(); // Stop speech completely on pause
    }
    setIsPlaying(false);
  };

  const handleStop = () => {
    if (ttsSupported) {
      window.speechSynthesis.cancel();
    }
    setIsPlaying(false);
    setProgress(0);
  };

  const toggleMute = () => {
    const nextMuted = !muted;
    setMuted(nextMuted);
    if (ttsSupported && isPlaying) {
      window.speechSynthesis.cancel();
      const textToSpeak = audioScript || "Welcome to Anvesh discovery experience.";
      const utterance = new SpeechSynthesisUtterance(textToSpeak);
      utterance.rate = 0.9;
      utterance.volume = nextMuted ? 0 : 1;
      utterance.onend = () => handleStop();
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="bg-white border border-stone-200 rounded-3xl p-5 shadow-sm flex flex-col gap-4 w-full">
      
      {/* Waveform Animation Style */}
      <style>{`
        @keyframes audioWavePulse {
          0%, 100% { transform: scaleY(0.25); }
          50% { transform: scaleY(1); }
        }
        .audio-wave-pulse {
          animation: audioWavePulse 1s ease-in-out infinite;
          transform-origin: bottom;
        }
      `}</style>

      {/* Header Info */}
      <div className="flex items-center justify-between">
        <div>
          <span className="text-[9px] font-bold text-[#8ab836] bg-[#8ab836]/10 px-2 py-0.5 rounded-full uppercase tracking-wider">
            Oral History Audio
          </span>
          <h3 className="text-xs font-extrabold text-stone-900 mt-1.5">
            {audioTitle || "Historical Narratives"}
          </h3>
        </div>
        <div className="p-2 rounded-xl bg-stone-50 border border-stone-200">
          <Volume2 className={`w-4 h-4 text-[#8ab836] ${isPlaying ? "animate-bounce" : ""}`} />
        </div>
      </div>

      {/* Visualizer and Progression */}
      <div className="bg-stone-50 border border-stone-200 rounded-2xl p-4 flex flex-col gap-4">
        
        {/* Animated Waveform */}
        <div className="h-12 flex items-end justify-center gap-1 bg-white border border-stone-150 rounded-xl overflow-hidden relative">
          <div className="flex items-end gap-1 h-8 z-10 w-full justify-center pb-1">
            {[0.7, 0.4, 0.9, 0.55, 0.3, 0.85, 0.6, 0.45, 0.75, 0.9, 0.5, 0.7].map((val, i) => (
              <div
                key={i}
                className="w-1.5 rounded-full bg-[#8ab836] transition-all"
                style={{
                  height: isPlaying ? "100%" : "6px",
                  animationDelay: `${i * 0.08}s`,
                  animationDuration: `${0.7 + val * 0.4}s`
                }}
                ref={(el) => {
                  if (el) {
                    if (isPlaying) el.classList.add("audio-wave-pulse");
                    else el.classList.remove("audio-wave-pulse");
                  }
                }}
              />
            ))}
          </div>
          <span className="absolute top-1.5 right-2 text-[8px] text-stone-400 font-bold uppercase tracking-wider">
            {isPlaying ? "Active Voice Synthesis" : "Voice Player Ready"}
          </span>
        </div>

        {/* Progress Slider */}
        <div className="flex flex-col gap-1">
          <div className="relative w-full h-1 bg-stone-200 rounded-full overflow-hidden">
            <div 
              className="absolute left-0 top-0 h-full bg-[#8ab836] rounded-full transition-all duration-100 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between text-[8px] text-stone-400 font-bold font-mono">
            <span>0:00</span>
            <span>{isPlaying ? `${Math.round(progress)}% Played` : "1:15 Script"}</span>
          </div>
        </div>

        {/* Control Buttons */}
        <div className="flex items-center justify-center gap-4">
          <button 
            type="button"
            onClick={toggleMute}
            className="p-1.5 rounded-lg border border-stone-200 bg-white hover:bg-stone-50 text-stone-500 cursor-pointer"
            title={muted ? "Unmute" : "Mute"}
          >
            {muted ? <VolumeX className="w-3.5 h-3.5 text-red-500" /> : <Volume2 className="w-3.5 h-3.5" />}
          </button>

          <button
            type="button"
            onClick={isPlaying ? handlePause : handlePlay}
            className="w-10 h-10 rounded-full bg-[#8ab836] hover:bg-[#729c29] text-white flex items-center justify-center shadow transition-all hover:scale-105 active:scale-95 cursor-pointer"
            title={isPlaying ? "Stop Narrator" : "Play Narrator"}
          >
            {isPlaying ? <Pause className="w-5 h-5 fill-white text-white" /> : <Play className="w-5 h-5 fill-white text-white translate-x-0.5" />}
          </button>

          {progress > 0 && (
            <button 
              type="button"
              onClick={handleStop}
              className="p-1.5 rounded-lg border border-stone-200 bg-white hover:bg-stone-50 text-stone-500 cursor-pointer"
              title="Reset Audio"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

      </div>

      {!ttsSupported && (
        <div className="flex items-start gap-1.5 p-2 bg-amber-50 border border-amber-200 rounded-xl text-[9px] text-amber-800 font-semibold">
          <AlertTriangle className="w-3.5 h-3.5 shrink-0 mt-0.5" />
          <p>Text-to-speech API is blocked or unsupported in this browser environment.</p>
        </div>
      )}

      {/* Written script transcript */}
      <div className="flex flex-col gap-2 border-t border-stone-150 pt-3">
        <span className="text-[8px] font-bold uppercase tracking-wider text-stone-400">
          Vignette Script Transcript
        </span>
        <blockquote className="font-serif italic text-stone-600 bg-stone-50/50 p-3 rounded-xl border-l-2 border-[#8ab836] text-[10px] leading-relaxed text-left">
          "{audioScript || "No oral history transcription available."}"
        </blockquote>
      </div>

    </div>
  );
}
