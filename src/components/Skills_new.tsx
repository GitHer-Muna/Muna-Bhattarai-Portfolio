'use client'

import { motion } from 'framer-motion'
import { Cloud, Database, Code, Wrench, Target } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Cloud Engineering (AWS)',
      icon: Cloud,
      color: 'from-orange-500 to-amber-500',
      skills: [
        { name: 'AWS Lambda', level: 85, description: 'Serverless function development and deployment' },
        { name: 'Amazon Bedrock', level: 80, description: 'AI/ML model integration and deployment' },
        { name: 'Amazon S3', level: 90, description: 'Object storage and static website hosting' },
        { name: 'DynamoDB', level: 75, description: 'NoSQL database operations and optimization' },
        { name: 'API Gateway', level: 85, description: 'RESTful API design and management' },
        { name: 'CloudFormation', level: 80, description: 'Infrastructure as Code (IaC)' }
      ]
    },
    {
      title: 'DevOps & CI/CD',
      icon: Wrench,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'GitHub Actions', level: 85, description: 'Automated CI/CD pipeline configuration' },
        { name: 'AWS CodePipeline', level: 80, description: 'Continuous integration and deployment' },
        { name: 'Terraform', level: 75, description: 'Infrastructure as Code and automation' },
        { name: 'Docker', level: 70, description: 'Containerization and deployment' }
      ]
    },
    {
      title: 'Programming & Development',
      icon: Code,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Python', level: 90, description: 'Backend development and data analysis' },
        { name: 'JavaScript/TypeScript', level: 85, description: 'Full-stack web development' },
        { name: 'React/Next.js', level: 80, description: 'Modern frontend development' },
        { name: 'SQL', level: 85, description: 'Database design and optimization' },
        { name: 'Node.js', level: 75, description: 'Server-side JavaScript development' }
      ]
    },
    {
      title: 'Data & Analytics',
      icon: Database,
      color: 'from-green-500 to-teal-500',
      skills: [
        { name: 'Power BI', level: 85, description: 'Business intelligence and data visualization' },
        { name: 'Microsoft Fabric', level: 80, description: 'Data platform and analytics solutions' },
        { name: 'Excel Advanced', level: 90, description: 'Complex data analysis and modeling' },
        { name: 'Data Pipeline Design', level: 75, description: 'ETL processes and data workflows' }
      ]
    }
  ]

  const specializations = [
    {
      title: 'Cloud Architecture',
      description: 'Designing scalable and secure cloud solutions with focus on AWS services and best practices.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'AI/ML Integration', 
      description: 'Building intelligent applications using Amazon Bedrock and modern ML frameworks.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Data Analytics',
      description: 'Creating insights through advanced data visualization and business intelligence solutions.',
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'DevOps Automation',
      description: 'Streamlining development workflows with CI/CD pipelines and infrastructure automation.',
      color: 'from-orange-500 to-red-500'
    }
  ]

  const certifications = [
    {
      name: 'Microsoft Azure AI Fundamentals',
      issuer: 'Microsoft',
      year: '2024',
      badgeUrl: '/badges/azure-ai-fundamentals.svg'
    },
    {
      name: 'Microsoft Azure Data Fundamentals',
      issuer: 'Microsoft',
      year: '2024', 
      badgeUrl: '/badges/azure-data-fundamentals.svg'
    },
    {
      name: 'Microsoft Fabric Analytics Engineer',
      issuer: 'Microsoft',
      year: '2024',
      badgeUrl: '/badges/microsoft-fabric.svg'
    },
    {
      name: 'HashiCorp Terraform Associate',
      issuer: 'HashiCorp',
      year: '2024',
      badgeUrl: '/badges/hashicorp-terraform-associate.png'
    },
    {
      name: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      year: '2024',
      badgeUrl: 'https://images.credly.com/size/340x340/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png'
    },
    {
      name: 'Microsoft Power BI Data Analyst',
      issuer: 'Microsoft',
      year: '2024',
      badgeUrl: '/badges/placeholder-badge.svg'
    },
    {
      name: 'AWS Solutions Architect Associate',
      issuer: 'Amazon Web Services',
      year: '2024',
      badgeUrl: '/badges/placeholder-badge.svg'
    },
    {
      name: 'GitHub Actions Certified',
      issuer: 'GitHub',
      year: '2024',
      badgeUrl: '/badges/placeholder-badge.svg'
    },
    {
      name: 'Docker Certified Associate',
      issuer: 'Docker',
      year: '2024',
      badgeUrl: '/badges/placeholder-badge.svg'
    },
    {
      name: 'Kubernetes Application Developer',
      issuer: 'Cloud Native Computing Foundation',
      year: '2024',
      badgeUrl: '/badges/placeholder-badge.svg'
    },
    {
      name: 'MongoDB Certified Developer',
      issuer: 'MongoDB',
      year: '2024',
      badgeUrl: '/badges/placeholder-badge.svg'
    },
    {
      name: 'React Developer Certification',
      issuer: 'Meta',
      year: '2024',
      badgeUrl: '/badges/placeholder-badge.svg'
    }
  ]

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-slate-900/50" />
      <div className="absolute top-20 right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl" />

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
            Technical <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-8" />
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Technologies and tools I've worked with during my journey in cloud computing and AI development
          </p>
        </motion.div>

        {/* Skills Categories - Technical Proficiencies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-heading font-bold text-white text-center mb-12">
            Technical <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Proficiencies</span>
          </h3>

          <div className="grid lg:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-slate-600/50 transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white font-medium">{skill.name}</span>
                        <span className="text-slate-400 text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-700/50 rounded-full h-2 mb-2">
                        <motion.div
                          className={`h-2 bg-gradient-to-r ${category.color} rounded-full`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1.5, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                          viewport={{ once: true }}
                        />
                      </div>
                      <p className="text-slate-400 text-sm">{skill.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-heading font-bold text-white text-center mb-12">
            My <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Background</span>
          </h3>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 hover:border-slate-600/50 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h4 className="text-2xl font-semibold text-white mb-2">
                    Bachelor of Science (Honours) in Information Technology
                  </h4>
                  <p className="text-lg text-blue-400 font-medium mb-2">
                    Lord Buddha Education Foundation
                  </p>
                  <p className="text-slate-400 flex items-center">
                    <span className="mr-2">📍</span>
                    Kathmandu, Nepal
                  </p>
                </div>
                <div className="mt-4 md:mt-0 text-right">
                  <span className="inline-block px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-300 rounded-full text-sm font-medium border border-green-500/30">
                    Nov 2020 – Dec 2023
                  </span>
                </div>
              </div>

              <div className="border-t border-slate-700/50 pt-4 mt-4">
                <p className="text-slate-300 text-sm">
                  <span className="font-medium text-yellow-400">🎓 Full Scholarship:</span> Received the National ICT Scholarship from Computer Association Nepal (CAN Federation) covering 100% of tuition fees. This experience taught me not only technical skills but also the value of community support in technology.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Specializations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-heading font-bold text-white text-center mb-12">
            What I <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Focus On</span>
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specializations.map((spec, index) => (
              <motion.div
                key={spec.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 text-center hover:border-slate-600/50 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${spec.color} rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-3">{spec.title}</h4>
                <p className="text-slate-300 text-sm leading-relaxed">{spec.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-heading font-bold text-white text-center mb-12">
            Certifications & <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Recognition</span>
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-slate-600/50 transition-all duration-300 text-center group cursor-pointer"
                onClick={() => window.open(`https://www.credly.com/users/muna-bhattarai.5d784bd7/badges`, '_blank')}
              >
                <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <img
                    src={cert.badgeUrl}
                    alt={`${cert.name} badge`}
                    className="w-full h-full object-contain rounded-lg shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300"
                    loading="lazy"
                  />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">{cert.name}</h4>
                <p className="text-slate-400 text-sm mb-2">{cert.issuer}</p>
                <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs group-hover:bg-blue-500/30 transition-colors">
                  {cert.year}
                </span>
                <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-xs text-slate-400">Click to verify</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Credential Profile Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-slate-300 mb-6">View all my verified credentials and badges:</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://www.credly.com/users/muna-bhattarai.5d784bd7/badges#credly"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-200"
              >
                <span>🏆</span>
                <span>Credly Profile</span>
              </motion.a>
              <motion.a
                href="https://learn.microsoft.com/en-us/users/munabhattarai-5997/credentials?tab=credentials-tab"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-200"
              >
                <span>📚</span>
                <span>Microsoft Learn</span>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
