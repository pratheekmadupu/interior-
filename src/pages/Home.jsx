import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Star, ChevronRight, CheckCircle, Compass, Layers, Leaf, Hammer, Phone } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { SectionHeader } from '../components/SectionHeader';
import { portfolioData } from '../data/portfolioData';
import { servicesData } from '../data/servicesData';
import { testimonialsData } from '../data/testimonialsData';
import { useUI } from '../context/UIContext';

export function Home() {
  const navigate = useNavigate();
  const { openQuoteModal } = useUI();
  const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <>
      <Helmet>
        <title>Seafoam Interiors | Luxury Interior Design Hyderabad</title>
        <meta name="description" content="Award-winning luxury interior design & turnkey solutions in Hyderabad. Transform your residential and commercial spaces into timeless experiences." />
        
        {/* Schema Markup for Local Business */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Seafoam Interiors",
              "image": "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
              "@id": "https://seafoaminteriors.com",
              "url": "https://seafoaminteriors.com",
              "telephone": "+918074690803",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "H.No.22-773, Plot No.773, Road No.5, Vinayaka Hills Phase-3, Almasguda",
                "addressLocality": "Hyderabad",
                "addressRegion": "Telangana",
                "postalCode": "500112",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "17.3182",
                "longitude": "78.5492"
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday"
                ],
                "opens": "09:00",
                "closes": "21:00"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "29"
              }
            }
          `}
        </script>
      </Helmet>

      {/* 1. Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary">
        {/* Background video overlay with dark mask */}
        <div className="absolute inset-0 bg-primary/85 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50 scale-105"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1920&q=80')`,
          }}
        />

        <div className="relative z-20 max-w-5xl mx-auto px-6 md:px-12 text-center text-white py-24 flex flex-col items-center">
          {/* Rating Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full mb-8 backdrop-blur-md"
          >
            <div className="flex text-gold">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={11} fill="currentColor" className="mr-0.5" />
              ))}
            </div>
            <span className="text-[0.65rem] tracking-[0.25em] font-semibold text-seafoam uppercase font-sans">
              4.9★ RATING &bull; 29+ GENUINE REVIEWS
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-wider font-light text-white leading-tight mb-6"
          >
            Designing Spaces <br />
            <span className="italic text-gold font-normal">That Inspire Living</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-sans text-xs sm:text-sm md:text-base font-light text-white/70 max-w-2xl mx-auto mb-12 tracking-[0.15em] uppercase leading-relaxed"
          >
            Bespoke Luxury Interior Architecture Solutions for Penthouses, duplex villas, and executive office spaces.
          </motion.p>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <button
              onClick={openQuoteModal}
              className="group relative px-8 py-4 bg-gold hover:bg-white text-primary font-bold text-xs uppercase tracking-[0.2em] transition-all duration-300 rounded-sm shadow-xl hover:shadow-gold/20 flex items-center space-x-2"
            >
              <span>Book Free Consultation</span>
              <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
            </button>
            <Link
              to="/portfolio"
              className="px-8 py-4 border border-white/20 hover:border-gold text-white hover:text-gold font-semibold text-xs uppercase tracking-[0.2em] transition-all duration-300 rounded-sm hover:bg-white/5"
            >
              View Portfolio
            </Link>
          </motion.div>
        </div>

        {/* Scroll Hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 pointer-events-none">
          <span className="text-[0.6rem] tracking-[0.4em] text-white/40 uppercase font-medium">Scroll</span>
          <div className="w-[1.5px] h-10 bg-white/20 relative overflow-hidden rounded-full">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gold animate-scroll-hint" />
          </div>
        </div>
      </section>

      {/* 2. Stats Bar Section */}
      <section ref={statsRef} className="bg-white py-16 px-6 md:px-12 border-b border-primary/5">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-5 gap-8 text-center">
          {[
            { value: 150, label: "Projects Completed", suffix: "+" },
            { value: 100, label: "Happy Clients", suffix: "+" },
            { value: 300, label: "Design Concepts", suffix: "+" },
            { value: 99, label: "Satisfaction Rate", suffix: "%" },
            { value: 5, label: "Years Experience", suffix: "+" }
          ].map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="flex items-baseline font-serif text-4xl sm:text-5xl md:text-6xl text-primary font-light justify-center">
                {statsInView ? (
                  <CountUp start={0} end={stat.value} duration={2.5} />
                ) : (
                  <span>0</span>
                )}
                <span className="text-gold ml-0.5 text-xl sm:text-2xl">{stat.suffix}</span>
              </div>
              <div className="mt-2 text-[0.65rem] sm:text-xs uppercase tracking-[0.25em] text-primary/50 font-semibold font-sans">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. About Preview Section */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[380px] sm:h-[480px] rounded-sm overflow-hidden shadow-lg border border-primary/5 group">
            <img
              src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=80"
              alt="Luxury Interior Layout"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <span className="text-[0.6rem] tracking-[0.3em] uppercase text-gold font-semibold block mb-1">Hyderabad Showcase</span>
              <h3 className="font-serif text-2xl font-light">Timeless Design Values</h3>
            </div>
          </div>

          <div>
            <SectionHeader
              title="Crafting Spaces That Tell Your Story"
              subtitle="About SEAFOAM INTERIORS"
              italicWord="Story"
              center={false}
            />
            <p className="text-sm md:text-base text-primary/70 font-light leading-relaxed mb-6 font-sans">
              At SEAFOAM INTERIORS, we create elegant, functional, and timeless spaces that reflect your lifestyle and aspirations. From modern residences to luxury commercial projects, our team delivers exceptional design solutions with attention to every detail.
            </p>
            <p className="text-sm md:text-base text-primary/70 font-light leading-relaxed mb-8 font-sans">
              We operate with absolute material transparency and strict timeline planning, turning physical renovations into a stress-free experience.
            </p>
            <Link
              to="/about"
              className="group inline-flex items-center space-x-3 text-xs uppercase tracking-[0.2em] font-semibold text-gold border-b border-gold/30 pb-2 hover:border-primary hover:text-primary transition-all"
            >
              <span>Explore Our Story</span>
              <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Services Grid Preview */}
      <section className="py-24 bg-seafoam-light border-y border-primary/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionHeader
            title="Premium Modular Design Services"
            subtitle="Bespoke Offerings"
            italicWord="Services"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesData.slice(0, 4).map((service) => (
              <div
                key={service.id}
                className="bg-white border border-primary/5 rounded-sm overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <div>
                  <div className="h-[180px] overflow-hidden">
                    <img
                      src={service.heroImage}
                      alt={service.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-lg font-semibold text-primary mb-3">
                      {service.title}
                    </h3>
                    <p className="text-xs text-primary/65 font-light leading-relaxed font-sans line-clamp-3">
                      {service.shortDesc}
                    </p>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <Link
                    to="/services"
                    className="text-[0.65rem] font-bold tracking-widest text-gold hover:text-primary uppercase flex items-center space-x-1 transition-colors"
                  >
                    <span>Learn More</span>
                    <ChevronRight size={12} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="px-8 py-3.5 bg-primary hover:bg-gold text-white hover:text-primary text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 rounded-sm shadow"
            >
              View All 12 Services
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Featured Portfolio Preview */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <SectionHeader
          title="Bespoke Residential Work"
          subtitle="Signature Projects"
          italicWord="Projects"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {portfolioData.slice(0, 3).map((project) => (
            <div key={project.id} className="group bg-white border border-primary/5 rounded-sm overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="relative h-[250px] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-seafoam text-primary text-[0.65rem] font-bold tracking-widest px-2.5 py-1 uppercase rounded-sm font-sans shadow">
                  {project.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold text-primary mb-2 transition-colors group-hover:text-gold">
                  {project.title}
                </h3>
                <span className="text-[0.65rem] font-medium text-primary/50 block mb-3 font-sans uppercase tracking-wider">
                  {project.location}
                </span>
                <p className="text-xs text-primary/60 font-light leading-relaxed line-clamp-3 mb-6 font-sans">
                  {project.desc}
                </p>
                <Link
                  to={`/portfolio/${project.id}`}
                  className="text-[0.65rem] font-bold tracking-widest text-primary hover:text-gold uppercase flex items-center space-x-1 transition-colors font-sans border-b border-primary/10 pb-1 w-fit"
                >
                  <span>Explore Details</span>
                  <ArrowRight size={10} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Design Process Timeline */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionHeader
            title="Our Structured Project Journey"
            subtitle="Execution Method"
            italicWord="Journey"
            dark={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {[
              { num: "01", title: "Consultation", desc: "Lifestyle audit mapping aesthetics and budget boundaries.", icon: Star },
              { num: "02", title: "Site Scanning", desc: "Scientific laser mapping and plumbing route audit.", icon: Compass },
              { num: "03", title: "3D Design Plan", desc: "Bespoke photorealistic walkthrough visual mockups.", icon: Layers },
              { num: "04", title: "Material Select", desc: "Guided premium wood, marble, and fitting sessions.", icon: Leaf },
              { num: "05", title: "Site Execution", desc: "Strictly tracked structural false ceilings & carpentry.", icon: Hammer },
              { num: "06", title: "Handover", desc: "Deep dust cleaning and celebratory keys handover.", icon: CheckCircle }
            ].map((step, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-sm p-6 flex flex-col justify-between min-h-[200px] shadow relative hover:bg-white/10 transition-colors">
                <div className="text-[2.5rem] font-serif text-white/20 select-none absolute top-4 right-4">
                  {step.num}
                </div>
                <div>
                  <div className="w-9 h-9 rounded-full bg-gold/10 text-gold flex items-center justify-center mb-4">
                    <step.icon size={16} />
                  </div>
                  <h4 className="font-serif text-lg font-medium text-white mb-2">{step.title}</h4>
                </div>
                <p className="text-xs text-white/60 font-light leading-relaxed font-sans">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Contact CTA */}
      <section className="py-24 bg-white text-center border-t border-primary/5">
        <div className="max-w-3xl mx-auto px-6">
          <span className="text-[0.65rem] font-bold text-gold uppercase tracking-[0.3em] block mb-3 font-sans">
            Ready to redesign?
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-primary leading-tight mb-6">
            Let&apos;s Co-Create Your <br />
            <span className="italic text-gold font-normal">Timeless Living Space</span>
          </h2>
          <p className="text-xs sm:text-sm text-primary/60 font-light leading-relaxed mb-10 max-w-lg mx-auto font-sans">
            Book a complimentary spatial design audit with our Hyderabad principal architects and coordinators.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button
              onClick={openQuoteModal}
              className="px-8 py-4 bg-primary hover:bg-gold text-white hover:text-primary text-xs uppercase tracking-[0.2em] font-bold transition-all duration-300 rounded-sm shadow-lg w-full sm:w-auto"
            >
              Schedule Free Audit
            </button>
            <a
              href="tel:+918074690803"
              className="px-8 py-4 border border-primary/20 hover:border-gold text-primary hover:text-gold text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 rounded-sm w-full sm:w-auto flex items-center justify-center space-x-2"
            >
              <Phone size={14} />
              <span>Call +91 80746 90803</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
export default Home;
