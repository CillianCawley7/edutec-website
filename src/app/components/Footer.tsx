'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedin, FaTwitter, FaYoutube, FaInstagram, FaFacebook } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-blue-700 text-white mt-0">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto py-10 px-8 flex flex-col md:flex-row justify-between items-start gap-10 border-b border-blue-500">
        
        {/* Left Section - Logo + Intro */}
        <div className="flex-1 min-w-[250px]">
          <div className="flex items-center mb-4">
            <Image
              src="/edutec_logo_white.png"
              alt="EduTec Careers Logo"
              width={140}
              height={40}
              className="object-contain"
            />
          </div>
          <p className="text-sm text-blue-100 leading-relaxed max-w-sm">
            Empowering Ireland’s next generation of tech talent by connecting students, educators, and industry leaders.
          </p>
        </div>

        {/* Middle Section - Quick Links */}
        <div className="flex-1 min-w-[180px]">
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/Home" className="hover:underline">Home</Link></li>
            <li><Link href="/careers" className="hover:underline">Explore Careers</Link></li>
            <li><Link href="/qualifications" className="hover:underline">Qualifications</Link></li>
            <li><Link href="/resources" className="hover:underline">Resources</Link></li>
          </ul>
        </div>

        {/* Middle Section - Partners */}
        <div className="flex-1 min-w-[200px]">
          <h4 className="text-lg font-semibold mb-4">Our Partners</h4>
          <p className="text-sm text-blue-100 leading-relaxed max-w-xs">
            In collaboration with <strong>ATU</strong>, <strong>TUS</strong>, <strong>UL</strong>, <strong>University of Galway</strong>, and <strong>Skillnet Ireland</strong>.
          </p>
        </div>

        {/* Right Section - Connect */}
        <div className="flex-1 min-w-[180px]">
          <h4 className="text-lg font-semibold mb-4">Connect</h4>
          <a href="mailto:info@edutec.ie" className="text-sm hover:underline block mb-3">
            info@edutec.ie
          </a>
          <div className="flex space-x-5 text-2xl">
            <a href="#" aria-label="LinkedIn" className="hover:text-blue-300"><FaLinkedin /></a>
            <a href="#" aria-label="Twitter" className="hover:text-blue-300"><FaTwitter /></a>
            <a href="#" aria-label="YouTube" className="hover:text-blue-300"><FaYoutube /></a>
            <a href="#" aria-label="Instagram" className="hover:text-blue-300"><FaInstagram /></a>
            <a href="#" aria-label="Facebook" className="hover:text-blue-300"><FaFacebook /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-xs text-blue-200 py-4">
        © {new Date().getFullYear()} EduTec Careers. Built with ❤️ in Ireland.
      </div>
    </footer>
  );
}
