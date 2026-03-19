'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { BadgeCheck, ChevronLeft, MessageCircle, Shield, Sparkles, Star, Users } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const sliderImages = [
  "https://picsum.photos/seed/maid1/800/1000",
  "https://picsum.photos/seed/maid2/800/1000",
  "https://picsum.photos/seed/maid3/800/1000",
  "https://picsum.photos/seed/maid4/800/1000",
  "https://picsum.photos/seed/maid5/800/1000",
  "https://picsum.photos/seed/maid6/800/1000",
  "https://picsum.photos/seed/maid7/800/1000",
  "https://picsum.photos/seed/maid8/800/1000",
  "https://picsum.photos/seed/maid9/800/1000",
];

export function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % sliderImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative bg-[#0D1117] min-h-screen flex flex-col lg:flex-row overflow-hidden pt-32 lg:pt-0">
      {/* Right Side - Text Content */}
      <div className="w-full lg:w-1/2 flex flex-col relative px-6 md:px-10 lg:px-16 xl:px-24 pb-16 z-10">
        <div className="mt-16 lg:mt-28"></div>
        <div className="h-full flex items-center justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-[36rem] w-full animate-fade-in-up"
          >
            <div className="mb-8">
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border bg-teal-500/10 text-teal-400 border-teal-500/20">
                <Sparkles className="w-4 h-4" />
                مكتب استقدام معتمد ومرخص
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-6xl font-bold mb-5 leading-[1.2] text-white">
              <span className="text-teal-400 block mb-2">مهارات الأيادي للإستقدام</span>
              <span className="relative inline-block">
                شريكك الأمثل
                <svg viewBox="0 0 300 12" fill="none" className="absolute -bottom-2 left-0 w-full">
                  <path d="M2 9C50 3 100 3 150 6C200 9 250 5 298 3" stroke="#14B8A6" strokeWidth="3" strokeLinecap="round" className="opacity-40" />
                </svg>
              </span>
            </h1>
            
            <p className="text-base lg:text-lg mb-8 leading-relaxed text-gray-400">
              نحن مكتب مهارات الأيادي للاستقدام، نضع بين يديك حلولاً متكاملة لاستقدام العمالة الماهرة والمدربة من مختلف الجنسيات، وفقًا لاحتياجات سوق العمل السعودي
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="#workers"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 rounded-full transition-all duration-300 hover:scale-[1.03] shadow-lg shadow-teal-500/30 hover:shadow-teal-500/50 w-full sm:w-auto"
              >
                اكتشف المزيد
                <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-bold rounded-full transition-all duration-300 hover:scale-[1.03] border-2 w-full sm:w-auto border-white/20 text-white hover:bg-white/5"
              >
                <MessageCircle className="w-5 h-5" />
                تواصل معنا
              </a>
            </div>

            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5">
                <BadgeCheck className="w-4 h-4 text-green-500" />
                <span className="text-sm font-medium text-gray-400">مرخص رسمياً</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5">
                <Shield className="w-4 h-4 text-teal-500" />
                <span className="text-sm font-medium text-gray-400">ضمان شامل</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5">
                <Star className="w-4 h-4 text-teal-500" />
                <span className="text-sm font-medium text-gray-400">تقييم 4.9</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Left Side - Slider */}
      <div className="w-full lg:w-1/2 relative h-[500px] lg:h-auto overflow-hidden order-first lg:order-last">
        <div className="absolute inset-0 bg-[#00121C]"></div>
        <svg viewBox="0 0 800 800" fill="none" className="absolute inset-0 w-full h-full opacity-[0.08]">
          <circle cx="400" cy="400" r="300" stroke="#14B8A6" strokeWidth="0.5"></circle>
          <circle cx="400" cy="400" r="200" stroke="#14B8A6" strokeWidth="0.5"></circle>
          <circle cx="400" cy="400" r="100" stroke="#14B8A6" strokeWidth="0.5"></circle>
          <line x1="100" y1="100" x2="700" y2="700" stroke="#14B8A6" strokeWidth="0.5"></line>
          <line x1="700" y1="100" x2="100" y2="700" stroke="#14B8A6" strokeWidth="0.5"></line>
          <line x1="400" y1="0" x2="400" y2="800" stroke="#14B8A6" strokeWidth="0.3"></line>
          <line x1="0" y1="400" x2="800" y2="400" stroke="#14B8A6" strokeWidth="0.3"></line>
          <polygon points="400,50 700,200 700,500 400,650 100,500 100,200" stroke="#14B8A6" strokeWidth="0.5" fill="none"></polygon>
          <polygon points="400,150 600,275 600,425 400,550 200,425 200,275" stroke="#14B8A6" strokeWidth="0.5" fill="none"></polygon>
        </svg>
        <div className="absolute inset-0 bg-gradient-to-t from-teal-900/60 via-transparent to-teal-900/30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/40 via-transparent to-transparent rtl:bg-gradient-to-l"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[120px] bg-teal-500/20"></div>
        
        <div className="relative z-10 flex flex-col items-center justify-center h-full p-8 lg:p-12">
          <div className="relative w-full max-w-2xl lg:max-w-3xl my-auto aspect-[4/3] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImage}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.7 }}
                className="absolute inset-0"
              >
                <Image
                  src={sliderImages[currentImage]}
                  alt="عمالة منزلية"
                  fill
                  className="object-contain drop-shadow-[0_20px_60px_rgba(20,184,166,0.3)]"
                  referrerPolicy="no-referrer"
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carousel Dots */}
          <div className="relative z-20 mt-6 flex items-center justify-center">
            <div className="flex items-center gap-2.5 px-5 py-3 rounded-full backdrop-blur-xl shadow-2xl bg-white/10 border border-white/20">
              {sliderImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImage(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    currentImage === idx ? 'bg-primary w-6' : 'bg-white/40 hover:bg-white/60'
                  }`}
                  aria-label={`الانتقال للصورة ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Top Right Floating Badge */}
          <div className="absolute top-40 right-8 lg:top-48 lg:right-12 z-20 animate-[bounce_4s_infinite]">
            <div className="backdrop-blur-xl rounded-2xl px-4 py-3 shadow-xl bg-white/10 border border-white/20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-primary/30">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-primary/80">عاملات ماهرات</p>
                  <p className="text-sm font-bold text-white">+5,000</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Left Floating Badge */}
          <div className="hidden lg:block absolute bottom-24 left-8 lg:bottom-32 lg:left-12 z-20 animate-[bounce_3s_infinite_reverse]">
            <div className="backdrop-blur-xl rounded-2xl px-4 py-3 shadow-xl bg-white/10 border border-white/20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-primary/30">
                  <Star className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-primary/80">تقييم ذهبي</p>
                  <p className="text-sm font-bold text-white">من عملائنا</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
