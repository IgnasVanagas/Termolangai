import React, { useState } from 'react';
import { ArrowUpRight, ChevronDown } from 'lucide-react';
import { PRODUCTS_DATA } from '../data/content';

interface ProductGridProps {
  onOpenQuoteModal: (category?: string) => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({ onOpenQuoteModal }) => {
  const [activeCategory, setActiveCategory] = useState<string>('visi');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const categories = [
    { id: 'visi', label: 'Visi gaminiai' },
    { id: 'plastikiniai', label: 'Plastikiniai langai (A++)' },
    { id: 'aliuminio', label: 'Aliuminio sistemos' },
    { id: 'durys', label: 'Lauko ir terasinės durys' },
    { id: 'vartai', label: 'Garažo vartai' },
  ];

  const filteredProducts = activeCategory === 'visi'
    ? PRODUCTS_DATA
    : PRODUCTS_DATA.filter((p) => p.category === activeCategory);

  return (
    <section id="produkcija" className="py-24 sm:py-36 bg-[#fafaf9]">
      <div className="site-container">
        
        {/* Section Header: Spacious & Minimalist */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="space-y-3">
            <div className="eyebrow">
              <span className="status-dot"></span>
              <span>GAMINIAI IR SISTEMOS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-[#111215]">
              Architektūrinė kolekcija
            </h2>
          </div>
          <p className="text-sm text-[#64676f] max-w-md leading-relaxed">
            Sertifikuotos vokiškos profilių sistemos, pasyvaus būsto standartas ir individuali gamyba pagal Jūsų namo architektūrą.
          </p>
        </div>

        {/* Minimalist Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-12 border-b border-[#e7e8eb] pb-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs font-medium tracking-wide transition-colors rounded-sm ${
                activeCategory === cat.id
                  ? 'bg-[#111215] text-white'
                  : 'text-[#64676f] hover:text-[#111215] hover:bg-black/5'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Spacious Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          {filteredProducts.map((product, idx) => {
            const isExpanded = expandedId === product.id;

            return (
              <div
                key={product.id}
                className="group flex flex-col justify-between"
              >
                <div>
                  {/* Photo with subtle border */}
                  <div className="aspect-[16/11] overflow-hidden rounded bg-[#ebebeb] relative mb-6">
                    <img
                      src={product.imageUrl}
                      alt={product.title}
                      className="w-full h-full object-contain bg-white p-4 transition-transform duration-700 group-hover:scale-103"
                    />
                    <div className="absolute top-3 left-3 bg-[#111215]/80 backdrop-blur-md text-white text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-sm">
                      0{idx + 1}
                    </div>
                  </div>

                  {/* Header info */}
                  <div className="space-y-1.5">
                    <div className="text-[10px] uppercase font-mono tracking-widest text-[#8e9199]">
                      {product.badge}
                    </div>
                    <h3 className="font-display text-xl sm:text-2xl font-normal text-[#111215] tracking-tight group-hover:text-[#c81e1e] transition-colors">
                      {product.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#64676f] mt-2.5 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Specs Quick Strip */}
                  <div className="mt-4 pt-3 border-t border-[#e7e8eb] flex flex-wrap gap-y-1 gap-x-4 text-[11px] font-mono text-[#8e9199]">
                    {product.specs.slice(0, 3).map((s, i) => (
                      <span key={i}>
                        <span className="text-[#111215] font-medium">{s.value}</span>
                      </span>
                    ))}
                  </div>

                  {/* Optional Detailed Specs Accordion */}
                  {isExpanded && (
                    <div className="mt-4 p-3.5 bg-white border border-[#e7e8eb] rounded text-xs space-y-2 animate-in fade-in duration-150">
                      <div className="font-semibold text-[#111215] text-[11px] uppercase tracking-wider">
                        Techniniai duomenys:
                      </div>
                      <div className="space-y-1 text-[#64676f]">
                        {product.specs.map((s, i) => (
                          <div key={i} className="flex justify-between border-b border-[#f0f1f3] pb-1">
                            <span>{s.label}</span>
                            <span className="font-medium text-[#111215]">{s.value}</span>
                          </div>
                        ))}
                      </div>
                      <div className="pt-1">
                        <div className="font-semibold text-[#111215] text-[11px] uppercase tracking-wider mb-1">
                          Privalumai:
                        </div>
                        <ul className="list-disc pl-4 space-y-0.5 text-[#64676f]">
                          {product.features.map((f, fi) => (
                            <li key={fi}>{f}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>

                {/* Bottom Actions */}
                <div className="mt-6 pt-4 border-t border-[#e7e8eb] flex items-center justify-between">
                  <button
                    onClick={() => setExpandedId(isExpanded ? null : product.id)}
                    className="text-[11px] text-[#8e9199] hover:text-[#111215] flex items-center gap-1 transition-colors"
                  >
                    <span>{isExpanded ? 'Glausti' : 'Išsamios specifikacijos'}</span>
                    <ChevronDown className={`w-3 h-3 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                  </button>

                  <button
                    onClick={() => onOpenQuoteModal(product.title)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#111215] hover:text-[#c81e1e] transition-colors"
                  >
                    <span>Užklausa</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
