import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Timeline from './components/sections/Timeline';
import Gallery from './components/sections/Gallery';
import Hobbies from './components/sections/Hobbies';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Timeline />
      <Gallery />
      <Hobbies />
      <Footer />
    </div>
  );
}

export default App;
