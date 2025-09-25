import React, { useState, useRef } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaPaperPlane } from 'react-icons/fa';
import { SiGithub } from 'react-icons/si';
import emailjs from '@emailjs/browser';

const Contacts = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');
    
    // Replace these with your actual EmailJS IDs from the dashboard
    const serviceID = 'service_g7j302d'; // Your Gmail service ID
    const templateID = 'template_n36mjtq'; // Your template ID
    const publicKey = 'JGQW09eU1zjY8JE1Q'; // Your public key
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus('validation_error');
      setIsSubmitting(false);
      return;
    }
    
    try {
      const result = await emailjs.sendForm(serviceID, templateID, form.current, publicKey);
      
      if (result.text === 'OK') {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(''), 5000);
    }
  };

  const contactMethods = [
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'eltonchirambo100@gmail.com',
      link: 'mailto:eltonchirambo100@gmail.com'
    },
    {
      icon: FaPhone,
      title: 'Phone',
      value: '+265 990 995 469',
      link: 'tel:+265990995469'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Location',
      value: 'Lilongwe, Lumbadzi',
      link: '#'
    },
    {
      icon: FaLinkedin,
      title: 'LinkedIn',
      value: 'elton-chirambo-6965b8380',
      link: 'https://www.linkedin.com/in/elton-chirambo-6965b8380/'
    }
  ];

  const socialLinks = [
    { icon: SiGithub, href: 'https://github.com/Elton726', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/elton-chirambo-6965b8380/', label: 'LinkedIn' },
    { icon: FaEnvelope, href: 'mailto:eltonchirambo100@gmail.com', label: 'Email' }
  ];

  return (
    <section id="contact" className="py-16 gradient-bg-contact text-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and collaborations
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
            <p className="text-purple-100 mb-8 leading-relaxed">
              Whether you have a project in mind, want to collaborate, or just want to say hello, 
              I'd love to hear from you!
            </p>
            
            <div className="space-y-4 mb-8">
              {contactMethods.map((method, index) => (
                <a 
                  key={index}
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300 professional-card group"
                >
                  <div className="p-3 rounded-lg bg-white/10 group-hover:bg-white/20">
                    <method.icon className="text-xl text-purple-300" />
                  </div>
                  <div>
                    <div className="font-semibold group-hover:text-purple-300 transition-colors">
                      {method.title}
                    </div>
                    <div className="text-purple-100">{method.value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 hover:scale-110 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="text-xl" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form ref={form} onSubmit={handleSubmit} className="animate-slide-up">
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-purple-100">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg focus:outline-none focus:border-purple-300 transition-colors text-white placeholder-purple-200"
                    placeholder="Your Name"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-purple-100">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg focus:outline-none focus:border-purple-300 transition-colors text-white placeholder-purple-200"
                    placeholder="your.email@example.com"
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2 text-purple-100">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg focus:outline-none focus:border-purple-300 transition-colors text-white placeholder-purple-200"
                  placeholder="Project Discussion"
                  required
                  disabled={isSubmitting}
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-purple-100">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg focus:outline-none focus:border-purple-300 transition-colors text-white placeholder-purple-200 resize-none"
                  placeholder="Tell me about your project or just say hello!"
                  required
                  disabled={isSubmitting}
                />
              </div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="p-3 bg-green-500/20 border border-green-500/30 rounded-lg text-green-300">
                  ✅ Thank you! Your message has been sent successfully. I'll get back to you soon!
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="p-3 bg-red-500/20 border border-red-500/30 rounded-lg text-red-300">
                  ❌ Sorry, there was an error sending your message. Please try again or contact me directly at eltonchirambo100@gmail.com
                </div>
              )}
              
              {submitStatus === 'validation_error' && (
                <div className="p-3 bg-red-500/20 border border-red-500/30 rounded-lg text-red-300">
                  ❌ Please fill in all required fields.
                </div>
              )}
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full gradient-bg-card hover:opacity-90 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 professional-card flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    <span>Send Message</span>
                  </>
                )}
              </button>
              
              <p className="text-purple-200 text-sm text-center">
                Prefer to email directly? Contact me at: eltonchirambo100@gmail.com
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacts;