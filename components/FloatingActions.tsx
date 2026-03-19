'use client';

import { useState, useEffect } from 'react';
import { Sparkles, Users, MessageCircle, ArrowUp } from 'lucide-react';

export function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Bottom Center - Browse Resumes Button */}
      <div className="fixed bottom-0 left-0 right-0 z-50 pointer-events-none flex justify-center pb-5">
        <a 
          href="#workers" 
          className="pointer-events-auto group flex items-center gap-2.5 px-8 py-3.5 bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white font-bold text-base rounded-full shadow-2xl shadow-teal-500/40 hover:shadow-teal-500/60 transition-all duration-300 hover:scale-105 border border-teal-400/30 animate-bounce-soft"
        >
          <Sparkles className="w-5 h-5" />
          <span>تصفح السير</span>
          <Users className="w-5 h-5" />
          <Sparkles className="w-5 h-5" />
        </a>
      </div>

      {/* Right Side - WhatsApp Button */}
      <div className="fixed right-8 bottom-8 z-50 flex flex-col gap-4">
        <a
          href="https://wa.me/966500000000"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 sm:w-14 sm:h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl shadow-green-500/30 hover:shadow-green-500/50 transition-all duration-300 hover:scale-110 animate-float group"
          title="تواصل معنا عبر واتساب"
        >
          <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 fill-current" />
          <span className="absolute right-full mr-3 px-3 py-1.5 bg-white text-gray-900 text-xs font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl pointer-events-none">
            تواصل معنا
          </span>
        </a>
      </div>

      {/* Left Side - Scroll to Top Button */}
      <div className={`fixed left-8 bottom-8 z-50 transition-all duration-500 ${showScrollTop ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'}`}>
        <button
          onClick={scrollToTop}
          className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center shadow-xl shadow-teal-500/30 hover:shadow-teal-500/50 transition-all duration-300 animate-scale-in"
          title="العودة للأعلى"
        >
          <ArrowUp className="w-5 h-5 text-white" />
        </button>
      </div>
    </>
  );
}
