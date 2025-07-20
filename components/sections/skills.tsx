'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { 
  Cloud, 
  Code, 
  Shield, 
  Monitor, 
  Database, 
  GitBranch,
  Server,
  Zap,
  Lock,
  Workflow
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SKILLS } from '@/lib/constants';

// Technology icons mapping
const iconMap = {
  'Cloud & IaC': Cloud,
  'CI/CD & GitOps': GitBranch,
  'Container & Orchestration': Server,
  'Monitoring & Security': Shield,
  'Languages & Frameworks': Code,
} as const;

// Progress bar component with animation
const SkillProgressBar = ({ skill, delay }: { skill: { name: string; level: number }, delay: number }) => {
  const [isVisible, setIsVisible] = React.useState(false);
  
  React.useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay * 100);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-foreground">{skill.name}</span>
        <span className="text-sm text-muted-foreground">{skill.level}%</span>
      </div>
      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: isVisible ? `${skill.level}%` : 0 }}
          transition={{ 
            duration: 1.5, 
            ease: "easeOut",
            delay: delay * 0.1
          }}
        />
      </div>
    </div>
  );
};

// Individual skill category card
const SkillCategoryCard = ({ 
  category, 
  skills, 
  index 
}: { 
  category: string; 
  skills: Array<{ name: string; level: number }>; 
  index: number;
}) => {
  const Icon = iconMap[category as keyof typeof iconMap] || Code;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.2,
        ease: "easeOut"
      }}
      whileHover={{ 
        y: -5,
        transition: { duration: 0.2 }
      }}
    >
      <Card className="h-full hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/50 bg-gradient-to-br from-background to-muted/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-lg">
            <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30">
              <Icon className="h-5 w-5 text-primary" />
            </div>
            {category}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {skills.map((skill, skillIndex) => (
            <SkillProgressBar 
              key={skill.name} 
              skill={skill} 
              delay={index * 2 + skillIndex}
            />
          ))}
        </CardContent>
      </Card>
    </motion.div>
  );
};

// Main Skills section component
export function SkillsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  // Calculate overall expertise percentage
  const allSkills = Object.values(SKILLS).flat();
  const averageLevel = Math.round(
    allSkills.reduce((sum, skill) => sum + skill.level, 0) / allSkills.length
  );

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-muted/30 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/5 rounded-full blur-xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/5 rounded-full blur-xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-500/3 to-purple-500/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30">
                <Zap className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive expertise across cloud infrastructure, security, and automation technologies with hands-on experience in DevOps and DevSecOps practices.
            </p>
            
            {/* Overall expertise indicator */}
            <motion.div 
              className="mt-8 inline-flex items-center gap-4 px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-400/30 rounded-full backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
            >
              <Monitor className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">Overall Expertise: {averageLevel}%</span>
            </motion.div>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {Object.entries(SKILLS).map(([category, skills], index) => (
              <SkillCategoryCard
                key={category}
                category={category}
                skills={skills}
                index={index}
              />
            ))}
          </div>

          {/* Additional highlights */}
          <motion.div variants={itemVariants} className="text-center">
            <Card className="max-w-4xl mx-auto bg-gradient-to-r from-blue-500/5 to-purple-500/5 border-blue-400/30">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="flex justify-center mb-3">
                      <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500/20 to-blue-600/20">
                        <Cloud className="h-6 w-6 text-blue-500" />
                      </div>
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Cloud Native</h3>
                    <p className="text-sm text-muted-foreground">
                      AWS-focused with expertise in EKS, CDK, and cloud-native architectures
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="flex justify-center mb-3">
                      <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500/20 to-purple-600/20">
                        <Lock className="h-6 w-6 text-purple-500" />
                      </div>
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Security First</h3>
                    <p className="text-sm text-muted-foreground">
                      DevSecOps approach with Zero-Trust IAM and comprehensive security practices
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="flex justify-center mb-3">
                      <div className="p-3 rounded-xl bg-gradient-to-r from-pink-500/20 to-pink-600/20">
                        <Workflow className="h-6 w-6 text-pink-500" />
                      </div>
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Automation</h3>
                    <p className="text-sm text-muted-foreground">
                      Infrastructure as Code and CI/CD pipelines for streamlined deployments
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 