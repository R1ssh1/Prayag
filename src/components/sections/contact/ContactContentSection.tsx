import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send, CheckCircle2 } from "lucide-react";
import { companyInfo } from "../../../data/company";
import { SectionHeading } from "../../ui/SectionHeading";

export const ContactContentSection: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Reset after 4s
      setTimeout(() => setIsSuccess(false), 4000);
    }, 1500);
  };

  return (
    <section className="bg-gray-50 py-24 lg:py-36 relative overflow-x-hidden" aria-label="Contact Information and Form">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          
          {/* Left Column: Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-0.5 w-8 bg-prayag-red" aria-hidden="true" />
                <span className="text-prayag-red font-body text-xs font-semibold uppercase tracking-[0.22em]">
                  Reach Out Directly
                </span>
              </div>
              <SectionHeading text="Contact Information" highlightWords={["Information"]} as="h2" />
              <p className="mt-5 text-gray-500 font-body leading-relaxed text-lg max-w-lg">
                We're here to help with your piping and fitting requirements. Reach out to our 
                headquarters or manufacturing facility below.
              </p>
            </div>

            {/* 2x2 Grid for Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {/* Call Us Card */}
              <div className="bg-white p-8 sm:p-10 flex flex-col justify-between rounded-2xl border border-gray-100 hover:border-prayag-red/30 hover:shadow-lg transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-prayag-red/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-5 h-5 text-prayag-red" aria-hidden="true" />
                </div>
                <h3 className="font-body font-bold  uppercase text-prayag-black mb-2 leading-tight">
                  Call Us
                </h3>
                <a
                  href={`tel:${companyInfo.phone.replace(/\s/g, "")}`}
                  className="text-gray-500 hover:text-prayag-red text-[13px] font-body leading-relaxed transition-colors duration-200"
                >
                  {companyInfo.phone}
                </a>
              </div>

              {/* Email Us Card */}
              <div className="bg-white p-8 sm:p-10 flex flex-col justify-between rounded-2xl border border-gray-100 hover:border-prayag-red/30 hover:shadow-lg transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-prayag-red/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-5 h-5 text-prayag-red" aria-hidden="true" />
                </div>
                <h3 className="font-body font-bold  uppercase text-prayag-black mb-2 leading-tight">
                  Email Us
                </h3>
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="text-gray-500 hover:text-prayag-red text-[13px] font-body leading-relaxed transition-colors duration-200 break-all"
                >
                  {companyInfo.email}
                </a>
              </div>

              {/* Office Address */}
              <div className="bg-white p-8 sm:p-10 flex flex-col justify-between rounded-2xl border border-gray-100 hover:border-prayag-red/30 hover:shadow-lg transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-prayag-red/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-5 h-5 text-prayag-red" aria-hidden="true" />
                </div>
                <h3 className="font-body font-bold  uppercase text-prayag-black mb-2 leading-tight">
                  {companyInfo.registeredOffice.label}
                </h3>
                <address className="text-gray-500 text-[13px] font-body leading-relaxed not-italic">
                  {companyInfo.registeredOffice.full}
                </address>
              </div>

              {/* Factory Address */}
              <div className="bg-white p-8 sm:p-10 flex flex-col justify-between rounded-2xl border border-gray-100 hover:border-prayag-red/30 hover:shadow-lg transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-prayag-red/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-5 h-5 text-prayag-red" aria-hidden="true" />
                </div>
                <h3 className="font-body font-bold  uppercase text-prayag-black mb-2 leading-tight">
                  {companyInfo.factory.label}
                </h3>
                <address className="text-gray-500 text-[13px] font-body leading-relaxed not-italic">
                  {companyInfo.factory.full}
                </address>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Inquiry Form & Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            {/* Form Box */}
            <div className="bg-white rounded-3xl border border-gray-200 p-8 sm:p-10 shadow-xl shadow-gray-200/50 relative overflow-hidden flex-1">
              
              {/* Form header */}
              <div className="mb-8 relative z-10">
                <h3 className="font-heading font-black text-2xl uppercase text-prayag-black mb-2">
                  Send an Inquiry
                </h3>
                <p className="text-gray-500 font-body text-sm">
                  Fill out the form below and our sales team will get back to you within 24 hours.
                </p>
              </div>

              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center flex flex-col items-center justify-center min-h-[400px] relative z-10"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8 text-green-600" aria-hidden="true" />
                  </div>
                  <h4 className="font-heading font-black text-xl uppercase text-gray-900 mb-2">
                    Message Sent!
                  </h4>
                  <p className="text-gray-600 font-body text-sm max-w-xs mx-auto">
                    Thank you for reaching out. We have received your inquiry and will be in touch shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-[11px] font-heading font-bold uppercase tracking-widest text-gray-500 ml-1">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        required
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-prayag-black font-body text-sm focus:bg-white focus:border-prayag-red focus:ring-1 focus:ring-prayag-red outline-none transition-all duration-200"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="company" className="text-[11px] font-heading font-bold uppercase tracking-widest text-gray-500 ml-1">Company *</label>
                      <input
                        type="text"
                        id="company"
                        required
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-prayag-black font-body text-sm focus:bg-white focus:border-prayag-red focus:ring-1 focus:ring-prayag-red outline-none transition-all duration-200"
                        placeholder="Company Ltd."
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-[11px] font-heading font-bold uppercase tracking-widest text-gray-500 ml-1">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        required
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-prayag-black font-body text-sm focus:bg-white focus:border-prayag-red focus:ring-1 focus:ring-prayag-red outline-none transition-all duration-200"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="phone" className="text-[11px] font-heading font-bold uppercase tracking-widest text-gray-500 ml-1">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-prayag-black font-body text-sm focus:bg-white focus:border-prayag-red focus:ring-1 focus:ring-prayag-red outline-none transition-all duration-200"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="interest" className="text-[11px] font-heading font-bold uppercase tracking-widest text-gray-500 ml-1">Product Interest</label>
                    <select
                      id="interest"
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-prayag-black font-body text-sm focus:bg-white focus:border-prayag-red focus:ring-1 focus:ring-prayag-red outline-none transition-all duration-200 appearance-none"
                      style={{ backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")", backgroundPosition: "right 0.5rem center", backgroundRepeat: "no-repeat", backgroundSize: "1.5em 1.5em", paddingRight: "2.5rem" }}
                    >
                      <option value="">Select a product division...</option>
                      <option value="flanges">Flanges</option>
                      <option value="fittings">Fittings</option>
                      <option value="pipes">Pipes</option>
                      <option value="tubes">Tubes</option>
                      <option value="other">General Inquiry / Other</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-[11px] font-heading font-bold uppercase tracking-widest text-gray-500 ml-1">Message / Requirements *</label>
                    <textarea
                      id="message"
                      required
                      rows={3}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-prayag-black font-body text-sm focus:bg-white focus:border-prayag-red focus:ring-1 focus:ring-prayag-red outline-none transition-all duration-200 resize-none"
                      placeholder="Please detail your requirements, grades, and sizes..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-prayag-red hover:bg-red-700 text-white font-heading font-black uppercase tracking-widest text-sm py-3.5 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed mt-2"
                    style={{ boxShadow: "0 6px 20px rgba(227,30,36,0.25)" }}
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4 ml-1" aria-hidden="true" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Google Map Box */}
            <div className="bg-white rounded-3xl border border-gray-200 shadow-xl shadow-gray-200/50 overflow-hidden h-64 sm:h-72 w-full">
              <iframe
                title="Prayag Steel Location"
                src="https://maps.google.com/maps?q=Kumbharwada,Mumbai&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full object-cover grayscale-0 sm:grayscale sm:opacity-90 sm:contrast-125 transition-all duration-500 hover:grayscale-0 hover:opacity-100"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
