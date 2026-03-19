'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { MapPin, Star, Briefcase, Calendar } from 'lucide-react';

export function Workers() {
  const workers = [
    {
      id: 1,
      name: 'ماري جين',
      nationality: 'الفلبين',
      job: 'عاملة منزلية',
      experience: '4 سنوات',
      rating: 4.8,
      image: 'https://picsum.photos/seed/worker1/400/400',
      skills: ['الطبخ', 'التنظيف', 'رعاية الأطفال'],
    },
    {
      id: 2,
      name: 'سيتي نور',
      nationality: 'إندونيسيا',
      job: 'مربية أطفال',
      experience: '6 سنوات',
      rating: 4.9,
      image: 'https://picsum.photos/seed/worker2/400/400',
      skills: ['رعاية الرضع', 'الإسعافات الأولية', 'الترتيب'],
    },
    {
      id: 3,
      name: 'أحمد خان',
      nationality: 'باكستان',
      job: 'سائق خاص',
      experience: '8 سنوات',
      rating: 4.7,
      image: 'https://picsum.photos/seed/worker3/400/400',
      skills: ['رخصة قيادة سارية', 'معرفة بالطرق', 'صيانة دورية'],
    },
    {
      id: 4,
      name: 'سارة كيم',
      nationality: 'كينيا',
      job: 'عاملة منزلية',
      experience: '3 سنوات',
      rating: 4.6,
      image: 'https://picsum.photos/seed/worker4/400/400',
      skills: ['التنظيف العميق', 'الكي', 'اللغة الإنجليزية'],
    },
  ];

  return (
    <section id="workers" className="py-16 sm:py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">تعرف على عاملاتنا</h2>
            <p className="text-lg text-slate-400">
              نخبة من العمالة المنزلية المدربة والمؤهلة لتلبية كافة احتياجات أسرتك. تصفح السير الذاتية واختر الأنسب لك.
            </p>
          </div>
          <a
            href="tel:+966500000000"
            className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary text-primary font-bold rounded-full hover:bg-primary hover:text-white transition-colors whitespace-nowrap"
          >
            عرض جميع السير الذاتية
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {workers.map((worker, index) => (
            <motion.div
              key={worker.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 rounded-2xl overflow-hidden hover:-translate-y-1 transition-all group"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={worker.image}
                  alt={worker.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-slate-900/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-white flex items-center gap-1 shadow-sm">
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                  {worker.rating}
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{worker.name}</h3>
                    <p className="text-primary font-medium text-sm">{worker.job}</p>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-slate-400 text-sm">
                    <MapPin className="w-4 h-4 ml-2 text-slate-500" />
                    الجنسية: <span className="font-medium text-slate-200 mr-1">{worker.nationality}</span>
                  </div>
                  <div className="flex items-center text-slate-400 text-sm">
                    <Briefcase className="w-4 h-4 ml-2 text-slate-500" />
                    الخبرة: <span className="font-medium text-slate-200 mr-1">{worker.experience}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {worker.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-slate-800 text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <a
                  href="tel:+966500000000"
                  className="block w-full text-center py-3 rounded-xl font-bold bg-slate-800 text-white hover:bg-primary hover:text-white hover:border-primary transition-colors"
                >
                  طلب السيرة الذاتية
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
