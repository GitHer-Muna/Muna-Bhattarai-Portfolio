'use client'

import { motion } from 'framer-motion'
import { Users, Heart, Award, Calendar, MapPin, ExternalLink, Mic, BookOpen } from 'lucide-react'

const Community = () => {
  const initiatives = [
    {
      title: 'Women in Tech Nepal',
      role: 'Co-Founder & Technical Lead',
      description: 'Building the largest community of women in technology in Nepal, fostering growth, mentorship, and career opportunities.',
      impact: {
        members: '500+',
        events: '30+',
        mentorships: '150+'
      },
      highlights: [
        'Organized Nepal\'s first all-women tech conference',
        'Established mentorship program with 85% success rate',
        'Partnered with 15+ tech companies for job placements',
        'Created scholarship program for women in STEM'
      ],
      color: 'from-pink-500 to-purple-500',
      icon: Heart,
      year: '2020 - Present'
    },
    {
      title: 'AWS Community Builders',
      role: 'Cloud Operations Community Builder',
      description: 'Contributing to the global AWS community through content creation, technical mentorship, and knowledge sharing.',
      impact: {
        articles: '25+',
        talks: '15+',
        mentees: '100+'
      },
      highlights: [
        'Published comprehensive AWS best practices guides',
        'Spoke at AWS re:Invent and regional AWS events',
        'Mentored aspiring cloud professionals globally',
        'Contributed to AWS open-source projects'
      ],
      color: 'from-orange-500 to-red-500',
      icon: Award,
      year: '2021 - Present'
    },
    {
      title: 'Tech Meetups Kathmandu',
      role: 'Organizer & Speaker',
      description: 'Regular organizer and speaker at Kathmandu\'s premier tech meetups, covering cloud computing, DevOps, and emerging technologies.',
      impact: {
        events: '20+',
        attendees: '2000+',
        speakers: '50+'
      },
      highlights: [
        'Monthly cloud computing workshops',
        'DevOps automation masterclasses',
        'Beginner-friendly programming bootcamps',
        'Career guidance and industry panels'
      ],
      color: 'from-blue-500 to-cyan-500',
      icon: Users,
      year: '2019 - Present'
    }
  ]

  const upcomingEvents = [
    {
      title: 'Cloud Computing Fundamentals Workshop',
      date: 'March 15, 2024',
      location: 'Kathmandu, Nepal',
      type: 'Workshop',
      description: 'Hands-on introduction to AWS services for beginners'
    },
    {
      title: 'Women in Tech Leadership Panel',
      date: 'April 8, 2024',
      location: 'Virtual',
      type: 'Panel Discussion',
      description: 'Discussing leadership challenges and opportunities for women in tech'
    },
    {
      title: 'DevOps Best Practices Masterclass',
      date: 'May 20, 2024',
      location: 'Kathmandu, Nepal',
      type: 'Masterclass',
      description: 'Advanced DevOps practices and automation strategies'
    }
  ]

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Software Engineer at TechCorp',
      quote: 'Muna\'s mentorship was instrumental in my transition to cloud engineering. Her guidance and the Women in Tech community provided the support I needed to succeed.',
      image: '💼'
    },
    {
      name: 'Rajesh Thapa',
      role: 'Cloud Architect',
      quote: 'The AWS workshops organized by Muna are incredibly practical and well-structured. I gained hands-on experience that directly helped in my certification journey.',
      image: '☁️'
    },
    {
      name: 'Sunita Koirala',
      role: 'DevOps Engineer',
      quote: 'Through the community events, I found my first job in tech. The networking opportunities and skill-building sessions were game-changers for my career.',
      image: '🚀'
    }
  ]

  return (
    <section id="community" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-slate-900/50" />
      <div className="absolute top-20 right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-32 h-32 bg-pink-500/10 rounded-full blur-3xl" />

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
            Community & <span className="bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">Impact</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-600 mx-auto rounded-full mb-8" />
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Building inclusive tech communities, empowering others through knowledge sharing, and creating opportunities for underrepresented groups in technology
          </p>
        </motion.div>

        {/* Community Initiatives */}
        <div className="space-y-8 mb-16">
          {initiatives.map((initiative, index) => (
            <motion.div
              key={initiative.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 hover:border-slate-600/50 transition-all duration-300"
            >
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Initiative Info */}
                <div className="lg:col-span-2">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className={`w-12 h-12 bg-gradient-to-r ${initiative.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <initiative.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-white mb-2">{initiative.title}</h3>
                      <p className="text-purple-300 font-medium mb-2">{initiative.role}</p>
                      <p className="text-slate-400 text-sm">{initiative.year}</p>
                    </div>
                  </div>
                  
                  <p className="text-slate-300 mb-6 leading-relaxed">{initiative.description}</p>
                  
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Achievements:</h4>
                    {initiative.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-start space-x-2">
                        <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-slate-300 text-sm">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Impact Stats */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-white mb-4">Impact Metrics</h4>
                  {Object.entries(initiative.impact).map(([key, value]) => (
                    <motion.div
                      key={key}
                      whileHover={{ scale: 1.05 }}
                      className="bg-slate-700/50 rounded-lg p-4 border border-slate-600/50"
                    >
                      <div className="text-2xl font-bold text-white mb-1">{value}</div>
                      <div className="text-slate-400 text-sm capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Upcoming Events */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-heading font-bold text-white text-center mb-12">
            Upcoming <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Events</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-slate-600/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                    {event.type === 'Workshop' ? <BookOpen className="w-5 h-5 text-white" /> :
                     event.type === 'Panel Discussion' ? <Mic className="w-5 h-5 text-white" /> :
                     <Users className="w-5 h-5 text-white" />}
                  </div>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs border border-blue-500/30">
                    {event.type}
                  </span>
                </div>
                
                <h4 className="text-lg font-semibold text-white mb-3">{event.title}</h4>
                <p className="text-slate-300 text-sm mb-4">{event.description}</p>
                
                <div className="space-y-2 text-sm text-slate-400">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-heading font-bold text-white text-center mb-12">
            Community <span className="bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">Testimonials</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-slate-600/50 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{testimonial.image}</div>
                <blockquote className="text-slate-300 mb-4 italic">"{testimonial.quote}"</blockquote>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-slate-400 text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 max-w-2xl mx-auto">
            <Users className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-white mb-4">Join Our Community</h3>
            <p className="text-slate-300 mb-6">
              Be part of an inclusive tech community that supports growth, learning, and meaningful connections.
            </p>
            <motion.a
              href="mailto:community@womenintech.np"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-200"
            >
              <span>Get Involved</span>
              <ExternalLink className="w-4 h-4" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Community
