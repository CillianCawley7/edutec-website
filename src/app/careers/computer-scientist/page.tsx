'use client';

import * as React from 'react';
import Navbar from '../../components/NavBar';
import Footer from '../../components/Footer';
import LogoBar from '../../components/LogoBar';
import Link from 'next/link';

export default function ComputerScientistPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen text-gray-800 font-sans">
        <section className="text-white py-16 pt-24" style={{background: 'linear-gradient(to right, #00b2e3, #0099c7)'}}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center mb-4">
              <Link href="/careers" className="text-blue-200 hover:text-white mr-2">← Back to Careers</Link>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Computer Scientist</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl">
              Conduct research and develop new computing technologies. Work on algorithms, programming languages, theoretical computer science, and innovation in computing.
            </p>
            <div className="mt-6">
              <span className="inline-block bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">Career Cluster: IT & Systems</span>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 max-w-7xl mx-auto bg-white">
          <h2 className="text-4xl font-bold mb-16 text-center text-gray-800">What you need to know</h2>
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-3xl font-semibold mb-6" style={{color: '#00b2e3'}}>Overview</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Computer Scientists conduct research into computational theory, develop new algorithms, design programming languages, and advance the fundamental science of computing. They work in academia, research labs, and tech companies pushing the boundaries of what computers can do.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Ireland hosts world-class computer science research at universities (TCD, UCD, UCC) and research centers (Lero, ADAPT). Tech companies like IBM Research and Microsoft Research Dublin employ computer scientists working on cutting-edge problems.
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-semibold mb-6" style={{color: '#00b2e3'}}>Key responsibilities</h3>
              <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg">
                <li>Conduct computational research</li>
                <li>Develop new algorithms</li>
                <li>Design programming languages</li>
                <li>Solve theoretical problems</li>
                <li>Publish research papers</li>
                <li>Present at conferences</li>
                <li>Collaborate with researchers</li>
                <li>Supervise students (academia)</li>
                <li>Apply theory to practical problems</li>
                <li>Advance computing knowledge</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">What skills are needed?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Research Skills</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Research methodology</li>
                  <li>• Academic writing</li>
                  <li>• Critical analysis</li>
                  <li>• Literature review</li>
                  <li>• Experimental design</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Technical Expertise</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Advanced mathematics</li>
                  <li>• Algorithms and complexity</li>
                  <li>• Programming languages</li>
                  <li>• Theoretical computer science</li>
                  <li>• Multiple programming languages</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Professional Skills</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Innovation and creativity</li>
                  <li>• Collaboration</li>
                  <li>• Presentation skills</li>
                  <li>• Persistence</li>
                  <li>• Abstract thinking</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 max-w-6xl mx-auto bg-white">
          <h2 className="text-3xl font-bold mb-8 text-center">What is the pay?</h2>
          <div className="bg-green-50 border-l-4 border-green-500 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4 text-green-800">Average Salary in Ireland</h3>
            <p className="text-3xl font-bold text-green-700 mb-4">€40,000 - €80,000</p>
            <p className="text-lg text-gray-700 mb-4">
              Postdoctoral researchers earn €40,000-€50,000, research scientists €55,000-€75,000, while senior researchers and principal investigators earn €80,000-€110,000+. Industry research roles often pay significantly more than academic positions.
            </p>
            <p className="text-lg text-gray-700">
              Academic roles offer intellectual freedom and job security. Industry research provides higher salaries and access to resources. Both offer conference travel, research funding, and opportunity to advance human knowledge.
            </p>
          </div>
        </section>

        <section className="py-16 px-6 bg-blue-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">What is the career outlook?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Research Opportunities</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Growing research opportunities in Ireland with Science Foundation Ireland funding competitive positions. Both academic and industry research labs actively recruit.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Why pursue computer science research?</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• Fundamental contributions to computing</li>
                  <li>• Intellectual challenge</li>
                  <li>• Academic freedom</li>
                  <li>• Global collaboration</li>
                  <li>• Teaching opportunities</li>
                  <li>• Industry partnerships</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 max-w-6xl mx-auto bg-white">
          <h2 className="text-3xl font-bold mb-8 text-center">What education is required?</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Educational Pathways</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h4 className="text-xl font-semibold text-gray-800">PhD (Essential)</h4>
                  <p className="text-gray-700 mt-2">
                    PhD in Computer Science or related field required for most positions. Irish universities offer funded PhD programs (4 years) with competitive stipends.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-6">
                  <h4 className="text-xl font-semibold text-gray-800">Postdoctoral Experience</h4>
                  <p className="text-gray-700 mt-2">
                    1-3 years postdoctoral research typically required for permanent positions. Opportunity to develop independent research and publications.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-6">
                  <h4 className="text-xl font-semibold text-gray-800">Publication Record</h4>
                  <p className="text-gray-700 mt-2">
                    Publications at top conferences (ACM, IEEE) essential for career advancement. Research impact more important than quantity.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Research Areas</h3>
              <div className="bg-gray-50 p-6 rounded-lg">
                <ul className="space-y-3 text-gray-700">
                  <li>• Algorithms and complexity theory</li>
                  <li>• Programming languages</li>
                  <li>• Artificial intelligence</li>
                  <li>• Computer systems and architecture</li>
                  <li>• Software engineering</li>
                  <li>• Human-computer interaction</li>
                  <li>• Computational theory</li>
                  <li>• Distributed systems</li>
                  <li>• Computer graphics</li>
                  <li>• Quantum computing</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 text-white text-center" style={{backgroundColor: '#00b2e3'}}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Ready to Advance Computing Science?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Explore PhD programs and research opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/qualifications" className="bg-white px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition" style={{color: '#00b2e3'}}>
                View Qualifications
              </Link>
              <Link href="/events" className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:opacity-90 transition">
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

