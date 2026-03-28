import React from 'react';
import { motion } from 'motion/react';
import { 
  Search, 
  UserPlus, 
  Building2, 
  Stethoscope, 
  Calendar, 
  ShieldCheck, 
  ChevronRight,
  Star,
  ArrowRight,
  Globe,
  GraduationCap,
  HeartPulse,
  Activity
} from 'lucide-react';
import { cn } from './lib/utils';
import { TTSButton } from './components/TTSButton';

// --- Components ---

const Navbar = () => (
  <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-20 items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
            <Activity className="text-white w-6 h-6" />
          </div>
          <span className="text-2xl font-bold tracking-tight text-slate-900">OneMed</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#patients" className="hover:text-blue-600 transition-colors">For Patients</a>
          <a href="#doctors" className="hover:text-blue-600 transition-colors">For Doctors</a>
          <a href="#clinics" className="hover:text-blue-600 transition-colors">For Clinics</a>
          <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden sm:block text-sm font-semibold text-slate-900 hover:text-blue-600">Log in</button>
          <button className="bg-blue-600 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
            Join OneMed
          </button>
        </div>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative pt-20 pb-32 overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30">
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-400 blur-[120px] rounded-full" />
      <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-indigo-300 blur-[100px] rounded-full" />
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          The Future of Healthcare is Here
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
          The Operating System for <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Modern Healthcare</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 leading-relaxed mb-10">
          Connect with trusted doctors, book top-tier clinics, and manage your health journey in one premium ecosystem.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-2xl text-lg font-bold hover:bg-slate-800 transition-all group">
            <Search className="w-5 h-5" />
            Find a Doctor
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-slate-900 border-2 border-slate-100 px-8 py-4 rounded-2xl text-lg font-bold hover:border-blue-200 transition-all">
            <Stethoscope className="w-5 h-5 text-blue-600" />
            Join as Doctor
          </button>
        </div>

        <div className="mt-12">
          <TTSButton text="OneMed is the operating system for modern healthcare. Connect with trusted doctors, book top-tier clinics, and manage your health journey in one premium ecosystem. Find a doctor or join as a medical professional today." />
        </div>
      </motion.div>
    </div>
  </section>
);

