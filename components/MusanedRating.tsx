'use client';

import { Star } from 'lucide-react';
import { motion } from 'motion/react';

export function MusanedRating() {
  return (
    <section className="py-16 sm:py-20 bg-transparent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative group"
        >
          {/* Decorative background elements */}
          <div className="absolute -inset-1 bg-gradient-to-r from-teal-500/20 to-emerald-500/20 rounded-[2rem] blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
          
          <div className="relative bg-[#0D1117] border border-white/10 rounded-[2rem] p-8 sm:p-12 flex flex-col md:flex-row-reverse items-center justify-between gap-8">
            
            {/* Left: Image (moved to left in flex-row-reverse) */}
            <div className="flex-shrink-0 w-full md:w-1/3 flex justify-center">
              <div className="relative">
                <img 
                  src="https://maharatalayadi.com/wp-content/uploads/2026/03/Gold.png" 
                  alt="تقييم مساند الذهبي" 
                  className="drop-shadow-[0_0_20px_rgba(234,179,8,0.3)]"
                />
              </div>
            </div>

            {/* Right: Info (moved to right in flex-row-reverse) */}
            <div className="flex-1 text-center md:text-right">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                تقييم رضا العملاء
              </h2>
              <p className="text-slate-400 text-lg mb-6">
                نحن فخورون بثقة عملائنا ونسعى دائماً لتقديم الأفضل.
              </p>
              
              <div className="flex flex-col items-center md:items-start gap-2">
                <span className="text-teal-400 font-bold text-xl">تقييم رضا العملاء الإجمالي</span>
                <div className="flex items-center gap-3">
                  <span className="text-4xl font-black text-white">4.6</span>
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-6 h-6 ${i < 4 ? 'fill-amber-400' : i === 4 ? 'fill-amber-400/50 text-amber-400' : 'fill-slate-700 text-slate-700'}`} />
                    ))}
                  </div>
                </div>
                <span className="text-slate-500 font-medium">(1564 تقييمات)</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
