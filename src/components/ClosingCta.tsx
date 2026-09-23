import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface ClosingCtaProps {
  onOpenQuoteModal: () => void;
}

export const ClosingCta: React.FC<ClosingCtaProps> = ({ onOpenQuoteModal }) => {
  return (
    <section className="py-20 sm:py-32 bg-[#fafaf9]">
      <div className="site-container">
        
        <div className="bg-[#0c0e12] text-white rounded p-10 sm:p-16 lg:p-20 flex flex-col lg:flex-row lg:items-end justify-between gap-12">
          
          {/* Left Text */}
          <div className="max-w-2xl space-y-5">
            <div className="eyebrow !text-[#8e9199]">
              <span className="status-dot !bg-[#c81e1e]"></span>
              <span>NEMOKAMAS SĄMATOS SUDARYMAS</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white leading-[1.08]">
              Pradėkime nuo <br />
              <span className="font-serif italic font-normal text-[#8e9199]">
                tikslaus matavimo.
              </span>
            </h2>

            <p className="text-sm text-[#8e9199] leading-relaxed max-w-lg font-normal">
              Mūsų inžinieriai atvyks į Jūsų objektą Kaune, Vilniuje, Klaipėdoje ar bet kuriame Lietuvos rajone, profesionaliai išmatuos angas ir pateiks geriausią gamyklos kainą.
            </p>
          </div>

          {/* Right Action */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-4 shrink-0">
            <button
              onClick={onOpenQuoteModal}
              className="inline-flex items-center justify-center gap-2 bg-white text-[#0c0e12] hover:bg-[#e7e8eb] font-semibold text-xs py-4 px-8 rounded transition-all group"
            >
              <span>Užsakyti nemokamą matavimą</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            <a
              href={`tel:${COMPANY_INFO.generalPhone}`}
              className="text-xs text-[#8e9199] hover:text-white text-center sm:text-left lg:text-center transition-colors font-mono"
            >
              Arba skambinkite: {COMPANY_INFO.generalPhone}
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
