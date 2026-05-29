import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, Eye, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { portfolioData, portfolioCategories } from '../data/portfolioData';

export function Portfolio() {
  const [selectedCat, setSelectedCat] = useState("All");
  const [compareId, setCompareId] = useState(null);
  const [lightboxImg, setLightboxImg] = useState(null);

  const filteredProjects = selectedCat === "All"
    ? portfolioData
    : portfolioData.filter((p) => p.category === selectedCat);

  return (
    <>
      <Helmet>
        <title>Portfolio | Seafoam Interiors - Timeless Masterpieces</title>
        <meta name="description" content="View our curated portfolio of residential living lounges, velvet sanctuary bedrooms, German-engineered kitchens, and luxury office duplexes in Hyderabad." />
      </Helmet>

      {/* Hero Banner */}
      <section className="relative h-[250px] sm:h-[350px] bg-primary flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-primary/75 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80')` }}
        />
        <div className="relative z-20 text-center text-white px-6 mt-12">
          <span className="text-[0.65rem] font-bold text-gold uppercase tracking-[0.3em] block mb-2">Our Masterpieces</span>
          <h1 className="font-serif text-3xl sm:text-5xl font-light tracking-wide">Signature Project Gallery</h1>
        </div>
      </section>

      {/* Main Portfolio Grid */}
      <section className="py-24 px-6 md:px-12 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto">
          
          <SectionHeader
            title="Spatially Engineered Masterpieces"
            subtitle="Signature Creations"
            italicWord="Masterpieces"
          />

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 max-w-4xl mx-auto mb-16">
            {portfolioCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCat(cat);
                  setCompareId(null);
                }}
                className={`px-5 py-2.5 text-xs font-semibold uppercase tracking-widest border transition-all duration-300 rounded-sm focus:outline-none font-sans ${
                  selectedCat === cat
                    ? "bg-primary text-white border-primary"
                    : "bg-transparent text-primary/75 border-primary/10 hover:border-gold hover:text-gold"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid Layout */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px]"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => {
                const isComparing = compareId === project.id;
                return (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    key={project.id}
                    className="group bg-white border border-primary/5 rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                  >
                    
                    {/* Media Frame */}
                    <div className="relative h-[260px] sm:h-[300px] overflow-hidden">
                      {!isComparing ? (
                        <>
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                            <button
                              onClick={() => setLightboxImg(project.image)}
                              className="w-10 h-10 rounded-full bg-white text-primary hover:bg-gold hover:text-white flex items-center justify-center shadow transition-colors"
                              aria-label="View large photo"
                            >
                              <Eye size={18} />
                            </button>
                            <button
                              onClick={() => setCompareId(project.id)}
                              className="bg-gold text-primary text-[0.6rem] font-bold tracking-widest px-3 py-2 uppercase rounded-sm hover:bg-white transition-colors shadow-md"
                            >
                              Before/After Compare
                            </button>
                          </div>
                        </>
                      ) : (
                        <div className="relative w-full h-full">
                          <BeforeAfterSlider
                            beforeImage={project.beforeImg}
                            afterImage={project.image}
                            title={project.title}
                          />
                          <button
                            onClick={() => setCompareId(null)}
                            className="absolute top-4 right-4 bg-primary text-white hover:bg-gold text-[0.55rem] font-bold tracking-wider p-2 rounded-full z-30 shadow-md transition-colors"
                            aria-label="Close before after mode"
                          >
                            <X size={12} />
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Text Details */}
                    <div className="p-6 flex-grow flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-[0.6rem] font-bold tracking-[0.2em] text-gold uppercase font-sans">
                            {project.category}
                          </span>
                          <span className="text-[0.65rem] font-medium text-primary/50 flex items-center font-sans">
                            <MapPin size={10} className="mr-1 text-gold" />
                            {project.location}
                          </span>
                        </div>
                        <h3 className="font-serif text-xl sm:text-2xl font-light text-primary mb-3">
                          {project.title}
                        </h3>
                        <p className="text-xs text-primary/65 font-light leading-relaxed line-clamp-3 font-sans">
                          {project.desc}
                        </p>
                      </div>

                      <div className="mt-6 pt-4 border-t border-primary/5 flex justify-between items-center">
                        <Link
                          to={`/portfolio/${project.id}`}
                          className="text-[0.65rem] font-bold tracking-widest text-primary hover:text-gold uppercase flex items-center space-x-1 transition-colors font-sans"
                        >
                          <span>View Challenges</span>
                          <ArrowRight size={10} />
                        </Link>
                      </div>
                    </div>

                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxImg && (
        <div className="fixed inset-0 z-[1000] bg-primary/95 backdrop-blur-md flex items-center justify-center p-4">
          <button
            onClick={() => setLightboxImg(null)}
            className="absolute top-6 right-6 text-white hover:text-gold transition-colors p-2"
            aria-label="Close Lightbox"
          >
            <X size={32} />
          </button>
          <img
            src={lightboxImg}
            alt="Large showcase rendering"
            className="max-w-full max-h-[85vh] object-contain rounded-sm border border-gold/20"
          />
        </div>
      )}
    </>
  );
}
export default Portfolio;
