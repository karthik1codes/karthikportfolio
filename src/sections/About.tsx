import React from 'react';
import Section from '../components/Section';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <Section id="about" title="About Me">
      <div className="grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg text-gray-300 leading-relaxed">
            I am a dedicated developer with experience in AI-powered applications, blockchain solutions, 
            and cross-platform mobile development using Flutter. My projects are designed to create 
            meaningful impact, from eco-friendly driving assistants to social DEX platforms.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mt-4">
            With a passion for innovation and sustainable technology, I strive to create solutions 
            that make a difference in people's lives while promoting environmental consciousness.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          <div className="card">
            <h3 className="text-xl font-semibold text-primary mb-2">Vision</h3>
            <p className="text-gray-400">
              To leverage cutting-edge technology in creating sustainable and impactful solutions.
            </p>
          </div>
          <div className="card">
            <h3 className="text-xl font-semibold text-secondary mb-2">Mission</h3>
            <p className="text-gray-400">
              Building innovative applications that combine AI and blockchain for real-world problems.
            </p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default About;