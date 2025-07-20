'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, Mail, Code, Shield, Cloud } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PERSONAL_INFO, CONTACT_INFO } from '@/lib/constants';
import { calculateAge } from '@/lib/utils';

// Floating particles component
const FloatingParticles = () => {
  const particles = Array.from({ length: 20 }, (_, i) => i);
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle}
          className="absolute w-2 h-2 bg-primary/20 rounded-full"
          initial={{
            x: Math.random() * window?.innerWidth || 1200,
            y: Math.random() * window?.innerHeight || 800,
          }}
          animate={{
            x: Math.random() * (window?.innerWidth || 1200),
            y: Math.random() * (window?.innerHeight || 800),
          }}
          transition={{
            duration: Math.random() * 20 + 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export function HeroSection() {
  const age = calculateAge(PERSONAL_INFO.birthDate);

  const handleScrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 dark:from-slate-950 dark:via-blue-950 dark:to-slate-950">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-pattern" />
      
      {/* Floating particles */}
      <FloatingParticles />
      
      {/* Large background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -top-40 -right-32 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div 
          className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-conic from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left column - Text content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8 text-left lg:text-left text-center"
            >
              {/* Greeting */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-lg text-blue-300/80 font-medium"
              >
                👋 안녕하세요! Hello, I'm
              </motion.p>

              {/* Name */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-5xl md:text-7xl lg:text-8xl font-bold"
              >
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Mason
                </span>
                <br />
                <span className="text-white">Kim</span>
              </motion.h1>

              {/* Korean name and title */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="space-y-3"
              >
                <p className="text-xl text-blue-200/70 font-medium">
                  {PERSONAL_INFO.name.korean}
                </p>
                <h2 className="text-2xl md:text-3xl font-semibold text-blue-100">
                  {PERSONAL_INFO.title}
                </h2>
                <p className="text-lg text-blue-200/80 max-w-2xl">
                  {PERSONAL_INFO.tagline}
                </p>
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="text-base md:text-lg text-blue-100/80 max-w-2xl leading-relaxed"
              >
                {PERSONAL_INFO.description}
              </motion.p>

              {/* Keywords */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.8 }}
                className="flex flex-wrap gap-3"
              >
                {PERSONAL_INFO.keywords.map((keyword, index) => (
                  <motion.span
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 text-blue-100 rounded-full text-sm font-medium backdrop-blur-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {keyword}
                  </motion.span>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button 
                  size="lg" 
                  className="text-base bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 border-0 shadow-lg shadow-blue-500/25" 
                  asChild
                >
                  <a href={`mailto:${CONTACT_INFO.email}`}>
                    <Mail className="mr-2 h-5 w-5" />
                    Get In Touch
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-base border-blue-400/50 text-blue-100 hover:bg-blue-500/20 hover:border-blue-400" 
                  asChild
                >
                  <a href="/resume.pdf" download>
                    <Download className="mr-2 h-5 w-5" />
                    Download Resume
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            {/* Right column - Visual elements */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                {/* Main avatar container */}
                <motion.div
                  className="w-80 h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-400/30 flex items-center justify-center relative overflow-hidden"
                  animate={{
                    boxShadow: [
                      "0 0 0 0 rgba(59, 130, 246, 0.4)",
                      "0 0 0 30px rgba(59, 130, 246, 0)",
                      "0 0 0 0 rgba(59, 130, 246, 0)"
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                >
                  {/* Tech icons floating around */}
                  <motion.div
                    className="absolute inset-0"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <Code className="absolute top-8 left-8 w-8 h-8 text-blue-400" />
                    <Shield className="absolute top-8 right-8 w-8 h-8 text-purple-400" />
                    <Cloud className="absolute bottom-8 left-8 w-8 h-8 text-pink-400" />
                    <div className="absolute bottom-8 right-8 w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded" />
                  </motion.div>
                  
                  {/* Center content */}
                  <div className="text-center z-10">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-4xl font-bold text-white">
                      MK
                    </div>
                    <p className="text-blue-100 font-medium">DevOps Engineer</p>
                    <p className="text-blue-200/70 text-sm">Security Focused</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.8 }}
            onClick={handleScrollToAbout}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-blue-300/60 hover:text-blue-300 transition-colors"
            whileHover={{ y: 5 }}
            whileTap={{ y: 2 }}
          >
            <div className="flex flex-col items-center space-y-2">
              <span className="text-sm">Scroll to explore</span>
              <ChevronDown className="h-6 w-6 animate-bounce" />
            </div>
            <span className="sr-only">Scroll to about section</span>
          </motion.button>
        </div>
      </div>
    </section>
  );
} 