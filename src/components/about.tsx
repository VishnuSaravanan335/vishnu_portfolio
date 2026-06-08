"use client";

import { motion } from "framer-motion";
import { User, MapPin, Mail, GraduationCap, Briefcase } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 flex items-center gap-2">
            <User className="h-8 w-8 text-primary" /> About Me
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-7 glass p-8 md:p-12 rounded-2xl relative"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl rounded-full -z-10" />
            
            <div className="relative inline-block mb-8">
              <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
              <motion.h3 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
                className="relative text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent pb-2"
              >
                About Me
              </motion.h3>
            </div>
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="group glass p-6 rounded-2xl hover:border-primary/50 transition-all duration-300 mb-6 shadow-lg hover:shadow-primary/20"
            >
              <p className="text-lg text-foreground leading-relaxed font-medium text-justify">
                I am a <strong className="text-primary font-bold text-xl">B.Com Computer Applications graduate</strong> and an <strong className="text-primary font-bold text-xl">AWS Cloud & DevOps Engineer</strong> with a strong focus on designing <strong className="text-foreground">scalable cloud architectures</strong>, automating <strong className="text-foreground">deployment workflows</strong> and building reliable, high-performance systems. I specialize in <strong className="text-foreground">AWS cloud infrastructure</strong>, <strong className="text-foreground">CI/CD pipeline automation</strong>, <strong className="text-foreground">container orchestration</strong> and <strong className="text-foreground">Infrastructure as Code</strong> to deliver secure and efficient solutions.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="group glass p-6 rounded-2xl hover:border-primary/50 transition-all duration-300 mb-6 shadow-lg hover:shadow-primary/20"
            >
              <p className="text-lg text-foreground leading-relaxed font-medium text-justify">
                My experience includes <strong className="text-foreground">architecting AWS-based cloud projects</strong>, developing <strong className="text-foreground">full-stack web applications</strong> for academic use and contributing to <strong className="text-foreground">award-winning hackathon solutions</strong>. I have also been shortlisted in <strong className="text-foreground">multiple innovation competitions</strong>, demonstrating my ability to apply technical knowledge to practical, real-world engineering challenges.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="group glass p-6 rounded-2xl hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-primary/20"
            >
              <p className="text-lg text-foreground leading-relaxed font-medium text-justify">
                I am passionate about <strong className="text-foreground">automation</strong>, <strong className="text-foreground">system reliability</strong> and <strong className="text-foreground">continuous delivery practices</strong>. My goal is to leverage modern <strong className="text-foreground">DevOps and cloud-native technologies</strong> to build resilient systems that improve <strong className="text-foreground">scalability</strong>, reduce <strong className="text-foreground">operational overhead</strong> and accelerate <strong className="text-foreground">software delivery</strong>.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="group glass p-6 rounded-2xl flex items-center gap-4 hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1 overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              <div className="p-4 bg-primary/10 rounded-xl text-primary group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300 shadow-inner">
                <MapPin className="h-7 w-7" />
              </div>
              <div className="relative z-10">
                <p className="text-sm text-muted-foreground font-semibold uppercase tracking-wider mb-1">Location</p>
                <p className="text-foreground font-bold text-lg">Tirupur, India</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="group glass p-6 rounded-2xl flex items-center gap-4 hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1 overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              <div className="p-4 bg-primary/10 rounded-xl text-primary group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300 shadow-inner">
                <Mail className="h-7 w-7" />
              </div>
              <div className="relative z-10">
                <p className="text-sm text-muted-foreground font-semibold uppercase tracking-wider mb-1">Email</p>
                <p className="text-foreground font-bold text-lg break-all">vishnusaravanan335@gmail.com</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="group glass p-6 rounded-2xl flex items-center gap-4 hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1 overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              <div className="p-4 bg-primary/10 rounded-xl text-primary group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-300 shadow-inner">
                <GraduationCap className="h-7 w-7" />
              </div>
              <div className="relative z-10">
                <p className="text-sm text-muted-foreground font-semibold uppercase tracking-wider mb-1">Education</p>
                <p className="text-foreground font-bold text-lg">B.Com (Computer Applications)</p>
                <p className="text-sm text-muted-foreground mt-1 font-medium">Bharathiar University (2023 - 2026) | CGPA: 7.2</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="group glass p-6 rounded-2xl flex items-center gap-4 hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1 overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              <div className="p-4 bg-primary/10 rounded-xl text-primary group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300 shadow-inner">
                <Briefcase className="h-7 w-7" />
              </div>
              <div className="relative z-10">
                <p className="text-sm text-muted-foreground font-semibold uppercase tracking-wider mb-1">Experience Level</p>
                <p className="text-foreground font-bold text-lg">Entry / Junior Level</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

