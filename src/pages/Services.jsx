import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { servicesData } from '../data/servicesData';
import { useUI } from '../context/UIContext';

export function Services() {
  const { openQuoteModal } = useUI();

  return (
    <>
      <Helmet>
        <title>Premium Services | Seafoam Interiors - Turnkey Solutions</title>
        <meta name="description" content="Explore our 8 high-end interior solutions: Residential design, custom modular kitchens, double-height luxury villas, executive office lounges, and turnkey execution." />
      </Helmet>

      {/* Hero Banner */}
      <section className="relative h-[250px] sm:h-[350px] bg-primary flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-primary/75 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80')` }}
        />
        <div className="relative z-20 text-center text-white px-6 mt-12">
          <span className="text-[0.65rem] font-bold text-gold uppercase tracking-[0.3em] block mb-2">Our Craftsmanship</span>
          <h1 className="font-serif text-3xl sm:text-5xl font-light tracking-wide">Bespoke Design Services</h1>
        </div>
      </section>

      {/* Detailed Services list mapping */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto bg-white space-y-32">
        {servicesData.map((service, index) => {
          const isEven = index % 2 === 0;
          return (
            <div 
              key={service.id} 
              id={service.id}
              className={`flex flex-col lg:flex-row items-center gap-16 ${
                isEven ? '' : 'lg:flex-row-reverse'
              }`}
            >
              
              {/* Text Area */}
              <div className="w-full lg:w-1/2">
                <span className="text-[0.65rem] font-bold text-gold uppercase tracking-[0.25em] block mb-2 font-sans">
                  Service {index + 1} &bull; Turnkey Execution
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-primary font-light mb-4">
                  {service.title}
                </h2>
                <p className="text-[0.8rem] text-gold uppercase tracking-[0.15em] font-semibold mb-6 block font-sans">
                  {service.tagline}
                </p>
                <p className="text-sm sm:text-base text-primary/70 font-light leading-relaxed mb-8 font-sans">
                  {service.fullDesc}
                </p>

                {/* Benefits */}
                <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-4 font-sans">Key Features & Value</h4>
                <ul className="space-y-3 mb-8 font-sans">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start space-x-3 text-xs sm:text-sm text-primary/75 font-light">
                      <div className="w-5 h-5 rounded-full bg-seafoam text-gold flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check size={11} className="stroke-[3]" />
                      </div>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={openQuoteModal}
                  className="group inline-flex items-center space-x-3 text-xs uppercase tracking-[0.2em] font-bold text-gold border-b border-gold/30 pb-2 hover:border-primary hover:text-primary transition-all font-sans"
                >
                  <span>Book Free Consultation</span>
                  <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Gallery / Image Area */}
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="relative h-[300px] sm:h-[380px] rounded-sm overflow-hidden shadow-md border border-primary/5">
                  <img
                    src={service.heroImage}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Secondary Gallery Grid */}
                <div className="grid grid-cols-3 gap-4">
                  {service.gallery.map((img, idx) => (
                    <div key={idx} className="h-[80px] sm:h-[120px] rounded-sm overflow-hidden border border-primary/5 shadow-sm">
                      <img
                        src={img}
                        alt={`${service.title} render ${idx + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </div>

            </div>
          );
        })}
      </section>
    </>
  );
}
export default Services;
