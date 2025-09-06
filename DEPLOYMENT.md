

# Deployment Guide for EvalX AI Portfolio

## 🚀 Vercel Deployment

This guide will help you deploy your EvalX AI Portfolio to Vercel via GitHub.

### Prerequisites

1. **GitHub Account** - Your code should be in a GitHub repository
2. **Vercel Account** - Sign up at [vercel.com](https://vercel.com)
3. **Email Configuration** - For contact form functionality

### Step 1: Prepare Your Repository

✅ **Already Done:**
- Large files (>100MB) are excluded via `.gitignore`
- Images are optimized and use fallback paths
- Build process is verified and working
- Production configuration is set up

### Step 2: Push to GitHub

```bash
# Initialize git if not already done
git init

# Add all files (large files will be ignored)
git add .

# Commit your changes
git commit -m "Production-ready portfolio for Vercel deployment"

# Add your GitHub repository as remote
git remote add origin https://github.com/yourusername/evalx-ai-portfolio.git

# Push to GitHub
git push -u origin main
```

### Step 3: Deploy to Vercel

1. **Connect GitHub Repository:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Select the repository: `evalx-ai-portfolio`

2. **Configure Environment Variables:**
   - In Vercel dashboard, go to your project settings
   - Navigate to "Environment Variables"
   - Add the following variables:
     ```
     EMAIL_USER=your-email@gmail.com
     EMAIL_PASS=your-app-password
     ```

3. **Deploy:**
   - Click "Deploy"
   - Vercel will automatically build and deploy your site

### Step 4: Email Configuration

For the contact form to work, you need to set up email:

1. **Gmail Setup:**
   - Enable 2-factor authentication on your Gmail account
   - Generate an App Password:
     - Go to Google Account settings
     - Security → 2-Step Verification → App passwords
     - Generate password for "Mail"
   - Use this App Password (not your regular password) as `EMAIL_PASS`

2. **Alternative Email Services:**
   - You can modify the email configuration in `src/app/api/contact/route.ts`
   - Update the transporter configuration for your preferred email service

### Step 5: Optimize Images (Optional)

The current setup uses placeholder images for large GIFs. To add actual optimized images:

1. **Optimize your GIF files:**
   - Use tools like [TinyPNG](https://tinypng.com) or [Squoosh](https://squoosh.app)
   - Convert GIFs to optimized MP4 or WebP formats
   - Keep file sizes under 10MB for better performance

2. **Replace placeholders:**
   - Replace files in `public/Portfolio_data/optimized/`
   - Update the image paths in `src/app/page.tsx` if needed

### Step 6: Custom Domain (Optional)

1. **Add Custom Domain:**
   - In Vercel dashboard, go to your project
   - Navigate to "Domains"
   - Add your custom domain
   - Follow DNS configuration instructions

### Performance Optimizations

✅ **Already Implemented:**
- Image optimization with WebP/AVIF support
- Code splitting and chunk optimization
- Compression enabled
- Security headers configured
- Static generation for better performance

### Monitoring and Analytics

1. **Vercel Analytics:**
   - Enable Vercel Analytics in your project dashboard
   - Monitor performance and user behavior

2. **Error Monitoring:**
   - Consider adding error tracking (Sentry, LogRocket, etc.)

### Troubleshooting

**Build Failures:**
- Check that all dependencies are in `package.json`
- Ensure no large files are committed
- Verify environment variables are set

**Contact Form Issues:**
- Verify email credentials are correct
- Check Vercel function logs for errors
- Test with a simple email first

**Image Loading Issues:**
- Ensure optimized images are in the correct directory
- Check file paths in the code
- Verify fallback images exist

### File Structure

```
evalx-ai-portfolio/
├── .gitignore                 # Excludes large files
├── .env.example              # Environment variables template
├── vercel.json               # Vercel configuration
├── next.config.js            # Next.js production config
├── package.json              # Dependencies
├── public/
│   ├── Portfolio_data/
│   │   └── optimized/        # Optimized images only
│   └── logo-*.svg
├── src/
│   ├── app/
│   │   ├── api/contact/      # Contact form API
│   │   └── page.tsx          # Main page
│   └── components/           # React components
└── scripts/
    └── optimize-images.js    # Image optimization script
```

### Support

If you encounter any issues:
1. Check Vercel deployment logs
2. Verify all environment variables are set
3. Test the build locally with `npm run build`
4. Check the GitHub repository for any missing files

---

**🎉 Your portfolio is now ready for production deployment!**
