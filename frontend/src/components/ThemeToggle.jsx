'use client';

import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2.5 rounded-xl bg-foreground/5 hover:bg-foreground/10 border border-foreground/10 transition-all duration-300 group shadow-sm"
            aria-label="Toggle theme"
        >
            {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-brand-gold group-hover:rotate-45 transition-transform duration-500" />
            ) : (
                <Moon className="w-4 h-4 text-brand-blue group-hover:-rotate-12 transition-transform duration-500" />
            )}
        </button>
    );
}
