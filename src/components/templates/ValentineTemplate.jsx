import React from 'react';
import brandLogo from '@/assets/brand-logo.png';
import { Heart } from 'lucide-react';

const ValentineTemplate = ({ data }) => {
    const { title, subtitle, date, image, message, variant = 10, location, time, phone, backgroundType, backgroundImage } = data;

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

    // Variant 10: Deep Velvet Romance
    if (variant === 10) {
        return (
            <div className="relative w-full h-full bg-black text-white overflow-hidden font-sans" style={backgroundStyle}>
                <ImenaBranding />

                {/* Rich Burgundy Velvet Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#6b0f1a] via-[#3d0814] to-black"></div>

                {/* Rose Petal Overlays */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-10 right-10 w-40 h-40 bg-gradient-to-br from-rose-500 to-transparent blur-3xl rounded-full"></div>
                    <div className="absolute bottom-10 left-10 w-40 h-40 bg-gradient-to-tl from-rose-600 to-transparent blur-3xl rounded-full"></div>
                </div>

                {/* Gold Lace Border */}
                <div className="absolute inset-6 border-2 border-rose-900/40 rounded-lg pointer-events-none"></div>
                <div className="absolute inset-10 border border-rose-800/20 rounded-lg pointer-events-none"></div>

                <div className="relative z-10 flex flex-col items-center justify-center h-full px-12 text-center">
                    {/* Romantic Heart Icon with Glow */}
                    <div className="relative mb-8">
                        <div className="absolute inset-0 bg-rose-500/30 blur-2xl rounded-full"></div>
                        <Heart className="relative text-rose-400 w-16 h-16 fill-rose-400 animate-pulse" style={{ filter: 'drop-shadow(0 0 20px rgba(244, 114, 182, 0.6))' }} />
                    </div>

                    <h1 className="text-7xl font-cursive text-rose-100 leading-none mb-6 drop-shadow-2xl" style={{ fontFamily: "'Great Vibes', cursive", textShadow: '0 0 30px rgba(244, 114, 182, 0.4)' }}>
                        {title || "Happy Valentine's Day"}
                    </h1>

                    <div className="w-32 h-[2px] bg-gradient-to-r from-transparent via-rose-500 to-transparent mb-8"></div>

                    <h2 className="text-2xl font-semibold tracking-[0.4em] uppercase mb-10 text-rose-300">
                        {subtitle || "Eternal Love"}
                    </h2>

                    {/* Message Card */}
                    <div className="max-w-sm bg-black/40 backdrop-blur-md border border-rose-900/50 rounded-2xl p-6 mb-10">
                        <p className="text-rose-100/80 text-xs leading-relaxed italic">
                            {message || "Love is not about how many days, months, or years you have been together. Love is about how much you love each other every single day."}
                        </p>
                    </div>

                    {/* Details */}
                    <div className="space-y-3 border-t border-rose-900/30 pt-6 w-full max-w-xs">
                        <div className="flex justify-between items-center">
                            <span className="text-[9px] font-black tracking-[0.3em] uppercase text-rose-500">Date</span>
                            <span className="text-sm font-semibold text-rose-200">{date || "Feb 14, 2026"}</span>
                        </div>
                        {time && (
                            <div className="flex justify-between items-center">
                                <span className="text-[9px] font-black tracking-[0.3em] uppercase text-rose-500">Time</span>
                                <span className="text-sm font-semibold text-rose-200">{time}</span>
                            </div>
                        )}
                        {location && (
                            <div className="flex justify-between items-center">
                                <span className="text-[9px] font-black tracking-[0.3em] uppercase text-rose-500">Venue</span>
                                <span className="text-sm font-semibold text-rose-200">{location}</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }

    // Variant 11: Soft Peony Lace
    if (variant === 11) {
        return (
            <div className="relative w-full h-full bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 text-rose-900 overflow-hidden font-serif" style={backgroundStyle}>
                <ImenaBranding />

                {/* Watercolor Peony Effect */}
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-pink-300 via-pink-200 to-transparent blur-3xl rounded-full"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tl from-rose-300 via-rose-200 to-transparent blur-3xl rounded-full"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-pink-200/40 to-transparent blur-2xl rounded-full"></div>
                </div>

                {/* Intricate Lace Borders */}
                <div className="absolute inset-8 border-2 border-rose-200/60 rounded-lg pointer-events-none"></div>
                <div className="absolute inset-12 border border-rose-300/40 rounded-lg pointer-events-none"></div>
                <div className="absolute inset-16 border border-rose-200/30 rounded-lg pointer-events-none"></div>

                <div className="relative z-20 flex flex-col items-center justify-center h-full px-14 text-center">
                    <div className="mb-6 opacity-60">
                        <Heart className="w-6 h-6 text-rose-300 fill-rose-100" />
                    </div>

                    <h2 className="text-[10px] font-black tracking-[0.5em] uppercase text-rose-300 mb-4">You are invited to</h2>

                    <h1 className="text-5xl italic mb-6 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                        {title || "A Romantic Evening"}
                    </h1>

                    <p className="text-sm font-medium leading-relaxed mb-12 text-rose-800/70 max-w-[280px]">
                        {message || "Join us as we celebrate a night dedicated to love, laughter, and lifelong memories."}
                    </p>

                    <div className="grid grid-cols-2 gap-8 w-full border-y border-rose-100 py-6 mb-8">
                        <div>
                            <span className="block text-[8px] font-black uppercase tracking-widest text-rose-300 mb-1">When</span>
                            <span className="text-xs font-bold">{date || "14.02.2026"}</span>
                        </div>
                        <div>
                            <span className="block text-[8px] font-black uppercase tracking-widest text-rose-300 mb-1">Where</span>
                            <span className="text-xs font-bold">{location || "LA BELLE VIE"}</span>
                        </div>
                    </div>

                    <div className="text-[9px] font-serif italic text-rose-400">
                        {subtitle || "Hosted with Love"}
                    </div>
                </div>

                {/* Decorative corner circles */}
                <div className="absolute -top-20 -left-20 w-64 h-64 bg-rose-100/30 rounded-full blur-[60px]"></div>
                <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-rose-100/30 rounded-full blur-[60px]"></div>
            </div>
        );
    }

    // Default Fallback: Minimal Romance
    return (
        <div className="relative w-full h-full bg-white flex flex-col items-center justify-center p-12 text-center" style={backgroundStyle}>
            <ImenaBranding />
            <div className="border border-rose-100 p-12 w-full h-full flex flex-col items-center justify-center bg-rose-50/10">
                <Heart className="text-rose-400 w-8 h-8 mb-8" />
                <h1 className="text-3xl font-serif italic mb-6 text-rose-900">{title || "Valentine's Day"}</h1>
                <div className="w-8 h-[1px] bg-rose-200 mb-8"></div>
                <p className="text-xs text-rose-800/60 leading-relaxed mb-10 max-w-[200px]">{message}</p>
                <p className="text-[9px] font-black tracking-widest uppercase text-rose-300">{date} • {location}</p>
            </div>
        </div>
    );
};

export default ValentineTemplate;
