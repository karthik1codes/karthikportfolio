import React from 'react';
import Section from '../components/Section';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: ['Python', 'Dart', 'SQL'],
    color: 'primary'
  },
  {
    title: 'Frameworks & Tools',
    skills: ['Flutter', 'Firebase', 'Google Maps API', 'Vertex AI', 'GCP'],
    color: 'secondary'
  },
  {
    title: 'Blockchain',
    skills: ['Polygon', 'Cross-chain DEX Development'],
    color: 'accent'
  },
  {
    title: 'AI & Machine Learning',
    skills: ['Gemma', 'Gemini', 'AI Model Training'],
    color: 'primary'
  }
];

const Skills = () => {
  return (
    <Section id="skills" title="Skills">
      <div className="grid md:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="card"
          >
            <h3 className={`text-xl font-semibold text-${category.color} mb-4`}>
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-dark rounded-full text-sm text-gray-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;