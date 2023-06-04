import './globals.css'

export const metadata = {
  title: 'React Form',
  description: 'React Form using Next js App Router',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
