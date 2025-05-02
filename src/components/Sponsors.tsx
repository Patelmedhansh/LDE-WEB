import React from 'react';
import { ExternalLink } from 'lucide-react';

export const Sponsors: React.FC = () => {
  // Mock sponsor logos using rectangles with text
  // In a real implementation, these would be actual sponsor logos
  const sponsors = [
    { id: 1, name: 'TechGear Pro', tier: 'platinum' },
    { id: 2, name: 'Vertex Energy', tier: 'platinum' },
    { id: 3, name: 'QuantumX', tier: 'gold' },
    { id: 4, name: 'Synergy Gaming', tier: 'gold' },
    { id: 5, name: 'PulseWave', tier: 'gold' },
    { id: 6, name: 'NeoStream', tier: 'silver' },
    { id: 7, name: 'FluxWire', tier: 'silver' },
    { id: 8, name: 'CyberPulse', tier: 'silver' },
  ];

  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'platinum':
        return 'from-slate-300 to-white';
      case 'gold':
        return 'from-yellow-300 to-yellow-500';
      case 'silver':
        return 'from-gray-300 to-gray-400';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <section id="sponsors" className="py-20 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 bg-hex-pattern"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-16 text-center">
          <h6 className="text-violet-500 font-display uppercase tracking-widest mb-3">Our Partners</h6>
          <h2 className="section-title">Sponsors</h2>
        </div>
        
        <div className="text-center mb-12">
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            We're proud to be supported by industry-leading brands who share our vision for excellence in esports. 
            Our partnerships enable us to provide the best resources for our players and fans.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {sponsors.map((sponsor) => (
            <div 
              key={sponsor.id}
              className="bg-charcoal-800/80 backdrop-blur-sm p-6 rounded-lg flex items-center justify-center relative group overflow-hidden hover:bg-charcoal-700/80 transition-all duration-300"
            >
              {/* Background gradient based on tier */}
              <div className={`absolute inset-0 bg-gradient-to-br ${getTierColor(sponsor.tier)} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
              
              {/* For demo purposes, using text instead of actual logos */}
              <div className="text-center relative z-10">
                <p className="font-display text-xl font-bold">{sponsor.name}</p>
                <p className="text-xs uppercase tracking-wider text-gray-400 mt-1">{sponsor.tier} partner</p>
              </div>
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-charcoal-800/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a 
                  href="#" 
                  className="font-display uppercase text-sm tracking-wider text-white flex items-center gap-2 hover:text-violet-400 transition-colors"
                >
                  <span>Visit Website</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex flex-col items-center">
          <h3 className="text-2xl font-bold text-white mb-6">Become a Sponsor</h3>
          <p className="text-lg text-gray-300 max-w-2xl text-center mb-8">
            Interested in partnering with LDE? We offer various sponsorship packages tailored to meet your brand's objectives. 
            Connect with our partnership team to learn more.
          </p>
          <a href="#contact" className="btn btn-primary">Contact Us</a>
        </div>
      </div>
    </section>
  );
};