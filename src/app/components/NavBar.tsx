'use client';

import Link from 'next/link';
import Image from 'next/image';
import * as React from 'react';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 shadow-md bg-blue-700 sticky top-0 z-50">
        <Link href="/Home" className="flex items-center gap-3">
          <Image src="/edutec_logo_white.png" alt="Edutec Careers logo" width={100} height={100} priority />
          <span className="text-xl font-bold text-white">EdUTec Careers</span>
        </Link>
        <ul className="flex space-x-6 text-sm font-bold items-center">
          <li><a href="/careers" className="text-white hover:text-blue-300">Explore Careers</a></li>
          <li><a href="/qualifications" className="text-white hover:text-blue-300">Qualifications</a></li>
          <li><a href="/resources" className="text-white hover:text-blue-300">Edutec Resources</a></li>
          <li><a href="/about" className="text-white hover:text-blue-300">About</a></li>
          <li className="relative group">
            <a href="/initiatives" className="text-white hover:text-blue-300">Initiatives</a>
            <div className="absolute left-0 mt-2 hidden group-hover:block">
              <ul className="bg-white text-gray-800 rounded shadow-lg min-w-[180px] py-2">
                <li><Link href="/initiatives/pathways" className="block px-4 py-2 hover:bg-gray-100">Pathways</Link></li>
                <li><Link href="/initiatives/adopt-a-school" className="block px-4 py-2 hover:bg-gray-100">Adopt a School</Link></li>
                <li><Link href="/initiatives/mentoring" className="block px-4 py-2 hover:bg-gray-100">Mentoring</Link></li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
  );
}
