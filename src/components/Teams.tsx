import React, { useState } from 'react';
import { Gamepad2, ChevronRight } from 'lucide-react';

type GameTitle = 'valorant' | 'lol' | 'apex' | 'csgo' | 'rocket-league';

interface Player {
  id: number;
  name: string;
  role: string;
  photo: string;
  country: string;
}

interface TeamData {
  title: string;
  players: Player[];
  logo: string;
  accent: string;
}

export const Teams: React.FC = () => {
  const [activeGame, setActiveGame] = useState<GameTitle>('valorant');
  
  const teams: Record<GameTitle, TeamData> = {
    'valorant': {
      title: 'Valorant',
      logo: 'https://images.pexels.com/photos/7915357/pexels-photo-7915357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      accent: 'from-red-500/20 to-red-700/20',
      players: [
        { id: 1, name: 'MeDzy', role: 'Entry Fragger', photo: 'https://images.pexels.com/photos/1205033/pexels-photo-1205033.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', country: 'USA' },
        { id: 2, name: 'VTNT', role: 'Controller', photo: 'https://images.pexels.com/photos/7690806/pexels-photo-7690806.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', country: 'Canada' },
        { id: 3, name: 'Craddy', role: 'Sentinel', photo: 'https://images.pexels.com/photos/7915464/pexels-photo-7915464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', country: 'UK' },
        { id: 4, name: 'Snowy', role: 'Initiator', photo: 'https://images.pexels.com/photos/3831183/pexels-photo-3831183.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', country: 'Russia' },
        { id: 5, name: 'Wv', role: 'Support', photo: 'https://images.pexels.com/photos/4022812/pexels-photo-4022812.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', country: 'China' },
      ]
    },
    'lol': {
      title: 'League of Legends',
      logo: 'https://images.pexels.com/photos/6499272/pexels-photo-6499272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      accent: 'from-blue-500/20 to-blue-700/20',
      players: [
        { id: 1, name: 'MeDzy', role: 'Mid Lane', photo: 'https://images.pexels.com/photos/4006576/pexels-photo-4006576.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', country: 'USA' },
        { id: 2, name: 'VTNT', role: 'ADC', photo: 'https://images.pexels.com/photos/6330644/pexels-photo-6330644.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', country: 'Canada' },
        { id: 3, name: 'Craddy', role: 'Support', photo: 'https://images.pexels.com/photos/5082963/pexels-photo-5082963.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', country: 'UK' },
        { id: 4, name: 'Snowy', role: 'Top Lane', photo: 'https://images.pexels.com/photos/7869240/pexels-photo-7869240.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', country: 'Russia' },
        { id: 5, name: 'Wv', role: 'Jungle', photo: 'https://images.pexels.com/photos/8106773/pexels-photo-8106773.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', country: 'China' },
      ]
    },
    'apex': {
      title: 'Apex Legends',
      logo: 'https://images.pexels.com/photos/13596151/pexels-photo-13596151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      accent: 'from-orange-500/20 to-orange-700/20',
      players: [
        { id: 1, name: 'MeDzy', role: 'Scout', photo: 'https://images.pexels.com/photos/8471739/pexels-photo-8471739.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', country: 'USA' },
        { id: 2, name: 'VTNT', role: 'Entry', photo: 'https://images.pexels.com/photos/7562313/pexels-photo-7562313.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', country: 'Canada' },
        { id: 3, name: 'Craddy', role: 'Support', photo: 'https://images.pexels.com/photos/6498313/pexels-photo-6498313.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', country: 'UK' },
      ]
    },
    'csgo': {
      title: 'CS:GO',
      logo: 'https://images.pexels.com/photos/3403505/pexels-photo-3403505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      accent: 'from-green-500/20 to-green-700/20',
      players: [
        { id: 1, name: 'MeDzy', role: 'AWPer', photo: 'https://images.pexels.com/photos/7915509/pexels-photo-7915509.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', country: 'USA' },
        { id: 2, name: 'VTNT', role: 'Rifler', photo: 'https://images.pexels.com/photos/7915575/pexels-photo-7915575.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', country: 'Canada' },
        { id: 3, name: 'Craddy', role: 'In-Game Leader', photo: 'https://images.pexels.com/photos/7915264/pexels-photo-7915264.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', country: 'UK' },
        { id: 4, name: 'Snowy', role: 'Lurker', photo: 'https://images.pexels.com/photos/7915251/pexels-photo-7915251.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', country: 'Russia' },
        { id: 5, name: 'Wv', role: 'Support', photo: 'https://images.pexels.com/photos/7915599/pexels-photo-7915599.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', country: 'Poland' },
      ]
    },
    'rocket-league': {
      title: 'Rocket League',
      logo: 'https://images.pexels.com/photos/15351131/pexels-photo-15351131/free-photo-of-photo-of-a-person-playing-a-video-game.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      accent: 'from-purple-500/20 to-purple-700/20',
      players: [
        { id: 1, name: 'MeDzy', role: 'Striker', photo: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', country: 'USA' },
        { id: 2, name: 'VTNT', role: 'Defensive', photo: 'https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', country: 'Canada' },
        { id: 3, name: 'Craddy', role: 'Midfield', photo: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', country: 'UK' },
      ]
    }
  };
  
  const activeTeam = teams[activeGame];
  
  return (
    <section id="teams" className="py-20 bg-charcoal-900/50 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900 via-charcoal-900/95 to-charcoal-900"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-16 text-center">
          <h6 className="text-violet-500 font-display uppercase tracking-widest mb-3">Meet the roster</h6>
          <h2 className="section-title">Our Teams</h2>
        </div>
        
        {/* Game selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {(Object.keys(teams) as GameTitle[]).map((game) => (
            <button
              key={game}
              className={`py-3 px-6 rounded-full font-display uppercase tracking-wider text-sm transition-all duration-300 flex items-center gap-2 ${
                activeGame === game 
                  ? 'bg-violet-700 text-white shadow-lg shadow-violet-700/30' 
                  : 'bg-charcoal-800 text-gray-400 hover:bg-charcoal-700 hover:text-gray-200'
              }`}
              onClick={() => setActiveGame(game)}
            >
              <Gamepad2 className="w-4 h-4" />
              {teams[game].title}
            </button>
          ))}
        </div>
        
        {/* Team display */}
        <div className="flex flex-col gap-16">
          {/* Team header */}
          <div className="relative rounded-xl overflow-hidden">
            <div className="relative h-64 md:h-80 overflow-hidden">
              <img 
                src={activeTeam.logo} 
                alt={`${activeTeam.title} team`} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${activeTeam.accent} opacity-50`}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-charcoal-900/50 to-transparent"></div>
            </div>
            
            <div className="absolute bottom-0 left-0 w-full p-8">
              <h3 className="text-4xl font-bold text-white mb-2">LDE {activeTeam.title}</h3>
              <p className="text-gray-300 mb-4 max-w-2xl">
                Our elite {activeTeam.title} squad competes at the highest level, consistently placing in premier tournaments worldwide.
              </p>
              <a href="#tournaments" className="inline-flex items-center text-violet-400 font-display uppercase text-sm tracking-wider hover:text-violet-300 transition-colors group">
                View Achievements 
                <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
          
          {/* Players grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {activeTeam.players.map((player) => (
              <div 
                key={player.id}
                className="bg-charcoal-800 rounded-lg overflow-hidden group hover:bg-charcoal-700/80 transition-all duration-300"
              >
                <div className="relative h-64 sm:h-72 overflow-hidden">
                  <img 
                    src={player.photo} 
                    alt={player.name} 
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-charcoal-900/50 to-transparent"></div>
                </div>
                
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-xl font-bold text-white">{player.name}</h4>
                    <span className="text-xs font-medium bg-violet-900/50 text-violet-300 px-2 py-1 rounded uppercase">{player.country}</span>
                  </div>
                  <p className="text-gray-400 font-display uppercase text-sm tracking-wider">{player.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};