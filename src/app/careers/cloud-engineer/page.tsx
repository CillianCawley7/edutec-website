'use client';

import * as React from 'react';
import Navbar from '../../components/NavBar';
import Footer from '../../components/Footer';
import LogoBar from '../../components/LogoBar';
import Link from 'next/link';

export default function CloudEngineerPage() {
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Cloud Engineer</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl">
              Design, implement, and manage cloud-based infrastructure and services. Work with AWS, Azure, or Google Cloud to build scalable, secure, and cost-effective solutions.
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
                Cloud engineers design, build, and maintain cloud infrastructure and services. They help organizations migrate from on-premise systems to cloud platforms, optimize cloud costs, ensure security and compliance, and architect scalable solutions. Cloud engineers are critical as businesses increasingly adopt cloud-first strategies.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Ireland serves as a major European cloud hub, hosting data centers for AWS, Microsoft Azure, and Google Cloud. Irish cloud engineers support businesses globally, managing infrastructure serving millions of users. The sector offers excellent opportunities across multinationals, cloud-native startups, and traditional enterprises undergoing digital transformation.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Specializations include Cloud Architecture, Cloud Security, Cloud Migration, Multi-Cloud Engineering, and FinOps (cloud financial management).
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-semibold mb-6 text-blue-600">What do cloud engineers do?</h3>
              <p className="text-lg text-gray-700 mb-6">
                Cloud engineers typically work full-time with flexibility for remote work. Many Irish positions offer hybrid arrangements, and the role's digital nature enables international opportunities.
              </p>
              <p className="text-lg text-gray-700 mb-4">Some of the things a cloud engineer might do:</p>
              <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg">
                <li>Design and implement cloud infrastructure architectures</li>
                <li>Migrate applications and data to cloud platforms</li>
                <li>Manage and optimize cloud resources and costs</li>
                <li>Implement cloud security and compliance measures</li>
                <li>Automate infrastructure deployment using IaC tools</li>
                <li>Monitor cloud systems and optimize performance</li>
                <li>Implement disaster recovery and backup strategies</li>
                <li>Configure networking, load balancing, and storage</li>
                <li>Collaborate with development teams on cloud solutions</li>
                <li>Stay current with cloud services and best practices</li>
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
                <h3 className="text-xl font-semibold mb-3 text-blue-700">Cloud Platforms</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• AWS (EC2, S3, RDS, Lambda, VPC)</li>
                  <li>• Microsoft Azure (VMs, Storage, App Services)</li>
                  <li>• Google Cloud Platform (Compute Engine, GCS)</li>
                  <li>• Cloud-native services understanding</li>
                  <li>• Multi-cloud strategies</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-blue-700">Technical Skills</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Infrastructure as Code (Terraform, CloudFormation)</li>
                  <li>• Containerization (Docker, Kubernetes)</li>
                  <li>• Networking and security</li>
                  <li>• Scripting (Python, Bash, PowerShell)</li>
                  <li>• CI/CD pipelines</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-blue-700">Professional Skills</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Cost optimization mindset</li>
                  <li>• Problem-solving abilities</li>
                  <li>• Communication and documentation</li>
                  <li>• Project management basics</li>
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
            <p className="text-3xl font-bold text-green-700 mb-4">€45,000 - €85,000</p>
            <p className="text-lg text-gray-700 mb-4">
              Junior cloud engineers in Ireland earn €45,000-€55,000, while mid-level engineers command €60,000-€75,000. Senior cloud engineers and cloud architects can earn €80,000-€110,000+, with specialists in high-demand areas earning even more.
            </p>
            <p className="text-lg text-gray-700">
              Salaries reflect strong demand and specialized skills. AWS certification holders typically earn €5,000-€10,000 more than non-certified peers. Total compensation often includes bonuses (10-15%), health insurance, pension contributions, certification funding, and professional development budgets. Many roles offer remote flexibility.
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
                  Cloud engineering is among Ireland's fastest-growing tech roles, with over 1,800 positions advertised annually. Skillnet Ireland and IDA Ireland identify cloud skills as critical for Ireland's continued success as a tech hub.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  Research from Enterprise Ireland shows 78% of Irish businesses are investing in cloud migration, driving sustained demand. The role offers excellent career progression towards cloud architecture, management, or specialized areas like FinOps.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-blue-700">Why the growth?</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• Accelerated cloud adoption across all sectors</li>
                  <li>• Cost savings and scalability benefits</li>
                  <li>• Ireland as European cloud data center hub</li>
                  <li>• Hybrid and multi-cloud strategies</li>
                  <li>• Digital transformation initiatives</li>
                  <li>• Remote work infrastructure needs</li>
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
                  <h4 className="text-xl font-semibold text-gray-800">Degree + Certifications</h4>
                  <p className="text-gray-700 mt-2">
                    Level 8 degree in Computer Science or IT preferred, combined with cloud certifications (AWS Solutions Architect, Azure Administrator). Many Irish universities now include cloud computing modules.
                  </p>
                </div>
                
                <div className="border-l-4 border-green-500 pl-6">
                  <h4 className="text-xl font-semibold text-gray-800">Professional Certifications (Critical)</h4>
                  <p className="text-gray-700 mt-2">
                    AWS Certified Solutions Architect, Microsoft Azure Administrator, Google Cloud Professional Cloud Architect. Certifications often more valued than degrees due to practical, current knowledge they demonstrate.
                  </p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-6">
                  <h4 className="text-xl font-semibold text-gray-800">Career Transition</h4>
                  <p className="text-gray-700 mt-2">
                    Many cloud engineers transition from system administration, network engineering, or development roles, gaining cloud skills through certifications and hands-on experience.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-700">Key Knowledge Areas</h3>
              <div className="bg-gray-50 p-6 rounded-lg">
                <ul className="space-y-3 text-gray-700">
                  <li>• Cloud service models (IaaS, PaaS, SaaS)</li>
                  <li>• Cloud architecture patterns</li>
                  <li>• Networking and security</li>
                  <li>• Infrastructure as Code (Terraform)</li>
                  <li>• Containerization and orchestration</li>
                  <li>• Cost optimization strategies</li>
                  <li>• Disaster recovery and backup</li>
                  <li>• Compliance and governance</li>
                  <li>• Monitoring and logging</li>
                  <li>• Automation and scripting</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-6 bg-blue-600 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Ready to Launch Your Cloud Engineering Career?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Explore our resources and discover how to begin your journey in cloud engineering.
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

