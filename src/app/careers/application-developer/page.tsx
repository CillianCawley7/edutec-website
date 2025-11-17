'use client';

import * as React from 'react';
import Navbar from '../../components/NavBar';
import Footer from '../../components/Footer';
import LogoBar from '../../components/LogoBar';
import Link from 'next/link';

export default function ApplicationDeveloperPage() {
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Application Developer</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl">
              Create software applications for specific platforms including mobile, desktop, and web. Focus on user experience and functionality to solve real-world problems.
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
                Application developers design, build, and maintain software applications for various platforms. They create mobile apps for iOS and Android, desktop applications for Windows and Mac, and web-based applications. Unlike general software developers, application developers typically specialize in specific platforms or types of applications.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Ireland's app development sector is thriving, with over 700 mobile app companies employing thousands of developers. Irish app developers have created globally successful applications used by millions worldwide, from fintech apps to health and wellness platforms.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Specializations include mobile app development (iOS/Android), desktop application development, cross-platform development, and progressive web apps (PWAs).
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-semibold mb-6 text-blue-600">What do application developers do?</h3>
              <p className="text-lg text-gray-700 mb-6">
                Application developers typically work full-time, with flexibility for remote work increasingly common in Ireland. Project deadlines and app releases may require additional hours.
              </p>
              <p className="text-lg text-gray-700 mb-4">Some of the things an application developer might do:</p>
              <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg">
                <li>Design and develop applications for mobile, desktop, or web platforms</li>
                <li>Create intuitive user interfaces and engaging user experiences</li>
                <li>Write clean, efficient code using platform-specific languages</li>
                <li>Integrate APIs, databases, and third-party services</li>
                <li>Test applications across different devices and screen sizes</li>
                <li>Debug and resolve performance issues</li>
                <li>Implement security features to protect user data</li>
                <li>Publish apps to app stores (Apple App Store, Google Play)</li>
                <li>Maintain and update applications with new features</li>
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
                <h3 className="text-xl font-semibold mb-3 text-blue-700">Development Skills</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Mobile: Swift (iOS), Kotlin (Android)</li>
                  <li>• Cross-platform: React Native, Flutter</li>
                  <li>• Desktop: Java, C#, Python</li>
                  <li>• UI/UX design principles</li>
                  <li>• API integration and REST services</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-blue-700">Technical Knowledge</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Database management (SQLite, Core Data)</li>
                  <li>• Version control (Git, GitHub)</li>
                  <li>• App architecture patterns (MVC, MVVM)</li>
                  <li>• Testing and debugging</li>
                  <li>• App store submission processes</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-blue-700">Professional Skills</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Problem-solving and creativity</li>
                  <li>• Attention to detail</li>
                  <li>• User-focused thinking</li>
                  <li>• Communication and collaboration</li>
                  <li>• Continuous learning</li>
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
            <p className="text-3xl font-bold text-green-700 mb-4">€36,000 - €60,000</p>
            <p className="text-lg text-gray-700 mb-4">
              Entry-level application developers in Ireland earn €36,000-€42,000, while experienced developers can command €50,000-€60,000. Senior app developers and those with specialized skills (iOS, Android) often earn €65,000-€80,000+.
            </p>
            <p className="text-lg text-gray-700">
              Salaries vary based on platform specialization (mobile typically pays more), years of experience, location (Dublin offers highest salaries), company type (tech giants vs. startups), and whether working as a contractor or permanent employee. Many roles include benefits like health insurance, pension, and stock options.
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
                  The Irish mobile and application development sector continues strong growth, with over 1,200 application developer positions advertised annually. The Department of Enterprise identifies app development as a critical skills area.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  Mobile-first strategies adopted by Irish businesses have increased demand significantly. The gaming sector in Ireland also creates substantial opportunities, with companies like Keywords Studios headquartered in Dublin.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-blue-700">Why the growth?</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• Smartphone usage at all-time high</li>
                  <li>• Digital transformation across all sectors</li>
                  <li>• Growth in mobile commerce and payments</li>
                  <li>• Health tech and wellness app demand</li>
                  <li>• Ireland's position as tech hub</li>
                  <li>• Enterprise mobile solutions growth</li>
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
                  <h4 className="text-xl font-semibold text-gray-800">Level 8 Honours Degree</h4>
                  <p className="text-gray-700 mt-2">
                    Computer Science, Mobile Application Development, or Software Development from Irish universities. TU Dublin and UL offer specialized mobile development programs. Takes 4 years.
                  </p>
                </div>
                
                <div className="border-l-4 border-green-500 pl-6">
                  <h4 className="text-xl font-semibold text-gray-800">Higher Certificate/Diploma (Level 6/7)</h4>
                  <p className="text-gray-700 mt-2">
                    Mobile App Development or Software Development programs from Technological Universities. Provides practical skills for immediate employment. Takes 2-3 years.
                  </p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-6">
                  <h4 className="text-xl font-semibold text-gray-800">Bootcamps & Self-Study</h4>
                  <p className="text-gray-700 mt-2">
                    Intensive mobile development bootcamps or self-study through platforms like Apple Developer Academy (available in Ireland). Portfolio of apps is crucial for employment.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-700">Key Course Topics</h3>
              <div className="bg-gray-50 p-6 rounded-lg">
                <ul className="space-y-3 text-gray-700">
                  <li>• Mobile app development (iOS/Android)</li>
                  <li>• Programming (Swift, Kotlin, Java)</li>
                  <li>• Cross-platform frameworks (React Native, Flutter)</li>
                  <li>• UI/UX design for mobile</li>
                  <li>• Mobile databases and data persistence</li>
                  <li>• API integration and networking</li>
                  <li>• App testing and debugging</li>
                  <li>• App store submission and deployment</li>
                  <li>• Mobile security best practices</li>
                  <li>• Performance optimization</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-6 bg-blue-600 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Application Development Journey?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Explore our resources and discover how to begin your career in application development.
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

