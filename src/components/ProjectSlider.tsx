import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProjectSliderProps {
  projectId: string;
}

export const ProjectSlider = ({ projectId }: { projectId: string }) => {
  const [images, setImages] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch(`/api/projects/${projectId}/images`)
      .then(res => res.json())
      .then(data => {
        const placeholders = Array(Math.max(0, 3 - data.length)).fill('https://placehold.co/600x800?text=Placeholder');
        setImages([...data, ...placeholders]);
      })
      .catch(err => {
        console.error("Error fetching images:", err);
        setImages(Array(3).fill('https://placehold.co/600x800?text=Placeholder'));
      });
  }, [projectId]);

  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="relative w-full h-full group">
      <AnimatePresence mode="wait">
        <motion.img
          key={images[currentIndex]}
          src={images[currentIndex]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full object-cover"
        />
      </AnimatePresence>
      
      {images.length > 1 && (
        <>
          <button onClick={prevImage} className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-white/50 rounded-full hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity">
            <ChevronLeft size={20} />
          </button>
          <button onClick={nextImage} className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-white/50 rounded-full hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity">
            <ChevronRight size={20} />
          </button>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  currentIndex === index ? 'bg-white scale-110' : 'bg-white/50 hover:bg-white/80'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};
