import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Truck, CreditCard, RotateCcw } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

export const PurchaseInfoPage: React.FC = () => {
  return (
    <div className="pt-36 pb-24 bg-[#fafaf9]">
      <div className="site-container max-w-4xl">
        
        {/* Breadcrumb */}
        <div className="text-[11px] font-mono uppercase tracking-widest text-[#8e9199] mb-8">
          <Link to="/" className="hover:text-[#111215]">Pradžia</Link> / <span>Pirkimo informacija</span>
        </div>

        {/* Hero */}
        <div className="space-y-4 mb-16">
          <div className="eyebrow">
            <span className="status-dot"></span>
            <span>UAB „TERMO LANGAI“ PREKYBOS SĄLYGOS</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-light tracking-tight text-[#111215] leading-[1.08]">
            Pirkimo, apmokėjimo ir pristatymo taisyklės
          </h1>
          <p className="text-sm text-[#64676f] leading-relaxed">
            Skaidrumas ir aiškumas yra mūsų pagrindinis principas. Žemiau pateikiame oficialias taisykles, taikomas perkant langus, duris bei vartus iš UAB „Termo langai“.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
          <div className="bg-white border border-[#e7e8eb] rounded p-6 space-y-2">
            <Truck className="w-5 h-5 text-[#c81e1e]" />
            <h3 className="font-display text-base font-medium text-[#111215]">Pristatymas visoje Lietuvoje</h3>
            <p className="text-xs text-[#64676f] leading-relaxed">
              Produkciją pristatome specialiai pritaikytu transportu su stiklo piramidėmis, užtikrinančiomis saugų pervežimą. Taip pat galimas nemokamas atsiėmimas iš sandėlių.
            </p>
          </div>

          <div className="bg-white border border-[#e7e8eb] rounded p-6 space-y-2">
            <CreditCard className="w-5 h-5 text-[#c81e1e]" />
            <h3 className="font-display text-base font-medium text-[#111215]">Atsiskaitymo būdai</h3>
            <p className="text-xs text-[#64676f] leading-relaxed">
              Priimame banko pavedimus, atsiskaitymus per Paysera, elektroninę bankininkystę, Visa bei Mastercard korteles arba lizingo sutartis.
            </p>
          </div>

          <div className="bg-white border border-[#e7e8eb] rounded p-6 space-y-2">
            <ShieldCheck className="w-5 h-5 text-[#c81e1e]" />
            <h3 className="font-display text-base font-medium text-[#111215]">10 metų garantija</h3>
            <p className="text-xs text-[#64676f] leading-relaxed">
              Gamintojo garantija taikoma profilių spalvos stabilumui, sandarumui, stiklo paketams bei montavimo darbams.
            </p>
          </div>

          <div className="bg-white border border-[#e7e8eb] rounded p-6 space-y-2">
            <RotateCcw className="w-5 h-5 text-[#c81e1e]" />
            <h3 className="font-display text-base font-medium text-[#111215]">Kokybės kontrolė</h3>
            <p className="text-xs text-[#64676f] leading-relaxed">
              Kiekvienas gaminys prieš išvežant iš gamyklos ar sandėlio yra patikrinamas techninės kontrolės skyriaus.
            </p>
          </div>
        </div>

        {/* Detailed Legal and Policy Text */}
        <div className="bg-white border border-[#e7e8eb] rounded p-8 sm:p-12 space-y-8 text-xs text-[#64676f] leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-base font-semibold text-[#111215]">1. Bendrosios nuostatos</h2>
            <p>
              Šios pirkimo–pardavimo taisyklės (toliau – Taisyklės) nustato asmens, įsigyjančio prekes ar paslaugas (toliau – Pirkėjas), ir UAB „Termo langai“, juridinio asmens kodas {COMPANY_INFO.code}, PVM mokėtojo kodas {COMPANY_INFO.vatCode} (toliau – Pardavėjas), tarpusavio teises, pareigas bei atsakomybę.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-[#111215]">2. Užsakymo sudarymas ir gamybos terminai</h2>
            <p>
              Užsakymas laikomas patvirtintu po to, kai Pirkėjas suderina specifikacijas, pasirašo sutartį arba patvirtina sąmatą bei atlieka išankstinį mokėjimą. Standartinių baltos spalvos langų gamyba trunka 2–3 savaites, laminuotų spalvotų profilių – 3–4 savaites. Sandėlio prekės išduodamos per 1–2 darbo dienas.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-[#111215]">3. Matavimo ir montavimo paslaugos</h2>
            <p>
              Meistro atvykimas angų matavimui Kauno, Vilniaus ir Klaipėdos miestuose bei rajonuose atliekamas nemokamai. Montavimo darbai vykdomi pagal statybos techninį reglamentą STR, naudojant garo ir difuzines sandarinimo juostas.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-[#111215]">4. Garantiniai įsipareigojimai</h2>
            <p>
              Visiems VEKA ir REHAU profiliams suteikiama 10 metų garantija. Stiklo paketų hermetiškumui – 5 metai. Winkhaus apkaustams – 5 metai. Montavimo darbams, jei juos atliko Pardavėjo sertifikuota komanda – 5 metai.
            </p>
          </section>
        </div>

      </div>
    </div>
  );
};
