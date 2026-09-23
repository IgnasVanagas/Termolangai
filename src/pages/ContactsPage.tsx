import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageSquare, Clock, ArrowUpRight } from 'lucide-react';
import { WAREHOUSES_DATA, COMPANY_INFO } from '../data/content';

interface ContactsPageProps {
  onOpenQuoteModal: (initialNote?: string) => void;
}

export const ContactsPage: React.FC<ContactsPageProps> = ({ onOpenQuoteModal }) => {
  return (
    <div className="pt-36 pb-24 bg-[#fafaf9]">
      <div className="site-container">
        
        {/* Breadcrumb */}
        <div className="text-[11px] font-mono uppercase tracking-widest text-[#8e9199] mb-8">
          <Link to="/" className="hover:text-[#111215]">Pradžia</Link> / <span>Kontaktai</span>
        </div>

        {/* Hero */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="eyebrow">
            <span className="status-dot"></span>
            <span>UAB „TERMO LANGAI“ PADALINIAI IR SANDĖLIAI</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-light tracking-tight text-[#111215] leading-[1.08]">
            Kontaktai.{' '}
            <span className="font-serif italic font-normal text-[#c81e1e]">Kaunas • Vilnius • Klaipėda</span>
          </h1>
          <p className="text-base text-[#64676f] leading-relaxed">
            Susisiekite su mūsų centrinio biuro arba sandėlių vadybininkais. Teikiame nemokamas konsultacijas, vykdome prekybą vietoje bei atvykstame matavimui visoje Lietuvoje.
          </p>
        </div>

        {/* 4 Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {WAREHOUSES_DATA.map((w) => (
            <div
              key={w.id}
              className="bg-white border border-[#e7e8eb] rounded p-8 sm:p-10 flex flex-col justify-between space-y-6 shadow-subtle hover:border-[#cbd0d8] transition-all"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-[#c81e1e]">
                    {w.city} • {w.type}
                  </span>
                  <span className="text-[11px] font-mono text-[#8e9199] flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {w.workingHours}
                  </span>
                </div>

                <h2 className="font-display text-2xl font-medium text-[#111215] tracking-tight">
                  {w.title}
                </h2>

                <p className="text-xs text-[#64676f] flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#8e9199] shrink-0" />
                  <span>{w.address}</span>
                </p>

                {/* Staff Contacts */}
                <div className="pt-4 border-t border-[#f0f1f3] space-y-3">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-[#8e9199] block">
                    Tiesioginiai kontaktai:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {w.contacts.map((c, i) => (
                      <div key={i} className="text-xs bg-[#fafaf9] p-3 rounded border border-[#e7e8eb]">
                        <div className="font-semibold text-[#111215]">{c.name}</div>
                        <div className="text-[10px] text-[#8e9199]">{c.role}</div>
                        <a
                          href={`tel:${c.phone}`}
                          className="font-mono text-[#c81e1e] font-semibold hover:underline inline-flex items-center gap-1.5 mt-1.5 text-xs"
                        >
                          <Phone className="w-3 h-3" />
                          <span>{c.formattedPhone}</span>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>

                {w.note && (
                  <p className="text-[11px] text-[#8e9199] italic leading-tight pt-1">
                    {w.note}
                  </p>
                )}
              </div>

              <div className="pt-4 border-t border-[#f0f1f3] flex items-center justify-between">
                <button
                  onClick={() => onOpenQuoteModal(`Užklausa padaliniui: ${w.title}`)}
                  className="btn-primary text-xs !min-h-[38px] !py-2"
                >
                  <span>Užsakyti vizitą</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Company Requisites & Direct Channels */}
        <div className="bg-white border border-[#e7e8eb] rounded p-8 sm:p-12 shadow-subtle">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#8e9199] block">
                ĮMONĖS REKVIZITAI
              </span>
              <div className="font-display text-lg font-semibold text-[#111215]">
                {COMPANY_INFO.name}
              </div>
              <div className="text-xs text-[#64676f] space-y-1 font-mono">
                <div>Įmonės kodas: {COMPANY_INFO.code}</div>
                <div>PVM mokėtojo kodas: {COMPANY_INFO.vatCode}</div>
                <div>Buveinė: {COMPANY_INFO.addressKaunas}</div>
              </div>
            </div>

            <div className="space-y-2">
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#8e9199] block">
                ELEKTRONINIS RYŠYS
              </span>
              <div className="text-xs text-[#64676f] space-y-2">
                <div>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="font-medium text-[#111215] hover:text-[#c81e1e] flex items-center gap-1.5"
                  >
                    <Mail className="w-4 h-4 text-[#8e9199]" />
                    <span>{COMPANY_INFO.email}</span>
                  </a>
                </div>
                <div>
                  <a
                    href={COMPANY_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-[#16a34a] hover:underline flex items-center gap-1.5"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp: {COMPANY_INFO.whatsappPhone}</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#8e9199] block">
                BENDROJI LINIJA
              </span>
              <div className="font-display text-2xl font-light text-[#111215]">
                {COMPANY_INFO.generalPhone}
              </div>
              <p className="text-xs text-[#8e9199]">
                Skambučiai priimami I–V 08:00 – 18:00
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
