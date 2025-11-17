'use client';

import * as React from 'react';
import Navbar from '../../components/NavBar';
import Footer from '../../components/Footer';
import LogoBar from '../../components/LogoBar';
import Link from 'next/link';

export default function SoftwareEngineerPage() {
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Software Engineer</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl">
              Apply engineering principles to software development. Design scalable systems, optimize performance, and implement best practices in code architecture and system design.
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
                Software engineers apply systematic engineering approaches to software development. They design and build large-scale systems that are reliable, efficient, and maintainable. Unlike general developers, software engineers focus heavily on system architecture, scalability, and engineering best practices.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Ireland's tech sector employs thousands of software engineers across multinational corporations and innovative startups. Major tech companies like Google, Microsoft, Amazon, and Apple have significant engineering operations in Ireland, working on global-scale products and services used by billions worldwide.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Specializations include backend engineering, distributed systems, platform engineering, site reliability engineering (SRE), and infrastructure engineering.
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-semibold mb-6 text-blue-600">What do software engineers do?</h3>
              <p className="text-lg text-gray-700 mb-6">
                Software engineers typically work full-time with flexible arrangements. Irish tech companies increasingly offer hybrid working, with 2-3 office days typical.
              </p>
              <p className="text-lg text-gray-700 mb-4">Some of the things a software engineer might do:</p>
              <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg">
                <li>Design system architecture for scalable applications</li>
                <li>Write high-quality, maintainable code following best practices</li>
                <li>Conduct code reviews and mentor junior developers</li>
                <li>Optimize system performance and efficiency</li>
                <li>Design and implement APIs and microservices</li>
                <li>Ensure system reliability and uptime</li>
                <li>Implement DevOps practices and CI/CD pipelines</li>
                <li>Collaborate with cross-functional teams</li>
                <li>Make technical decisions on tooling and architecture</li>
                <li>Document systems and technical processes</li>
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
                <h3 className="text-xl font-semibold mb-3 text-blue-700">Engineering Skills</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• System design and architecture</li>
                  <li>• Data structures and algorithms</li>
                  <li>• Design patterns and principles</li>
                  <li>• Software testing strategies</li>
                  <li>• Performance optimization</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-blue-700">Technical Stack</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Multiple programming languages</li>
                  <li>• Databases (SQL, NoSQL)</li>
                  <li>• Cloud platforms (AWS, Azure, GCP)</li>
                  <li>• CI/CD and DevOps tools</li>
                  <li>• Containerization (Docker, Kubernetes)</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-blue-700">Professional Skills</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Leadership and mentorship</li>
                  <li>• Technical communication</li>
                  <li>• Problem-solving at scale</li>
                  <li>• Project planning</li>
                  <li>• Cross-team collaboration</li>
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
            <p className="text-3xl font-bold text-green-700 mb-4">€40,000 - €75,000</p>
            <p className="text-lg text-gray-700 mb-4">
              Mid-level software engineers in Ireland earn €40,000-€55,000, while senior engineers command €60,000-€75,000. Principal and staff engineers at major tech companies can earn €80,000-€120,000+, with significant equity compensation.
            </p>
            <p className="text-lg text-gray-700">
              Compensation varies significantly by company type (FAANG companies pay higher), experience level, technical specialization, and location. Total compensation packages often include stock options, bonuses (10-20% of base), comprehensive health insurance, pension matching, and professional development budgets.
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
                  Software engineering is identified as a critical skills shortage area in Ireland, with over 2,500 positions advertised annually. The Expert Group on Future Skills Needs consistently highlights software engineering in demand forecasts.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  Ireland's continued attraction of global tech companies and thriving startup ecosystem ensure strong demand. Companies like Stripe, Intercom, and Workvivo demonstrate Irish engineering talent competing globally.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-blue-700">Why the growth?</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• Digital transformation across all industries</li>
                  <li>• Cloud computing adoption acceleration</li>
                  <li>• Growing complexity of software systems</li>
                  <li>• Ireland as European tech hub</li>
                  <li>• Strong graduate talent pipeline</li>
                  <li>• International remote work opportunities</li>
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
                  <h4 className="text-xl font-semibold text-gray-800">Level 8 Honours Degree (Standard)</h4>
                  <p className="text-gray-700 mt-2">
                    Computer Science, Software Engineering, or Computer Engineering from Irish universities. TCD, UCD, UCC, and NUIG offer strong programs. Most employers expect Level 8 for engineering roles.
                  </p>
                </div>
                
                <div className="border-l-4 border-green-500 pl-6">
                  <h4 className="text-xl font-semibold text-gray-800">Master's Degree (Level 9)</h4>
                  <p className="text-gray-700 mt-2">
                    MSc in Computer Science or Software Engineering beneficial for specialized roles or career progression. Can be pursued part-time while working.
                  </p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-6">
                  <h4 className="text-xl font-semibold text-gray-800">Professional Experience</h4>
                  <p className="text-gray-700 mt-2">
                    Several years of development experience required. Many engineers start as developers and progress through demonstrating engineering skills and system thinking.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-700">Key Knowledge Areas</h3>
              <div className="bg-gray-50 p-6 rounded-lg">
                <ul className="space-y-3 text-gray-700">
                  <li>• Data structures and algorithms</li>
                  <li>• System design and architecture</li>
                  <li>• Software design patterns</li>
                  <li>• Distributed systems</li>
                  <li>• Database design and optimization</li>
                  <li>• Networking and protocols</li>
                  <li>• Operating systems concepts</li>
                  <li>• DevOps and CI/CD</li>
                  <li>• Software testing methodologies</li>
                  <li>• Security best practices</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-6 bg-blue-600 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Ready to Advance Your Engineering Career?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Explore our resources and discover pathways in software engineering.
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

