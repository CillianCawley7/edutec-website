'use client';

import * as React from 'react';
import Navbar from '../../components/NavBar';
import Footer from '../../components/Footer';
import LogoBar from '../../components/LogoBar';
import Link from 'next/link';

export default function DevOpsEngineerPage() {
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">DevOps Engineer</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl">
              Bridge development and operations teams. Automate deployments, manage infrastructure, monitor systems, and ensure continuous integration and delivery for reliable software releases.
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
                DevOps engineers combine software development (Dev) and IT operations (Ops) to shorten development cycles and deliver software more reliably. They automate and streamline processes, manage infrastructure, and ensure systems are scalable, secure, and highly available. DevOps represents a cultural shift toward collaboration and continuous improvement.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Ireland's tech sector has strongly embraced DevOps practices, with high demand for skilled engineers across all company sizes. Irish DevOps engineers work with cutting-edge technologies, managing infrastructure for applications serving global audiences from Dublin, Cork, Galway, and Limerick tech hubs.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Specializations include Site Reliability Engineering (SRE), Platform Engineering, Release Engineering, and Infrastructure Automation.
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-semibold mb-6 text-blue-600">What do DevOps engineers do?</h3>
              <p className="text-lg text-gray-700 mb-6">
                DevOps engineers work full-time with on-call responsibilities for system incidents. Many Irish companies offer flexible schedules and remote work, with on-call compensated through time off or additional pay.
              </p>
              <p className="text-lg text-gray-700 mb-4">Some of the things a DevOps engineer might do:</p>
              <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg">
                <li>Design and implement CI/CD pipelines for automated deployments</li>
                <li>Manage cloud infrastructure (AWS, Azure, Google Cloud)</li>
                <li>Automate repetitive tasks using scripting and tools</li>
                <li>Monitor system performance and reliability</li>
                <li>Implement containerization with Docker and Kubernetes</li>
                <li>Manage infrastructure as code (Terraform, Ansible)</li>
                <li>Respond to and resolve production incidents</li>
                <li>Optimize system performance and costs</li>
                <li>Ensure security and compliance</li>
                <li>Collaborate with development teams</li>
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
                <h3 className="text-xl font-semibold mb-3 text-blue-700">Core DevOps Tools</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• CI/CD: Jenkins, GitLab CI, GitHub Actions</li>
                  <li>• Containers: Docker, Kubernetes</li>
                  <li>• IaC: Terraform, Ansible, CloudFormation</li>
                  <li>• Monitoring: Prometheus, Grafana, ELK</li>
                  <li>• Version control: Git</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-blue-700">Technical Skills</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Cloud platforms (AWS, Azure, GCP)</li>
                  <li>• Scripting (Python, Bash, PowerShell)</li>
                  <li>• Linux/Unix system administration</li>
                  <li>• Networking and security</li>
                  <li>• Database management</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-blue-700">Professional Skills</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Problem-solving under pressure</li>
                  <li>• Communication across teams</li>
                  <li>• Automation mindset</li>
                  <li>• Continuous learning</li>
                  <li>• Incident management</li>
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
            <p className="text-3xl font-bold text-green-700 mb-4">€45,000 - €80,000</p>
            <p className="text-lg text-gray-700 mb-4">
              Mid-level DevOps engineers in Ireland earn €45,000-€60,000, while senior engineers command €65,000-€80,000. Lead and principal DevOps engineers at major tech companies can earn €85,000-€110,000+, often with on-call allowances and bonuses.
            </p>
            <p className="text-lg text-gray-700">
              Compensation reflects the critical nature of the role and skills shortage. Benefits typically include health insurance, pension contributions, professional certification funding (AWS, Kubernetes), flexible working, and on-call compensation. Many positions offer 100% remote work options.
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
                  DevOps engineering ranks among Ireland's top 10 most in-demand tech roles. Over 1,500 DevOps positions are advertised annually, with demand consistently exceeding qualified candidate supply.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  The National Skills Bulletin identifies DevOps/Cloud Engineers as experiencing skills shortages across all experience levels. Irish companies actively upskill developers into DevOps roles to meet demand.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-blue-700">Why the growth?</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• Cloud migration acceleration post-pandemic</li>
                  <li>• Need for faster, more reliable deployments</li>
                  <li>• Digital transformation initiatives</li>
                  <li>• Kubernetes and container adoption</li>
                  <li>• Growing system complexity</li>
                  <li>• Security and compliance requirements</li>
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
                  <h4 className="text-xl font-semibold text-gray-800">Computer Science Degree</h4>
                  <p className="text-gray-700 mt-2">
                    Level 8 degree in Computer Science, Software Engineering, or IT. Provides foundation, though many DevOps engineers transition from development or operations roles with experience.
                  </p>
                </div>
                
                <div className="border-l-4 border-green-500 pl-6">
                  <h4 className="text-xl font-semibold text-gray-800">Professional Certifications</h4>
                  <p className="text-gray-700 mt-2">
                    Industry certifications highly valued: AWS Certified Solutions Architect, Certified Kubernetes Administrator (CKA), HashiCorp Terraform, Azure Administrator. Often funded by employers.
                  </p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-6">
                  <h4 className="text-xl font-semibold text-gray-800">Transition from Other Roles</h4>
                  <p className="text-gray-700 mt-2">
                    Many DevOps engineers transition from software development, system administration, or network engineering roles, gaining DevOps skills through work experience and self-study.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-700">Key Skills to Develop</h3>
              <div className="bg-gray-50 p-6 rounded-lg">
                <ul className="space-y-3 text-gray-700">
                  <li>• Linux system administration</li>
                  <li>• Cloud platforms (AWS/Azure/GCP)</li>
                  <li>• Container orchestration (Kubernetes)</li>
                  <li>• CI/CD pipeline implementation</li>
                  <li>• Infrastructure as Code (Terraform)</li>
                  <li>• Scripting (Python, Bash)</li>
                  <li>• Monitoring and logging</li>
                  <li>• Networking fundamentals</li>
                  <li>• Security best practices</li>
                  <li>• Agile methodologies</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-6 bg-blue-600 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your DevOps Journey?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Explore our resources and discover how to begin your career in DevOps engineering.
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

