'use client'

import { motion } from 'framer-motion'
import { Heart, Github, Linkedin, Twitter, Mail, ExternalLink, Award } from 'lucide-react'

const Footer = () => {
  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ]

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/GitHer-Muna',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/munashree/',
      label: 'LinkedIn'
    },
    {
      icon: Twitter,
      href: 'https://twitter.com/munabhattarai',
      label: 'Twitter'
    },
    {
      icon: Mail,
      href: 'mailto:hellomunabhattarai@gmail.com',
      label: 'Email'
    }
  ]

  const achievements = [
    'Cloud Engineer',
    'GenAI Specialist',
    'Open Source Contributor'
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-slate-900/90 backdrop-blur-sm border-t border-slate-700/50">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-purple-900/20 to-slate-900/50" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <h3 className="text-2xl font-heading font-bold text-white">Muna Bhattarai</h3>
            </div>
            
            <p className="text-slate-300 mb-6 leading-relaxed max-w-md">
              Cloud Engineer specializing in AWS, DevOps, and GenAI implementations. 
              Passionate about building scalable solutions and fostering tech communities.
            </p>

            {/* Achievement badges */}
            <div className="flex flex-wrap gap-2 mb-6">
              {achievements.map((achievement) => (
                <span
                  key={achievement}
                  className="inline-flex items-center space-x-1 px-3 py-1 bg-slate-800/50 text-slate-300 text-sm rounded-full border border-slate-700/50"
                >
                  <Award className="w-3 h-3" />
                  <span>{achievement}</span>
                </span>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700/50 hover:border-slate-600 rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <motion.button
                    onClick={() => scrollToSection(link.href)}
                    whileHover={{ x: 5 }}
                    className="text-slate-400 hover:text-white transition-colors duration-200 text-left"
                  >
                    {link.name}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Get in Touch</h4>
            <div className="space-y-3">
              <p className="text-slate-400 text-sm">
                📧 hellomunabhattarai@gmail.com
              </p>
              <p className="text-slate-400 text-sm">
                📍 Kathmandu, Nepal
              </p>
              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection('#contact')
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 mt-4 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-600/20 text-blue-300 rounded-lg border border-blue-500/30 hover:border-blue-500/50 transition-all duration-200"
              >
                <span className="text-sm">Let's Connect</span>
                <ExternalLink className="w-4 h-4" />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="py-6 border-t border-slate-700/50 flex flex-col md:flex-row justify-between items-center"
        >
          <div className="flex items-center space-x-2 text-slate-400 text-sm mb-4 md:mb-0">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-400" />
            <span>by Muna Bhattarai</span>
            <span>•</span>
            <span>© {new Date().getFullYear()} All rights reserved</span>
          </div>

          <div className="flex items-center space-x-6 text-slate-400 text-sm">
            <span>Built with Next.js, Tailwind CSS & Three.js</span>
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center space-x-1 text-blue-400 hover:text-blue-300 transition-colors duration-200"
            >
              <span>Back to Top</span>
              <div className="w-4 h-4 border border-current border-b-0 border-r-0 transform rotate-45" />
            </motion.button>
          </div>
        </motion.div>

        {/* Easter Egg */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.1 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
          className="absolute bottom-4 right-4 text-xs text-slate-600"
        >
          Empowering through technology ⚡
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
