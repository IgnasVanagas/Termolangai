import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS_DATA } from '../data/content';

interface ProjectsGalleryProps {
  onOpenQuoteModal: (projectTitle?: string) => void;
}

export const ProjectsGallery: React.FC<ProjectsGalleryProps> = ({ onOpenQuoteModal }) => {
  return (
    <section id="galerija" className="py-24 sm:py-36 bg-[#fafaf9] border-t border-[#e7e8eb]">
      <div className="site-container">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="space-y-3">
            <div className="eyebrow">
              <span className="status-dot"></span>
              <span>REALIZUOTI PROJEKTAI</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-[#111215]">
              Architektūra ir erdvės
            </h2>
          </div>
          <p className="text-sm text-[#64676f] max-w-md leading-relaxed">
            Individualių namų, modernių kotedžų bei pajūrio vilų stiklinimo sprendimai visoje Lietuvoje.
          </p>
        </div>

        {/* 3-Column Editorial Minimalist Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
          {PROJECTS_DATA.map((proj) => (
            <div
              key={proj.id}
              className="group flex flex-col justify-between"
            >
              <div>
                {/* Photo */}
                <div className="aspect-[16/11] overflow-hidden rounded bg-[#ebebeb] mb-6">
                  <img
                    src={proj.imageUrl}
                    alt={proj.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                  />
                </div>

                {/* Metadata */}
                <div className="flex items-center justify-between text-[11px] font-mono text-[#8e9199] mb-1.5">
                  <span>{proj.location}</span>
                  <span>{proj.year}</span>
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-normal text-[#111215] tracking-tight group-hover:text-[#c81e1e] transition-colors">
                  {proj.title}
                </h3>

                <p className="text-xs text-[#64676f] mt-2.5 leading-relaxed">
                  {proj.description}
                </p>

                <div className="mt-4 pt-3 border-t border-[#e7e8eb] text-[11px] font-mono text-[#8e9199]">
                  {proj.productsUsed}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#e7e8eb]">
                <button
                  onClick={() => onOpenQuoteModal(`Užklausa pagal projektą: ${proj.title}`)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#111215] hover:text-[#c81e1e] transition-colors"
                >
                  <span>Panašus sprendimas Jūsų namui</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
