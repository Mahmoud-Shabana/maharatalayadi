'use client';

import { Play, Users, ChevronLeft } from 'lucide-react';

export function VideoGuide() {
  return (
    <section className="relative py-12 sm:py-16 lg:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[#0D1117]"></div>
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] max-w-[700px] aspect-video rounded-full blur-[120px] sm:blur-[160px] bg-teal-700/10"></div>
      </div>
      <div className="container mx-auto px-3 sm:px-4 lg:px-8 relative z-10">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 leading-tight text-white">
            شرح طريقة حجز سيرة ذاتية
          </h2>
          <p className="text-sm sm:text-base lg:text-lg max-w-xl mx-auto leading-relaxed text-gray-400">
            شرح طريقة حجز سيرة ذاتية
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="relative p-[2px] sm:p-[3px] rounded-xl sm:rounded-2xl lg:rounded-3xl bg-gradient-to-br from-teal-500/25 via-white/5 to-teal-500/25">
            <div className="rounded-[10px] sm:rounded-[14px] lg:rounded-[22px] overflow-hidden bg-[#0c1222] shadow-2xl shadow-black/60">
              <div className="relative aspect-video cursor-pointer group">
                <img 
                  alt="شرح طريقة حجز سيرة ذاتية" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" 
                  src="https://img.youtube.com/vi/4v_mwFecbTE/maxresdefault.jpg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-black/5 group-hover:from-black/50 group-hover:via-black/10 transition-all duration-500"></div>
                <div dir="ltr" className="absolute inset-0 flex items-center justify-center">
                  <div className="absolute w-24 h-24 sm:w-28 sm:h-28 lg:w-36 lg:h-36 rounded-full border-2 border-teal-400/30 animate-ping" style={{ animationDuration: '2.5s' }}></div>
                  <div className="absolute w-20 h-20 sm:w-24 sm:h-24 lg:w-30 lg:h-30 rounded-full bg-teal-500/10 animate-ping" style={{ animationDuration: '2s', animationDelay: '0.5s' }}></div>
                  <div className="absolute w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full bg-teal-500/15 blur-xl"></div>
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center shadow-2xl shadow-teal-500/40 group-hover:scale-110 group-hover:shadow-teal-500/60 transition-all duration-500 animate-bounce-soft">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" style={{ marginLeft: '3px' }}>
                      <path d="M8 5v14l11-7z"></path>
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-6 pb-4 sm:pb-5 pt-10 bg-gradient-to-t from-black/70 to-transparent">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-teal-500/20 backdrop-blur-md border border-white/10 flex items-center justify-center">
                      <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-teal-300 fill-current" />
                    </div>
                    <div>
                      <span className="text-white/95 text-xs sm:text-sm font-medium block">اضغط لتشغيل الفيديو</span>
                      <span className="text-white/50 text-[10px] sm:text-xs">فيديو توضيحي</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center py-8">
        <a 
          className="inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 rounded-2xl shadow-xl shadow-teal-500/30 transition-all duration-300 hover:scale-[1.03]" 
          href="/sales"
        >
          <Users className="w-5 h-5" />
          استعرض جميع السير الذاتية
          <ChevronLeft className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
}
