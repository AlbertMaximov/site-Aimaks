import React, { useState, useEffect } from 'react';

interface ProjectScreenshotsProps {
  projectId: string;
}

export const ProjectScreenshots = ({ projectId }: { projectId: string }) => {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    fetch(`/api/projects/${projectId}/images`)
      .then(res => res.json())
      .then(data => setImages(data))
      .catch(err => console.error("Error fetching images:", err));
  }, [projectId]);

  if (images.length === 0) {
    return <div className="w-full h-full bg-slate-200 animate-pulse rounded-3xl" />;
  }

  // Take first 3 images or fewer if less than 3
  const displayImages = images.slice(0, 3);

  return (
    <div className="w-full h-full grid grid-cols-3 gap-2 p-2">
      {displayImages.map((src, index) => (
        <img
          key={src}
          src={src}
          alt={`Project screenshot ${index + 1}`}
          className="w-full h-full object-cover rounded-xl"
        />
      ))}
      {/* Fill remaining slots if < 3 images */}
      {Array.from({ length: Math.max(0, 3 - images.length) }).map((_, i) => (
        <div key={`placeholder-${i}`} className="w-full h-full bg-slate-100 rounded-xl" />
      ))}
    </div>
  );
};
