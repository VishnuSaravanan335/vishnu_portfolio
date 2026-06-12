"use client";

import Link from "next/link";
import { Mail, ChevronUp } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Footer() {

  return (
    <footer className="bg-secondary/5 py-12 border-t border-border/50 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="font-bold text-2xl tracking-tight mb-4">Vishnu</h3>
            <p className="text-muted-foreground mb-6 max-w-sm">
              AWS Cloud DevOps Engineer specializing in CI/CD, cloud architecture and infrastructure automation. Building scalable solutions for modern applications.
            </p>
            <div className="flex gap-4">
              <Link href="https://github.com/VishnuSaravanan335" target="_blank" className="p-2 bg-background rounded-full hover:text-primary transition-colors border border-border">
                <FaGithub className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="https://www.linkedin.com/in/vishnu3335" target="_blank" className="p-2 bg-background rounded-full hover:text-primary transition-colors border border-border">
                <FaLinkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="mailto:vishnusaravanan335@gmail.com" className="p-2 bg-background rounded-full hover:text-primary transition-colors border border-border">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</Link></li>
              <li><Link href="#skills" className="text-muted-foreground hover:text-primary transition-colors">Skills</Link></li>
              <li><Link href="#projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</Link></li>
              <li><Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Tirupur, India</li>
              <li>+91 9344457242</li>
              <li><Link href="mailto:vishnusaravanan335@gmail.com" className="hover:text-primary transition-colors">vishnusaravanan335@gmail.com</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Vishnu Saravanan. All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  );
}
