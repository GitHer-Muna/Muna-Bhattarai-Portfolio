'use client'

import { motion } from 'framer-motion'
import { Cloud, Database, Code, Wrench, Users, Target } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Cloud Engineering (AWS)',
      icon: Cloud,
      color: 'from-orange-500 to-amber-500',
      skills: ['Lambda', 'Bedrock', 'S3', 'DynamoDB', 'Amplify', 'Code Pipeline', 'API Gateway', 'EC2', 'VPC', 'IAM', 'Cognito', 'CloudFormation', 'CloudWatch']
    },
    {
      title: 'DevOps & CI/CD',
      icon: Wrench,
      color: 'from-blue-500 to-cyan-500',
      skills: ['GitHub Actions', 'Jenkins', 'AWS Code Pipeline', 'Docker', 'Amazon ECS', 'Terraform', 'AWS CloudFormation']
    },
    {
      title: 'Programming & Development',
      icon: Code,
      color: 'from-purple-500 to-indigo-500',
      skills: ['Python', 'REST APIs', 'Backend Development', 'Serverless Architecture', 'Microservices']
    },
    {
      title: 'GenAI & AI Integration',
      icon: Target,
      color: 'from-pink-500 to-rose-500',
      skills: ['Amazon Bedrock', 'RAG Systems', 'LangChain', 'AI Chatbots', 'Generative AI', 'Machine Learning']
    },
    {
      title: 'Multi-Cloud Platforms',
      icon: Database,
      color: 'from-emerald-500 to-teal-500',
      skills: ['Microsoft Azure', 'Google Cloud Platform', 'Cloud Migration', 'Hybrid Cloud Solutions']
    },
    {
      title: 'Leadership & Soft Skills',
      icon: Users,
      color: 'from-indigo-500 to-blue-500',
      skills: ['Communication', 'Teamwork', 'Leadership', 'Problem Solving', 'Decision Making', 'Project Management']
    }
  ]

  const expertise = [
    {
      title: 'Cloud Engineering',
      description: 'Architecting and implementing scalable cloud solutions with AWS services including Lambda, Bedrock, S3, and comprehensive infrastructure management',
      color: 'from-orange-500 to-amber-500'
    },
    {
      title: 'DevOps Engineering',
      description: 'Streamlining deployment processes with CI/CD pipelines, Infrastructure as Code (Terraform, CloudFormation), and containerization (Docker, ECS)',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Generative AI Solutions',
      description: 'Developing AI-powered applications with Amazon Bedrock, RAG systems, and building intelligent chatbots for dynamic knowledge retrieval',
      color: 'from-pink-500 to-purple-500'
    },
    {
      title: 'Backend Development',
      description: 'Creating robust REST APIs and serverless architectures using Python, with focus on scalable microservices and modern web applications',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Multi-Cloud Strategy',
      description: 'Leading cloud transformation initiatives across AWS, Azure, and GCP with emphasis on cost optimization and performance enhancement',
      color: 'from-indigo-500 to-blue-500'
    },
    {
      title: 'Technical Leadership',
      description: 'Mentoring teams, driving technical decisions, and fostering collaborative environments while building inclusive tech communities',
      color: 'from-purple-500 to-pink-500'
    }
  ]

  const certifications = [
    // 2025 Certifications
    {
      name: 'Microsoft Certified Fabric Data Engineer Associate',
      issuer: 'Microsoft',
      year: '2025',
      badgeUrl: 'https://images.credly.com/images/61542181-0e8d-496c-a17c-3d4bf590eda1/azure-data-engineer-associate-600x600.png',
      verifyUrl: 'https://learn.microsoft.com/api/credentials/share/en-us/MUNABHATTARAI-5997/546F232E8F9A070B?sharingId=studentamb_300878'
    },
    {
      name: 'GitHub Foundations',
      issuer: 'GitHub',
      year: '2025',
      badgeUrl: 'https://images.credly.com/images/024d0122-724d-4c5a-bd83-cfe3c4b7a073/image.png',
      verifyUrl: 'https://www.credly.com/users/muna-bhattarai.5d784bd7/badges'
    },
    {
      name: 'HashiCorp Certified Terraform Associate',
      issuer: 'HashiCorp',
      year: '2025',
      badgeUrl: 'https://images.credly.com/images/0dc62494-dc94-469a-83af-e35309f27356/blob',
      verifyUrl: 'https://www.credly.com/badges/f3d2957b-066e-4699-a6f8-e4484055e2c0/public_url'
    },
    {
      name: 'AWS Certified Solutions Architect Associate',
      issuer: 'Amazon Web Services',
      year: '2025',
      badgeUrl: 'https://images.credly.com/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png',
      verifyUrl: 'https://www.credly.com/users/muna-bhattarai.5d784bd7/badges'
    },
    {
      name: 'Microsoft Certified Azure AI Engineer Associate',
      issuer: 'Microsoft',
      year: '2025',
      badgeUrl: 'https://images.credly.com/images/61f56aa4-16fd-403c-90bc-1d90dba1fa99/image.png',
      verifyUrl: 'https://learn.microsoft.com/en-us/users/munabhattarai-5997/credentials?tab=credentials-tab'
    },
    {
      name: 'Microsoft Certified Azure Fundamentals',
      issuer: 'Microsoft',
      year: '2025',
      badgeUrl: 'https://images.credly.com/images/be8fcaeb-c769-4858-b567-ffaaa73ce8cf/image.png',
      verifyUrl: 'https://learn.microsoft.com/en-us/users/munabhattarai-5997/credentials?tab=credentials-tab'
    },
    {
      name: 'Microsoft Certified Azure AI Fundamentals',
      issuer: 'Microsoft',
      year: '2025',
      badgeUrl: 'https://images.credly.com/images/4136ced8-75d5-4afb-8677-40b6236e2672/azure-ai-fundamentals-600x600.png',
      verifyUrl: 'https://learn.microsoft.com/en-us/users/munabhattarai-5997/credentials?tab=credentials-tab'
    },
    {
      name: 'Microsoft Certified Azure Data Fundamentals',
      issuer: 'Microsoft',
      year: '2025',
      badgeUrl: 'https://images.credly.com/images/70eb1e3f-d4de-4377-a062-b20fb29594ea/azure-data-fundamentals-600x600.png',
      verifyUrl: 'https://learn.microsoft.com/en-us/users/munabhattarai-5997/credentials?tab=credentials-tab'
    },
    // 2024 Certifications
    {
      name: 'Oracle Cloud Infrastructure Generative AI Certified Professional',
      issuer: 'Oracle',
      year: '2024',
      badgeUrl: 'https://brm-workforce.oracle.com/pdf/certview/images/OCI2024GAIOCP.png',
      verifyUrl: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=78523EC54993E027FE2D59D0E74E9D30417519E839B5D7109BA72A42F77E3210'
    },
    {
      name: 'Oracle Cloud Infrastructure 2024 Certified AI Foundations Associate',
      issuer: 'Oracle',
      year: '2024',
      badgeUrl: 'https://brm-workforce.oracle.com/pdf/certview/images/OCI24AICFA.png',
      verifyUrl: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=A86DECC8580566653241403169735BB4DA1DED57A77B26FCA571F4A832FCD855'
    },
    {
      name: 'AWS re/Start Graduate',
      issuer: 'Amazon Web Services',
      year: '2024',
      badgeUrl: 'https://images.credly.com/images/44e2c252-5d19-4574-9646-005f7225bf53/image.png',
      verifyUrl: 'https://www.credly.com/users/muna-bhattarai.5d784bd7/badges'
    },
    {
      name: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      year: '2024',
      badgeUrl: 'https://images.credly.com/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png',
      verifyUrl: 'https://www.credly.com/users/muna-bhattarai.5d784bd7/badges'
    }
  ]

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Cloud Engineering & DevOps Excellence
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            AWS-focused expertise in Cloud Engineering, DevOps, GenAI, and Backend Development with proven leadership in building scalable solutions
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl blur-xl"
                   style={{backgroundImage: `linear-gradient(135deg, ${category.color.split(' ')[1]}, ${category.color.split(' ')[3]})`}}></div>
              
              <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 h-full hover:border-slate-600/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} mb-4`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors">
                  {category.title}
                </h3>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-sm hover:bg-slate-600/50 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Areas of Expertise */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Areas of Expertise
            </span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertise.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/30 rounded-xl p-6 h-full hover:border-slate-600/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className={`w-full h-1 bg-gradient-to-r ${area.color} rounded-full mb-4`}></div>
                  <h4 className="text-lg font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors">
                    {area.title}
                  </h4>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {area.description}
                  </p>
                </div>
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
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Professional Certifications
            </span>
          </h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
            {certifications.map((cert, index) => (
              <motion.div
                key={`${cert.name}-${cert.year}`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open(cert.verifyUrl, '_blank')}
              >
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 text-center hover:border-slate-600/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                  <div className="w-24 h-24 mx-auto mb-4 bg-white rounded-lg p-2 shadow-lg group-hover:shadow-xl group-hover:shadow-blue-500/20 transition-all duration-300">
                    <img 
                      src={cert.badgeUrl} 
                      alt={`${cert.name} badge`}
                      className="w-full h-full object-contain rounded-lg shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.src = '/badges/placeholder-badge.svg';
                      }}
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
                href="https://www.credly.com/users/muna-bhattarai.5d784bd7/badges"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-200"
              >
                <Target className="w-5 h-5" />
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
                <Database className="w-5 h-5" />
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
