import { Navigation } from "../components/Navigation"
import { Footer } from "../components/Footer"
import '../styles/globals.css'

export default function RootLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <title>Diego Ramirez</title>
        <meta name="theme-color" content="black"/>
        <meta name="viewport" content="initial-scale=1"></meta>
        <meta name="author" content="Diego Ramirez"/>
        <meta name="keywords" content="Diego, Ramirez, Portfolio, Frontend, React, Next.js"/>
      </head>
      <body>
        <Navigation/>
          {children}
        <Footer/>
      </body>
    </html>
  )
}
