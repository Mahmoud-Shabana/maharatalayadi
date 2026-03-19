'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Bell, Users, Sun, LogIn } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -80% 0px' }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const navLinks = [
    { name: 'خدماتنا', href: '#services' },
    { name: 'الجنسيات', href: '#nationalities' },
    { name: 'باقات الاستقدام', href: '#packages' },
    { name: 'باقات معروفة', href: '#maarofa-packages' },
    { name: 'لماذا نحن', href: '#features' },
    { name: 'المقالات', href: '#blog' },
    { name: 'تواصل معنا', href: '#contact' },
    { name: 'تتبع معاملتك', href: '#track', badge: 'قريباً' },
  ];

  return (
    <>
      <header className={`fixed z-50 transition-all duration-500 ${
        isScrolled 
          ? 'top-0 left-0 right-0 rounded-none bg-[#0a0f18]/90 backdrop-blur-xl border-b border-white/[0.06] shadow-lg shadow-black/20 py-2 sm:py-2.5' 
          : 'top-3 left-2 right-2 sm:left-4 sm:right-4 md:left-6 md:right-6 lg:left-8 lg:right-8 xl:left-12 xl:right-12 2xl:left-20 2xl:right-20 rounded-2xl sm:rounded-full bg-[#0a0f18]/75 backdrop-blur-xl border border-white/[0.06] shadow-2xl shadow-black/30 py-3 sm:py-4'
      }`}>
      <div className="absolute bottom-0 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-teal-500/30 to-transparent opacity-100"></div>
      <div className="container mx-auto px-4 lg:px-8">
        <nav className="flex items-center justify-between flex-nowrap">
          
          {/* Mobile Actions */}
          <div className="lg:hidden flex items-center gap-1.5 order-first">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-8 h-8 flex items-center justify-center rounded-lg transition-all duration-300 bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/5"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="w-5 h-5" aria-hidden="true" />
              ) : (
                <Menu className="w-5 h-5" aria-hidden="true" />
              )}
            </button>
            <button title="تفعيل الوضع النهاري" className="w-8 h-8 flex items-center justify-center rounded-lg transition-all duration-300 bg-amber-500/10 text-amber-400 hover:bg-amber-500/20 border border-amber-500/10">
              <Sun className="w-4 h-4" />
            </button>
            <div className="relative">
              <button className="w-8 h-8 flex items-center justify-center rounded-lg transition-all duration-300 relative bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/5">
                <Bell className="w-4 h-4" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[9px] font-bold rounded-full flex items-center justify-center animate-pulse shadow-lg">1</span>
              </button>
            </div>
          </div>

          <Link href="/" className="flex items-center gap-3 group order-last lg:order-first shrink-0 min-w-fit">
            <img 
              src="https://i.ibb.co/FLkhm5bK/image.png" 
              onError={(e) => { e.currentTarget.src = 'https://i.ibb.co/ynQkfPKf/Layer-0.png' }}
              alt="الشعار" 
              className="h-11 sm:h-13 w-auto object-contain transition-all duration-300 group-hover:scale-105" 
            />
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-0.5 xl:gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-1.5 xl:px-2 py-2 rounded-lg text-xs xl:text-sm font-medium transition-all duration-300 whitespace-nowrap flex items-center gap-1.5 ${
                    isActive 
                      ? 'text-teal-400 bg-white/5' 
                      : 'text-gray-400 hover:text-teal-400 hover:bg-white/5'
                  }`}
                >
                  {link.name}
                  {link.badge && (
                    <span className="px-1.5 py-0.5 text-[9px] font-bold rounded-full bg-gradient-to-r from-teal-500 to-emerald-500 text-white leading-none shadow-lg shadow-teal-500/40">
                      {link.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </div>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-3 shrink-0">
            {/* Notification Bell */}
            <div className="relative group">
              <button className="p-2 rounded-lg border transition-all duration-300 relative group bg-white/5 border-white/10 hover:bg-white/10 text-gray-400 hover:text-white">
                <Bell className="w-4.5 h-4.5" />
                <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-500 text-white text-[7px] font-bold rounded-full flex items-center justify-center animate-pulse shadow-lg">1</span>
              </button>
            </div>
            {/* Dark Mode Toggle */}
            <button title="تفعيل الوضع النهاري" className="p-2 rounded-lg border transition-all duration-300 group bg-amber-500/10 border-amber-500/10 hover:bg-amber-500/20 text-amber-400">
              <Sun className="w-4.5 h-4.5 group-hover:animate-theme-toggle" />
            </button>

            <a
              href="#workers"
              className="px-3 xl:px-4 py-2 xl:py-2.5 text-[11px] xl:text-[12px] font-medium rounded-lg border transition-all duration-300 whitespace-nowrap text-gray-300 bg-white/5 hover:bg-white/10 border-white/10 hover:border-white/20"
            >
              استعراض السير الذاتية
            </a>
            <a
              href="#login"
              className="px-3 xl:px-4 py-2 xl:py-2.5 text-[11px] xl:text-[12px] font-medium text-white bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 rounded-lg shadow-lg shadow-teal-500/30 transition-all duration-300 flex items-center gap-1.5 whitespace-nowrap"
            >
              <LogIn className="w-4 h-4" />
              تسجيل الدخول
            </a>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 mt-4 bg-[#0a0f18]/95 backdrop-blur-xl border border-white/[0.06] rounded-2xl shadow-2xl p-4 mx-2 sm:mx-4">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                    isActive
                      ? 'text-teal-400 bg-white/5'
                      : 'text-gray-400 hover:text-teal-400 hover:bg-white/5'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                  {link.badge && (
                    <span className="px-1 py-[2px] text-[7px] font-bold rounded-full bg-gradient-to-r from-teal-500 to-emerald-500 text-white leading-none shadow-lg shadow-teal-500/40">
                      {link.badge}
                    </span>
                  )}
                </Link>
              );
            })}
            <div className="mt-4 pt-4 border-t border-white/10 flex flex-col gap-3">
              <a
                href="#workers"
                className="w-full text-center px-3 py-2.5 text-sm font-medium rounded-xl border transition-all duration-300 text-gray-300 bg-white/5 hover:bg-white/10 border-white/10"
              >
                استعراض السير الذاتية
              </a>
              <a
                href="#login"
                className="w-full text-center px-3 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 rounded-xl shadow-lg shadow-teal-500/30 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <LogIn className="w-4 h-4" />
                تسجيل الدخول
              </a>
            </div>
          </div>
        </div>
      )}
    </header>

    {/* No Rent Banner */}
    <div 
      style={{ willChange: 'transform', transform: 'translateY(0px)', transition: 'transform 0.5s', contain: 'layout' }} 
      className={`fixed left-0 right-0 z-40 flex justify-center pointer-events-none transition-all duration-500 ${
        isScrolled ? 'top-[68px] sm:top-[74px]' : 'top-[88px] sm:top-[96px] lg:top-[104px]'
      }`}
    >
      <div className="pointer-events-auto inline-flex items-center gap-3 px-7 py-2.5 rounded-full text-sm font-bold border backdrop-blur-xl shadow-2xl transition-all duration-300 bg-[#0d1220]/90 border-red-500/40 text-red-400 shadow-red-500/20">
        <span className="text-lg">🚫</span>
        <span>لا يوجد إيجار نهائياً</span>
        <span className="text-lg">🚫</span>
      </div>
    </div>
    </>
  );
}
