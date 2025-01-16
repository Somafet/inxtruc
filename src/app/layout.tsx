import localFont from 'next/font/local'
import { twMerge } from 'tailwind-merge'

import '@/styles/tailwind.css'
import { type Metadata } from 'next'

const poppins = localFont({
  src: [
    { path: 'fonts/poppins/Poppins-Thin.ttf', weight: '100' },
    { path: 'fonts/poppins/Poppins-Light.ttf', weight: '300' },
    { path: 'fonts/poppins/Poppins-Regular.ttf', weight: '400' },
    { path: 'fonts/poppins/Poppins-Medium.ttf', weight: '500' },
    { path: 'fonts/poppins/Poppins-SemiBold.ttf', weight: '600' },
    { path: 'fonts/poppins/Poppins-Bold.ttf', weight: '700' },
    {
      path: 'fonts/poppins/Poppins-ExtraBold.ttf',
      weight: '800',
    },
  ],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    template: '%s - Inxtruc',
    default: 'Inxtruc - Guiding Families, Step by Step',
  },

  description:
    'Inxtruc: Create and share step-by-step tutorials within your household. From recipes to repairs, streamline family knowledge sharing with this easy-to-use app. Join the waitlist today!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={twMerge(
        'h-full bg-gray-100 antialiased dark:bg-gray-900',
        poppins.className,
      )}
    >
      <body className="flex h-full flex-col">
        <div className="flex min-h-full flex-col">{children}</div>
      </body>
    </html>
  )
}
