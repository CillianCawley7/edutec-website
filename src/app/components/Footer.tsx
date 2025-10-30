'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedin, FaTwitter, FaYoutube, FaInstagram, FaFacebook } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="mt-0" style={{backgroundColor: '#212721'}}>
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto py-10 px-8 flex flex-col md:flex-row justify-between items-start gap-10 border-b" style={{borderColor: '#3a403a'}}>
        
        {/* Left Section - Logo + Intro */}
        <div className="flex-1 min-w-[250px]">
          <div className="flex items-center mb-4">
            <Image
              src="/logos/EdUTec_Logo_White.png"
              alt="EdUTec Careers Logo"
              width={140}
              height={40}
              className="object-contain"
            />
          </div>
          <p className="text-sm leading-relaxed max-w-sm" style={{color: '#ccc'}}>
            Empowering Ireland's next generation of tech talent by connecting students, educators, and industry leaders.
          </p>
        </div>

        {/* Middle Section - Quick Links */}
        <div className="flex-1 min-w-[180px]">
          <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:underline" style={{color: '#ccc'}}>Home</Link></li>
            <li><Link href="/careers" className="hover:underline" style={{color: '#ccc'}}>Explore Careers</Link></li>
            <li><Link href="/qualifications" className="hover:underline" style={{color: '#ccc'}}>Qualifications</Link></li>
            <li><Link href="/resources" className="hover:underline" style={{color: '#ccc'}}>Resources</Link></li>
          </ul>
        </div>

        {/* Middle Section - Partners */}
        <div className="flex-1 min-w-[200px]">
          <h4 className="text-lg font-semibold mb-4 text-white">Our Partners</h4>
          <p className="text-sm leading-relaxed max-w-xs" style={{color: '#ccc'}}>
            In collaboration with <strong>ATU</strong>, <strong>TUS</strong>, <strong>UL</strong>, <strong>University of Galway</strong>, and <strong>Skillnet Ireland</strong>.
          </p>
        </div>

        {/* Right Section - Connect */}
        <div className="flex-1 min-w-[180px]">
          <h4 className="text-lg font-semibold mb-4 text-white">Connect</h4>
          <a href="mailto:info@edutec.ie" className="text-sm hover:underline block mb-3" style={{color: '#ccc'}}>
            info@edutec.ie
          </a>
          <div className="flex space-x-5 text-2xl">
            <a href="#" aria-label="LinkedIn" className="hover:opacity-70" style={{color: '#00b2e3'}}><FaLinkedin /></a>
            <a href="#" aria-label="Twitter" className="hover:opacity-70" style={{color: '#00b2e3'}}><FaTwitter /></a>
            <a href="#" aria-label="YouTube" className="hover:opacity-70" style={{color: '#00b2e3'}}><FaYoutube /></a>
            <a href="#" aria-label="Instagram" className="hover:opacity-70" style={{color: '#00b2e3'}}><FaInstagram /></a>
            <a href="#" aria-label="Facebook" className="hover:opacity-70" style={{color: '#00b2e3'}}><FaFacebook /></a>
          </div>
        </div>
      </div>

      {/* Supported by itag & Skillnet Section */}
      <div className="border-t" style={{borderColor: '#3a403a'}}>
        <div className="max-w-7xl mx-auto py-8 px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Supported by itag */}
            <div className="flex flex-col items-center md:items-start gap-3">
              <p className="text-sm text-gray-400">Proudly supported by</p>
              <Image
                src="/itag/itag logo.png"
                alt="itag - Irish Technology Association Galway"
                width={140}
                height={50}
                className="object-contain"
              />
            </div>

            {/* 25 Years Celebration */}
            <div className="flex items-center">
              <Image
                src="/itag/Itag 25 Years Logo Rgb (1).png"
                alt="itag 25 Years Celebration"
                width={200}
                height={80}
                className="object-contain"
              />
            </div>

            {/* Skillnet Partnership */}
            <div className="flex flex-col items-center md:items-end gap-3">
              <p className="text-sm text-gray-400">In partnership with</p>
              <Image
                src="/itag/Itag-25-years.png"
                alt="itag Skillnet Ireland"
                width={180}
                height={50}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-xs py-4 border-t" style={{color: '#999', borderColor: '#3a403a'}}>
        © {new Date().getFullYear()} EduTec Careers. Built with ❤️ in Ireland.
      </div>
    </footer>
  );
}