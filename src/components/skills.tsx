"use client";

import { motion, Variants } from "framer-motion";
import { Layers, Activity, Container, BarChart, Database, Terminal, GitBranch } from "lucide-react";
import Image from "next/image";

import {
  ArchitectureServiceAmazonEC2,
  ArchitectureServiceAWSIdentityandAccessManagement,
  ArchitectureServiceAmazonVirtualPrivateCloud,
  ArchitectureServiceAmazonSimpleStorageService,
  ArchitectureServiceAmazonRoute53,
  ArchitectureServiceAWSLambda,
  ArchitectureServiceAWSCloudFormation,
  ArchitectureServiceAmazonCloudWatch,
  ArchitectureServiceAmazonElasticContainerService,
  ArchitectureServiceAmazonRDS,
  ArchitectureGroupAWSCloud
} from "aws-react-icons";

const PowerBILogo = ({ className }: { className?: string }) => (
  <svg className={className} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><title>Power BI</title><path d="M10 12a1 1 0 0 1 1 1v11H4a1 1 0 0 1-1-1V13a1 1 0 0 1 1-1h6Zm-2-.5V7a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v17h-4.5V13a1.5 1.5 0 0 0-1.5-1.5H8Zm5-6V1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v22a1 1 0 0 1-1 1h-3.5V7A1.5 1.5 0 0 0 15 5.5h-2Z"/></svg>
);

const TableauLogo = ({ className }: { className?: string }) => (
  <svg className={className} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><title>Tableau</title><path d="M11.654.174V2.377H9.682v.58h1.972V5.16h.696V2.957h1.97v-.58h-1.97V.174h-.348zm6.03 2.262l-.002 1.623v1.623h-2.957v.927h2.957v3.188H18.725l.011-1.582.02-1.576 1.465-.02 1.46-.01v-.927H18.728V2.436h-.522zm-12.407.06V5.686H2.291v.925H5.277V9.801h.985V6.61h3.013v-.925H6.262V2.496H5.77zm6.086 5.27v3.593H8.06v1.188h3.304v3.596h1.28v-3.596H15.953v-1.188H12.643V7.766h-.637zm9.721 1.55v2.221h-2.012v.811h2.012v2.261h.887v-2.261H24v-.811h-2.029V9.317h-.422zm-19.111.131V11.621H0v.621H1.973v2.194H2.64v-2.194h2v-.62H2.609V9.446h-.318zm15.709 4.516v3.254h-3.016v.927h3.016v3.217h1.072v-3.216H21.74v-.928H18.754v-3.254h-.533zm-12.463.008v3.246H2.262v.928h2.957v3.189H6.32v-3.189h2.955v-.928H6.32V13.97h-.55zm6.316 4.578l.002 1.103v1.1H9.566v.812h1.971v2.262h.928l.012-1.119.017-1.143H14.463v-.812h-2V18.549h-.465z"/></svg>
);

