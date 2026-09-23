import React from 'react';
import { STATS_DATA } from '../data/content';

export const StatsStrip: React.FC = () => {
  return (
    <section className="border-y border-[#e7e8eb] bg-[#fafaf9] py-14 sm:py-16">
      <div className="site-container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {STATS_DATA.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col"
            >
              <div className="font-display text-4xl sm:text-5xl font-light tracking-tight text-[#111215]">
                {stat.number}
                {stat.unit && (
                  <span className="text-sm font-mono text-[#8e9199] ml-1.5 font-normal">
                    {stat.unit}
                  </span>
                )}
                {!stat.unit && stat.number.includes('+') && (
                  <span className="text-[#c81e1e] font-light">+</span>
                )}
              </div>
              <span className="text-xs sm:text-sm font-medium text-[#111215] mt-2">
                {stat.label}
              </span>
              <span className="text-[11px] text-[#8e9199] mt-0.5">
                {stat.sublabel}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
