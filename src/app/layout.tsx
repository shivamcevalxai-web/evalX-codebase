import type { Metadata, Viewport } from 'next'
import { Ubuntu } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'
import ErrorBoundary from '@/components/ui/ErrorBoundary'

const ubuntu = Ubuntu({ subsets: ['latin'], weight: ['300','400','500','700'], style: ['normal','italic'] })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export const metadata: Metadata = {
  title: 'EvalX AI - Reliable AI Data Annotation & Model Evaluation',
  description: 'We help startups, research labs, and enterprises with high-quality data labeling, model testing, and evaluation at scale. Powered by humans, 24/7.',
  keywords: 'AI data annotation, LLM evaluation, model testing, data labeling, AI quality assurance',
  authors: [{ name: 'EvalX AI Team' }],
  creator: 'EvalX AI',
  publisher: 'EvalX AI',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://evalxai.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'EvalX AI - Reliable AI Data Annotation & Model Evaluation',
    description: 'We help startups, research labs, and enterprises with high-quality data labeling, model testing, and evaluation at scale.',
    url: 'https://evalxai.com',
    siteName: 'EvalX AI',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'EvalX AI - AI Data Annotation & Model Evaluation',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EvalX AI - Reliable AI Data Annotation & Model Evaluation',
    description: 'We help startups, research labs, and enterprises with high-quality data labeling, model testing, and evaluation at scale.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={ubuntu.className}>
        <ErrorBoundary>
          {children}
        </ErrorBoundary>
        <Toaster
          position="bottom-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#363636',
              color: '#fff',
              fontSize: '14px',
              padding: '12px 16px',
            },
            success: {
              duration: 3000,
              iconTheme: {
                primary: '#10b981',
                secondary: '#fff',
              },
            },
            error: {
              duration: 5000,
              iconTheme: {
                primary: '#ef4444',
                secondary: '#fff',
              },
            },
          }}
        />
      </body>
    </html>
  )
}
