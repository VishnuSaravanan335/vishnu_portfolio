"use client";

import { motion } from "framer-motion";
import { FolderGit2, ExternalLink, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

const PROJECTS = [
  {
    title: "CI/CD Pipeline Architecture",
    description: "Architected a fully automated CI/CD pipeline integrating Jenkins, Docker and Kubernetes. Enabled zero-downtime deployments and streamlined the continuous integration workflow for microservices.",
    github: "https://github.com/VishnuSaravanan335/CICD_PIPELINE",
    tags: ["Jenkins", "Docker", "Kubernetes", "Automation"],
    gradient: "from-blue-500/40 via-blue-500/5",
    accent: "text-blue-500"
  },
  {
    title: "AWS Infrastructure Pipeline",
    description: "Developed robust Infrastructure as Code (IaC) using Terraform to provision and manage AWS resources automatically, ensuring highly scalable, fault-tolerant and secure cloud environments.",
    github: "https://github.com/VishnuSaravanan335/Infrastructure_Pipeline",
    tags: ["Terraform", "AWS", "IaC", "Cloud Architecture"],
    gradient: "from-amber-500/40 via-orange-500/5",
    accent: "text-amber-500"
  },
  {
    title: "Real-Time UPI Analysis",
    description: "Engineered a real-time data analysis system to monitor and process high-throughput UPI transactions. Designed for rapid anomaly detection and comprehensive transactional insights.",
    github: "https://github.com/VishnuSaravanan335/Real-Time-UPI-Analysis",
    tags: ["Data Analytics", "Real-Time Processing", "Python"],
    gradient: "from-emerald-500/40 via-emerald-500/5",
    accent: "text-emerald-500"
  },
  {
    title: "Hall Booking System (BookMyHall)",
    description: "Designed and developed a comprehensive web-based platform for enterprise-level event management, streamlining resource allocation and automated reservation scheduling.",
    github: "https://github.com/VishnuSaravanan335/KPRCAS-BookMyHall",
    tags: ["Full Stack", "Resource Management", "Event Platform"],
    gradient: "from-purple-500/40 via-purple-500/5",
    accent: "text-purple-500"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 flex items-center gap-2">
            <FolderGit2 className="h-8 w-8 text-primary" /> Featured Projects
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15, type: "spring", bounce: 0.4 }}
              className="relative backdrop-blur-xl bg-white/5 dark:bg-white/[0.02] border border-white/10 dark:border-white/[0.05] shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-8 rounded-3xl flex flex-col h-full hover:-translate-y-3 hover:scale-[1.02] transition-all duration-500 group overflow-hidden"
            >
              {/* Unique glowing blob for each project */}
              <div className={`absolute -top-24 -right-24 w-64 h-64 bg-gradient-to-br ${project.gradient} to-transparent rounded-full blur-[60px] group-hover:scale-150 group-hover:opacity-70 transition-all duration-700 -z-10`} />
              
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-white/10 dark:bg-black/20 rounded-2xl backdrop-blur-md shadow-sm border border-white/10">
                  <FolderGit2 className={`h-8 w-8 ${project.accent}`} />
                </div>
                {project.github && (
                  <Link href={project.github} target="_blank" className="p-2 rounded-full hover:bg-white/10 transition-colors">
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                  </Link>
                )}
              </div>
              
              <h3 className="text-2xl font-extrabold mb-4 group-hover:text-foreground transition-colors tracking-tight text-foreground/90">{project.title}</h3>
              <p className="text-muted-foreground mb-8 flex-grow leading-relaxed text-[15px]">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                {project.tags.map((tag, i) => (
                  <motion.span 
                    key={tag} 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + (i * 0.1) }}
                    className="text-xs px-3 py-1.5 bg-white/10 dark:bg-white/5 border border-white/10 rounded-full font-semibold text-foreground/80 backdrop-blur-sm"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>

              <div className="flex items-center gap-4 pt-5 border-t border-white/10">
                {project.github && (
                  <Link href={project.github} target="_blank" className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-foreground text-background rounded-full font-bold hover:scale-105 hover:shadow-lg transition-all duration-300 w-full">
                    <FaGithub className="h-5 w-5" />
                    <span>View Repository</span>
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

