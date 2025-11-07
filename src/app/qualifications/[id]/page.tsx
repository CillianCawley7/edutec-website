'use client';

import * as React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Navbar from '../../components/NavBar';
import Footer from '../../components/Footer';
import LogoBar from '../../components/LogoBar';
import { qualifications } from '../data';

export default function QualificationDetailPage() {
  const params = useParams();
  const id = String(params?.id || '');
  const q = qualifications.find((x) => x.id === id);

  if (!q) {
    return (
      <div className="pt-24 px-6">
        <p>Programme not found.</p>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <main className="pt-0 min-h-screen bg-white text-gray-800">
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
          <div className="max-w-6xl mx-auto px-6">
            <Link href="/qualifications" className="text-blue-100 hover:text-white">← Back to Qualifications</Link>
            <h1 className="text-4xl font-bold mt-4">{q.title}</h1>
            <p className="text-blue-100 mt-2">{q.provider}</p>
            <div className="flex gap-2 mt-4 text-sm">
              {q.nfqLevel && <span className="px-3 py-1 rounded-full bg-blue-500">NFQ {q.nfqLevel}</span>}
              <span className="px-3 py-1 rounded-full bg-blue-500">{q.pathway}</span>
              <span className="px-3 py-1 rounded-full bg-blue-500">{q.delivery}</span>
              <span className="px-3 py-1 rounded-full bg-blue-500">{q.duration}</span>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 py-12 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-6">
            {q.summary && <p className="text-lg">{q.summary}</p>}
            {q.modules && q.modules.length > 0 && (
              <div>
                <h2 className="text-2xl font-semibold mb-3">Modules & Skills</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {q.modules.map((m, i) => (
                    <li key={i}>{m}</li>
                  ))}
                </ul>
              </div>
            )}
            {q.entryRequirements && q.entryRequirements.length > 0 && (
              <div>
                <h2 className="text-2xl font-semibold mb-3">Entry Requirements</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {q.entryRequirements.map((m, i) => (
                    <li key={i}>{m}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <aside className="space-y-4">
            <div className="border rounded-lg p-4 bg-gray-50">
              <h3 className="font-semibold mb-2">Provider</h3>
              <p>{q.provider}</p>
              {q.location && <p className="text-sm text-gray-600">{q.location}</p>}
            </div>
            <div className="border rounded-lg p-4 bg-gray-50">
              <h3 className="font-semibold mb-2">Outcomes</h3>
              <ul className="list-disc list-inside text-sm text-gray-700">
                {q.outcomes.map((o, i) => (
                  <li key={i}>{o}</li>
                ))}
              </ul>
            </div>
            <div className="flex gap-3">
              <a href={q.url} target="_blank" rel="noopener noreferrer" className="flex-1 text-center text-white bg-blue-600 hover:bg-blue-700 transition px-4 py-2 rounded text-sm font-medium">Programme Page</a>
              {q.applyUrl && (
                <a href={q.applyUrl} target="_blank" rel="noopener noreferrer" className="flex-1 text-center text-blue-700 bg-blue-50 hover:bg-blue-100 transition px-4 py-2 rounded text-sm font-medium">Apply</a>
              )}
            </div>
          </aside>
        </section>
      </main>
      <LogoBar />
      <Footer />
    </>
  );
}


