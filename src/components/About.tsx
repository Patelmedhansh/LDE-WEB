import React from 'react';
import { Trophy, Users, Target, Zap } from 'lucide-react';

export const About: React.FC = () => {
  const stats = [
    { icon: <Trophy className="w-8 h-8 text-accent-500" />, value: '15+', label: 'Championships' },
    { icon: <Users className="w-8 h-8 text-accent-500" />, value: '50+', label: 'Pro Players' },
    { icon: <Target className="w-8 h-8 text-accent-500" />, value: '5', label: 'Game Divisions' },
    { icon: <Zap className="w-8 h-8 text-accent-500" />, value: '10M+', label: 'Social Followers' },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 bg-hex-pattern"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-16 text-center">
          <h6 className="text-violet-500 font-display uppercase tracking-widest mb-3">Who We Are</h6>
          <h2 className="section-title">About LDE</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-lg text-gray-300 mb-6">
              <span className="text-violet-400 font-bold">LDE</span> (Lead Dominate Eliminate) was founded in 2020 by a group of passionate gamers with a vision to create an organization that not only competes at the highest level but also pushes the boundaries of what's possible in esports.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              Our mission is to cultivate talent, foster innovation, and create a community where players can thrive. We believe in the power of strategic gameplay, disciplined training, and a supportive team environment.
            </p>
            <p className="text-lg text-gray-300 mb-10">
              Today, LDE fields competitive teams across multiple gaming titles, including Valorant, League of Legends, Apex Legends, CS:GO, and Rocket League. Our players represent the pinnacle of competitive excellence, and our support staff ensures they have everything they need to succeed.
            </p>
            
            <div className="relative">
              <a href="#teams" className="btn btn-primary">Explore Our Teams</a>
              <div className="absolute -inset-1 bg-violet-500/20 blur-xl animate-pulse-slow -z-10"></div>
            </div>
          </div>
          
          <div className="relative">
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="bg-charcoal-800/80 backdrop-blur-sm p-6 rounded-lg relative overflow-hidden group hover:bg-charcoal-700/80 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="flex items-center gap-4 mb-2">
                    {stat.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-1">{stat.value}</h3>
                  <p className="text-gray-400 font-display uppercase text-sm tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-40 h-40 bg-violet-600/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-violet-600/5 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};