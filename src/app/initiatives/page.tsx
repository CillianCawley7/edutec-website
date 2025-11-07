'use client';

import * as React from 'react';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import LogoBar from '../components/LogoBar';
import Link from 'next/link';

export default function InitiativesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-0 min-h-screen bg-white text-gray-800">
        <section className="text-white py-12" style={{background: 'linear-gradient(to right, #00b2e3, #0099c7)'}}>
          <div className="max-w-6xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold">Initiatives</h1>
            <p className="text-blue-100 mt-3 max-w-3xl">Explore our programmes connecting schools, students, and industry.</p>
          </div>
        </section>
        <section className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/initiatives/pathways" className="p-6 bg-gray-50 rounded-lg hover:shadow">Pathways</Link>
            <Link href="/initiatives/adopt-a-school" className="p-6 bg-gray-50 rounded-lg hover:shadow">Adopt a School</Link>
            <Link href="/initiatives/mentoring" className="p-6 bg-gray-50 rounded-lg hover:shadow">Mentoring</Link>
          </div>
        </section>
      </main>
      <LogoBar />
      <Footer />
    </>
  );
}


