'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="mt-0" style={{backgroundColor: '#212721'}}>
      {/* Main Footer - Slimmer Design */}
      <div className="max-w-7xl mx-auto py-6 px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Left Section - Logo + Description */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <Image
              src="/logos/EdUTec_Logo_White.png"
              alt="EdUTec Careers Logo"
              width={120}
              height={35}
              className="object-contain"
            />
            <p className="text-xs text-center md:text-left max-w-md" style={{color: '#999'}}>
              Empowering Ireland's next generation of tech talent
            </p>
          </div>

          {/* Middle Section - Quick Links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            <Link href="/about" className="hover:text-white transition-colors" style={{color: '#ccc'}}>About</Link>
            <Link href="/careers" className="hover:text-white transition-colors" style={{color: '#ccc'}}>Careers</Link>
            <Link href="/qualifications" className="hover:text-white transition-colors" style={{color: '#ccc'}}>Qualifications</Link>
            <Link href="/events" className="hover:text-white transition-colors" style={{color: '#ccc'}}>Events</Link>
            <Link href="/initiatives/pathways" className="hover:text-white transition-colors" style={{color: '#ccc'}}>Pathways</Link>
            <Link href="/initiatives/adopt-a-school" className="hover:text-white transition-colors" style={{color: '#ccc'}}>Adopt a School</Link>
          </nav>

          {/* Right Section - Contact & Social */}
          <div className="flex flex-col items-center md:items-end gap-3">
            <a href="mailto:info@edutec.ie" className="text-sm hover:text-white transition-colors" style={{color: '#ccc'}}>
              info@edutec.ie
            </a>
            <div className="flex space-x-4 text-xl">
              <a 
                href="https://www.linkedin.com/company/itag-skillnet-ireland/" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn" 
                className="hover:opacity-70 transition-opacity" 
                style={{color: '#00b2e3'}}
              >
                <FaLinkedin />
              </a>
              <a 
                href="https://twitter.com/itagskillnet" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter" 
                className="hover:opacity-70 transition-opacity" 
                style={{color: '#00b2e3'}}
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar - Thinner */}
      <div className="border-t py-3" style={{borderColor: '#3a403a'}}>
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-2 text-xs" style={{color: '#999'}}>
          <p>© {new Date().getFullYear()} EdUTec Careers - A forum of itag Skillnet Ireland</p>
          <p className="text-center md:text-right">Built with ❤️ in Ireland</p>
        </div>
      </div>
    </footer>
  );
}
