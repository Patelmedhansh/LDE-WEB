import React, { useState } from 'react';
import { CalendarDays, User, ChevronRight } from 'lucide-react';
import { NewsModal } from './NewsModal';

interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  image: string;
  category: 'News' | 'Results' | 'Announcement' | 'Interview';
}

export const News: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<NewsItem | null>(null);

  const newsItems: NewsItem[] = [
    {
      id: 1,
      title: 'LDE Signs New Valorant Roster Ahead of Champions Arena',
      excerpt: 'LDE welcomes five new players to our Valorant division as we prepare for the upcoming Champions Arena 2025 tournament.',
      content: `We are thrilled to announce the signing of our new Valorant roster, featuring some of the most talented players in the competitive scene. This strategic move comes as we prepare for the highly anticipated Champions Arena 2025 tournament.

The new roster brings together a perfect blend of experienced veterans and rising stars, each chosen for their exceptional skills and strategic mindset. Our new team has already begun intensive training at our state-of-the-art facility, working closely with our coaching staff to develop new strategies and perfect their synergy.

This signing represents a significant milestone in LDE's commitment to maintaining a strong presence in the Valorant competitive scene. The team's first official appearance will be at the Champions Arena 2025, where they will face off against the world's top organizations.

Stay tuned for exclusive behind-the-scenes content, player interviews, and training footage as our new roster prepares for their debut under the LDE banner.`,
      date: 'Jan 20, 2025',
      author: 'LDE Staff',
      image: 'https://images.pexels.com/photos/7915548/pexels-photo-7915548.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'Announcement'
    },
    {
      id: 2,
      title: 'Interview with Phantom: "Our Goal is the World Championship"',
      excerpt: 'We sat down with our CS:GO star player Phantom to discuss the team\'s preparation for the upcoming season and their championship aspirations.',
      content: `In an exclusive interview, LDE's CS:GO star player Phantom shared insights into the team's preparation and their ambitious goals for the upcoming season. "Every day, we're pushing ourselves to new limits," says Phantom. "Our goal isn't just to compete – it's to dominate and bring home the World Championship."

The interview delves into the team's rigorous training schedule, their innovative strategies, and the unique team dynamics that have made them one of the most formidable forces in competitive CS:GO. Phantom also discusses the importance of mental preparation and how the team maintains their focus during high-pressure situations.

"The support from our fans has been incredible," Phantom adds. "Their energy motivates us to work harder and aim higher. We're not just playing for ourselves; we're playing for everyone who believes in LDE."

The team's recent performance improvements have caught the attention of analysts and competitors alike, with many predicting LDE to be a strong contender for the World Championship title.`,
      date: 'Jan 15, 2025',
      author: 'Sarah Chen',
      image: 'https://images.pexels.com/photos/7915599/pexels-photo-7915599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'Interview'
    },
    {
      id: 3,
      title: 'LDE Dominate at World Series Finals, Secure First Championship of 2025',
      excerpt: 'Our CS:GO team claimed victory at the World Series Finals in Berlin, defeating rival team Nexus in a thrilling 3-2 series.',
      content: `In a spectacular display of skill and determination, LDE's CS:GO team emerged victorious at the World Series Finals in Berlin, securing their first major championship of 2025. The final match against Nexus was a masterclass in competitive CS:GO, with our team showing exceptional composure and strategic depth throughout the intense five-game series.

The victory was particularly sweet as it came against our long-time rivals, Nexus, in front of a packed arena of passionate fans. The final map went down to the wire, with LDE pulling off an incredible comeback from a 14-11 deficit to win 16-14.

Team captain commented after the victory: "This win is just the beginning. We've been working incredibly hard, and it's amazing to see it pay off. The support from our fans was incredible – they really gave us the energy we needed to push through those final rounds."

This championship victory not only secures LDE's position as a top contender in the CS:GO scene but also marks our first major trophy of what promises to be an exciting 2025 season.`,
      date: 'Feb 5, 2025',
      author: 'Marcus King',
      image: 'https://images.pexels.com/photos/7869555/pexels-photo-7869555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'Results'
    },
  ];

  const getCategoryBadge = (category: NewsItem['category']) => {
    const colors = {
      'News': 'bg-blue-900/50 text-blue-300',
      'Results': 'bg-green-900/50 text-green-300',
      'Announcement': 'bg-violet-900/50 text-violet-300',
      'Interview': 'bg-orange-900/50 text-orange-300',
    };
    
    return <span className={`${colors[category]} px-3 py-1 rounded-full text-xs font-medium uppercase`}>{category}</span>;
  };

  return (
    <section id="news" className="py-20 bg-charcoal-900/50 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900 via-charcoal-900/95 to-charcoal-900"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-16 text-center">
          <h6 className="text-violet-500 font-display uppercase tracking-widest mb-3">Latest Updates</h6>
          <h2 className="section-title">News & Announcements</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <article 
              key={item.id}
              className="bg-charcoal-800/80 backdrop-blur-sm rounded-lg overflow-hidden group hover:transform hover:translate-y-[-5px] transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-charcoal-800/50 to-transparent"></div>
                
                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  {getCategoryBadge(item.category)}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                  <div className="flex items-center gap-1">
                    <CalendarDays className="w-4 h-4" />
                    <span>{item.date}</span>
                  </div>
                  
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span>{item.author}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">{item.title}</h3>
                <p className="text-gray-300 mb-4 line-clamp-3">{item.excerpt}</p>
                
                <button 
                  onClick={() => setSelectedArticle(item)}
                  className="inline-flex items-center text-violet-400 font-display uppercase text-sm tracking-wider hover:text-violet-300 transition-colors group"
                >
                  Read More
                  <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </article>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a href="#" className="btn btn-secondary">View All News</a>
        </div>
      </div>

      {/* News Modal */}
      <NewsModal 
        isOpen={!!selectedArticle}
        onClose={() => setSelectedArticle(null)}
        article={selectedArticle}
      />
    </section>
  );
};