import React from 'react';
import { Link } from 'react-router-dom';
import { ProjectsGallery } from '../components/ProjectsGallery';

interface GalleryPageProps {
  onOpenQuoteModal: (projectTitle?: string) => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ onOpenQuoteModal }) => {
  return (
    <div className="pt-36 pb-24 bg-[#fafaf9]">
      <div className="site-container">
        {/* Breadcrumb */}
        <div className="text-[11px] font-mono uppercase tracking-widest text-[#8e9199] mb-8">
          <Link to="/" className="hover:text-[#111215]">Pradžia</Link> / <span>Galerija</span>
        </div>

        <ProjectsGallery onOpenQuoteModal={onOpenQuoteModal} />
      </div>
    </div>
  );
};
