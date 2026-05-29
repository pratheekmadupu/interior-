import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Star, ShieldAlert, Award, UserCheck, MessageSquare } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { testimonialsData } from '../data/testimonialsData';

export function Testimonials() {
  return (
    <>
      <Helmet>
        <title>Client Reviews | Seafoam Interiors - Verified Google Ratings</title>
        <meta name="description" content="Read reviews from real homeowners and commercial managers about Seafoam Interiors' turnkey designs, schedule discipline, and custom teakwood woodworks." />
      </Helmet>

      {/* Hero Banner */}
      <section className="relative h-[250px] sm:h-[350px] bg-primary flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-primary/75 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80')` }}
        />
        <div className="relative z-20 text-center text-white px-6 mt-12">
          <span className="text-[0.65rem] font-bold text-gold uppercase tracking-[0.3em] block mb-2">Our Reputation</span>
          <h1 className="font-serif text-3xl sm:text-5xl font-light tracking-wide">Client Testimonials</h1>
        </div>
      </section>

      {/* Wall of Reviews */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
          
          {/* Left Summary Panel */}
          <div className="lg:col-span-1 bg-[#FAF7F2] p-8 border border-primary/5 rounded-sm shadow-sm space-y-6 lg:sticky lg:top-28">
            <h4 className="font-serif text-xl font-medium text-primary">Reputation Metrics</h4>
            
            <div className="flex items-center space-x-3 pb-6 border-b border-primary/5">
              <span className="font-serif text-5xl text-gold font-bold">4.9★</span>
              <div className="font-sans">
                <span className="text-xs font-bold text-primary/80 uppercase block tracking-wider">Google Review Rating</span>
                <span className="text-[0.65rem] text-primary/45 tracking-widest uppercase block mt-0.5">29+ Genuine Submissions</span>
              </div>
            </div>

            <div className="space-y-4 font-sans text-xs sm:text-sm text-primary/70">
              <div className="flex items-center space-x-2">
                <Award size={16} className="text-gold flex-shrink-0" />
                <span>Award-winning premium modular kitchen spaces.</span>
              </div>
              <div className="flex items-center space-x-2">
                <UserCheck size={16} className="text-gold flex-shrink-0" />
                <span>Turnkey design execution with transparent itemized BOQ lists.</span>
              </div>
              <div className="flex items-center space-x-2">
                <MessageSquare size={16} className="text-gold flex-shrink-0" />
                <span>Responsive direct-dial project operations manager feedback.</span>
              </div>
            </div>
          </div>

          {/* Right Cards List */}
          <div className="lg:col-span-2 space-y-8">
            <SectionHeader
              title="Verified Google Reviews & Feedback"
              subtitle="Voices of Trust"
              italicWord="Feedback"
              center={false}
            />

            <div className="space-y-6">
              {testimonialsData.map((review) => (
                <div
                  key={review.id}
                  className="bg-white border border-primary/5 rounded-sm p-8 sm:p-10 shadow-sm relative flex flex-col justify-between min-h-[220px] hover:shadow-md transition-shadow"
                >
                  <span className="absolute right-8 top-6 font-serif text-8xl text-gold/10 select-none pointer-events-none">
                    &ldquo;
                  </span>

                  <div>
                    {/* Rating stars */}
                    <div className="flex text-gold mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} size={14} fill="currentColor" className="mr-0.5" />
                      ))}
                    </div>

                    <p className="font-serif italic text-base sm:text-lg text-primary/85 leading-relaxed font-light mb-6">
                      &ldquo;{review.text}&rdquo;
                    </p>
                  </div>

                  {/* Reviewer Meta */}
                  <div className="flex items-center space-x-4 border-t border-primary/5 pt-6 font-sans">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-11 h-11 rounded-full object-cover border border-gold/20 shadow"
                    />
                    <div>
                      <h5 className="text-xs font-bold tracking-wider text-primary">{review.name}</h5>
                      <span className="text-[0.6rem] tracking-widest text-primary/45 uppercase block mt-0.5">
                        {review.role} &bull; {review.location}
                      </span>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
export default Testimonials;
