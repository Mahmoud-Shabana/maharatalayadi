'use client';

import Image from 'next/image';
import { CheckCircle, Clock, Shield, Users } from 'lucide-react';
import { motion } from 'motion/react';

export function Features() {
  const features = [
    {
      title: 'خبرة وموثوقية',
      description: 'نمتلك سنوات من الخبرة في مجال الاستقدام، ونعمل وفق أعلى معايير الجودة والموثوقية لضمان رضا عملائنا.',
      icon: Shield,
    },
    {
      title: 'سرعة الإنجاز',
      description: 'نحرص على إنهاء كافة الإجراءات بأسرع وقت ممكن لضمان وصول العمالة في الموعد المحدد دون تأخير.',
      icon: Clock,
    },
    {
      title: 'كوادر مدربة',
      description: 'ننتقي العمالة بعناية فائقة ونضمن حصولهم على التدريب اللازم قبل وصولهم للعمل لديك.',
      icon: Users,
    },
    {
      title: 'دعم مستمر',
      description: 'فريق خدمة العملاء لدينا متاح دائماً للرد على استفساراتكم ومتابعة أي ملاحظات بعد وصول العمالة.',
      icon: CheckCircle,
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-transparent text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">لماذا تختار الإسناد السريع؟</h2>
            <p className="text-lg text-slate-300 mb-10 leading-relaxed">
              نحن لسنا مجرد مكتب استقدام، بل شريكك الموثوق في توفير الراحة والأمان لأسرتك. نتميز بالشفافية، السرعة، والالتزام التام بتقديم أفضل الكوادر البشرية.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex flex-col">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://picsum.photos/seed/office/800/600"
                alt="Office"
                fill
                className="object-cover opacity-80"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-8 right-8 left-8 bg-white/10 backdrop-blur-md p-6 rounded-2xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-3xl font-bold text-white mb-1">+10,000</p>
                    <p className="text-slate-400 text-sm">عميل سعيد بخدماتنا</p>
                  </div>
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
