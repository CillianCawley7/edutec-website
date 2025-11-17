'use client';

import * as React from 'react';
import Navbar from '../../components/NavBar';
import Footer from '../../components/Footer';
import LogoBar from '../../components/LogoBar';
import Link from 'next/link';

export default function CyberSecurityManagerPage() {
  return (
    <>
      <Navbar />
      
      <main className="min-h-screen text-gray-800 font-sans">
        <section className="text-white py-16 pt-24" style={{background: 'linear-gradient(to right, #00b2e3, #0099c7)'}}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center mb-4">
              <Link href="/careers" className="text-blue-200 hover:text-white mr-2">← Back to Careers</Link>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Cyber Security Manager</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl">
              Lead security teams and strategy. Manage security budgets, coordinate incident response, communicate with stakeholders, and oversee organizational security posture.
            </p>
            <div className="mt-6">
              <span className="inline-block bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">Career Cluster: Cyber Security</span>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 max-w-7xl mx-auto bg-white">
          <h2 className="text-4xl font-bold mb-16 text-center text-gray-800">What you need to know</h2>
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-3xl font-semibold mb-6 text-blue-600">Overview</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Cyber Security Managers lead security teams, develop security strategies, and ensure organizational security programs meet business objectives. They manage security budgets, coordinate responses to incidents, communicate security needs to executives, and oversee implementation of security controls. This role requires technical expertise combined with leadership and strategic thinking.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Irish organizations increasingly recognize security as business-critical, creating demand for security managers who can bridge technical and business perspectives. Career progression leads to CISO and executive security leadership roles.
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-semibold mb-6 text-blue-600">Key responsibilities</h3>
              <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg">
                <li>Lead and develop security teams</li>
                <li>Develop security strategy and roadmap</li>
                <li>Manage security budgets and resources</li>
                <li>Coordinate incident response</li>
                <li>Report to executive leadership</li>
                <li>Oversee security projects</li>
                <li>Manage vendor relationships</li>
                <li>Ensure regulatory compliance</li>
                <li>Drive security awareness programs</li>
                <li>Assess and manage security risks</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">What skills are needed?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-blue-700">Leadership</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Team management</li>
                  <li>• Strategic thinking</li>
                  <li>• Decision-making</li>
                  <li>• Coaching and mentoring</li>
                  <li>• Stakeholder management</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-blue-700">Security Expertise</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Security architecture</li>
                  <li>• Risk management</li>
                  <li>• Compliance frameworks</li>
                  <li>• Incident management</li>
                  <li>• Security technologies</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-blue-700">Business Skills</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Budget management</li>
                  <li>• Communication</li>
                  <li>• Project management</li>
                  <li>• Business alignment</li>
                  <li>• Vendor management</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 max-w-6xl mx-auto bg-white">
          <h2 className="text-3xl font-bold mb-8 text-center">What is the pay?</h2>
          <div className="bg-green-50 border-l-4 border-green-500 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4 text-green-800">Average Salary in Ireland</h3>
            <p className="text-3xl font-bold text-green-700 mb-4">€50,000 - €90,000</p>
            <p className="text-lg text-gray-700 mb-4">
              Security managers in Ireland earn €50,000-€70,000 typically, with senior managers and those at large organizations earning €75,000-€100,000. Progression to CISO roles offers €120,000-€180,000+.
            </p>
            <p className="text-lg text-gray-700">
              Leadership compensation reflects responsibility and impact. Total packages include bonuses (15-25%), health insurance, pension contributions, professional development, and potential equity at tech companies.
            </p>
          </div>
        </section>

        <section className="py-16 px-6 bg-blue-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">What is the career outlook?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-blue-700">Job Growth</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Growing recognition of security as business priority drives demand for security managers. Approximately 400+ positions in Ireland with excellent career progression opportunities to CISO and executive roles.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-blue-700">Why the growth?</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• Board-level security awareness</li>
                  <li>• Regulatory compliance needs</li>
                  <li>• Growing security teams</li>
                  <li>• Complex threat landscape</li>
                  <li>• Digital transformation security</li>
                  <li>• Risk management focus</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 max-w-6xl mx-auto bg-white">
          <h2 className="text-3xl font-bold mb-8 text-center">What education is required?</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-700">Educational Pathways</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h4 className="text-xl font-semibold text-gray-800">Technical Background + Experience</h4>
                  <p className="text-gray-700 mt-2">
                    Typically requires 5-8 years security experience plus leadership capability. Level 8 degree in Cyber Security or Computer Science combined with management certifications (CISSP, CISM).
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-6">
                  <h4 className="text-xl font-semibold text-gray-800">MBA or Leadership Training</h4>
                  <p className="text-gray-700 mt-2">
                    Many security managers pursue MBA or executive leadership programs to develop business and management skills complementing technical expertise.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-700">Key Competencies</h3>
              <div className="bg-gray-50 p-6 rounded-lg">
                <ul className="space-y-3 text-gray-700">
                  <li>• Strategic security planning</li>
                  <li>• Team leadership and development</li>
                  <li>• Budget and resource management</li>
                  <li>• Risk management frameworks</li>
                  <li>• Compliance and governance</li>
                  <li>• Incident response coordination</li>
                  <li>• Executive communication</li>
                  <li>• Security architecture oversight</li>
                  <li>• Vendor and contract management</li>
                  <li>• Business relationship management</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-blue-600 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Ready to Lead in Security?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Explore resources for security management careers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/qualifications" className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition">
                View Qualifications
              </Link>
              <Link href="/events" className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition">
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

