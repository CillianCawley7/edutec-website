
'use client';

import * as React from 'react';
import Navbar from '../components/NavBar';
import QualificationCard from '../components/QualificationCard';
import Footer from '../components/Footer';
import { qualifications, type Qualification } from './data';

type Filters = {
  q: string;
  level: string; // 'all' | '6' | '7' | '8' | '9'
  pathway: string; // 'all' | 'University' | 'Apprenticeship' | 'Further Education' | 'Bootcamp'
  delivery: string; // 'all' | 'On-campus' | 'Online' | 'Hybrid'
};

function filterQualifications(items: Qualification[], filters: Filters) {
  return items.filter((item) => {
    const matchesQuery = filters.q
      ? [item.title, item.provider, ...(item.outcomes || [])]
          .join(' ')
          .toLowerCase()
          .includes(filters.q.toLowerCase())
      : true;
    const matchesLevel = filters.level === 'all' ? true : String(item.nfqLevel || '') === filters.level;
    const matchesPathway = filters.pathway === 'all' ? true : item.pathway === (filters.pathway as any);
    const matchesDelivery = filters.delivery === 'all' ? true : item.delivery === (filters.delivery as any);
    return matchesQuery && matchesLevel && matchesPathway && matchesDelivery;
  });
}

export default function QualificationsPage() {
  const [filters, setFilters] = React.useState<Filters>({
    q: '',
    level: 'all',
    pathway: 'all',
    delivery: 'all',
  });

  const filtered = React.useMemo(() => filterQualifications(qualifications, filters), [filters]);

  return (
    <>
      <Navbar />
      <main className="pt-24 px-6 py-14 font-sans bg-gray-50 text-gray-800">
        <div className="max-w-7xl mx-auto">
          {/* Controls */}
          <section className="bg-white p-4 rounded-xl shadow mb-8">
            <div className="flex flex-col md:flex-row gap-4 md:items-end">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">Search</label>
                <input
                  value={filters.q}
                  onChange={(e) => setFilters((f) => ({ ...f, q: e.target.value }))}
                  placeholder="Search by title, provider, or career"
                  className="w-full border rounded-md px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">NFQ Level</label>
                <select
                  value={filters.level}
                  onChange={(e) => setFilters((f) => ({ ...f, level: e.target.value }))}
                  className="border rounded-md px-3 py-2"
                >
                  <option value="all">All</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Pathway</label>
                <select
                  value={filters.pathway}
                  onChange={(e) => setFilters((f) => ({ ...f, pathway: e.target.value }))}
                  className="border rounded-md px-3 py-2"
                >
                  <option value="all">All</option>
                  <option value="University">University</option>
                  <option value="Apprenticeship">Apprenticeship</option>
                  <option value="Further Education">Further Education</option>
                  <option value="Bootcamp">Bootcamp</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Delivery</label>
                <select
                  value={filters.delivery}
                  onChange={(e) => setFilters((f) => ({ ...f, delivery: e.target.value }))}
                  className="border rounded-md px-3 py-2"
                >
                  <option value="all">All</option>
                  <option value="On-campus">On-campus</option>
                  <option value="Online">Online</option>
                  <option value="Hybrid">Hybrid</option>
                </select>
              </div>
            </div>
          </section>

          {/* Results */}
          <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((q) => (
              <QualificationCard key={q.id} qualification={q} />
            ))}
            {filtered.length === 0 && (
              <p className="col-span-full text-center text-gray-500">No programmes match your filters.</p>
            )}
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
