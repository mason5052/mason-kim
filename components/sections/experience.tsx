'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  MapPin, 
  Calendar, 
  CheckCircle,
  Award,
  Users,
  Presentation,
  BookOpen
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { EXPERIENCE, PROJECTS, LEADERSHIP } from '@/lib/constants';

// Timeline item component
const TimelineItem = ({ 
  experience, 
  index, 
  isLast = false 
}: { 
  experience: typeof EXPERIENCE[0]; 
  index: number;
  isLast?: boolean;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative"
    >
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-6 top-16 w-0.5 h-full bg-gradient-to-b from-blue-500 to-purple-500 opacity-30" />
      )}
      
      {/* Timeline dot */}
      <div className="absolute left-3 top-8 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-background shadow-lg z-10" />
      
      {/* Content */}
      <div className="ml-16">
        <Card className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-blue-500">
          <CardHeader>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <CardTitle className="text-xl font-bold text-primary">
                {experience.position}
              </CardTitle>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                {experience.period}
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-4 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Briefcase className="h-4 w-4" />
                <span className="font-semibold text-foreground">{experience.company}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>{experience.type}</span>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">{experience.description}</p>
            
            {/* Responsibilities */}
            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Key Responsibilities
              </h4>
              <ul className="space-y-2">
                {experience.responsibilities.map((responsibility, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + idx * 0.1 }}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                    {responsibility}
                  </motion.li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
};

// Project showcase component
const ProjectShowcase = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mt-12"
    >
      <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
        <Award className="h-6 w-6 text-yellow-500" />
        Featured Project
      </h3>
      
      {PROJECTS.map((project, index) => (
        <Card key={project.id} className="bg-gradient-to-r from-blue-500/5 to-purple-500/5 border-blue-400/30">
          <CardHeader>
            <CardTitle className="text-xl text-primary">{project.title}</CardTitle>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {project.period}
              </div>
              <div className="flex items-center gap-1">
                <Briefcase className="h-4 w-4" />
                {project.role}
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">{project.description}</p>
            
            {/* Achievements */}
            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Key Achievements
              </h4>
              <ul className="space-y-2">
                {project.achievements.map((achievement, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Technologies */}
            <div>
              <h4 className="font-semibold mb-3">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 text-primary rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </motion.div>
  );
};

// Leadership activities component
const LeadershipSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mt-12"
    >
      <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
        <Users className="h-6 w-6 text-blue-500" />
        Leadership & Communication
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {LEADERSHIP.map((item, index) => (
          <Card key={item.id} className="hover:shadow-md transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20">
                  {item.id === 'workshops' ? (
                    <Presentation className="h-5 w-5 text-blue-500" />
                  ) : (
                    <BookOpen className="h-5 w-5 text-purple-500" />
                  )}
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                  {'count' in item && (
                    <p className="text-sm text-blue-600 font-medium mb-2">{item.count}</p>
                  )}
                  {'topics' in item && (
                    <div className="flex flex-wrap gap-2 mb-2">
                      {item.topics.map((topic, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded text-xs"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  )}
                  {'description' in item && (
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </motion.div>
  );
};

// Main Experience section component
export function ExperienceSection() {
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
    <section id="experience" className="py-20 bg-gradient-to-br from-background to-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-32 h-32 bg-purple-500/5 rounded-full blur-xl" />
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-blue-500/5 rounded-full blur-xl" />
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
              <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30">
                <Briefcase className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Professional Experience
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Journey through DevOps and security engineering with focus on cloud infrastructure, automation, and team leadership.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {EXPERIENCE.map((experience, index) => (
              <TimelineItem
                key={experience.id}
                experience={experience}
                index={index}
                isLast={index === EXPERIENCE.length - 1}
              />
            ))}
          </div>

          {/* Project Showcase */}
          <ProjectShowcase />
          
          {/* Leadership Section */}
          <LeadershipSection />
        </motion.div>
      </div>
    </section>
  );
} 