const TrustBlock = () => (
  <section className="py-12 bg-slate-50 border-y border-slate-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {[
          { label: 'Verified Doctors', value: '12,000+' },
          { label: 'Active Patients', value: '500k+' },
          { label: 'Partner Clinics', value: '850+' },
          { label: 'Success Rate', value: '99.9%' },
        ].map((stat, i) => (
          <div key={i} className="text-center">
            <div className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
            <div className="text-sm font-medium text-slate-500 uppercase tracking-wide">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const HowItWorks = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How OneMed Works</h2>
        <p className="text-slate-600">Your health journey simplified in three simple steps.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-12 relative">
        <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 z-0" />
        
        {[
          { icon: Search, title: 'Search', desc: 'Find the best doctors and clinics based on reviews and expertise.' },
          { icon: Calendar, title: 'Book', desc: 'Schedule your appointment instantly with real-time availability.' },
          { icon: HeartPulse, title: 'Get Care', desc: 'Receive premium medical care and manage your records digitally.' },
        ].map((step, i) => (
          <div key={i} className="relative z-10 flex flex-col items-center text-center bg-white p-6">
            <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-xl shadow-blue-200">
              <step.icon className="text-white w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
            <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const AudienceSection = () => {
  const [activeTab, setActiveTab] = React.useState<'patients' | 'doctors' | 'clinics'>('patients');

  const content = {
    patients: {
      title: "Healthcare on Your Terms",
      desc: "Stop waiting weeks for a specialist. Access top-tier medical professionals instantly.",
      features: ["Instant Booking", "Verified Reviews", "Digital Health Records", "Telemedicine Ready"],
      cta: "Find Your Doctor",
      image: "https://picsum.photos/seed/patient/800/600"
    },
    doctors: {
      title: "Grow Your Practice",
      desc: "Automate your scheduling and build a powerful digital brand that attracts more patients.",
      features: ["Smart Scheduling", "Patient Management", "Brand Building", "Revenue Optimization"],
      cta: "Join the Network",
      image: "https://picsum.photos/seed/doctor/800/600"
    },
    clinics: {
      title: "Digital Transformation",
      desc: "Optimize your clinic operations and maximize patient throughput with our OS.",
      features: ["Resource Management", "OR Scheduling", "Staff Optimization", "Analytics Dashboard"],
      cta: "Partner With Us",
      image: "https://picsum.photos/seed/clinic/800/600"
    }
  };

  return (
    <section className="py-24 bg-slate-50" id="audiences">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 bg-white rounded-2xl shadow-sm border border-slate-200">
            {(['patients', 'doctors', 'clinics'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "px-8 py-3 rounded-xl text-sm font-bold transition-all capitalize",
                  activeTab === tab ? "bg-blue-600 text-white shadow-md" : "text-slate-500 hover:text-slate-900"
                )}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
              {content[activeTab].title}
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              {content[activeTab].desc}
            </p>
            <ul className="space-y-4 mb-10">
              {content[activeTab].features.map((f, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                    <ShieldCheck className="w-4 h-4 text-blue-600" />
                  </div>
                  {f}
                </li>
              ))}
            </ul>
            <button className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-slate-800 transition-all flex items-center gap-2">
              {content[activeTab].cta}
              <ArrowRight className="w-5 h-5" />
            </button>
            <div className="mt-8">
              <TTSButton text={`${content[activeTab].title}. ${content[activeTab].desc}`} />
            </div>
          </motion.div>

          <motion.div
            key={`${activeTab}-img`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <img src={content[activeTab].image} alt={activeTab} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-[240px]">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Star className="w-5 h-5 text-green-600 fill-green-600" />
                </div>
                <div className="text-sm font-bold">Top Rated</div>
              </div>
              <p className="text-xs text-slate-500">Trusted by thousands of professionals worldwide.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const FutureModules = () => (
  <section className="py-24 bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Scalable Ecosystem</h2>
        <p className="text-slate-600">OneMed is built for the future of global healthcare.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          { icon: Globe, title: 'Medical Tourism', desc: 'Access world-class surgeries and treatments globally with full concierge support.' },
          { icon: GraduationCap, title: 'Medical Education', desc: 'Continuous learning platform for doctors and medical students with AI insights.' },
          { icon: ShieldCheck, title: 'Smart Insurance', desc: 'Integrated insurance modules for seamless claims and coverage management.' },
        ].map((item, i) => (
          <div key={i} className="group p-8 rounded-3xl border border-slate-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-50 transition-all">
            <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
              <item.icon className="text-slate-600 w-7 h-7 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
            <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
            <div className="mt-6 flex items-center gap-2 text-blue-600 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
              Coming Soon <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FinalCTA = () => (
  <section className="py-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative bg-blue-600 rounded-[40px] p-12 md:p-24 overflow-hidden text-center">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-white blur-[120px] rounded-full" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-white blur-[120px] rounded-full" />
        </div>
        
        <div className="relative z-10">
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tight">
            Ready to Transform Your <br /> Healthcare Experience?
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Join the OneMed ecosystem today and be part of the most advanced healthcare network in the world.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="w-full sm:w-auto bg-white text-blue-600 px-10 py-5 rounded-2xl text-xl font-bold hover:bg-blue-50 transition-all shadow-xl">
              Get Started Now
            </button>
            <button className="w-full sm:w-auto bg-blue-700 text-white border border-blue-500 px-10 py-5 rounded-2xl text-xl font-bold hover:bg-blue-800 transition-all">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-slate-900 text-slate-300 py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-4 gap-12 mb-16">
        <div>
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <Activity className="text-white w-5 h-5" />
            </div>
            <span className="text-xl font-bold text-white">OneMed</span>
          </div>
          <p className="text-sm leading-relaxed">
            The Operating System for Modern Healthcare. Building a global ecosystem for patients, doctors, and clinics.
          </p>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-6">Platform</h4>
          <ul className="space-y-4 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">For Patients</a></li>
            <li><a href="#" className="hover:text-white transition-colors">For Doctors</a></li>
            <li><a href="#" className="hover:text-white transition-colors">For Clinics</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Operating Rooms</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Company</h4>
          <ul className="space-y-4 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Future</h4>
          <ul className="space-y-4 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Medical Tourism</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Education</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Smart Insurance</a></li>
          </ul>
        </div>
      </div>
      
      <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
        <p>© 2026 OneMed Technologies Inc. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
        </div>
      </div>
    </div>
  </footer>
);

const BlogSection = () => (
  <section className="py-24 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div className="max-w-xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Medical Insights & Education</h2>
          <p className="text-slate-600">Stay informed with the latest healthcare trends, research, and professional advice from our global network.</p>
        </div>
        <button className="text-blue-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
          View All Articles <ArrowRight className="w-5 h-5" />
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          { 
            tag: 'Research', 
            title: 'The Impact of AI on Surgical Precision', 
            author: 'Dr. Sarah Chen', 
            img: 'https://picsum.photos/seed/med1/600/400' 
          },
          { 
            tag: 'Patient Care', 
            title: '5 Ways to Optimize Your Post-Op Recovery', 
            author: 'OneMed Health Team', 
            img: 'https://picsum.photos/seed/med2/600/400' 
          },
          { 
            tag: 'Technology', 
            title: 'Digital Transformation in Modern Clinics', 
            author: 'Mark Thompson', 
            img: 'https://picsum.photos/seed/med3/600/400' 
          },
        ].map((post, i) => (
          <div key={i} className="bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all group cursor-pointer">
            <div className="aspect-video overflow-hidden">
              <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
            </div>
            <div className="p-6">
              <div className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">{post.tag}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">{post.title}</h3>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-50">
                <div className="w-8 h-8 rounded-full bg-slate-100" />
                <div className="text-sm font-medium text-slate-500">By {post.author}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <main>
        <Hero />
        <TrustBlock />
        <HowItWorks />
        <AudienceSection />
        <FutureModules />
        <BlogSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
