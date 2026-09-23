import React from 'react';
import { ArrowUpRight, ArrowDown } from 'lucide-react';

interface HeroProps {
  onOpenQuoteModal: (category?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  return (
    <section className="pt-36 sm:pt-44 pb-20 sm:pb-28 bg-[#fafaf9] relative overflow-hidden">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Spacious Editorial Typography */}
          <div className="lg:col-span-6 xl:col-span-6 space-y-8">
            
            {/* Minimalist Status Eyebrow */}
            <div className="eyebrow">
              <span className="status-dot"></span>
              <span>A++ STANDARTAS • NUO 2010 METŲ</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-light tracking-tight text-[#111215] leading-[1.05]">
              Šviesa, šiluma <br />
              ir erdvė.{' '}
              <span className="font-serif italic font-normal text-[#c81e1e]">
                Be kompromisų.
              </span>
            </h1>

            {/* Quiet, refined description */}
            <p className="text-sm sm:text-base text-[#64676f] leading-relaxed max-w-lg font-normal">
              Projektuojame ir montuojame aukščiausios vokiškos inžinerijos <strong className="font-medium text-[#111215]">VEKA</strong> bei <strong className="font-medium text-[#111215]">REHAU</strong> langų sistemas, panoraminius aliuminio fasadus ir duris. Tiesioginis tiekimas iš sandėlių Kaune, Vilniuje ir Klaipėdoje.
            </p>

            {/* Action Buttons: Restrained & Elegant */}
            <div className="pt-2 flex flex-wrap items-center gap-5">
              <button
                onClick={() => onOpenQuoteModal('Plastikiniai langai')}
                className="btn-primary group"
              >
                <span>Gauti pasiūlymą</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <a
                href="#skaiciuokle"
                className="inline-flex items-center gap-2 text-xs font-medium tracking-wide text-[#64676f] hover:text-[#111215] transition-colors py-3 px-2 group"
              >
                <span>Kainos skaičiuoklė</span>
                <ArrowDown className="w-3.5 h-3.5 transition-transform group-hover:translate-y-0.5" />
              </a>
            </div>

            {/* Minimalist Trust Line */}
            <div className="pt-6 border-t border-[#e7e8eb] flex flex-wrap items-center gap-x-8 gap-y-2 text-xs text-[#8e9199]">
              <div>10 metų garantija</div>
              <div className="w-1 h-1 rounded-full bg-[#d4d6db]" />
              <div>Nemokamas matavimas</div>
              <div className="w-1 h-1 rounded-full bg-[#d4d6db]" />
              <div>Didžiausias sandėlio likutis</div>
            </div>

          </div>

          {/* Right Column: Architectural Photography */}
          <div className="lg:col-span-6 xl:col-span-6">
            <div className="relative rounded aspect-[4/3] sm:aspect-[16/11] overflow-hidden bg-[#e7e8df] shadow-luxury group">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85"
                alt="Minimalistinis modernus namas su panoraminiais langais"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-103"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

              {/* Single Minimalist Frosted Badge */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white/90">
                <div>
                  <div className="text-[10px] font-mono tracking-widest uppercase text-white/70">
                    A++ PASYVUS STANDARTAS
                  </div>
                  <div className="font-display text-lg sm:text-xl font-medium tracking-tight text-white mt-0.5">
                    VEKA Softline 82 MD
                  </div>
                </div>

                <div className="px-3 py-1 rounded bg-white/15 backdrop-blur-md border border-white/20 text-xs font-mono text-white">
                  Uw 0.72 W/m²K
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
