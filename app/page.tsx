import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { LicensedBy } from '@/components/LicensedBy';
import { VideoGuide } from '@/components/VideoGuide';
import { Services } from '@/components/Services';
import { Packages } from '@/components/Packages';
import { MaarofaPackages } from '@/components/MaarofaPackages';
import { MusanedRating } from '@/components/MusanedRating';
import { Workers } from '@/components/Workers';
import { Features } from '@/components/Features';
import { FAQ } from '@/components/FAQ';
import { CTA } from '@/components/CTA';
import { Footer } from '@/components/Footer';
import { FloatingActions } from '@/components/FloatingActions';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0D1117]">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <LicensedBy />
        <VideoGuide />
        
        {/* Shared Animated Background Wrapper for all sections from Packages to CTA */}
        <section className="relative overflow-hidden bg-[#0D1117]">
          {/* Background Decorations (Static) */}
          <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-teal-500/10 rounded-full blur-[160px] -translate-y-1/2 pointer-events-none"></div>
          <div className="absolute bottom-0 right-1/4 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-[160px] translate-y-1/2 pointer-events-none"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-teal-500/5 via-transparent to-emerald-500/5 blur-[120px] pointer-events-none"></div>
          
          {/* Turquoise Brush Effect on the Right - Enhanced */}
          <div className="absolute right-0 top-0 bottom-0 w-[500px] bg-teal-500/5 blur-[140px] rounded-l-full pointer-events-none"></div>
          <div className="absolute -right-40 top-0 bottom-0 w-96 bg-gradient-to-l from-teal-500/15 via-emerald-500/5 to-transparent blur-[120px] rounded-full pointer-events-none"></div>
          <div className="absolute right-0 top-1/4 w-[200px] h-[400px] bg-teal-400/10 blur-[80px] rounded-l-full pointer-events-none"></div>
          
          {/* Left Side Subtle Glow */}
          <div className="absolute left-0 top-1/4 w-[400px] h-[800px] bg-teal-500/5 blur-[130px] rounded-r-full pointer-events-none"></div>

          {/* Animated Background Blobs - More Dynamic */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-[5%] left-[10%] w-[600px] h-[600px] bg-teal-500/5 rounded-full blur-[120px] animate-pulse"></div>
            <div className="absolute top-[30%] right-[10%] w-[700px] h-[700px] bg-emerald-500/5 rounded-full blur-[140px] animate-pulse" style={{ animationDelay: '3s' }}></div>
            <div className="absolute top-[60%] left-[20%] w-[550px] h-[550px] bg-cyan-500/5 rounded-full blur-[110px] animate-pulse" style={{ animationDelay: '6s' }}></div>
            <div className="absolute bottom-[10%] right-[20%] w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>

          {/* Dot Pattern Overlay */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#14b8a6 0.5px, transparent 0.5px)', backgroundSize: '50px 50px' }}></div>
          
          {/* Content Sections */}
          <div className="relative z-10 space-y-0">
            <Packages />
            <MaarofaPackages />
            <MusanedRating />
            <Services />
            <Workers />
            <Features />
            <FAQ />
            <CTA />
          </div>
        </section>
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
