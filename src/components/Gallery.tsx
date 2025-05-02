import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryItem {
  id: number;
  image: string;
  title: string;
  type: 'image' | 'video';
  thumbnail?: string;
}

export const Gallery: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  
  const galleryItems: GalleryItem[] = [
    { id: 1, image: 'https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg', title: 'LDE Valorant Team Victory', type: 'image' },
    { id: 2, image: 'https://images.pexels.com/photos/2240571/pexels-photo-2240571.jpeg', title: 'CS:GO World Finals', type: 'image' },
    { id: 3, image: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg', title: 'Team Training Session', type: 'image' },
    { id: 4, image: 'https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg', title: 'Fan Meet & Greet', type: 'image' },
    { id: 5, image: 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg', title: 'LDE Gaming Facility', type: 'image' },
    { id: 6, image: 'https://images.pexels.com/photos/1174746/pexels-photo-1174746.jpeg', title: 'Pro Equipment Setup', type: 'image' },
    { id: 7, image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg', title: 'Tournament Highlights', type: 'video', thumbnail: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg' },
    { id: 8, image: 'https://images.pexels.com/photos/7862619/pexels-photo-7862619.jpeg', title: 'Team Interview', type: 'video', thumbnail: 'https://images.pexels.com/photos/7862619/pexels-photo-7862619.jpeg' },
  ];

  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (!selectedItem) return;
      
      if (e.key === 'Escape') {
        closeModal();
      } else if (e.key === 'ArrowLeft') {
        navigateGallery('prev');
      } else if (e.key === 'ArrowRight') {
        navigateGallery('next');
      }
    };

    if (selectedItem) {
      document.addEventListener('keydown', handleKeydown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeydown);
      document.body.style.overflow = '';
    };
  }, [selectedItem, currentIndex]);

  const openModal = (item: GalleryItem, index: number) => {
    setSelectedItem(item);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setCurrentIndex(0);
  };

  const navigateGallery = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setCurrentIndex((prev) => (prev === 0 ? galleryItems.length - 1 : prev - 1));
      setSelectedItem(galleryItems[currentIndex === 0 ? galleryItems.length - 1 : currentIndex - 1]);
    } else {
      setCurrentIndex((prev) => (prev === galleryItems.length - 1 ? 0 : prev + 1));
      setSelectedItem(galleryItems[currentIndex === galleryItems.length - 1 ? 0 : currentIndex + 1]);
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) closeModal();
  };

  return (
    <section id="gallery" className="py-20 bg-charcoal-900/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900 via-charcoal-900/95 to-charcoal-900"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-16 text-center">
          <h6 className="text-violet-500 font-display uppercase tracking-widest mb-3">Captured Moments</h6>
          <h2 className="section-title">Media Gallery</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryItems.map((item, index) => (
            <div 
              key={item.id}
              onClick={() => openModal(item, index)}
              className="relative rounded-lg overflow-hidden cursor-pointer group h-48 md:h-56 lg:h-64 bg-charcoal-800"
            >
              <img 
                src={item.type === 'video' ? (item.thumbnail || item.image) : item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-charcoal-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 w-full">
                  <h4 className="text-white font-medium truncate">{item.title}</h4>
                </div>
              </div>
              
              {item.type === 'video' && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-violet-600/80 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <div className="w-4 h-4 border-t-transparent border-b-transparent border-r-transparent border-l-[8px] border-l-white ml-1"></div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="btn btn-secondary">View Full Gallery</button>
        </div>
      </div>
      
      {/* Modal */}
      {selectedItem && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal-900/95 backdrop-blur-sm p-4"
          onClick={handleBackdropClick}
        >
          <div className="relative max-w-5xl w-full bg-charcoal-800 rounded-lg overflow-hidden animate-fade-in">
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-charcoal-900/50 flex items-center justify-center text-white hover:bg-violet-700 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="relative">
              {selectedItem.type === 'image' ? (
                <img 
                  src={selectedItem.image} 
                  alt={selectedItem.title} 
                  className="w-full h-auto max-h-[70vh] object-contain bg-charcoal-900"
                />
              ) : (
                <div className="aspect-video bg-charcoal-900 flex items-center justify-center">
                  <img 
                    src={selectedItem.image} 
                    alt={selectedItem.title} 
                    className="w-full h-auto max-h-[70vh] object-contain"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-violet-600/80 flex items-center justify-center animate-pulse">
                      <div className="w-5 h-5 border-t-transparent border-b-transparent border-r-transparent border-l-[12px] border-l-white ml-1"></div>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Navigation buttons */}
              <button
                onClick={() => navigateGallery('prev')}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-charcoal-900/50 flex items-center justify-center text-white hover:bg-violet-700 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button
                onClick={() => navigateGallery('next')}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-charcoal-900/50 flex items-center justify-center text-white hover:bg-violet-700 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-4">
              <h3 className="text-xl font-bold text-white">{selectedItem.title}</h3>
              <p className="text-gray-400 mt-1">{`${currentIndex + 1} of ${galleryItems.length}`}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};