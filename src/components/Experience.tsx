'use client'

import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react'
import Experience3D from './Experience3D'

const Experience = () => {
  const experiences = [
    {
      company: 'Mentor Me Collective',
      position: 'Google Cloud Learning Path Scholar | Track Lead',
      location: 'Remote',
      period: 'June 2025 – Present',
      description: [
        'Led weekly discussions for APAC region scholars in the Google Cloud Launchpad program',
        'Hosted office hours to address individual learning needs and support scholar success',
        'Collaborated with fellow Track Leads on attendance tracking and meeting management',
        'Maintained meeting minutes and submitted weekly reports, achieving a 90% attendance rate'
      ],
      technologies: ['Google Cloud', 'Leadership', 'Program Management', 'Cloud Architecture'],
      type: 'leadership'
    },
    {
      company: 'Fusemachines',
      position: 'AI Fellow | AI Fellowship Program',
      location: 'Remote',
      period: 'April 2025 – Present',
      description: [
        'Selected among 3000+ applicants for highly competitive AI Fellowship with full scholarship',
        'Upskilling in Machine learning, Deep learning, Data Science, and real-world AI applications',
        'Working on independent and group projects focusing on data cleaning, analysis, AI modeling',
        'Practical AI deployments through expert-led lectures and hands-on projects'
      ],
      technologies: ['Machine Learning', 'Deep Learning', 'Data Science', 'Python', 'AI Modeling'],
      type: 'fellowship'
    },
    {
      company: 'PMsquare Nepal',
      position: 'Associate | Cloud Engineer',
      location: 'Kathmandu, Nepal',
      period: 'Mar 2024 – Dec 2024',
      description: [
        'Designed and deployed Serverless Architecture for scalable Generative AI applications using AWS Lambda, API Gateway, DynamoDB, and Amazon Bedrock',
        'Implemented Retrieval-Augmented Generation (RAG) pipelines dynamically retrieving knowledge from Microsoft SharePoint and Amazon S3',
        'Enhanced chatbot capabilities with Chat History, Dynamic Title Generation, and Context-Aware responses',
        'Automated cloud infrastructure provisioning with AWS CloudFormation, reducing manual errors by ~40%',
        'Administered and secured AWS Accounts managing user access, permissions, and security policies using IAM Identity Center'
      ],
      technologies: ['AWS Lambda', 'Amazon Bedrock', 'DynamoDB', 'API Gateway', 'RAG', 'CloudFormation', 'GitHub Actions'],
      type: 'full-time'
    },
    {
      company: 'Azubi Africa',
      position: 'Apprenticeship | Cloud Practitioner',
      location: 'Remote',
      period: 'Jan 2024 – April 2024',
      description: [
        'Completed full-time, 12-week training program covering IT fundamentals, AWS Cloud, and professional development',
        'Achieved AWS Certified Cloud Practitioner certification and AWS re/Start graduate badge',
        'Gained hands-on experience in core AWS services like EC2, S3, IAM, VPC, Lambda, CloudFormation, RDS, Route 53',
        'Participated in intensive practical labs and real-world cloud scenarios'
      ],
      technologies: ['AWS', 'EC2', 'S3', 'IAM', 'VPC', 'Lambda', 'CloudFormation', 'RDS'],
      type: 'apprenticeship'
    },
    {
      company: 'SB Solutions Pvt. Ltd',
      position: 'Internship | Angular/Java Developer',
      location: 'Kathmandu, Nepal',
      period: 'October 2022 – Jan 2023',
      description: [
        'Contributed to frontend development of Loan Automation System using Angular',
        'Wrote complex SQL and MySQL queries to generate Jasper Reports for accurate data retrieval',
        'Created stored procedures optimizing data retrieval and improving reporting efficiency',
        'Integrated Jasper Reports into the Loan Automation System through Java-based backend development'
      ],
      technologies: ['Angular', 'Java', 'MySQL', 'SQL', 'Jasper Reports', 'Backend Development'],
      type: 'internship'
    }
  ]

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'full-time':
        return 'from-blue-500 to-cyan-500'
      case 'leadership':
        return 'from-purple-500 to-pink-500'
      case 'fellowship':
        return 'from-green-500 to-emerald-500'
      case 'apprenticeship':
        return 'from-orange-500 to-red-500'
      case 'internship':
        return 'from-yellow-500 to-orange-500'
      default:
        return 'from-gray-500 to-slate-500'
    }
  }

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'full-time':
        return 'Full-time'
      case 'leadership':
        return 'Leadership'
      case 'fellowship':
        return 'Fellowship'
      case 'apprenticeship':
        return 'Apprenticeship'
      case 'internship':
        return 'Internship'
      default:
        return 'Other'
    }
  }

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* 3D Background */}
      <Experience3D />
      
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
      <div className="absolute top-40 left-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-20 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl" />

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
            Professional <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Journey</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-8" />
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Building expertise through diverse roles in cloud computing, community leadership, and technical innovation
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-0.5 w-0.5 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-slate-900 z-10" />

              {/* Content card */}
              <div className={`ml-20 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-slate-800/70 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-slate-600/50 transition-all duration-300"
                >
                  {/* Company and type badge */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1">{exp.company}</h3>
                      <p className="text-lg text-blue-400 font-medium">{exp.position}</p>
                    </div>
                    <div className={`px-3 py-1 bg-gradient-to-r ${getTypeColor(exp.type)} bg-opacity-20 border border-current rounded-full`}>
                      <span className="text-xs font-medium text-white">{getTypeLabel(exp.type)}</span>
                    </div>
                  </div>

                  {/* Period and location */}
                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-slate-400">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-slate-300 text-sm flex items-start space-x-2">
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded border border-slate-600/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Major Achievements & Awards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 mb-16"
        >
          <h3 className="text-3xl font-heading font-bold text-white text-center mb-4">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Major Achievements & Awards</span>
          </h3>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            Recognized globally for excellence in cloud computing, AI innovation, and community leadership
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Mentor Me Collective x Grow with Google Scholarship Program - Fall 2025 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-500/10 to-green-500/10 backdrop-blur-sm p-6 rounded-xl border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-2 right-2 w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                <span className="text-blue-400 text-lg">📚</span>
              </div>
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h5 className="text-white font-semibold text-lg">Mentor Me Collective x Grow with Google Scholarship Program</h5>
                  <span className="text-blue-400 text-sm font-medium">Fall 2025 Cohort</span>
                </div>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">Prestigious scholarship for Google Professional Certificates</p>
              <div className="mt-4 flex items-center text-xs text-blue-400">
                <span className="bg-blue-500/20 px-2 py-1 rounded-full">Scholarship</span>
              </div>
            </motion.div>

            {/* Dan Kohn Scholar - 2025 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-500/10 to-indigo-500/10 backdrop-blur-sm p-6 rounded-xl border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-2 right-2 w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center">
                <span className="text-purple-400 text-lg">☸️</span>
              </div>
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h5 className="text-white font-semibold text-lg">Dan Kohn Scholar</h5>
                  <span className="text-purple-400 text-sm font-medium">KubeCon India • 2025</span>
                </div>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">Awarded a scholarship to attend KubeCon<br />+ CloudNativeCon India 2025, happening at the Hyderabad International Convention Center (HICC) on August<br />6th & 7th.</p>
              <div className="mt-4 flex items-center text-xs text-purple-400">
                <span className="bg-purple-500/20 px-2 py-1 rounded-full">Kubernetes</span>
              </div>
            </motion.div>

            {/* Google Cloud Launchpad Scholar - 2025 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm p-6 rounded-xl border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-2 right-2 w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                <span className="text-blue-400 text-lg">🚀</span>
              </div>
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h5 className="text-white font-semibold text-lg">Google Cloud Launchpad Scholar</h5>
                  <span className="text-blue-400 text-sm font-medium">Cloud Engineering • 2025</span>
                </div>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">Elite cloud infrastructure & DevOps program</p>
              <div className="mt-4 flex items-center text-xs text-blue-400">
                <span className="bg-blue-500/20 px-2 py-1 rounded-full">Competitive</span>
              </div>
            </motion.div>

            {/* AWS Community Builder - 2025 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-orange-500/10 to-yellow-500/10 backdrop-blur-sm p-6 rounded-xl border border-orange-500/30 hover:border-orange-400/50 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-2 right-2 w-8 h-8 bg-orange-500/20 rounded-full flex items-center justify-center">
                <span className="text-orange-400 text-lg">🏆</span>
              </div>
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h5 className="text-white font-semibold text-lg">AWS Community Builder</h5>
                  <span className="text-orange-400 text-sm font-medium">AI-Engineering • 2025</span>
                </div>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">Global recognition for AWS expertise & community contributions</p>
              <div className="mt-4 flex items-center text-xs text-orange-400">
                <span className="bg-orange-500/20 px-2 py-1 rounded-full">Cloud Computing</span>
              </div>
            </motion.div>

            {/* AWS All Builders Welcome Grant - 2024 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-yellow-500/10 to-amber-500/10 backdrop-blur-sm p-6 rounded-xl border border-yellow-500/30 hover:border-yellow-400/50 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-2 right-2 w-8 h-8 bg-yellow-500/20 rounded-full flex items-center justify-center">
                <span className="text-yellow-400 text-lg">🎫</span>
              </div>
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h5 className="text-white font-semibold text-lg">AWS All Builders Welcome Grant</h5>
                  <span className="text-yellow-400 text-sm font-medium">re:Invent Las Vegas • 2024</span>
                </div>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">All expenses paid to world's largest cloud conference</p>
              <div className="mt-4 flex items-center text-xs text-yellow-400">
                <span className="bg-yellow-500/20 px-2 py-1 rounded-full">$15K+ Value</span>
              </div>
            </motion.div>

            {/* AWS AI/ML Scholar - 2024 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 backdrop-blur-sm p-6 rounded-xl border border-emerald-500/30 hover:border-emerald-400/50 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-2 right-2 w-8 h-8 bg-emerald-500/20 rounded-full flex items-center justify-center">
                <span className="text-emerald-400 text-lg">🤖</span>
              </div>
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h5 className="text-white font-semibold text-lg">AWS AI/ML Scholar</h5>
                  <span className="text-emerald-400 text-sm font-medium">Udacity • 2024</span>
                </div>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">Advanced AI/ML Nanodegree with expert mentorship</p>
              <div className="mt-4 flex items-center text-xs text-emerald-400">
                <span className="bg-emerald-500/20 px-2 py-1 rounded-full">AI/ML</span>
              </div>
            </motion.div>

            {/* Microsoft Learn Student Ambassador - 2023 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm p-6 rounded-xl border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-2 right-2 w-8 h-8 bg-cyan-500/20 rounded-full flex items-center justify-center">
                <span className="text-cyan-400 text-lg">🎓</span>
              </div>
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h5 className="text-white font-semibold text-lg">Microsoft Learn Student Ambassador</h5>
                  <span className="text-cyan-400 text-sm font-medium">Community Leadership • 2023</span>
                </div>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">Promoting Microsoft technologies & engaging tech community</p>
              <div className="mt-4 flex items-center text-xs text-cyan-400">
                <span className="bg-cyan-500/20 px-2 py-1 rounded-full">Microsoft</span>
              </div>
            </motion.div>

            {/* GitHub Campus Expert - 2023 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-500/10 to-gray-500/10 backdrop-blur-sm p-6 rounded-xl border border-slate-500/30 hover:border-slate-400/50 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-2 right-2 w-8 h-8 bg-slate-500/20 rounded-full flex items-center justify-center">
                <span className="text-slate-400 text-lg">🚩</span>
              </div>
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h5 className="text-white font-semibold text-lg">GitHub Campus Expert</h5>
                  <span className="text-slate-400 text-sm font-medium">Community Leader • 2023</span>
                </div>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">Organizing tech events & fostering inclusive communities</p>
              <div className="mt-4 flex items-center text-xs text-slate-400">
                <span className="bg-slate-500/20 px-2 py-1 rounded-full">GitHub Education</span>
              </div>
            </motion.div>

            {/* Hult Prize On Campus Winner - 2022 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-pink-500/10 to-rose-500/10 backdrop-blur-sm p-6 rounded-xl border border-pink-500/30 hover:border-pink-400/50 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-2 right-2 w-8 h-8 bg-pink-500/20 rounded-full flex items-center justify-center">
                <span className="text-pink-400 text-lg">🥇</span>
              </div>
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h5 className="text-white font-semibold text-lg">Hult Prize On Campus Winner</h5>
                  <span className="text-pink-400 text-sm font-medium">Social Impact • 2022</span>
                </div>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">Global entrepreneurship competition victory</p>
              <div className="mt-4 flex items-center text-xs text-pink-400">
                <span className="bg-pink-500/20 px-2 py-1 rounded-full">Impact</span>
              </div>
            </motion.div>

            {/* Hult Prize Regional Summit Representative - 2022 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-rose-500/10 to-pink-500/10 backdrop-blur-sm p-6 rounded-xl border border-rose-500/30 hover:border-rose-400/50 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-2 right-2 w-8 h-8 bg-rose-500/20 rounded-full flex items-center justify-center">
                <span className="text-rose-400 text-lg">🌍</span>
              </div>
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h5 className="text-white font-semibold text-lg">Hult Prize Regional Summit Representative</h5>
                  <span className="text-rose-400 text-sm font-medium">Dhaka, Bangladesh • 2022</span>
                </div>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">Represented LBEF Campus at the Hult Prize Regional Summit, engaging with global changemakers and advancing social entrepreneurship.</p>
              <div className="mt-4 flex items-center text-xs text-rose-400">
                <span className="bg-rose-500/20 px-2 py-1 rounded-full">Global Impact</span>
              </div>
            </motion.div>

            {/* National ICT Scholarship - 2020 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm p-6 rounded-xl border border-green-500/30 hover:border-green-400/50 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-2 right-2 w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                <span className="text-green-400 text-lg">🎓</span>
              </div>
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h5 className="text-white font-semibold text-lg">National ICT Scholarship</h5>
                  <span className="text-green-400 text-sm font-medium">CAN Federation • 2020</span>
                </div>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">Fully funded scholarship for B.Sc.(Hons) IT degree</p>
              <div className="mt-4 flex items-center text-xs text-green-400">
                <span className="bg-green-500/20 px-2 py-1 rounded-full">Full Funding</span>
              </div>
            </motion.div>
          </div>

          {/* Summary */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-2 px-6 py-3 bg-slate-800/50 text-slate-300 rounded-lg border border-slate-600/50">
              <span className="text-yellow-400">🏆</span>
              <span>11 Major achievements spanning cloud computing, AI/ML, and community leadership</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
