import React from 'react';
import { PARTNERS_DATA } from '../data/content';

export const PartnersStrip: React.FC = () => {
  return (
    <section className="py-14 border-t border-[#e7e8eb] bg-[#fafaf9]">
      <div className="site-container">
        
        <div className="eyebrow justify-center mb-8">
          <span className="status-dot"></span>
          <span>SERTIFIKUOTI TECHNOLOGIJŲ PARTNERIAI</span>
        </div>

        <div className="flex flex-wrap items-center justify-around gap-8 md:gap-14">
          {PARTNERS_DATA.map((partner, idx) => (
            <div key={idx} className="text-center group cursor-default">
              <span className="font-display text-lg sm:text-xl font-medium tracking-tight text-[#64676f] group-hover:text-[#111215] transition-colors">
                {partner.name}
              </span>
              <span className="block text-[9px] font-mono uppercase tracking-widest text-[#8e9199] mt-0.5">
                {partner.subtitle}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
