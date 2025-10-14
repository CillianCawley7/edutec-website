'use client';

import Link from 'next/link';
import Image from 'next/image';
import * as React from 'react';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 shadow-md sticky top-0 z-50" style={{backgroundColor: '#00b2e3'}}>
        <Link href="/Home" className="flex items-center gap-3">
          <Image src="/logos/EdUTec_logo_white.png" alt="Edutec Careers logo" width={100} height={100} priority />
        </Link>
        <ul className="flex space-x-8 text-base font-bold items-center">
          <li><Link href="/about" className="text-white hover:text-gray-200">About</Link></li>
          <li><Link href="/initiatives/pathways" className="text-white hover:text-gray-200">Pathways</Link></li>
          <li><Link href="/initiatives/adopt-a-school" className="text-white hover:text-gray-200">Adopt a School</Link></li>
          <li><Link href="/initiatives/mentoring" className="text-white hover:text-gray-200">Mentoring</Link></li>
          <li className="relative group">
            <Link href="/careers" className="text-white hover:text-gray-200 flex items-center gap-1">
              Careers
              <svg className="w-3 h-3 transition-transform group-hover:rotate-180" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
            {/* Invisible buffer zone to prevent dropdown from disappearing */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-full w-full h-2"></div>
            <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 hidden group-hover:block hover:block">
              <div className="bg-white rounded-lg shadow-lg border border-gray-200 min-w-[200px] py-1 overflow-hidden">
                <Link href="/careers" className="block px-4 py-3 text-gray-800 hover:bg-gray-50 transition-colors duration-200 text-sm font-medium border-b border-gray-100 last:border-b-0">
                  Explore Careers
                </Link>
                <Link href="/qualifications" className="block px-4 py-3 text-gray-800 hover:bg-gray-50 transition-colors duration-200 text-sm font-medium">
                  Qualifications
                </Link>
              </div>
            </div>
          </li>
        </ul>
      </nav>
  );
}
