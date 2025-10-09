'use client';

import * as React from 'react';
import Navbar from '../../components/NavBar';
import Footer from '../../components/Footer';

export default function PathwaysPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 min-h-screen bg-white text-gray-800">
        {/* Hero */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
          <div className="max-w-6xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold">Pathways</h1>
            <p className="text-blue-100 mt-3 max-w-3xl">
              Explore routes into tech and education: events, exhibitors, and opportunities to plan your next step.
            </p>
          </div>
        </section>

        {/* Event Overview */}
        <section className="max-w-6xl mx-auto px-6 py-12 space-y-10">
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-700 mb-4">
              Calling all 5th Year and Leaving Cert Students
            </h2>
            <p className="text-lg leading-8 text-gray-700">
              Join us on the <strong>6th of November</strong> in the <strong>Galmont Hotel, Galway</strong>, before making any final decisions on your future
              education, training and employment options.
            </p>
            <p className="text-lg leading-8 text-gray-700 mt-4">
              Pathways 2025, in conjunction with <strong>itag</strong>, gives you a chance to meet with experts from Third Level colleges, Universities,
              ETBs, and some of the largest employers in the West of Ireland.
            </p>
          </div>

          {/* Exhibitors */}
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">This year's exhibitors include</h3>
            <div className="flex flex-wrap gap-2">
              {[
                'University of Galway',
                'University of Limerick',
                'Maynooth University',
                'Mary Immaculate College',
                'Imperial College London',
                "Scotland's Rural College",
                'An Garda Síochána',
                'NMBI',
                'Romero Games',
                'NLN',
                'and many more',
              ].map((name) => (
                <span key={name} className="px-3 py-1 rounded-full bg-white border text-gray-700 text-sm">{name}</span>
              ))}
            </div>
          </div>

          {/* Speakers & Planning */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Speakers</h3>
              <p className="text-gray-700 leading-7">
                The <strong>Galway Advertiser</strong>, in conjunction with <strong>itag</strong>, is lining up a number of exciting speakers from both the education and industry
                sectors to speak on the day, including career guidance advice from <strong>Brian Mooney</strong>.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Plan Your Day</h3>
              <p className="text-gray-700 leading-7">
                An extensive <strong>Careers and Colleges Supplement</strong> will be published to help you plan your day in advance. Pick up your copy on the
                <strong> 30th October</strong> in your local store, or read it online at
                {" "}
                <a href="https://www.advertiser.ie" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">www.advertiser.ie</a>
                {" "}(epaper).
              </p>
            </div>
          </div>

          {/* Registration & Contact */}
          <div className="bg-blue-50 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Register / Tickets</h3>
            <p className="text-gray-800 leading-7">
              Interested in attending our <strong>2025</strong> event? <strong>Tickets €5.</strong> Please contact <strong>Shannon</strong> or <strong>Máire</strong> on
              {" "}
              <a href="tel:+35391530951" className="text-blue-700 hover:underline">091 530951</a>
              {" "}or email
              {" "}
              <a href="mailto:pathways@advertiser.ie" className="text-blue-700 hover:underline">pathways@advertiser.ie</a>.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}


