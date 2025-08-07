import './globals.css';
import AOSInitializer from './components/AOSInitializer';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AOSInitializer />
        {children}
      </body>
    </html>
  );
}