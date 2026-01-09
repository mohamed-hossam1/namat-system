"use client"
import {
  ShoppingBag,
  Brush,
  LayoutDashboard,
  Code,
  Figma,
  Rocket,
  SquareChartGantt,
  Eye,
  Ban,
  Gauge,
  ArrowUpRight,
  ChevronRight,
  Menu,
  X,
  Github,
  Linkedin,
  Twitter,
  CheckCircle2,
  Monitor,
  Send,
  Zap,
  Shield, Globe, Cpu, Command, Activity, Layers,
} from "lucide-react";

import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';


// --- الثوابت المستخرجة من نظام الألوان الخاص بك ---
const COLORS = {
  background: "#102131",
  foreground: "#132434",
  primary: "#f6b301",
  border: "#2f3e4c",
  secondary: "#b2c2d2",
  frame: "#2f3e4c62",
  badge: "#35c4af",
};

// --- المكونات الفرعية ---

const GlassCard = ({ children, className = "" }) => (
  <motion.div
    whileHover={{ y: -8, transition: { duration: 0.3 } }}
    className={`bg-[#132434]/40 backdrop-blur-xl border border-[#2f3e4c] rounded-3xl overflow-hidden shadow-2xl ${className}`}
  >
    {children}
  </motion.div>
);

const SectionHeader = ({ title, subtitle }) => (
  <div className="text-center mb-20">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl font-bold mb-6 text-white"
    >
      {title}
    </motion.h2>
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className="text-[#b2c2d2] text-lg max-w-2xl mx-auto font-medium"
    >
      {subtitle}
    </motion.p>
  </div>
);

