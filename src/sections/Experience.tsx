import React from 'react';
import Section from '../components/Section';
import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'AI-Powered Eco-Driving Assistant',
    status: 'Ongoing',
    description: 'Developing a Flutter-based application that promotes fuel-efficient driving, tracks emissions, and rewards users with carbon credits.',
    color: 'primary'
  },
  {
    title: 'Social DEX with AI Trade Copying',
    status: 'Ongoing',
    description: 'Building a Python-based decentralized exchange platform that facilitates trade copying using AI insights.',
    color: 'secondary'
  },
  {
    title: 'AI-Based Product Ingredient Scanner',
    status: 'Ongoing',
    description: 'Creating an app that scans food product ingredients and uses AI to provide safety information for Indian consumers.',
    color: 'accent'
  },
  {
    title: 'Water Level Monitoring System',
    status: 'Completed',
    description: 'Built an AI-powered monitoring system to track and report lake water levels using Google services.',
    color: 'primary'
  }
];

const Experience = () => {
  return (
    <Section id="experience" title="Experience">
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="card relative border-l-4 border-primary pl-6"
          >
            <div className="absolute -left-2 top-6 w-4 h-4 rounded-full bg-primary"></div>
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
              <span className={`text-${exp.color} text-sm font-medium`}>
                {exp.status}
              </span>
            </div>
            <p className="text-gray-400">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;