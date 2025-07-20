'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  Shield, 
  Code, 
  CheckCircle, 
  GraduationCap,
  Calendar,
  Building,
  BookOpen
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CERTIFICATIONS, EDUCATION } from '@/lib/constants';

// Icon mapping for certifications
const certIconMap = {
  'Shield': Shield,
  'Code': Code,
} as const;

// Certification badge component
const CertificationBadge = ({ 
  certification, 
  index 
}: { 
  certification: typeof CERTIFICATIONS[0]; 
  index: number;
}) => {
  const Icon = certIconMap[certification.icon as keyof typeof certIconMap] || Award;
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.2,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.2 }
      }}
    >
      <Card className="h-full hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-background to-muted/30 border-2 hover:border-primary/50 group">
        <CardContent className="p-6 text-center">
          {/* Icon */}
          <div className="flex justify-center mb-4">
            <div className="p-4 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300">
              <Icon className="h-8 w-8 text-primary" />
            </div>
          </div>
          
          {/* Certification name */}
          <h3 className="font-bold text-lg mb-2 text-primary group-hover:text-primary/90 transition-colors">
            {certification.name}
          </h3>
          
          {/* Issuer */}
          <p className="text-sm text-muted-foreground mb-3">
            {certification.issuer}
          </p>
          
          {/* Status badge */}
          <div className="flex justify-center">
            <div className="flex items-center gap-2 px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-xs font-medium">
              <CheckCircle className="h-3 w-3" />
              {certification.status}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

// Education card component
const EducationCard = ({ 
  education, 
  index 
}: { 
  education: typeof EDUCATION[0]; 
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ y: -5 }}
    >
      <Card className="h-full hover:shadow-lg transition-all duration-300 border-l-4 border-l-purple-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-xl">
            <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20">
              <GraduationCap className="h-6 w-6 text-purple-500" />
            </div>
            {education.degree}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-2">
            <Building className="h-4 w-4 text-muted-foreground" />
            <span className="font-semibold text-primary">{education.institution}</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <span>Expected: {education.expectedGraduation}</span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-muted-foreground" />
              <span>{education.type}</span>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-orange-500 rounded-full" />
            <span className="text-sm font-medium text-orange-600 dark:text-orange-400">
              {education.status}
            </span>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

// Main Certifications section component
export function CertificationsSection() {
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

  return (
    <section id="certifications" className="py-20 bg-gradient-to-br from-muted/50 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/5 rounded-full blur-xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-pink-500/5 rounded-full blur-xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-500/3 to-pink-500/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30">
                <Award className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Certifications & Education
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Professional certifications and continuous learning journey in cybersecurity, application security, and information security.
            </p>
          </motion.div>

          {/* Certifications Grid */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center flex items-center justify-center gap-3">
              <Shield className="h-6 w-6 text-blue-500" />
              Professional Certifications
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {CERTIFICATIONS.map((cert, index) => (
                <CertificationBadge
                  key={cert.id}
                  certification={cert}
                  index={index}
                />
              ))}
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-8 text-center flex items-center justify-center gap-3">
              <GraduationCap className="h-6 w-6 text-purple-500" />
              Education
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {EDUCATION.map((edu, index) => (
                <EducationCard
                  key={edu.id}
                  education={edu}
                  index={index}
                />
              ))}
            </div>
          </motion.div>

          {/* Additional highlights */}
          <motion.div variants={itemVariants} className="mt-16 text-center">
            <Card className="max-w-4xl mx-auto bg-gradient-to-r from-purple-500/5 to-pink-500/5 border-purple-400/30">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Continuous Learning</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="flex justify-center mb-3">
                      <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500/20 to-blue-600/20">
                        <Shield className="h-6 w-6 text-blue-500" />
                      </div>
                    </div>
                    <h4 className="font-semibold text-lg mb-2">Security Focus</h4>
                    <p className="text-sm text-muted-foreground">
                      Specialized in ethical hacking and application security engineering
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="flex justify-center mb-3">
                      <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500/20 to-purple-600/20">
                        <GraduationCap className="h-6 w-6 text-purple-500" />
                      </div>
                    </div>
                    <h4 className="font-semibold text-lg mb-2">Advanced Degree</h4>
                    <p className="text-sm text-muted-foreground">
                      Currently pursuing Master's in Information Security at Georgia Tech
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="flex justify-center mb-3">
                      <div className="p-3 rounded-xl bg-gradient-to-r from-pink-500/20 to-pink-600/20">
                        <BookOpen className="h-6 w-6 text-pink-500" />
                      </div>
                    </div>
                    <h4 className="font-semibold text-lg mb-2">Industry Recognition</h4>
                    <p className="text-sm text-muted-foreground">
                      Certified in ethical hacking and secure application development
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