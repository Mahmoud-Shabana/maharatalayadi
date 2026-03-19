'use client';

import { Sparkles, CircleCheck } from 'lucide-react';

const maarofaData = [
  {
    id: 1,
    nationality: 'اثيوبيا',
    flag: 'https://flagcdn.com/w160/et.png',
    muslimPrice: '3,999',
    nonMuslimPrice: '3,999',
    delay: '0s'
  },
  {
    id: 2,
    nationality: 'كينيا',
    flag: 'https://flagcdn.com/w160/ke.png',
    muslimPrice: '6,499',
    nonMuslimPrice: '5,595',
    delay: '0.08s'
  },
  {
    id: 3,
    nationality: 'بنجلاديش',
    flag: 'https://flagcdn.com/w160/bd.png',
    muslimPrice: '7,995',
    nonMuslimPrice: '7,995',
    delay: '0.16s'
  }
];

export function MaarofaPackages() {
  return (
    <div id="maarofa-packages" className="pt-8 sm:pt-10 pb-16 sm:pb-20 relative z-10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 scroll-animate visible">
          <span className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4 bg-teal-500/10 text-teal-400">الأسعار والباقات</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            باقات <span className="animated-underline">معروفة
              <svg viewBox="0 0 200 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="swoosh-svg">
                <path d="M3,3 Q100,22 197,3" stroke="#14b8a6" strokeWidth="3" strokeLinecap="round" fill="none" className="swoosh-path"></path>
              </svg>
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">اختر الباقة المناسبة لاحتياجاتك من بين مجموعة متنوعة من الجنسيات</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-6 lg:gap-8">
          {maarofaData.map((pkg) => (
            <div key={pkg.id} className="scroll-animate visible w-[calc(50%-12px)] md:w-[calc(33.333%-24px)] lg:w-[calc(25%-32px)] max-w-[280px] sm:max-w-none" style={{ animationDelay: pkg.delay }}>
              <div className="glass-card rounded-2xl sm:rounded-3xl overflow-hidden hover-lift group h-full flex flex-col">
                <div className="relative pt-4 sm:pt-6 px-3 sm:px-6 pb-3 sm:pb-4 text-center">
                  <div 
                    className="w-14 h-14 sm:w-20 sm:h-20 mx-auto mb-2 sm:mb-3 rounded-full ring-4 ring-teal-500/20 group-hover:ring-teal-500/40 transition-all duration-300 group-hover:scale-110 bg-cover bg-center bg-no-repeat" 
                    style={{ backgroundImage: `url("${pkg.flag}")` }}
                  ></div>
                  <span className="text-xs font-medium text-muted-foreground">الجنسية</span>
                  <h3 className="text-base sm:text-xl font-bold mt-1 text-white">{pkg.nationality}</h3>
                </div>
                
                <div className="flex-1 p-2 sm:p-4 space-y-2 sm:space-y-3">
                  <div className="flex items-center justify-between p-2 sm:p-3 rounded-xl bg-white/5">
                    <div className="text-right">
                      <span className="text-[9px] sm:text-xs block leading-tight text-muted-foreground">رسوم الاستقدام</span>
                      <span className="text-[11px] sm:text-sm font-semibold leading-tight text-white">مسلم</span>
                    </div>
                    <div className="text-left flex items-baseline gap-0.5 sm:gap-1">
                      <span className="text-base sm:text-2xl font-bold text-teal-500 tracking-tighter">{pkg.muslimPrice}</span>
                      <span className="text-[9px] sm:text-xs text-muted-foreground">ريال</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-2 sm:p-3 rounded-xl bg-white/5">
                    <div className="text-right">
                      <span className="text-[9px] sm:text-xs block leading-tight text-muted-foreground">رسوم الاستقدام</span>
                      <span className="text-[11px] sm:text-sm font-semibold leading-tight text-white">غير مسلم</span>
                    </div>
                    <div className="text-left flex items-baseline gap-0.5 sm:gap-1">
                      <span className="text-base sm:text-2xl font-bold text-teal-500 tracking-tighter">{pkg.nonMuslimPrice}</span>
                      <span className="text-[9px] sm:text-xs text-muted-foreground">ريال</span>
                    </div>
                  </div>
                </div>

                <div className="p-2 sm:p-4 pt-0">
                  <ul className="hidden sm:block text-xs space-y-1.5 mb-4 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CircleCheck className="w-3.5 h-3.5 text-teal-500 mt-0.5 flex-shrink-0" />
                      <span>تطبق الشروط والأحكام على أساس العقد ووفقا للخدمة المختارة</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CircleCheck className="w-3.5 h-3.5 text-teal-500 mt-0.5 flex-shrink-0" />
                      <span>شامل ضريبة القيمة المضافة</span>
                    </li>
                  </ul>
                  <button 
                    className="w-full py-2 sm:py-3 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 rounded-xl transition-all duration-300 flex items-center justify-center gap-1 sm:gap-2 shadow-lg shadow-teal-500/20 hover:shadow-teal-500/40 cursor-default"
                  >
                    <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
                    تصفح سير {pkg.nationality}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
