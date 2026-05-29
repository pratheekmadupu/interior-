import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, MapPin, Quote, CheckCircle2 } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { portfolioData } from '../data/portfolioData';

export function ProjectDetails() {
  const { projectId } = useParams();
  const project = portfolioData.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="py-32 px-6 text-center">
        <h2 className="font-serif text-3xl mb-4">Project Not Found</h2>
        <Link to="/portfolio" className="text-gold uppercase tracking-wider font-semibold hover:underline">
          Return to Portfolio
        </Link>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{`${project.title} - Projects Walkthrough | Seafoam Interiors`}</title>
        <meta name="description" content={`Read about our bespoke layout challenges, material specifications, and customized solutions executed for ${project.title} in ${project.location}.`} />
      </Helmet>

      {/* Large Hero Banner */}
      <section className="relative h-[450px] sm:h-[550px] bg-primary flex items-end justify-start overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent z-10" />
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover scale-105"
        />

        <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 pb-16 w-full text-white">
          <Link
            to="/portfolio"
            className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] text-gold/80 hover:text-gold mb-6 border-b border-gold/20 pb-1"
          >
            <ArrowLeft size={12} />
            <span>Back to Portfolio</span>
          </Link>

          <span className="text-[0.65rem] font-bold text-gold uppercase tracking-[0.25em] block mb-2 font-sans">
            {project.category} &bull; Project Case Walkthrough
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl font-light tracking-wide max-w-4xl mb-4">
            {project.title}
          </h1>

          <div className="flex items-center text-xs sm:text-sm text-white/70 font-sans tracking-wide">
            <MapPin size={14} className="mr-1.5 text-gold" />
            <span>{project.location}</span>
          </div>
        </div>
      </section>

      {/* Project Case Details */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          {/* Left Details column */}
          <div className="lg:col-span-2 space-y-12">
            <div>
              <SectionHeader
                title="Spatially Engineered Masterpiece Detail"
                subtitle="Overview"
                italicWord="Detail"
                center={false}
              />
              <p className="text-sm sm:text-base text-primary/70 font-light leading-relaxed font-sans">
                {project.desc}
              </p>
            </div>

            {/* Challenges & Solutions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6">
              
              {/* Challenges */}
              <div className="bg-[#FAF7F2] p-8 border border-primary/5 rounded-sm shadow-sm relative">
                <span className="text-[0.65rem] font-bold text-gold uppercase tracking-widest block mb-3 font-sans">
                  The Spatial Challenge
                </span>
                <p className="text-xs sm:text-sm text-primary/75 font-light leading-relaxed font-sans">
                  {project.challenge}
                </p>
              </div>

              {/* Solutions */}
              <div className="bg-primary text-white p-8 border border-white/5 rounded-sm shadow-md relative">
                <span className="text-[0.65rem] font-bold text-gold uppercase tracking-widest block mb-3 font-sans">
                  Bespoke Solution Executed
                </span>
                <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed font-sans">
                  {project.solution}
                </p>
              </div>

            </div>

            {/* Before After Swipe Comparison */}
            <div className="pt-8">
              <h3 className="font-serif text-2xl font-light text-primary mb-6">Before & After Slider</h3>
              <BeforeAfterSlider
                beforeImage={project.beforeImg}
                afterImage={project.image}
                title={project.title}
              />
            </div>
          </div>

          {/* Right Summary Panel */}
          <div className="lg:col-span-1 space-y-8 lg:sticky lg:top-28 h-fit">
            
            {/* Meta facts */}
            <div className="bg-[#FAF7F2] border border-primary/5 p-8 rounded-sm shadow-sm">
              <h4 className="font-serif text-xl font-medium text-primary mb-6 border-b border-primary/5 pb-3">Project Metadata</h4>
              
              <div className="space-y-4 font-sans text-xs">
                <div className="flex justify-between pb-3 border-b border-primary/5">
                  <span className="font-semibold tracking-wider text-primary/45 uppercase">Project Scope</span>
                  <span className="font-bold text-primary/80">{project.category}</span>
                </div>
                <div className="flex justify-between pb-3 border-b border-primary/5">
                  <span className="font-semibold tracking-wider text-primary/45 uppercase">Location Zone</span>
                  <span className="font-bold text-primary/80">{project.location}</span>
                </div>
                <div className="flex justify-between pb-3 border-b border-primary/5">
                  <span className="font-semibold tracking-wider text-primary/45 uppercase">Turnkey Execution</span>
                  <span className="font-bold text-primary/80">45 Days Guaranteed</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold tracking-wider text-primary/45 uppercase">Core Materials</span>
                  <span className="font-bold text-gold">Premium Teak & Quartz</span>
                </div>
              </div>
            </div>

            {/* Testimonial Widget */}
            {project.clientTestimonial && (
              <div className="bg-primary text-white border border-white/5 p-8 rounded-sm shadow-lg relative overflow-hidden">
                <Quote className="absolute right-6 top-6 text-white/5 w-16 h-16 select-none pointer-events-none" />
                
                <h4 className="font-serif text-lg font-light text-gold uppercase tracking-widest mb-6">Client Experience</h4>
                
                <p className="font-serif italic text-sm text-white/80 leading-relaxed font-light mb-6">
                  &ldquo;{project.clientTestimonial.text}&rdquo;
                </p>

                <div className="flex items-center space-x-3 pt-4 border-t border-white/5 font-sans">
                  <div className="w-9 h-9 rounded-full bg-gold/10 text-gold flex items-center justify-center font-bold text-xs uppercase shadow">
                    {project.clientTestimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h5 className="text-xs font-bold tracking-wider text-white">{project.clientTestimonial.name}</h5>
                    <span className="text-[0.6rem] tracking-widest text-white/40 uppercase block mt-0.5">
                      {project.clientTestimonial.role}
                    </span>
                  </div>
                </div>
              </div>
            )}

          </div>

        </div>
      </section>

      {/* Project Gallery Images */}
      <section className="py-24 bg-[#FAF7F2] border-t border-primary/5 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h3 className="font-serif text-3xl font-light text-primary text-center mb-12">Bespoke Detail Perspective Gallery</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {project.gallery.map((img, idx) => (
              <div key={idx} className="h-[250px] sm:h-[300px] rounded-sm overflow-hidden border border-primary/5 shadow-md">
                <img
                  src={img}
                  alt={`${project.title} render angle ${idx + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
export default ProjectDetails;
