import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/sections/hero';
import { AboutSection } from '@/components/sections/about';
// TODO: Import other sections when created
// import { SkillsSection } from '@/components/sections/skills';
// import { ExperienceSection } from '@/components/sections/experience';
// import { ProjectsSection } from '@/components/sections/projects';
// import { CertificationsSection } from '@/components/sections/certifications';
// import { ContactSection } from '@/components/sections/contact';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* About Section */}
      <AboutSection />
      
      {/* Skills Section - TODO: Implement */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills</h2>
          <p className="text-muted-foreground">Skills section coming soon...</p>
        </div>
      </section>
      
      {/* Experience Section - TODO: Implement */}
      <section id="experience" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
          <p className="text-muted-foreground">Experience section coming soon...</p>
        </div>
      </section>
      
      {/* Projects Section - TODO: Implement */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <p className="text-muted-foreground">Projects section coming soon...</p>
        </div>
      </section>
      
      {/* Certifications Section - TODO: Implement */}
      <section id="certifications" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications</h2>
          <p className="text-muted-foreground">Certifications section coming soon...</p>
        </div>
      </section>
      
      {/* Contact Section - TODO: Implement */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact</h2>
          <p className="text-muted-foreground">Contact section coming soon...</p>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 