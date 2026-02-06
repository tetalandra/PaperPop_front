import React from 'react';
import brandLogo from '@/assets/brand-logo.png';

const RememberingTemplate = ({ data }) => {
    const { title, subtitle, date, image, message, variant = 20, location, time, phone, backgroundType, backgroundImage } = data;

    const backgroundStyle = backgroundType === 'image' && backgroundImage ? {
        backgroundImage: `url(${backgroundImage.src || backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    } : {};

    const ImenaBranding = () => (
        <div className="absolute bottom-6 right-6 z-[60] flex items-center gap-3 opacity-80 select-none pointer-events-none hover:opacity-100 transition-opacity">
            <img src={brandLogo.src || brandLogo} alt="Imena" className="h-8 w-auto drop-shadow-lg" />
            <span className="text-[9px] font-bold text-white/60 uppercase tracking-[0.2em]">Designed by Imena</span>
        </div>
    );

    // Variant 20: Peaceful Lily (Dignified White with Soft Heavenly Light)
    if (variant === 20) {
        return (
            <div className="relative w-full h-full bg-gradient-to-b from-gray-50 via-white to-gray-100 text-neutral-800 overflow-hidden font-serif" style={backgroundStyle}>
                <ImenaBranding />

                {/* Heavenly Light Rays */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-20">
                    <div className="absolute top-0 w-full h-96 bg-gradient-to-b from-amber-200/40 via-white/30 to-transparent"></div>
                </div>

                {/* Subtle Marble Texture Effect */}
                <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(0,0,0,0.05) 0%, transparent 50%)' }}></div>

                {/* Gold Accent Borders */}
                <div className="absolute inset-10 border border-amber-600/20 rounded-sm pointer-events-none"></div>
                <div className="absolute inset-14 border border-amber-500/10 rounded-sm pointer-events-none"></div>

                <div className="relative z-10 flex flex-col items-center justify-center h-full px-16 text-center">
                    <div className="mb-10 bg-white/60 backdrop-blur-sm px-8 py-2 rounded-full border border-amber-600/20">
                        <span className="text-[9px] font-black tracking-[0.5em] uppercase text-neutral-500">In Loving Memory</span>
                    </div>

                    <h1 className="text-6xl font-serif mb-4 tracking-tight leading-tight" style={{ fontFamily: "'Playfair Display', serif", color: '#374151' }}>
                        {title || "Johnathan Doe"}
                    </h1>

                    <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-amber-600/40 to-transparent mb-6"></div>

                    <div className="text-sm font-medium tracking-[0.2em] text-neutral-600 mb-12">
                        {subtitle || "1950 — 2026"}
                    </div>

                    {/* Quote Card */}
                    <div className="max-w-md bg-white/80 backdrop-blur-sm border border-neutral-200/60 rounded-2xl p-6 mb-12 shadow-lg">
                        <p className="text-sm italic leading-relaxed text-neutral-700">
                            "{message || "Those we love don't go away, they walk beside us every day. Unseen, unheard, but always near."}"
                        </p>
                    </div>

                    <div className="space-y-3 border-t border-neutral-200 pt-6 w-full max-w-xs">
                        <div className="flex justify-between items-center">
                            <span className="text-[9px] font-black tracking-[0.3em] uppercase text-neutral-500">Service Date</span>
                            <span className="text-sm font-semibold text-neutral-700">{date || "TBA"}</span>
                        </div>
                        {location && (
                            <div className="flex justify-between items-center">
                                <span className="text-[9px] font-black tracking-[0.3em] uppercase text-neutral-500">Location</span>
                                <span className="text-sm font-semibold text-neutral-700">{location}</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }

    // Variant 21: Candle Light (Somber Dark with Warm Amber Glow)
    if (variant === 21) {
        return (
            <div className="relative w-full h-full bg-gradient-to-b from-neutral-900 via-black to-neutral-950 text-white overflow-hidden font-sans" style={backgroundStyle}>
                <ImenaBranding />

                {/* Soft Candle Glow - Amber Light */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-600/20 blur-[150px] rounded-full z-0"></div>
                <div className="absolute top-1/3 left-1/4 w-48 h-48 bg-amber-500/10 blur-[80px] rounded-full z-0"></div>
                <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-amber-500/10 blur-[80px] rounded-full z-0"></div>

                {/* Smoke Wisps Effect */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-gradient-to-b from-neutral-600/10 to-transparent blur-3xl"></div>

                {/* Dignified Frame */}
                <div className="absolute inset-8 border border-amber-900/30 rounded-sm pointer-events-none"></div>

                <div className="relative z-20 flex flex-col items-center justify-center h-full px-14 text-center">
                    <div className="mb-10 bg-black/40 backdrop-blur-sm px-8 py-2 rounded-full border border-amber-900/20">
                        <span className="text-[10px] font-black tracking-[0.6em] uppercase text-amber-600/80">Honoring the Life of</span>
                    </div>

                    <h1 className="text-5xl font-serif text-white tracking-widest leading-none mb-4 uppercase" style={{ fontFamily: "'Playfair Display', serif", textShadow: '0 0 20px rgba(217, 119, 6, 0.3)' }}>
                        {title || "NAME HERE"}
                    </h1>

                    <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-amber-700/40 to-transparent mb-6"></div>

                    <p className="text-sm font-semibold tracking-[0.4em] text-neutral-400 mb-12">
                        {subtitle || "DATES HERE"}
                    </p>

                    {/* Quote Card */}
                    <div className="max-w-md bg-black/60 backdrop-blur-md border border-amber-900/30 rounded-2xl p-6 mb-12 shadow-2xl">
                        <p className="text-xs text-neutral-300 leading-relaxed italic">
                            {message || "A life so beautiful deserves a special celebration. Please join us in remembering a wonderful soul."}
                        </p>
                    </div>

                    <div className="space-y-3 border-t border-amber-900/20 pt-6 w-full max-w-xs">
                        <div className="flex justify-between items-center">
                            <span className="text-[9px] font-black tracking-[0.3em] uppercase text-amber-700/80">Date</span>
                            <span className="text-sm font-semibold text-amber-100/90">{date || "TBA"}</span>
                        </div>
                        {location && (
                            <div className="flex justify-between items-center">
                                <span className="text-[9px] font-black tracking-[0.3em] uppercase text-amber-700/80">Venue</span>
                                <span className="text-sm font-semibold text-amber-100/90">{location}</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }

    // Default Fallback
    return (
        <div className="relative w-full h-full bg-[#1e1e1e] text-white flex flex-col items-center justify-center p-12 text-center" style={backgroundStyle}>
            <ImenaBranding />
            <div className="border border-white/10 p-12 w-full h-full flex flex-col items-center justify-center bg-black/20 backdrop-blur-sm">
                <div className="text-[10px] font-black tracking-[0.6em] uppercase text-neutral-500 mb-8 font-sans">In Loving Memory</div>
                <h1 className="text-4xl font-serif italic mb-6 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>{title || "The Departed"}</h1>
                <p className="text-xs text-neutral-400 leading-relaxed mb-10 max-w-[240px] italic">{message}</p>
                <div className="w-12 h-[1px] bg-neutral-800 mb-8"></div>
                <p className="text-[9px] font-black tracking-widest uppercase text-neutral-600 font-sans">{date} • {location}</p>
            </div>
        </div>
    );
};

export default RememberingTemplate;
