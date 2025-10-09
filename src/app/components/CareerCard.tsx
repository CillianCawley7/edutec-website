'use client';

import * as React from 'react';
import Link from 'next/link';

type CareerCardProps = {
  title: string;
  description: string;
  imagePlaceholder?: string;
  id?: number;
};

export default function CareerCard({ title, description, imagePlaceholder, id }: CareerCardProps) {
  // Create URL-friendly slug from title
  const createSlug = (title: string) => {
    return title.toLowerCase().replace(/\s+/g, '-');
  };

  const careerSlug = createSlug(title);
  const careerUrl = `/careers/${careerSlug}`;

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
      <div className="h-40 w-full overflow-hidden">
        <img
            src={imagePlaceholder}
            alt={title}
            className="object-cover w-full h-full"
        />
        </div>
      <div className="p-5">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <Link 
          href={careerUrl}
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm transition"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}
