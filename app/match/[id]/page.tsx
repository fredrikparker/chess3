'use client';

import { useParams } from 'next/navigation';
import Board from '@/components/chess/Board';
import { useGameStore } from '@/store/useGameStore';
import { useState } from 'react';

export default function MatchPage() {
    const params = useParams();
    const { turn, status, resetGame, resignGame, history } = useGameStore();
    const [activeTab, setActiveTab] = useState<'wager' | 'chat' | 'moves'>('wager');
    const [showWalletModal, setShowWalletModal] = useState(false);
    const [connectedWallet, setConnectedWallet] = useState<string | null>(null);

    const wallets = [
        { name: 'MetaMask', icon: '🦊' },
        { name: 'WalletConnect', icon: '🔗' },
        { name: 'Coinbase Wallet', icon: '💎' },
        { name: 'Phantom', icon: '👻' },
    ];

    const handleConnect = (walletName: string) => {
        setConnectedWallet(walletName);
        setShowWalletModal(false);
    };

    return (
        <div style={{
            minHeight: '100vh',
            background: '#000',
            color: '#fff',
        }}>
            {/* Wallet Modal */}
            {showWalletModal && (
                <div style={{
                    position: 'fixed',
                    inset: 0,
                    background: 'rgba(0,0,0,0.8)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 50,
                }} onClick={() => setShowWalletModal(false)}>
                    <div
                        style={{
                            background: '#111',
                            borderRadius: '12px',
                            border: '1px solid #222',
                            padding: '24px',
                            width: '100%',
                            maxWidth: '360px',
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginBottom: '20px',
                        }}>
                            <h2 style={{ fontSize: '18px', fontWeight: 500 }}>Connect Wallet</h2>
                            <button
                                onClick={() => setShowWalletModal(false)}
                                style={{
                                    background: 'transparent',
                                    color: '#666',
                                    fontSize: '20px',
                                }}
                            >
                                ×
                            </button>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            {wallets.map((wallet) => (
                                <button
                                    key={wallet.name}
                                    onClick={() => handleConnect(wallet.name)}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '12px',
                                        padding: '14px 16px',
                                        background: '#0a0a0a',
                                        border: '1px solid #222',
                                        borderRadius: '8px',
                                        color: '#fff',
                                        fontSize: '14px',
                                        fontWeight: 500,
                                        transition: 'border-color 0.2s',
                                    }}
                                    onMouseOver={(e) => e.currentTarget.style.borderColor = '#444'}
                                    onMouseOut={(e) => e.currentTarget.style.borderColor = '#222'}
                                >
                                    <span style={{ fontSize: '24px' }}>{wallet.icon}</span>
                                    {wallet.name}
                                </button>
                            ))}
                        </div>
                        <p style={{
                            marginTop: '16px',
                            fontSize: '11px',
                            color: '#555',
                            textAlign: 'center',
                        }}>
                            By connecting, you agree to the Terms of Service
                        </p>
                    </div>
                </div>
            )}

            {/* Header */}
            <header style={{
                height: '56px',
                borderBottom: '1px solid #1a1a1a',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0 24px',
            }}>
                <a href="/" style={{ fontSize: '20px', fontWeight: 300 }}>
                    chess<span style={{ color: '#c9a227' }}>3</span>
                </a>
                <button
                    onClick={() => setShowWalletModal(true)}
                    style={{
                        padding: '8px 16px',
                        fontSize: '13px',
                        background: connectedWallet ? '#c9a227' : 'transparent',
                        border: connectedWallet ? 'none' : '1px solid #333',
                        borderRadius: '6px',
                        color: connectedWallet ? '#000' : '#888',
                        fontWeight: connectedWallet ? 500 : 400,
                    }}
                >
                    {connectedWallet ? `🟢 ${connectedWallet.slice(0, 6)}...` : 'Connect Wallet'}
                </button>
            </header>

            {/* Main */}
            <main style={{
                maxWidth: '1100px',
                margin: '0 auto',
                padding: '32px 24px',
                display: 'grid',
                gridTemplateColumns: '1fr 320px',
                gap: '32px',
            }}>
                {/* Board Section */}
                <div style={{ maxWidth: '520px' }}>
                    {/* Opponent bar - attached to board */}
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '8px 12px',
                        background: '#111',
                        borderRadius: '4px 4px 0 0',
                        borderBottom: '1px solid #222',
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <div style={{
                                width: '28px',
                                height: '28px',
                                borderRadius: '50%',
                                background: '#1a1a1a',
                            }} />
                            <div>
                                <div style={{ fontSize: '13px', fontWeight: 500 }}>Opponent</div>
                                <div style={{ fontSize: '11px', color: '#666' }}>1200</div>
                            </div>
                        </div>
                        <div style={{
                            fontSize: '20px',
                            fontFamily: 'monospace',
                            color: '#888',
                            background: '#0a0a0a',
                            padding: '4px 10px',
                            borderRadius: '4px',
                        }}>
                            9:45
                        </div>
                    </div>

                    {/* Board */}
                    <div style={{
                        width: '100%',
                        aspectRatio: '1',
                        background: '#111',
                    }}>
                        <Board boardWidth={520} />
                    </div>

                    {/* Player bar - attached to board */}
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '8px 12px',
                        background: '#111',
                        borderRadius: '0 0 4px 4px',
                        borderTop: '1px solid #222',
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <div style={{
                                width: '28px',
                                height: '28px',
                                borderRadius: '50%',
                                background: '#c9a227',
                                opacity: 0.4,
                            }} />
                            <div>
                                <div style={{ fontSize: '13px', fontWeight: 500 }}>You</div>
                                <div style={{ fontSize: '11px', color: '#666' }}>1254</div>
                            </div>
                        </div>
                        <div style={{
                            fontSize: '20px',
                            fontFamily: 'monospace',
                            background: '#0a0a0a',
                            padding: '4px 10px',
                            borderRadius: '4px',
                        }}>
                            9:12
                        </div>
                    </div>

                    {/* Game Over */}
                    {status !== 'active' && status !== 'idle' && (
                        <div style={{
                            marginTop: '24px',
                            padding: '24px',
                            background: '#111',
                            borderRadius: '8px',
                            textAlign: 'center',
                        }}>
                            <div style={{ fontSize: '18px', fontWeight: 500, marginBottom: '16px' }}>
                                {status === 'checkmate' ? (turn === 'w' ? 'Black Wins' : 'White Wins') : 'Draw'}
                            </div>
                            <button
                                onClick={resetGame}
                                style={{
                                    padding: '10px 24px',
                                    background: '#fff',
                                    color: '#000',
                                    borderRadius: '6px',
                                    fontSize: '14px',
                                    fontWeight: 500,
                                }}
                            >
                                New Game
                            </button>
                        </div>
                    )}
                </div>

                {/* Right Panel */}
                <div style={{
                    background: '#0a0a0a',
                    borderRadius: '8px',
                    border: '1px solid #1a1a1a',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '560px',
                }}>
                    {/* Tabs */}
                    <div style={{
                        display: 'flex',
                        borderBottom: '1px solid #1a1a1a',
                    }}>
                        {(['wager', 'chat', 'moves'] as const).map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                style={{
                                    flex: 1,
                                    padding: '14px',
                                    fontSize: '13px',
                                    fontWeight: 500,
                                    color: activeTab === tab ? '#fff' : '#555',
                                    background: 'transparent',
                                    borderBottom: activeTab === tab ? '2px solid #c9a227' : '2px solid transparent',
                                    textTransform: 'capitalize',
                                }}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* Content */}
                    <div style={{ flex: 1, padding: '20px', overflow: 'auto' }}>
                        {activeTab === 'wager' && (
                            <div style={{ textAlign: 'center', paddingTop: '40px' }}>
                                <div style={{ fontSize: '32px', marginBottom: '8px' }}>💰</div>
                                <div style={{ fontSize: '15px', fontWeight: 500, marginBottom: '8px' }}>
                                    Place Your Wager
                                </div>
                                <div style={{ fontSize: '13px', color: '#666', marginBottom: '24px' }}>
                                    Winner takes all
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    {[10, 25, 50, 100].map((amt) => (
                                        <button
                                            key={amt}
                                            style={{
                                                padding: '12px',
                                                background: '#111',
                                                border: '1px solid #222',
                                                borderRadius: '6px',
                                                color: '#fff',
                                                fontSize: '14px',
                                                fontWeight: 500,
                                            }}
                                        >
                                            {amt} USDC
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                        {activeTab === 'chat' && (
                            <div style={{ color: '#555', fontSize: '13px', textAlign: 'center', paddingTop: '60px' }}>
                                No messages yet
                            </div>
                        )}
                        {activeTab === 'moves' && (
                            <div style={{ fontSize: '13px' }}>
                                {history.length === 0 ? (
                                    <div style={{ color: '#555', textAlign: 'center', paddingTop: '60px' }}>
                                        No moves yet
                                    </div>
                                ) : (
                                    <div style={{ fontFamily: 'monospace' }}>
                                        {history.map((move, i) => (
                                            <span key={i} style={{
                                                display: 'inline-block',
                                                padding: '4px 8px',
                                                background: '#111',
                                                borderRadius: '4px',
                                                margin: '2px',
                                                fontSize: '12px',
                                            }}>
                                                {move}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    {/* Resign */}
                    <div style={{ padding: '16px', borderTop: '1px solid #1a1a1a' }}>
                        <button
                            onClick={resignGame}
                            style={{
                                width: '100%',
                                padding: '10px',
                                background: 'transparent',
                                border: '1px solid #222',
                                borderRadius: '6px',
                                color: '#666',
                                fontSize: '13px',
                            }}
                        >
                            🏳️ Resign
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
}
