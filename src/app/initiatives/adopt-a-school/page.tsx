'use client';

import * as React from 'react';
import Navbar from '../../components/NavBar';
import Footer from '../../components/Footer';

export default function AdoptASchoolPage() {
  return (
    <>
      <Navbar />
      <main className="pt-0 min-h-screen bg-white text-gray-800">
        {/* Hero */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
          <div className="max-w-6xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold">Adopt‑a‑School</h1>
            <p className="text-blue-100 mt-3 max-w-3xl">Connecting tech companies with schools to enhance IT education and close the skills gap.</p>
          </div>
        </section>

        {/* Content */}
        <section className="max-w-6xl mx-auto px-6 py-12 space-y-8">
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-2xl font-semibold text-blue-700 mb-3">About the Programme</h2>
            <p className="text-lg leading-8 text-gray-700">
              As part of itag’s core focus on talent development, this initiative connects tech companies with schools to enhance IT education and
              address the skills gap. While many companies already contribute through career talks, site visits, and tech showcases, <strong>EdUTec</strong>
              amplifies these efforts by pooling resources and fostering partnerships.
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-6">
            <h2 className="text-2xl font-semibold text-blue-700 mb-3">How it works</h2>
            <p className="text-lg leading-8 text-gray-800">
              Through this programme, organisations “adopt” schools — providing <strong>IT equipment</strong>, <strong>tech classes</strong>,
              <strong> guest speakers</strong>, and <strong>work placements</strong>. These efforts enrich learning environments while nurturing a skilled and
              innovative future workforce.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}


