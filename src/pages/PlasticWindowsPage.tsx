import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Check, ChevronDown } from 'lucide-react';
import { PLASTIC_WINDOWS_SUBPAGES } from '../data/pagesContent';

interface PlasticWindowsPageProps {
  onOpenQuoteModal: (productTitle?: string) => void;
}

export const PlasticWindowsPage: React.FC<PlasticWindowsPageProps> = ({ onOpenQuoteModal }) => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  return (
    <div className="pt-36 pb-24 bg-[#fafaf9]">
      <div className="site-container">
        
        {/* Breadcrumb */}
        <div className="text-[11px] font-mono uppercase tracking-widest text-[#8e9199] mb-8">
          <Link to="/" className="hover:text-[#111215]">Pradžia</Link> / <span>Plastikiniai langai</span>
        </div>

        {/* Hero */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="eyebrow">
            <span className="status-dot"></span>
            <span>A++ VOKIŠKOS PROFILIŲ SISTEMOS</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-light tracking-tight text-[#111215] leading-[1.08]">
            Plastikiniai langai.{' '}
            <span className="font-serif italic font-normal text-[#c81e1e]">VEKA & REHAU</span>
          </h1>
          <p className="text-base text-[#64676f] leading-relaxed">
            Aukščiausios vokiškos A klasės sistemos su 82–86 mm montavimo gyliu, trijų sandarinimo kontūrų technologija bei 3 stiklų paketais. Garantuotas šilumos išsaugojimas ir triukšmo slopinimas.
          </p>
        </div>

        {/* Authentic Specification Icons Strip */}
        <div className="bg-white border border-[#e7e8eb] rounded p-6 sm:p-8 mb-16 shadow-subtle">
          <div className="text-[10px] font-mono tracking-widest uppercase text-[#8e9199] mb-6 text-center">
            STANDARTINĖ TECHNINĖ KOMPLEKTACIJA
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-6 text-center">
            {[
              { icon: '/images/termolangai/ikonos/prof_plotis.png', label: '82–86 mm', sub: 'Profilio gylis' },
              { icon: '/images/termolangai/ikonos/6_kameros.png', label: '6–7 kameros', sub: 'Šilumos izoliacija' },
              { icon: '/images/termolangai/ikonos/3_sandarinimas.png', label: '3 tarpinės', sub: 'MD sandarumas' },
              { icon: '/images/termolangai/ikonos/72.png', label: 'Uw 0.72', sub: 'Šilumos koeficientas' },
              { icon: '/images/termolangai/ikonos/3_stiklai.png', label: '3 stiklai', sub: 'Selektyvinis paketas' },
              { icon: '/images/termolangai/ikonos/armuotas.png', label: 'Plieno armatūra', sub: 'Formos stabilumas' },
              { icon: '/images/termolangai/ikonos/apkaustai.png', label: 'Winkhaus', sub: 'Vokiška furnitūra' },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center space-y-2">
                <div className="w-12 h-12 flex items-center justify-center">
                  <img src={item.icon} alt={item.label} className="max-h-10 max-w-10 object-contain" />
                </div>
                <div className="font-semibold text-xs text-[#111215]">{item.label}</div>
                <div className="text-[10px] text-[#8e9199]">{item.sub}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Product Cards Grid with Original Photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PLASTIC_WINDOWS_SUBPAGES.map((item, idx) => {
            const isExpanded = selectedItem === item.id;

            return (
              <div
                key={item.id}
                className="bg-white border border-[#e7e8eb] rounded p-6 sm:p-8 flex flex-col justify-between hover:border-[#cbd0d8] transition-all"
              >
                <div>
                  {/* Photo representation */}
                  <div className="aspect-[4/3] rounded-lg overflow-hidden bg-[#ebebeb] mb-6 relative group/img">
                    {item.imageUrl.endsWith('.png') ? (
                      <div className="w-full h-full bg-[#f8fafc] p-6 flex items-center justify-center">
                        <img
                          src={item.imageUrl}
                          alt={item.title}
                          className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover/img:scale-105"
                        />
                      </div>
                    ) : (
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105"
                      />
                    )}
                    <span className="absolute top-3 left-3 bg-[#111215]/80 backdrop-blur-md text-white text-[10px] font-mono px-2.5 py-0.5 rounded-sm">
                      0{idx + 1}
                    </span>
                  </div>

                  <div className="text-[10px] font-mono tracking-widest uppercase text-[#c81e1e] mb-1">
                    {item.subtitle}
                  </div>
                  <h3 className="font-display text-xl font-medium text-[#111215] tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#64676f] mt-3 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Specs list */}
                  {item.specs && (
                    <div className="mt-4 pt-3 border-t border-[#f0f1f3] space-y-1 text-[11px]">
                      {item.specs.slice(0, 3).map((s, i) => (
                        <div key={i} className="flex justify-between">
                          <span className="text-[#8e9199]">{s.label}:</span>
                          <span className="font-medium text-[#111215]">{s.value}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Expandable details */}
                  {isExpanded && (
                    <div className="mt-4 pt-3 border-t border-[#f0f1f3] space-y-2 text-xs animate-in fade-in duration-150">
                      {item.specs && item.specs.slice(3).map((s, i) => (
                        <div key={i} className="flex justify-between text-[11px]">
                          <span className="text-[#8e9199]">{s.label}:</span>
                          <span className="font-medium text-[#111215]">{s.value}</span>
                        </div>
                      ))}
                      {item.features && (
                        <ul className="pt-2 space-y-1">
                          {item.features.map((f, fi) => (
                            <li key={fi} className="flex items-start gap-1.5 text-[11px] text-[#64676f]">
                              <Check className="w-3.5 h-3.5 text-[#c81e1e] shrink-0 mt-0.5" />
                              <span>{f}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                </div>

                {/* Bottom actions */}
                <div className="mt-6 pt-4 border-t border-[#f0f1f3] flex items-center justify-between">
                  <button
                    onClick={() => setSelectedItem(isExpanded ? null : item.id)}
                    className="text-[11px] text-[#8e9199] hover:text-[#111215] flex items-center gap-1"
                  >
                    <span>{isExpanded ? 'Glausti' : 'Daugiau'}</span>
                    <ChevronDown className={`w-3 h-3 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                  </button>

                  <button
                    onClick={() => onOpenQuoteModal(item.title)}
                    className="btn-primary text-xs !min-h-[36px] !py-1.5 !px-3"
                  >
                    <span>Gauti kainą</span>
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
