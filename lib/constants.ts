/**
 * Personal information constants
 */
export const PERSONAL_INFO = {
  name: {
    english: 'Mason Kim',
    korean: '김준국',
  },
  birthDate: '1989-04-05',
  title: 'Global DevOps Engineer',
  company: 'Zinus',
  location: 'Remote',
  workingHours: '40h/week',
  careerDirection: 'DevOps → DevSecOps Engineer',
  languages: ['Korean', 'English (Fully Bilingual)'],
  keywords: ['Cloud', 'Security', 'DevOps', 'AI', 'Continuous Learner'],
  tagline: 'Bridging Development and Security in the Cloud',
  description: 'Global DevOps Engineer with expertise in cloud infrastructure, security, and automation. Currently expanding into DevSecOps with a focus on security-first approaches to software delivery.',
} as const;

/**
 * Contact information
 */
export const CONTACT_INFO = {
  email: 'mason@example.com',
  linkedin: 'https://linkedin.com/in/mason-kim',
  github: 'https://github.com/mason-kim',
  location: 'Global Remote',
} as const;

/**
 * Education and certifications
 */
export const EDUCATION = [
  {
    id: 'georgia-tech',
    institution: 'Georgia Tech',
    degree: 'Master of Science in Information Security',
    status: 'In Progress',
    expectedGraduation: '2026',
    type: 'Online Program',
  },
] as const;

export const CERTIFICATIONS = [
  {
    id: 'ceh',
    name: 'Certified Ethical Hacker (CEH)',
    issuer: 'EC-Council',
    status: 'Obtained',
    icon: 'Shield',
  },
  {
    id: 'case-java',
    name: 'Certified Application Security Engineer - Java',
    issuer: 'Security Innovation',
    status: 'Obtained',
    icon: 'Code',
  },
] as const;

/**
 * Technical skills organized by category
 */
export const SKILLS = {
  'Cloud & IaC': [
    { name: 'AWS (EKS, CloudWatch, CDK)', level: 90 },
    { name: 'Terraform', level: 85 },
    { name: 'Pulumi', level: 80 },
    { name: 'CloudFormation', level: 85 },
  ],
  'CI/CD & GitOps': [
    { name: 'GitHub Actions', level: 90 },
    { name: 'ArgoCD', level: 85 },
    { name: 'Tekton', level: 75 },
  ],
  'Container & Orchestration': [
    { name: 'Docker', level: 90 },
    { name: 'Kubernetes', level: 85 },
  ],
  'Monitoring & Security': [
    { name: 'Prometheus', level: 85 },
    { name: 'Grafana', level: 85 },
    { name: 'OpenTelemetry', level: 80 },
    { name: 'AWS Secrets Manager', level: 85 },
    { name: 'Zero-Trust IAM', level: 80 },
  ],
  'Languages & Frameworks': [
    { name: 'Python', level: 85 },
    { name: 'Flask', level: 80 },
    { name: 'Java', level: 75 },
    { name: 'JavaScript/TypeScript', level: 80 },
    { name: 'React', level: 75 },
  ],
} as const;

/**
 * Project and experience data
 */
export const PROJECTS = [
  {
    id: 'flask-security-assessment',
    title: 'Flask Application Security Assessment',
    period: '2024-01 ~ 2024-09',
    role: 'Security Analyst & DevOps Engineer',
    description: 'Comprehensive security assessment of Flask web application integrated with AWS Secrets Manager, reCAPTCHA, and MS Graph API.',
    achievements: [
      'Discovered and documented 15 security vulnerabilities',
      'Created comprehensive remediation guide',
      'Established security review process for development team',
      'Implemented security-first CI/CD pipeline',
    ],
    technologies: ['Flask', 'AWS Secrets Manager', 'reCAPTCHA', 'MS Graph API', 'Python', 'Security Testing'],
    status: 'Completed',
  },
] as const;

/**
 * Experience timeline
 */
export const EXPERIENCE = [
  {
    id: 'zinus-devops',
    company: 'Zinus',
    position: 'Global DevOps Engineer',
    period: '2023 - Present',
    type: 'Remote',
    description: 'Leading DevOps initiatives for global furniture and mattress brand',
    responsibilities: [
      'Design and implement cloud infrastructure on AWS',
      'Develop and maintain CI/CD pipelines',
      'Security assessment and remediation',
      'Infrastructure as Code (IaC) implementation',
      'Team mentoring and knowledge sharing',
    ],
  },
] as const;

/**
 * Leadership and communication activities
 */
export const LEADERSHIP = [
  {
    id: 'workshops',
    title: 'Internal DevOps & Security Workshops',
    count: '10+ presentations',
    topics: ['IaC', 'GitOps', 'AIOps', 'Security Best Practices'],
  },
  {
    id: 'mentoring',
    title: 'Mentoring & Documentation',
    description: 'Leading internal documentation efforts and establishing code review culture',
  },
] as const;

/**
 * Social media and external links
 */
export const SOCIAL_LINKS = [
  {
    name: 'GitHub',
    url: 'https://github.com/mason-kim',
    icon: 'Github',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/mason-kim',
    icon: 'Linkedin',
  },
  {
    name: 'Email',
    url: 'mailto:mason@example.com',
    icon: 'Mail',
  },
] as const;

/**
 * Site metadata for SEO
 */
export const SITE_METADATA = {
  title: 'Mason Kim - DevOps Engineer Portfolio',
  description: 'Portfolio of Mason Kim, Global DevOps Engineer specializing in cloud infrastructure, security, and automation.',
  keywords: ['DevOps', 'DevSecOps', 'Cloud', 'AWS', 'Kubernetes', 'Security', 'Infrastructure'],
  author: 'Mason Kim',
  siteUrl: 'https://mason-kim.github.io/mason-kim',
  image: '/og-image.png',
} as const; 