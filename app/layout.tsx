import './globals.css'

export const metadata = {
  title: 'Mujaheed Said Adam — Full Stack Web Developer',
  description: 'Full Stack Web Developer building fast, secure and scalable web applications. Available for freelance and full-time opportunities.',
  authors: [{ name: 'Mujaheed Said Adam' }],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet"/>
      </head>
      <body>{children}</body>
    </html>
  )
}