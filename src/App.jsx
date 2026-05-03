import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Timeline from './components/sections/Timeline';
import Gallery from './components/sections/Gallery';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Timeline />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
