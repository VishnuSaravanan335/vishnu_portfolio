"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-secondary/10">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 flex items-center gap-2">
            <Mail className="h-8 w-8 text-primary" /> Contact Me
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full"></div>
          <p className="mt-4 text-muted-foreground max-w-2xl text-lg">
            Feel free to reach out for collaborations or just a friendly hello!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass p-8 rounded-3xl flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(220,38,38,0.15)] group border border-border/50 hover:border-primary/50 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 pointer-events-none" />
            <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6">
              <Mail className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">Email</h3>
            <p className="text-muted-foreground mb-4">Drop me an email anytime!</p>
            <Link 
              href="mailto:vishnusaravanan335@gmail.com" 
              className="text-lg font-medium text-foreground hover:text-primary transition-colors"
            >
              vishnusaravanan335@gmail.com
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="glass p-8 rounded-3xl flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(234,179,8,0.15)] group border border-border/50 hover:border-accent/50 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 pointer-events-none" />
            <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6">
              <Phone className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">Phone</h3>
            <p className="text-muted-foreground mb-4">Give me a ring!</p>
            <p className="text-lg font-medium text-foreground">
              +91 9344457242
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="glass p-8 rounded-3xl flex flex-col items-center text-center md:col-span-2 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(203,213,225,0.15)] group border border-border/50 hover:border-secondary/50 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 pointer-events-none" />
            <h3 className="text-xl font-bold mb-6">Connect with me</h3>
            <div className="flex gap-6">
              <Link href="https://github.com/VishnuSaravanan335" target="_blank" className="p-4 bg-background rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 border border-border">
                <FaGithub className="h-8 w-8" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="https://www.linkedin.com/in/vishnu3335" target="_blank" className="p-4 bg-background rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 border border-border">
                <FaLinkedin className="h-8 w-8" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

