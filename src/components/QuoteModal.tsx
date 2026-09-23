import React, { useState, useEffect } from 'react';
import { X, Check, ArrowUpRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { COMPANY_INFO } from '../data/content';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefillNote?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose, prefillNote = '' }) => {
  const [category, setCategory] = useState<string>('Plastikiniai langai');
  const [city, setCity] = useState<string>('Kaunas');
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [note, setNote] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  useEffect(() => {
    if (prefillNote) {
      setNote(prefillNote);
    }
  }, [prefillNote]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      try {
        confetti({
          particleCount: 60,
          spread: 60,
          origin: { y: 0.6 },
          colors: ['#111215', '#c81e1e', '#e7e8eb'],
        });
      } catch (err) {
        // graceful fallback
      }
    }, 500);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setName('');
    setPhone('');
    setEmail('');
    setNote('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg bg-white border border-[#e7e8eb] rounded-lg shadow-luxury p-8 sm:p-10 max-h-[90vh] overflow-y-auto text-[#111215]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-[#8e9199] hover:text-[#111215] transition-colors"
          aria-label="Uždaryti"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <>
            <div className="pr-6 space-y-2">
              <div className="eyebrow">
                <span className="status-dot"></span>
                <span>NEMOKAMAS PASIŪLYMAS</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-light tracking-tight text-[#111215]">
                Gauti sąmatą
              </h2>
              <p className="text-xs sm:text-sm text-[#64676f] leading-relaxed">
                Pateikite savo pageidavimus. Inžinierius paruoš tikslią sąmatą per 1–2 valandas.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-widest text-[#8e9199] mb-1.5">
                    Produkto tipas
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full bg-[#fafaf9] border border-[#e7e8eb] rounded p-2.5 text-xs text-[#111215] focus:border-[#111215] focus:outline-none"
                  >
                    <option value="Plastikiniai langai">Plastikiniai langai (VEKA / REHAU)</option>
                    <option value="Aliuminio sistemos">Aliuminio langai ir fasadai</option>
                    <option value="Durys">Lauko ir terasinės durys (HST)</option>
                    <option value="Garažo vartai">Garažo vartai ir automatika</option>
                    <option value="Sandėlio likutis">Išpardavimo sandėlio likutis</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-widest text-[#8e9199] mb-1.5">
                    Miestas / Regionas
                  </label>
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full bg-[#fafaf9] border border-[#e7e8eb] rounded p-2.5 text-xs text-[#111215] focus:border-[#111215] focus:outline-none"
                  >
                    <option value="Kaunas">Kaunas ir Kauno r.</option>
                    <option value="Vilnius">Vilnius ir Vilniaus r.</option>
                    <option value="Klaipėda">Klaipėda ir pajūris</option>
                    <option value="Šiauliai">Šiauliai</option>
                    <option value="Panevėžys">Panevėžys</option>
                    <option value="Kita">Kitas miestas</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-widest text-[#8e9199] mb-1.5">
                    Vardas *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Vardas Pavardė"
                    className="w-full bg-[#fafaf9] border border-[#e7e8eb] rounded p-2.5 text-xs text-[#111215] focus:border-[#111215] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-widest text-[#8e9199] mb-1.5">
                    Telefono numeris *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+370 600 00000"
                    className="w-full bg-[#fafaf9] border border-[#e7e8eb] rounded p-2.5 text-xs text-[#111215] focus:border-[#111215] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-mono uppercase tracking-widest text-[#8e9199] mb-1.5">
                  El. paštas
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="vardas@pastas.lt"
                  className="w-full bg-[#fafaf9] border border-[#e7e8eb] rounded p-2.5 text-xs text-[#111215] focus:border-[#111215] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[10px] font-mono uppercase tracking-widest text-[#8e9199] mb-1.5">
                  Pageidaujami matmenys ar klausimai
                </label>
                <textarea
                  rows={3}
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="Pvz.: 4 langai 1460x1420 mm su montavimu Kauno rajone..."
                  className="w-full bg-[#fafaf9] border border-[#e7e8eb] rounded p-2.5 text-xs text-[#111215] focus:border-[#111215] focus:outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full text-xs !min-h-[46px] justify-center mt-2 group"
              >
                <span>{isSubmitting ? 'Siunčiama...' : 'Gauti nemokamą pasiūlymą'}</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <div className="text-[10px] text-center text-[#8e9199] leading-tight">
                Jūsų duomenys yra saugūs ir naudojami tik sąmatos pateikimui.
              </div>
            </form>
          </>
        ) : (
          <div className="py-8 text-center space-y-4 animate-in fade-in zoom-in-95 duration-200">
            <div className="w-12 h-12 rounded-full bg-[#fdf2f2] text-[#c81e1e] flex items-center justify-center mx-auto">
              <Check className="w-6 h-6" />
            </div>

            <h3 className="font-display text-2xl font-light text-[#111215]">
              Ačiū, {name || 'kliente'}. Užklausa gauta.
            </h3>

            <p className="text-xs sm:text-sm text-[#64676f] max-w-sm mx-auto leading-relaxed">
              Mūsų vadybininkas netrukus susisieks numeriu <strong>{phone}</strong> su geriausiu pasiūlymu.
            </p>

            <div className="pt-4 flex gap-3">
              <button
                onClick={handleReset}
                className="btn-secondary w-full text-xs"
              >
                <span>Uždaryti</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
