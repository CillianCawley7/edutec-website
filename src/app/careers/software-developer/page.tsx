'use client';

import * as React from 'react';
import Navbar from '../../components/NavBar';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function SoftwareDeveloperPage() {
  return (
    <>
      <Navbar />
      
      <main className="min-h-screen text-gray-800 font-sans">
        {/* Hero Section */}
        <section className="text-white py-16 pt-24" style={{background: 'linear-gradient(to right, #00b2e3, #0099c7)'}}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center mb-4">
              <Link href="/careers" className="text-blue-200 hover:text-white mr-2">
                ← Back to Careers
              </Link>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Software Developer</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl">
              Design, code, test, and maintain software applications. Work in teams to build apps, games, or platforms used in education and beyond.
            </p>
            <div className="mt-6">
              <span className="inline-block bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                Career Cluster: STEM
              </span>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-20 px-6 max-w-7xl mx-auto bg-white">
          <h2 className="text-4xl font-bold mb-16 text-center text-gray-800">What you need to know</h2>
          
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-3xl font-semibold mb-6 text-blue-600">Overview</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Software developers are the creative minds behind computer programs. They design, develop, test, and maintain software applications that power everything from mobile apps to enterprise systems. Software developers work in teams to create solutions that solve real-world problems and improve how we work, learn, and communicate.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Creating and improving software involves working with programming languages, frameworks, and development tools. These professionals write clean, efficient code and continuously optimize applications to make them as fast and reliable as possible.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Some specialties in this career include web development, mobile app development, game development, and enterprise software development.
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-semibold mb-6 text-blue-600">What do software developers do?</h3>
              <p className="text-lg text-gray-700 mb-6">
                Most software developers work full time. Some work more than 40 hours per week, especially when approaching project deadlines.
              </p>
              <p className="text-lg text-gray-700 mb-4">Some of the things a software developer might do:</p>
              <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg">
                <li>Analyze user needs and design software solutions to meet those requirements</li>
                <li>Write, test, and debug code using various programming languages</li>
                <li>Collaborate with designers, product managers, and other developers</li>
                <li>Create technical documentation for software applications</li>
                <li>Maintain and update existing software to fix bugs and add features</li>
                <li>Participate in code reviews to ensure quality and consistency</li>
                <li>Stay up-to-date with new programming languages and development tools</li>
                <li>Work with databases to store and retrieve application data</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">What skills are needed?</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-blue-700">Technical Skills</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Programming languages (JavaScript, Python, Java, C#, etc.)</li>
                  <li>• Web technologies (HTML, CSS, React, Angular, Vue)</li>
                  <li>• Database management (SQL, MongoDB, PostgreSQL)</li>
                  <li>• Version control systems (Git, GitHub, GitLab)</li>
                  <li>• Software testing and debugging</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-blue-700">Problem-Solving</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Analytical thinking and logical reasoning</li>
                  <li>• Attention to detail and precision</li>
                  <li>• Creative problem-solving approaches</li>
                  <li>• Ability to break down complex problems</li>
                  <li>• Systematic debugging and troubleshooting</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-blue-700">Soft Skills</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Communication and collaboration</li>
                  <li>• Time management and organization</li>
                  <li>• Continuous learning and adaptability</li>
                  <li>• Teamwork and interpersonal skills</li>
                  <li>• Project management basics</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Salary Section */}
        <section className="py-16 px-6 max-w-6xl mx-auto bg-white">
          <h2 className="text-3xl font-bold mb-8 text-center">What is the pay?</h2>
          
          <div className="bg-green-50 border-l-4 border-green-500 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4 text-green-800">Average Salary</h3>
            <p className="text-3xl font-bold text-green-700 mb-4">€60,000 - €90,000</p>
            <p className="text-lg text-gray-700 mb-4">
              The average pay for software developers in Ireland ranges from €60,000 to €90,000 per year, 
              with senior developers earning significantly more.
            </p>
            <p className="text-lg text-gray-700">
              The specific pay depends on factors such as level of experience, education and training, 
              geographic location, programming languages known, and specific industry.
            </p>
          </div>
        </section>

        {/* Career Outlook Section */}
        <section className="py-16 px-6 bg-blue-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">What is the career outlook?</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-blue-700">Job Growth</h3>
                <p className="text-lg text-gray-700 mb-4">
                  About 2,000 new job openings for software developers are projected each year in Ireland, 
                  with strong growth expected across all sectors.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  Overall employment of software developers is projected to grow 22% from 2023 to 2033, 
                  much faster than the average growth rate for all occupations.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-blue-700">Why the growth?</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• Increasing demand for mobile applications and software</li>
                  <li>• Growing need for cybersecurity solutions</li>
                  <li>• Digital transformation across all industries</li>
                  <li>• Emergence of new technologies (AI, IoT, blockchain)</li>
                  <li>• Remote work opportunities expanding globally</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="py-16 px-6 max-w-6xl mx-auto bg-white">
          <h2 className="text-3xl font-bold mb-8 text-center">What education is required?</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-700">Educational Pathways</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h4 className="text-xl font-semibold text-gray-800">Bachelor's Degree (Most Common)</h4>
                  <p className="text-gray-700 mt-2">
                    Computer Science, Software Engineering, or Information Technology. 
                    Usually takes 3-4 years and provides strong foundation in programming and software development.
                  </p>
                </div>
                
                <div className="border-l-4 border-green-500 pl-6">
                  <h4 className="text-xl font-semibold text-gray-800">Bootcamps & Certifications</h4>
                  <p className="text-gray-700 mt-2">
                    Intensive 3-6 month programs focusing on practical skills. 
                    Great for career changers or those wanting to quickly enter the field.
                  </p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-6">
                  <h4 className="text-xl font-semibold text-gray-800">Self-Taught Path</h4>
                  <p className="text-gray-700 mt-2">
                    Many successful developers are self-taught, using online resources, 
                    coding challenges, and building personal projects to develop skills.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-700">Key Course Topics</h3>
              <div className="bg-gray-50 p-6 rounded-lg">
                <ul className="space-y-3 text-gray-700">
                  <li>• Programming Fundamentals (JavaScript, Python, Java)</li>
                  <li>• Data Structures and Algorithms</li>
                  <li>• Web Development (HTML, CSS, React)</li>
                  <li>• Database Design and Management</li>
                  <li>• Software Engineering Principles</li>
                  <li>• Mobile App Development</li>
                  <li>• Cloud Computing and DevOps</li>
                  <li>• User Experience (UX) Design</li>
                  <li>• Project Management</li>
                  <li>• Cybersecurity Basics</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-6 bg-blue-600 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Software Development Journey?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Explore our resources and discover how to begin your career in software development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/qualifications" 
                className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition"
              >
                View Qualifications
              </Link>
              <Link 
                href="/resources" 
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition"
              >
                Explore Resources
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
