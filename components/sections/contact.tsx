'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  MapPin, 
  Github, 
  Linkedin, 
  Send,
  MessageCircle,
  Globe,
  Coffee
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CONTACT_INFO, PERSONAL_INFO, SOCIAL_LINKS } from '@/lib/constants';

// Icon mapping for social links
const socialIconMap = {
  'Github': Github,
  'Linkedin': Linkedin,
  'Mail': Mail,
} as const;

// Social link card component
const SocialLinkCard = ({ 
  link, 
  index 
}: { 
  link: typeof SOCIAL_LINKS[0]; 
  index: number;
}) => {
  const Icon = socialIconMap[link.icon as keyof typeof socialIconMap] || Globe;
  
  return (
    <motion.a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ 
        y: -10,
        scale: 1.05,
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.95 }}
      className="block"
    >
      <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50 group cursor-pointer">
        <CardContent className="p-6 text-center">
          <div className="flex justify-center mb-4">
            <div className="p-4 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300">
              <Icon className="h-6 w-6 text-primary" />
            </div>
          </div>
          <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
            {link.name}
          </h3>
          <p className="text-sm text-muted-foreground">
            Connect with me on {link.name}
          </p>
        </CardContent>
      </Card>
    </motion.a>
  );
};

// Contact info card component
const ContactInfoCard = ({ 
  icon: Icon, 
  title, 
  content, 
  action,
  index 
}: { 
  icon: React.ComponentType<any>; 
  title: string; 
  content: string; 
  action?: { href: string; text: string };
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      <Card className="h-full hover:shadow-lg transition-all duration-300">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30">
              <Icon className="h-5 w-5 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-lg mb-2">{title}</h3>
              <p className="text-muted-foreground mb-3">{content}</p>
              {action && (
                <Button asChild size="sm" variant="outline">
                  <a href={action.href} target="_blank" rel="noopener noreferrer">
                    {action.text}
                  </a>
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

// Main Contact section component
export function ContactSection() {
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
    <section id="contact" className="py-20 bg-gradient-to-br from-background to-muted/30 relative overflow-hidden">
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
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30">
                <MessageCircle className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Ready to discuss DevOps, security, or collaboration opportunities? I'd love to hear from you!
            </p>
          </motion.div>

          {/* Contact Information */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">Get In Touch</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ContactInfoCard
                icon={Mail}
                title="Email"
                content={CONTACT_INFO.email}
                action={{
                  href: `mailto:${CONTACT_INFO.email}`,
                  text: "Send Email"
                }}
                index={0}
              />
              
              <ContactInfoCard
                icon={MapPin}
                title="Location"
                content={CONTACT_INFO.location}
                index={1}
              />
              
              <ContactInfoCard
                icon={Coffee}
                title="Let's Chat"
                content="Open to discussing new opportunities and collaborations"
                action={{
                  href: `mailto:${CONTACT_INFO.email}?subject=Collaboration Opportunity`,
                  text: "Schedule a Chat"
                }}
                index={2}
              />
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">Connect on Social</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {SOCIAL_LINKS.map((link, index) => (
                <SocialLinkCard
                  key={link.name}
                  link={link}
                  index={index}
                />
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center">
            <Card className="max-w-2xl mx-auto bg-gradient-to-r from-blue-500/5 to-purple-500/5 border-blue-400/30">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Ready to Work Together?</h3>
                <p className="text-muted-foreground mb-6">
                  Whether you're looking for DevOps expertise, security consultation, or just want to connect with a fellow tech enthusiast, I'm always excited to explore new opportunities.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    <a href={`mailto:${CONTACT_INFO.email}`}>
                      <Send className="mr-2 h-4 w-4" />
                      Start a Conversation
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href={CONTACT_INFO.linkedin} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="mr-2 h-4 w-4" />
                      Connect on LinkedIn
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Professional Summary */}
          <motion.div variants={itemVariants} className="mt-16 text-center">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-xl font-semibold mb-4">About Working With Me</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-muted-foreground">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Professional Expertise</h4>
                  <p>
                    Specializing in {PERSONAL_INFO.title} with focus on cloud infrastructure, 
                    security automation, and DevSecOps practices.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Communication</h4>
                  <p>
                    {PERSONAL_INFO.languages.join(' • ')} - Effective communication 
                    across global teams and diverse technical stakeholders.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 