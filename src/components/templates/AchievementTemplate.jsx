import React from 'react';
import brandLogo from '@/assets/brand-logo.png';

const AchievementTemplate = ({ data }) => {
    const { title, subtitle, date, image, message, variant = 0, location, time, phone, backgroundType, backgroundImage } = data;

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

    // Variant 30: Employee of the Month (Navy/Gold Corporate Luxury)
    if (variant === 30) {
        return (
            <div className="relative w-full h-full bg-gradient-to-br from-neutral-900 via-blue-950 to-black text-white overflow-hidden font-sans p-10 flex flex-col items-center" style={backgroundStyle}>
                <ImenaBranding />

                {/* Navy Blue Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-950/50 via-transparent to-amber-950/30"></div>

                {/* Geometric Hexagonal Pattern */}
                <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, rgba(212, 175, 55, 0.2) 1px, transparent 0)`, backgroundSize: '32px 32px' }}></div>

                {/* Gold Accent Frame */}
                <div className="absolute inset-8 border-2 border-amber-600/30 rounded-sm pointer-events-none"></div>
                <div className="absolute inset-12 border border-amber-700/20 rounded-sm pointer-events-none"></div>

                <div className="relative z-10 w-full flex flex-col items-center h-full">
                    <div className="mb-6 bg-amber-600/10 px-8 py-2 rounded-full border border-amber-600/30 backdrop-blur-sm">
                        <span className="text-[10px] font-black tracking-[0.4em] text-amber-400 uppercase">{location || "COMPANY NAME"}</span>
                    </div>

                    <div className="flex flex-col items-center mb-8">
                        <h1 className="text-5xl font-black tracking-tighter text-white mb-0 leading-none">EMPLOYEE</h1>
                        <h2 className="text-xl font-bold tracking-[0.5em] text-brand-gold uppercase">OF THE MONTH</h2>
                    </div>

                    {/* Hexagon Photo Frame */}
                    <div className="relative w-64 h-64 mb-10 group">
                        <div className="absolute inset-0 bg-brand-gold rotate-[30deg] scale-105 shadow-[0_0_40px_rgba(212,175,55,0.3)]"></div>
                        <div className="absolute inset-2 bg-black rotate-[30deg]"></div>
                        <div className="absolute inset-0 flex items-center justify-center overflow-hidden" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
                            {image ? (
                                <img src={image} className="w-full h-full object-cover grayscale brightness-110 contrast-125 transition-transform duration-700 group-hover:scale-110" />
                            ) : (
                                <div className="w-full h-full bg-neutral-900 flex items-center justify-center">
                                    <div className="w-20 h-20 border-2 border-brand-gold/20 rounded-full flex items-center justify-center">
                                        <div className="w-12 h-12 bg-brand-gold/10 rounded-full"></div>
                                    </div>
                                </div>
                            )}
                        </div>
                        {/* Ribbons */}
                        <div className="absolute -left-12 top-1/2 -translate-y-1/2 w-20 h-10 bg-brand-gold/80 z-20 skew-y-12 shadow-xl flex items-center justify-center">
                            <div className="w-16 h-0.5 bg-black/20"></div>
                        </div>
                        <div className="absolute -right-12 top-1/2 -translate-y-1/2 w-20 h-10 bg-brand-gold/80 z-20 -skew-y-12 shadow-xl flex items-center justify-center">
                            <div className="w-16 h-0.5 bg-black/20"></div>
                        </div>
                    </div>

                    <div className="text-center w-full">
                        <div className="text-3xl font-cursive text-white mb-1" style={{ fontFamily: "'Great Vibes', cursive" }}>Congratulations</div>
                        <div className="text-4xl font-black text-white uppercase tracking-tight mb-1">{subtitle || "David Lee"}</div>
                        <div className="text-xs font-bold text-brand-gold tracking-[0.3em] uppercase mb-8">{title || "SOFTWARE ENGINEER"}</div>

                        <div className="max-w-[340px] mx-auto text-[11px] font-medium text-gray-400 leading-relaxed uppercase tracking-widest border-t border-brand-gold/20 pt-6">
                            {message || "Your outstanding technical expertise and collaborative spirit have been instrumental in delivering high-quality solutions to our clients."}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // Variant 31: Graduation Thank You (Theatrical Gold)
    if (variant === 31) {
        return (
            <div className="relative w-full h-full bg-[#050505] text-white overflow-hidden font-sans flex flex-col items-center" style={backgroundStyle}>
                <ImenaBranding />
                {/* Curtain Effect */}
                <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black via-neutral-900 to-transparent opacity-80 z-10 shadow-2xl"></div>
                <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black via-neutral-900 to-transparent opacity-80 z-10 shadow-2xl"></div>

                {/* Gold Glitter/Ribbons */}
                <div className="absolute inset-0 opacity-30 z-0 bg-[url('https://www.transparenttextures.com/patterns/dust.png')] pointer-events-none"></div>

                <div className="relative z-20 flex flex-col items-center justify-center h-full px-16 text-center">
                    <div className="mb-8">
                        <span className="text-[11px] font-black tracking-[0.6em] text-brand-gold uppercase">{date || "CLASS OF 2026"}</span>
                    </div>

                    {/* Graduation Cap SVG Shape (Simplified) */}
                    <div className="mb-8 relative">
                        <div className="w-24 h-6 bg-brand-gold rounded-t-sm shadow-2xl relative z-10"></div>
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-48 h-12 bg-neutral-900 rotate-[10deg] border border-brand-gold/30"></div>
                        <div className="absolute top-4 right-2 w-1 h-20 bg-brand-gold/60 origin-top rotate-12"></div>
                    </div>

                    <div className="flex flex-col gap-2 mb-12">
                        <h1 className="text-6xl font-black text-brand-gold tracking-[0.1em] leading-none">THANK</h1>
                        <h1 className="text-6xl font-black text-brand-gold tracking-[0.1em] leading-none">YOU</h1>
                    </div>

                    <div className="max-w-[300px] text-gray-300 text-xs leading-relaxed mb-14 px-4 uppercase tracking-[0.15em] font-medium">
                        {message || "FOR ATTENDING MY GRADUATION PARTY. IT MEANT SO MUCH TO ME. I APPRECIATE YOUR THOUGHTFUL GIFT."}
                    </div>

                    <div className="space-y-1">
                        <div className="text-[10px] italic text-neutral-500 lowercase">with love,</div>
                        <div className="text-xl font-black tracking-[0.3em] text-brand-gold uppercase">{subtitle || "JORDAN JONSON"}</div>
                    </div>
                </div>

                {/* Light Beams */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-gold/5 rounded-full blur-[120px] -translate-y-1/2 z-0"></div>
            </div>
        );
    }

    // Default Variant 0: Premium Image/Layout Overlay
    return (
        <div className="relative w-full h-full bg-neutral-900 flex flex-col items-center justify-center p-12 overflow-hidden font-sans" style={backgroundStyle}>
            <ImenaBranding />
            <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px] z-0"></div>
            <div className="relative z-10 w-full flex flex-col items-center text-center">
                <div className="w-16 h-1 bg-brand-gold mb-8"></div>
                <h2 className="text-brand-gold uppercase tracking-[0.4em] text-xs font-bold mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    {title || "Certificate of Excellence"}
                </h2>
                <h1 className="text-5xl font-serif italic text-white mb-6 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {subtitle || "Recipient Name"}
                </h1>
                <p className="text-white/80 text-sm max-w-sm mb-10 italic leading-relaxed">
                    "{message || "For outstanding performance and dedication to excellence."}"
                </p>
                <div className="flex gap-12 text-white/60 text-[10px] font-bold uppercase tracking-widest border-t border-white/10 pt-8 mt-4">
                    <div className="text-center"><span className="block text-brand-gold mb-1">Date</span>{date || "2024"}</div>
                    <div className="text-center"><span className="block text-brand-gold mb-1">Authority</span>{location || "Head of Department"}</div>
                </div>
            </div>
        </div>
    );
};

export default AchievementTemplate;
