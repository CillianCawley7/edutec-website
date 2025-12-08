'use client';

import Link from 'next/link';
import Image from 'next/image';
import * as React from 'react';
import { useState } from 'react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      {/* Main Navigation - itag style with white background */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <Link href="/" className="flex items-center shrink-0">
              <Image 
                src="/logos/EdUTec_Logo.jpg" 
                alt="EdUTec Careers logo" 
                width={200} 
                height={80} 
                priority 
                className="h-20 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden lg:flex items-center gap-1">
              <li>
                <Link 
                  href="/about" 
                  className="px-4 py-2 text-[#212721] font-semibold hover:text-[#00b2e3] transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  href="/initiatives/pathways" 
                  className="px-4 py-2 text-[#212721] font-semibold hover:text-[#00b2e3] transition-colors"
                >
                  Pathways
                </Link>
              </li>
              <li>
                <Link 
                  href="/initiatives/adopt-a-school" 
                  className="px-4 py-2 text-[#212721] font-semibold hover:text-[#00b2e3] transition-colors"
                >
                  Adopt a School
                </Link>
              </li>
              <li>
                <Link 
                  href="/events" 
                  className="px-4 py-2 text-[#212721] font-semibold hover:text-[#00b2e3] transition-colors"
                >
                  Events
                </Link>
              </li>
              <li className="relative group">
                <Link 
                  href="/careers" 
                  className="flex items-center gap-1 px-4 py-2 text-[#212721] font-semibold hover:text-[#00b2e3] transition-colors"
                >
                  Careers
                  <svg className="w-3 h-3 transition-transform duration-200 group-hover:rotate-180" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
                {/* Invisible buffer zone */}
                <div className="absolute left-1/2 transform -translate-x-1/2 top-full w-full h-2"></div>
                {/* Dropdown - itag style */}
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-white rounded-lg shadow-xl border border-gray-100 min-w-[200px] py-2 overflow-hidden">
                    <Link 
                      href="/careers" 
                      className="block px-4 py-3 text-[#212721] hover:bg-[#00b2e3] hover:text-white transition-colors text-sm font-medium"
                    >
                      Explore Careers
                    </Link>
                    <Link 
                      href="/qualifications" 
                      className="block px-4 py-3 text-[#212721] hover:bg-[#00b2e3] hover:text-white transition-colors text-sm font-medium"
                    >
                      Qualifications
                    </Link>
                  </div>
                </div>
              </li>
            </ul>

            {/* Desktop Right Side Button */}
            <div className="hidden lg:flex items-center">
              <Link 
                href="/careers" 
                className="bg-[#00b2e3] hover:bg-[#0099c7] text-white px-5 py-2 rounded-md font-semibold transition-colors shadow-sm"
              >
                Explore Careers
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#212721] hover:text-[#00b2e3] transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${mobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="bg-white border-t border-gray-100 px-4 py-4">
            <Link 
              href="/about" 
              className="block py-3 text-[#212721] font-semibold hover:text-[#00b2e3] border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/initiatives/pathways" 
              className="block py-3 text-[#212721] font-semibold hover:text-[#00b2e3] border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pathways
            </Link>
            <Link 
              href="/initiatives/adopt-a-school" 
              className="block py-3 text-[#212721] font-semibold hover:text-[#00b2e3] border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Adopt a School
            </Link>
            <Link 
              href="/events" 
              className="block py-3 text-[#212721] font-semibold hover:text-[#00b2e3] border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Events
            </Link>
            <Link 
              href="/careers" 
              className="block py-3 text-[#212721] font-semibold hover:text-[#00b2e3] border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Explore Careers
            </Link>
            <Link 
              href="/qualifications" 
              className="block py-3 text-[#212721] font-semibold hover:text-[#00b2e3] border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Qualifications
            </Link>
            
            {/* Mobile Action Button */}
            <div className="pt-4">
              <Link 
                href="/careers" 
                className="block w-full py-3 bg-[#00b2e3] text-white text-center rounded-md font-semibold"
                onClick={() => setMobileMenuOpen(false)}
              >
                Explore Careers
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
