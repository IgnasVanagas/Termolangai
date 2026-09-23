import React, { useState } from 'react';
import { ChevronDown, ArrowUpRight } from 'lucide-react';
import { FAQ_DATA, COMPANY_INFO } from '../data/content';

interface FaqSectionProps {
  onOpenQuoteModal: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenQuoteModal }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="duk" className="py-24 sm:py-36 bg-[#fafaf9] border-t border-[#e7e8eb]">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading & Support */}
          <div className="lg:col-span-5 space-y-6">
            <div className="eyebrow">
              <span className="status-dot"></span>
              <span>DAŽNIAUSI KLAUSIMAI</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-[#111215] leading-[1.1]">
              Atsakymai prieš priimant sprendimą
            </h2>

            <p className="text-sm text-[#64676f] leading-relaxed">
              Surinkome svarbiausius atsakymus apie profilių parinkimą, energinį naudingumą, nemokamą matavimą ir garantijas.
            </p>

            <div className="pt-4 border-t border-[#e7e8eb] space-y-2">
              <div className="text-xs text-[#8e9199]">Kilo papildomų klausimų?</div>
              <a
                href={`tel:${COMPANY_INFO.generalPhone}`}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#111215] hover:text-[#c81e1e] transition-colors"
              >
                <span>Skambinti vadybininkui: {COMPANY_INFO.generalPhone}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Clean Accordion */}
          <div className="lg:col-span-7 divide-y divide-[#e7e8eb] border-y border-[#e7e8eb]">
            {FAQ_DATA.map((faq, idx) => {
              const isOpen = openIndex === idx;

              return (
                <div key={idx} className="py-5">
                  <button
                    onClick={() => toggleAccordion(idx)}
                    className="w-full flex items-center justify-between gap-6 text-left py-1 group focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm sm:text-base font-normal text-[#111215] group-hover:text-[#c81e1e] transition-colors leading-snug">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#8e9199] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#111215]' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="pt-3 pb-2 text-xs sm:text-sm text-[#64676f] leading-relaxed animate-in fade-in duration-150">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
