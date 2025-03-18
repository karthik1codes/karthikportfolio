import React from 'react';
import Section from '../components/Section';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Eco-Driving Assistant',
    description: 'AI-powered app for eco-friendly driving and carbon credit rewards.',
    image: 'https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?w=800&auto=format&fit=crop&q=60',
    status: 'In Progress',
    tech: ['Flutter', 'AI', 'Google Maps API'],
    color: 'primary'
  },
  {
    title: 'Social DEX Platform',
    description: 'AI-based trade copying for blockchain trading.',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&auto=format&fit=crop&q=60',
    status: 'In Progress',
    tech: ['Python', 'Blockchain', 'AI'],
    color: 'secondary'
  },
  {
    title: 'Ingredient Scanner App',
    description: 'AI-driven food product analysis for consumer safety.',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&auto=format&fit=crop&q=60',
    status: 'In Progress',
    tech: ['Flutter', 'AI', 'Firebase'],
    color: 'accent'
  }
];

const Projects = () => {
  return (
    <Section id="projects" title="Projects">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="card group"
          >
            <div className="relative overflow-hidden rounded-lg mb-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent"></div>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <span className={`text-${project.color} text-sm`}>{project.status}</span>
              </div>
              <p className="text-gray-400">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs bg-dark rounded-full text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 pt-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={20} />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;