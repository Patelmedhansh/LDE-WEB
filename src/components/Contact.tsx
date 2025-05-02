import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, Users, Gamepad, CheckCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    inquiryType: 'general',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsLoading(false);
    setIsSubmitted(true);
    setFormState({
      name: '',
      email: '',
      subject: '',
      message: '',
      inquiryType: 'general',
    });
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 bg-grid-pattern"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-16 text-center">
          <h6 className="text-violet-500 font-display uppercase tracking-widest mb-3">Get In Touch</h6>
          <h2 className="section-title">Contact Us</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <div>
            <div className="bg-charcoal-800/80 backdrop-blur-sm p-8 rounded-lg mb-8 hover:bg-charcoal-700/80 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-violet-900/30 rounded-lg group-hover:bg-violet-900/50 transition-colors">
                    <Mail className="w-6 h-6 text-violet-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Email</h4>
                    <a href="mailto:info@lde-esports.com" className="text-gray-300 hover:text-violet-400 transition-colors">info@lde-esports.com</a>
                    <a href="mailto:business@lde-esports.com" className="text-gray-300 hover:text-violet-400 transition-colors block">business@lde-esports.com</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-violet-900/30 rounded-lg group-hover:bg-violet-900/50 transition-colors">
                    <MapPin className="w-6 h-6 text-violet-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Headquarters</h4>
                    <p className="text-gray-300">123 Gaming Street</p>
                    <p className="text-gray-300">Los Angeles, CA 90001</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-violet-900/30 rounded-lg group-hover:bg-violet-900/50 transition-colors">
                    <Phone className="w-6 h-6 text-violet-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Phone</h4>
                    <a href="tel:+15551234567" className="text-gray-300 hover:text-violet-400 transition-colors">+1 (555) 123-4567</a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-charcoal-800/80 backdrop-blur-sm p-8 rounded-lg hover:bg-charcoal-700/80 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-6">Join LDE</h3>
              <p className="text-gray-300 mb-6">
                We're always looking for talented players, content creators, and staff members to join our organization. 
                If you're passionate about esports and want to be part of our team, we'd love to hear from you.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 group cursor-pointer">
                  <div className="p-2 bg-violet-900/30 rounded-lg group-hover:bg-violet-900/50 transition-colors">
                    <Gamepad className="w-5 h-5 text-violet-400" />
                  </div>
                  <span className="text-white group-hover:text-violet-400 transition-colors">Player Applications</span>
                </div>
                
                <div className="flex items-center gap-3 group cursor-pointer">
                  <div className="p-2 bg-violet-900/30 rounded-lg group-hover:bg-violet-900/50 transition-colors">
                    <Users className="w-5 h-5 text-violet-400" />
                  </div>
                  <span className="text-white group-hover:text-violet-400 transition-colors">Staff Positions</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-charcoal-800/80 backdrop-blur-sm p-8 rounded-lg hover:bg-charcoal-700/80 transition-all duration-300">
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-white font-medium mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-charcoal-700 border border-charcoal-600 rounded-lg text-white focus:outline-none focus:border-violet-500 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-charcoal-700 border border-charcoal-600 rounded-lg text-white focus:outline-none focus:border-violet-500 transition-colors"
                    placeholder="Your email"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="inquiryType" className="block text-white font-medium mb-2">Inquiry Type</label>
                <select
                  id="inquiryType"
                  name="inquiryType"
                  value={formState.inquiryType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-charcoal-700 border border-charcoal-600 rounded-lg text-white focus:outline-none focus:border-violet-500 transition-colors"
                >
                  <option value="general">General Inquiry</option>
                  <option value="business">Business Opportunity</option>
                  <option value="sponsorship">Sponsorship</option>
                  <option value="recruitment">Player Recruitment</option>
                  <option value="media">Media Request</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-white font-medium mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-charcoal-700 border border-charcoal-600 rounded-lg text-white focus:outline-none focus:border-violet-500 transition-colors"
                  placeholder="Message subject"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-charcoal-700 border border-charcoal-600 rounded-lg text-white focus:outline-none focus:border-violet-500 transition-colors resize-none"
                  placeholder="Your message"
                ></textarea>
              </div>
              
              <div>
                <button 
                  type="submit" 
                  className={`btn btn-primary w-full flex items-center justify-center gap-2 ${isLoading ? 'opacity-75 cursor-not-allowed' : ''}`}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : isSubmitted ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};