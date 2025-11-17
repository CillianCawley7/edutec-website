'use client';

import * as React from 'react';
import Navbar from '../../components/NavBar';
import Footer from '../../components/Footer';
import LogoBar from '../../components/LogoBar';
import Link from 'next/link';

export default function ProjectManagerPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen text-gray-800 font-sans">
        <section className="text-white py-16 pt-24" style={{background: 'linear-gradient(to right, #00b2e3, #0099c7)'}}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center mb-4">
              <Link href="/careers" className="text-blue-200 hover:text-white mr-2">← Back to Careers</Link>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Project Manager</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl">
              Plan, execute, and oversee technology projects. Coordinate teams, manage budgets, ensure project success, and deliver results on time and within scope.
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
                Project Managers lead technology projects from initiation through completion. They plan project scope, coordinate teams, manage budgets and timelines, mitigate risks, and ensure deliverables meet requirements. This role requires leadership, organization, and ability to balance competing priorities.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Every Irish organization running technology projects needs project managers. The role offers excellent career progression, variety working across different projects, and opportunity to drive significant organizational change.
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-semibold mb-6 text-blue-600">Key responsibilities</h3>
              <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg">
                <li>Define project scope and objectives</li>
                <li>Create project plans and schedules</li>
                <li>Manage project budgets</li>
                <li>Coordinate project teams</li>
                <li>Monitor progress and risks</li>
                <li>Communicate with stakeholders</li>
                <li>Manage project documentation</li>
                <li>Resolve issues and conflicts</li>
                <li>Ensure quality deliverables</li>
                <li>Report to senior management</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">What skills are needed?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-blue-700">Project Management</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Project planning</li>
                  <li>• Agile/Scrum methodologies</li>
                  <li>• Risk management</li>
                  <li>• Budget management</li>
                  <li>• Scheduling and tracking</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-blue-700">Leadership</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Team leadership</li>
                  <li>• Stakeholder management</li>
                  <li>• Conflict resolution</li>
                  <li>• Decision making</li>
                  <li>• Motivation and coaching</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-blue-700">Professional Skills</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Communication</li>
                  <li>• Organization</li>
                  <li>• Problem-solving</li>
                  <li>• Adaptability</li>
                  <li>• Time management</li>
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
              Junior project managers earn €40,000-€50,000, mid-level managers earn €52,000-€65,000, while senior project managers command €68,000-€85,000. Program managers can earn €90,000+.
            </p>
            <p className="text-lg text-gray-700">
              Strong earning potential with experience. Benefits include performance bonuses (10-20%), health insurance, pension contributions, professional certification support (PMP, Prince2, Agile), and career progression to program or portfolio management.
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
                  Strong demand for project managers in Ireland. Over 900 technology project manager positions advertised annually. Essential role ensures stable employment and career progression.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-blue-700">Why the growth?</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• Digital transformation projects</li>
                  <li>• Agile adoption</li>
                  <li>• Complex technology initiatives</li>
                  <li>• Organizational change programs</li>
                  <li>• Cloud migration projects</li>
                  <li>• System implementations</li>
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
                  <h4 className="text-xl font-semibold text-gray-800">Level 8 Degree + Experience</h4>
                  <p className="text-gray-700 mt-2">
                    Degree in any field plus several years project experience. Many project managers have technical backgrounds (Computer Science, IT) combined with project leadership experience.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-6">
                  <h4 className="text-xl font-semibold text-gray-800">Professional Certifications (Essential)</h4>
                  <p className="text-gray-700 mt-2">
                    PMP (Project Management Professional), Prince2, or Agile certifications highly valued. Many Irish roles require these qualifications.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-6">
                  <h4 className="text-xl font-semibold text-gray-800">Career Progression</h4>
                  <p className="text-gray-700 mt-2">
                    Many project managers progress from technical roles (developer, analyst) or business roles, gaining project experience before formal PM roles.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-700">Key Competencies</h3>
              <div className="bg-gray-50 p-6 rounded-lg">
                <ul className="space-y-3 text-gray-700">
                  <li>• Project planning and scheduling</li>
                  <li>• Agile/Scrum frameworks</li>
                  <li>• Budget and resource management</li>
                  <li>• Risk and issue management</li>
                  <li>• Stakeholder communication</li>
                  <li>• Team leadership</li>
                  <li>• Change management</li>
                  <li>• Quality assurance</li>
                  <li>• Project management tools (Jira, MS Project)</li>
                  <li>• Reporting and documentation</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-blue-600 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Ready to Lead Technology Projects?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Explore resources for project management careers.
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

