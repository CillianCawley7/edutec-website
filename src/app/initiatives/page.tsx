'use client';

import * as React from 'react';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function InitiativesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 min-h-screen bg-white text-gray-800">
        <section className="max-w-6xl mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold mb-6">Initiatives</h1>
          <p className="text-lg text-gray-700 mb-8">Explore our programmes connecting schools, students, and industry. Content placeholders below.</p>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/initiatives/pathways" className="p-6 bg-gray-50 rounded-lg hover:shadow">Pathways</Link>
            <Link href="/initiatives/adopt-a-school" className="p-6 bg-gray-50 rounded-lg hover:shadow">Adopt a School</Link>
            <Link href="/initiatives/mentoring" className="p-6 bg-gray-50 rounded-lg hover:shadow">Mentoring</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}


