'use client';

import * as React from 'react';
import Link from 'next/link';

type CareerCardProps = {
  title: string;
  description: string;
  imagePlaceholder?: string;
  id?: number;
  index?: number;
};

export default function CareerCard({ title, description, imagePlaceholder, id, index = 0 }: CareerCardProps) {
  const [isVisible, setIsVisible] = React.useState(false);
  const cardRef = React.useRef<HTMLDivElement>(null);

  // Create URL-friendly slug from title
  const createSlug = (title: string) => {
    return title.toLowerCase().replace(/\s+/g, '-');
  };

  const careerSlug = createSlug(title);
  const careerUrl = `/careers/${careerSlug}`;

  // Intersection Observer for scroll animations
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style jsx>{`
        .career-card-title {
          color: #212721;
        }
        .group:hover .career-card-title {
          color: #00b2e3;
        }
      `}</style>
      <div 
        ref={cardRef}
        className={`bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        style={{ 
          transitionDelay: `${index * 50}ms`,
        }}
      >
      <div className="h-48 w-full overflow-hidden relative">
        <img
          src={imagePlaceholder}
          alt={title}
          className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
        />
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-3 transition-colors duration-300 career-card-title">
          {title}
        </h2>
        <p className="text-gray-600 text-sm mb-6 line-clamp-3 leading-relaxed">
          {description}
        </p>
        <Link 
          href={careerUrl}
          className="inline-flex items-center gap-2 text-white px-6 py-3 rounded-full hover:scale-105 hover:shadow-lg text-sm transition-all duration-300 font-medium"
          style={{backgroundColor: '#00b2e3'}}
        >
          Learn More
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
    </>
  );
}