const SKILL_CATEGORIES = [
  {
    title: "Cloud & DevOps",
    icon: <ArchitectureGroupAWSCloud size={24} />,
    skills: [
      { name: "AWS", icon: <ArchitectureGroupAWSCloud size={32} /> },
      { name: "EC2", icon: <ArchitectureServiceAmazonEC2 size={32} /> },
      { name: "IAM", icon: <ArchitectureServiceAWSIdentityandAccessManagement size={32} /> },
      { name: "VPC", icon: <ArchitectureServiceAmazonVirtualPrivateCloud size={32} /> },
      { name: "S3", icon: <ArchitectureServiceAmazonSimpleStorageService size={32} /> },
      { name: "Route 53", icon: <ArchitectureServiceAmazonRoute53 size={32} /> },
      { name: "Lambda", icon: <ArchitectureServiceAWSLambda size={32} /> },
      { name: "CloudFormation", icon: <ArchitectureServiceAWSCloudFormation size={32} /> },
      { name: "CloudWatch", icon: <ArchitectureServiceAmazonCloudWatch size={32} /> },
      { name: "RDS", icon: <ArchitectureServiceAmazonRDS size={32} /> },
    ],
    color: "from-orange-500/20 to-yellow-500/20",
    border: "group-hover:border-orange-500/50 hover:shadow-[0_0_30px_rgba(249,115,22,0.2)]",
    glow: "hover:text-orange-500 hover:bg-orange-500/10 hover:border-orange-500/50"
  },
  {
    title: "CI/CD & Automation",
    icon: <Layers className="h-6 w-6" />,
    skills: [
      { name: "Jenkins", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg" alt="Jenkins" className="w-8 h-8 object-contain" /> },
      { name: "GitHub", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="GitHub" className="w-8 h-8 object-contain dark:invert" /> },
      { name: "Terraform", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-original.svg" alt="Terraform" className="w-8 h-8 object-contain" /> },
      { name: "Ansible", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ansible/ansible-original.svg" alt="Ansible" className="w-8 h-8 object-contain" /> },
    ],
    color: "from-blue-500/20 to-cyan-500/20",
    border: "group-hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]",
    glow: "hover:text-blue-500 hover:bg-blue-500/10 hover:border-blue-500/50"
  },
  {
    title: "Containerization",
    icon: <Container className="h-6 w-6" />,
    skills: [
      { name: "Docker", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" alt="Docker" className="w-8 h-8 object-contain" /> },
      { name: "Kubernetes", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg" alt="Kubernetes" className="w-8 h-8 object-contain" /> },
    ],
    color: "from-sky-500/20 to-indigo-500/20",
    border: "group-hover:border-sky-500/50 hover:shadow-[0_0_30px_rgba(14,165,233,0.2)]",
    glow: "hover:text-sky-500 hover:bg-sky-500/10 hover:border-sky-500/50"
  },
  {
    title: "Version Control",
    icon: <GitBranch className="h-6 w-6" />,
    skills: [
      { name: "Git", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" alt="Git" className="w-8 h-8 object-contain" /> },
    ],
    color: "from-rose-500/20 to-red-500/20",
    border: "group-hover:border-rose-500/50 hover:shadow-[0_0_30px_rgba(244,63,94,0.2)]",
    glow: "hover:text-rose-500 hover:bg-rose-500/10 hover:border-rose-500/50"
  },
  {
    title: "Monitoring",
    icon: <Activity className="h-6 w-6" />,
    skills: [
      { name: "Grafana", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/grafana/grafana-original.svg" alt="Grafana" className="w-8 h-8 object-contain" /> },
      { name: "Prometheus", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prometheus/prometheus-original.svg" alt="Prometheus" className="w-8 h-8 object-contain" /> },
      { name: "Nagios", icon: <img src="https://www.vectorlogo.zone/logos/nagios/nagios-icon.svg" alt="Nagios" className="w-8 h-8 object-contain" /> },
    ],
    color: "from-pink-500/20 to-rose-500/20",
    border: "group-hover:border-pink-500/50 hover:shadow-[0_0_30px_rgba(236,72,153,0.2)]",
    glow: "hover:text-pink-500 hover:bg-pink-500/10 hover:border-pink-500/50"
  },
  {
    title: "Programming",
    icon: <Terminal className="h-6 w-6" />,
    skills: [
      { name: "Python", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="Python" className="w-8 h-8 object-contain" /> },
      { name: "Linux", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" alt="Linux" className="w-8 h-8 object-contain" /> },
      { name: "YAML", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/yaml/yaml-original.svg" alt="YAML" className="w-8 h-8 object-contain" /> },
    ],
    color: "from-green-500/20 to-emerald-500/20",
    border: "group-hover:border-green-500/50 hover:shadow-[0_0_30px_rgba(34,197,94,0.2)]",
    glow: "hover:text-green-500 hover:bg-green-500/10 hover:border-green-500/50"
  },
  {
    title: "Databases",
    icon: <Database className="h-6 w-6" />,
    skills: [
      { name: "MySQL", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" alt="MySQL" className="w-8 h-8 object-contain" /> },
    ],
    color: "from-purple-500/20 to-fuchsia-500/20",
    border: "group-hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]",
    glow: "hover:text-purple-500 hover:bg-purple-500/10 hover:border-purple-500/50"
  },
  {
    title: "BI & Analytics",
    icon: <BarChart className="h-6 w-6" />,
    skills: [
      { name: "Power BI", icon: <PowerBILogo className="h-8 w-8 text-[#F2C811]" /> },
      { name: "Tableau", icon: <TableauLogo className="h-8 w-8 text-[#E97627]" /> },
    ],
    color: "from-amber-500/20 to-orange-500/20",
    border: "group-hover:border-amber-500/50 hover:shadow-[0_0_30px_rgba(245,158,11,0.2)]",
    glow: "hover:text-amber-500 hover:bg-amber-500/10 hover:border-amber-500/50"
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants: Variants = {
  hidden: { y: 30, opacity: 0, scale: 0.95 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 }
  }
};

export function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 flex items-center justify-center gap-2">
            Core Expertise
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full"></div>
          <p className="mt-4 text-muted-foreground max-w-2xl font-medium">
            <span className="text-foreground">Cloud & DevOps Ecosystem:</span> A comprehensive, architecture-driven toolkit for building, deploying and observing modern cloud infrastructure.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {SKILL_CATEGORIES.map((category) => (
            <motion.div key={category.title} variants={itemVariants} className="h-full">
              <div className={`glass group p-6 rounded-[2rem] h-full transition-all duration-500 hover:-translate-y-3 ${category.border} relative overflow-hidden flex flex-col hover:shadow-2xl`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-20 blur-xl transition-all duration-700 -z-10 pointer-events-none`} />
                <div className="flex items-center gap-4 mb-6 relative z-10">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center text-foreground group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-md group-hover:shadow-lg [&>svg]:!w-7 [&>svg]:!h-7 flex-shrink-0`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-extrabold tracking-tight group-hover:text-foreground transition-colors group-hover:translate-x-1 duration-300">{category.title}</h3>
                </div>
                
                {/* Changed to mt-6 to align items at the top underneath the title instead of pushing to bottom */}
                <div className="flex flex-wrap justify-center gap-3 mt-6 relative z-10">
                  {category.skills.map((skill) => (
                    <motion.div 
                      key={skill.name} 
                      whileHover={{ scale: 1.05, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className={`group/skill flex flex-col items-center justify-center w-[calc(50%-0.375rem)] sm:w-[calc(33.333%-0.5rem)] min-w-[90px] p-3 bg-background/60 dark:bg-background/40 backdrop-blur-md border border-border/50 rounded-2xl text-center transition-all duration-300 hover:shadow-lg cursor-default text-muted-foreground ${category.glow}`}
                    >
                      <div className="mb-2 opacity-90 transition-all duration-300 group-hover/skill:scale-125 group-hover/skill:-translate-y-1 group-hover/skill:opacity-100 flex items-center justify-center drop-shadow-sm h-10 w-10">
                        {skill.icon}
                      </div>
                      <span className="text-xs font-extrabold transition-colors tracking-wide">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

