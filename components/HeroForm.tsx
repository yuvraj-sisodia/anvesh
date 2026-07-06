'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import { AnveshFormState, TravelerVibe } from '@/types/anvesh';

interface HeroFormProps {
  onSubmit: (formState: AnveshFormState) => void;
  onTimeChange: (time: string) => void;
  isLoading: boolean;
}

export default function HeroForm({ onSubmit, onTimeChange, isLoading }: HeroFormProps) {
  const [form, setForm] = useState<AnveshFormState>({
    destination: '',
    vibe: '',
    time: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (name === 'time') {
      onTimeChange(value);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.destination || !form.vibe || !form.time) return;
    onSubmit(form);
  };

  const vibeOptions: TravelerVibe[] = ['Foodie', 'History Buff', 'Adventure', 'Art'];
  const isValid = form.destination && form.vibe && form.time;

  return (
    <section
      className="relative flex flex-col items-center justify-center min-h-screen px-6 pt-20 pb-16"
      style={{ animation: 'fadeIn 0.8s ease-out' }}
    >
      {/* Background ambient glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #FFC107 0%, transparent 70%)',
          filter: 'blur(80px)',
          opacity: 0.04,
        }}
      />

      {/* Eyebrow label */}
      <div
        className="mb-6 flex items-center gap-2"
        style={{ animation: 'slideUp 0.5s ease-out 0.1s both' }}
      >
        <div className="w-5 h-px" style={{ background: 'rgba(255,193,7,0.4)' }} />
        <span
          className="text-xs tracking-[0.25em] uppercase"
          style={{ color: 'rgba(255,193,7,0.6)', fontFamily: "'JetBrains Mono', monospace" }}
        >
          AI · Cultural Travel
        </span>
        <div className="w-5 h-px" style={{ background: 'rgba(255,193,7,0.4)' }} />
      </div>

      {/* Headline */}
      <h1
        className="text-5xl md:text-7xl font-bold text-center mb-4 leading-none"
        style={{
          fontFamily: "'Inter', sans-serif",
          letterSpacing: '-0.04em',
          animation: 'slideUp 0.5s ease-out 0.2s both',
        }}
      >
        <span style={{ color: '#F5F5F5' }}>Discover</span>
        <br />
        <span className="text-gradient-marigold">
          the Living Culture
        </span>
      </h1>

      {/* Sub-headline */}
      <p
        className="text-center text-sm md:text-base max-w-md mb-14 leading-relaxed"
        style={{
          color: 'rgba(255,255,255,0.35)',
          animation: 'slideUp 0.5s ease-out 0.3s both',
          fontFamily: "'Playfair Display', serif",
          fontStyle: 'italic',
        }}
      >
        Enter your destination, select your traveler vibe, and let AI unravel the soul of a place — story by story.
      </p>

      {/* Form Card */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg relative z-10"
        style={{ animation: 'slideUp 0.5s ease-out 0.4s both' }}
      >
        <div
          className="rounded-2xl p-6 md:p-8 flex flex-col gap-5"
          style={{
            background: '#111111',
            border: '1px solid #252525',
            boxShadow: '0 4px 40px rgba(0,0,0,0.5), 0 1px 0 rgba(255,255,255,0.03) inset',
          }}
        >
          {/* Destination Input */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="destination"
              className="text-xs font-medium tracking-widest uppercase"
              style={{ color: 'rgba(255,255,255,0.3)' }}
            >
              Destination
            </label>
            <input
              id="destination"
              name="destination"
              type="text"
              placeholder="e.g. Indore, Rajasthan, Varanasi…"
              value={form.destination}
              onChange={handleChange}
              className="input-field"
              required
              autoComplete="off"
            />
          </div>

          {/* Traveler Vibe */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="vibe"
              className="text-xs font-medium tracking-widest uppercase"
              style={{ color: 'rgba(255,255,255,0.3)' }}
            >
              Traveler Vibe
            </label>
            <select
              id="vibe"
              name="vibe"
              value={form.vibe}
              onChange={handleChange}
              className="select-field"
              required
            >
              <option value="" disabled style={{ color: '#555' }}>
                Select your vibe…
              </option>
              {vibeOptions.map((v) => (
                <option key={v} value={v}>
                  {v}
                </option>
              ))}
            </select>
          </div>

          {/* Time Picker */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="time"
              className="text-xs font-medium tracking-widest uppercase flex items-center flex-wrap gap-2"
              style={{ color: 'rgba(255,255,255,0.3)' }}
            >
              <span>Current Time</span>
              <span
                className="text-xs normal-case tracking-normal"
                style={{ color: 'rgba(255,193,7,0.4)', fontFamily: "'JetBrains Mono', monospace" }}
              >
                ✦ 22:00+ unlocks Night Mode
              </span>
            </label>
            <input
              id="time"
              name="time"
              type="time"
              value={form.time}
              onChange={handleChange}
              className="input-field"
              required
              style={{ colorScheme: 'dark' }}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading || !isValid}
            className="btn-discover mt-2"
          >
            {isLoading ? (
              <>
                <LoadingSpinner />
                <span>Discovering…</span>
              </>
            ) : (
              <>
                <span>Discover</span>
                <span style={{ fontSize: '16px' }}>→</span>
              </>
            )}
          </button>
        </div>
      </form>

      {/* Scroll cue */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        style={{ opacity: 0.15, animation: 'fadeIn 1s ease-out 1.2s both' }}
      >
        <div
          className="w-px h-8"
          style={{ background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.4))' }}
        />
        <span
          className="text-xs tracking-widest uppercase"
          style={{ color: '#666', fontFamily: "'JetBrains Mono', monospace" }}
        >
          scroll
        </span>
      </div>
    </section>
  );
}

function LoadingSpinner() {
  return (
    <svg
      style={{ animation: 'spin 1s linear infinite' }}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    >
      <style>{`@keyframes spin { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }`}</style>
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
    </svg>
  );
}
