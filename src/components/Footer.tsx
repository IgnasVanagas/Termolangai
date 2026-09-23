import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, Mail, MessageSquare, Facebook } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#fafaf9] text-[#64676f] border-t border-[#e7e8eb] pt-20 pb-14 text-xs">
      <div className="site-container">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#e7e8eb]">
          
          {/* Brand Wordmark & Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="flex items-baseline gap-1">
              <span className="font-display font-bold text-lg tracking-tight text-[#111215]">
                TERMO<span className="text-[#c81e1e]">.</span>
              </span>
              <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#64676f] pl-1">
                LANGAI
              </span>
            </Link>

            <p className="text-xs text-[#64676f] leading-relaxed max-w-sm">
              UAB „Termo langai“ nuo 2010 metų plėtoja prekybą ir montavimą sertifikuotais plastikiniais langais, aliuminio konstrukcijomis, durimis bei vartais visoje Lietuvoje.
            </p>

            <div className="space-y-1 font-mono text-[10px] text-[#8e9199]">
              <div>UAB „Termo langai“ • Įm. k. {COMPANY_INFO.code}</div>
              <div>PVM mokėtojo kodas: {COMPANY_INFO.vatCode}</div>
              <div>Centrinis biuras: {COMPANY_INFO.addressKaunas}</div>
            </div>

            {/* Social channels */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href={COMPANY_INFO.messengerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded border border-[#e7e8eb] bg-white flex items-center justify-center text-[#111215] hover:text-[#c81e1e] hover:border-[#cbd0d8] transition-colors"
                title="Messenger"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded border border-[#e7e8eb] bg-white flex items-center justify-center text-[#16a34a] hover:border-[#16a34a] transition-colors"
                title="WhatsApp"
              >
                <MessageSquare className="w-3.5 h-3.5" />
              </a>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="w-8 h-8 rounded border border-[#e7e8eb] bg-white flex items-center justify-center text-[#111215] hover:text-[#c81e1e] hover:border-[#cbd0d8] transition-colors"
                title="El. paštas"
              >
                <Mail className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Produkcija (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-[10px] font-semibold uppercase tracking-widest text-[#111215]">
              Produkcija
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/plastikiniai-langai" className="hover:text-[#111215] transition-colors">
                  Plastikiniai langai (VEKA / REHAU)
                </Link>
              </li>
              <li>
                <Link to="/aliuminio-langai" className="hover:text-[#111215] transition-colors">
                  Aliuminio langai ir fasadai
                </Link>
              </li>
              <li>
                <Link to="/durys" className="hover:text-[#111215] transition-colors">
                  Lauko ir balkono durys
                </Link>
              </li>
              <li>
                <Link to="/durys" className="hover:text-[#111215] transition-colors">
                  Aliuminio terasinės durys (HST)
                </Link>
              </li>
              <li>
                <Link to="/durys" className="hover:text-[#111215] transition-colors">
                  Šarvuotos buto ir lauko durys
                </Link>
              </li>
              <li>
                <Link to="/vartai" className="hover:text-[#111215] transition-colors">
                  Garažo segmentiniai vartai
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigacija & Paslaugos (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-[10px] font-semibold uppercase tracking-widest text-[#111215]">
              Svetainė
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/langu_ir_duru_kainos_skaiciuokle" className="hover:text-[#111215] transition-colors">
                  Kainos skaičiuoklė
                </Link>
              </li>
              <li>
                <Link to="/e-parduotuve" className="hover:text-[#111215] transition-colors">
                  E-parduotuvė
                </Link>
              </li>
              <li>
                <Link to="/galerija" className="hover:text-[#111215] transition-colors">
                  Galerija
                </Link>
              </li>
              <li>
                <Link to="/apie-mus" className="hover:text-[#111215] transition-colors">
                  Apie mus
                </Link>
              </li>
              <li>
                <Link to="/pirkimo-informacija" className="hover:text-[#111215] transition-colors">
                  Pirkimo informacija
                </Link>
              </li>
              <li>
                <Link to="/kontaktai" className="hover:text-[#111215] transition-colors">
                  Kontaktai
                </Link>
              </li>
            </ul>
          </div>

          {/* Padaliniai (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-[10px] font-semibold uppercase tracking-widest text-[#111215]">
              Padalinių kontaktai
            </div>
            <div className="space-y-2.5 text-xs">
              <div>
                <strong className="text-[#111215] block">Kaunas (Centras & Sandėlis):</strong>
                <span>Sandra: +370 686 05133 • Nerijus: +370 681 23680</span>
              </div>
              <div>
                <strong className="text-[#111215] block">Vilnius (Sandėlis):</strong>
                <span>Renata: +370 659 74141 • Darius: +370 659 55737</span>
              </div>
              <div>
                <strong className="text-[#111215] block">Klaipėda (Sandėlis):</strong>
                <span>Žygimantas: +370 699 41092 • Marta: +370 650 61241</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar with Payment Badges */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#8e9199]">
          <div>
            © {COMPANY_INFO.establishedYear}–2026 UAB „Termo langai“. Visos teisės saugomos.
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <img src="/images/termolangai/visa.png" alt="Visa" className="h-4 object-contain" />
              <img src="/images/termolangai/master.png" alt="MasterCard" className="h-4 object-contain" />
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-[#111215] hover:text-[#c81e1e] font-medium transition-colors"
            >
              <span>Į viršų</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
