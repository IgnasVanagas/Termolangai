import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { CLEARANCE_ITEMS } from '../data/content';

interface ClearanceStockProps {
  onOpenQuoteModal: (itemNote?: string) => void;
}

export const ClearanceStock: React.FC<ClearanceStockProps> = ({ onOpenQuoteModal }) => {
  return (
    <section id="ispardavimas" className="py-24 sm:py-36 bg-[#fafaf9] border-t border-[#e7e8eb]">
      <div className="site-container">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="space-y-3">
            <div className="eyebrow">
              <span className="status-dot"></span>
              <span>SANDĖLIO LIKUČIAI</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-[#111215]">
              Paruošti gaminiai sandėlyje
            </h2>
          </div>
          <p className="text-sm text-[#64676f] max-w-md leading-relaxed">
            Standartinių išmatavimų langai ir durys su tiesiogine gamyklos nuolaida. Galima atsiimti iš karto.
          </p>
        </div>

        {/* Minimalist 4-Column Stock Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {CLEARANCE_ITEMS.map((item) => {
            const discountPct = Math.round(
              ((item.originalPrice - item.discountPrice) / item.originalPrice) * 100
            );

            return (
              <div
                key={item.id}
                className="bg-white border border-[#e7e8eb] rounded p-6 flex flex-col justify-between hover:border-[#cbd0d8] transition-all"
              >
                <div>
                  {/* Photo Thumbnail */}
                  <div className="aspect-[4/3] bg-[#fafaf9] rounded overflow-hidden p-3 flex items-center justify-center relative mb-5">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="max-h-full max-w-full object-contain mix-blend-multiply"
                    />
                    <span className="absolute top-2 left-2 text-[10px] font-mono font-medium text-[#c81e1e] bg-[#fdf2f2] px-2 py-0.5 rounded">
                      -{discountPct}%
                    </span>
                    <span className="absolute top-2 right-2 text-[10px] font-mono text-[#8e9199]">
                      {item.location}
                    </span>
                  </div>

                  {/* Title & Dimension */}
                  <div className="space-y-1">
                    <div className="text-[10px] font-mono uppercase text-[#8e9199]">
                      {item.dimensions}
                    </div>
                    <h3 className="font-display text-base font-medium text-[#111215] leading-snug">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-xs text-[#64676f] mt-2 line-clamp-2 leading-relaxed">
                    {item.specs}
                  </p>
                </div>

                {/* Pricing & Action */}
                <div className="mt-6 pt-4 border-t border-[#f0f1f3]">
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="font-display text-2xl font-light text-[#111215]">
                      {item.discountPrice} €
                    </span>
                    <span className="text-xs text-[#8e9199] line-through font-mono">
                      {item.originalPrice} €
                    </span>
                  </div>

                  <button
                    onClick={() => onOpenQuoteModal(`Rezervuoti gaminį: ${item.title} (${item.dimensions}) už ${item.discountPrice}€`)}
                    className="btn-secondary w-full text-xs !min-h-[38px] !py-2 group"
                  >
                    <span>Rezervuoti</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
