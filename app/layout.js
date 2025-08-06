import './globals.css';

export const metadata = {
  title: 'MTech Solutions | Reliable Network Solutions in BC',
  description: 'Professional network installation services in Surrey, Tri-Cities, Burnaby and Metro Vancouver.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="dark">
      <head />
      <body
        className="bg-white text-black dark:bg-primary dark:text-white transition-colors duration-300 ease-in-out antialiased"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}