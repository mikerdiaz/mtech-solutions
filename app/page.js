import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Coverage from './components/Coverage';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="bg-white dark:bg-primary text-black dark:text-white">
     <Header />
     <Hero />
     <Services />
     <About />
     <Coverage />
     <Contact />
     <Footer />
    </main>
  );
}