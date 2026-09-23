import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, ChevronDown, Menu, X, ArrowUpRight } from 'lucide-react';
import { WAREHOUSES_DATA } from '../data/content';

interface NavbarProps {
  onOpenQuoteModal: (prefillCategory?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [phoneMenuOpen, setPhoneMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    setPhoneMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const navLinks = [
    {
      label: 'Plastikiniai langai',
      id: 'plastikiniai',
      path: '/plastikiniai-langai',
      items: [
        { title: 'Veka Softline 82 MD langai', path: '/plastikiniai-langai', metric: 'A++ 82mm' },
        { title: 'Individualiems sprendimams', path: '/plastikiniai-langai', metric: 'Nestandartiniai' },
        { title: 'Pasyviam namui', path: '/plastikiniai-langai', metric: 'Uw 0.68' },
        { title: 'Plastikiniai stumdomi langai', path: '/plastikiniai-langai', metric: 'Terasoms' },
        { title: 'REHAU GENEO langai', path: '/plastikiniai-langai', metric: 'RAU-FIPRO' },
        { title: 'Atsidarantys į lauką', path: '/plastikiniai-langai', metric: 'Skandinaviški' },
      ],
    },
    {
      label: 'Aliuminio langai',
      id: 'aliuminio',
      path: '/aliuminio-langai',
      items: [
        { title: 'Aliuminio langai vidaus patalpoms', path: '/aliuminio-langai', metric: 'Pertvaros' },
        { title: 'Aliuminio langai namams ir pastatams', path: '/aliuminio-langai', metric: 'Fasadai' },
        { title: 'Aliuminio langai pasyviam namui', path: '/aliuminio-langai', metric: 'A++ Termo' },
        { title: 'Balkonams ir terasoms', path: '/aliuminio-langai', metric: 'Stumdomi' },
      ],
    },
    {
      label: 'Durys',
      id: 'durys',
      path: '/durys',
      items: [
        { title: 'Plastikinės balkono durys', path: '/durys' },
        { title: 'Plastikinės lauko durys', path: '/durys' },
        { title: 'Aliuminio terasinės durys (HST)', path: '/durys', metric: 'Iki 6.5m' },
        { title: 'Šarvuotos buto durys', path: '/durys', metric: '42 dB' },
        { title: 'Šarvuotos lauko durys', path: '/durys', metric: 'Termo' },
      ],
    },
    {
      label: 'Vartai',
      id: 'vartai',
      path: '/vartai',
      items: [
        { title: 'Buitiniai garažo vartai', path: '/vartai' },
        { title: 'Pramoniniai segmentiniai vartai', path: '/vartai' },
      ],
    },
    {
      label: 'Skaičiuoklė',
      id: 'skaiciuokle',
      path: '/langu_ir_duru_kainos_skaiciuokle',
    },
    {
      label: 'E-Parduotuvė',
      id: 'parduotuve',
      path: '/e-parduotuve',
    },
    {
      label: 'Apie mus',
      id: 'apie',
      path: '/apie-mus',
    },
    {
      label: 'Kontaktai',
      id: 'kontaktai',
      path: '/kontaktai',
    },
  ];

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'glass-header py-4'
            : 'bg-[#fafaf9]/90 backdrop-blur-md border-b border-[#e7e8eb] py-5'
        }`}
      >
        <div className="site-container flex items-center justify-between gap-6">
          
          {/* Architectural Wordmark */}
          <Link to="/" className="flex items-baseline gap-1 group shrink-0">
            <span className="font-display font-bold text-xl tracking-tight text-[#111215]">
              TERMO<span className="text-[#c81e1e]">.</span>
            </span>
            <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#64676f] transition-colors group-hover:text-[#111215]">
              LANGAI
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1">
            {navLinks.map((item) => (
              <div
                key={item.id}
                className="relative"
                onMouseEnter={() => item.items && setActiveDropdown(item.id)}
                onMouseLeave={() => item.items && setActiveDropdown(null)}
              >
                <Link
                  to={item.path}
                  className={`inline-flex items-center gap-1 px-2.5 py-2 text-xs font-medium tracking-wide transition-colors ${
                    location.pathname === item.path
                      ? 'text-[#111215] font-semibold'
                      : 'text-[#64676f] hover:text-[#111215]'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.items && (
                    <ChevronDown className={`w-3 h-3 text-[#9ea1aa] transition-transform duration-200 ${
                      activeDropdown === item.id ? 'rotate-180 text-[#111215]' : ''
                    }`} />
                  )}
                </Link>

                {/* Dropdown */}
                {item.items && activeDropdown === item.id && (
                  <div className="absolute top-full left-0 w-72 p-2 bg-white border border-[#e7e8eb] rounded shadow-luxury animate-in fade-in slide-in-from-top-1 duration-150 z-50">
                    <div className="space-y-1">
                      {item.items.map((sub, idx) => (
                        <Link
                          key={idx}
                          to={sub.path}
                          onClick={() => setActiveDropdown(null)}
                          className="block p-2 rounded hover:bg-[#fafaf9] transition-colors group"
                        >
                          <div className="flex items-center justify-between text-xs">
                            <span className="font-medium text-[#111215] group-hover:text-[#c81e1e] transition-colors">
                              {sub.title}
                            </span>
                            {sub.metric && (
                              <span className="text-[9px] font-mono text-[#8e9199]">
                                {sub.metric}
                              </span>
                            )}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Header Actions */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Phone Quick Dial */}
            <div className="relative">
              <button
                onClick={() => setPhoneMenuOpen(!phoneMenuOpen)}
                className="hidden sm:inline-flex items-center gap-1.5 text-xs font-medium text-[#64676f] hover:text-[#111215] py-2 px-1 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#c81e1e]" />
                <span className="font-mono">+370 686 05133</span>
                <ChevronDown className="w-3 h-3 text-[#9ea1aa]" />
              </button>

              {phoneMenuOpen && (
                <div
                  className="absolute right-0 top-full mt-3 w-72 bg-white border border-[#e7e8eb] rounded shadow-luxury p-4 space-y-3 z-50 animate-in fade-in duration-150"
                  onMouseLeave={() => setPhoneMenuOpen(false)}
                >
                  <div className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#8e9199] pb-1 border-b border-[#f0f1f3]">
                    Padalinių telefonai
                  </div>
                  {WAREHOUSES_DATA.map((w) => (
                    <div key={w.id} className="text-xs space-y-0.5">
                      <div className="font-semibold text-[#111215]">{w.city} ({w.type})</div>
                      {w.contacts.map((c, i) => (
                        <a
                          key={i}
                          href={`tel:${c.phone}`}
                          className="flex items-center justify-between text-[#64676f] hover:text-[#c81e1e] text-[11px] py-0.5"
                        >
                          <span>{c.name}</span>
                          <span className="font-mono text-[#111215]">{c.formattedPhone}</span>
                        </a>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Primary Action Button */}
            <button
              onClick={() => onOpenQuoteModal()}
              className="btn-primary text-xs !min-h-[40px] !py-2 !px-4"
            >
              <span>Gauti pasiūlymą</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-[#111215] hover:text-[#c81e1e] transition-colors"
              aria-label="Atidaryti meniu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-0 top-[68px] bg-[#fafaf9] z-50 overflow-y-auto p-6 flex flex-col justify-between border-t border-[#e7e8eb] animate-in fade-in duration-200">
          <div className="space-y-4 pt-2">
            <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8e9199]">
              Puslapiai
            </div>
            <div className="space-y-2">
              {navLinks.map((item) => (
                <div key={item.id} className="border-b border-[#f0f1f3] pb-2">
                  <Link
                    to={item.path}
                    className="text-sm font-medium text-[#111215] flex items-center justify-between py-1"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#8e9199]" />
                  </Link>
                  {item.items && (
                    <div className="pl-3 pt-1 space-y-1.5 border-l border-[#e7e8eb] mt-1">
                      {item.items.map((sub, i) => (
                        <Link
                          key={i}
                          to={sub.path}
                          className="block text-xs text-[#64676f] hover:text-[#c81e1e]"
                        >
                          {sub.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="btn-primary w-full text-xs"
              >
                <span>Užsakyti nemokamą matavimą</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="pt-6 border-t border-[#e7e8eb] text-xs text-[#64676f] space-y-1">
            <div className="font-semibold text-[#111215]">Tiesioginiai kontaktai:</div>
            <div>Kaunas: +370 686 05133 • Vilnius: +370 659 74141</div>
          </div>
        </div>
      )}
    </>
  );
};
