import React, { useState } from 'react';
import Section from '../components/Section';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Section id="contact" title="Contact">
      <div className="grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Mail className="text-primary" size={24} />
              <div>
                <h4 className="font-medium">Email</h4>
                <p className="text-gray-400">karm131005@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="text-secondary" size={24} />
              <div>
                <h4 className="font-medium">Phone</h4>
                <p className="text-gray-400">+91 7676805844</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="text-accent" size={24} />
              <div>
                <h4 className="font-medium">Location</h4>
                <p className="text-gray-400">Bengaluru, Karnataka</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-dark-lighter rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-dark-lighter rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 bg-dark-lighter rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 px-6 bg-primary hover:bg-primary/90 text-white font-medium rounded-lg transition-colors"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </Section>
  );
};

export default Contact;