import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ChevronLeft, ChevronRight, Phone, MessageSquare, ShieldCheck, Mail, Sparkles } from 'lucide-react';
import { StatsStrip } from '../components/StatsStrip';
import { Calculator } from '../components/Calculator';
import { ValuesSection } from '../components/ValuesSection';
import { WarehousesSection } from '../components/WarehousesSection';
import { ProjectsGallery } from '../components/ProjectsGallery';
import { FaqSection } from '../components/FaqSection';
import { ClosingCta } from '../components/ClosingCta';
import { PartnersStrip } from '../components/PartnersStrip';
import { COMPANY_INFO, WAREHOUSES_DATA } from '../data/content';

interface HomePageProps {
  onOpenQuoteModal: (initialNote?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenQuoteModal }) => {
  // High-Resolution Curated Architectural Photography directly related to Windows, Doors & Gates
  const slides = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1509644851169-2acc08aa25b5?auto=format&fit=crop&w=2000&q=85',
      badge: 'VEKA SOFTLINE 82 MD • A++ VOKIŠKAS STANDARTAS',
      title: 'Šiluma, šviesa ir vokiška inžinerija Jūsų namams',
      description: 'Sertifikuotos 7 kamerų plastikinės profilių sistemos su 3 sandarinimo tarpinėmis bei selektyviniais 3 stiklų paketais.',
      link: '/plastikiniai-langai',
      linkText: 'Peržiūrėti VEKA langus',
      specTag: 'Uw ≤ 0.72 W/m²K • 10 m. garantija',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=2000&q=85',
      badge: 'PANORAMINIAI ALIUMINIO FASADAI IR TERASOS',
      title: 'Berėmės terasų erdvės ir siauro profilio langai',
      description: 'Lengvai viena ranka stumdomos pakeliamos sistemos (HST), atveriančios namus gamtai be jokių šalčio tiltelių.',
      link: '/aliuminio-langai',
      linkText: 'Aliuminio konstrukcijos',
      specTag: 'Reynaers & Aluprof • Nulinis slenkstis',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1558036117-15d82a90b9b1?auto=format&fit=crop&w=2000&q=85',
      badge: 'DURŲ IR VARTŲ KOLEKCIJA',
      title: 'Saugumas, akustinė ramybė ir griežta estetika',
      description: 'Plastikinės balkono durys, šarvuotos buto durys bei vokiški garažo vartai tiesiai iš regioninių sandėlių.',
      link: '/durys',
      linkText: 'Peržiūrėti duris ir vartus',
      specTag: 'RC2 / RC3 saugumas • Iki 42 dB garso izoliacija',
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2000&q=85',
      badge: 'INTERAKTYVUS CAD KONFIGŪRATORIUS',
      title: 'Langų ir durų sąmata pagal tikslius matmenis',
      description: '14 gamyklinių šablonų, proporcinis CAD braižymas milimetrais, A/A++ klasės ir momentinis kainos skaičiavimas.',
      link: '/langu_ir_duru_kainos_skaiciuokle',
      linkText: 'Apskaičiuoti kainą internetu',
      specTag: '14 CAD šablonų • Momentinis krepšelis',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [slides.length]);

  // High-Resolution Curated Category Photography directly showcasing the actual products
  const mainCategories = [
    {
      id: 'plastikiniai',
      title: 'PLASTIKO LANGAI',
      subtitle: 'VEKA ir REHAU A++ 7 kamerų sistemos',
      image: 'https://images.unsplash.com/photo-1509644851169-2acc08aa25b5?auto=format&fit=crop&w=800&q=80',
      link: '/plastikiniai-langai',
    },
    {
      id: 'aliuminio',
      title: 'ALIUMINIO LANGAI',
      subtitle: 'Siauro rėmo panoraminiai fasadai ir pertvaros',
      image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80',
      link: '/aliuminio-langai',
    },
    {
      id: 'durys',
      title: 'DURYS',
      subtitle: 'Lauko, balkono, terasinės ir šarvuotos durys',
      image: 'https://images.unsplash.com/photo-1558036117-15d82a90b9b1?auto=format&fit=crop&w=800&q=80',
      link: '/durys',
    },
    {
      id: 'skaiciuokle',
      title: 'Kainos skaičiuoklė',
      subtitle: '14 CAD šablonų ir momentinė sąmata',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
      link: '/langu_ir_duru_kainos_skaiciuokle',
      badge: 'Interaktyvu',
    },
    {
      id: 'parduotuve',
      title: 'E-Parduotuvė ir išpardavimas',
      subtitle: 'Paruošti gaminiai sandėlyje su nuolaida iki -40%',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
      link: '/e-parduotuve',
      badge: 'Iki -40%',
    },
    {
      id: 'vartai',
      title: 'GARAŽO VARTAI',
      subtitle: 'Buitiniai ir pramoniniai segmentiniai su automatika',
      image: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=800&q=80',
      link: '/vartai',
    },
  ];

  return (
    <div className="bg-[#fafaf9]">
      
      {/* 1. Hero Banner Slider with High-Res Internet Architectural Photography */}
      <section className="pt-28 sm:pt-36 pb-12 sm:pb-16 relative">
        <div className="site-container">
          
          <div className="relative rounded-xl overflow-hidden min-h-[520px] sm:min-h-[580px] lg:min-h-[640px] bg-[#111215] shadow-luxury group flex items-end">
            {slides.map((s, idx) => (
              <div
                key={s.id}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                }`}
              >
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover object-center scale-100 transition-transform duration-10000 ease-out group-hover:scale-103"
                />
                
                {/* Architectural Gradient Overlay for crystal clear readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/25 flex flex-col justify-end p-6 sm:p-12 lg:p-16">
                  <div className="text-white max-w-2xl space-y-4">
                    
                    {/* Eyebrow badge */}
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono tracking-widest uppercase bg-white/20 backdrop-blur-md px-3 py-1 rounded text-white border border-white/20 inline-block">
                        {s.badge}
                      </span>
                    </div>

                    {/* Headline */}
                    <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white leading-[1.08]">
                      {s.title}
                    </h2>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-xl font-normal">
                      {s.description}
                    </p>

                    {/* Actions and Technical Tag */}
                    <div className="pt-3 flex flex-wrap items-center gap-4">
                      <Link
                        to={s.link}
                        className="inline-flex items-center gap-2 bg-white text-[#111215] hover:bg-gray-100 text-xs font-semibold px-5 py-3 rounded tracking-wide transition-all shadow group/btn"
                      >
                        <span>{s.linkText}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                      </Link>

                      <button
                        type="button"
                        onClick={() => onOpenQuoteModal()}
                        className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold px-5 py-3 rounded backdrop-blur-md border border-white/20 tracking-wide transition-all"
                      >
                        <span>Gauti individualų pasiūlymą</span>
                      </button>

                      <div className="hidden sm:inline-block text-[11px] font-mono text-gray-400 pl-2">
                        {s.specTag}
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            ))}

            {/* Slider Controls */}
            <div className="absolute bottom-6 right-6 z-20 flex items-center gap-3">
              <button
                onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
                className="w-9 h-9 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-colors"
                aria-label="Ankstesnė skaidrė"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <div className="flex gap-1.5 px-1">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    className={`h-1.5 rounded-full transition-all ${
                      i === currentSlide ? 'bg-white w-6' : 'bg-white/40 w-2 hover:bg-white/60'
                    }`}
                    aria-label={`Skaidrė ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
                className="w-9 h-9 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-colors"
                aria-label="Kita skaidrė"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 2. 6 Main Category Tiles Reimagined with Edge-to-Edge Architectural Photography */}
      <section className="py-16 sm:py-20 bg-[#fafaf9] border-t border-[#e7e8eb]">
        <div className="site-container">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="space-y-3">
              <div className="eyebrow">
                <span className="status-dot"></span>
                <span>PAGRINDINĖS KATEGORIJOS</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-[#111215]">
                Produkcijos asortimentas
              </h2>
            </div>
            <p className="text-sm text-[#64676f] max-w-md leading-relaxed">
              Pasirinkite dominančią kategoriją išsamioms specifikacijoms bei gamyklos tiesioginiam kainos pasiūlymui.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainCategories.map((cat, idx) => (
              <Link
                key={cat.id}
                to={cat.link}
                className="group bg-white border border-[#e7e8eb] rounded-lg p-6 flex flex-col justify-between hover:border-[#cbd0d8] hover:shadow-luxury transition-all duration-300"
              >
                <div>
                  {/* Clean edge-to-edge photo container without clipping or awkward borders */}
                  <div className="aspect-[16/10] rounded overflow-hidden bg-[#ebebeb] relative mb-6">
                    <img
                      src={cat.image}
                      alt={cat.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute top-3 left-3 bg-[#111215]/80 backdrop-blur-md text-white text-[10px] font-mono px-2.5 py-0.5 rounded-sm">
                      0{idx + 1}
                    </span>
                    {cat.badge && (
                      <span className="absolute top-3 right-3 text-[10px] font-mono text-[#c81e1e] bg-white/90 backdrop-blur-md px-2.5 py-0.5 rounded shadow-sm font-medium">
                        {cat.badge}
                      </span>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="font-display text-xl font-medium text-[#111215] tracking-tight group-hover:text-[#c81e1e] transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-[#64676f] leading-relaxed">
                      {cat.subtitle}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#f0f1f3] flex items-center justify-between text-xs font-semibold text-[#111215]">
                  <span>Žiūrėti asortimentą</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#c81e1e] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* 3. Direct Warehouse Telephone Strip (from original #mobilus-menu2) */}
      <section className="py-12 bg-white border-y border-[#e7e8eb]">
        <div className="site-container">
          <div className="text-[10px] font-mono tracking-widest uppercase text-[#8e9199] mb-4 text-center">
            TIESIOGINIS RYŠYS SU PADALINIŲ VADYBININKAIS
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {WAREHOUSES_DATA.map((w) => (
              <div key={w.id} className="p-4 rounded bg-[#fafaf9] border border-[#e7e8eb] space-y-1">
                <div className="font-semibold text-xs text-[#111215]">{w.city} ({w.type})</div>
                {w.contacts.map((c, i) => (
                  <div key={i} className="text-xs">
                    <a
                      href={`tel:${c.phone}`}
                      className="text-[#64676f] hover:text-[#c81e1e] flex items-center justify-center gap-1.5 font-mono py-0.5"
                    >
                      <span>{c.name}:</span>
                      <span className="font-medium text-[#111215]">{c.formattedPhone}</span>
                    </a>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Stats Strip */}
      <StatsStrip />

      {/* 5. Interactive Configurator */}
      <Calculator onOpenQuoteModal={onOpenQuoteModal} />

      {/* 6. Values & Engineering Philosophy */}
      <ValuesSection onOpenQuoteModal={() => onOpenQuoteModal()} />

      {/* 7. Warehouses Directory */}
      <WarehousesSection onOpenQuoteModal={onOpenQuoteModal} />

      {/* 8. Realized Projects */}
      <ProjectsGallery onOpenQuoteModal={onOpenQuoteModal} />

      {/* 9. FAQ Section */}
      <FaqSection onOpenQuoteModal={() => onOpenQuoteModal()} />

      {/* 10. Closing Hero Architectural CTA */}
      <ClosingCta onOpenQuoteModal={() => onOpenQuoteModal()} />

      {/* 11. Certified Manufacturers Strip */}
      <PartnersStrip />

      {/* 12. Bottom Contact Action Strip (from original Termolangai #apacia_wrap) */}
      <section className="py-8 bg-white border-t border-[#e7e8eb] text-xs">
        <div className="site-container flex flex-wrap items-center justify-between gap-6">
          <div className="flex flex-wrap items-center gap-6 text-[#64676f]">
            <Link to="/kontaktai" className="hover:text-[#111215] font-medium">
              Kontaktai
            </Link>
            <Link to="/pirkimo-informacija" className="hover:text-[#111215] font-medium">
              Pirkimo informacija
            </Link>
            <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-[#111215]">
              {COMPANY_INFO.email}
            </a>
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#16a34a] hover:underline"
            >
              WhatsApp
            </a>
            <a
              href={COMPANY_INFO.messengerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#111215]"
            >
              Facebook
            </a>
          </div>

          <div className="flex items-center gap-3">
            <img src="/images/termolangai/visa.png" alt="Visa" className="h-5 object-contain" />
            <img src="/images/termolangai/master.png" alt="MasterCard" className="h-5 object-contain" />
          </div>
        </div>
      </section>

    </div>
  );
};
