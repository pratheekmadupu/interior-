import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { faqData } from '../data/faqData';

export function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <>
      <Helmet>
        <title>FAQ | Seafoam Interiors - Common Design Queries</title>
        <meta name="description" content="Find immediate answers about our 45-day turnkey schedules, customized false ceiling designs, materials audit checks, and warranties." />
      </Helmet>

      {/* Hero Banner */}
      <section className="relative h-[250px] sm:h-[350px] bg-primary flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-primary/75 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80')` }}
        />
        <div className="relative z-20 text-center text-white px-6 mt-12">
          <span className="text-[0.65rem] font-bold text-gold uppercase tracking-[0.3em] block mb-2">Help Center</span>
          <h1 className="font-serif text-3xl sm:text-5xl font-light tracking-wide">Common Inquiries</h1>
        </div>
      </section>

      {/* Accordion FAQ Grid */}
      <section className="py-24 px-6 md:px-12 max-w-4xl mx-auto bg-white">
        <SectionHeader
          title="Frequently Asked Space Queries"
          subtitle="Common Inquiries"
          italicWord="Queries"
        />

        <div className="space-y-4">
          {faqData.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`bg-white border border-primary/5 rounded-sm overflow-hidden transition-all duration-300 ${
                  isOpen ? "shadow-md ring-1 ring-gold/20" : "shadow-sm hover:shadow-md"
                }`}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full flex justify-between items-center p-6 text-left focus:outline-none transition-colors"
                >
                  <span className="font-serif text-lg text-primary font-semibold tracking-wide">
                    {faq.q}
                  </span>
                  <span className="text-gold flex-shrink-0 ml-4">
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </span>
                </button>

                <div
                  className={`transition-all duration-350 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-[300px] border-t border-primary/5 p-6 bg-seafoam-light/40" : "max-h-0"
                  }`}
                >
                  <p className="text-xs sm:text-sm text-primary/70 font-light leading-relaxed font-sans">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Direct Contact Anchor */}
        <div className="mt-16 text-center bg-[#FAF7F2] p-8 border border-primary/5 rounded-sm shadow-sm font-sans">
          <HelpCircle className="mx-auto text-gold w-10 h-10 mb-4" />
          <h4 className="font-serif text-xl font-medium text-primary mb-2">Have custom layout questions?</h4>
          <p className="text-xs text-primary/60 font-light mb-6">
            Our principal coordinators are ready to outline customized spacing recommendations directly.
          </p>
          <a
            href="tel:+918074690803"
            className="px-6 py-2.5 bg-primary hover:bg-gold text-white hover:text-primary text-xs font-bold uppercase tracking-wider transition-colors rounded-sm inline-block"
          >
            Direct Call +91 80746 90803
          </a>
        </div>
      </section>
    </>
  );
}
export default FAQ;
