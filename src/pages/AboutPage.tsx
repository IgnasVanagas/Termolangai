import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Award, ShieldCheck, Warehouse, Clock } from 'lucide-react';

interface AboutPageProps {
  onOpenQuoteModal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenQuoteModal }) => {
  return (
    <div className="pt-36 pb-24 bg-[#fafaf9]">
      <div className="site-container">
        
        {/* Breadcrumb */}
        <div className="text-[11px] font-mono uppercase tracking-widest text-[#8e9199] mb-8">
          <Link to="/" className="hover:text-[#111215]">Pradžia</Link> / <span>Apie mus</span>
        </div>

        {/* Page Hero */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="eyebrow">
            <span className="status-dot"></span>
            <span>UAB „TERMO LANGAI“ ISTORIJA IR VERTYBĖS</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-light tracking-tight text-[#111215] leading-[1.08]">
            Kokybė, patikrinta laiko.{' '}
            <span className="font-serif italic font-normal text-[#c81e1e]">Nuo 2010 m.</span>
          </h1>
          <p className="text-base text-[#64676f] leading-relaxed font-normal">
            Mūsų įmonė įsikūrė 2010 metais ir sėkmingai plėtoja prekybą langais, durimis ir garažo vartais. Pradėję dirbti per ekonominį sunkmetį įgijome patirties, kaip išlikti rinkoje siūlant tik aukščiausios kokybės gaminius už sąžiningą kainą.
          </p>
        </div>

        {/* Big Architectural Showcase Photo */}
        <div className="rounded-xl overflow-hidden aspect-[21/9] bg-[#ebebeb] mb-20 shadow-luxury relative">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85"
            alt="Termolangai gamyba ir montavimas"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
        </div>

        {/* Editorial Text Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[10px] font-mono tracking-widest uppercase text-[#8e9199] block">
              MŪSŲ MISIJA
            </span>
            <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-[#111215] leading-snug">
              Teikti ilgaamžius šilumos sprendimus be paslėptų mokesčių ar kompromisų.
            </h2>
            <div className="pt-2">
              <button
                onClick={onOpenQuoteModal}
                className="btn-primary text-xs"
              >
                <span>Pasitarti su specialistu</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6 text-sm text-[#64676f] leading-relaxed">
            <p>
              Ilgametis darbas su vokiškais <strong>VEKA</strong> ir <strong>REHAU</strong> profiliais leido ištobulinti kiekvieną procesą: nuo pirmojo meistro matavimo Jūsų objekte iki galutinio sandaraus montavimo pagal griežčiausius A++ energinio naudingumo reikalavimus.
            </p>
            <p>
              Turime nuosavus sandėlius trijuose didžiausiuose Lietuvos miestuose – <strong>Kaune, Vilniuje ir Klaipėdoje</strong>. Tai leidžia palaikyti virš 500 standartinių konstrukcijų likutį ir operatyviai aptarnauti tiek privačius klientus, tiek stambius statybų vystytojus.
            </p>
            <p>
              Kiekvienam gaminiui suteikiama oficiali 10 metų garantija. Vertiname ilgalaikę partnerystę, todėl teikiame ir profesionalų garantinį bei pogarantinį servisą.
            </p>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-12 border-t border-[#e7e8eb]">
          {[
            {
              icon: Clock,
              title: '14+ metų patirtis',
              desc: 'Sėkmingai dirbame nuo 2010 m., atlaikę visas rinkos krizes.',
            },
            {
              icon: Award,
              title: 'Vokiški standartai',
              desc: 'Naudojame tik sertifikuotus VEKA ir REHAU profilius.',
            },
            {
              icon: Warehouse,
              title: 'Sandėliai 3 miestuose',
              desc: 'Didelis likutis Kaune, Vilniuje ir Klaipėdoje.',
            },
            {
              icon: ShieldCheck,
              title: '10 m. garantija',
              desc: 'Pilnas garantinis servisas ir atsakomybė už kiekvieną siūlę.',
            },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="space-y-3">
                <Icon className="w-5 h-5 text-[#c81e1e]" />
                <h3 className="font-display text-lg font-medium text-[#111215]">{item.title}</h3>
                <p className="text-xs text-[#64676f] leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};
