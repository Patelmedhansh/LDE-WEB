import React, { useState, useEffect } from 'react';
import { Swords, Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-charcoal-900/95 backdrop-blur-md py-2 shadow-md shadow-violet-900/20' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="/" className="flex items-center gap-2">
          <Swords className="h-8 w-8 text-violet-500" />
          <span className="font-display text-2xl font-bold tracking-wider text-white">
            L<span className="text-violet-500">D</span>E
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#about" className="nav-link">About</a>
          <a href="#teams" className="nav-link">Teams</a>
          <a href="#tournaments" className="nav-link">Tournaments</a>
          <a href="#news" className="nav-link">News</a>
          <a href="#sponsors" className="nav-link">Sponsors</a>
          <a href="#gallery" className="nav-link">Gallery</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white hover:text-violet-400 transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden absolute w-full bg-charcoal-800/95 backdrop-blur-md transition-all duration-300 ${
          isMenuOpen ? 'top-full opacity-100' : '-top-[400px] opacity-0'
        }`}
      >
        <nav className="container mx-auto py-4 px-4 flex flex-col gap-4">
          <a href="#about" className="nav-link py-2" onClick={toggleMenu}>About</a>
          <a href="#teams" className="nav-link py-2" onClick={toggleMenu}>Teams</a>
          <a href="#tournaments" className="nav-link py-2" onClick={toggleMenu}>Tournaments</a>
          <a href="#news" className="nav-link py-2" onClick={toggleMenu}>News</a>
          <a href="#sponsors" className="nav-link py-2" onClick={toggleMenu}>Sponsors</a>
          <a href="#gallery" className="nav-link py-2" onClick={toggleMenu}>Gallery</a>
          <a href="#contact" className="nav-link py-2" onClick={toggleMenu}>Contact</a>
        </nav>
      </div>
    </header>
  );
};