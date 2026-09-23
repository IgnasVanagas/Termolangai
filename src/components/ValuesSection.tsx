import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface ValuesSectionProps {
  onOpenQuoteModal: () => void;
}

export const ValuesSection: React.FC<ValuesSectionProps> = ({ onOpenQuoteModal }) => {
  const pillars = [
    {
      number: '01',
      title: 'Vokiška inžinerija ir stabilumas',
      desc: 'Tik A-klasės VEKA ir REHAU profiliai su 3 mm išorinėmis sienelėmis. Konstrukcijos nesideformuoja bėgant metams ir atlaiko ekstremalias pajūrio vėjų apkrovas.',
    },
    {
      number: '02',
      title: 'Tiesioginis tiekimas iš sandėlių',
      desc: 'Kaune, Vilniuje ir Klaipėdoje palaikome virš 500 paruoštų langų ir durų likutį. Nėra tarpininkų antkainių, o standartinius gaminius galite atsiimti tą pačią dieną.',
    },
    {
      number: '03',
      title: 'Sertifikuotas A++ montavimas',
      desc: 'Montuotojų brigados naudoja garo ir vėjo izoliacines juostas, eliminuojančias šalčio tiltelius ir garantuojančias pastato energetinio sandarumo testą.',
    },
  ];

  return (
    <section className="py-24 sm:py-36 bg-[#fafaf9] border-t border-[#e7e8eb]">
      <div className="site-container">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="eyebrow">
            <span className="status-dot"></span>
            <span>KOKYBĖS FILOSOFIJA</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-[#111215] leading-[1.1]">
            Architektūrinis tikslumas.{' '}
            <span className="font-serif italic font-normal text-[#64676f]">
              Patikimumas dešimtmečiams.
            </span>
          </h2>
          <p className="text-sm text-[#64676f] leading-relaxed max-w-xl">
            Pradėję veiklą 2010 m., atsisakėme kompromisų kokybei. Kiekvienas langas projektuojamas pagal individualius objekto šilumos ir garso reikalavimus.
          </p>
        </div>

        {/* 3 Numbered Minimalist Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14 pt-4">
          {pillars.map((pillar, idx) => (
            <div key={idx} className="space-y-4 border-t border-[#e7e8eb] pt-6">
              <span className="font-mono text-sm text-[#c81e1e] font-light">
                {pillar.number}
              </span>
              <h3 className="font-display text-xl font-normal text-[#111215] tracking-tight">
                {pillar.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#64676f] leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Full-width Architectural Image Showcase */}
        <div className="mt-16 rounded overflow-hidden aspect-[21/9] bg-[#ebebeb] relative">
          <img
            src="/images/termolangai/projects/apartment-windows.jpg"
            alt="Daugiabučio langai ir balkonai iš Termolangai darbų galerijos"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-8 sm:p-12">
            <div className="text-white max-w-lg space-y-2">
              <div className="text-[10px] font-mono tracking-widest uppercase text-white/70">
                14 METŲ PATIRTIS • VIRŠ 45 000 PROJEKTŲ
              </div>
              <div className="font-display text-xl sm:text-2xl font-light">
                Suteikiame Jūsų būstui ilgalaikę šilumos ir tylos vertę.
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
