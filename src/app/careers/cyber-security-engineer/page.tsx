'use client';

import * as React from 'react';
import Navbar from '../../components/NavBar';
import Footer from '../../components/Footer';
import LogoBar from '../../components/LogoBar';
import Link from 'next/link';

export default function CyberSecurityEngineerPage() {
  return (
    <>
      <Navbar />
      
      <main className="min-h-screen text-gray-800 font-sans">
        <section className="text-white py-16 pt-24" style={{background: 'linear-gradient(to right, #00b2e3, #0099c7)'}}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center mb-4">
              <Link href="/careers" className="text-blue-200 hover:text-white mr-2">← Back to Careers</Link>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Cyber Security Engineer</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl">
              Design and implement security architectures. Build defensive systems, conduct penetration testing, and ensure infrastructure security across organizations.
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
                Cyber Security Engineers design, build, and implement security solutions to protect organizational infrastructure. They architect security systems, conduct penetration testing, implement defensive measures, and ensure systems remain secure against evolving threats. This role combines deep technical expertise with strategic security thinking.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Ireland's tech and financial sectors actively recruit security engineers to protect critical infrastructure and sensitive data. With GDPR regulations and increasing cyber threats, Irish organizations invest heavily in security engineering talent to safeguard operations.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Specializations include Penetration Testing, Cloud Security, Application Security, and Security Architecture.
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-semibold mb-6" style={{color: '#00b2e3'}}>What do security engineers do?</h3>
              <p className="text-lg text-gray-700 mb-6">
                Security engineers work full-time with on-call responsibilities for security incidents. Many Irish positions offer flexible/remote work.
              </p>
              <p className="text-lg text-gray-700 mb-4">Key responsibilities:</p>
              <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg">
                <li>Design and implement security architectures</li>
                <li>Conduct penetration tests and vulnerability assessments</li>
                <li>Build and maintain security infrastructure</li>
                <li>Implement encryption and access controls</li>
                <li>Configure firewalls, VPNs, and IDS/IPS systems</li>
                <li>Develop security automation tools</li>
                <li>Perform security code reviews</li>
                <li>Respond to security incidents</li>
                <li>Conduct security training for teams</li>
                <li>Stay current with threat landscape</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">What skills are needed?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Security Engineering</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Network security architecture</li>
                  <li>• Penetration testing tools (Metasploit, Burp Suite)</li>
                  <li>• Security frameworks (MITRE ATT&CK)</li>
                  <li>• Cryptography and encryption</li>
                  <li>• Firewall and VPN technologies</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Technical Skills</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Linux/Unix security</li>
                  <li>• Scripting (Python, Bash, PowerShell)</li>
                  <li>• Cloud security (AWS, Azure)</li>
                  <li>• Application security</li>
                  <li>• Network protocols</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Professional Skills</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Problem-solving and creativity</li>
                  <li>• Risk assessment</li>
                  <li>• Communication skills</li>
                  <li>• Ethical hacking mindset</li>
                  <li>• Continuous learning</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 max-w-6xl mx-auto bg-white">
          <h2 className="text-3xl font-bold mb-8 text-center">What is the pay?</h2>
          <div className="bg-green-50 border-l-4 border-green-500 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4 text-green-800">Average Salary in Ireland</h3>
            <p className="text-3xl font-bold text-green-700 mb-4">€42,000 - €80,000</p>
            <p className="text-lg text-gray-700 mb-4">
              Junior security engineers earn €42,000-€50,000, mid-level engineers earn €55,000-€70,000, while senior engineers command €75,000-€95,000. Lead engineers and architects can earn €100,000+.
            </p>
            <p className="text-lg text-gray-700">
              Premium salaries reflect critical skills shortage. Benefits include certification funding (OSCP, CISSP), professional development, health insurance, pension contributions, and flexible working. Financial services and tech companies offer highest compensation.
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
                  Security engineering roles growing 40%+ annually in Ireland. Over 800 positions advertised yearly with severe shortage of qualified candidates creating excellent opportunities.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  Irish government's National Cyber Security Strategy and industry demand drive sustained growth. Excellent career progression to architect, CISO, or specialized roles.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Why the growth?</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• Sophisticated cyber threats increasing</li>
                  <li>• Cloud migration security needs</li>
                  <li>• GDPR and compliance requirements</li>
                  <li>• Digital transformation security</li>
                  <li>• Remote work infrastructure protection</li>
                  <li>• Critical infrastructure protection</li>
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
                  <h4 className="text-xl font-semibold text-gray-800">Level 8 Degree + Certifications</h4>
                  <p className="text-gray-700 mt-2">
                    Cyber Security or Computer Science degree from Irish universities. Professional certifications (OSCP, CEH, CISSP) highly valued and often required.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-6">
                  <h4 className="text-xl font-semibold text-gray-800">Technical Background + Certs</h4>
                  <p className="text-gray-700 mt-2">
                    Networking or systems background with security certifications can enable entry. Practical penetration testing skills demonstrated through bug bounties or CTF competitions valued.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Key Skills to Develop</h3>
              <div className="bg-gray-50 p-6 rounded-lg">
                <ul className="space-y-3 text-gray-700">
                  <li>• Penetration testing methodologies</li>
                  <li>• Network security architecture</li>
                  <li>• Security tool proficiency</li>
                  <li>• Cloud security (AWS, Azure)</li>
                  <li>• Scripting and automation</li>
                  <li>• Application security testing</li>
                  <li>• Incident response</li>
                  <li>• Security frameworks knowledge</li>
                  <li>• Cryptography fundamentals</li>
                  <li>• Threat modeling</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 text-white text-center" style={{backgroundColor: '#00b2e3'}}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Ready to Become a Security Engineer?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Explore resources and discover how to launch your security engineering career.
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

