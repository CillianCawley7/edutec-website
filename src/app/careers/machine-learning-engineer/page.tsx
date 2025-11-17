'use client';

import * as React from 'react';
import Navbar from '../../components/NavBar';
import Footer from '../../components/Footer';
import LogoBar from '../../components/LogoBar';
import Link from 'next/link';

export default function MachineLearningEngineerPage() {
  return (
    <>
      <Navbar />
      
      <main className="min-h-screen text-gray-800 font-sans">
        <section className="text-white py-16 pt-24" style={{background: 'linear-gradient(to right, #00b2e3, #0099c7)'}}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center mb-4">
              <Link href="/careers" className="text-blue-200 hover:text-white mr-2">← Back to Careers</Link>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Machine Learning Engineer</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl">
              Build and deploy machine learning models at scale. Focus on model optimization, training pipelines, and production ML systems that power intelligent applications.
            </p>
            <div className="mt-6">
              <span className="inline-block bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">Career Cluster: Data & AI</span>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 max-w-7xl mx-auto bg-white">
          <h2 className="text-4xl font-bold mb-16 text-center text-gray-800">What you need to know</h2>
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-3xl font-semibold mb-6 text-blue-600">Overview</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Machine Learning Engineers bridge data science and software engineering, taking ML models from research to production. They build scalable systems that train, deploy, and monitor ML models serving millions of users. This role requires strong engineering skills combined with ML expertise.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Ireland's tech giants (Google, Meta, Amazon) employ ML engineers working on recommendation systems, fraud detection, and personalization at massive scale. Irish ML engineers contribute to global products while enjoying Ireland's tech ecosystem and quality of life.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Specializations include MLOps, Computer Vision Engineering, NLP Engineering, and Recommendation Systems.
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-semibold mb-6 text-blue-600">What do ML engineers do?</h3>
              <p className="text-lg text-gray-700 mb-6">
                ML engineers work full-time with strong remote/hybrid flexibility in Irish companies.
              </p>
              <p className="text-lg text-gray-700 mb-4">Key responsibilities include:</p>
              <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg">
                <li>Design and implement ML training pipelines</li>
                <li>Deploy models to production environments</li>
                <li>Optimize model performance and inference speed</li>
                <li>Build feature engineering pipelines</li>
                <li>Monitor and maintain production ML systems</li>
                <li>Implement A/B testing for models</li>
                <li>Scale ML infrastructure</li>
                <li>Collaborate with data scientists and engineers</li>
                <li>Automate ML workflows (MLOps)</li>
                <li>Ensure model reliability and quality</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">What skills are needed?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-blue-700">ML & Engineering</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Python (advanced)</li>
                  <li>• TensorFlow, PyTorch</li>
                  <li>• ML algorithms and theory</li>
                  <li>• Model optimization</li>
                  <li>• Feature engineering</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-blue-700">Production & Scale</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• MLOps tools (MLflow, Kubeflow)</li>
                  <li>• Docker & Kubernetes</li>
                  <li>• Cloud platforms (AWS, GCP, Azure)</li>
                  <li>• CI/CD pipelines</li>
                  <li>• Distributed systems</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-blue-700">Professional Skills</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Software engineering best practices</li>
                  <li>• System design</li>
                  <li>• Performance optimization</li>
                  <li>• Cross-functional collaboration</li>
                  <li>• Problem-solving at scale</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 max-w-6xl mx-auto bg-white">
          <h2 className="text-3xl font-bold mb-8 text-center">What is the pay?</h2>
          <div className="bg-green-50 border-l-4 border-green-500 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4 text-green-800">Average Salary in Ireland</h3>
            <p className="text-3xl font-bold text-green-700 mb-4">€50,000 - €95,000</p>
            <p className="text-lg text-gray-700 mb-4">
              Mid-level ML engineers earn €50,000-€70,000, senior engineers earn €75,000-€95,000, while staff/principal ML engineers at tech giants can earn €110,000-€160,000+ with substantial stock compensation.
            </p>
            <p className="text-lg text-gray-700">
              ML engineering commands top-tier salaries due to rare skill combination. Packages include significant equity (20-40% of total comp at tech companies), performance bonuses, comprehensive benefits, conference budgets, and cutting-edge hardware/tools.
            </p>
          </div>
        </section>

        <section className="py-16 px-6 bg-blue-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">What is the career outlook?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-blue-700">Job Growth in Ireland</h3>
                <p className="text-lg text-gray-700 mb-4">
                  ML engineering is among Ireland's most in-demand roles with severe skills shortage. Over 600 positions advertised annually with competition for candidates driving premium salaries and benefits.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  Every major tech company in Ireland seeks ML engineers. The role offers excellent career progression and international mobility within global tech companies.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-blue-700">Why the growth?</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• ML adoption accelerating across industries</li>
                  <li>• Need for production ML expertise</li>
                  <li>• Scaling challenges require engineering</li>
                  <li>• MLOps becoming critical discipline</li>
                  <li>• Ireland's tech ecosystem expansion</li>
                  <li>• Gap between research and production</li>
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
                  <h4 className="text-xl font-semibold text-gray-800">CS Degree + ML Experience</h4>
                  <p className="text-gray-700 mt-2">
                    Computer Science or Software Engineering degree plus ML experience through projects, courses, or work. Master's in ML/AI advantageous but not required with strong portfolio.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-6">
                  <h4 className="text-xl font-semibold text-gray-800">Transition from SWE/Data Science</h4>
                  <p className="text-gray-700 mt-2">
                    Many ML engineers transition from software engineering (learning ML) or data science (strengthening engineering). Irish companies support this transition with internal mobility.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-700">Key Skills to Master</h3>
              <div className="bg-gray-50 p-6 rounded-lg">
                <ul className="space-y-3 text-gray-700">
                  <li>• ML algorithms and frameworks</li>
                  <li>• Software engineering fundamentals</li>
                  <li>• System design for ML</li>
                  <li>• Model deployment and serving</li>
                  <li>• MLOps and automation</li>
                  <li>• Cloud platforms and infrastructure</li>
                  <li>• Performance optimization</li>
                  <li>• Data engineering basics</li>
                  <li>• Monitoring and observability</li>
                  <li>• Production ML best practices</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-blue-600 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Ready to Become an ML Engineer?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Explore resources and discover how to launch your ML engineering career.
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

