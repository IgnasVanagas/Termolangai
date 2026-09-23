import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Check, ChevronDown } from 'lucide-react';
import { ALUMINUM_WINDOWS_SUBPAGES } from '../data/pagesContent';

interface AluminumWindowsPageProps {
  onOpenQuoteModal: (productTitle?: string) => void;
}

export const AluminumWindowsPage: React.FC<AluminumWindowsPageProps> = ({ onOpenQuoteModal }) => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  return (
    <div className="pt-36 pb-24 bg-[#fafaf9]">
      <div className="site-container">
        
        {/* Breadcrumb */}
        <div className="text-[11px] font-mono uppercase tracking-widest text-[#8e9199] mb-8">
          <Link to="/" className="hover:text-[#111215]">Pradžia</Link> / <span>Aliuminio langai</span>
        </div>

        {/* Hero */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="eyebrow">
            <span className="status-dot"></span>
            <span>ALIUMINIO KONSTRUKCIJOS IR FASADAI</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-light tracking-tight text-[#111215] leading-[1.08]">
            Aliuminio langai.{' '}
            <span className="font-serif italic font-normal text-[#c81e1e]">Panoraminė šviesa</span>
          </h1>
          <p className="text-base text-[#64676f] leading-relaxed">
            Siauriausio matomo rėmo aliuminio sistemos, skirtos modernių namų fasadams, vitrinoms bei terasoms. Ypatingas stabilumas, neribotos gabaritų galimybės ir ilgaamžiškumas.
          </p>
        </div>

        {/* Product Cards Grid with Original Photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {ALUMINUM_WINDOWS_SUBPAGES.map((item, idx) => {
            const isExpanded = selectedItem === item.id;

            return (
              <div
                key={item.id}
                className="bg-white border border-[#e7e8eb] rounded p-6 sm:p-8 flex flex-col justify-between hover:border-[#cbd0d8] transition-all"
              >
                <div>
                  {/* Photo from original termolangai */}
                  <div className="aspect-[16/10] rounded-lg overflow-hidden bg-[#ebebeb] mb-6 relative group/img">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105"
                    />
                    <span className="absolute top-3 left-3 bg-[#111215]/80 backdrop-blur-md text-white text-[10px] font-mono px-2.5 py-0.5 rounded-sm">
                      0{idx + 1}
                    </span>
                  </div>

                  <div className="text-[10px] font-mono tracking-widest uppercase text-[#c81e1e] mb-1">
                    {item.subtitle}
                  </div>
                  <h3 className="font-display text-2xl font-medium text-[#111215] tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#64676f] mt-3 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Specs list */}
                  {item.specs && (
                    <div className="mt-4 pt-3 border-t border-[#f0f1f3] space-y-1 text-[11px]">
                      {item.specs.map((s, i) => (
                        <div key={i} className="flex justify-between">
                          <span className="text-[#8e9199]">{s.label}:</span>
                          <span className="font-medium text-[#111215]">{s.value}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Features */}
                  {isExpanded && item.features && (
                    <div className="mt-4 pt-3 border-t border-[#f0f1f3] space-y-1.5 text-xs animate-in fade-in duration-150">
                      <div className="font-semibold text-[#111215] text-[11px] uppercase tracking-wider mb-1">
                        Privalumai:
                      </div>
                      {item.features.map((f, fi) => (
                        <div key={fi} className="flex items-start gap-1.5 text-[11px] text-[#64676f]">
                          <Check className="w-3.5 h-3.5 text-[#c81e1e] shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Bottom actions */}
                <div className="mt-6 pt-4 border-t border-[#f0f1f3] flex items-center justify-between">
                  <button
                    onClick={() => setSelectedItem(isExpanded ? null : item.id)}
                    className="text-[11px] text-[#8e9199] hover:text-[#111215] flex items-center gap-1"
                  >
                    <span>{isExpanded ? 'Glausti' : 'Plačiau'}</span>
                    <ChevronDown className={`w-3 h-3 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                  </button>

                  <button
                    onClick={() => onOpenQuoteModal(item.title)}
                    className="btn-primary text-xs !min-h-[36px] !py-1.5 !px-3"
                  >
                    <span>Gauti pasiūlymą</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};
