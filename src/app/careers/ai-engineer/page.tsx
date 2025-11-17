'use client';

import * as React from 'react';
import Navbar from '../../components/NavBar';
import Footer from '../../components/Footer';
import LogoBar from '../../components/LogoBar';
import Link from 'next/link';

export default function AIEngineerPage() {
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">AI Engineer</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl">
              Develop artificial intelligence systems including machine learning models, neural networks, and intelligent automation solutions that solve complex real-world problems.
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
              <h3 className="text-3xl font-semibold mb-6 text-blue-600">Overview</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                AI engineers design, develop, and deploy artificial intelligence systems that can learn, adapt, and make intelligent decisions. They combine expertise in machine learning, deep learning, and software engineering to create AI-powered applications - from chatbots and recommendation systems to autonomous vehicles and medical diagnosis tools.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Ireland has emerged as a global AI hub, with major tech companies (Google, Microsoft, IBM) and innovative startups developing cutting-edge AI solutions. The Irish government's AI National Strategy and significant research funding at TCD, UCD, and other institutions position Ireland at the forefront of European AI development.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Specializations include Computer Vision, Natural Language Processing (NLP), Robotics, Speech Recognition, and AI Ethics & Governance.
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-semibold mb-6 text-blue-600">What do AI engineers do?</h3>
              <p className="text-lg text-gray-700 mb-6">
                AI engineers work full-time with flexibility for remote/hybrid arrangements increasingly common in Irish tech companies.
              </p>
              <p className="text-lg text-gray-700 mb-4">Some of the things an AI engineer might do:</p>
              <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg">
                <li>Design and develop machine learning models</li>
                <li>Build and train neural networks for deep learning</li>
                <li>Implement natural language processing systems</li>
                <li>Create computer vision applications</li>
                <li>Deploy AI models to production environments</li>
                <li>Optimize model performance and efficiency</li>
                <li>Work with large datasets for training AI systems</li>
                <li>Collaborate with data scientists and developers</li>
                <li>Research and implement latest AI techniques</li>
                <li>Ensure ethical AI development and fairness</li>
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
                <h3 className="text-xl font-semibold mb-3 text-blue-700">AI/ML Frameworks</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• TensorFlow and Keras</li>
                  <li>• PyTorch</li>
                  <li>• scikit-learn</li>
                  <li>• OpenCV (computer vision)</li>
                  <li>• Hugging Face Transformers</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-blue-700">Technical Skills</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Python programming (advanced)</li>
                  <li>• Mathematics (linear algebra, calculus)</li>
                  <li>• Deep learning architectures (CNNs, RNNs, Transformers)</li>
                  <li>• Cloud platforms (AWS, Azure, GCP)</li>
                  <li>• ML deployment (Docker, Kubernetes)</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-blue-700">Professional Skills</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Research and experimentation</li>
                  <li>• Problem-solving creativity</li>
                  <li>• Communication of complex concepts</li>
                  <li>• Ethical AI awareness</li>
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
            <p className="text-3xl font-bold text-green-700 mb-4">€45,000 - €90,000</p>
            <p className="text-lg text-gray-700 mb-4">
              Junior AI engineers in Ireland earn €45,000-€55,000, mid-level engineers earn €60,000-€80,000, while senior AI engineers command €85,000-€110,000. Lead AI engineers and AI architects at major tech firms can earn €120,000-€150,000+.
            </p>
            <p className="text-lg text-gray-700">
              AI engineering commands premium salaries due to specialized skills shortage. Total packages often include significant stock options (especially at tech companies), performance bonuses (15-25%), health insurance, pension contributions, conference attendance, research publication support, and generous learning budgets for AI courses and certifications.
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
                  AI engineering is Ireland's fastest-growing tech role, with demand increasing by over 50% year-on-year. Over 800 AI engineer positions advertised annually, with severe shortage of qualified candidates creating excellent opportunities.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  Ireland's National AI Strategy allocates significant funding for AI research and development. The presence of global AI leaders (Google DeepMind, Microsoft Research) and Irish AI startups creates diverse opportunities.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-blue-700">Why the explosive growth?</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• ChatGPT and generative AI revolution</li>
                  <li>• AI adoption accelerating across all industries</li>
                  <li>• Automation and intelligent systems demand</li>
                  <li>• Ireland positioning as European AI hub</li>
                  <li>• Government AI strategy investment</li>
                  <li>• Growing AI research at Irish universities</li>
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
                  <h4 className="text-xl font-semibold text-gray-800">Master's Degree (Highly Recommended)</h4>
                  <p className="text-gray-700 mt-2">
                    MSc in Artificial Intelligence, Machine Learning, or Computer Science with AI specialization. TCD, UCD, UCC, and UL offer excellent programs. PhD beneficial for research roles.
                  </p>
                </div>
                
                <div className="border-l-4 border-green-500 pl-6">
                  <h4 className="text-xl font-semibold text-gray-800">Bachelor's + Experience</h4>
                  <p className="text-gray-700 mt-2">
                    Computer Science or Engineering degree with strong mathematics, supplemented by AI/ML online courses (Coursera, Fast.ai) and practical project portfolio demonstrating AI capabilities.
                  </p>
                </div>
                
                <div className="border-l-4 border-purple-500 pl-6">
                  <h4 className="text-xl font-semibold text-gray-800">Research Background</h4>
                  <p className="text-gray-700 mt-2">
                    PhD in AI, ML, or related fields preferred for cutting-edge research roles. Irish universities offer funded PhD programs with industry partnerships.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-700">Key Knowledge Areas</h3>
              <div className="bg-gray-50 p-6 rounded-lg">
                <ul className="space-y-3 text-gray-700">
                  <li>• Machine learning algorithms</li>
                  <li>• Deep learning and neural networks</li>
                  <li>• Natural language processing</li>
                  <li>• Computer vision</li>
                  <li>• Reinforcement learning</li>
                  <li>• Mathematics (linear algebra, calculus, statistics)</li>
                  <li>• Python and AI frameworks</li>
                  <li>• Model deployment and MLOps</li>
                  <li>• Ethics in AI</li>
                  <li>• Research methodologies</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-6 bg-blue-600 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your AI Engineering Journey?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Explore our resources and discover how to begin your career in artificial intelligence.
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

