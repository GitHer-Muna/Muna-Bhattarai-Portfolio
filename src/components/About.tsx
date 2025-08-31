'use client'

import { motion } from 'framer-motion'
import { Heart, Users, Cloud, Code, Award, Sparkles } from 'lucide-react'

const About = () => {
  const passions = [
    {
      icon: Cloud,
      title: 'Cloud Computing',
      description: 'Passionate about AWS services, cloud architecture, and helping organizations scale efficiently.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Users,
      title: 'Community Building',
      description: 'Building and nurturing tech communities, especially for underrepresented groups in technology.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Heart,
      title: 'Women in Tech',
      description: 'Advocating for diversity and inclusion, mentoring women entering the tech industry.',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: Code,
      title: 'Technology Innovation',
      description: 'Exploring cutting-edge technologies and their practical applications in solving real-world problems.',
      color: 'from-green-500 to-emerald-500'
    }
  ]

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-slate-900/50" />
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl" />

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
            About <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-8" />
        </motion.div>

        {/* Professional Picture and Introduction */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Professional Picture */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="w-80 h-80 relative">
                {/* Gradient border */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full p-1">
                  <div className="w-full h-full bg-slate-900 rounded-full p-2">
                    <img
                      src="/Professional-picture.jpg"
                      alt="Muna Bhattarai - Professional Photo"
                      className="w-full h-full object-cover rounded-full"
                      onError={(e) => {
                        // Fallback if image doesn't exist
                        e.currentTarget.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='320' height='320' viewBox='0 0 320 320'%3E%3Crect width='320' height='320' fill='%23374151'/%3E%3Ctext x='50%25' y='50%25' font-size='16' fill='%23e5e7eb' text-anchor='middle' dominant-baseline='middle'%3EProfessional Photo Coming Soon%3C/text%3E%3C/svg%3E`
                      }}
                    />
                  </div>
                </div>
                
                {/* Floating elements around the image */}
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg"
                >
                  <Cloud className="w-8 h-8 text-white" />
                </motion.div>
                
                <motion.div
                  animate={{ 
                    y: [0, 10, 0],
                    rotate: [0, -5, 5, 0]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                  className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg"
                >
                  <Code className="w-6 h-6 text-white" />
                </motion.div>
                
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ 
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute top-1/2 -left-8 w-10 h-10 bg-gradient-to-r from-emerald-500 to-green-500 rounded-lg flex items-center justify-center shadow-lg"
                >
                  <Award className="w-5 h-5 text-white" />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Introduction Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4 text-slate-300 text-lg leading-relaxed">
              <p>
                Hello! I'm <span className="text-white font-semibold">Muna Bhattarai</span>, an{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent font-semibold">AWS Community Builder</span> and{' '}
                <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent font-semibold">Women in Tech advocate</span>{' '}
                based in Kathmandu, Nepal.
              </p>
              
              <p>
                As a passionate <span className="text-emerald-400 font-medium">Cloud Engineer</span> and{' '}
                <span className="text-cyan-400 font-medium">community builder</span>, I've mentored{' '}
                <span className="text-yellow-400 font-medium">500+ students</span>, organized{' '}
                <span className="text-green-400 font-medium">20+ tech events</span>, and delivered{' '}
                <span className="text-pink-400 font-medium">25+ talks</span> while holding leadership roles as{' '}
                <span className="text-purple-400 font-medium">AWS Community Builder</span>,{' '}
                <span className="text-blue-400 font-medium">Communication Coordinator of AWS User Group Women in Tech Nepal</span>,{' '}
                <span className="text-emerald-400 font-medium">GitHub Campus Expert</span> and{' '}
                <span className="text-orange-400 font-medium">Microsoft Learn Student Ambassador</span>.
              </p>
              
              <p>
                I'm a <span className="text-cyan-400 font-medium">multi-cloud enthusiast</span> with{' '}
                hands-on experience in <span className="text-emerald-400 font-medium">cloud engineering</span>,{' '}
                <span className="text-orange-400 font-medium">DevOps</span>, and{' '}
                <span className="text-purple-400 font-medium">GenAI implementations</span>. Currently exploring{' '}
                <span className="text-blue-400 font-medium">Kubernetes</span>,{' '}
                <span className="text-yellow-400 font-medium">Terraform</span>, and{' '}
                <span className="text-pink-400 font-medium">GitOps workflows</span>.
              </p>
            </div>

            {/* Key competencies - simplified */}
            <div className="flex flex-wrap gap-2 pt-6">
              {['Community Builder', 'Public Speaker', 'Mentor', 'Tech Advocate'].map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-sm border border-slate-600/30"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* What I'm passionate about */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {passions.map((passion, index) => (
            <motion.div
              key={passion.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:border-slate-600/80 transition-all duration-300"
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${passion.color} rounded-lg flex items-center justify-center mb-4`}>
                <passion.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-3">{passion.title}</h3>
              <p className="text-slate-300 text-sm leading-relaxed">{passion.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
