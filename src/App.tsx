import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Teams } from './components/Teams';
import { News } from './components/News';
import { Tournaments } from './components/Tournaments';
import { Sponsors } from './components/Sponsors';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-charcoal-900 relative grid-bg">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Teams />
        <Tournaments />
        <News />
        <Sponsors />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;