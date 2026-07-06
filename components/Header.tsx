'use client';

interface HeaderProps {
  isMidnightMode: boolean;
}

export default function Header({ isMidnightMode }: HeaderProps) {
  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 48px',
        height: '64px',
        background: 'rgba(14, 22, 38, 0.65)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid var(--border-color)',
      }}
    >
      {/* Logo: Devanagari 'अन्वेष' on top, 'ANVESH' below */}
      <div className="flex flex-col items-start select-none text-left leading-none mt-1">
        <span
          style={{
            fontSize: '18px',
            fontWeight: 700,
            color: isMidnightMode ? '#FFC107' : '#FFFFFF',
            fontFamily: "'Inter', sans-serif",
            letterSpacing: '0.02em',
            textShadow: isMidnightMode ? '0 0 20px rgba(255,193,7,0.5)' : 'none',
            transition: 'color 0.2s ease',
          }}
        >
          अन्वेष
        </span>
        <span
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '9px',
            fontWeight: 600,
            letterSpacing: '0.16em',
            color: 'rgba(255,255,255,0.5)',
            marginTop: '2px',
          }}
        >
          ANVESH
        </span>
      </div>

    </header>
  );
}
