import React, { useEffect } from 'react';
import { X, ChevronRight } from 'lucide-react';

interface JoinModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const JoinModal: React.FC<JoinModalProps> = ({ isOpen, onClose }) => {
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

  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  const positions = [
    {
      title: 'Professional Player',
      requirements: [
        'Ranked in the top 1% of your game',
        'Previous competitive experience',
        'Strong communication skills',
        'Team-oriented mindset'
      ]
    },
    {
      title: 'Content Creator',
      requirements: [
        'Established social media presence',
        'Consistent streaming schedule',
        'Engaging personality',
        'Creative content ideas'
      ]
    },
    {
      title: 'Staff Position',
      requirements: [
        'Industry experience',
        'Project management skills',
        'Strong organizational abilities',
        'Passion for esports'
      ]
    }
  ];

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

        <div className="p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Join LDE Esports</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {positions.map((position, index) => (
              <div 
                key={index}
                className="bg-charcoal-900/50 p-6 rounded-lg hover:bg-charcoal-700/50 transition-colors group"
              >
                <h3 className="text-xl font-bold text-white mb-4">{position.title}</h3>
                <ul className="space-y-3 mb-6">
                  {position.requirements.map((req, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-300">
                      <ChevronRight className="w-5 h-5 text-violet-400 shrink-0 mt-0.5" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
                <a 
                  href="#contact" 
                  onClick={(e) => {
                    e.preventDefault();
                    onClose();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center text-violet-400 font-display uppercase text-sm tracking-wider hover:text-violet-300 transition-colors"
                >
                  Apply Now
                  <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-violet-900/20 rounded-lg">
            <h3 className="text-xl font-bold text-white mb-4">Why Join LDE?</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-gray-300">
                    <ChevronRight className="w-5 h-5 text-violet-400 shrink-0 mt-0.5" />
                    <span>Competitive salary and benefits package</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-300">
                    <ChevronRight className="w-5 h-5 text-violet-400 shrink-0 mt-0.5" />
                    <span>State-of-the-art training facilities</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-300">
                    <ChevronRight className="w-5 h-5 text-violet-400 shrink-0 mt-0.5" />
                    <span>Professional development opportunities</span>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-gray-300">
                    <ChevronRight className="w-5 h-5 text-violet-400 shrink-0 mt-0.5" />
                    <span>Global tournament participation</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-300">
                    <ChevronRight className="w-5 h-5 text-violet-400 shrink-0 mt-0.5" />
                    <span>Brand partnership opportunities</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-300">
                    <ChevronRight className="w-5 h-5 text-violet-400 shrink-0 mt-0.5" />
                    <span>Supportive team environment</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};