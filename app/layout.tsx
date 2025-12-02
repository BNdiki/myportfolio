import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Brian N. Njenga | Cybersecurity Engineer',
  description: 'Cybersecurity Engineer & AI/ML Security Specialist specializing in IoT threat detection and adversarial machine learning defense',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
