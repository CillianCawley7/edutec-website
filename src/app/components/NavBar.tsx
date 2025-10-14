'use client';

import Link from 'next/link';
import Image from 'next/image';
import * as React from 'react';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 shadow-md sticky top-0 z-50" style={{backgroundColor: '#00b2e3'}}>
        <Link href="/Home" className="flex items-center gap-3">
          <Image src="/edutec_logo_white.png" alt="Edutec Careers logo" width={100} height={100} priority />
          <span className="text-xl font-bold text-white">EdUTec Careers</span>
        </Link>
        <ul className="flex space-x-6 text-sm font-bold items-center">
          <li><Link href="/about" className="text-white hover:text-gray-200">About</Link></li>
          <li><Link href="/initiatives/pathways" className="text-white hover:text-gray-200">Pathways</Link></li>
          <li><Link href="/initiatives/adopt-a-school" className="text-white hover:text-gray-200">Adopt a School</Link></li>
          <li><Link href="/initiatives/mentoring" className="text-white hover:text-gray-200">Mentoring</Link></li>
          <li className="relative group">
            <Link href="/careers" className="text-white hover:text-gray-200">Careers</Link>
            <div className="absolute right-0 mt-2 hidden group-hover:block">
              <ul className="bg-white text-gray-800 rounded shadow-lg min-w-[180px] py-2">
                <li><Link href="/careers" className="block px-4 py-2 hover:bg-gray-100">Explore Careers</Link></li>
                <li><Link href="/qualifications" className="block px-4 py-2 hover:bg-gray-100">Qualifications</Link></li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
  );
}
