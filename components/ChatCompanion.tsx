'use client';

import { ChatMessage } from '@/types/anvesh';
import { useState, useRef, useEffect, KeyboardEvent } from 'react';

interface ChatCompanionProps {
  messages: ChatMessage[];
  onSendMessage: (text: string) => void;
  isTyping?: boolean;
}

export default function ChatCompanion({ messages, onSendMessage, isTyping = false }: ChatCompanionProps) {
  const [inputText, setInputText] = useState('');
  const feedRef = useRef<HTMLDivElement>(null);

  // Auto scroll chat to bottom when messages change
  useEffect(() => {
    if (feedRef.current) {
      feedRef.current.scrollTop = feedRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = () => {
    if (!inputText.trim()) return;
    onSendMessage(inputText.trim());
    setInputText('');
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="glass-panel flex flex-col h-full min-h-[520px] overflow-hidden">
      {/* Companion Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-[rgba(255,255,255,0.06)]">
        <div className="flex items-center gap-3">
          <span className="text-[var(--accent)] text-base">✨</span>
          <div>
            <h3 className="text-sm font-semibold tracking-tight text-white">AI Companion</h3>
            <p className="text-[10px] text-gray-500 font-medium">Your travel sidekick</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="text-gray-400 hover:text-white transition-colors cursor-pointer">
            {/* History Icon */}
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 8v4l3 3"/><circle cx="12" cy="12" r="9"/><path d="M3.05 11a9 9 0 1 1 .5 4M3 12h5V7"/></svg>
          </button>
          <button className="text-gray-400 hover:text-white transition-colors cursor-pointer">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
          </button>
        </div>
      </div>

      {/* Messages Feed */}
      <div ref={feedRef} className="flex-1 overflow-y-auto px-5 py-4 space-y-4 scrollbar-thin">
        {messages.map((msg) => {
          const isBot = msg.sender === 'bot';
          return (
            <div key={msg.id} className={`flex items-start gap-2.5 ${isBot ? '' : 'flex-row-reverse'}`}>
              {/* Avatar Icon */}
              <div
                className={`w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-semibold ${
                  isBot ? 'bg-[rgba(56,189,248,0.1)] border border-[rgba(56,189,248,0.25)] text-[#38BDF8]' : 'bg-gray-800 text-gray-300'
                }`}
              >
                {isBot ? (
                  /* Anvesh Brand Pyramid Icon SVG */
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polygon points="12 2 22 22 2 22 12 2"/><line x1="12" y1="2" x2="12" y2="22"/></svg>
                ) : '👤'}
              </div>

              {/* Message Bubble */}
              <div className="flex flex-col max-w-[80%] gap-2">
                <div
                  className={`text-xs px-3.5 py-2.5 rounded-2xl leading-relaxed ${
                    isBot
                      ? 'bg-slate-900/60 border border-[rgba(255,255,255,0.03)] text-gray-200'
                      : 'bg-[#1e3d64] border border-[rgba(56,189,248,0.15)] text-white font-medium shadow-md shadow-sky-950/20'
                  }`}
                  style={{
                    borderRadius: isBot ? '4px 16px 16px 16px' : '16px 4px 16px 16px',
                  }}
                >
                  {msg.text}
                </div>

                {/* Optional recommendation card inside bot message */}
                {isBot && msg.recommendation_card && (
                  <div
                    className="rounded-xl border overflow-hidden mt-1 cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
                    style={{
                      backgroundColor: 'rgba(15, 23, 42, 0.7)',
                      borderColor: 'rgba(255, 255, 255, 0.08)',
                    }}
                  >
                    <div
                      className="h-28 bg-cover bg-center"
                      style={{ backgroundImage: `url(${msg.recommendation_card.image_url})` }}
                    />
                    <div className="p-3">
                      <h4 className="text-xs font-semibold text-white">{msg.recommendation_card.title}</h4>
                      <p className="text-[10px] text-gray-400 mt-0.5">
                        {msg.recommendation_card.duration} · {msg.recommendation_card.location}
                      </p>
                      <div className="flex items-center justify-between mt-3 pt-2 border-t border-[rgba(255,255,255,0.05)]">
                        <span className="text-[10px] font-semibold text-[#38BDF8]">View itinerary</span>
                        <svg className="text-[#38BDF8]" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6"/></svg>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}

        {/* Typing indicator: Anvesh is thinking ... */}
        {isTyping && (
          <div className="flex items-start gap-2.5">
            <div className="w-7 h-7 rounded-full bg-[rgba(56,189,248,0.1)] border border-[rgba(56,189,248,0.25)] text-[#38BDF8] flex-shrink-0 flex items-center justify-center">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polygon points="12 2 22 22 2 22 12 2"/><line x1="12" y1="2" x2="12" y2="22"/></svg>
            </div>
            <div className="bg-slate-900/60 border border-[rgba(255,255,255,0.03)] text-gray-400 text-xs px-4 py-2.5 rounded-2xl flex items-center gap-2" style={{ borderRadius: '4px 16px 16px 16px' }}>
              <span>Anvesh is thinking</span>
              <div className="flex items-center gap-1 mt-1">
                <span className="w-1 h-1 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="w-1 h-1 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                <span className="w-1 h-1 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Input Tray */}
      <div className="p-4 border-t border-[rgba(255,255,255,0.06)] bg-slate-950/20">
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Ask anything..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={isTyping}
            className="w-full pr-12 pl-4 py-3 bg-[rgba(15,23,42,0.6)] border border-[rgba(255,255,255,0.08)] rounded-xl text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#38BDF8] transition-all disabled:opacity-50"
          />
          <button
            onClick={handleSend}
            disabled={isTyping || !inputText.trim()}
            className="absolute right-2 p-2 rounded-lg bg-[#38BDF8] text-slate-950 transition-all hover:bg-sky-400 active:scale-95 disabled:opacity-40 disabled:hover:bg-[#38BDF8] disabled:active:scale-100 cursor-pointer"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
          </button>
        </div>
      </div>
    </div>
  );
}
