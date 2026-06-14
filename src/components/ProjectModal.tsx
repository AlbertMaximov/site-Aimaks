import React from 'react';

interface ProjectModalProps {
  projectId: string;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal = ({ projectId, isOpen, onClose }: ProjectModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/50 backdrop-blur-sm" onClick={onClose}>
      <div className="bg-white rounded-3xl p-8 max-w-4xl w-full" onClick={e => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold font-display">Фото проекта: {projectId}</h2>
          <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full">
            ✕
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Using a placeholder for now since we don't know the actual image paths besides what was defined before. 
                Previously, ProjectScreenshots used /api/projects/${projectId}/images */}
            <img src={`/projects/${projectId}/1.png`} alt="1" className="w-full h-auto rounded-xl" />
            <img src={`/projects/${projectId}/2.png`} alt="2" className="w-full h-auto rounded-xl" />
            <img src={`/projects/${projectId}/3.png`} alt="3" className="w-full h-auto rounded-xl" />
        </div>
      </div>
    </div>
  );
};
