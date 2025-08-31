# Muna Bhattarai - Professional Portfolio

![Portfolio Banner](https://img.shields.io/badge/Portfolio-Live-blue?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-15.5.2-black?style=for-the-badge&logo=nextdotjs)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-blue?style=for-the-badge&logo=tailwindcss)
![TypeScript](https://img.shields.io/badge/TypeScript-blue?style=for-the-badge&logo=typescript)
![Cloudflare](https://img.shields.io/badge/Cloudflare-Pages-orange?style=for-the-badge&logo=cloudflare)

A modern, responsive portfolio website showcasing expertise in AWS Cloud Engineering, DevOps, GenAI implementations, and Women in Tech advocacy. Built with Next.js 15.5.2 and deployed on Cloudflare Pages.

## 🌟 Portfolio Highlights

- **🔥 Modern Design**: Clean, professional UI with smooth Framer Motion animations
- **⚡ Performance Optimized**: Next.js 15.5.2 with App Router for lightning-fast loading
- **📱 Fully Responsive**: Perfect experience across desktop, tablet, and mobile devices  
- **🎯 SEO Optimized**: Comprehensive meta tags and structured data for search engines
- **♿ Accessible**: WCAG compliant with proper ARIA labels and keyboard navigation
- **☁️ Cloud Native**: Automated CI/CD deployment to Cloudflare Pages
- **🏆 Professional Showcase**: 12+ AWS/Azure/GCP certifications display
- **📊 Interactive Skills**: Dynamic skill categories with hover effects
- **💼 Project Portfolio**: Featured projects with live demos and GitHub links

## 🚀 Tech Stack

- **Framework**: [Next.js 15.5.2](https://nextjs.org/) with App Router
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- **Animations**: [Framer Motion](https://www.framer.com/motion/) for smooth interactions
- **Icons**: [Lucide React](https://lucide.dev/) for consistent iconography
- **TypeScript**: Full type safety throughout the application
- **Deployment**: [Cloudflare Pages](https://pages.cloudflare.com/) with GitHub Actions
- **Domain**: Custom domain munabhattarai.com.np

## 🏗️ Project Structure

```
portfolio-website/
├── public/                 # Static assets & certificates
│   ├── badges/            # Professional certification badges
│   ├── Professional-picture.jpg
│   └── Muna-Bhattarai-CV.pdf
├── src/
│   ├── app/               # Next.js 15.5.2 app router
│   │   ├── globals.css    # Global Tailwind styles
│   │   ├── layout.tsx     # Root layout with metadata
│   │   └── page.tsx       # Main portfolio page
│   ├── components/        # React components
│   │   ├── About.tsx      # About Me section
│   │   ├── Blog.tsx       # Medium blog integration
│   │   ├── Contact.tsx    # Contact form with icons
│   │   ├── Experience.tsx # Professional journey
│   │   ├── Footer.tsx     # Site footer with social links
│   │   ├── Hero.tsx       # Hero section with CTA
│   │   ├── Navbar.tsx     # Responsive navigation
│   │   ├── Projects.tsx   # Featured project showcase
│   │   └── Skills.tsx     # Technical skills & certifications
│   └── lib/
│       └── utils.ts       # Utility functions
├── .github/workflows/     # GitHub Actions for deployment
├── next.config.js         # Next.js configuration
├── tailwind.config.js     # Tailwind CSS configuration  
├── tsconfig.json          # TypeScript configuration
└── wrangler.toml          # Cloudflare Pages configuration
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 20.x or later
- npm or yarn package manager
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/GitHer-Muna/Muna-Bhattarai-Portfolio.git
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build production version
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🚀 Deployment

### Cloudflare Pages Setup

1. **Prerequisites**
   - Cloudflare account
   - Domain configured in Cloudflare (munabhattarai.com.np)

2. **GitHub Secrets Required**
   ```
   CLOUDFLARE_ACCOUNT_ID - Your Cloudflare Account ID
   CLOUDFLARE_API_TOKEN - API token with Pages:Edit permissions
   CLOUDFLARE_ZONE_ID - Zone ID for your domain
   ```

3. **Automatic Deployment**
   - Push to `main` branch triggers deployment
   - Pull requests create preview deployments
   - Build command: `npm run build`
   - Output directory: `out`

### Manual Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy with Wrangler**
   ```bash
   npx wrangler pages deploy out --project-name=muna-bhattarai-portfolio
   ```

## 🎨 Customization

### Colors and Theming

The design uses a carefully crafted color palette defined in `tailwind.config.js`:

- **Primary**: Blue shades for professional elements
- **Secondary**: Purple/Pink for community and advocacy themes
- **Accent**: Various gradients for interactive elements

### Content Updates

- **Personal Information**: Update in respective component files
- **Projects**: Modify the projects array in `Projects.tsx`
- **Experience**: Update experience data in `Experience.tsx`
- **Skills**: Customize skills and certifications in `Skills.tsx`

## 👥 About Me

**AWS Community Builder • Cloud Engineer • Women in Tech Advocate**

I'm Muna Bhattarai, an AWS Community Builder (AI Category) and passionate Cloud Engineer based in Kathmandu, Nepal. With expertise in AWS, DevOps, and GenAI implementations, I've:

- 🎓 Mentored **500+ students** in cloud technologies
- 🎤 Delivered **25+ technical talks** at conferences and meetups  
- 🏗️ Organized **20+ tech events** for community growth
- 🏆 Earned **12+ professional certifications** from AWS, Microsoft, Oracle, and HashiCorp
- 💼 Built scalable cloud solutions at PMsquare Nepal using AWS serverless architecture
- 🤖 Specialized in GenAI applications with Amazon Bedrock and RAG systems

### Current Roles & Achievements

- **🎯 AWS Community Builder** (AI Category) - 2025
- **☁️ Google Cloud Learning Path Scholar & Track Lead** - 2025
- **🚀 Fusemachines AI Fellow** (Selected from 3000+ applicants) - 2025
- **⚡ Dan Kohn Scholar** for KubeCon + CloudNativeCon India 2025
- **🎓 Microsoft Learn Student Ambassador** - 2023-Present
- **💻 GitHub Campus Expert** - 2023-Present

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for local development:

```env
# Optional: Analytics or other services
NEXT_PUBLIC_GA_ID=your_google_analytics_id
```

### Domain Configuration

Update the following files for your domain:

- `wrangler.toml` - Cloudflare Pages configuration
- `src/app/layout.tsx` - Meta tags and canonical URLs
- `README.md` - Documentation links

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### Guidelines

1. Follow the existing code style
2. Add proper TypeScript types
3. Test responsive design
4. Optimize for performance
5. Update documentation

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👥 Connect & Collaborate

- **🌐 Website**: [munabhattarai.com.np](https://munabhattarai.com.np)
- **💼 LinkedIn**: [munashree](https://www.linkedin.com/in/munashree/)
- **💻 GitHub**: [@GitHer-Muna](https://github.com/GitHer-Muna)
- **📝 Medium**: [@munashree](https://medium.com/@munashree)
- **📧 Email**: hellomunabhattarai@gmail.com
- **📍 Location**: Kathmandu, Nepal

### Open for Collaboration

- **🎤 Speaking Engagements**: Tech conferences, workshops, and community events
- **👥 Mentorship**: Career guidance and technical mentorship for aspiring cloud engineers
- **💻 Open Source**: Collaboration on cloud and AI/ML projects
- **☁️ Consulting**: AWS cloud architecture and DevOps implementations

## 🏆 Recent Recognition & Achievements

- **🎫 AWS All Builders Welcome Grant** - AWS re:Invent 2024 ($15K+ value)
- **☸️ Dan Kohn Scholar** - KubeCon + CloudNativeCon India 2025  
- **🚀 Google Cloud Launchpad Scholar** - Elite cloud infrastructure program
- **🤖 AWS AI/ML Scholar** - Advanced AI/ML Nanodegree with Udacity
- **🥇 Hult Prize On Campus Winner** - Global entrepreneurship competition
- **🎓 National ICT Scholarship** - Full scholarship for B.Sc.(Hons) IT degree

---

**Built with ❤️ by Muna Bhattarai** | Empowering through technology ⚡
