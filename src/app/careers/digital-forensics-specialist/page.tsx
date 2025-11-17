'use client';

import * as React from 'react';
import Navbar from '../../components/NavBar';
import Footer from '../../components/Footer';
import LogoBar from '../../components/LogoBar';
import Link from 'next/link';

export default function DigitalForensicsSpecialistPage() {
  return (
    <>
      <Navbar />
      
      <main className="min-h-screen text-gray-800 font-sans">
        <section className="text-white py-16 pt-24" style={{background: 'linear-gradient(to right, #00b2e3, #0099c7)'}}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center mb-4">
              <Link href="/careers" className="text-blue-200 hover:text-white mr-2">← Back to Careers</Link>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Digital Forensics Specialist</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl">
              Investigate cybercrimes and security breaches. Recover and analyze digital evidence, prepare reports for legal proceedings, and support law enforcement investigations.
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
                Digital Forensics Specialists investigate cybercrimes, security breaches, and digital evidence. They recover data from devices, analyze digital footprints, reconstruct cyber incidents, and prepare evidence for legal proceedings. This role combines technical expertise with investigative skills and understanding of legal requirements.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Ireland's An Garda Síochána Cyber Crime Bureau, law firms, financial institutions, and consulting firms employ digital forensics specialists. The role offers unique combination of technical challenge and investigative work, often supporting high-profile cases.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Specializations include Computer Forensics, Mobile Device Forensics, Network Forensics, and Malware Analysis.
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-semibold mb-6" style={{color: '#00b2e3'}}>What do forensics specialists do?</h3>
              <p className="text-lg text-gray-700 mb-4">Key responsibilities:</p>
              <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg">
                <li>Collect and preserve digital evidence</li>
                <li>Analyze computers, mobile devices, and networks</li>
                <li>Recover deleted or encrypted data</li>
                <li>Reconstruct cyber incidents and timelines</li>
                <li>Document findings in court-admissible reports</li>
                <li>Testify as expert witness in legal proceedings</li>
                <li>Investigate data breaches and insider threats</li>
                <li>Analyze malware and attack methods</li>
                <li>Maintain chain of custody</li>
                <li>Stay current with forensic tools and techniques</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">What skills are needed?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Forensic Tools</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• EnCase, FTK, Autopsy</li>
                  <li>• Wireshark, NetworkMiner</li>
                  <li>• Volatility (memory forensics)</li>
                  <li>• Mobile forensics tools (Cellebrite)</li>
                  <li>• Data recovery software</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Technical Knowledge</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• File systems and storage</li>
                  <li>• Operating systems internals</li>
                  <li>• Network protocols</li>
                  <li>• Cryptography and encryption</li>
                  <li>• Malware analysis basics</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Professional Skills</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Analytical thinking</li>
                  <li>• Attention to detail</li>
                  <li>• Report writing</li>
                  <li>• Legal knowledge</li>
                  <li>• Ethical integrity</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 max-w-6xl mx-auto bg-white">
          <h2 className="text-3xl font-bold mb-8 text-center">What is the pay?</h2>
          <div className="bg-green-50 border-l-4 border-green-500 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4 text-green-800">Average Salary in Ireland</h3>
            <p className="text-3xl font-bold text-green-700 mb-4">€40,000 - €75,000</p>
            <p className="text-lg text-gray-700 mb-4">
              Junior forensics specialists earn €40,000-€48,000, mid-level specialists earn €52,000-€65,000, while senior specialists command €70,000-€85,000. Private sector typically pays more than public sector roles.
            </p>
            <p className="text-lg text-gray-700">
              Specialized skills command premium salaries. Benefits include certification funding (EnCE, GCFE), professional development, court appearance allowances, and career progression opportunities. Law enforcement roles offer job security and pensions.
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
                  Growing demand for digital forensics specialists across law enforcement, legal firms, financial services, and consulting. Approximately 200-300 positions in Ireland with steady growth projected.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  Specialized field with relatively few qualified practitioners creates good opportunities. Career paths in law enforcement, corporate investigations, or consulting.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Why the growth?</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• Increasing cybercrime rates</li>
                  <li>• Data breach investigations</li>
                  <li>• Corporate fraud and insider threats</li>
                  <li>• Legal requirements for digital evidence</li>
                  <li>• Mobile device proliferation</li>
                  <li>• GDPR incident investigation</li>
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
                  <h4 className="text-xl font-semibold text-gray-800">Forensics Degree + Certifications</h4>
                  <p className="text-gray-700 mt-2">
                    Digital Forensics, Cyber Security, or Computer Science degree. Professional certifications (EnCE, GCFE, CHFI) essential for credibility and career advancement.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-6">
                  <h4 className="text-xl font-semibold text-gray-800">Law Enforcement Path</h4>
                  <p className="text-gray-700 mt-2">
                    Garda training with specialization in cyber crime. Internal forensics training provided by An Garda Síochána Cyber Crime Bureau.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Key Knowledge Areas</h3>
              <div className="bg-gray-50 p-6 rounded-lg">
                <ul className="space-y-3 text-gray-700">
                  <li>• Digital forensics methodologies</li>
                  <li>• Evidence collection and preservation</li>
                  <li>• Forensic tool proficiency</li>
                  <li>• File system analysis</li>
                  <li>• Memory forensics</li>
                  <li>• Network forensics</li>
                  <li>• Mobile device forensics</li>
                  <li>• Legal procedures and testimony</li>
                  <li>• Report writing</li>
                  <li>• Chain of custody protocols</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 text-white text-center" style={{backgroundColor: '#00b2e3'}}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Ready to Become a Digital Forensics Specialist?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Explore resources and discover how to enter digital forensics.
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

