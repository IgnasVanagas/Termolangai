import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { PlasticWindowsPage } from './pages/PlasticWindowsPage';
import { AluminumWindowsPage } from './pages/AluminumWindowsPage';
import { DoorsPage } from './pages/DoorsPage';
import { GatesPage } from './pages/GatesPage';
import { EStorePage } from './pages/EStorePage';
import { CalculatorPage } from './pages/CalculatorPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactsPage } from './pages/ContactsPage';
import { PurchaseInfoPage } from './pages/PurchaseInfoPage';
import { Phone, ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO } from './data/content';

export function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [modalPrefillNote, setModalPrefillNote] = useState('');

  const handleOpenQuoteModal = (note?: string) => {
    setModalPrefillNote(note || '');
    setQuoteModalOpen(true);
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-[#fafaf9] text-[#111215]">
        {/* Minimalist Fixed Header */}
        <Navbar onOpenQuoteModal={handleOpenQuoteModal} />

        {/* Dynamic Route Pages */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage onOpenQuoteModal={handleOpenQuoteModal} />} />
            <Route path="/apie-mus" element={<AboutPage onOpenQuoteModal={() => handleOpenQuoteModal()} />} />
            <Route path="/plastikiniai-langai" element={<PlasticWindowsPage onOpenQuoteModal={handleOpenQuoteModal} />} />
            <Route path="/plastikiniai-langai/*" element={<PlasticWindowsPage onOpenQuoteModal={handleOpenQuoteModal} />} />
            <Route path="/aliuminio-langai" element={<AluminumWindowsPage onOpenQuoteModal={handleOpenQuoteModal} />} />
            <Route path="/aliuminio-langai/*" element={<AluminumWindowsPage onOpenQuoteModal={handleOpenQuoteModal} />} />
            <Route path="/durys" element={<DoorsPage onOpenQuoteModal={handleOpenQuoteModal} />} />
            <Route path="/durys/*" element={<DoorsPage onOpenQuoteModal={handleOpenQuoteModal} />} />
            <Route path="/vartai" element={<GatesPage onOpenQuoteModal={handleOpenQuoteModal} />} />
            <Route path="/vartai/*" element={<GatesPage onOpenQuoteModal={handleOpenQuoteModal} />} />
            <Route path="/e-parduotuve" element={<EStorePage onOpenQuoteModal={handleOpenQuoteModal} />} />
            <Route path="/plastikiniu-langu-ispardavimas" element={<EStorePage onOpenQuoteModal={handleOpenQuoteModal} />} />
            <Route path="/langu_ir_duru_kainos_skaiciuokle" element={<CalculatorPage onOpenQuoteModal={handleOpenQuoteModal} />} />
            <Route path="/galerija" element={<GalleryPage onOpenQuoteModal={handleOpenQuoteModal} />} />
            <Route path="/kontaktai" element={<ContactsPage onOpenQuoteModal={handleOpenQuoteModal} />} />
            <Route path="/pirkimo-informacija" element={<PurchaseInfoPage />} />
            <Route path="*" element={<HomePage onOpenQuoteModal={handleOpenQuoteModal} />} />
          </Routes>
        </main>

        {/* Minimalist Architectural Footer */}
        <Footer />

        {/* Universal Quote & Booking Modal */}
        <QuoteModal
          isOpen={quoteModalOpen}
          onClose={() => setQuoteModalOpen(false)}
          prefillNote={modalPrefillNote}
        />

        {/* Mobile Quick Contact Bar */}
        <div className="md:hidden fixed bottom-0 inset-x-0 z-30 bg-[#fafaf9]/95 backdrop-blur-md border-t border-[#e7e8eb] p-3 flex items-center gap-3">
          <a
            href={`tel:${COMPANY_INFO.generalPhone}`}
            className="flex-1 inline-flex items-center justify-center gap-1.5 bg-white border border-[#e7e8eb] text-[#111215] text-xs font-medium py-2.5 px-3 rounded"
          >
            <Phone className="w-3.5 h-3.5 text-[#c81e1e]" />
            <span>Skambinti</span>
          </a>

          <button
            onClick={() => handleOpenQuoteModal()}
            className="flex-1 inline-flex items-center justify-center gap-1.5 bg-[#111215] text-white text-xs font-medium py-2.5 px-3 rounded shadow-sm"
          >
            <span>Pasiūlymas</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
