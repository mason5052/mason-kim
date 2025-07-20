'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, Briefcase, Languages, Target } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PERSONAL_INFO, EDUCATION } from '@/lib/constants';
import { calculateAge } from '@/lib/utils';

export function AboutSection() {
  const age = calculateAge(PERSONAL_INFO.birthDate);

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
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Learn more about my background, education, and career journey in DevOps and Security
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Personal Info Card */}
            <motion.div variants={itemVariants}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Briefcase className="h-5 w-5" />
                    Personal Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">
                        <strong>Age:</strong> {age} years old (Born {PERSONAL_INFO.birthDate})
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">
                        <strong>Location:</strong> {PERSONAL_INFO.location}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Briefcase className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">
                        <strong>Current Role:</strong> {PERSONAL_INFO.title} at {PERSONAL_INFO.company}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Languages className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">
                        <strong>Languages:</strong> {PERSONAL_INFO.languages.join(', ')}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Career Direction Card */}
            <motion.div variants={itemVariants}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5" />
                    Career Direction
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Current Focus</h4>
                      <p className="text-sm text-muted-foreground">
                        {PERSONAL_INFO.careerDirection}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Key Interests</h4>
                      <div className="flex flex-wrap gap-2">
                        {PERSONAL_INFO.keywords.map((keyword, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-primary/10 text-primary rounded text-xs"
                          >
                            {keyword}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Work Schedule</h4>
                      <p className="text-sm text-muted-foreground">
                        {PERSONAL_INFO.workingHours} • Remote Work
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Education Section */}
          <motion.div variants={itemVariants}>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent>
                {EDUCATION.map((edu) => (
                  <div key={edu.id} className="border-l-2 border-primary pl-4 py-2">
                    <h4 className="font-semibold">{edu.degree}</h4>
                    <p className="text-primary font-medium">{edu.institution}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mt-1">
                      <span>Status: {edu.status}</span>
                      <span>Expected Graduation: {edu.expectedGraduation}</span>
                      <span>Type: {edu.type}</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          {/* Description */}
          <motion.div variants={itemVariants} className="mt-12 text-center">
            <Card>
              <CardContent className="pt-6">
                <p className="text-base md:text-lg leading-relaxed text-muted-foreground max-w-4xl mx-auto">
                  {PERSONAL_INFO.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 