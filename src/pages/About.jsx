import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Award, Eye, Shield, Users, CheckCircle2 } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { teamData } from '../data/teamData';

export function About() {
  return (
    <>
      <Helmet>
        <title>About Us | Seafoam Interiors - Luxury Design Hyderabad</title>
        <meta name="description" content="Learn about Seafoam Interiors' mission, core design values, professional architects, and achievements in delivering premium turnkey space solutions." />
      </Helmet>

      {/* Hero Banner */}
      <section className="relative h-[250px] sm:h-[350px] bg-primary flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-primary/75 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80')` }}
        />
        <div className="relative z-20 text-center text-white px-6 mt-12">
          <span className="text-[0.65rem] font-bold text-gold uppercase tracking-[0.3em] block mb-2">Since 2021</span>
          <h1 className="font-serif text-3xl sm:text-5xl font-light tracking-wide">Our Story & Mission</h1>
        </div>
      </section>

      {/* Story Content */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader
              title="Transforming Houses Into Sculpted Homes"
              subtitle="The Seafoam Story"
              italicWord="Homes"
              center={false}
            />
            <p className="text-sm sm:text-base text-primary/70 font-light leading-relaxed mb-6 font-sans">
              Founded in Hyderabad, SEAFOAM INTERIORS was created with a clear aspiration: to replace standard mass-produced woodwork layout contracts with fully custom, artistic, and highly functional luxury spatial design solutions.
            </p>
            <p className="text-sm sm:text-base text-primary/70 font-light leading-relaxed mb-6 font-sans">
              We operate as a high-end architectural and turkey solutions agency, combining German modular engineering precision, handpicked Italian marble styling, and custom woodwork coordinates under one unified workspace.
            </p>
            <p className="text-sm sm:text-base text-primary/70 font-light leading-relaxed font-sans">
              With a perfect 4.9★ rating on Google Reviews, we pride ourselves on rigorous operational standards, keeping milestones clear and material quality strictly checked.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-seafoam p-8 rounded-sm text-center border border-primary/5">
              <span className="font-serif text-5xl text-gold font-light block mb-2">150+</span>
              <span className="text-xs uppercase tracking-wider text-primary/50 font-bold font-sans">Completed Duplexes & Villas</span>
            </div>
            <div className="bg-primary text-white p-8 rounded-sm text-center border border-white/5">
              <span className="font-serif text-5xl text-gold font-light block mb-2">10Y</span>
              <span className="text-xs uppercase tracking-wider text-white/50 font-bold font-sans">Core Material Warranty</span>
            </div>
            <div className="bg-white border border-primary/5 p-8 rounded-sm text-center shadow-sm">
              <span className="font-serif text-5xl text-gold font-light block mb-2">29+</span>
              <span className="text-xs uppercase tracking-wider text-primary/50 font-bold font-sans">5★ Verified Client Reviews</span>
            </div>
            <div className="bg-seafoam-light border border-primary/5 p-8 rounded-sm text-center shadow-sm">
              <span className="font-serif text-5xl text-primary font-light block mb-2">40D</span>
              <span className="text-xs uppercase tracking-wider text-primary/50 font-bold font-sans">Turnkey Timeline Guarantee</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, and Values */}
      <section className="py-24 bg-seafoam-light border-y border-primary/5 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Mission */}
          <div className="bg-white border border-primary/5 rounded-sm p-8 shadow-sm">
            <div className="w-10 h-10 rounded-full bg-gold/10 text-gold flex items-center justify-center mb-6">
              <Award size={18} />
            </div>
            <h3 className="font-serif text-xl font-semibold text-primary mb-3">Our Mission</h3>
            <p className="text-xs sm:text-sm text-primary/65 font-light leading-relaxed font-sans">
              To deliver zero-compromise, bespoke interior layouts utilizing structural moisture-proof materials and precise engineering that reflect our clients' unique personalities and practical day-to-day requirements.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white border border-primary/5 rounded-sm p-8 shadow-sm">
            <div className="w-10 h-10 rounded-full bg-gold/10 text-gold flex items-center justify-center mb-6">
              <Eye size={18} />
            </div>
            <h3 className="font-serif text-xl font-semibold text-primary mb-3">Our Vision</h3>
            <p className="text-xs sm:text-sm text-primary/65 font-light leading-relaxed font-sans">
              To establish SEAFOAM INTERIORS as Hyderabad's most trusted luxury turnkey firm, synonymous with modern quiet elegance, transparency, and strict on-schedule keys handover.
            </p>
          </div>

          {/* Values */}
          <div className="bg-white border border-primary/5 rounded-sm p-8 shadow-sm">
            <div className="w-10 h-10 rounded-full bg-gold/10 text-gold flex items-center justify-center mb-6">
              <Shield size={18} />
            </div>
            <h3 className="font-serif text-xl font-semibold text-primary mb-3">Core Values</h3>
            <p className="text-xs sm:text-sm text-primary/65 font-light leading-relaxed font-sans">
              Absolute itemized BOQ lists, third-party grade certification checking, proactive 3-stage visual inspection site audits, and complete white-glove dust sanitization on final handover day.
            </p>
          </div>

        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto bg-white">
        <SectionHeader
          title="The Masters Behind The Architecture"
          subtitle="Our Creative Team"
          italicWord="Architecture"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamData.map((member) => (
            <div key={member.id} className="bg-white border border-primary/5 rounded-sm overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="h-[320px] overflow-hidden relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="p-6">
                <h4 className="font-serif text-xl font-semibold text-primary">{member.name}</h4>
                <span className="text-[0.65rem] font-bold text-gold uppercase tracking-wider block mt-1 mb-3 font-sans">
                  {member.role}
                </span>
                <p className="text-xs text-primary/60 font-light leading-relaxed font-sans">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
export default About;
