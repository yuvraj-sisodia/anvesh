'use client';

import { useState, useEffect, useCallback } from 'react';
import { AnveshAPIResponse, ChatMessage, AnveshFormState } from '@/types/anvesh';
import { fetchAnveshData, MOCK_DATASETS } from '@/lib/mockApi';
import Header from '@/components/Header';
import Dashboard from '@/components/Dashboard';

export default function AnveshPage() {
  const [isMidnightMode, setIsMidnightMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  // Initialize page with Yosemite dataset by default
  const [data, setData] = useState<AnveshAPIResponse | null>(null);

  useEffect(() => {
    // Load initial Yosemite dataset on mount
    setData(JSON.parse(JSON.stringify(MOCK_DATASETS.yosemite)));
  }, []);

  // Time picker change → check midnight mode
  const handleTimeChange = useCallback((time: string) => {
    if (!time) return;
    const [hours] = time.split(':').map(Number);
    setIsMidnightMode(hours >= 22);
  }, []);

  // Form submission (triggered via Plan My Trip modal)
  const handleFormSubmit = useCallback(async (formState: AnveshFormState) => {
    setIsLoading(true);
    setIsFormOpen(false);
    
    try {
      const response = await fetchAnveshData(formState.destination, formState.vibe, formState.time);
      
      // Update midnight mode based on form time input
      if (formState.time) {
        handleTimeChange(formState.time);
      }
      
      setData(JSON.parse(JSON.stringify(response)));
    } catch (err) {
      console.error('Failed to fetch destination data:', err);
    } finally {
      setIsLoading(false);
    }
  }, [handleTimeChange]);

  // AI Companion Chat: Process message and dynamically update dashboard
  const handleSendMessage = useCallback(async (text: string) => {
    if (!data) return;

    // 1. Append user message to log
    const userMsg: ChatMessage = {
      id: String(Date.now()),
      sender: 'user',
      text,
    };

    const updatedMessages = [...data.chat_companion.messages, userMsg];
    setData(prev => prev ? {
      ...prev,
      chat_companion: { messages: updatedMessages }
    } : null);

    // 2. Trigger typing indicator
    setIsTyping(true);

    // 3. Simulate companion analyzing text and reloading dashboard
    setTimeout(async () => {
      let targetKey = 'yosemite';
      const textLower = text.toLowerCase();

      if (textLower.includes('himachal') || textLower.includes('escape')) {
        targetKey = 'himachal';
      } else if (textLower.includes('kerala')) {
        targetKey = 'kerala';
      } else if (textLower.includes('leh') || textLower.includes('ladakh')) {
        targetKey = 'leh';
      }

      try {
        const nextData = JSON.parse(JSON.stringify(MOCK_DATASETS[targetKey]));
        
        // Retain the current chat history but append the new bot replies
        const finalMessages = [
          ...updatedMessages,
          ...nextData.chat_companion.messages.slice(2) // Skip initial welcome messages
        ];

        nextData.chat_companion.messages = finalMessages;
        setData(nextData);

        // Turn on Midnight Mode automatically if they ask for late night spots
        if (textLower.includes('night') || textLower.includes('dark')) {
          setIsMidnightMode(true);
        }
      } catch (err) {
        console.error('Error switching destination via chat:', err);
      } finally {
        setIsTyping(false);
      }
    }, 1500);

  }, [data]);

  if (!data) {
    return (
      <div className="min-h-screen bg-[#090D16] flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="w-6 h-6 border-2 border-[#38BDF8] border-t-transparent rounded-full animate-spin" />
          <span className="text-xs text-gray-500 font-mono tracking-wider uppercase">Loading Anvesh...</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${isMidnightMode ? 'midnight-mode' : ''} bg-[var(--bg)] transition-colors duration-700 relative overflow-hidden`}>
      {/* Ambient background glows matching mockup's light blue mist/texture */}
      <div className="glow-spot-1" />
      <div className="glow-spot-2" />
      <div className="glow-spot-3" />
      <div className="glow-spot-4" />

      {/* Dotted grid background overlay */}
      <div className="grid-overlay" />

      {/* Main Content Layout Wrapper */}
      <div className="relative z-10">
        <Header isMidnightMode={isMidnightMode} />

        <main>
          {/* redone dashboard */}
          <Dashboard
            data={data}
            isMidnightMode={isMidnightMode}
            onSendMessage={handleSendMessage}
            onPlanMyTrip={() => setIsFormOpen(true)}
            isTyping={isTyping}
          />
        </main>
      </div>

      {/* Loading Overlay */}
      {isLoading && (
        <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center z-[100] transition-opacity duration-300">
          <div className="flex flex-col items-center gap-3">
            <div className="w-8 h-8 border-3 border-[#38BDF8] border-t-transparent rounded-full animate-spin" />
            <span className="text-xs text-gray-400 font-mono tracking-wider">Discovering cultural coordinates...</span>
          </div>
        </div>
      )}

      {/* Plan My Trip Modal Dialog Form Overlay */}
      {isFormOpen && (
        <div
          className="fixed inset-0 bg-slate-950/70 backdrop-blur-md flex items-center justify-center z-[90] p-4"
          onClick={() => setIsFormOpen(false)}
          style={{ animation: 'fadeIn 0.25s ease-out' }}
        >
          <div
            className="glass-panel w-full max-w-md p-6 md:p-8 flex flex-col gap-5 text-left"
            onClick={(e) => e.stopPropagation()}
            style={{ background: 'rgba(15, 23, 42, 0.85)', animation: 'slideUp 0.3s ease-out' }}
          >
            <div className="flex items-center justify-between border-b border-[rgba(255,255,255,0.06)] pb-4">
              <h3 className="text-sm font-semibold tracking-tight">Configure Coordinates</h3>
              <button
                onClick={() => setIsFormOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              </button>
            </div>

            {/* Form Content */}
            <PlanForm onSubmit={handleFormSubmit} onCancel={() => setIsFormOpen(false)} />
          </div>
        </div>
      )}
    </div>
  );
}

// Modal Inner Form
interface PlanFormProps {
  onSubmit: (state: AnveshFormState) => void;
  onCancel: () => void;
}

function PlanForm({ onSubmit, onCancel }: PlanFormProps) {
  const [destination, setDestination] = useState('');
  const [vibe, setVibe] = useState<'Foodie' | 'History Buff' | 'Adventure' | 'Art' | ''>('');
  const [time, setTime] = useState('');

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!destination || !vibe || !time) return;
    onSubmit({ destination, vibe, time });
  };

  return (
    <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <label htmlFor="modal-destination" className="text-[10px] font-semibold text-gray-500 tracking-wider uppercase">Destination</label>
        <input
          id="modal-destination"
          type="text"
          placeholder="e.g. Indore, Varanasi, Rajasthan..."
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          required
          autoComplete="off"
          className="input-glass text-xs"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="modal-vibe" className="text-[10px] font-semibold text-gray-500 tracking-wider uppercase">Traveler Vibe</label>
        <select
          id="modal-vibe"
          value={vibe}
          onChange={(e) => setVibe(e.target.value as any)}
          required
          className="input-glass text-xs cursor-pointer appearance-none"
          style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'12\' height=\'12\' viewBox=\'0 0 12 12\'%3E%3Cpath fill=\'%23888\' d=\'M6 8L1 3h10z\'/%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center' }}
        >
          <option value="" disabled className="bg-slate-900 text-gray-500">Select vibe...</option>
          {['Foodie', 'History Buff', 'Adventure', 'Art'].map((v) => (
            <option key={v} value={v} className="bg-slate-900 text-gray-300">{v}</option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="modal-time" className="text-[10px] font-semibold text-gray-500 tracking-wider uppercase">Current Time</label>
        <input
          id="modal-time"
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
          className="input-glass text-xs"
          style={{ colorScheme: 'dark' }}
        />
      </div>

      <div className="flex gap-3 justify-end mt-4 pt-4 border-t border-[rgba(255,255,255,0.06)]">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 rounded-xl text-xs font-semibold text-gray-400 hover:text-white transition-colors"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-[#38BDF8] text-slate-950 hover:bg-sky-400 transition-all duration-200 active:scale-95 shadow-md shadow-sky-500/10"
        >
          Discover Coordinates
        </button>
      </div>
    </form>
  );
}
