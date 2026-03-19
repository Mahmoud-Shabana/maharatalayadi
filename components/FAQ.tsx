'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function FAQ() {
  const faqs = [
    {
      question: 'ما هي مدة الاستقدام المتوقعة؟',
      answer: 'تختلف مدة الاستقدام بناءً على الجنسية المطلوبة، ولكننا نحرص في الإسناد السريع للاستقدام على إنهاء كافة الإجراءات في أسرع وقت ممكن، وعادة ما تتراوح المدة بين 30 إلى 60 يوماً.',
    },
    {
      question: 'هل يوجد ضمان على العمالة؟',
      answer: 'نعم، نقدم ضماناً لمدة 90 يوماً على العمالة المنزلية يشمل حالات رفض العمل، الهروب، أو عدم الكفاءة الصحية، وفقاً للأنظمة واللوائح المعتمدة.',
    },
    {
      question: 'ما هي الجنسيات المتاحة للاستقدام؟',
      answer: 'نوفر عمالة منزلية من عدة دول مصرح بها مثل الفلبين، إندونيسيا، كينيا، أوغندا، وسريلانكا، لتلبية مختلف احتياجات وتفضيلات عملائنا.',
    },
    {
      question: 'هل يمكنني اختيار العاملة بنفسي؟',
      answer: 'بالتأكيد، نوفر لك مجموعة واسعة من السير الذاتية المفصلة لتتمكن من اختيار العاملة التي تناسب متطلبات أسرتك من حيث الخبرة، العمر، والمهارات.',
    },
    {
      question: 'ما هي طرق الدفع المتاحة؟',
      answer: 'نوفر خيارات دفع متعددة وآمنة تشمل التحويل البنكي، البطاقات الائتمانية، والدفع عبر منصة مساند لضمان راحة عملائنا.',
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 sm:py-20 bg-transparent">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-200 mb-4">كل ما تحتاج معرفته ❓</h2>
          <p className="text-lg text-slate-400">
            جمعنا لك إجابات لأكثر الأسئلة شيوعاً حول خدماتنا وإجراءات الاستقدام.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-white/5 rounded-2xl overflow-hidden transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex items-center justify-between w-full p-6 text-right focus:outline-none"
              >
                <span className="text-lg font-bold text-slate-200">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-500 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180 text-primary' : ''
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-6 pt-0 text-slate-400 leading-relaxed mt-2">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
