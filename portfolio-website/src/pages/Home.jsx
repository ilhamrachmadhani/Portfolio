import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { personalInfo, projects } from '../data/portfolioData';

const Home = () => {
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 }
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      y: -2,
      transition: { duration: 0.2 }
    },
    tap: {
      scale: 0.95
    }
  };

  const floatingAnimation = {
    y: [-10, 10],
    transition: {
      y: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-blue-50"
    >
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* Text Content */}
            <div className="text-center lg:text-left space-y-6">
              <motion.div variants={itemVariants}>
                <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 text-sm font-semibold rounded-full mb-4">
                  👋 Hello, I'm
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  <span className="text-primary-600">{personalInfo.name.split(' ')[0]}</span>{' '}
                  <span className="text-gray-800">{personalInfo.name.split(' ')[1]}</span>
                </h1>
              </motion.div>

              <motion.h2 
                variants={itemVariants}
                className="text-xl sm:text-2xl text-gray-600 font-medium"
              >
                {personalInfo.title}
              </motion.h2>

              <motion.p 
                variants={itemVariants}
                className="text-gray-600 text-lg leading-relaxed max-w-2xl"
              >
                {personalInfo.bio}
              </motion.p>

              {/* Stats */}
              <motion.div 
                variants={itemVariants}
                className="grid grid-cols-3 gap-6 py-6"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600">3+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600">{projects.length}+</div>
                  <div className="text-sm text-gray-600">Projects Done</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600">100+</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
              </motion.div>

              {/* Action Buttons */}
              <motion.div 
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                  <Link to="/projects" className="btn-primary inline-block">
                    <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    View My Work
                  </Link>
                </motion.div>
                
                <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                  <Link to="/contact" className="btn-secondary inline-block">
                    <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    Let's Talk
                  </Link>
                </motion.div>
              </motion.div>

              {/* Scroll Indicator */}
              <motion.div 
                variants={itemVariants}
                className="hidden lg:flex items-center space-x-2 text-gray-500 mt-8"
              >
                <span className="text-sm">Scroll down to explore</span>
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </motion.div>
              </motion.div>
            </div>

            {/* Profile Image */}
            <div className="relative">
              <motion.div
                variants={imageVariants}
                whileHover="hover"
                className="relative"
              >
                {/* Decorative elements */}
                <motion.div
                  animate={floatingAnimation}
                  className="absolute -top-4 -left-4 w-20 h-20 bg-primary-200 rounded-full opacity-60"
                />
                <motion.div
                  animate={{
                    ...floatingAnimation,
                    transition: {
                      ...floatingAnimation.transition,
                      delay: 0.5
                    }
                  }}
                  className="absolute -bottom-4 -right-4 w-16 h-16 bg-blue-200 rounded-full opacity-60"
                />
                <motion.div
                  animate={{
                    ...floatingAnimation,
                    transition: {
                      ...floatingAnimation.transition,
                      delay: 1
                    }
                  }}
                  className="absolute top-1/2 -right-8 w-12 h-12 bg-purple-200 rounded-full opacity-60"
                />

                {/* Main image */}
                <div className="relative w-80 h-80 mx-auto">
                  <img
                    src={personalInfo.profileImage}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover rounded-full shadow-2xl border-8 border-white"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-primary-600/20 to-transparent" />
                </div>

                {/* Floating badges */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="absolute top-8 -left-8 bg-white p-3 rounded-xl shadow-lg"
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-gray-700">Available for work</span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.3, duration: 0.5 }}
                  className="absolute bottom-8 -right-8 bg-white p-3 rounded-xl shadow-lg"
                >
                  <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    <span className="text-sm font-medium text-gray-700">5.0 Rating</span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What I Do</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore my work and get to know more about my skills and experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Projects",
                description: "Check out my latest work and development projects",
                icon: "🚀",
                link: "/projects",
                color: "from-blue-500 to-primary-600"
              },
              {
                title: "Resume",
                description: "Learn about my experience, education, and skills",
                icon: "📋",
                link: "/resume",
                color: "from-green-500 to-emerald-600"
              },
              {
                title: "Contact",
                description: "Get in touch for collaborations and opportunities",
                icon: "💬",
                link: "/contact",
                color: "from-purple-500 to-pink-600"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Link
                  to={item.link}
                  className="block p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:border-primary-200"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                  <div className="mt-4 flex items-center text-primary-600 group-hover:text-primary-700">
                    <span className="text-sm font-medium">Learn more</span>
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;