import React from 'react';
import brandLogo from '@/assets/brand-logo.png';

const AssemblyTemplate = ({ data }) => {
    const { title, subtitle, date, time, location, image, message, variant = 1 } = data;

    const ImenaBranding = () => (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-[60] flex flex-col items-center gap-1.5 opacity-60 select-none pointer-events-none hover:opacity-100 transition-opacity">
            <img src={brandLogo.src || brandLogo} alt="Imena" className="h-7 w-auto drop-shadow-lg" />
            <span className="text-[7px] font-black text-white/40 uppercase tracking-[0.3em] whitespace-nowrap">Designed by Imena</span>
        </div>
    );

    // Variant 1: Luxury Stage with Burgundy Velvet Curtains
    if (variant === 1) {
        return (
            <div className="relative w-full h-full bg-black overflow-hidden flex flex-col items-center justify-center">
                <ImenaBranding />

                {/* Burgundy Velvet Curtain Effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#3d0814] via-[#6b0f1a] to-[#1a0508]"></div>

                {/* Gold Ornate Patterns */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-amber-600/30 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-amber-600/30 to-transparent"></div>
                </div>

                {/* Theatrical Spotlight */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-500/20 blur-[120px] rounded-full"></div>

                {/* Gold Frame Border */}
                <div className="absolute inset-8 border-4 border-amber-600/40 rounded-sm pointer-events-none"></div>
                <div className="absolute inset-12 border border-amber-700/30 rounded-sm pointer-events-none"></div>

                {/* Content */}
                <div className="relative z-10 text-center px-12">
                    <div className="mb-8 bg-amber-600/10 px-8 py-2 rounded-full border border-amber-600/30 backdrop-blur-sm inline-block">
                        <span className="text-[10px] font-black tracking-[0.5em] text-amber-400 uppercase">Formal Assembly</span>
                    </div>

                    <h1 className="text-6xl font-serif font-bold text-amber-100 mb-4 drop-shadow-2xl" style={{ textShadow: '0 0 40px rgba(251, 191, 36, 0.3)' }}>
                        {title || "ASSEMBLY"}
                    </h1>

                    <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mb-6"></div>

                    <h2 className="text-xl text-amber-200/80 font-light tracking-[0.3em] uppercase mb-8">
                        {subtitle || "Formal Gathering"}
                    </h2>

                    {/* Details Card */}
                    <div className="max-w-md mx-auto bg-black/60 backdrop-blur-md border border-amber-900/50 rounded-2xl p-8 shadow-2xl">
                        <div className="grid grid-cols-2 gap-6">
                            <div className="border-r border-amber-900/30 pr-6">
                                <span className="block text-[9px] text-amber-500 mb-2 font-black uppercase tracking-widest">Date</span>
                                <span className="text-sm font-semibold text-amber-100">{date || "TBA"}</span>
                            </div>
                            <div className="pl-6">
                                <span className="block text-[9px] text-amber-500 mb-2 font-black uppercase tracking-widest">Time</span>
                                <span className="text-sm font-semibold text-amber-100">{time || "TBA"}</span>
                            </div>
                        </div>

                        <div className="mt-6 pt-6 border-t border-amber-900/30">
                            <span className="block text-[9px] text-amber-500 mb-2 font-black uppercase tracking-widest">Venue</span>
                            <p className="text-sm font-semibold text-amber-100">{location || "Grand Hall"}</p>
                        </div>

                        {message && (
                            <div className="mt-6 pt-6 border-t border-amber-900/30">
                                <p className="text-xs text-amber-200/70 leading-relaxed italic">{message}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }

    // Variant 3: Tuesday Session (Emerald theme)
    if (variant === 3) {
        return (
            <div className="relative w-full h-full bg-[#0a1a0a] text-white flex flex-col items-center justify-center p-12 overflow-hidden font-sans">
                <ImenaBranding />
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#10b981_0,transparent_50%)]"></div>
                </div>

                <div className="relative z-10 w-full flex flex-col items-center text-center">
                    <div className="mb-6 bg-brand-gold/10 px-6 py-1 rounded-full border border-brand-gold/20">
                        <span className="text-[10px] font-black tracking-[0.5em] text-brand-gold uppercase">Weekly Assembly</span>
                    </div>

                    <h1 className="text-5xl font-black uppercase tracking-tighter mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                        Tuesday
                    </h1>
                    <h2 className="text-2xl font-bold tracking-[0.3em] text-brand-gold uppercase mb-8">Session</h2>

                    <div className="w-full max-w-sm mb-10 bg-black/40 backdrop-blur-sm p-8 rounded-3xl border border-white/5 shadow-2xl">
                        <h3 className="text-brand-gold font-bold text-xl mb-4 italic">{title || "Mid-Week Briefing"}</h3>
                        <p className="text-white/60 text-xs mb-8 leading-relaxed uppercase tracking-wider">{message || "Corporate updates and strategy alignment session."}</p>

                        <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
                            <div>
                                <span className="block text-[8px] text-brand-gold mb-1 font-black uppercase tracking-widest">Time</span>
                                <span className="text-sm font-bold">{time || "9:00 AM"}</span>
                            </div>
                            <div>
                                <span className="block text-[8px] text-brand-gold mb-1 font-black uppercase tracking-widest">Room</span>
                                <span className="text-sm font-bold truncate block">{location || "Executive Suite"}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // Variant 4: Saturday Session (Ocean theme)
    if (variant === 4) {
        return (
            <div className="relative w-full h-full bg-[#0a0a1a] text-white flex flex-col items-center justify-center p-12 overflow-hidden font-sans">
                <ImenaBranding />
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#2563EB_0,transparent_50%)]"></div>
                </div>

                <div className="relative z-10 w-full flex flex-col items-center text-center">
                    <div className="mb-6 bg-brand-blue/10 px-6 py-1 rounded-full border border-brand-blue/20">
                        <span className="text-[10px] font-black tracking-[0.5em] text-brand-blue uppercase">Weekend Forum</span>
                    </div>

                    <h1 className="text-5xl font-black uppercase tracking-tighter mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                        Saturday
                    </h1>
                    <h2 className="text-2xl font-bold tracking-[0.3em] text-brand-blue uppercase mb-8">Session</h2>

                    <div className="w-full max-w-sm mb-10 bg-black/40 backdrop-blur-sm p-8 rounded-3xl border border-white/5 shadow-2xl">
                        <h3 className="text-brand-blue font-bold text-xl mb-4 italic">{title || "Visionary Workshop"}</h3>
                        <p className="text-white/60 text-xs mb-8 leading-relaxed uppercase tracking-wider">{message || "A deep dive into upcoming projects and collaborative brainstorming."}</p>

                        <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
                            <div>
                                <span className="block text-[8px] text-brand-blue mb-1 font-black uppercase tracking-widest">Time</span>
                                <span className="text-sm font-bold">{time || "2:00 PM"}</span>
                            </div>
                            <div>
                                <span className="block text-[8px] text-brand-blue mb-1 font-black uppercase tracking-widest">Hall</span>
                                <span className="text-sm font-bold truncate block">{location || "Grand Gallery"}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // Default / Fallback (Luxury Stage is usually default, but good to have)
    return (
        <div className="relative w-full h-full bg-neutral-900 text-white flex flex-col items-center justify-center p-12 text-center">
            <ImenaBranding />
            <div className="border-4 border-white/10 p-10 h-full w-full flex flex-col items-center justify-center bg-black/40">
                <span className="text-[10px] font-black uppercase tracking-[1em] opacity-30 mb-8">Assembly</span>
                <h1 className="text-4xl font-serif italic mb-6">{title || "Event Name"}</h1>
                <p className="text-[9px] font-black tracking-[0.4em] uppercase opacity-70 border-y border-white/10 py-6 w-full">{date}</p>
                <p className="text-xs mt-8 italic opacity-50">{location}</p>
            </div>
        </div>
    );
};

export default AssemblyTemplate;
