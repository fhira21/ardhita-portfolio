import '../styles/globals.css'

export const metadata = {
  title: 'Ardhita Setyaningrum - Portfolio',
  description: 'Professional Portfolio of Ardhita Setyaningrum - Sales Professional & Customer Service Specialist',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}