'use client';

import * as React from 'react';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-0 min-h-screen bg-white text-gray-800">
        {/* Hero */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
          <div className="max-w-6xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold">About EdUTec</h1>
            <p className="text-blue-100 mt-3 max-w-3xl">Educational, hands‑on STEAM experiences that spark creativity, innovation, and real career pathways.</p>
          </div>
        </section>

        {/* Content */}
        <section className="max-w-6xl mx-auto px-6 py-12 space-y-8">
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-2xl font-semibold text-blue-700 mb-3">Who we are</h2>
            <p className="text-lg leading-8 text-gray-700">
              EdUTec is led by <strong>itag Board Members & Companies</strong>. Our aim is to offer educational and hands‑on <strong>STEAM</strong> events that
              promote creativity and innovation, inspiring teens to pursue STEAM‑related careers.
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-6">
            <h2 className="text-2xl font-semibold text-blue-700 mb-3">What we do</h2>
            <ul className="list-disc list-inside space-y-3 text-gray-800 text-lg">
              <li>
                Our events help teens identify <strong>pathways to careers in STEAM</strong> through engagement with women executives in STEAM‑related
                fields and through immersive experiences provided by companies in the West of Ireland.
              </li>
              <li>
                Members also run company programmes, e.g. <strong>Fidelity Computer Science Programme</strong>, <strong>Cisco</strong> and
                <strong> IBM</strong> Teen Mentor programmes, etc.
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-2xl font-semibold text-blue-700 mb-3">Community support</h2>
            <p className="text-lg leading-8 text-gray-700">
              <strong>Teens in Tech</strong> events are made possible through the generosity of corporate sponsorships, the <strong>Digital Women’s Forum</strong>,
              and the <strong>AtlanTec Festival Forum</strong>. Event speakers, mentors, and committee members volunteer their time to make a difference in the
              lives of the future generation.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}


