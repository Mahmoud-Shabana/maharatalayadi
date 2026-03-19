'use client';

import Image from 'next/image';

const partners = [
  { 
    name: 'وزارة الموارد البشرية والتنمية الاجتماعية', 
    logo: 'https://maharatalayadi.com/wp-content/uploads/2026/03/mol.svg', 
    fallback: 'https://picsum.photos/seed/mol/200/150',
    color: 'from-teal-400 via-emerald-500 to-cyan-400',
    shadow: 'shadow-teal-500/20'
  },
  { 
    name: 'المملكة العربية السعودية', 
    logo: 'https://maharatalayadi.com/wp-content/uploads/2026/03/gov.svg', 
    fallback: 'https://picsum.photos/seed/gov/200/150',
    color: 'from-amber-400 via-orange-500 to-rose-400',
    shadow: 'shadow-orange-500/20'
  },
  { 
    name: 'منصة مساند', 
    logo: 'https://maharatalayadi.com/wp-content/uploads/2026/03/m.svg', 
    fallback: 'https://picsum.photos/seed/musaned/200/150',
    color: 'from-violet-400 via-purple-500 to-fuchsia-400',
    shadow: 'shadow-violet-500/20'
  },
  { 
    name: 'شريك معتمد', 
    logo: 'https://maharatalayadi.com/wp-content/uploads/2026/03/A.svg', 
    fallback: 'https://picsum.photos/seed/partner/200/150',
    color: 'from-sky-400 via-blue-500 to-indigo-400',
    shadow: 'shadow-sky-500/20'
  },
];

export function LicensedBy() {
  return (
    <section className="py-10 sm:py-16 lg:py-24 relative overflow-hidden bg-[#0D1117]">
      {/* Background Decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-[120px] -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px] translate-y-1/2"></div>
      
      {/* Turquoise Brush Effect on the Right */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[300px] h-[600px] bg-teal-500/10 blur-[100px] rounded-l-full pointer-events-none"></div>
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-40 h-[80%] bg-gradient-to-l from-teal-500/20 to-transparent blur-2xl rounded-full pointer-events-none"></div>

      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#14b8a6 0.5px, transparent 0.5px)', backgroundSize: '32px 32px' }}></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-2 sm:mb-4 text-white">
            مرخصون <span className="text-teal-400">من</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-lg max-w-2xl mx-auto">
            معتمدون ومرخصون من الجهات الحكومية الرسمية
          </p>
        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes marquee-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .marquee-track { 
            display: flex;
            width: max-content;
            animation: marquee-scroll 20s linear infinite; 
          }
          .marquee-track:hover { animation-play-state: paused; }
        `}} />

        <div 
          style={{ 
            direction: 'ltr', 
            maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' 
          }} 
          className="overflow-hidden"
        >
          <div className="marquee-track">
            {/* Duplicate the set once for a seamless loop */}
            {[...partners, ...partners].map((partner, idx) => (
              <div key={idx} className="w-[200px] sm:w-[250px] lg:w-[300px] px-3 sm:px-4 lg:px-6 flex-shrink-0">
                <div className="group relative">
                  <div className={`rounded-lg sm:rounded-xl lg:rounded-2xl p-[2px] bg-gradient-to-br ${partner.color} ${partner.shadow} group-hover:shadow-xl transition-shadow duration-500`}>
                    <div className="rounded-[8px] sm:rounded-[10px] lg:rounded-[14px] overflow-hidden bg-[#0a1628] p-0.5 sm:p-1 lg:p-1.5">
                      <div className="aspect-[4/3] relative overflow-hidden rounded-md sm:rounded-lg lg:rounded-xl flex items-center justify-center p-2 sm:p-6 lg:p-8 bg-gradient-to-br from-white via-gray-50 to-slate-100">
                        <img 
                          src={partner.logo} 
                          alt={partner.name} 
                          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700"
                          onError={(e) => {
                            e.currentTarget.src = partner.fallback;
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
