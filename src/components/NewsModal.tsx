import React, { useEffect } from 'react';
import { X, CalendarDays, User } from 'lucide-react';

interface NewsModalProps {
  isOpen: boolean;
  onClose: () => void;
  article: {
    title: string;
    date: string;
    author: string;
    image: string;
    category: string;
    content: string;
  } | null;
}

export const NewsModal: React.FC<NewsModalProps> = ({ isOpen, onClose, article }) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !article) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal-900/95 backdrop-blur-sm p-4 overflow-y-auto"
      onClick={handleBackdropClick}
    >
      <div className="relative max-w-4xl w-full bg-charcoal-800 rounded-lg overflow-hidden animate-fade-in my-8">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-charcoal-900/50 flex items-center justify-center text-white hover:bg-violet-700 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="relative h-64 md:h-80 overflow-hidden">
          <img 
            src={article.image} 
            alt={article.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-charcoal-900/50 to-transparent"></div>
        </div>

        <div className="p-6 md:p-8">
          <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
            <div className="flex items-center gap-1">
              <CalendarDays className="w-4 h-4" />
              <span>{article.date}</span>
            </div>
            
            <div className="flex items-center gap-1">
              <User className="w-4 h-4" />
              <span>{article.author}</span>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">{article.title}</h2>
          
          <div className="prose prose-invert max-w-none">
            {article.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-gray-300 leading-relaxed mb-6">
                {paragraph}
              </p>
            ))}
            
            <div className="mt-8 p-6 bg-violet-900/20 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-4">Related Information</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Follow us on social media for live updates</li>
                <li>Watch tournament streams on our Twitch channel</li>
                <li>Join our Discord community for discussions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};