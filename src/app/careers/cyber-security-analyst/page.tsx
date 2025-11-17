'use client';

import * as React from 'react';
import Navbar from '../../components/NavBar';
import Footer from '../../components/Footer';
import LogoBar from '../../components/LogoBar';
import Link from 'next/link';

export default function CyberSecurityAnalystPage() {
  return (
    <>
      <Navbar />
      
      <main className="min-h-screen text-gray-800 font-sans">
        <section className="text-white py-16 pt-24" style={{background: 'linear-gradient(to right, #00b2e3, #0099c7)'}}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center mb-4">
              <Link href="/careers" className="text-blue-200 hover:text-white mr-2">← Back to Careers</Link>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Cyber Security Analyst</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl">
              Protect systems and networks from cyber threats. Monitor security systems, investigate incidents, implement security measures, and defend organizations against attacks.
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
              <h3 className="text-3xl font-semibold mb-6" style={{color: '#00b2e3'}}>Overview</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Cyber Security Analysts are the front-line defenders protecting organizations from cyber threats. They monitor networks for security breaches, investigate incidents, analyze threats, and implement protective measures. In an increasingly digital world, these professionals are critical to organizational safety and compliance.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Ireland's status as European headquarters for major tech and financial companies (Google, Meta, Bank of America, Citi) creates exceptional demand for cyber security analysts. The financial services sector, in particular, actively recruits security professionals to protect sensitive data and meet regulatory requirements like GDPR and PSD2.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Specializations include Threat Intelligence, Security Operations Center (SOC) Analysis, Incident Response, and Security Compliance.
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-semibold mb-6" style={{color: '#00b2e3'}}>What do cyber security analysts do?</h3>
              <p className="text-lg text-gray-700 mb-6">
                Analysts typically work full-time, often in shifts for 24/7 SOC operations. Many Irish companies offer shift premiums and excellent work-life balance with 4-day weeks increasingly common.
              </p>
              <p className="text-lg text-gray-700 mb-4">Key responsibilities include:</p>
              <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg">
                <li>Monitor security systems and networks for threats</li>
                <li>Investigate security incidents and breaches</li>
                <li>Analyze security logs and alerts</li>
                <li>Respond to security events and coordinate mitigation</li>
                <li>Conduct vulnerability assessments</li>
                <li>Implement security controls and policies</li>
                <li>Document incidents and prepare reports</li>
                <li>Stay updated on latest threat intelligence</li>
                <li>Participate in security audits and compliance checks</li>
                <li>Recommend security improvements</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">What skills are needed?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Security Tools</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• SIEM platforms (Splunk, ELK, QRadar)</li>
                  <li>• Firewall and IDS/IPS systems</li>
                  <li>• Vulnerability scanners (Nessus, Qualys)</li>
                  <li>• Antivirus/EDR solutions</li>
                  <li>• Network monitoring tools</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Technical Knowledge</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Network protocols and architecture</li>
                  <li>• Operating systems (Linux, Windows)</li>
                  <li>• Threat intelligence and analysis</li>
                  <li>• Incident response procedures</li>
                  <li>• Security frameworks (NIST, ISO 27001)</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Professional Skills</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Analytical thinking</li>
                  <li>• Attention to detail</li>
                  <li>• Problem-solving under pressure</li>
                  <li>• Communication skills</li>
                  <li>• Continuous learning mindset</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 max-w-6xl mx-auto bg-white">
          <h2 className="text-3xl font-bold mb-8 text-center">What is the pay?</h2>
          <div className="bg-green-50 border-l-4 border-green-500 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4 text-green-800">Average Salary in Ireland</h3>
            <p className="text-3xl font-bold text-green-700 mb-4">€38,000 - €70,000</p>
            <p className="text-lg text-gray-700 mb-4">
              Junior analysts earn €38,000-€45,000, mid-level analysts earn €48,000-€60,000, while senior analysts command €65,000-€80,000. Financial services typically pay 15-20% premium over other sectors.
            </p>
            <p className="text-lg text-gray-700">
              Salaries reflect critical skills shortage. Benefits include shift allowances, certification funding (CompTIA Security+, CEH, CISSP), health insurance, pension matching, and career development opportunities. Many roles offer remote/hybrid working post-pandemic.
            </p>
          </div>
        </section>

        <section className="py-16 px-6 bg-blue-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">What is the career outlook?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Job Growth in Ireland</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Cyber security is Ireland's fastest-growing career field with critical skills shortage. Over 2,000 security positions advertised annually, with demand far exceeding qualified candidate supply.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  The National Cyber Security Centre and Irish government identify cyber security as critical national priority. Financial services, healthcare, and tech sectors actively recruit. Entry-level positions abundant, making it accessible career path.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Why the growth?</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• Escalating cyber threats and attacks</li>
                  <li>• GDPR and regulatory compliance requirements</li>
                  <li>• Digital transformation increasing attack surface</li>
                  <li>• Remote work security challenges</li>
                  <li>• Ireland's concentration of tech/finance sectors</li>
                  <li>• Ransomware and data breach concerns</li>
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
                  <h4 className="text-xl font-semibold text-gray-800">Level 7/8 Degree</h4>
                  <p className="text-gray-700 mt-2">
                    Cyber Security, Computer Science, or IT Security degrees from Irish TUs and universities. MTU Cork, TU Dublin, and UL offer specialized cyber security programs aligned with industry needs.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-6">
                  <h4 className="text-xl font-semibold text-gray-800">Professional Certifications</h4>
                  <p className="text-gray-700 mt-2">
                    CompTIA Security+, CEH (Certified Ethical Hacker), or GSEC highly valued. Many Irish employers fund certification paths for employees. Can enable career entry without degree.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-6">
                  <h4 className="text-xl font-semibold text-gray-800">Career Transition</h4>
                  <p className="text-gray-700 mt-2">
                    Common transition from IT support, networking, or system administration roles. Irish companies support upskilling into cyber security due to skills shortage.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Key Knowledge Areas</h3>
              <div className="bg-gray-50 p-6 rounded-lg">
                <ul className="space-y-3 text-gray-700">
                  <li>• Network security fundamentals</li>
                  <li>• Security information and event management (SIEM)</li>
                  <li>• Threat intelligence and analysis</li>
                  <li>• Incident detection and response</li>
                  <li>• Vulnerability assessment</li>
                  <li>• Security frameworks and standards</li>
                  <li>• Operating system security</li>
                  <li>• Cryptography basics</li>
                  <li>• GDPR and compliance</li>
                  <li>• Security tools and technologies</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 text-white text-center" style={{backgroundColor: '#00b2e3'}}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Cyber Security Career?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Explore resources and discover how to become a cyber security analyst.
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

