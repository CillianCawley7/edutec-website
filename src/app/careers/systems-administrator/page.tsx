'use client';

import * as React from 'react';
import Navbar from '../../components/NavBar';
import Footer from '../../components/Footer';
import LogoBar from '../../components/LogoBar';
import Link from 'next/link';

export default function SystemsAdministratorPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen text-gray-800 font-sans">
        <section className="text-white py-16 pt-24" style={{background: 'linear-gradient(to right, #00b2e3, #0099c7)'}}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center mb-4">
              <Link href="/careers" className="text-blue-200 hover:text-white mr-2">← Back to Careers</Link>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Systems Administrator</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl">
              Maintain and configure computer systems and servers. Ensure system reliability, performance, and security for organizational IT infrastructure.
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
                Systems Administrators are the backbone of IT operations, maintaining servers, networks, and systems that organizations depend on daily. They install and configure systems, manage user accounts, perform backups, monitor performance, and troubleshoot issues. This hands-on role is critical to business continuity.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Every Irish organization with IT infrastructure needs systems administrators. The role offers stable employment, practical skills development, and clear career progression towards senior technical or management positions.
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-semibold mb-6" style={{color: '#00b2e3'}}>Key responsibilities</h3>
              <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg">
                <li>Install and configure servers and systems</li>
                <li>Manage user accounts and permissions</li>
                <li>Perform system backups and recovery</li>
                <li>Monitor system performance</li>
                <li>Apply security patches and updates</li>
                <li>Troubleshoot system issues</li>
                <li>Maintain system documentation</li>
                <li>Automate routine tasks</li>
                <li>Ensure system availability</li>
                <li>Provide technical support</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">What skills are needed?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">System Administration</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Linux/Unix administration</li>
                  <li>• Windows Server</li>
                  <li>• Active Directory</li>
                  <li>• Virtualization (VMware, Hyper-V)</li>
                  <li>• Cloud platforms (AWS, Azure)</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Technical Skills</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Scripting (Bash, PowerShell, Python)</li>
                  <li>• Networking fundamentals</li>
                  <li>• Backup and recovery</li>
                  <li>• Security best practices</li>
                  <li>• Monitoring tools</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Professional Skills</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Problem-solving</li>
                  <li>• Attention to detail</li>
                  <li>• Documentation</li>
                  <li>• Time management</li>
                  <li>• Communication</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 max-w-6xl mx-auto bg-white">
          <h2 className="text-3xl font-bold mb-8 text-center">What is the pay?</h2>
          <div className="bg-green-50 border-l-4 border-green-500 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4 text-green-800">Average Salary in Ireland</h3>
            <p className="text-3xl font-bold text-green-700 mb-4">€32,000 - €58,000</p>
            <p className="text-lg text-gray-700 mb-4">
              Junior sysadmins earn €32,000-€38,000, mid-level administrators earn €40,000-€50,000, while senior administrators command €52,000-€65,000.
            </p>
            <p className="text-lg text-gray-700">
              Solid career with stable employment. Benefits include health insurance, pension contributions, professional development, on-call compensation where applicable, and increasingly common remote/hybrid work options.
            </p>
          </div>
        </section>

        <section className="py-16 px-6 bg-blue-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">What is the career outlook?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Job Growth</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Consistent demand across all sectors in Ireland. Over 800 systems administrator positions advertised annually. Essential role ensures stable employment.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Why the growth?</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• Growing IT infrastructure needs</li>
                  <li>• Hybrid cloud environments</li>
                  <li>• System complexity increasing</li>
                  <li>• Security requirements</li>
                  <li>• Business dependence on IT</li>
                  <li>• Remote work infrastructure</li>
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
                  <h4 className="text-xl font-semibold text-gray-800">Level 6/7 IT Qualification</h4>
                  <p className="text-gray-700 mt-2">
                    Higher Certificate or Ordinary Degree in IT, Computer Science, or Systems Administration from Irish TUs. Level 6 often sufficient for entry roles.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-6">
                  <h4 className="text-xl font-semibold text-gray-800">Professional Certifications</h4>
                  <p className="text-gray-700 mt-2">
                    Microsoft MCSA, Linux+ (CompTIA), or Red Hat certifications highly valued. Can enable entry without degree with strong practical skills.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-6">
                  <h4 className="text-xl font-semibold text-gray-800">Practical Experience</h4>
                  <p className="text-gray-700 mt-2">
                    Many administrators start in IT support roles and progress through hands-on experience and self-study. Home labs for learning highly beneficial.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Key Skills to Master</h3>
              <div className="bg-gray-50 p-6 rounded-lg">
                <ul className="space-y-3 text-gray-700">
                  <li>• Linux/Windows Server administration</li>
                  <li>• Active Directory management</li>
                  <li>• Scripting and automation</li>
                  <li>• Virtualization technologies</li>
                  <li>• Backup and disaster recovery</li>
                  <li>• Monitoring and alerting</li>
                  <li>• Networking fundamentals</li>
                  <li>• Security practices</li>
                  <li>• Cloud services (AWS, Azure)</li>
                  <li>• Troubleshooting methodology</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 text-white text-center" style={{backgroundColor: '#00b2e3'}}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Ready to Manage IT Systems?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Explore resources for systems administration careers.
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

