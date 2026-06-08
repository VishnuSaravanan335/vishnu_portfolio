"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, Building2, ChevronRight, CheckCircle2, BarChart, Database } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-background">
      {/* Background gradients for the section */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-96 h-96 bg-accent/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary">
            Experience
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary via-accent to-secondary rounded-full shadow-[0_0_15px_rgba(var(--primary),0.5)]"></div>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="group relative"
          >
            {/* Futuristic container with animated glowing shadow - softened glow */}
            <div className="absolute -inset-1 bg-gradient-to-br from-primary via-accent to-secondary rounded-3xl opacity-10 group-hover:opacity-20 transition duration-1000 blur-lg group-hover:blur-xl animate-pulse"></div>

            <div className="relative bg-background/80 backdrop-blur-2xl p-1 md:p-2 rounded-3xl border border-primary/20 shadow-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(var(--primary),0.15)]">
              <div className="bg-background/90 rounded-[1.3rem] overflow-hidden relative z-10">

                {/* Header Banner */}
                <div className="h-24 md:h-32 w-full bg-gradient-to-r from-primary/20 via-accent/10 to-secondary/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(var(--primary),0.05)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px] animate-[slide_3s_linear_infinite]"></div>
                </div>

                <div className="px-6 pb-8 md:px-10 md:pb-10">
                  <div className="flex flex-col md:flex-row md:items-end gap-6 -mt-12 mb-8 relative z-10">

                    {/* Logo */}
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-background border border-primary/30 shadow-[0_0_30px_rgba(var(--primary),0.2)] overflow-hidden flex items-center justify-center relative group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500 z-20 hover:shadow-[0_0_40px_rgba(var(--primary),0.4)]">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 group-hover:opacity-50 transition-opacity duration-300"></div>
                      <div className="text-center relative z-10">
                        <span className="font-black text-3xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-br from-primary via-accent to-secondary drop-shadow-md">OXI</span>
                        <span className="font-bold text-sm block text-muted-foreground tracking-widest mt-1">.AI</span>
                      </div>
                    </div>

                    {/* Titles */}
                    <div className="flex-1 pb-2">
                      <h3 className="text-2xl md:text-4xl font-black text-foreground tracking-tight group-hover:text-primary transition-colors duration-300">Data Analyst Intern</h3>
                      <p className="text-lg md:text-xl text-muted-foreground font-medium flex items-center gap-2 mt-1">
                        <Building2 className="h-5 w-5 text-primary" /> OXI.AI, Coimbatore (Hybrid)
                      </p>
                    </div>

                    {/* Date Badge */}
                    <div className="pb-2">
                      <div className="inline-flex items-center gap-2 text-sm font-bold text-accent bg-accent/10 px-4 py-2.5 rounded-xl border border-accent/20 shadow-inner group-hover:bg-accent/20 transition-colors">
                        <Calendar className="h-4 w-4" /> May 2025 - Jun 2025
                      </div>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="grid md:grid-cols-3 gap-8">

                    {/* Left Sidebar (Meta info) */}
                    <div className="md:col-span-1 space-y-6">
                      <div className="p-5 rounded-2xl bg-secondary/10 backdrop-blur-md border border-primary/10 hover:border-primary/50 transition-colors duration-300 hover:shadow-lg group/meta">
                        <div className="flex justify-between items-start mb-3">
                          <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-widest group-hover/meta:text-primary transition-colors">Project</h4>
                          <a href="https://github.com/VishnuSaravanan335/Real-Time-UPI-Analysis" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors tooltip-trigger" aria-label="View on GitHub">
                            <FaGithub className="w-5 h-5 hover:scale-110 transition-transform" />
                          </a>
                        </div>
                        <div className="text-base font-bold text-foreground mb-2">
                          Real‑Time UPI Analysis
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed font-medium">
                          A high-throughput data analysis system built to monitor live UPI transactions, clean large datasets and detect fraud patterns with rapid precision.
                        </p>
                      </div>

                      <div className="p-5 rounded-2xl bg-secondary/10 backdrop-blur-md border border-primary/10 hover:border-accent/50 transition-colors duration-300 hover:shadow-lg group/tech">
                        <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-3 group-hover/tech:text-accent transition-colors">Tech Stack</h4>
                        <div className="flex flex-wrap gap-2">
                          {[
                            { name: "Python", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" className="w-4 h-4" alt="Python" /> },
                            { name: "NumPy", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg" className="w-4 h-4" alt="NumPy" /> },
                            { name: "Pandas", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" className="w-4 h-4" alt="Pandas" /> },
                            { name: "Power BI", icon: <BarChart className="w-4 h-4 text-[#F2C811]" /> },
                            { name: "SQL", icon: <Database className="w-4 h-4 text-blue-500" /> }
                          ].map((tech) => (
                            <div key={tech.name} className="flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 bg-background border border-border rounded-lg text-foreground shadow-sm hover:border-accent hover:bg-accent/10 hover:text-accent hover:scale-105 hover:shadow-[0_0_15px_rgba(var(--accent),0.3)] transition-all cursor-default">
                              {tech.icon}
                              {tech.name}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right Content (Bullet points) */}
                    <div className="md:col-span-2 relative">
                      {/* Animated Background Effects for Achievements */}
                      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-accent/5 to-transparent rounded-3xl blur-2xl -z-10 animate-pulse duration-3000"></div>

                      <h4 className="text-xl font-bold mb-6 flex items-center gap-2 text-foreground group-hover:text-primary transition-colors">
                        <ChevronRight className="h-5 w-5 text-primary" /> Key Achievements
                      </h4>
                      <div className="space-y-4">
                        {[
                          <><strong className="text-foreground">Real-Time Analysis:</strong> Analyzed 500K+ daily UPI transactions to detect fraud patterns and anomalies with 95% accuracy.</>,
                          <><strong className="text-foreground">Data Engineering:</strong> Processed and cleaned 10GB+ datasets using Python and Pandas, reducing data redundancy by 40%.</>,
                          <><strong className="text-foreground">BI & Dashboards:</strong> Built interactive Power BI dashboards, improving KPI tracking speed and executive decision-making by 30%.</>,
                          <><strong className="text-foreground">Database Optimization:</strong> Engineered complex SQL queries for rapid data extraction, cutting query load times by 25%.</>,
                          <><strong className="text-foreground">Business Impact:</strong> Delivered actionable fintech insights that boosted overall operational efficiency by 15%.</>
                        ].map((item, i) => (
                          <motion.div 
                            key={i}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5, type: "spring" }}
                            className="relative flex items-start gap-4 p-5 rounded-2xl backdrop-blur-md bg-slate-500/5 dark:bg-white/[0.02] border border-slate-500/10 dark:border-white/[0.05] shadow-sm hover:shadow-md group/item hover:-translate-y-1 hover:bg-slate-500/10 dark:hover:bg-white/[0.04] transition-all duration-300 overflow-hidden"
                          >
                            {/* Inner animated glow on hover */}
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-500 -z-10 pointer-events-none"></div>
                            
                            <div className="p-2 bg-background rounded-xl border border-border shadow-sm shrink-0 group-hover/item:border-primary/50 group-hover/item:shadow-[0_0_15px_rgba(var(--primary),0.2)] transition-all">
                              <CheckCircle2 className="h-5 w-5 text-primary/70 group-hover/item:text-primary transition-colors" />
                            </div>
                            <div className="text-muted-foreground group-hover/item:text-foreground/90 transition-colors leading-relaxed text-sm md:text-base pt-1 font-medium">
                              {item}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

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

