'use client';

import * as React from 'react';
import Link from 'next/link';
import type { Qualification } from '../qualifications/data';

type Props = {
  qualification: Qualification;
  index?: number;
};

export default function QualificationCard({ qualification, index = 0 }: Props) {
  const [isVisible, setIsVisible] = React.useState(false);
  const cardRef = React.useRef<HTMLDivElement>(null);

  const {
    id,
    title,
    provider,
    providerLogo,
    nfqLevel,
    pathway,
    delivery,
    duration,
    location,
    outcomes,
    caoCode,
  } = qualification;

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
    <div 
      ref={cardRef}
      className={`border rounded-xl p-5 bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col gap-4 group ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ 
        transitionDelay: `${index * 50}ms`,
      }}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-blue-700 font-semibold text-lg group-hover:text-blue-900 transition-colors">
              {title}
            </h3>
            {caoCode && (
              <span className="px-2 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold">
                {caoCode}
              </span>
            )}
          </div>
          <p className="text-sm text-gray-600 font-medium">{provider}</p>
        </div>
        {providerLogo && (
          // eslint-disable-next-line @next/next/no-img-element
          <img 
            src={providerLogo} 
            alt={`${provider} Logo`} 
            className="w-16 h-16 object-contain flex-shrink-0 group-hover:scale-110 transition-transform duration-300" 
          />
        )}
      </div>

      <div className="flex flex-wrap gap-2 text-xs">
        {nfqLevel && (
          <span className="px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 font-semibold hover:bg-blue-100 transition-colors">
            NFQ {nfqLevel}
          </span>
        )}
        <span className="px-3 py-1.5 rounded-full bg-gray-100 text-gray-700 font-medium hover:bg-gray-200 transition-colors">
          {pathway}
        </span>
        <span className="px-3 py-1.5 rounded-full bg-gray-100 text-gray-700 font-medium hover:bg-gray-200 transition-colors">
          {delivery}
        </span>
        <span className="px-3 py-1.5 rounded-full bg-gray-100 text-gray-700 font-medium hover:bg-gray-200 transition-colors">
          {duration}
        </span>
        {location && (
          <span className="px-3 py-1.5 rounded-full bg-gray-100 text-gray-700 font-medium hover:bg-gray-200 transition-colors">
            📍 {location}
          </span>
        )}
      </div>

      {outcomes?.length > 0 && (
        <div className="text-xs text-gray-600 bg-gray-50 p-3 rounded-lg">
          <span className="font-semibold text-gray-700">Career Paths:</span>
          <div className="mt-1 flex flex-wrap gap-1">
            {outcomes.slice(0, 3).map((outcome, i) => (
              <span key={i} className="text-blue-600">
                {outcome}{i < Math.min(outcomes.length, 3) - 1 ? ' •' : ''}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="flex gap-2 mt-auto">
        <Link
          href={`/qualifications/${id}`}
          className="flex-1 inline-flex items-center justify-center gap-2 text-white px-4 py-3 rounded-lg text-sm font-medium hover:scale-105 hover:shadow-lg transition-all duration-300"
          style={{backgroundColor: '#00b2e3'}}
        >
          View Programme
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
        <Link
          href={`/careers`}
          className="px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105"
          style={{color: '#00b2e3', backgroundColor: '#e6f7ff'}}
        >
          Careers
        </Link>
      </div>
    </div>
  );
}
