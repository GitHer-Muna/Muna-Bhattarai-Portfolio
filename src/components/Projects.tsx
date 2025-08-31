'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Cloud, Users, Zap, Shield, Database, Code, Smartphone, Heart, BookOpen, Server } from 'lucide-react'

const Projects = () => {
  const projects = [
    // Professional Projects
    {
      title: 'AddToCloud',
      description: 'Enterprise Cloud Platform for Modern Businesses - Deploy, manage, and scale your applications with comprehensive cloud infrastructure.',
      longDescription: 'Built for enterprise needs with industry-leading security and performance. AddToCloud is an invite-only enterprise platform with manual approval by our admin team. Upon approval, each user receives a dedicated free-tier EC2 instance pre-configured with AWS CLI, Azure CLI, GCP CLI, and other cloud-native tools.',
      technologies: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Terraform'],
      category: 'Cloud Infrastructure',
      type: 'Professional',
      icon: Cloud,
      color: 'from-blue-500 to-cyan-500',
      features: [
        'Multi-cloud infrastructure management',
        'Pre-configured cloud CLI tools',
        'Enterprise-grade security',
        'Dedicated free-tier EC2 instances'
      ],
      metrics: {
        'Platform Type': 'Invite-Only',
        'Cloud Providers': '3+',
        'Access Level': 'Enterprise'
      },
      status: 'Production',
      year: '2023',
      live: 'https://addtocloud.tech/'
    },

    // Academic Projects
    {
      title: 'Mobile Plant Disease Detection System',
      description: 'Final year project using deep learning for real-time plant disease identification through mobile application.',
      longDescription: 'AI-powered mobile application that helps farmers and gardeners identify plant diseases using computer vision and deep learning. Features include image capture, disease classification, treatment recommendations, and farmer education.',
      technologies: ['Python', 'TensorFlow', 'Keras', 'React Native', 'Firebase', 'OpenCV'],
      category: 'AI/ML & Mobile',
      type: 'Academic',
      icon: Smartphone,
      color: 'from-green-500 to-emerald-500',
      features: [
        'Real-time disease classification',
        'Treatment recommendations',
        'Disease severity assessment',
        'Farmer education resources'
      ],
      metrics: {
        'Accuracy Rate': '94%',
        'Disease Types': '20+',
        'Processing Time': '<3s'
      },
      status: 'Completed',
      year: '2024',
      github: 'https://github.com/munabhattarai/plant-disease-detection'
    },
    {
      title: 'Children\'s Day Care Management System',
      description: 'Full-stack PHP web application deployed on AWS for comprehensive daycare center management.',
      longDescription: 'Complete management system for daycare centers including child enrollment, staff management, parent communication, billing, and reporting. Deployed using AWS services for scalability and reliability.',
      technologies: ['PHP', 'MySQL', 'AWS EC2', 'AWS RDS', 'AWS S3', 'AWS SNS', 'CloudWatch', 'Auto Scaling'],
      category: 'Web Application',
      type: 'Academic',
      icon: Heart,
      color: 'from-pink-500 to-rose-500',
      features: [
        'Child enrollment and tracking',
        'Parent-staff communication portal',
        'Automated billing system',
        'Real-time notifications via SNS'
      ],
      metrics: {
        'AWS Services Used': '6',
        'Scalability': 'Auto-scaling',
        'Uptime': '99.9%'
      },
      status: 'Deployed',
      year: '2023',
      github: 'https://github.com/munabhattarai/daycare-management'
    },
    {
      title: 'E-Library Management System',
      description: 'Comprehensive database design and implementation for digital library management using MS SQL Server.',
      longDescription: 'Complete database solution for library management including book cataloging, member management, lending system, fine calculations, and reporting. Features advanced SQL queries and stored procedures.',
      technologies: ['MS SQL Server', 'T-SQL', 'Stored Procedures', 'Database Design', 'ERD'],
      category: 'Database Systems',
      type: 'Academic',
      icon: BookOpen,
      color: 'from-indigo-500 to-blue-500',
      features: [
        'Advanced book cataloging system',
        'Member management portal',
        'Automated fine calculations',
        'Comprehensive reporting system'
      ],
      metrics: {
        'Database Tables': '15+',
        'Stored Procedures': '25+',
        'Query Optimization': '40% faster'
      },
      status: 'Completed',
      year: '2022',
      github: 'https://github.com/munabhattarai/elibrary-db'
    },
    {
      title: 'Secure Social Research Infrastructure',
      description: 'AWS-based secure and scalable infrastructure design for social research organization with high availability.',
      longDescription: 'Enterprise-grade infrastructure deployment for a social research organization requiring secure data handling, scalability, and high availability. Implemented using AWS best practices for security and performance.',
      technologies: ['AWS EC2', 'AWS RDS', 'AWS VPC', 'Load Balancer', 'Auto Scaling', 'CloudFormation', 'Security Groups'],
      category: 'Cloud Infrastructure',
      type: 'Academic',
      icon: Server,
      color: 'from-cyan-500 to-teal-500',
      features: [
        'Multi-AZ deployment for high availability',
        'Secure VPC with private subnets',
        'Load balancing and auto-scaling',
        'Infrastructure as Code deployment'
      ],
      metrics: {
        'High Availability': '99.95%',
        'Auto Scaling': 'Dynamic',
        'Security Compliance': '100%'
      },
      status: 'Completed',
      year: '2023',
      github: 'https://github.com/munabhattarai/social-research-infra'
    },
    {
      title: 'COVID-19 Patient Management System',
      description: 'Python-based system for managing COVID-19 patient data, tracking, and reporting during the pandemic.',
      longDescription: 'Comprehensive patient management system developed during COVID-19 to help healthcare facilities track patient information, symptoms, treatment progress, and generate reports for health authorities.',
      technologies: ['Python', 'SQLite', 'Pandas', 'NumPy', 'Matplotlib', 'Tkinter'],
      category: 'Healthcare Software',
      type: 'Academic',
      icon: Heart,
      color: 'from-red-500 to-orange-500',
      features: [
        'Patient registration and tracking',
        'Symptom monitoring system',
        'Treatment progress tracking',
        'Automated health reports'
      ],
      metrics: {
        'Patient Records': '500+',
        'Reporting Speed': '5x faster',
        'Data Accuracy': '99.8%'
      },
      status: 'Completed',
      year: '2021',
      github: 'https://github.com/munabhattarai/covid-patient-management'
    }
  ]

  const categories = Array.from(new Set(projects.map(p => p.category)))
  const projectTypes = Array.from(new Set(projects.map(p => p.type || 'Professional')))

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
      <div className="absolute top-40 left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            Featured <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-8" />
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            A comprehensive collection of professional and academic projects showcasing expertise in cloud computing, AI/ML, full-stack development, and innovative technology solutions
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-slate-800/70 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden hover:border-slate-600/50 transition-all duration-300 group"
            >
              {/* Project Header */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${project.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                    <project.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex space-x-2">
                    <span className={`px-2 py-1 text-xs rounded border ${
                      project.type === 'Academic' 
                        ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
                        : 'bg-slate-700/50 text-slate-300 border-slate-600/50'
                    }`}>
                      {project.type || 'Professional'}
                    </span>
                    <span className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded border border-slate-600/50">
                      {project.status}
                    </span>
                    <span className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded border border-blue-500/30">
                      {project.year}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-1">{project.category}</p>
                <p className="text-slate-300 text-sm mb-4 leading-relaxed">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded border border-slate-600/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {Object.entries(project.metrics).slice(0, 2).map(([key, value]) => (
                    <div key={key} className="bg-slate-700/30 rounded-lg p-3">
                      <div className="text-lg font-semibold text-white">{value}</div>
                      <div className="text-xs text-slate-400">{key}</div>
                    </div>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex space-x-3">
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex items-center space-x-2 px-4 py-2 bg-slate-700/50 hover:bg-slate-600/50 text-slate-300 hover:text-white rounded-lg border border-slate-600/50 hover:border-slate-500 transition-all duration-200"
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm">Code</span>
                    </motion.a>
                  )}
                  {project.live && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex items-center space-x-2 px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 hover:text-blue-200 rounded-lg border border-blue-500/30 hover:border-blue-500/50 transition-all duration-200"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm">Live</span>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 max-w-2xl mx-auto">
            <Code className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-white mb-4">Interested in My Work?</h3>
            <p className="text-slate-300 mb-6">
              Check out more projects on GitHub or let's discuss how we can collaborate on your next project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://github.com/GitHer-Muna"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 px-6 py-3 bg-slate-700/50 hover:bg-slate-600/50 text-white font-semibold rounded-lg border border-slate-600/50 hover:border-slate-500 transition-all duration-200"
              >
                <Github className="w-5 h-5" />
                <span>View GitHub</span>
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-200"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                <span>Start a Project</span>
                <ExternalLink className="w-4 h-4" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
