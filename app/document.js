import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        {/* Adobe Typekit preload example */}
        <link
          rel="preload"
          href="https://use.typekit.net/af/efe4a5.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        {/* Otras fuentes, meta tags, etc. */}
      </Head>
      <body className="bg-white text-black dark:bg-primary dark:text-white transition-colors duration-300 antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}