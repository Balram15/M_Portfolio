import React from 'react';
import { Brain, Rocket, Mail, Github, Linkedin, FileDown, GraduationCap, Code, Award, Briefcase } from 'lucide-react';

function App() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-gray-900/80 backdrop-blur-sm z-50">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Brain className="w-6 h-6 text-blue-400" />
              <span className="font-semibold">Bal Ram</span>
            </div>
            <div className="flex space-x-8">
              <a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors">About</a>
              <a href="#experience" className="text-gray-300 hover:text-blue-400 transition-colors">Experience</a>
              <a href="#skills" className="text-gray-300 hover:text-blue-400 transition-colors">Skills</a>
              <a href="#projects" className="text-gray-300 hover:text-blue-400 transition-colors">Projects</a>
              <a href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="container max-w-6xl">
          <div className="flex items-center space-x-4 mb-8 animate-fade-in">
            <Brain className="w-16 h-16 text-blue-400" />
            <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Bal Ram Reddy Tekmal
            </h1>
          </div>
          <p className="text-2xl text-gray-300 mt-6 max-w-2xl animate-fade-in-delay">
            AI & Machine Learning Engineer
          </p>
          <div className="flex flex-wrap gap-4 mt-8 animate-fade-in-delay-2">
            <a href="mailto:your.email@example.com" className="flex items-center space-x-2 bg-gray-700/30 hover:bg-blue-500/20 transition-colors rounded-full px-6 py-3">
              <Mail className="w-5 h-5" />
              <span>Contact Me</span>
            </a>
            <button className="flex items-center space-x-2 bg-blue-500/20 hover:bg-blue-500/30 transition-colors rounded-full px-6 py-3">
              <FileDown className="w-5 h-5" />
              <span>Download Resume</span>
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-10 shadow-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
            <h2 className="text-3xl font-bold mb-8 flex items-center">
              <span className="text-blue-400 mr-3">👋</span> About Me
            </h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                I'm a passionate AI and Machine Learning Engineer currently pursuing my Master's in Computer Science at Southeast Missouri State University, USA. With a strong foundation from my Bachelor's at Sreenidhi Institute of Science and Technology, Hyderabad, India, I'm dedicated to pushing the boundaries of artificial intelligence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-gray-900/50">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 flex items-center">
            <Briefcase className="w-8 h-8 text-blue-400 mr-3" />
            Experience
          </h2>
          <div className="space-y-8">
            {/* Add your experience items here */}
            <div className="bg-gray-800/30 rounded-xl p-8 hover:bg-gray-800/50 transition-all">
              <h3 className="text-xl font-semibold text-blue-400">Position Title</h3>
              <p className="text-gray-400 mt-2">Company Name</p>
              <p className="text-gray-500 mb-4">Duration</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Achievement or responsibility 1</li>
                <li>Achievement or responsibility 2</li>
                <li>Achievement or responsibility 3</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 flex items-center">
            <GraduationCap className="w-8 h-8 text-blue-400 mr-3" />
            Education
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800/30 rounded-xl p-8 hover:bg-gray-800/50 transition-all">
              <h3 className="text-xl font-semibold text-blue-400">Master's in Computer Science</h3>
              <p className="text-gray-400 mt-2">Southeast Missouri State University</p>
              <p className="text-gray-500">Missouri, USA</p>
            </div>
            <div className="bg-gray-800/30 rounded-xl p-8 hover:bg-gray-800/50 transition-all">
              <h3 className="text-xl font-semibold text-blue-400">Bachelor's Degree</h3>
              <p className="text-gray-400 mt-2">Sreenidhi Institute of Science and Technology</p>
              <p className="text-gray-500">Hyderabad, India</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-gray-900/50">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 flex items-center">
            <Code className="w-8 h-8 text-blue-400 mr-3" />
            Skills & Expertise
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              'Machine Learning',
              'Deep Learning',
              'Artificial Intelligence',
              'AWS',
              'Python',
              'TensorFlow',
              'PyTorch',
              'Computer Vision',
              'Natural Language Processing',
              'Data Science',
              'SQL',
              'Git'
            ].map((skill) => (
              <div key={skill} className="bg-gray-800/30 rounded-xl p-6 hover:bg-gray-800/50 transition-all">
                <h3 className="text-lg font-medium text-center">{skill}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section id="projects" className="py-20 px-4">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 flex items-center">
            <Rocket className="w-8 h-8 text-blue-400 mr-3" />
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'AI Chatbot',
                description: 'Advanced conversational AI system with natural language processing capabilities.',
                tech: ['Python', 'TensorFlow', 'NLP']
              },
              {
                title: 'Real-time Object Detection',
                description: 'Computer vision system for real-time object detection and tracking.',
                tech: ['PyTorch', 'OpenCV', 'YOLO']
              },
              {
                title: 'Heart Disease Prediction',
                description: 'ML model for predicting heart disease risk using patient data.',
                tech: ['Scikit-learn', 'Pandas', 'ML']
              }
            ].map((project) => (
              <div key={project.title} className="bg-gray-800/30 rounded-xl p-8 hover:bg-gray-800/50 transition-all">
                <h3 className="text-xl font-semibold text-blue-400 mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-sm bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-10 shadow-xl border border-gray-700/50">
            <h2 className="text-3xl font-bold mb-8">Let's Connect</h2>
            <div className="flex flex-wrap gap-4">
              <a href="https://github.com/Balram15" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 bg-gray-700/30 hover:bg-blue-500/20 transition-colors rounded-full px-6 py-3">
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 bg-gray-700/30 hover:bg-blue-500/20 transition-colors rounded-full px-6 py-3">
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
              <a href="mailto:balramreddytekmal@example.com" className="flex items-center space-x-2 bg-gray-700/30 hover:bg-blue-500/20 transition-colors rounded-full px-6 py-3">
                <Mail className="w-5 h-5" />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;