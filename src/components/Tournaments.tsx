import React from 'react';
import { Calendar, Trophy, MapPin, Users } from 'lucide-react';

interface Tournament {
  id: number;
  title: string;
  date: string;
  location: string;
  game: string;
  prize: string;
  teams: number;
  image: string;
  status: 'upcoming' | 'completed' | 'live';
  result?: string;
}

export const Tournaments: React.FC = () => {
  const tournaments: Tournament[] = [
    {
      id: 1,
      title: 'Champions Arena 2025',
      date: 'Mar 15-20, 2025',
      location: 'Los Angeles, CA',
      game: 'Valorant',
      prize: '$500,000',
      teams: 16,
      image: 'https://images.pexels.com/photos/1174746/pexels-photo-1174746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      status: 'upcoming'
    },
    {
      id: 2,
      title: 'World Series Finals',
      date: 'Feb 3-5, 2025',
      location: 'Berlin, Germany',
      game: 'CS:GO',
      prize: '$350,000',
      teams: 8,
      image: 'https://images.pexels.com/photos/7869555/pexels-photo-7869555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      status: 'completed',
      result: '1st Place'
    },
    {
      id: 3,
      title: 'Elite Masters Series',
      date: 'Jan 10-12, 2025',
      location: 'Seoul, South Korea',
      game: 'League of Legends',
      prize: '$250,000',
      teams: 10,
      image: 'https://images.pexels.com/photos/7915640/pexels-photo-7915640.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      status: 'completed',
      result: '2nd Place'
    },
  ];

  const getStatusBadge = (status: Tournament['status'], result?: string) => {
    switch (status) {
      case 'upcoming':
        return <span className="bg-violet-900/50 text-violet-300 px-3 py-1 rounded-full text-xs font-medium uppercase">Upcoming</span>;
      case 'live':
        return <span className="bg-accent-600/50 text-accent-300 px-3 py-1 rounded-full text-xs font-medium uppercase flex items-center gap-1">
          <span className="w-2 h-2 bg-accent-300 rounded-full animate-pulse"></span> Live Now
        </span>;
      case 'completed':
        return <span className="bg-green-900/50 text-green-300 px-3 py-1 rounded-full text-xs font-medium uppercase">{result}</span>;
      default:
        return null;
    }
  };

  return (
    <section id="tournaments" className="py-20 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 bg-grid-pattern"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-16 text-center">
          <h6 className="text-violet-500 font-display uppercase tracking-widest mb-3">Competition Schedule</h6>
          <h2 className="section-title">Tournaments</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tournaments.map((tournament) => (
            <div 
              key={tournament.id} 
              className="bg-charcoal-800/80 backdrop-blur-sm rounded-lg overflow-hidden group hover:transform hover:translate-y-[-5px] transition-all duration-300 glowing-border"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={tournament.image} 
                  alt={tournament.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-charcoal-800/50 to-transparent"></div>
                
                {/* Status badge */}
                <div className="absolute top-4 right-4">
                  {getStatusBadge(tournament.status, tournament.result)}
                </div>
                
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <span className="bg-charcoal-800/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium">
                    {tournament.game}
                  </span>
                  <span className="bg-violet-900/50 text-white px-3 py-1 rounded-full text-xs font-medium">
                    ${tournament.prize.replace('$', '')} Prize
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{tournament.title}</h3>
                
                <div className="flex flex-col gap-2 mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-violet-400" />
                    <span className="text-gray-300 text-sm">{tournament.date}</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-violet-400" />
                    <span className="text-gray-300 text-sm">{tournament.location}</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-violet-400" />
                    <span className="text-gray-300 text-sm">{tournament.teams} Teams</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <a 
                    href="#" 
                    className="text-violet-400 font-display uppercase text-sm tracking-wider hover:text-violet-300 transition-colors"
                  >
                    {tournament.status === 'upcoming' ? 'View Details' : 'View Results'}
                  </a>
                  
                  {tournament.status === 'upcoming' && (
                    <button className="py-2 px-4 bg-violet-700/80 hover:bg-violet-600 text-white text-sm font-medium rounded transition-colors">
                      Register
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a href="#" className="btn btn-secondary">View All Tournaments</a>
        </div>
      </div>
    </section>
  );
};