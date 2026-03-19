import type {Metadata} from 'next';
import { Cairo } from 'next/font/google';
import './globals.css'; // Global styles

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  variable: '--font-cairo',
});

export const metadata: Metadata = {
  title: 'مهارات الايادي للاستقدام',
  description: 'تصفح سيفيهات العمالة المنزلية الآن واعثر على خادمات، مربيات، وسائقين بخبرة موثقة.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="ar" dir="ltr" className={`${cairo.variable}`}>
      <body dir="rtl" className="font-sans antialiased text-slate-200 bg-slate-950" suppressHydrationWarning>{children}</body>
    </html>
  );
}
