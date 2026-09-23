import React from 'react';
import { Link } from 'react-router-dom';
import { Calculator } from '../components/Calculator';
import { Ruler, ShieldAlert, Truck } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface CalculatorPageProps {
  onOpenQuoteModal: (initialNote?: string) => void;
}

export const CalculatorPage: React.FC<CalculatorPageProps> = ({ onOpenQuoteModal }) => {
  return (
    <div className="pt-32 sm:pt-40 pb-24 bg-[#fafaf9]">
      
      {/* Page Header Container */}
      <div className="site-container mb-8">
        {/* Breadcrumb */}
        <div className="text-[11px] font-mono uppercase tracking-widest text-[#8e9199] mb-6">
          <Link to="/" className="hover:text-[#111215] transition-colors">Pradžia</Link>
          <span className="mx-2">/</span>
          <span className="text-[#111215]">Langų ir durų kainos skaičiuoklė</span>
        </div>

        <div className="max-w-3xl space-y-3">
          <div className="eyebrow">
            <span className="status-dot"></span>
            <span>TIKSLUS APSKAIČIAVIMAS INTERNETU</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-light tracking-tight text-[#111215]">
            Langų ir durų kainos skaičiuoklė
          </h1>
          <p className="text-sm sm:text-base text-[#64676f] leading-relaxed">
            Interaktyvus CAD konfigūratorius su 14 gamyklinių profilių šablonų. Realiu laiku matykite vizualizaciją, proporcijas bei gamyklinę kainą su PVM ir tiesioginėmis nuolaidomis.
          </p>
        </div>
      </div>

      {/* Main Interactive Calculator Engine */}
      <Calculator onOpenQuoteModal={onOpenQuoteModal} />

      {/* Architectural Technical Guidance & FAQ */}
      <div className="site-container mt-16 pt-16 border-t border-[#e7e8eb]">
        <div className="max-w-2xl mb-12">
          <span className="text-[11px] font-mono uppercase tracking-wider text-[#8e9199] block mb-2">
            NAUDINGA INFORMACIJA MATAVIMUI IR UŽSAKYMUI
          </span>
          <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-[#111215]">
            Kaip teisingai suplanuoti gaminius?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Angos matavimas */}
          <div className="bg-white p-6 sm:p-8 rounded-lg border border-[#e7e8eb] shadow-subtle space-y-4">
            <div className="w-10 h-10 rounded bg-[#fafaf9] border border-[#e7e8eb] flex items-center justify-center text-[#111215]">
              <Ruler className="w-5 h-5 stroke-[1.5]" />
            </div>
            <h3 className="text-base font-semibold text-[#111215]">Kaip išmatuoti angą?</h3>
            <p className="text-xs text-[#64676f] leading-relaxed">
              Matuokite angos plotį ir aukštį trijose vietose (viršuje, viduryje, apačioje). Į skaičiuoklę įveskite mažiausią gautą matmenį, atėmę po 15–20 mm montavimo putų tarpams.
            </p>
            <div className="pt-2 text-[11px] text-[#c81e1e] font-mono">
              ★ Užsakant montavimą – meistro matavimas nemokamas!
            </div>
          </div>

          {/* Card 2: A++ reglamentas */}
          <div className="bg-white p-6 sm:p-8 rounded-lg border border-[#e7e8eb] shadow-subtle space-y-4">
            <div className="w-10 h-10 rounded bg-[#fafaf9] border border-[#e7e8eb] flex items-center justify-center text-[#111215]">
              <ShieldAlert className="w-5 h-5 stroke-[1.5]" />
            </div>
            <h3 className="text-base font-semibold text-[#111215]">A++ energinė klasė</h3>
            <p className="text-xs text-[#64676f] leading-relaxed">
              Pagal LR Statybos techninį reglamentą naujai statomiems namams privalomi langai su šilumos perdavimo koeficientu Uw ≤ 0.8 W/m²K. Šį reikalavimą garantuoja VEKA Softline 82 MD su 3 stiklų paketu.
            </p>
            <ul className="text-[11px] text-[#4b5563] space-y-1 font-mono">
              <li>• 7 kamerų A klasės profilis</li>
              <li>• 3 sandarinimo tarpinės</li>
              <li>• 48 mm selektyvinis paketas (Ug 0.5)</li>
            </ul>
          </div>

          {/* Card 3: Pristatymas ir sandėliai */}
          <div className="bg-white p-6 sm:p-8 rounded-lg border border-[#e7e8eb] shadow-subtle space-y-4">
            <div className="w-10 h-10 rounded bg-[#fafaf9] border border-[#e7e8eb] flex items-center justify-center text-[#111215]">
              <Truck className="w-5 h-5 stroke-[1.5]" />
            </div>
            <h3 className="text-base font-semibold text-[#111215]">Gamyba ir sandėliai</h3>
            <p className="text-xs text-[#64676f] leading-relaxed">
              Standartinių matmenų gaminius turime savo regioniniuose sandėliuose Kaune, Vilniuje ir Klaipėdoje (atsiėmimas tą pačią dieną). Individuali gamyba trunka 2–4 savaites.
            </p>
            <div className="pt-2 text-[11px] text-[#111215] font-mono">
              📞 Reikia pagalbos? <a href={`tel:${COMPANY_INFO.generalPhone}`} className="underline font-bold">{COMPANY_INFO.generalPhone}</a>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
