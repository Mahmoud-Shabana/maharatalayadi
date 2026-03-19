'use client';

import { Briefcase, Car, Users, FileCheck, ShieldCheck, Clock } from 'lucide-react';
import { motion } from 'motion/react';

export function Services() {
  const services = [
    {
      title: 'استقدام عمالة منزلية',
      description: 'نوفر لك أفضل الكوادر من الخادمات والمربيات المدربات على أعلى مستوى لضمان راحة أسرتك.',
      icon: Users,
    },
    {
      title: 'استقدام سائقين خاصين',
      description: 'سائقون ذوو خبرة وكفاءة عالية، معتمدون وموثوقون لضمان تنقلاتك بأمان وسهولة.',
      icon: Car,
    },
    {
      title: 'نقل الخدمات',
      description: 'خدمة نقل كفالة العمالة المنزلية بسرعة وسهولة وفقاً للأنظمة واللوائح الرسمية.',
      icon: Briefcase,
    },
    {
      title: 'تعدد الجنسيات',
      description: 'نقدم خيارات واسعة من العمالة من مختلف الجنسيات لتلبية كافة احتياجاتك وتفضيلاتك.',
      icon: FileCheck,
    },
    {
      title: 'متابعة الإجراءات',
      description: 'نقوم بمتابعة كافة الإجراءات الحكومية والرسمية نيابة عنك لضمان وصول العمالة في الوقت المحدد.',
      icon: Clock,
    },
    {
      title: 'ضمان وخدمة ما بعد البيع',
      description: 'نلتزم بتقديم ضمان لمدة 90 يوماً مع خدمة عملاء متميزة لمتابعة رضاك عن العمالة.',
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">ماذا نقدم لك؟</h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            في الإسناد السريع، نحرص على تقديم خدمات متكاملة تلبي كافة احتياجاتك من العمالة المنزلية بأعلى معايير الجودة والموثوقية.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 rounded-2xl p-8 hover:bg-white/10 transition-all group"
            >
              <div className="w-14 h-14 bg-slate-800 rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <service.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
