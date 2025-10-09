'use client';

import * as React from 'react';
import Link from 'next/link';
import type { Qualification } from '../qualifications/data';

type Props = {
  qualification: Qualification;
};

export default function QualificationCard({ qualification }: Props) {
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
  } = qualification;

  return (
    <div className="border rounded-lg p-4 bg-white hover:shadow transition flex flex-col gap-3">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-blue-700 font-semibold text-lg">{title}</h3>
          <p className="text-sm text-gray-600">{provider}</p>
        </div>
        {providerLogo && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={providerLogo} alt="Provider Logo" className="w-10 h-10 object-contain" />
        )}
      </div>

      <div className="flex flex-wrap gap-2 text-xs">
        {nfqLevel && (
          <span className="px-2 py-1 rounded-full bg-blue-50 text-blue-700">NFQ {nfqLevel}</span>
        )}
        <span className="px-2 py-1 rounded-full bg-gray-100 text-gray-700">{pathway}</span>
        <span className="px-2 py-1 rounded-full bg-gray-100 text-gray-700">{delivery}</span>
        <span className="px-2 py-1 rounded-full bg-gray-100 text-gray-700">{duration}</span>
        {location && (
          <span className="px-2 py-1 rounded-full bg-gray-100 text-gray-700">{location}</span>
        )}
      </div>

      {outcomes?.length > 0 && (
        <div className="text-xs text-gray-600">
          <span className="font-medium text-gray-700">Leads to:</span> {outcomes.slice(0, 3).join(', ')}
        </div>
      )}

      <div className="flex gap-2 mt-2">
        <Link
          href={`/qualifications/${id}`}
          className="inline-block text-white bg-blue-600 hover:bg-blue-700 transition px-4 py-2 rounded text-sm font-medium"
        >
          View Programme
        </Link>
        <Link
          href={`/careers`}
          className="inline-block text-blue-700 bg-blue-50 hover:bg-blue-100 transition px-4 py-2 rounded text-sm font-medium"
        >
          Related Careers
        </Link>
      </div>
    </div>
  );
}


