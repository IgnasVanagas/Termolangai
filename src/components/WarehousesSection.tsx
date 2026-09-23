import React, { useState } from 'react';
import { ArrowUpRight, Phone } from 'lucide-react';
import { WAREHOUSES_DATA } from '../data/content';

interface WarehousesSectionProps {
  onOpenQuoteModal: (initialNote?: string) => void;
}

export const WarehousesSection: React.FC<WarehousesSectionProps> = ({ onOpenQuoteModal }) => {
  const [selectedCity, setSelectedCity] = useState<string>('visi');

  const filterTabs = [
    { id: 'visi', label: 'Visi padaliniai' },
    { id: 'Kaunas', label: 'Kaunas' },
    { id: 'Vilnius', label: 'Vilnius' },
    { id: 'Klaipėda', label: 'Klaipėda' },
  ];

  const filteredWarehouses = selectedCity === 'visi'
    ? WAREHOUSES_DATA
    : WAREHOUSES_DATA.filter((w) => w.city === selectedCity);

  return (
    <section id="padaliniai" className="py-24 sm:py-36 bg-[#0c0e12] text-[#f8f7f4]">
      <div className="site-container">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="space-y-3">
            <div className="eyebrow !text-[#8e9199]">
              <span className="status-dot !bg-[#c81e1e]"></span>
              <span>PADALINIŲ IR SANDĖLIŲ TINKLAS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white">
              Prekyba ir salonai Lietuvoje
            </h2>
          </div>
          <p className="text-sm text-[#8e9199] max-w-md leading-relaxed font-normal">
            Aplankykite mūsų ekspozicijas arba kreipkitės tiesiogiai į sandėlių vadybininkus dėl greito langų ir durų atsiėmimo.
          </p>
        </div>

        {/* Minimalist City Tabs */}
        <div className="flex flex-wrap gap-2 mb-12 border-b border-white/10 pb-4">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedCity(tab.id)}
              className={`px-4 py-2 text-xs font-medium tracking-wide transition-colors rounded-sm ${
                selectedCity === tab.id
                  ? 'bg-white text-[#0c0e12]'
                  : 'text-[#8e9199] hover:text-white hover:bg-white/5'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Clean Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredWarehouses.map((w) => (
            <div
              key={w.id}
              className="bg-[#13161c] border border-white/10 rounded p-8 sm:p-10 flex flex-col justify-between space-y-6 hover:border-white/20 transition-colors"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-[#c81e1e]">
                    {w.city} • {w.type}
                  </span>
                  <span className="text-[11px] font-mono text-[#8e9199]">
                    {w.workingHours}
                  </span>
                </div>

                <h3 className="font-display text-2xl font-light text-white tracking-tight">
                  {w.title}
                </h3>

                <p className="text-xs text-[#8e9199]">
                  {w.address}
                </p>

                {/* Staff Contacts */}
                <div className="pt-4 border-t border-white/10 space-y-2">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-[#8e9199] block">
                    Vadybininkai ir specialistai:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {w.contacts.map((c, i) => (
                      <div key={i} className="text-xs">
                        <div className="text-white/80">{c.name} ({c.role})</div>
                        <a
                          href={`tel:${c.phone}`}
                          className="font-mono text-[#c81e1e] hover:underline inline-flex items-center gap-1.5 mt-0.5"
                        >
                          <Phone className="w-3 h-3" />
                          <span>{c.formattedPhone}</span>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Action */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <button
                  onClick={() => onOpenQuoteModal(`Užklausa padaliniui: ${w.title}`)}
                  className="text-xs font-semibold text-white hover:text-[#c81e1e] inline-flex items-center gap-1 transition-colors"
                >
                  <span>Užsakyti nemokamą matavimą</span>
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
