'use client';

import * as React from 'react';
import Navbar from '../../components/NavBar';
import Footer from '../../components/Footer';
import LogoBar from '../../components/LogoBar';
import Link from 'next/link';

export default function JuniorDeveloperPage() {
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Junior Developer</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl">
              Entry-level software development role focusing on learning programming fundamentals, working on smaller features, and growing technical skills under experienced mentorship.
            </p>
            <div className="mt-6">
              <span className="inline-block bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                Career Cluster: Software Development
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
                Junior developers are entry-level software developers beginning their professional careers in technology. They work under the guidance of senior developers and team leads, contributing to projects while continuously developing their programming skills. This role is the starting point for most software development careers.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Ireland offers excellent opportunities for junior developers, with many multinational tech companies and Irish startups actively recruiting graduates and career-changers. The Irish tech sector values mentorship and invests heavily in developing junior talent, with structured graduate programs at companies like Google, Microsoft, and numerous Irish firms.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Junior developers typically spend 2-3 years in this role before progressing to mid-level developer positions. The role provides crucial experience in real-world software development, professional best practices, and team collaboration.
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-semibold mb-6 text-blue-600">What do junior developers do?</h3>
              <p className="text-lg text-gray-700 mb-6">
                Junior developers work standard full-time hours, typically 9am-5:30pm, with many Irish tech companies offering flexible start times and hybrid working arrangements.
              </p>
              <p className="text-lg text-gray-700 mb-4">Some of the things a junior developer might do:</p>
              <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg">
                <li>Write and test code for smaller features and bug fixes</li>
                <li>Participate in code reviews to learn best practices</li>
                <li>Debug existing code and resolve simple issues</li>
                <li>Learn company codebases and development processes</li>
                <li>Collaborate with team members on projects</li>
                <li>Write technical documentation</li>
                <li>Attend daily stand-ups and team meetings</li>
                <li>Use version control systems (Git) for code management</li>
                <li>Learn new programming languages and frameworks</li>
                <li>Seek mentorship and feedback from senior developers</li>
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
                <h3 className="text-xl font-semibold mb-3 text-blue-700">Basic Programming</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• At least one programming language (Python, JavaScript, Java)</li>
                  <li>• Understanding of data structures</li>
                  <li>• Basic algorithms knowledge</li>
                  <li>• HTML/CSS fundamentals</li>
                  <li>• Object-oriented programming concepts</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-blue-700">Development Tools</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Git version control basics</li>
                  <li>• Code editors (VS Code, IntelliJ)</li>
                  <li>• Command line/terminal usage</li>
                  <li>• Basic debugging techniques</li>
                  <li>• Testing fundamentals</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-blue-700">Soft Skills</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Willingness to learn</li>
                  <li>• Problem-solving mindset</li>
                  <li>• Communication skills</li>
                  <li>• Teamwork and collaboration</li>
                  <li>• Attention to detail</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Salary Section */}
        <section className="py-16 px-6 max-w-6xl mx-auto bg-white">
          <h2 className="text-3xl font-bold mb-8 text-center">What is the pay?</h2>
          
          <div className="bg-green-50 border-l-4 border-green-500 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4 text-green-800">Average Salary in Ireland</h3>
            <p className="text-3xl font-bold text-green-700 mb-4">€28,000 - €40,000</p>
            <p className="text-lg text-gray-700 mb-4">
              Junior developers in Ireland typically start at €28,000-€33,000, with those in Dublin or at larger tech companies earning €35,000-€40,000. After 1-2 years of experience, salaries increase to €40,000-€45,000 as developers move towards mid-level roles.
            </p>
            <p className="text-lg text-gray-700">
              Graduate programs at major tech companies often include comprehensive benefits: health insurance, pension contributions, learning budgets for courses/conferences, flexible working, and career development opportunities. Many Irish companies also offer annual performance bonuses and salary reviews.
            </p>
          </div>
        </section>

        {/* Career Outlook Section */}
        <section className="py-16 px-6 bg-blue-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">What is the career outlook?</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-blue-700">Job Growth in Ireland</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Ireland actively seeks junior developers, with over 1,000 graduate and junior developer positions advertised annually. The ICT Skills Action Plan targets increasing graduates in computing and IT to meet industry demand.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  Many Irish companies run structured graduate programs (IBM, Accenture, Fidelity Investments) offering excellent career progression. The supportive tech community in Ireland provides numerous meetups, networking events, and mentorship opportunities for junior developers.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-blue-700">Why the opportunity?</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• Strong demand exceeds supply of developers</li>
                  <li>• Tech companies actively hiring graduates</li>
                  <li>• Government support for tech education</li>
                  <li>• Excellent career progression opportunities</li>
                  <li>• Supportive tech community and mentorship</li>
                  <li>• Remote work opportunities expanding</li>
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
                  <h4 className="text-xl font-semibold text-gray-800">Level 8 Degree (Preferred)</h4>
                  <p className="text-gray-700 mt-2">
                    Computer Science or related degree from Irish universities. Most graduate programs require a Level 8 degree, though practical skills and portfolio also valued.
                  </p>
                </div>
                
                <div className="border-l-4 border-green-500 pl-6">
                  <h4 className="text-xl font-semibold text-gray-800">Higher Certificate/Diploma</h4>
                  <p className="text-gray-700 mt-2">
                    Level 6/7 qualifications in Software Development acceptable for many positions. Strong portfolio of projects can compensate for shorter qualification.
                  </p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-6">
                  <h4 className="text-xl font-semibold text-gray-800">Bootcamps & Self-Taught</h4>
                  <p className="text-gray-700 mt-2">
                    Coding bootcamps (Code Institute, General Assembly) or self-taught route possible. Strong portfolio demonstrating skills is essential for employment.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-700">Key Skills to Develop</h3>
              <div className="bg-gray-50 p-6 rounded-lg">
                <ul className="space-y-3 text-gray-700">
                  <li>• Core programming language proficiency</li>
                  <li>• Git and version control</li>
                  <li>• Data structures and algorithms basics</li>
                  <li>• Web development fundamentals</li>
                  <li>• Database basics (SQL)</li>
                  <li>• Problem-solving skills</li>
                  <li>• Reading and understanding code</li>
                  <li>• Debugging techniques</li>
                  <li>• Communication and teamwork</li>
                  <li>• Portfolio of personal projects</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-6 bg-blue-600 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Development Career?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Explore our resources and discover how to begin your journey as a junior developer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/qualifications" 
                className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition"
              >
                View Qualifications
              </Link>
              <Link 
                href="/events" 
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition"
              >
                Upcoming Events
              </Link>
            </div>
          </div>
        </section>
      </main>
      <LogoBar />
      <Footer />
    </>
  );
}

