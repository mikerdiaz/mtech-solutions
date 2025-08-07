import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Coverage from './components/Coverage';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import AOSInitializer from './components/AOSInitializer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black dark:bg-primary dark:text-white transition-colors duration-300 ease-in-out antialiased">
      <Header />
      <Hero />
      <Services />
      <About />
      <Coverage />
      <Contact />
      <Footer />
      <Testimonials />
    </main>
  );
}