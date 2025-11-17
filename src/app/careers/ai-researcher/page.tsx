'use client';

import * as React from 'react';
import Navbar from '../../components/NavBar';
import Footer from '../../components/Footer';
import LogoBar from '../../components/LogoBar';
import Link from 'next/link';

export default function AIResearcherPage() {
  return (
    <>
      <Navbar />
      
      <main className="min-h-screen text-gray-800 font-sans">
        <section className="text-white py-16 pt-24" style={{background: 'linear-gradient(to right, #00b2e3, #0099c7)'}}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center mb-4">
              <Link href="/careers" className="text-blue-200 hover:text-white mr-2">← Back to Careers</Link>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">AI Researcher</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl">
              Conduct cutting-edge research in artificial intelligence. Develop new algorithms, publish papers, and advance the field of AI through fundamental and applied research.
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
              <h3 className="text-3xl font-semibold mb-6" style={{color: '#00b2e3'}}>Overview</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                AI researchers push the boundaries of what's possible in artificial intelligence. They investigate fundamental questions, develop novel algorithms, and publish findings in top conferences. Working at universities, research labs, or tech companies, they advance AI capabilities through rigorous scientific inquiry.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Ireland hosts world-class AI research facilities including ADAPT Centre (Europe's largest AI research center), Insight Centre for Data Analytics, and Lero. Companies like Google, Microsoft Research, and Huawei maintain AI research labs in Ireland, contributing to global AI advancement.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Specializations include Deep Learning Theory, Computer Vision, Natural Language Processing, Reinforcement Learning, and AI Ethics research.
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-semibold mb-6" style={{color: '#00b2e3'}}>What do AI researchers do?</h3>
              <p className="text-lg text-gray-700 mb-6">
                Researchers work full-time with flexibility typical in academia and research labs. Industry research roles often include conference travel and collaboration opportunities.
              </p>
              <p className="text-lg text-gray-700 mb-4">Key activities include:</p>
              <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg">
                <li>Formulate research questions and hypotheses</li>
                <li>Design and conduct experiments</li>
                <li>Develop novel AI algorithms and techniques</li>
                <li>Implement prototypes and proof-of-concepts</li>
                <li>Analyze experimental results</li>
                <li>Write and publish research papers</li>
                <li>Present at conferences and workshops</li>
                <li>Collaborate with other researchers globally</li>
                <li>Review papers for conferences/journals</li>
                <li>Supervise PhD students and postdocs</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">What skills are needed?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Research Skills</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Research methodology</li>
                  <li>• Experimental design</li>
                  <li>• Scientific writing</li>
                  <li>• Critical analysis</li>
                  <li>• Literature review</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Technical Expertise</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Deep learning theory</li>
                  <li>• Advanced mathematics</li>
                  <li>• Python, TensorFlow, PyTorch</li>
                  <li>• Statistical analysis</li>
                  <li>• Algorithm design</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Professional Skills</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Academic writing</li>
                  <li>• Presentation skills</li>
                  <li>• Collaboration and networking</li>
                  <li>• Creativity and innovation</li>
                  <li>• Persistence and patience</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 max-w-6xl mx-auto bg-white">
          <h2 className="text-3xl font-bold mb-8 text-center">What is the pay?</h2>
          <div className="bg-green-50 border-l-4 border-green-500 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4 text-green-800">Average Salary in Ireland</h3>
            <p className="text-3xl font-bold text-green-700 mb-4">€45,000 - €100,000</p>
            <p className="text-lg text-gray-700 mb-4">
              Postdoctoral researchers earn €45,000-€55,000, research scientists €60,000-€80,000, while senior researchers and research leads earn €85,000-€120,000+. Industry research roles (Google, Microsoft) often pay significantly more than academic positions.
            </p>
            <p className="text-lg text-gray-700">
              Academic positions offer job security, intellectual freedom, and teaching opportunities. Industry research roles provide higher salaries, access to computational resources, and immediate real-world impact. Both paths offer conference travel, research funding, and collaboration opportunities.
            </p>
          </div>
        </section>

        <section className="py-16 px-6 bg-blue-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">What is the career outlook?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Research Opportunities in Ireland</h3>
                <p className="text-lg text-gray-700 mb-4">
                  Ireland offers excellent AI research opportunities with Science Foundation Ireland funding competitive research positions. Both academic institutions and industry labs actively recruit AI researchers.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  Government investment in AI research (€150M+ through National AI Strategy) creates new positions. Ireland's English-speaking environment and European location attract international researchers.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Why pursue AI research?</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• Fundamental contributions to AI advancement</li>
                  <li>• Intellectual freedom and creativity</li>
                  <li>• Global collaboration opportunities</li>
                  <li>• Ireland's growing research ecosystem</li>
                  <li>• Industry-academia partnerships</li>
                  <li>• Conference travel and networking</li>
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
                  <h4 className="text-xl font-semibold text-gray-800">PhD (Essential)</h4>
                  <p className="text-gray-700 mt-2">
                    PhD in Computer Science, AI, Machine Learning, or related field required for most research positions. Irish universities offer funded PhD programs (4 years) with competitive stipends.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-6">
                  <h4 className="text-xl font-semibold text-gray-800">Postdoctoral Experience</h4>
                  <p className="text-gray-700 mt-2">
                    1-3 years postdoctoral research typically required for permanent positions. Opportunity to develop independent research agenda and build publication record.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-6">
                  <h4 className="text-xl font-semibold text-gray-800">Publication Track Record</h4>
                  <p className="text-gray-700 mt-2">
                    Publications at top AI conferences (NeurIPS, ICML, CVPR) essential for career advancement. Quality and impact of research more important than quantity.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Research Areas</h3>
              <div className="bg-gray-50 p-6 rounded-lg">
                <ul className="space-y-3 text-gray-700">
                  <li>• Deep learning theory and architectures</li>
                  <li>• Natural language processing</li>
                  <li>• Computer vision</li>
                  <li>• Reinforcement learning</li>
                  <li>• Generative AI (GANs, diffusion models)</li>
                  <li>• AI ethics and fairness</li>
                  <li>• Explainable AI</li>
                  <li>• Multi-modal learning</li>
                  <li>• Transfer learning</li>
                  <li>• Neurosymbolic AI</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 text-white text-center" style={{backgroundColor: '#00b2e3'}}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Ready to Pursue AI Research?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Explore PhD programs and research opportunities in Ireland.
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

