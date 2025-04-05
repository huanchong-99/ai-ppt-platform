import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI PPT大师',
  description: '智能演示文稿创作工具',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style>
          {`
            * {
              box-sizing: border-box;
            }
            html, body {
              margin: 0;
              padding: 0;
              height: 100%;
              width: 100%;
            }
            #app-root {
              min-height: 100vh;
              display: block;
            }
          `}
        </style>
      </head>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}