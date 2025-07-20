# Mason Kim - DevOps Engineer Portfolio

A modern, responsive portfolio website built with Next.js, showcasing the professional journey of Mason Kim, a Global DevOps Engineer specializing in cloud infrastructure, security, and automation.

## 🚀 Live Demo

Visit the live portfolio: [https://mason-kim.github.io/mason-kim](https://mason-kim.github.io/mason-kim)

## 🛠 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: TailwindCSS + shadcn/ui components
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter + JetBrains Mono
- **Theme**: next-themes (Dark/Light mode)
- **Deployment**: GitHub Pages with GitHub Actions
- **Language**: TypeScript

## ✨ Features

- 📱 **Fully Responsive**: Mobile-first design that works on all devices
- 🌙 **Dark/Light Mode**: Toggle between themes with smooth transitions
- ⚡ **Performance Optimized**: Static site generation for fast loading
- 🎨 **Modern UI**: Clean design with subtle animations
- 📊 **SEO Optimized**: Meta tags, sitemap, and structured data
- 🔄 **Auto Deployment**: CI/CD pipeline with GitHub Actions
- ♿ **Accessible**: WCAG compliant with proper semantic markup

## 📦 Project Structure

```
mason-kim/
├── app/
│   ├── globals.css          # Global styles with CSS variables
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main portfolio page
├── components/
│   ├── layout/
│   │   ├── header.tsx       # Navigation header
│   │   └── footer.tsx       # Site footer
│   ├── sections/
│   │   ├── hero.tsx         # Hero/intro section
│   │   ├── about.tsx        # About me section
│   │   └── [other-sections].tsx
│   ├── ui/                  # Reusable UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── [other-ui].tsx
│   └── theme-toggle.tsx     # Dark/light mode toggle
├── lib/
│   ├── constants.ts         # Portfolio data and configuration
│   └── utils.ts             # Utility functions
├── public/
│   ├── robots.txt           # SEO robots file
│   ├── sitemap.xml          # XML sitemap
│   └── [assets]             # Images and static files
├── .github/workflows/
│   └── deploy.yml           # GitHub Actions deployment
└── [config files]          # Next.js, Tailwind, TypeScript configs
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/mason-kim/mason-kim.git
   cd mason-kim
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

```bash
npm run dev         # Start development server
npm run build       # Build for production
npm run export      # Export static files
npm run build:export # Build and export in one command
npm run start       # Start production server
npm run lint        # Run ESLint
npm run lint:fix    # Fix ESLint issues
npm run format      # Format code with Prettier
npm run format:check # Check code formatting
```

## 🌍 Deployment

### GitHub Pages Setup

1. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Source: "GitHub Actions"

2. **Configure repository settings**
   - Update `next.config.js` basePath if needed
   - Ensure repository name matches in configuration

3. **Deploy**
   ```bash
   git push origin main
   ```
   GitHub Actions will automatically build and deploy.

### Manual Deployment

```bash
npm run build:export
# Upload the 'out' folder to your hosting provider
```

## 🎨 Customization

### Personal Information

Edit `lib/constants.ts` to update:
- Personal details and contact information
- Work experience and projects
- Skills and certifications
- Social media links

### Styling

- **Colors**: Modify CSS variables in `app/globals.css`
- **Components**: Customize UI components in `components/ui/`
- **Animations**: Adjust Framer Motion settings in section components

### Content Sections

Add new sections by:
1. Creating a component in `components/sections/`
2. Importing and using it in `app/page.tsx`
3. Adding navigation links in `components/layout/header.tsx`

## 🔧 Configuration Files

### Next.js Configuration (`next.config.js`)
```javascript
const nextConfig = {
  output: 'export',           // Static export for GitHub Pages
  trailingSlash: true,        // Required for static hosting
  images: { unoptimized: true }, // Disable image optimization
  basePath: '/mason-kim',     // GitHub Pages subdirectory
  assetPrefix: '/mason-kim/', // Asset path prefix
}
```

### TailwindCSS (`tailwind.config.js`)
- Custom color scheme with CSS variables
- shadcn/ui integration
- Custom animations and utilities

## 📊 SEO & Analytics

### Included SEO Features
- Meta tags (title, description, keywords)
- Open Graph tags for social sharing
- Twitter Card optimization
- Structured data markup
- XML sitemap (`/sitemap.xml`)
- Robots.txt (`/robots.txt`)

### Analytics Integration
To add Google Analytics:
1. Add your GA4 measurement ID to environment variables
2. Include the tracking script in `app/layout.tsx`

## 🐛 Troubleshooting

### Common Issues

**Build Errors**
- Ensure all dependencies are installed: `npm ci`
- Check Node.js version (18+ required)

**Routing Issues on GitHub Pages**
- Verify `basePath` in `next.config.js`
- Ensure `trailingSlash: true` is set

**Images Not Loading**
- Use `next/image` with `unoptimized: true`
- Place images in `public/` directory

**Theme Toggle Not Working**
- Check `suppressHydrationWarning` in layout
- Verify ThemeProvider wraps the application

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**Mason Kim** - Global DevOps Engineer
- Email: mason@example.com
- LinkedIn: [linkedin.com/in/mason-kim](https://linkedin.com/in/mason-kim)
- GitHub: [github.com/mason-kim](https://github.com/mason-kim)

---

**Portfolio URL**: [https://mason-kim.github.io/mason-kim](https://mason-kim.github.io/mason-kim)

Built with ❤️ using Next.js and deployed on GitHub PagesA curated, open-source portfolio of my projects and write-ups—built in public and served via GitHub Pages for anyone to explore.
