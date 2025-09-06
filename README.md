# EvalX AI Portfolio Website

A modern, responsive portfolio website for EvalX AI - a team specializing in AI data annotation and model evaluation services.

## 🚀 Features

- **Modern Design**: Clean, professional design with glassmorphism effects
- **Responsive**: Fully responsive across all devices
- **Animations**: Smooth animations using Framer Motion
- **SEO Optimized**: Built with Next.js 14 and proper meta tags
- **Fast Performance**: Optimized for speed and user experience
- **TypeScript**: Full type safety throughout the application

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod
- **Notifications**: React Hot Toast
- **Deployment**: Vercel (recommended)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (version 18 or higher)
- npm or yarn package manager

## 🚀 Getting Started

### 1. Install Node.js

First, install Node.js from [nodejs.org](https://nodejs.org/)

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### 4. Build for Production

```bash
npm run build
```

## 📁 Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── layout/           # Layout components
│   ├── sections/         # Page sections
│   └── ui/              # Reusable UI components
├── data/                 # Static data
│   ├── team.ts          # Team member data
│   ├── services.ts      # Services data
│   └── portfolio.ts     # Portfolio items
├── lib/                  # Utility functions
│   └── utils.ts         # Common utilities
└── types/               # TypeScript types
    └── index.ts         # Type definitions
```

## 🎨 Customization

### Colors

The color scheme is defined in `tailwind.config.js`:

```javascript
evalx: {
  blue: '#2563eb',
  purple: '#7c3aed',
  cyan: '#06b6d4',
  dark: '#0f172a',
  light: '#f8fafc',
}
```

### Content

Update the content in the `src/data/` directory:
- `team.ts` - Team member information
- `services.ts` - Service offerings
- `portfolio.ts` - Portfolio projects

### Styling

Global styles are in `src/app/globals.css`. Component-specific styles use Tailwind CSS classes.

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚀 Deployment

### Vercel (Recommended)

**📋 Quick Setup:**
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set environment variables (see DEPLOYMENT.md)
4. Deploy automatically

**📖 Detailed Guide:**
See [DEPLOYMENT.md](./DEPLOYMENT.md) for complete deployment instructions including:
- Environment variable setup
- Email configuration
- Image optimization
- Troubleshooting

### Other Platforms

The site can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform

## 📈 SEO

The website includes:
- Meta tags for social sharing
- Open Graph tags
- Twitter Card support
- Structured data (can be added)
- Sitemap generation (can be added)

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Code Style

- Use TypeScript for all components
- Follow ESLint configuration
- Use Tailwind CSS for styling
- Implement proper accessibility features

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Contact

For questions or support, contact the EvalX AI team.

---

**Built with ❤️ by the EvalX AI Team**
