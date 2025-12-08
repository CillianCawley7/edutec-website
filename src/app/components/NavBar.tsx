'use client';

import Link from 'next/link';
import Image from 'next/image';
import * as React from 'react';
import { useState } from 'react';

// Navigation menu data structure matching itag.ie
const navigationItems = [
  {
    title: 'About',
    href: '/about',
    submenu: [
      { title: 'About itag', href: '/about' },
      { title: 'News & Press', href: '/about#news' },
      { title: 'Join itag', href: '/about#join' },
      { title: 'Contact Us', href: '/about#contact' },
    ],
  },
  {
    title: 'Technology',
    href: '#',
    submenu: [
      { title: 'Forums – accelerating innovation', href: '#' },
      { title: 'Podcasts', href: '#' },
      { title: 'Tech Talks', href: '#' },
    ],
  },
  {
    title: 'Connecting',
    href: '/events',
    submenu: [
      { title: 'Calendar of Events', href: '/events' },
      { title: 'itag Excellence Awards', href: '#' },
      { title: 'AtlanTec Festival', href: '#' },
      { title: 'Sponsor an Event', href: '#' },
      { title: 'Partnerships & Alliances', href: '#' },
      { title: 'European Tech Cluster', href: '#' },
    ],
  },
  {
    title: 'Talent',
    href: '/careers',
    submenu: [
      { title: 'itag Skillnet', href: '#' },
      { title: 'itag Skillnet Flagship Training', href: '#' },
      { title: 'Career Opportunities', href: '/careers' },
      { title: 'Mentoring for Success', href: '/initiatives/mentoring' },
      { title: 'Student/Industry Engagement', href: '/initiatives/pathways' },
    ],
  },
  {
    title: 'Community',
    href: '#',
    submenu: [
      { title: 'Members', href: '#' },
      { title: 'Library', href: '/resources' },
      { title: 'CSR Events', href: '/initiatives/adopt-a-school' },
      { title: 'Testimonials', href: '#' },
      { title: 'Newsletter', href: '#' },
    ],
  },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50">
      {/* Top Announcement Bar */}
      <div className="bg-[#212721] text-white text-sm py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-[#00b2e3]">AtlanTec Festival</span>
            <span className="text-gray-300">May 5th - 15th 2026</span>
          </div>
          <div className="hidden md:flex items-center gap-4">
            {/* Search Button */}
            <button className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span>Search</span>
            </button>
            {/* Calendar Button */}
            <Link href="/events" className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>Calendar</span>
            </Link>
            {/* Join itag Button */}
            <Link 
              href="/about#join" 
              className="bg-[#00b2e3] hover:bg-[#0099c7] text-white px-4 py-1 rounded font-semibold transition-colors"
            >
              Join itag
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center shrink-0">
              <Image 
                src="/itag/itag-25-years-logo.svg" 
                alt="itag 25 Years" 
                width={120} 
                height={50} 
                priority 
                className="h-12 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navigationItems.map((item) => (
                <div 
                  key={item.title}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(item.title)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 px-4 py-2 text-[#212721] font-semibold hover:text-[#00b2e3] transition-colors"
                  >
                    {item.title}
                    <svg 
                      className={`w-3 h-3 transition-transform duration-200 ${activeDropdown === item.title ? 'rotate-180' : ''}`} 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                  
                  {/* Dropdown Menu */}
                  <div className={`absolute left-0 top-full pt-2 transition-all duration-200 ${activeDropdown === item.title ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                    <div className="bg-white rounded-lg shadow-xl border border-gray-100 min-w-[240px] py-2 overflow-hidden">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.title}
                          href={subItem.href}
                          className="block px-4 py-3 text-[#212721] hover:bg-[#00b2e3] hover:text-white transition-colors text-sm font-medium"
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop Right Side Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <Link 
                href="/events" 
                className="flex items-center gap-2 text-[#212721] hover:text-[#00b2e3] font-semibold transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Calendar
              </Link>
              <Link 
                href="/about#join" 
                className="bg-[#00b2e3] hover:bg-[#0099c7] text-white px-5 py-2 rounded-md font-semibold transition-colors shadow-sm"
              >
                Join itag
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
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${mobileMenuOpen ? 'max-h-[calc(100vh-120px)] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="bg-white border-t border-gray-100 px-4 py-4 max-h-[calc(100vh-120px)] overflow-y-auto">
            {navigationItems.map((item) => (
              <div key={item.title} className="border-b border-gray-100 last:border-b-0">
                <button
                  onClick={() => setActiveDropdown(activeDropdown === item.title ? null : item.title)}
                  className="flex items-center justify-between w-full py-3 text-[#212721] font-semibold"
                >
                  {item.title}
                  <svg 
                    className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item.title ? 'rotate-180' : ''}`}
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                <div className={`overflow-hidden transition-all duration-200 ${activeDropdown === item.title ? 'max-h-96 pb-2' : 'max-h-0'}`}>
                  {item.submenu.map((subItem) => (
                    <Link
                      key={subItem.title}
                      href={subItem.href}
                      className="block pl-4 py-2 text-gray-600 hover:text-[#00b2e3] text-sm"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {subItem.title}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            
            {/* Mobile Action Buttons */}
            <div className="pt-4 space-y-3">
              <Link 
                href="/events" 
                className="flex items-center justify-center gap-2 w-full py-3 border border-[#00b2e3] text-[#00b2e3] rounded-md font-semibold"
                onClick={() => setMobileMenuOpen(false)}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Calendar
              </Link>
              <Link 
                href="/about#join" 
                className="block w-full py-3 bg-[#00b2e3] text-white text-center rounded-md font-semibold"
                onClick={() => setMobileMenuOpen(false)}
              >
                Join itag
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
