import React, { useEffect, useState } from 'react';
import { CheckCircle, XCircle, Info, X } from 'lucide-react';

const Toast = ({ message, type = 'success', onClose, duration = 3000 }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
        const timer = setTimeout(() => {
            setIsVisible(false);
            setTimeout(onClose, 300); // Wait for exit animation
        }, duration);

        return () => clearTimeout(timer);
    }, [duration, onClose]);

    const icons = {
        success: <CheckCircle className="w-5 h-5 text-green-500" />,
        error: <XCircle className="w-5 h-5 text-red-500" />,
        info: <Info className="w-5 h-5 text-blue-500" />
    };

    const styles = {
        success: 'border-green-500 bg-green-50 text-green-800 dark:bg-green-900/90 dark:text-green-100 dark:border-green-700',
        error: 'border-red-500 bg-red-50 text-red-800 dark:bg-red-900/90 dark:text-red-100 dark:border-red-700',
        info: 'border-blue-500 bg-blue-50 text-blue-800 dark:bg-blue-900/90 dark:text-blue-100 dark:border-blue-700'
    };

    return (
        <div className={`fixed top-10 right-10 z-[9999] transition-all duration-500 ease-out transform
            ${isVisible ? 'translate-y-0 opacity-100 scale-100' : '-translate-y-4 opacity-0 scale-95'}
        `}>
            <div className={`flex items-center gap-3 px-6 py-4 rounded-2xl border backdrop-blur-xl shadow-[0_20px_40px_rgba(0,0,0,0.2)] dark:shadow-black/50 ${styles[type]}`}>
                <div className="p-1 bg-white/20 rounded-full">
                    {icons[type]}
                </div>
                <div className="flex flex-col">
                    <span className="text-sm font-bold tracking-wide uppercase pr-4">{message}</span>
                </div>
                <button
                    onClick={() => setIsVisible(false)}
                    className="p-1 hover:bg-black/5 dark:hover:bg-white/10 rounded-full transition-colors"
                >
                    <X className="w-4 h-4 opacity-50" />
                </button>
            </div>
        </div>
    );
};

export default Toast;
