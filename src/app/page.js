import Header from '../components/Header';
import Hero from '../components/Hero';
import Portfolio from '../components/Portfolio';
import Blog from '../components/Blog';
import About from '../components/About';
import CV from '../components/CV';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Portfolio />
      <Blog />
      <About />
      <CV />
      <Contact />
      <Footer />
    </main>
  );
}