'use client';

import { ArrowLeft, PhoneCall } from 'lucide-react';
import { motion } from 'motion/react';

export function CTA() {
  return (
    <section className="py-16 sm:py-20 bg-transparent relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-teal-500/10 opacity-90" />
        <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 rounded-full bg-teal-500/10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-96 h-96 rounded-full bg-emerald-500/10 blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            هل أنت جاهز للبدء؟
          </h2>
          <p className="text-xl text-emerald-50 mb-10 max-w-2xl mx-auto leading-relaxed">
            لا تتردد في التواصل معنا اليوم. فريقنا مستعد للإجابة على كافة استفساراتك ومساعدتك في اختيار العمالة الأنسب لأسرتك.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="tel:+966500000000"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full text-primary bg-white hover:bg-slate-50 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 w-full sm:w-auto"
            >
              <PhoneCall className="w-5 h-5 ml-2" />
              اتصل بنا الآن
            </a>
            <a
              href="#workers"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full text-white border-2 border-white/30 hover:bg-white/10 transition-all w-full sm:w-auto"
            >
              تصفح السير الذاتية
              <ArrowLeft className="w-5 h-5 mr-2" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
