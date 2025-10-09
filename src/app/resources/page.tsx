'use client';

import Navbar from '../components/NavBar';
import Image from 'next/image';
import * as React from 'react';

export default function ResourcesPage() {
  return (
    <>
    {/* Navbar */}
    <Navbar />

      <main className="min-h-screen bg-white text-gray-800 font-sans">
        {/* Header Section */}
        <section className="bg-blue-700 text-white text-center py-16 px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">EdUTec Resources</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Access teaching materials, company toolkits, and inspiring digital resources — all designed to bridge education and industry.
          </p>
        </section>

        {/* Resource Categories */}
        <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          {/* Teachers Library */}
          <div className="bg-blue-50 shadow-md rounded-2xl p-6 text-center hover:shadow-lg transition">
            <div className="flex justify-center mb-4">
              <Image
                src="/icons/teacher_icon.png"
                alt="Teacher resources"
                width={60}
                height={60}
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Teacher Library</h3>
            <p className="text-gray-600 mb-4">
              Curriculum guides, classroom activities, and digital resources tailored for educators promoting tech pathways.
            </p>
            <a
              href="#"
              className="text-blue-700 font-semibold hover:underline"
            >
              Explore Resources →
            </a>
          </div>

          {/* Company Library */}
          <div className="bg-blue-50 shadow-md rounded-2xl p-6 text-center hover:shadow-lg transition">
            <div className="flex justify-center mb-4">
              <Image
                src="/icons/company_icon.png"
                alt="Company library"
                width={60}
                height={60}
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">EdUTec Library</h3>
            <p className="text-gray-600 mb-4">
              Access toolkits and best-practice guides for partnering with schools and supporting Ireland’s future tech workforce.
            </p>
            <a
              href="#"
              className="text-blue-700 font-semibold hover:underline"
            >
              View Toolkit →
            </a>
          </div>

          {/* Student & Career Resources */}
          <div className="bg-blue-50 shadow-md rounded-2xl p-6 text-center hover:shadow-lg transition">
            <div className="flex justify-center mb-4">
              <Image
                src="/icons/student_icon.png"
                alt="Student resources"
                width={60}
                height={60}
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Student Resources</h3>
            <p className="text-gray-600 mb-4">
              Explore career maps, interview prep tips, and digital literacy tools to help students succeed in tech.
            </p>
            <a
              href="#"
              className="text-blue-700 font-semibold hover:underline"
            >
              Learn More →
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 text-center text-sm text-gray-500 border-t">
          © {new Date().getFullYear()} Edutech Careers. Built with ❤️ in Ireland.
        </footer>
      </main>
    </>
  );
}


    
