'use client';

import * as React from 'react';
import Navbar from '../../components/NavBar';
import Footer from '../../components/Footer';
import LogoBar from '../../components/LogoBar';
import Link from 'next/link';

export default function ITManagerPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen text-gray-800 font-sans">
        <section className="text-white py-16 pt-24" style={{background: 'linear-gradient(to right, #00b2e3, #0099c7)'}}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center mb-4">
              <Link href="/careers" className="text-blue-200 hover:text-white mr-2">← Back to Careers</Link>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">IT Manager</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl">
              Oversee IT department operations. Manage IT staff, budgets, strategy, and ensure technology supports business goals and delivers value.
            </p>
            <div className="mt-6">
              <span className="inline-block bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">Career Cluster: Business & Management</span>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 max-w-7xl mx-auto bg-white">
          <h2 className="text-4xl font-bold mb-16 text-center text-gray-800">What you need to know</h2>
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-3xl font-semibold mb-6 text-blue-600">Overview</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                IT Managers lead technology departments, overseeing IT operations, staff, and strategic direction. They manage budgets, develop IT strategy, ensure business-technology alignment, and lead teams delivering technology services. This senior role requires both technical expertise and strong leadership capabilities.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Every sizable Irish organization needs IT management to coordinate technology operations. The role offers excellent career progression toward CIO/CTO positions and significant organizational impact.
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-semibold mb-6 text-blue-600">Key responsibilities</h3>
              <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg">
                <li>Lead and develop IT teams</li>
                <li>Develop IT strategy</li>
                <li>Manage IT budgets</li>
                <li>Oversee IT operations</li>
                <li>Ensure system reliability</li>
                <li>Manage vendor relationships</li>
                <li>Drive technology initiatives</li>
                <li>Report to senior leadership</li>
                <li>Ensure cybersecurity</li>
                <li>Align IT with business objectives</li>
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
                  <li>• Team management and development</li>
                  <li>• Strategic thinking</li>
                  <li>• Change leadership</li>
                  <li>• Coaching and mentoring</li>
                  <li>• Decision making</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-blue-700">Technical Knowledge</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• IT infrastructure</li>
                  <li>• System architecture</li>
                  <li>• Cybersecurity</li>
                  <li>• Cloud technologies</li>
                  <li>• Emerging technologies</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-blue-700">Business Skills</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Budget management</li>
                  <li>• Vendor negotiation</li>
                  <li>• Business alignment</li>
                  <li>• Communication</li>
                  <li>• Risk management</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 max-w-6xl mx-auto bg-white">
          <h2 className="text-3xl font-bold mb-8 text-center">What is the pay?</h2>
          <div className="bg-green-50 border-l-4 border-green-500 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4 text-green-800">Average Salary in Ireland</h3>
            <p className="text-3xl font-bold text-green-700 mb-4">€45,000 - €80,000</p>
            <p className="text-lg text-gray-700 mb-4">
              IT managers in small-medium organizations earn €45,000-€60,000, mid-sized company managers earn €62,000-€75,000, while senior IT managers at large organizations command €78,000-€95,000. CIO/CTO roles offer €100,000-€150,000+.
            </p>
            <p className="text-lg text-gray-700">
              Senior leadership compensation with strong benefits. Packages include performance bonuses (15-25%), health insurance, pension contributions, company car allowances, professional development, and clear progression to executive technology leadership (CIO/CTO).
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
                  Consistent demand for experienced IT managers. Approximately 400-500 IT management positions advertised annually in Ireland. Senior role with stable employment.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-blue-700">Why the growth?</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• Growing IT complexity</li>
                  <li>• Digital transformation leadership needs</li>
                  <li>• Cybersecurity governance</li>
                  <li>• Strategic technology alignment</li>
                  <li>• Cloud and infrastructure modernization</li>
                  <li>• IT team expansion</li>
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
                  <h4 className="text-xl font-semibold text-gray-800">Technical Degree + Experience</h4>
                  <p className="text-gray-700 mt-2">
                    Level 8 degree in Computer Science or IT plus 5-8 years progressive experience in IT roles. Technical foundation essential for credibility.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-6">
                  <h4 className="text-xl font-semibold text-gray-800">MBA or Business Qualifications</h4>
                  <p className="text-gray-700 mt-2">
                    MBA or executive leadership programs enhance business skills. Many Irish IT managers pursue these for career progression to CIO level.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-6">
                  <h4 className="text-xl font-semibold text-gray-800">Leadership Development</h4>
                  <p className="text-gray-700 mt-2">
                    Progression through technical roles (developer, analyst, administrator) to team lead, then management. Leadership experience crucial.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-700">Key Competencies</h3>
              <div className="bg-gray-50 p-6 rounded-lg">
                <ul className="space-y-3 text-gray-700">
                  <li>• Strategic IT planning</li>
                  <li>• Team leadership and development</li>
                  <li>• Budget and financial management</li>
                  <li>• Vendor and contract management</li>
                  <li>• IT governance and compliance</li>
                  <li>• Change management</li>
                  <li>• Business-IT alignment</li>
                  <li>• Risk management</li>
                  <li>• Executive communication</li>
                  <li>• Technology trend awareness</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-blue-600 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Ready to Lead IT Operations?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Explore resources for IT management careers.
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

