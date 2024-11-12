import React from 'react';
import { Github, Linkedin, Mail, Code2, Briefcase, GraduationCap, ChevronDown } from 'lucide-react';
import ProjectCard from './components/ProjectCard';
import SkillBadge from './components/SkillBadge';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center justify-center p-8">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20" />
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                Sylvia Barick
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-300">
                Full Stack Developer & Student
              </h2>
              <p className="text-lg text-gray-400 max-w-xl">
                Passionate full-stack developer currently pursuing my degree while building
                impactful web applications. Specialized in React, Node.js, and modern web technologies.
              </p>
              <div className="flex gap-4">
                <a href="#contact" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition">
                  Contact Me
                </a>
                <a href="#projects" className="px-6 py-3 border border-gray-700 hover:border-blue-500 rounded-lg transition">
                  View Work
                </a>
              </div>
              <div className="flex gap-4 text-gray-400">
                <a href="https://github.com" className="hover:text-blue-400 transition">
                  <Github size={24} />
                </a>
                <a href="https://linkedin.com" className="hover:text-blue-400 transition">
                  <Linkedin size={24} />
                </a>
                <a href="mailto:sylvia.barick@example.com" className="hover:text-blue-400 transition">
                  <Mail size={24} />
                </a>
              </div>
            </div>
            <div className="flex-1">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=500&fit=crop"
                alt="Profile"
                className="rounded-full w-64 h-64 object-cover border-4 border-blue-600/30"
              />
            </div>
          </div>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown size={32} className="text-gray-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800/50">
        <div className="container mx-auto max-w-5xl px-8">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-2">
            <Code2 className="text-blue-400" /> About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-blue-400">Background</h3>
              <p className="text-gray-300">
                As a computer science student and self-driven developer, I combine academic
                knowledge with hands-on experience in building real-world applications.
                I'm passionate about creating intuitive user experiences and robust
                backend solutions using modern technologies.
              </p>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-blue-400 mb-4 flex items-center gap-2">
                  <GraduationCap className="text-blue-400" /> Education
                </h3>
                <div className="border-l-2 border-blue-600 pl-4">
                  <h4 className="font-semibold">Computer Science</h4>
                  <p className="text-gray-400">Currently Pursuing</p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-400 mb-4 flex items-center gap-2">
                  <Briefcase className="text-blue-400" /> Experience
                </h3>
                <div className="border-l-2 border-blue-600 pl-4">
                  <h4 className="font-semibold">Freelance Full Stack Developer</h4>
                  <p className="text-gray-400">Building web applications and gaining hands-on experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="container mx-auto max-w-5xl px-8">
          <h2 className="text-3xl font-bold mb-12">Technical Skills</h2>
          <div className="flex flex-wrap gap-3">
            <SkillBadge name="React" level={85} />
            <SkillBadge name="HTML/CSS" level={90} />
            <SkillBadge name="JavaScript" level={85} />
            <SkillBadge name="Node.js" level={80} />
            <SkillBadge name="AWS" level={75} />
            <SkillBadge name="Docker" level={70} />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-800/50">
        <div className="container mx-auto max-w-5xl px-8">
          <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <ProjectCard
              title="Tourism Website"
              description="A comprehensive tourism platform showcasing destinations, activities, and booking capabilities."
              image="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500"
              tags={['HTML', 'CSS', 'JavaScript']}
              link="file:///D:/HTML/Tourism.html"
            />
            <ProjectCard
              title="Alumni Network"
              description="A social platform connecting alumni, featuring profiles, events, and networking opportunities."
              image="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=500"
              tags={['React', 'Node.js', 'MongoDB']}
              link="file:///D:/ALUMINI%20NEW%20FINAL/alumniremastered/login.html"
            />
            <ProjectCard
              title="Amazon Clone"
              description="A fully functional e-commerce platform replicating core Amazon features."
              image="https://images.unsplash.com/photo-1565461133566-e35e9e120d5f?w=500"
              tags={['React', 'CSS', 'JavaScript']}
              link="file:///D:/css/amazon_clone/a1.html"
            />
            <ProjectCard
              title="Tic Tac Toe"
              description="An interactive game with modern UI and multiplayer capabilities."
              image="https://images.unsplash.com/photo-1611996575749-79a3a250f948?w=500"
              tags={['HTML', 'CSS', 'JavaScript']}
              link="file:///D:/Tic-Tac-Toe/index.html"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto max-w-5xl px-8">
          <h2 className="text-3xl font-bold mb-12">Get in Touch</h2>
          <div className="bg-gray-800/50 p-8 rounded-lg max-w-2xl mx-auto">
            <form className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800">
        <div className="container mx-auto max-w-5xl px-8">
          <div className="flex justify-between items-center">
            <p className="text-gray-400">© 2024 Sylvia Barick. All rights reserved.</p>
            <div className="flex gap-4 text-gray-400">
              <a href="#" className="hover:text-blue-400 transition">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-blue-400 transition">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;