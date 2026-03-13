import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Engineers } from './components/Engineers';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Engineers />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
