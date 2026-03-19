import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-3xl font-bold text-primary">QSR</span>
              <span className="text-sm font-medium text-white leading-tight">
                مكتب الإسناد السريع<br />للاستقدام
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              شريكك الأمثل لاستقدام العمالة المنزلية والسائقين الخاصين. نوفر لك أفضل الكوادر بخبرة وموثوقية عالية لضمان راحة أسرتك.
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <a href="#" className="text-slate-400 hover:text-primary transition-colors">
                <span className="sr-only">Facebook</span>
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-primary transition-colors">
                <span className="sr-only">Twitter</span>
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-primary transition-colors">
                <span className="sr-only">Instagram</span>
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-primary transition-colors">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">روابط سريعة</h3>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="text-sm hover:text-primary transition-colors">الرئيسية</Link>
              </li>
              <li>
                <Link href="#services" className="text-sm hover:text-primary transition-colors">خدماتنا</Link>
              </li>
              <li>
                <Link href="#packages" className="text-sm hover:text-primary transition-colors">باقات الاستقدام</Link>
              </li>
              <li>
                <Link href="#workers" className="text-sm hover:text-primary transition-colors">عاملاتنا</Link>
              </li>
              <li>
                <Link href="#faq" className="text-sm hover:text-primary transition-colors">الأسئلة الشائعة</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">خدماتنا</h3>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="text-sm hover:text-primary transition-colors">استقدام عمالة منزلية</Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-primary transition-colors">استقدام سائقين خاصين</Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-primary transition-colors">نقل الخدمات</Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-primary transition-colors">تخليص الإجراءات</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">تواصل معنا</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-primary ml-3 mt-0.5 flex-shrink-0" />
                <span className="text-sm leading-relaxed">المملكة العربية السعودية، الرياض، شارع التحلية، مبنى رقم 123</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-primary ml-3 flex-shrink-0" />
                <a href="tel:+966500000000" className="text-sm hover:text-primary transition-colors" dir="ltr">+966 50 000 0000</a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-primary ml-3 flex-shrink-0" />
                <a href="mailto:info@qsr-sa.com" className="text-sm hover:text-primary transition-colors">info@qsr-sa.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} مكتب الإسناد السريع للاستقدام. جميع الحقوق محفوظة.
          </p>
          <div className="flex space-x-6 space-x-reverse text-sm text-slate-500">
            <Link href="#" className="hover:text-white transition-colors">سياسة الخصوصية</Link>
            <Link href="#" className="hover:text-white transition-colors">الشروط والأحكام</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
