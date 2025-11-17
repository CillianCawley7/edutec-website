'use client';

import * as React from 'react';
import Navbar from '../../components/NavBar';
import Footer from '../../components/Footer';
import LogoBar from '../../components/LogoBar';
import Link from 'next/link';

export default function DataScientistPage() {
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Data Scientist</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl">
              Analyze large datasets to extract insights, create predictive models, and guide business decisions using machine learning, statistics, and data visualization.
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
                Data scientists combine statistical expertise, programming skills, and domain knowledge to extract meaningful insights from data. They build predictive models, identify trends, and help organizations make data-driven decisions. Data science sits at the intersection of mathematics, computer science, and business understanding.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Ireland has emerged as a European data science hub, with multinational tech companies, financial institutions, and healthcare organizations employing data scientists to gain competitive advantages. Irish data scientists work on cutting-edge problems from fraud detection to personalized medicine, often with global impact.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Specializations include Machine Learning Engineering, Business Analytics, Healthcare Analytics, Financial Modeling, and Natural Language Processing.
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-semibold mb-6" style={{color: '#00b2e3'}}>What do data scientists do?</h3>
              <p className="text-lg text-gray-700 mb-6">
                Data scientists typically work standard full-time hours with flexibility for remote work. Irish companies increasingly offer hybrid working arrangements.
              </p>
              <p className="text-lg text-gray-700 mb-4">Some of the things a data scientist might do:</p>
              <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg">
                <li>Collect, clean, and prepare large datasets for analysis</li>
                <li>Perform exploratory data analysis to identify patterns</li>
                <li>Build and train machine learning models</li>
                <li>Create data visualizations to communicate findings</li>
                <li>Develop predictive models for business problems</li>
                <li>A/B test hypotheses and measure impact</li>
                <li>Collaborate with stakeholders to understand requirements</li>
                <li>Deploy models to production environments</li>
                <li>Monitor model performance and retrain as needed</li>
                <li>Present insights to technical and non-technical audiences</li>
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
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Programming & Tools</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Python (pandas, NumPy, scikit-learn)</li>
                  <li>• R programming language</li>
                  <li>• SQL for database queries</li>
                  <li>• Jupyter Notebooks</li>
                  <li>• Git version control</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Statistics & ML</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Statistical analysis and hypothesis testing</li>
                  <li>• Machine learning algorithms</li>
                  <li>• Deep learning (TensorFlow, PyTorch)</li>
                  <li>• Feature engineering</li>
                  <li>• Model evaluation and optimization</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Business Skills</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Communication and storytelling</li>
                  <li>• Data visualization (Tableau, matplotlib)</li>
                  <li>• Business acumen</li>
                  <li>• Critical thinking</li>
                  <li>• Project management</li>
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
            <p className="text-3xl font-bold text-green-700 mb-4">€40,000 - €75,000</p>
            <p className="text-lg text-gray-700 mb-4">
              Junior data scientists in Ireland earn €40,000-€50,000, mid-level scientists earn €55,000-€70,000, while senior data scientists command €75,000-€95,000. Lead data scientists and managers at major tech firms can earn €100,000-€130,000+.
            </p>
            <p className="text-lg text-gray-700">
              Compensation reflects high demand and specialized skills. Total packages often include performance bonuses (10-20%), equity/stock options at tech companies, health insurance, pension contributions, conference attendance, and learning budgets for courses. Financial and pharmaceutical sectors typically offer highest salaries.
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
                  Data science is consistently ranked among Ireland's top 5 most in-demand roles. Over 1,000 data scientist positions are advertised annually, with demand far exceeding qualified candidate supply.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  The National Skills Bulletin identifies data science as experiencing severe skills shortages. Enterprise Ireland reports 65% of Irish businesses plan to increase data science capabilities, driving sustained growth.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Why the growth?</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• Explosion of available data</li>
                  <li>• AI and ML adoption across industries</li>
                  <li>• Data-driven decision making becoming standard</li>
                  <li>• Ireland's strong fintech and pharma sectors</li>
                  <li>• GDPR compliance needs (data expertise)</li>
                  <li>• Predictive analytics demand</li>
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
                  <h4 className="text-xl font-semibold text-gray-800">Master's Degree (Most Common)</h4>
                  <p className="text-gray-700 mt-2">
                    MSc in Data Science, Data Analytics, or Machine Learning from Irish universities (UCD, TCD, UCC offer excellent programs). Many combine computer science undergraduate degree with data science master's.
                  </p>
                </div>
                
                <div className="border-l-4 border-green-500 pl-6">
                  <h4 className="text-xl font-semibold text-gray-800">Quantitative Bachelor's Degree</h4>
                  <p className="text-gray-700 mt-2">
                    Computer Science, Statistics, Mathematics, Physics, or Engineering degrees provide foundation. Self-study and certifications supplement formal education.
                  </p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-6">
                  <h4 className="text-xl font-semibold text-gray-800">Bootcamps & Courses</h4>
                  <p className="text-gray-700 mt-2">
                    Data science bootcamps or online programs (Coursera, DataCamp) combined with portfolio projects. Career changers from engineering, finance, or science backgrounds common.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Key Course Topics</h3>
              <div className="bg-gray-50 p-6 rounded-lg">
                <ul className="space-y-3 text-gray-700">
                  <li>• Statistics and probability</li>
                  <li>• Machine learning algorithms</li>
                  <li>• Python programming for data science</li>
                  <li>• SQL and database management</li>
                  <li>• Data visualization</li>
                  <li>• Deep learning and neural networks</li>
                  <li>• Big data technologies (Spark, Hadoop)</li>
                  <li>• Natural language processing</li>
                  <li>• Time series analysis</li>
                  <li>• A/B testing and experimentation</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-6 text-white text-center" style={{backgroundColor: '#00b2e3'}}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Data Science Journey?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Explore our resources and discover how to begin your career in data science.
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

