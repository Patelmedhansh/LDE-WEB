import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { JoinModal } from './JoinModal';

export const Hero: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const particleContainerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!particleContainerRef.current) return;
    
    const container = particleContainerRef.current;
    const particles: HTMLDivElement[] = [];
    const numParticles = 50;
    
    // Create particles
    for (let i = 0; i < numParticles; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      
      // Random position
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      
      particle.style.left = `${x}%`;
      particle.style.top = `${y}%`;
      
      // Random size
      const size = Math.random() * 4 + 1;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      // Random opacity
      particle.style.opacity = `${Math.random() * 0.5 + 0.3}`;
      
      // Random animation
      const duration = Math.random() * 20 + 10;
      particle.style.animation = `float ${duration}s ease-in-out infinite`;
      particle.style.animationDelay = `${Math.random() * 5}s`;
      
      container.appendChild(particle);
      particles.push(particle);
    }
    
    // Animate particles on mousemove
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const rect = container.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const moveX = (clientX - centerX) / 50;
      const moveY = (clientY - centerY) / 50;
      
      particles.forEach(particle => {
        const speed = parseFloat(particle.style.opacity) * 5;
        particle.style.transform = `translate(${moveX * speed}px, ${moveY * speed}px)`;
      });
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      particles.forEach(particle => particle.remove());
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Particle background */}
      <div ref={particleContainerRef} className="particle-container"></div>
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900/50 via-transparent to-charcoal-900"></div>
      
      <div className="container relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white relative inline-block">
          <span className="relative inline-block">
            <span className="hero-text-glitch">LEAD</span>
            <div className="absolute inset-0 animate-pulse-slow bg-gradient-to-r from-transparent via-violet-500/20 to-transparent"></div>
          </span>
          {" "}
          <span className="relative inline-block">
            <span className="hero-text-glitch">DOMINATE</span>
            <div className="absolute inset-0 animate-pulse-slow bg-gradient-to-r from-transparent via-violet-500/20 to-transparent animate-delay-200"></div>
          </span>
          {" "}
          <span className="relative inline-block">
            <span className="hero-text-glitch">ELIMINATE</span>
            <div className="absolute inset-0 animate-pulse-slow bg-gradient-to-r from-transparent via-violet-500/20 to-transparent animate-delay-400"></div>
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
          Join the elite gaming organization pushing the boundaries of competitive excellence.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a href="#teams" className="btn btn-primary">
            Meet Our Teams
          </a>
          <button onClick={() => setIsModalOpen(true)} className="btn btn-secondary">
            Join LDE
          </button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-10 h-10 text-violet-400" />
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -bottom-4 left-0 w-full h-16 bg-charcoal-900 skew-y-1"></div>

      {/* Join Modal */}
      <JoinModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};