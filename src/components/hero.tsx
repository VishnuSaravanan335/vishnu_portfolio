"use client";

import { motion } from "framer-motion";
import { Download, Mail, ArrowRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden text-center">
      
      {/* Large Background Text - Subtle Parallax */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-auto z-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1, y: [0, -15, 0] }}
          transition={{ 
            opacity: { duration: 2 },
            y: { duration: 15, repeat: Infinity, ease: "linear" }
          }}
          className="flex items-center justify-center w-full"
        >
          <span className="text-[5vw] md:text-[6vw] lg:text-[7vw] font-black tracking-tight text-slate-500/10 dark:text-slate-200/[0.03] whitespace-nowrap cursor-crosshair transition-all duration-700 hover:text-primary/20 hover:drop-shadow-[0_0_50px_rgba(var(--primary),0.5)] select-none">
            AWS Cloud DevOps Engineer
          </span>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center justify-center pointer-events-none -mt-10 md:-mt-16">
        
        {/* Profile Image Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mb-10 pointer-events-auto mt-8 md:mt-0"
        >
          <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 mx-auto group cursor-pointer">
            {/* Soft Gradient Ring */}
            <div className="absolute -inset-3 md:-inset-4 bg-gradient-to-tr from-primary/30 via-accent/20 to-secondary/30 rounded-full blur-xl md:blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-700 animate-[spin_8s_linear_infinite]" />
            <div className="glass rounded-full w-full h-full p-1 md:p-1.5 relative flex items-center justify-center overflow-hidden border border-primary/20 shadow-2xl transition-all group-hover:scale-[1.03] group-hover:border-primary/50 duration-500">
              <div className="relative w-full h-full rounded-full overflow-hidden bg-transparent flex items-center justify-center">
                <Image 
                  src="/profile.jpg" 
                  alt="Vishnu Saravanan" 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  priority
                />
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
          className="flex flex-col items-center gap-8 max-w-4xl pointer-events-auto"
        >
          {/* Main Name */}
          <motion.h1 
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter drop-shadow-sm"
          >
            Hi, I'm <br className="sm:hidden" />
            <span className="text-gradient">Vishnu</span>
          </motion.h1>
          
          {/* Typography Hierarchy Fix: Title -> Subtitle */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col items-center gap-3"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-foreground tracking-tight drop-shadow-sm px-4">
              AWS Cloud DevOps Engineer
            </h2>
            <motion.div
              animate={{ opacity: [1, 0.7, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="text-base md:text-lg lg:text-xl font-medium text-muted-foreground flex items-center gap-2 flex-wrap justify-center px-4"
            >
              <span>Cloud Enthusiast</span>
              <span className="text-primary/60 px-1">•</span>
              <span>CI/CD</span>
              <span className="text-primary/60 px-1">•</span>
              <span>Automation</span>
            </motion.div>
          </motion.div>
          
          <p className="text-base md:text-lg text-muted-foreground/80 leading-relaxed text-center max-w-2xl px-6">
            Building Scalable, Automated and Cloud-Native Solutions Through DevOps Best Practices.
          </p>
          
          {/* Enhanced CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-4 md:gap-6 pt-4 w-full px-4"
          >
            <Link href="#contact" className="group relative inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground rounded-full font-bold hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(var(--primary),0.2)] hover:shadow-[0_0_30px_rgba(var(--primary),0.5)] overflow-hidden w-full sm:w-auto">
              <span className="relative z-10 flex items-center gap-2">
                Contact Me <Mail className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300 ease-out" />
            </Link>
            <a href="/VISHNU_Resume.pdf" download className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-transparent text-foreground border-2 border-accent/50 rounded-full font-bold hover:bg-accent/5 hover:border-accent hover:scale-105 transition-all duration-300 w-full sm:w-auto">
              Resume <Download className="h-4 w-4 group-hover:translate-y-1 transition-transform duration-300 text-accent" />
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex items-center justify-center gap-6 pt-6"
          >
            <Link href="https://github.com/VishnuSaravanan335" target="_blank" className="p-4 glass rounded-full hover:text-primary transition-all hover:scale-110 hover:-translate-y-1">
              <FaGithub className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="https://www.linkedin.com/in/vishnu3335" target="_blank" className="p-4 glass rounded-full hover:text-primary transition-all hover:scale-110 hover:-translate-y-1">
              <FaLinkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-6 right-6 md:bottom-10 md:right-10 flex flex-col items-center text-muted-foreground hidden sm:flex"
      >
        <span className="text-[10px] font-bold uppercase tracking-widest mb-3 text-muted-foreground/50">Scroll</span>
        <div className="w-[2px] h-12 bg-muted-foreground/20 rounded-full overflow-hidden relative">
          <motion.div 
            animate={{ y: ['-100%', '200%'] }} 
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }} 
            className="w-full h-1/2 bg-primary absolute top-0 left-0" 
          />
        </div>
      </motion.div>
    </section>
  );
}
