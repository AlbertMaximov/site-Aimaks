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
      <div className="bg-white rounded-3xl p-8 max-w-6xl w-full" onClick={e => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold font-display">Фото проекта: {projectId}</h2>
          <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full">
            ✕
          </button>
        </div>
      </div>
    </div>
  );
};
