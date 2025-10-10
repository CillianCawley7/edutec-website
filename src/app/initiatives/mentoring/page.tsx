'use client';

import * as React from 'react';
import Navbar from '../../components/NavBar';
import Footer from '../../components/Footer';

export default function MentoringPage() {
  return (
    <>
      <Navbar />
      <main className="pt-0 min-h-screen bg-white text-gray-800">
        {/* Hero */}
        <section className="text-white py-12" style={{background: 'linear-gradient(to right, #00b2e3, #0099c7)'}}>
          <div className="max-w-6xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold">itag Mentoring for Success</h1>
            <p className="text-blue-100 mt-3 max-w-3xl">Powered by Peers. Built for Growth.</p>
          </div>
        </section>

        {/* Intro */}
        <section className="max-w-6xl mx-auto px-6 py-12 space-y-6">
          <div className="bg-white rounded-xl shadow p-6">
            <p className="text-lg leading-8 text-gray-700">
              We’ve designed a free, structured mentoring programme built specifically for the tech community — by tech professionals, for tech professionals. Whether you’re coding your first app, leading a dev team, or exploring data science, this programme connects you with experienced mentors who can help you level up your skills and career.
            </p>
            <p className="text-lg leading-8 text-gray-700 mt-4">
              Our mentoring model is tailored to your individual goals — from technical deep dives to leadership coaching. It’s practical, actionable, and rooted in real-world experience across every corner of the tech ecosystem.
            </p>
            <p className="text-lg leading-8 text-gray-700 mt-4">
              The itag Mentoring for Success initiative creates an environment of peer-to-peer learning, where communication, collaboration, and curiosity drive results.
            </p>
            <p className="text-lg leading-8 text-gray-700 mt-4">
              The outcome? Stronger business culture, improved performance, sharper strategic thinking — and often, a tangible impact on your career trajectory and confidence.
            </p>
            <p className="text-lg leading-8 text-gray-700 mt-4">
              At its core, mentoring is about sharing knowledge, experience, and insights. High-performing professionals from across our network — from established tech leaders to rising stars — volunteer to support those earlier on their journey, helping them develop both technical excellence and professional direction.
            </p>
          </div>

          {/* Why become a mentee */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-xl p-6">
              <h2 className="text-2xl font-semibold mb-4 text-blue-700">Why become a Mentee?</h2>
              <ul className="list-disc list-inside space-y-3 text-gray-800">
                <li><span className="font-medium">Grow your career</span> – Get clarity on your goals and map your next steps.</li>
                <li><span className="font-medium">Stretch your skillset</span> – Step outside your comfort zone and learn from industry pros.</li>
                <li><span className="font-medium">Build your network</span> – Connect with like-minded peers and future collaborators. Check out our events.</li>
                <li><span className="font-medium">Solve smarter</span> – Use your mentor as a trusted sounding board for challenges and ideas.</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow p-6">
              <h2 className="text-2xl font-semibold mb-4 text-blue-700">Our Vision</h2>
              <p className="text-gray-700 leading-7">
                To empower and elevate emerging talent by creating supportive, inclusive mentoring relationships. Our coaches offer a confidential space to talk, learn, and strategise around challenges and opportunities, helping you grow both personally and professionally.
              </p>
            </div>
          </div>

          {/* Podcast CTA */}
          <div className="bg-blue-50 rounded-xl p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Want to hear more?</h3>
              <p className="text-gray-800 mt-1">
                Check out the itag Podcast, where Fiona Neary (University of Galway) and Maureen Kelly-Hardiman (DXC Technology) chat about their experience with Mentoring for Success and how it’s shaping the future of tech talent in the West of Ireland.
              </p>
            </div>
            <a
              href="#" /* TODO: Insert real podcast link */
              className="inline-block text-white bg-blue-600 hover:bg-blue-700 transition px-5 py-3 rounded font-medium self-start md:self-auto"
            >
              Listen Now
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}


