import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Muna Bhattarai - Cloud Engineer & Women in Tech Advocate',
  description: 'Cloud Engineer specializing in AWS, DevOps, and AI/ML implementations. AWS Community Builder based in Kathmandu, Nepal.',
  keywords: ['Muna Bhattarai', 'Cloud Engineering', 'AWS', 'DevOps', 'GenAI', 'Python', 'Terraform', 'Nepal'],
  authors: [{ name: 'Muna Bhattarai' }],
  creator: 'Muna Bhattarai',
  openGraph: {
    title: 'Muna Bhattarai - Cloud Engineer & Women in Tech Advocate',
    description: 'Cloud Engineer specializing in AWS, DevOps, and GenAI implementations.',
    url: 'https://munabhattarai.com.np',
    siteName: 'Muna Bhattarai Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muna Bhattarai - Cloud Engineer & Women in Tech Advocate',
    description: 'Cloud Engineer specializing in AWS, DevOps, and Gen implementations.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://munabhattarai.com.np" />
      </head>
      <body className="antialiased">
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          {children}
        </div>
      </body>
    </html>
  )
}
