import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, MapPin, Clock, Award, Check, MessageSquare } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "Residential Villa",
    budget: "₹10 Lakh - ₹20 Lakh",
    msg: ""
  });
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate EmailJS execution delay
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        projectType: "Residential Villa",
        budget: "₹10 Lakh - ₹20 Lakh",
        msg: ""
      });
    }, 1200);
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Seafoam Interiors - Spacial Audits Hyderabad</title>
        <meta name="description" content="Reach out to Seafoam Interiors to book your complimentary 3D spatial design audit. Explore our Hyderabad design studio location, phone numbers, and working hours." />
      </Helmet>

      {/* Hero Banner */}
      <section className="relative h-[250px] sm:h-[350px] bg-primary flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-primary/75 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80')` }}
        />
        <div className="relative z-20 text-center text-white px-6 mt-12">
          <span className="text-[0.65rem] font-bold text-gold uppercase tracking-[0.3em] block mb-2">Connect With Us</span>
          <h1 className="font-serif text-3xl sm:text-5xl font-light tracking-wide">Design Consultation Studio</h1>
        </div>
      </section>

      {/* Main Form and details split */}
      <section className="py-24 px-6 md:px-12 bg-white max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left Details */}
          <div className="space-y-12">
            <div>
              <SectionHeader
                title="Let&apos;s Design Your Dream Space"
                subtitle="Book Free Consultation"
                italicWord="Dream"
                center={false}
              />
              <p className="text-sm sm:text-base text-primary/65 font-light leading-relaxed font-sans mb-8">
                Reach out to schedule a private design audit with our Hyderabad principal architects. Leave a query below or coordinate via direct dial.
              </p>
            </div>

            {/* Quick Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 font-sans">
              <div className="flex items-start space-x-3.5">
                <div className="w-10 h-10 rounded-full bg-seafoam text-gold flex items-center justify-center flex-shrink-0">
                  <Phone size={16} />
                </div>
                <div>
                  <span className="text-[0.6rem] font-bold text-primary/40 uppercase tracking-[0.15em] block mb-1">
                    Call Studio Directly
                  </span>
                  <a href="tel:+918074690803" className="text-sm font-semibold text-primary hover:text-gold transition-colors">
                    +91 80746 90803
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <div className="w-10 h-10 rounded-full bg-seafoam text-gold flex items-center justify-center flex-shrink-0">
                  <MapPin size={16} />
                </div>
                <div>
                  <span className="text-[0.6rem] font-bold text-primary/40 uppercase tracking-[0.15em] block mb-1">
                    Design Studio
                  </span>
                  <span className="text-xs text-primary/75 font-light leading-relaxed block">
                    Sri Renuka Nilayam, Shivaji Marg, Vinayaka Hills Ph-3, Almasguda, Telangana 500112
                  </span>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <div className="w-10 h-10 rounded-full bg-seafoam text-gold flex items-center justify-center flex-shrink-0">
                  <Clock size={16} />
                </div>
                <div>
                  <span className="text-[0.6rem] font-bold text-primary/40 uppercase tracking-[0.15em] block mb-1">
                    Working Hours
                  </span>
                  <span className="text-xs text-primary/75 font-light block">
                    Open Monday &ndash; Saturday<br />9:00 AM &ndash; 9:00 PM Daily
                  </span>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <div className="w-10 h-10 rounded-full bg-seafoam text-gold flex items-center justify-center flex-shrink-0">
                  <Award size={16} />
                </div>
                <div>
                  <span className="text-[0.6rem] font-bold text-primary/40 uppercase tracking-[0.15em] block mb-1">
                    Turnkey Guarantee
                  </span>
                  <span className="text-xs text-primary/75 font-light block">
                    Complete Execution &bull; 10 Year Warranty
                  </span>
                </div>
              </div>
            </div>

            {/* Static Google Maps integration */}
            <div className="w-full h-[250px] bg-slate-200 rounded-sm overflow-hidden border border-primary/5 shadow-sm relative group">
              <div 
                className="absolute inset-0 bg-cover bg-center filter grayscale contrast-125 hover:grayscale-0 transition-all duration-500" 
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80')` }} 
              />
              <div className="absolute inset-0 bg-primary/20 pointer-events-none" />
              
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
                <div className="w-14 h-14 bg-gold/25 rounded-full flex items-center justify-center animate-ping absolute" />
                <div className="w-8 h-8 rounded-full bg-gold border-2 border-white shadow-lg flex items-center justify-center relative">
                  <span className="w-2.5 h-2.5 bg-primary rounded-full" />
                </div>
              </div>

              <a
                href="https://maps.google.com/?q=H.No.22-773,Plot+No.773,Vinayaka+Hills,Almasguda,Hyderabad"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-primary/40 backdrop-blur-sm z-30 transition-all duration-300 flex items-center justify-center text-xs uppercase tracking-widest text-white font-semibold"
              >
                Open in Google Maps
              </a>
            </div>
          </div>

          {/* Right Form Card */}
          <div>
            <div className="bg-white border border-primary/5 rounded-sm p-8 sm:p-10 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gold" />
              
              <h3 className="font-serif text-3xl font-light text-primary mb-6">
                Request Design Audit
              </h3>

              {success ? (
                <div className="bg-seafoam/30 border border-seafoam/60 rounded-sm p-6 text-center animate-fadeIn font-sans">
                  <div className="w-12 h-12 rounded-full bg-gold text-white flex items-center justify-center mx-auto mb-4">
                    <Check size={20} />
                  </div>
                  <h4 className="font-serif text-2xl font-light text-primary mb-2">Message Delivered!</h4>
                  <p className="text-xs text-primary/75 leading-relaxed font-light mb-6">
                    Our principal design coordinator will connect with you within 24 hours to schedule your immersive 3D spatial audit.
                  </p>
                  <button
                    onClick={() => setSuccess(false)}
                    className="px-6 py-2 border border-primary/20 hover:border-primary text-primary text-[0.65rem] font-bold uppercase tracking-widest transition-colors rounded-sm"
                  >
                    Submit another query
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 font-sans">
                  <div>
                    <label htmlFor="name" className="text-[0.6rem] font-semibold text-primary/40 uppercase tracking-[0.2em] block mb-2">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white border border-primary/10 hover:border-gold focus:border-gold px-4 py-3 text-xs tracking-wider text-primary rounded-sm focus:outline-none transition-all duration-300"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="text-[0.6rem] font-semibold text-primary/40 uppercase tracking-[0.2em] block mb-2">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-white border border-primary/10 hover:border-gold focus:border-gold px-4 py-3 text-xs tracking-wider text-primary rounded-sm focus:outline-none transition-all duration-300"
                        placeholder="Enter email"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="text-[0.6rem] font-semibold text-primary/40 uppercase tracking-[0.2em] block mb-2">
                        Phone Number *
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        required
                        pattern="^[0-9+ \-]{10,15}$"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-white border border-primary/10 hover:border-gold focus:border-gold px-4 py-3 text-xs tracking-wider text-primary rounded-sm focus:outline-none transition-all duration-300"
                        placeholder="e.g. +91 80746 90803"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="projectType" className="text-[0.6rem] font-semibold text-primary/40 uppercase tracking-[0.2em] block mb-2">
                        Scope of Design *
                      </label>
                      <select
                        id="projectType"
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full bg-white border border-primary/10 hover:border-gold focus:border-gold px-4 py-3 text-xs tracking-wider text-primary rounded-sm focus:outline-none transition-all duration-300 cursor-pointer"
                      >
                        <option value="Residential Villa">Residential Luxury Villa</option>
                        <option value="Residential Apartment">Premium Apartment</option>
                        <option value="Commercial Office Suite">Corporate Office Lounge</option>
                        <option value="Modular Kitchen Upgrade">Modular Gourmet Kitchen</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="budget" className="text-[0.6rem] font-semibold text-primary/40 uppercase tracking-[0.2em] block mb-2">
                        Project Budget Bracket *
                      </label>
                      <select
                        id="budget"
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full bg-white border border-primary/10 hover:border-gold focus:border-gold px-4 py-3 text-xs tracking-wider text-primary rounded-sm focus:outline-none transition-all duration-300 cursor-pointer"
                      >
                        <option value="₹5 Lakh - ₹10 Lakh">₹5 Lakh - ₹10 Lakh</option>
                        <option value="₹10 Lakh - ₹20 Lakh">₹10 Lakh - ₹20 Lakh</option>
                        <option value="₹20 Lakh - ₹50 Lakh">₹20 Lakh - ₹50 Lakh</option>
                        <option value="₹50 Lakh+">₹50 Lakh+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="msg" className="text-[0.6rem] font-semibold text-primary/40 uppercase tracking-[0.2em] block mb-2">
                      Brief Us About Your Space (Optional)
                    </label>
                    <textarea
                      id="msg"
                      rows="4"
                      value={formData.msg}
                      onChange={(e) => setFormData({ ...formData, msg: e.target.value })}
                      className="w-full bg-white border border-primary/10 hover:border-gold focus:border-gold px-4 py-3 text-xs tracking-wider text-primary rounded-sm focus:outline-none transition-all duration-300 resize-none"
                      placeholder="Describe your design vision..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-primary hover:bg-gold hover:text-primary text-white text-xs font-bold uppercase tracking-[0.2em] py-4 transition-all duration-300 rounded-sm flex items-center justify-center"
                  >
                    {loading ? "PROCESSING..." : "SUBMIT AUDIT REQUEST"}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
export default Contact;
