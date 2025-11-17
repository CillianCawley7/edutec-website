'use client';

import * as React from 'react';
import Navbar from '../../components/NavBar';
import Footer from '../../components/Footer';
import LogoBar from '../../components/LogoBar';
import Link from 'next/link';

export default function DataAnalystPage() {
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Data Analyst</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl">
              Collect, process, and analyze data to help organizations make informed decisions. Create reports, dashboards, and visualizations that turn data into actionable insights.
            </p>
            <div className="mt-6">
              <span className="inline-block bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                Career Cluster: Data & AI
              </span>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-20 px-6 max-w-7xl mx-auto bg-white">
          <h2 className="text-4xl font-bold mb-16 text-center text-gray-800">What you need to know</h2>
          
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-3xl font-semibold mb-6" style={{color: '#00b2e3'}}>Overview</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Data analysts transform raw data into meaningful insights that drive business decisions. They work with databases, spreadsheets, and visualization tools to identify trends, patterns, and opportunities. Data analysts bridge the gap between data and decision-makers, making complex information accessible and actionable.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Every sector in Ireland employs data analysts - from tech giants in Dublin to healthcare providers, retail chains, and financial institutions across the country. The role offers an accessible entry point into data careers, with clear progression towards data science, business intelligence, or analytics management.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Specializations include Business Intelligence, Financial Analysis, Marketing Analytics, Operations Analytics, and Healthcare Analytics.
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-semibold mb-6" style={{color: '#00b2e3'}}>What do data analysts do?</h3>
              <p className="text-lg text-gray-700 mb-6">
                Data analysts typically work standard office hours with growing flexibility for hybrid/remote work in Irish companies.
              </p>
              <p className="text-lg text-gray-700 mb-4">Some of the things a data analyst might do:</p>
              <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg">
                <li>Extract data from databases using SQL queries</li>
                <li>Clean and prepare data for analysis</li>
                <li>Analyze datasets to identify trends and patterns</li>
                <li>Create dashboards and visualizations (Tableau, Power BI)</li>
                <li>Prepare reports for stakeholders</li>
                <li>Monitor KPIs and business metrics</li>
                <li>Conduct A/B tests and statistical analysis</li>
                <li>Collaborate with teams to understand data needs</li>
                <li>Present findings to non-technical audiences</li>
                <li>Automate repetitive reporting tasks</li>
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
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Technical Skills</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• SQL for database queries</li>
                  <li>• Microsoft Excel (advanced functions, pivot tables)</li>
                  <li>• Python or R basics</li>
                  <li>• Statistical analysis</li>
                  <li>• Data cleaning techniques</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Visualization Tools</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Tableau or Power BI</li>
                  <li>• Data visualization best practices</li>
                  <li>• Dashboard design</li>
                  <li>• Google Analytics</li>
                  <li>• Reporting tools</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Soft Skills</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Communication and storytelling</li>
                  <li>• Business acumen</li>
                  <li>• Attention to detail</li>
                  <li>• Critical thinking</li>
                  <li>• Problem-solving</li>
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
            <p className="text-3xl font-bold text-green-700 mb-4">€32,000 - €55,000</p>
            <p className="text-lg text-gray-700 mb-4">
              Junior data analysts in Ireland earn €32,000-€38,000, mid-level analysts earn €40,000-€50,000, while senior data analysts command €52,000-€65,000. Analytics managers can earn €70,000+.
            </p>
            <p className="text-lg text-gray-700">
              Salaries vary by industry (financial services pay highest), location (Dublin offers premium), company size, and specialization. Many positions include benefits like health insurance, pension matching, professional development budgets for certifications (Tableau, SQL), and flexible working arrangements.
            </p>
          </div>
        </section>

        {/* Career Outlook Section */}
        <section className="py-16 px-6 bg-blue-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">What is the career outlook?</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Job Growth in Ireland</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Data analyst roles are among Ireland's fastest-growing positions, with over 1,200 openings advertised annually. The role offers excellent entry into data careers with strong progression opportunities.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  Every sector needs data analysts - from healthcare (HSE) to retail (Dunnes, Tesco), tech (indeed, LinkedIn), banking (AIB, Bank of Ireland), and government departments. Remote work opportunities have expanded significantly.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Why the growth?</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• Data-driven decision making now standard</li>
                  <li>• Digital transformation across industries</li>
                  <li>• Increasing data availability</li>
                  <li>• Need for business intelligence</li>
                  <li>• Customer analytics demand</li>
                  <li>• Accessible entry-level career path</li>
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
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Educational Pathways</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h4 className="text-xl font-semibold text-gray-800">Level 7/8 Degree</h4>
                  <p className="text-gray-700 mt-2">
                    Business Analytics, Data Analytics, Computer Science, Mathematics, Economics, or Business degrees from Irish universities or TUs. Level 7 often sufficient for entry roles.
                  </p>
                </div>
                
                <div className="border-l-4 border-green-500 pl-6">
                  <h4 className="text-xl font-semibold text-gray-800">Professional Certifications</h4>
                  <p className="text-gray-700 mt-2">
                    Google Data Analytics Certificate, Microsoft Power BI certification, Tableau Desktop Specialist. These can supplement or sometimes substitute for formal degrees with strong portfolio.
                  </p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-6">
                  <h4 className="text-xl font-semibold text-gray-800">Career Transition</h4>
                  <p className="text-gray-700 mt-2">
                    Common transition from finance, marketing, operations roles. Online courses (Coursera, DataCamp) plus portfolio projects can enable career change.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Key Skills to Develop</h3>
              <div className="bg-gray-50 p-6 rounded-lg">
                <ul className="space-y-3 text-gray-700">
                  <li>• SQL fundamentals</li>
                  <li>• Excel advanced functions</li>
                  <li>• Statistics basics</li>
                  <li>• Tableau or Power BI</li>
                  <li>• Python basics (pandas, matplotlib)</li>
                  <li>• Data cleaning techniques</li>
                  <li>• Visualization design principles</li>
                  <li>• Business metrics understanding</li>
                  <li>• Presentation skills</li>
                  <li>• Domain knowledge (finance, marketing, etc.)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-6 text-white text-center" style={{backgroundColor: '#00b2e3'}}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Data Analytics Journey?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Explore our resources and discover how to begin your career as a data analyst.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/qualifications" 
                className="bg-white px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition" style={{color: '#00b2e3'}}
              >
                View Qualifications
              </Link>
              <Link 
                href="/events" 
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:opacity-90 transition"
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

