'use client';

import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px',
      background: '#000',
    }}>
      <div style={{
        maxWidth: '400px',
        width: '100%',
        textAlign: 'center',
      }}>
        {/* Logo */}
        <h1 style={{
          fontSize: '48px',
          fontWeight: 300,
          letterSpacing: '-0.02em',
          marginBottom: '16px',
          color: '#fff',
        }}>
          chess<span style={{ color: '#c9a227' }}>3</span>
        </h1>

        {/* Tagline */}
        <p style={{
          fontSize: '16px',
          color: '#666',
          marginBottom: '48px',
          fontWeight: 400,
        }}>
          Wager. Play. Win.
        </p>

        {/* Button */}
        <button
          onClick={() => router.push(`/match/${Math.random().toString(36).slice(2, 8)}`)}
          style={{
            width: '100%',
            height: '52px',
            background: '#fff',
            color: '#000',
            fontSize: '15px',
            fontWeight: 500,
            borderRadius: '8px',
            border: 'none',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
          }}
          onMouseOver={(e) => { e.currentTarget.style.opacity = '0.9'; e.currentTarget.style.transform = 'scale(1.02)'; }}
          onMouseOut={(e) => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'scale(1)'; }}
        >
          Play Now →
        </button>

        {/* Footer */}
        <p style={{
          fontSize: '12px',
          color: '#444',
          marginTop: '24px',
        }}>
          Powered by Yellow Network
        </p>
      </div>
    </div>
  );
}
