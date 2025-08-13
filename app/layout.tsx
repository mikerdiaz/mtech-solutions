import './globals.css';
import AOSInitializer from './components/AOSInitializer';
import ThemeToggle from './components/ThemeToggle';
import { Analytics } from "@vercel/analytics/next";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme');
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
        <AOSInitializer />
        <div className="fixed top-4 right-4 z-50">
          <ThemeToggle />
        </div>
        {children}
        <Analytics />
      </body>
    </html>
  );
}