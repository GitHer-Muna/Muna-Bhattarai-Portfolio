'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Calendar, Eye, ExternalLink, BookOpen, TrendingUp } from 'lucide-react'
import Blog3D from './Blog3D'

const Blog = () => {
  const blogPosts = [
    {
      title: "AWS Reinvent Recap: My Journey & Key Highlights on GenAI, Analytics, Machine Learning",
      excerpt: "My experience at AWS re:Invent covering the latest in Generative AI, Analytics, and Machine Learning innovations.",
      date: "Dec 28, 2024",
      readTime: "8 min read",
      category: "AWS",
      url: "https://medium.com/@munashree/highlights-from-aws-re-invent-2024-on-genai-analytics-machine-learning-and-developer-tools-3af212550840",
      featured: true,
      tags: ["AWS", "GenAI", "Machine Learning", "re:Invent"],
      thumbnail: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*_Z4uew0OzfX2ODy_s5EH4w.jpeg"
    },
    {
      title: "How I Built My AWS Learning Advisor App with PartyRock, an Amazon Bedrock Playground",
      excerpt: "A step-by-step guide to building an AI-powered learning advisor application using Amazon Bedrock and PartyRock.",
      date: "Dec 26, 2024",
      readTime: "12 min read",
      category: "AI/ML",
      url: "https://medium.com/@munashree/aws-re-start-program-transforming-non-tech-backgrounds-into-tech-careers-51e87cb4d877",
      featured: true,
      tags: ["Amazon Bedrock", "PartyRock", "AI", "AWS"],
      thumbnail: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*dtXryEEEHVTBgebOq8Fpyg.png"
    },
    {
      title: "Amazon Q in Action: Highlights from AWS User Group Women in Tech Nepal",
      excerpt: "Sharing insights from my session at the AWS User Group Women in Tech Nepal's 2nd All-Girls Meetup.",
      date: "Dec 27, 2024",
      readTime: "6 min read",
      category: "Community",
      url: "https://medium.com/@munashree/aws-builder-id-empowering-aws-enthusiasts-bd8ca070fc60",
      featured: false,
      tags: ["Amazon Q", "Community", "Women in Tech", "Speaking"],
      thumbnail: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*NEb40CJ4O9uJAOUT-MdIEg.jpeg"
    },
    {
      title: "My Journey of Empowering Women with AWS User Group Women in Tech Nepal",
      excerpt: "The story of our first All-Girls Meetup and the importance of diversity in technology innovation.",
      date: "Dec 26, 2024",
      readTime: "7 min read",
      category: "Community",
      url: "https://medium.com/@munashree/aws-organizations-for-beginners-fddffb1337c9",
      featured: false,
      tags: ["Women in Tech", "Community Building", "AWS", "Leadership"],
      thumbnail: "	https://miro.medium.com/v2/resize:fit:1100/format:webp/1*GuyNQMhKh0lNG9YJhuzQqg.png"
    },
    {
      title: "How to Add Microsoft SharePoint as a Data Source in Amazon Bedrock Knowledge Base",
      excerpt: "A technical guide to integrating Microsoft SharePoint with Amazon Bedrock for AI-driven applications.",
      date: "Jan 26, 2025",
      readTime: "10 min read",
      category: "Technical",
      url: "https://medium.com/@munashree/how-to-add-microsoft-sharepoint-as-a-data-source-in-amazon-bedrock-knowledge-base-07c22981873c",
      featured: true,
      tags: ["Amazon Bedrock", "SharePoint", "Knowledge Base", "Integration"],
      thumbnail: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*E6qRxLJfl-Uk-n5RI10P1w.png"
    },
    {
      title: "The New AWS Builder ID: Empowering AWS Enthusiasts",
      excerpt: "Exploring AWS Builder ID and its impact on the AWS community and cloud enthusiasts worldwide.",
      date: "Jan 3, 2025",
      readTime: "5 min read",
      category: "AWS",
      url: "https://medium.com/@munashree/aws-d87456da54ab",
      featured: false,
      tags: ["AWS Builder ID", "Community", "AWS", "Cloud Computing"],
      thumbnail: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*WhmH94b36aqrU7N4PkqQgg.png"
    }
  ]

  const categories = ["All", "AWS", "AI/ML", "Community", "Technical"]
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory)

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'AWS':
        return 'from-orange-500 to-orange-600'
      case 'AI/ML':
        return 'from-purple-500 to-purple-600'
      case 'Community':
        return 'from-pink-500 to-pink-600'
      case 'Technical':
        return 'from-blue-500 to-blue-600'
      default:
        return 'from-gray-500 to-gray-600'
    }
  }

  return (
    <section id="blog" className="py-20 relative overflow-hidden">
      {/* Enhanced 3D Background */}
      <Blog3D />
      
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
      <div className="absolute top-40 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-40 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl" />

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
            Latest <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Blog Posts</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-8" />
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Sharing insights on cloud computing, AI/ML, community building, and technical innovations
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                  : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 border border-slate-600/50'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Featured Posts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-semibold text-white mb-8 flex items-center">
            <TrendingUp className="w-6 h-6 text-blue-400 mr-3" />
            Featured Articles
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredPosts.filter(post => post.featured).slice(0, 2).map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden hover:border-slate-600/50 transition-all duration-300 group"
              >
                {/* Thumbnail Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.thumbnail} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = 'https://via.placeholder.com/800x400/1f2937/60a5fa?text=Blog+Post';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
                  <span className={`absolute top-4 left-4 px-3 py-1 bg-gradient-to-r ${getCategoryColor(post.category)} rounded-full text-white text-sm font-medium`}>
                    {post.category}
                  </span>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-slate-400 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center text-slate-400 text-sm">
                      <Eye className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h4>
                  
                  <p className="text-slate-300 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <motion.a
                      href={post.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-500/20 text-blue-300 rounded-lg hover:bg-blue-500/30 transition-all duration-200 border border-blue-500/30"
                    >
                      <span>Read More</span>
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-slate-700/50 text-slate-400 text-xs rounded border border-slate-600/50"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* All Posts Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-white mb-8 flex items-center">
            <BookOpen className="w-6 h-6 text-purple-400 mr-3" />
            All Articles
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden hover:border-slate-600/50 transition-all duration-300 group"
              >
                {/* Thumbnail Image */}
                <div className="relative h-40 overflow-hidden">
                  <img 
                    src={post.thumbnail} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = 'https://via.placeholder.com/600x300/1f2937/60a5fa?text=Blog+Post';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className={`px-2 py-1 bg-gradient-to-r ${getCategoryColor(post.category)} rounded-full text-white text-xs font-medium`}>
                      {post.category}
                    </span>
                    {post.featured && (
                      <span className="px-2 py-1 bg-yellow-500/90 text-yellow-100 rounded-full text-xs font-medium">
                        Featured
                      </span>
                    )}
                  </div>
                </div>

                <div className="p-6">
                  <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors line-clamp-2">
                    {post.title}
                  </h4>
                  
                  <p className="text-slate-300 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-4">
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <Eye className="w-3 h-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <motion.a
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center space-x-2 w-full justify-center px-4 py-2 bg-slate-700/50 text-slate-300 rounded-lg hover:bg-slate-600/50 transition-all duration-200 border border-slate-600/50 hover:border-slate-500/50"
                  >
                    <span>Read Article</span>
                    <ExternalLink className="w-3 h-3" />
                  </motion.a>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 max-w-2xl mx-auto">
            <BookOpen className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-white mb-4">Stay Updated</h3>
            <p className="text-slate-300 mb-6">
              Follow me on Medium for the latest insights on cloud computing, AI/ML, and community building.
            </p>
            <motion.a
              href="https://medium.com/@munashree"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-green-500/25 transition-all duration-200"
            >
              <span>Follow on Medium</span>
              <ExternalLink className="w-4 h-4" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Blog
