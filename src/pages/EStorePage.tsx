import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { CLEARANCE_ITEMS } from '../data/content';

interface EStorePageProps {
  onOpenQuoteModal: (note?: string) => void;
}

export const EStorePage: React.FC<EStorePageProps> = ({ onOpenQuoteModal }) => {
  const [filter, setFilter] = useState<string>('visi');

  const categories = [
    { id: 'visi', label: 'Visi sandėlio likučiai' },
    { id: 'langai', label: 'Plastikiniai langai' },
    { id: 'balkono', label: 'Balkoninės durys' },
    { id: 'sarvuotos', label: 'Šarvuotos durys' },
  ];

  const filteredItems = filter === 'visi'
    ? CLEARANCE_ITEMS
    : CLEARANCE_ITEMS.filter((item) => {
        if (filter === 'langai') return item.category.toLowerCase().includes('langas') || item.category.toLowerCase().includes('langai');
        if (filter === 'balkono') return item.category.toLowerCase().includes('balkon');
        if (filter === 'sarvuotos') return item.category.toLowerCase().includes('šarvuot');
        return true;
      });

  return (
    <div className="pt-36 pb-24 bg-[#fafaf9]">
      <div className="site-container">
        
        {/* Breadcrumb */}
        <div className="text-[11px] font-mono uppercase tracking-widest text-[#8e9199] mb-8">
          <Link to="/" className="hover:text-[#111215]">Pradžia</Link> / <span>E-parduotuvė ir išpardavimas</span>
        </div>

        {/* Hero */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="eyebrow">
            <span className="status-dot"></span>
            <span>SANDĖLIO LIKUČIAI BE TARPININKŲ</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-light tracking-tight text-[#111215] leading-[1.08]">
            E-parduotuvė ir išpardavimas.{' '}
            <span className="font-serif italic font-normal text-[#c81e1e]">Iki -40%</span>
          </h1>
          <p className="text-base text-[#64676f] leading-relaxed">
            Paruošti standartinių matmenų gaminiai tiesiai iš sandėlio Kaune, Vilniuje ir Klaipėdoje. Galima atsiimti tą pačią dieną arba suderinti greitą pristatymą.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-12 border-b border-[#e7e8eb] pb-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-4 py-2 text-xs font-medium tracking-wide transition-colors rounded-sm ${
                filter === cat.id
                  ? 'bg-[#111215] text-white'
                  : 'text-[#64676f] hover:text-[#111215] hover:bg-black/5'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredItems.map((item) => {
            const discountPct = Math.round(
              ((item.originalPrice - item.discountPrice) / item.originalPrice) * 100
            );

            return (
              <div
                key={item.id}
                className="bg-white border border-[#e7e8eb] rounded p-6 flex flex-col justify-between hover:border-[#cbd0d8] transition-all"
              >
                <div>
                  <div className="aspect-[4/3] bg-[#ebebeb] rounded overflow-hidden relative mb-5">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-contain bg-white p-4 transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute top-2.5 left-2.5 text-[10px] font-mono font-medium text-[#c81e1e] bg-white/95 backdrop-blur-md px-2 py-0.5 rounded shadow-sm">
                      -{discountPct}%
                    </span>
                    <span className="absolute top-2.5 right-2.5 text-[10px] font-mono text-white bg-black/60 backdrop-blur-md px-2 py-0.5 rounded">
                      {item.location}
                    </span>
                  </div>

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
                    onClick={() => onOpenQuoteModal(`Rezervuoti išpardavimo gaminį: ${item.title} (${item.dimensions}) už ${item.discountPrice}€`)}
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
    </div>
  );
};
