'use client';

import Image from 'next/image';

export default function LogoBar() {
  return (
    <div className="bg-white border-t border-b border-gray-200 py-2">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-wrap justify-between items-center gap-4">
          {/* EdUTec Logo */}
          <div className="flex items-center justify-center flex-1 min-w-[80px]">
            <Image
              src="/logos/EdUTec_Logo.jpg"
              alt="EdUTec Careers"
              width={90}
              height={32}
              className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>

          {/* ITAG Logo */}
          <div className="flex items-center justify-center flex-1 min-w-[80px]">
            <Image
              src="/itag/itag logo.png"
              alt="itag - Irish Technology Association Galway"
              width={80}
              height={30}
              className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>

          {/* ITAG 25 Years Logo */}
          <div className="flex items-center justify-center flex-1 min-w-[90px]">
            <Image
              src="/itag/Itag 25 Years Logo Rgb (1).png"
              alt="itag 25 Years Celebration"
              width={100}
              height={38}
              className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>

          {/* ITAG Skillnet Logo */}
          <div className="flex items-center justify-center flex-1 min-w-[85px]">
            <Image
              src="/itag/itag Skillnet-Masthead-Full-colour.png"
              alt="itag Skillnet Ireland"
              width={90}
              height={32}
              className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>

          {/* ATU Logo */}
          <div className="flex items-center justify-center flex-1 min-w-[80px]">
            <Image
              src="/logos/atlantic-technological-university.png"
              alt="Atlantic Technological University"
              width={80}
              height={30}
              className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>

          {/* University of Galway Logo */}
          <div className="flex items-center justify-center flex-1 min-w-[80px]">
            <Image
              src="/logos/university-of-galway.png"
              alt="University of Galway"
              width={80}
              height={30}
              className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

