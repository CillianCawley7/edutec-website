'use client';

import * as React from 'react';
import Image from 'next/image';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-0 min-h-screen bg-white text-gray-800">
        {/* Hero */}
        <section className="text-white py-12" style={{background: 'linear-gradient(to right, #00b2e3, #0099c7)'}}>
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
              <strong>Teens in Tech</strong> events are made possible through the generosity of corporate sponsorships, the <strong>Digital Women's Forum</strong>,
              and the <strong>AtlanTec Festival Forum</strong>. Event speakers, mentors, and committee members volunteer their time to make a difference in the
              lives of the future generation.
            </p>
          </div>

          {/* itag Partnership Section */}
          <div className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-xl shadow-lg p-8 mt-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-semibold mb-4" style={{color: '#212721'}}>
                  Powered by itag & Skillnet Ireland
                </h2>
                <p className="text-lg text-gray-700 mb-4">
                  EdUTec is proudly led by <strong>itag</strong> (Irish Technology Association Galway), 
                  Ireland's leading technology industry association representing over 150 member companies 
                  across the West of Ireland.
                </p>
                <p className="text-gray-600 mb-4">
                  In partnership with <strong>itag Skillnet Ireland</strong>, we deliver world-class training, 
                  mentoring, and career development programmes that bridge the gap between education and industry.
                </p>
                <p className="text-gray-600">
                  As part of itag's <strong>25th anniversary celebration</strong>, we're more committed than ever 
                  to empowering Ireland's next generation of tech talent.
                </p>
              </div>
              <div className="flex flex-col gap-6 items-center justify-center bg-white p-6 rounded-lg">
                <Image
                  src="/itag/itag logo.png"
                  alt="itag - Irish Technology Association Galway"
                  width={200}
                  height={80}
                  className="object-contain"
                />
                <Image
                  src="/itag/itag Skillnet-Masthead-Full-colour.png"
                  alt="itag Skillnet Ireland"
                  width={250}
                  height={80}
                  className="object-contain"
                />
                <Image
                  src="/itag/Itag 25 Years Logo Rgb (1).png"
                  alt="itag 25 Years Celebration"
                  width={220}
                  height={90}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}


