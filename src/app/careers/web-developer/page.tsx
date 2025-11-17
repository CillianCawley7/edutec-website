'use client';

import * as React from 'react';
import Navbar from '../../components/NavBar';
import Footer from '../../components/Footer';
import LogoBar from '../../components/LogoBar';
import Link from 'next/link';

export default function WebDeveloperPage() {
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Web Developer</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl">
              Build and maintain websites and web applications. Create responsive, user-friendly interfaces and work with databases, APIs, and modern frameworks.
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
                Web developers design, build, and maintain websites and web applications. They work on both the visual elements users see (front-end) and the server-side logic and databases (back-end) that power modern web experiences. Web developers transform design mockups into functional, interactive websites using HTML, CSS, JavaScript, and various frameworks.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Ireland's thriving tech sector has created strong demand for web developers, with Dublin serving as the European headquarters for major tech companies like Google, Facebook, and Microsoft. Irish web developers work on everything from corporate websites to complex web applications serving millions of users globally.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Specializations include front-end development (focusing on user interfaces), back-end development (server and database work), and full-stack development (combining both areas).
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-semibold mb-6 text-blue-600">What do web developers do?</h3>
              <p className="text-lg text-gray-700 mb-6">
                Most web developers work standard full-time hours, though deadlines and project launches may require additional time. Many Irish companies offer flexible working arrangements and remote work options.
              </p>
              <p className="text-lg text-gray-700 mb-4">Some of the things a web developer might do:</p>
              <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg">
                <li>Design and build responsive websites that work on all devices</li>
                <li>Write clean, maintainable HTML, CSS, and JavaScript code</li>
                <li>Work with frameworks like React, Vue, or Angular for dynamic interfaces</li>
                <li>Integrate APIs and third-party services into web applications</li>
                <li>Optimize website performance and loading speeds</li>
                <li>Ensure websites are accessible to users with disabilities (WCAG compliance)</li>
                <li>Collaborate with designers, product managers, and other developers</li>
                <li>Test and debug across different browsers and devices</li>
                <li>Implement security best practices to protect user data</li>
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
                <h3 className="text-xl font-semibold mb-3 text-blue-700">Core Web Technologies</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• HTML5 and semantic markup</li>
                  <li>• CSS3, Flexbox, and Grid</li>
                  <li>• JavaScript (ES6+) and TypeScript</li>
                  <li>• Responsive design principles</li>
                  <li>• Cross-browser compatibility</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-blue-700">Frameworks & Tools</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• React, Vue.js, or Angular</li>
                  <li>• Node.js and Express</li>
                  <li>• Git version control</li>
                  <li>• Build tools (Webpack, Vite)</li>
                  <li>• Testing frameworks (Jest, Cypress)</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-blue-700">Professional Skills</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Problem-solving and debugging</li>
                  <li>• Attention to detail</li>
                  <li>• Communication and teamwork</li>
                  <li>• Time management</li>
                  <li>• Continuous learning mindset</li>
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
            <p className="text-3xl font-bold text-green-700 mb-4">€32,000 - €55,000</p>
            <p className="text-lg text-gray-700 mb-4">
              Entry-level web developers in Ireland typically earn €32,000-€38,000, while experienced developers can earn €45,000-€55,000. Senior and lead web developers in Dublin's tech sector often earn €60,000+.
            </p>
            <p className="text-lg text-gray-700">
              Salary varies based on experience, location (Dublin vs. other regions), company size, specialization (front-end, back-end, full-stack), and specific technologies used. Many Irish tech companies also offer excellent benefits including health insurance, pension contributions, and flexible working arrangements.
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
                  Ireland's digital economy continues to expand rapidly, with strong demand for web developers across all sectors. The National Skills Bulletin identifies web development as a high-demand skill area with shortages in qualified candidates.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  Over 1,500 web developer positions are advertised annually in Ireland, with particularly strong demand in Dublin, Cork, Galway, and Limerick. Remote work opportunities have also expanded significantly post-pandemic.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-blue-700">Why the growth?</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• Ireland's position as a European tech hub</li>
                  <li>• Growing e-commerce and digital services</li>
                  <li>• Increased focus on digital transformation</li>
                  <li>• Strong government support for tech sector (IDA Ireland)</li>
                  <li>• Remote work creating global opportunities</li>
                  <li>• Mobile-first web development demand</li>
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
                    Computer Science, Web Development, or Software Development degrees from Irish universities (UCD, TCD, UCC, DCU) or Technological Universities. Takes 4 years full-time.
                  </p>
                </div>
                
                <div className="border-l-4 border-green-500 pl-6">
                  <h4 className="text-xl font-semibold text-gray-800">Level 6/7 Higher Certificate/Ordinary Degree</h4>
                  <p className="text-gray-700 mt-2">
                    Web Development or Software Development from Technological Universities or Institutes of Technology. Takes 2-3 years and provides direct entry to employment.
                  </p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-6">
                  <h4 className="text-xl font-semibold text-gray-800">Bootcamps & Alternative Routes</h4>
                  <p className="text-gray-700 mt-2">
                    Intensive bootcamps (Code Institute, General Assembly Dublin) offering 12-24 week programs. Many Irish developers are also successfully self-taught using online resources.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-700">Key Course Topics</h3>
              <div className="bg-gray-50 p-6 rounded-lg">
                <ul className="space-y-3 text-gray-700">
                  <li>• HTML5, CSS3, and JavaScript fundamentals</li>
                  <li>• Responsive web design</li>
                  <li>• Front-end frameworks (React, Vue, Angular)</li>
                  <li>• Back-end development (Node.js, PHP, Python)</li>
                  <li>• Database management (SQL, MongoDB)</li>
                  <li>• RESTful APIs and web services</li>
                  <li>• Version control with Git</li>
                  <li>• Web accessibility standards</li>
                  <li>• UI/UX design principles</li>
                  <li>• Web security best practices</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-6 bg-blue-600 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Web Development Journey?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Explore our resources and discover how to begin your career in web development.
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

