"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { personalInfo } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2 } from "lucide-react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

import emailjs from '@emailjs/browser';

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [emailError, setEmailError] = useState("");

  useEffect(() => {
    if (submitStatus === "success") {
      const timer = setTimeout(() => {
        setSubmitStatus("idle");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!re.test(email)) {
      setEmailError("Please enter a valid email address.");
      return false;
    }
    setEmailError("");
    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    
    if (!validateEmail(email)) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const result = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
        e.currentTarget,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
      );

      if (result.text === 'OK') {
        setSubmitStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 relative bg-slate-900/50">
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading 
          title="Get In Touch" 
          subtitle="Let's build something amazing together." 
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10 max-w-5xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card hoverEffect={false} className="h-full bg-indigo-500/5">
              <h3 className="text-2xl font-bold text-white mb-4">Contact Information</h3>
              <p className="text-slate-200 mb-6 text-sm leading-relaxed">
                I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision. 
                Whether you have a question or just want to say hi, my inbox is open!
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-medium">Email</p>
                    <a href={`mailto:${personalInfo.email}`} className="text-slate-300 hover:text-white transition-colors text-sm">
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-medium">Phone</p>
                    <a href={`tel:${personalInfo.phone}`} className="text-slate-300 hover:text-white transition-colors text-sm">
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-medium">Address</p>
                    <p className="text-slate-300 text-sm">
                      {personalInfo.address}
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-sm text-slate-500 font-medium mb-3">Social Media</p>
                <div className="flex items-center gap-3">
                  <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400 hover:bg-indigo-500 hover:text-white transition-all">
                    <FaLinkedin size={18} />
                  </a>
                  <a href={personalInfo.github} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400 hover:bg-indigo-500 hover:text-white transition-all">
                    <FaGithub size={18} />
                  </a>
                  <a href={personalInfo.instagram} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400 hover:bg-indigo-500 hover:text-white transition-all">
                    <FaInstagram size={18} />
                  </a>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card hoverEffect={false}>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {/* Honeypot field to prevent spam */}
                <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-200 mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-[#020817] border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white transition-all"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-200 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    onChange={(e) => {
                      if (emailError) validateEmail(e.target.value);
                    }}
                    onBlur={(e) => validateEmail(e.target.value)}
                    className={`w-full px-4 py-3 bg-[#020817] border ${emailError ? 'border-red-500 focus:ring-red-500' : 'border-white/10 focus:ring-indigo-500'} rounded-lg focus:outline-none focus:ring-2 text-white transition-all`}
                    placeholder="john@example.com"
                  />
                  {emailError && <p className="text-red-400 text-xs mt-2">{emailError}</p>}
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-200 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-[#020817] border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white transition-all resize-none"
                    placeholder="Hello Hirusha, I'd like to discuss a project, job opportunity, or just say hi..."
                  ></textarea>
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full mt-2"
                  icon={isSubmitting ? Loader2 : Send}
                  iconPosition="right"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>

                {submitStatus === "error" && (
                  <p className="text-red-400 text-sm text-center mt-2">
                    Something went wrong. Please try again or email me directly.
                  </p>
                )}
              </form>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Success Toast Popup */}
      <AnimatePresence>
        {submitStatus === "success" && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 20, x: "-50%" }}
            className="fixed bottom-10 left-1/2 z-50 flex items-center gap-3 bg-emerald-500/20 border border-emerald-500/30 text-emerald-100 px-6 py-4 rounded-full shadow-[0_0_30px_rgba(16,185,129,0.2)] backdrop-blur-md"
          >
            <CheckCircle2 size={20} className="text-emerald-400" />
            <span className="font-medium">Message sent successfully!</span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
