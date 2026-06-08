"use client";

import { motion, Variants } from "framer-motion";
import { Trophy, Award, BookOpen, Code, CheckCircle, ShieldCheck, FileText } from "lucide-react";

const achievements = [
  {
    id: 1,
    title: "Secured 1st Prize in a hackathon",
    icon: <Trophy className="h-8 w-8 text-yellow-500" />,
    gradient: "from-yellow-500/20 to-orange-500/20"
  },
  {
    id: 2,
    title: "Shortlisted in multiple hackathons and innovation challenges",
    icon: <Award className="h-8 w-8 text-primary" />,
    gradient: "from-primary/20 to-accent/20"
  },
  {
    id: 3,
    title: "Developed BookMyHall",
    description: "A full-stack web application for KPRCAS College",
    icon: <Code className="h-8 w-8 text-blue-500" />,
    gradient: "from-blue-500/20 to-cyan-500/20"
  },
  {
    id: 4,
    title: "Published 2 research papers in conference proceedings",
    description: "(ISBN indexed)",
    icon: <BookOpen className="h-8 w-8 text-emerald-500" />,
    gradient: "from-emerald-500/20 to-green-500/20"
  },
  {
    id: 5,
    title: "Published 1 research article in IJRPR",
    description: "(International Journal of Research Publication and Reviews)",
    icon: <FileText className="h-8 w-8 text-purple-500" />,
    gradient: "from-purple-500/20 to-pink-500/20"
  },
  {
    id: 6,
    title: "Master in Cloud Computing with DevOps",
    description: "Completed certification",
    icon: <ShieldCheck className="h-8 w-8 text-red-500" />,
    gradient: "from-red-500/20 to-rose-500/20"
  },
  {
    id: 7,
    title: "Completed 2 NPTEL certified courses",
    icon: <CheckCircle className="h-8 w-8 text-teal-500" />,
    gradient: "from-teal-500/20 to-emerald-500/20"
  }
];

export function Achievements() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 12 }
    }
  };

  return (
    <section id="achievements" className="py-24 relative overflow-hidden bg-white/5 dark:bg-black/10">
      <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full -z-10" />
      
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center mb-16 text-center"
        >
          <div className="relative inline-block mb-4">
            <div className="absolute inset-0 bg-accent/20 blur-xl rounded-full" />
            <h2 className="relative text-3xl md:text-5xl font-extrabold tracking-tight flex items-center justify-center gap-4 text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary pb-2">
              <Trophy className="h-10 w-10 text-primary" /> Achievements
            </h2>
          </div>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent rounded-full mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A track record of continuous learning, research and competitive excellence.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {achievements.map((achievement, index) => (
            <motion.div 
              key={achievement.id}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -10 }}
              className="relative group h-full perspective-1000"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${achievement.gradient} opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-2xl blur-xl -z-10`} />
              
              <div className="glass p-8 rounded-2xl h-full border border-primary/20 hover:border-primary/60 transition-all duration-500 shadow-lg hover:shadow-primary/30 flex flex-col gap-6 relative overflow-hidden">
                
                {/* Decorative background glow inside the card */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl rounded-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="flex items-center gap-4 relative z-10">
                  <motion.div 
                    initial={{ rotate: 0 }}
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.8, type: "spring" }}
                    className="p-4 rounded-xl bg-primary/10 border border-primary/20 shadow-inner text-primary"
                  >
                    {achievement.icon}
                  </motion.div>
                </div>
                
                <div className="flex-1 relative z-10">
                  <h3 className="text-xl font-bold text-foreground mb-3 leading-snug group-hover:text-primary transition-colors duration-300">
                    {achievement.title}
                  </h3>
                  {achievement.description && (
                    <p className="text-base text-muted-foreground font-medium leading-relaxed group-hover:text-foreground transition-colors duration-300">
                      {achievement.description}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

