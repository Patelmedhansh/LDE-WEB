import React from 'react';
import { Swords, Twitter, Instagram, Twitch, Youtube, Facebook, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-charcoal-950 pt-16 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 bg-hex-pattern"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand & About */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Swords className="h-8 w-8 text-violet-500" />
              <span className="font-display text-2xl font-bold tracking-wider text-white">
                L<span className="text-violet-500">D</span>E
              </span>
            </div>
            
            <p className="text-gray-400 mb-6">
              Lead Dominate Eliminate is a premier esports organization fielding competitive teams across multiple gaming titles. 
              Our mission is to push the boundaries of what's possible in esports.
            </p>
            
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-charcoal-800 flex items-center justify-center text-gray-400 hover:bg-violet-700 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-charcoal-800 flex items-center justify-center text-gray-400 hover:bg-violet-700 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-charcoal-800 flex items-center justify-center text-gray-400 hover:bg-violet-700 hover:text-white transition-colors">
                <Twitch className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-charcoal-800 flex items-center justify-center text-gray-400 hover:bg-violet-700 hover:text-white transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-white font-display text-lg uppercase tracking-wider mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-400 hover:text-violet-400 transition-colors">About Us</a></li>
              <li><a href="#teams" className="text-gray-400 hover:text-violet-400 transition-colors">Our Teams</a></li>
              <li><a href="#tournaments" className="text-gray-400 hover:text-violet-400 transition-colors">Tournaments</a></li>
              <li><a href="#news" className="text-gray-400 hover:text-violet-400 transition-colors">News</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-violet-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Games */}
          <div>
            <h4 className="text-white font-display text-lg uppercase tracking-wider mb-6">Our Games</h4>
            <ul className="space-y-3">
              <li><a href="#teams" className="text-gray-400 hover:text-violet-400 transition-colors">Valorant</a></li>
              <li><a href="#teams" className="text-gray-400 hover:text-violet-400 transition-colors">League of Legends</a></li>
              <li><a href="#teams" className="text-gray-400 hover:text-violet-400 transition-colors">Apex Legends</a></li>
              <li><a href="#teams" className="text-gray-400 hover:text-violet-400 transition-colors">CS:GO</a></li>
              <li><a href="#teams" className="text-gray-400 hover:text-violet-400 transition-colors">Rocket League</a></li>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h4 className="text-white font-display text-lg uppercase tracking-wider mb-6">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-violet-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-violet-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-violet-400 transition-colors">Code of Conduct</a></li>
              <li><a href="#" className="text-gray-400 hover:text-violet-400 transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-violet-400 transition-colors">Media Kit</a></li>
            </ul>
          </div>
        </div>
        
        <div className="py-6 border-t border-charcoal-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} LDE Esports. All rights reserved.
          </p>
          
          <div className="flex gap-4">
            <a href="#" className="text-gray-500 hover:text-violet-400 transition-colors text-sm">
              Sponsorship
            </a>
            <a href="#" className="text-gray-500 hover:text-violet-400 transition-colors text-sm">
              Business Inquiries
            </a>
            <a href="#" className="text-gray-500 hover:text-violet-400 transition-colors text-sm">
              Media
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};