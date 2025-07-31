import './globals.css'

export const metadata = {
  title: 'MTech Solutions | Reliable Network Solutions in BC',
  description: 'Professional network installation services in Surrey, Tri-Cities, Burnaby and Metro Vancouver.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900">
        {children}
      </body>
    </html>
  )
}