export default function page() {
  

  return (
    <div className="min-h-screen bg-[#102131] text-white font-sans selection:bg-[#f6b301]/30 overflow-x-hidden">

      {/* --- القائمة العلوية Navigation --- */}
      <nav className="fixed top-6 inset-x-0 z-50 max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className="bg-[#132434]/80 backdrop-blur-lg border border-[#2f3e4c] rounded-full px-6 py-3 flex items-center justify-between shadow-xl"
        >
          <div className="flex items-center gap-2 font-bold text-xl tracking-tighter">
            <div className="w-8 h-8 bg-[#f6b301] rounded-lg flex items-center justify-center text-[#102131]">
              <Rocket size={18} />
            </div>
            NAMAT
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#b2c2d2]">
            {[
              { name: "Services", id: "services" },
              { name: "Process", id: "process" },
              { name: "Projects", id: "projects" },
              { name: "Why Us", id: "why-us" },
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="hover:text-white transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          <button className="bg-[#f6b301] text-[#102131] font-bold px-6 py-2 rounded-full text-sm hover:shadow-[0_0_20px_rgba(246,179,1,0.4)] transition-all">
            Login
          </button>
        </motion.div>
      </nav>

      {/* --- قسم الهيرو Hero Section --- */}
      <section className="relative pt-44 pb-24 overflow-hidden min-h-screen flex items-center">
        {/* خلفية تفاعلية Mesh Gradient */}
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#f6b301]/30 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#35c4af]/20 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2f3e4c62] border border-[#2f3e4c] text-[#35c4af] text-sm font-bold mb-8"
            >
              <span className="w-2 h-2 bg-[#35c4af] rounded-full animate-ping" />
              Accepting New Projects
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-8xl font-extrabold tracking-tight mb-8 leading-[1.1]"
            >
              Build Your{" "}
              <span className="text-[#f6b301] relative inline-block">
                Premium
                <motion.span
                  className="absolute bottom-2 left-0 w-full h-2 bg-[#f6b301]/20 -z-10"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.5 }}
                />
              </span>{" "}
              <br />
              E-commerce Websites
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-[#b2c2d2] text-xl max-w-3xl mx-auto leading-relaxed mb-12 font-medium"
            >
              Fast delivery. Custom UI design. Clear process. Your online store,
              built with Next.js & Supabase for performance that converts
              visitors into customers.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap justify-center gap-6"
            >
              <button className="bg-[#f6b301] text-[#102131] px-10 py-5 rounded-2xl font-bold text-lg flex items-center gap-2 hover:scale-105 shadow-[0_20px_50px_rgba(246,179,1,0.2)] transition-all">
                Start Your Project <ArrowUpRight size={20} />
              </button>
              <button className="bg-[#132434]/50 border border-[#2f3e4c] text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-[#2f3e4c] transition-all">
                View Our Work
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- قسم الخدمات Services Section --- */}
      <section id="services" className="py-32 bg-[#132434]/30">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            title="Core Services"
            subtitle="We don't just build websites we craft complete e-commerce ecosystems."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: ShoppingBag,
                title: "E-commerce Development",
                desc: "Robust, scalable online stores built for high performance and sales conversion.",
              },
              {
                icon: Brush,
                title: "UI/UX Design",
                desc: "User-centric designs that look premium and convert visitors into loyal customers.",
              },
              {
                icon: LayoutDashboard,
                title: "Custom Dashboards",
                desc: "Intuitive back-end tools tailored to manage your specific business needs easily.",
              },
              {
                icon: CheckCircle2,
                title: "Ongoing Support",
                desc: "Reliable maintenance and updates to keep your store running smoothly 24/7.",
              },
            ].map((service, idx) => (
              <GlassCard key={idx} className="p-10 group">
                <div className="w-16 h-16 bg-[#2f3e4c62] border border-[#2f3e4c] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#f6b301] group-hover:text-[#102131] transition-all duration-500">
                  <service.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4 leading-tight">
                  {service.title}
                </h3>
                <p className="text-[#b2c2d2] font-medium leading-relaxed">
                  {service.desc}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* --- قسم آلية العمل Process Section --- */}
      

      {/* --- قسم لماذا نحن Why Us Section --- */}
      <section id="why-us" className="py-32 bg-[#132434]/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                Built on Transparency, Trust, and{" "}
                <span className="text-[#f6b301]">Technical Excellence.</span>
              </h2>
              <p className="text-[#b2c2d2] text-lg mb-12 font-medium">
                We understand the local market and the global standards. We
                bridge the gap to deliver world-class software.
              </p>

              <div className="space-y-8">
                {[
                  {
                    icon: Eye,
                    title: "100% Transparency",
                    desc: "Weekly progress previews so you never have to guess where your project stands.",
                  },
                  {
                    icon: Ban,
                    title: "No Generic Templates",
                    desc: "Every line of code and every pixel is crafted specifically for your brand identity.",
                  },
                  {
                    icon: Gauge,
                    title: "Performance First",
                    desc: "Google PageSpeed 90+ score and SEO-optimized from day one.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6 group">
                    <div
                      className={`w-14 h-14 shrink-0 rounded-2xl flex items-center justify-center transition-colors ${
                        idx === 0
                          ? "bg-[#f6b301] text-[#102131]"
                          : "bg-[#2f3e4c62] text-[#f6b301]"
                      }`}
                    >
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                      <p className="text-[#b2c2d2] text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* قالب الكود الاحترافي IDE Block */}
            <motion.div
              whileHover={{ rotateY: -5, rotateX: 5 }}
              className="bg-[#0C141F] rounded-3xl border border-[#2f3e4c] p-8 shadow-2xl relative overflow-hidden"
            >
              <div className="flex gap-2 mb-8">
                <div className="w-3 h-3 rounded-full bg-[#FF5353]" />
                <div className="w-3 h-3 rounded-full bg-[#FFBC1B]" />
                <div className="w-3 h-3 rounded-full bg-[#35c4af]" />
              </div>

              <div className="font-mono text-sm md:text-base space-y-4">
                <p>
                  <span className="text-[#84C0D4]">const</span>{" "}
                  <span className="text-[#FFBC1B]">Project</span> = {"{"}
                </p>
                <p className="pl-6">
                  <span className="text-[#B2C2D2]">client:</span>{" "}
                  <span className="text-[#FDE68A]">'Your Business'</span>,
                </p>
                <p className="pl-6">
                  <span className="text-[#B2C2D2]">solution:</span>{" "}
                  <span className="text-[#FDE68A]">'Custom E-Commerce'</span>,
                </p>
                <p className="pl-6">
                  <span className="text-[#B2C2D2]">quality:</span>{" "}
                  <span className="text-[#FFBC1B]">true</span>,
                </p>
                <p className="pl-6">
                  <span className="text-[#B2C2D2]">template:</span>{" "}
                  <span className="text-[#FF5353]">false</span>,
                </p>
                <p className="pl-6">
                  <span className="text-[#B2C2D2]">delivery:</span>{" "}
                  <span className="text-[#FDE68A]">'On Time'</span>
                </p>
                <p>{"}"}</p>
                <div className="h-4" />
                <p>
                  <span className="text-[#91E3FF]">await</span>{" "}
                  <span className="text-[#FFCC52]">NAMAT</span>.
                  <span className="text-[#84C0D4]">build</span>(Project);
                </p>
                <p className="text-[#B2C2D2] italic">
                  // Ready to launch your vision
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- التذييل Footer --- */}
      <footer className="py-20 border-t border-[#2f3e4c] bg-[#102131]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="flex items-center gap-2 font-bold text-2xl tracking-tighter">
              <div className="w-10 h-10 bg-[#f6b301] rounded-xl flex items-center justify-center text-[#102131]">
                <Rocket size={22} />
              </div>
              NAMAT
            </div>

            <div className="flex flex-wrap justify-center gap-10 text-[#b2c2d2] font-medium">
              <a href="#" className="hover:text-[#f6b301] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-[#f6b301] transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-[#f6b301] transition-colors">
                Facebook
              </a>
              <a href="#" className="hover:text-[#f6b301] transition-colors">
                Tiktok
              </a>
            </div>

            <p className="text-[#2f3e4c] font-bold">© 2026 NAMAT Software</p>
          </div>
        </div>
      </footer>
    </div>
  );
// const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
//   const containerRef = useRef(null);

//   // Parallax / Interaction effects
//   useEffect(() => {
//     const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   const springConfig = { damping: 30, stiffness: 200 };
//   const mouseX = useSpring(mousePos.x, springConfig);
//   const mouseY = useSpring(mousePos.y, springConfig);

//   const { scrollYProgress } = useScroll();
//   const scaleProgress = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

//   return (
//     <div className="min-h-screen bg-[#0f1312] text-[#fff] font-sans selection:bg-[#2fa06f] selection:text-white overflow-x-hidden">
      
//       {/* --- Visual Background Layer --- */}
//       <div className="fixed inset-0 pointer-events-none z-0">
//         <div className="absolute inset-0 opacity-[0.05]" 
//           style={{ 
//             backgroundImage: `linear-gradient(to right, #2fa06f 1px, transparent 1px), linear-gradient(to bottom, #2fa06f 1px, transparent 1px)`, 
//             backgroundSize: '60px 60px' 
//           }} 
//         />
//         <motion.div 
//           animate={{ x: mousePos.x - 300, y: mousePos.y - 300 }}
//           className="absolute w-[600px] h-[600px] bg-[#2fa06f]/5 blur-[120px] rounded-full"
//         />
//       </div>

//       {/* --- Navigation --- */}
//       <nav className="fixed top-6 inset-x-0 z-[100] px-6">
//         <div className="max-w-6xl mx-auto bg-[#161b18]/80 backdrop-blur-xl border border-white/5 rounded-full px-8 py-4 flex items-center justify-between shadow-2xl">
//           <div className="flex items-center gap-3">
//             <div className="w-10 h-10 bg-[#2fa06f] rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(47,160,111,0.3)]">
//               <Zap size={22} className="text-[#0f1312]" />
//             </div>
//             <span className="font-black text-xl tracking-[0.3em] uppercase">NAMAT</span>
//           </div>

//           <div className="hidden md:flex items-center gap-10 text-[11px] font-bold tracking-[0.3em] text-[#d8d8d8]/60">
//             {['Services', 'Process', 'Projects', 'Why Us'].map((item) => (
//               <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="hover:text-[#2fa06f] transition-colors">{item.toUpperCase()}</a>
//             ))}
//           </div>

//           <button className="bg-[#2fa06f] text-white px-6 py-2.5 rounded-full text-[11px] font-black tracking-widest hover:brightness-110 transition-all shadow-lg">
//             LOGIN_PORTAL
//           </button>
//         </div>
//       </nav>

//       {/* --- Hero Section --- */}
//       <header className="relative z-10 pt-44 pb-32 px-6 flex flex-col items-center justify-center text-center">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="mb-8 px-4 py-1.5 border border-[#2fa06f]/30 rounded-full bg-[#2fa06f]/10 text-[#2fa06f] text-[10px] font-black tracking-[0.4em] flex items-center gap-2"
//         >
//           <div className="w-1.5 h-1.5 bg-[#2fa06f] rounded-full animate-pulse" /> 
//           ACCEPTING NEW PROJECTS
//         </motion.div>

//         <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.9] mb-10">
//           BUILD YOUR <br />
//           <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255, 255, 255, 0.4)' }}>PREMIUM</span> <br />
//           ECOSYSTEMS
//         </h1>

//         <p className="max-w-2xl mx-auto text-[#d8d8d8]/60 text-lg md:text-xl font-medium leading-relaxed mb-16 px-4">
//           Fast delivery. Custom UI design. Clear process. <br className="hidden md:block" />
//           Your vision, architected with Next.js & Supabase for peak performance.
//         </p>

//         <div className="flex flex-col sm:flex-row gap-6">
//           <motion.button 
//             whileHover={{ scale: 1.05 }}
//             className="bg-[#2fa06f] text-white px-12 py-5 rounded-2xl font-black text-xs tracking-[0.2em] shadow-[0_0_40px_rgba(47,160,111,0.3)] flex items-center gap-4"
//           >
//             START PROJECT <ArrowUpRight size={18} />
//           </motion.button>
//           <button className="px-12 py-5 rounded-2xl border border-white/10 text-[#d8d8d8] font-black text-xs tracking-[0.2em] hover:bg-white/5 transition-all">
//             VIEW_WORK
//           </button>
//         </div>

//         {/* Floating Labels (Technical Aesthetics) */}
//         <div className="absolute bottom-10 left-12 hidden xl:block text-[8px] font-mono text-[#2fa06f]/40 tracking-[0.5em] [writing-mode:vertical-lr] rotate-180">
//           NAMAT_PROTOCOL_V4.0.1
//         </div>
//         <div className="absolute bottom-10 right-12 hidden xl:block text-[8px] font-mono text-[#2fa06f]/40 tracking-[0.5em] [writing-mode:vertical-lr]">
//           CORE_ESTABLISHED_2026
//         </div>
//       </header>

//       {/* --- Services Section --- */}
//       <section id="services" className="relative z-10 py-32 px-6 max-w-7xl mx-auto">
//         <div className="text-center mb-24">
//           <span className="text-[#2fa06f] text-[10px] font-black tracking-[0.8em] uppercase block mb-4">Core Competencies</span>
//           <h2 className="text-4xl md:text-6xl font-black tracking-tight uppercase">Strategic Solutions.</h2>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {[
//             { icon: ShoppingBag, title: "E-commerce", desc: "Robust, scalable online stores built for high performance." },
//             { icon: Brush, title: "UI/UX Design", desc: "User-centric designs that convert visitors into loyal customers." },
//             { icon: LayoutDashboard, title: "Dashboards", desc: "Intuitive back-end tools tailored to your business needs." },
//             { icon: Shield, title: "Support", desc: "Reliable maintenance and updates to keep you running 24/7." }
//           ].map((s, i) => (
//             <motion.div 
//               key={i}
//               whileHover={{ y: -10 }}
//               className="p-10 bg-[#161b18] border border-white/5 rounded-[40px] group hover:border-[#2fa06f]/30 transition-all shadow-2xl relative overflow-hidden"
//             >
//               <div className="w-14 h-14 bg-[#0f1312] border border-white/10 rounded-2xl flex items-center justify-center mb-10 group-hover:border-[#2fa06f]/50 transition-colors">
//                 <s.icon size={26} className="text-[#2fa06f]" />
//               </div>
//               <h3 className="text-xl font-black mb-4 uppercase leading-none">{s.title}</h3>
//               <p className="text-[#d8d8d8]/50 text-sm leading-relaxed">{s.desc}</p>
//               <div className="mt-8 opacity-0 group-hover:opacity-100 transition-opacity">
//                  <ChevronRight size={18} className="text-[#2fa06f]" />
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* --- Process Section --- */}
//       <section id="process" className="relative z-10 py-32 bg-[#0F1615] border-y border-white/5 px-6">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-32">
//             <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase mb-6">Transparent <br /> Workflow.</h2>
//             <p className="text-[#d8d8d8]/40 text-lg uppercase tracking-widest font-bold">Logic over generic templates.</p>
//           </div>

//           <div className="grid lg:grid-cols-4 gap-12 relative">
//             {/* The Connecting Line */}
//             <div className="absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2fa06f]/20 to-transparent hidden lg:block" />
            
//             {[
//               { icon: Figma, title: "Design", sub: "Wireframes & Custom Prototypes" },
//               { icon: Code, title: "Build", sub: "Clean Code & Integration" },
//               { icon: SquareChartGantt, title: "Review", sub: "Testing & Feedback Loops" },
//               { icon: Rocket, title: "Deploy", sub: "Launch & Continuous Support" }
//             ].map((step, i) => (
//               <div key={i} className="flex flex-col items-center text-center relative z-10">
//                 <div className={`w-24 h-24 rounded-full flex items-center justify-center mb-8 border-2 ${i === 3 ? 'bg-[#2fa06f] border-[#2fa06f] shadow-[0_0_30px_rgba(47,160,111,0.5)]' : 'bg-[#0f1312] border-white/5 shadow-2xl'}`}>
//                   <step.icon size={32} className={i === 3 ? 'text-[#0f1312]' : 'text-[#2fa06f]'} />
//                 </div>
//                 <h4 className="text-xl font-black mb-2 uppercase">{step.title}</h4>
//                 <p className="text-xs text-[#d8d8d8]/30 font-bold uppercase tracking-widest">{step.sub}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* --- Why Us: The Terminal --- */}
//       <section id="why-us" className="relative z-10 py-40 px-6 max-w-7xl mx-auto">
//         <div className="grid lg:grid-cols-2 gap-20 items-center">
//           <div>
//             <h2 className="text-5xl md:text-6xl font-black tracking-tighter leading-none uppercase mb-10">
//               Built on <br /> <span className="text-[#2fa06f]">Excellence.</span>
//             </h2>
//             <div className="space-y-10">
//               {[
//                 { icon: Eye, title: "100% Transparency", sub: "Weekly progress previews." },
//                 { icon: Ban, title: "No Templates", sub: "Crafted specifically for your brand." },
//                 { icon: Gauge, title: "Performance First", sub: "Google PageSpeed 90+ score." }
//               ].map((item, i) => (
//                 <div key={i} className="flex gap-6 items-start group">
//                   <div className="mt-1 w-12 h-12 bg-[#2fa06f]/10 rounded-xl flex items-center justify-center border border-[#2fa06f]/20 group-hover:bg-[#2fa06f]/20 transition-all shrink-0">
//                     <item.icon size={20} className="text-[#2fa06f]" />
//                   </div>
//                   <div>
//                     <h5 className="text-lg font-black uppercase mb-1">{item.title}</h5>
//                     <p className="text-sm text-[#d8d8d8]/50 leading-relaxed">{item.sub}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Glass Terminal */}
//           <div className="relative group">
//             <div className="absolute inset-0 bg-[#2fa06f]/10 blur-[100px] rounded-full group-hover:bg-[#2fa06f]/15 transition-all" />
//             <div className="relative bg-[#161b18]/80 backdrop-blur-3xl border border-white/10 rounded-[40px] p-10 font-mono text-[13px] shadow-2xl">
//               <div className="flex gap-2 mb-10">
//                 <div className="w-3 h-3 rounded-full bg-red-500/30" />
//                 <div className="w-3 h-3 rounded-full bg-yellow-500/30" />
//                 <div className="w-3 h-3 rounded-full bg-[#2fa06f]/30" />
//               </div>
//               <div className="space-y-3">
//                 <p className="text-[#2fa06f]"><span className="text-white/40">const</span> NAMAT <span className="text-white/40">=</span> async <span className="text-white/40">() =&gt; &#123;</span></p>
//                 <p className="pl-6 text-[#d8d8d8]/60">quality: <span className="text-[#2fa06f]">"uncompromised"</span>,</p>
//                 <p className="pl-6 text-[#d8d8d8]/60">template: <span className="text-red-400">false</span>,</p>
//                 <p className="pl-6 text-[#d8d8d8]/60">delivery: <span className="text-[#2fa06f]">"optimized"</span></p>
//                 <p className="pl-6 text-white/40">// bridge the gap</p>
//                 <p className="pl-6 text-[#2fa06f]">await <span className="text-white">deployVision()</span>;</p>
//                 <p className="text-white/40">&#125;;</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* --- Footer --- */}
//       <footer className="relative z-10 py-24 px-6 border-t border-white/5 bg-[#0F1615]">
//         <div className="max-w-7xl mx-auto">
//           <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 mb-20">
//             <div className="flex items-center gap-4">
//                <Zap size={32} className="text-[#2fa06f]" />
//                <span className="font-black text-2xl tracking-[0.4em] uppercase">NAMAT</span>
//             </div>
//             <div className="flex gap-12 text-[10px] font-black tracking-[0.3em] text-[#d8d8d8]/40 uppercase">
//                <a href="#" className="hover:text-white transition-colors">Tiktok</a>
//                <a href="#" className="hover:text-white transition-colors">Facebook</a>
//                <a href="#" className="hover:text-white transition-colors">Twitter</a>
//             </div>
//           </div>
          
//           <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 gap-6">
//             <p className="text-[10px] font-bold text-[#d8d8d8]/20 tracking-[0.5em] uppercase">© 2026 NAMAT ARCHITECTURAL SOFTWARE. ALL SYSTEMS READY.</p>
//             <div className="flex gap-8 text-[10px] font-bold text-[#d8d8d8]/20 tracking-[0.5em] uppercase">
//                <a href="#">Privacy</a>
//                <a href="#">Terms</a>
//             </div>
//           </div>
//         </div>
//       </footer>

//       {/* Custom Styles for Kinetic Typography & Polish */}
//       <style dangerouslySetInnerHTML={{ __html: `
//         @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
//         body { font-family: 'Space Grotesk', sans-serif; }
//         .text-outline { -webkit-text-stroke: 1px rgba(255,255,255,0.3); color: transparent; }
//       `}} />

//     </div>);

}
