'use client';

import * as React from 'react';
import Link from 'next/link';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';

type Event = {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  type: 'Workshop' | 'Career Fair' | 'Webinar' | 'Networking' | 'Conference';
  description: string;
  registrationUrl?: string;
  featured?: boolean;
};

const upcomingEvents: Event[] = [
  {
    id: '1',
    title: 'Pathways 2025 - Tech Career Fair',
    date: '2025-11-06',
    time: '10:00 AM - 4:00 PM',
    location: 'Galway, Ireland',
    type: 'Career Fair',
    description: 'Ireland\'s premier tech career event. Meet universities, employers, and discover your future in technology.',
    registrationUrl: '/initiatives/pathways',
    featured: true,
  },
  {
    id: '2',
    title: 'AI & Machine Learning Workshop',
    date: '2025-11-15',
    time: '2:00 PM - 5:00 PM',
    location: 'Online',
    type: 'Workshop',
    description: 'Hands-on workshop exploring the fundamentals of AI and machine learning. Perfect for beginners and intermediate learners.',
  },
  {
    id: '3',
    title: 'Women in Tech Networking Evening',
    date: '2025-11-22',
    time: '6:00 PM - 9:00 PM',
    location: 'Limerick, Ireland',
    type: 'Networking',
    description: 'Connect with female tech professionals, share experiences, and build your network in a supportive environment.',
  },
  {
    id: '4',
    title: 'Cyber Security Essentials Webinar',
    date: '2025-12-03',
    time: '1:00 PM - 2:30 PM',
    location: 'Online',
    type: 'Webinar',
    description: 'Learn the basics of cyber security, threat detection, and how to protect digital assets in today\'s connected world.',
  },
  {
    id: '5',
    title: 'University Open Day - Tech Programmes',
    date: '2025-12-10',
    time: '9:00 AM - 3:00 PM',
    location: 'Multiple Locations',
    type: 'Conference',
    description: 'Visit university campuses across Ireland to explore tech programmes, meet faculty, and tour facilities.',
  },
  {
    id: '6',
    title: 'Full-Stack Development Bootcamp',
    date: '2026-01-15',
    time: '10:00 AM - 4:00 PM',
    location: 'Dublin, Ireland',
    type: 'Workshop',
    description: 'Intensive one-day bootcamp covering modern web development with React, Node.js, and databases.',
  },
  {
    id: '7',
    title: 'Tech Mentoring Speed Dating',
    date: '2026-01-20',
    time: '5:00 PM - 7:00 PM',
    location: 'Galway, Ireland',
    type: 'Networking',
    description: 'Meet potential mentors in quick 10-minute sessions. Find the perfect match for your career development journey.',
  },
  {
    id: '8',
    title: 'Data Science Career Panel',
    date: '2026-02-05',
    time: '3:00 PM - 5:00 PM',
    location: 'Online',
    type: 'Webinar',
    description: 'Hear from industry data scientists about career paths, required skills, and breaking into the field.',
  },
];

const typeColors = {
  'Workshop': { bg: '#e6f7ff', text: '#00b2e3', border: '#00b2e3' },
  'Career Fair': { bg: '#f0f9ff', text: '#0099c7', border: '#0099c7' },
  'Webinar': { bg: '#f5f5f5', text: '#666', border: '#999' },
  'Networking': { bg: '#fff0f6', text: '#eb2f96', border: '#eb2f96' },
  'Conference': { bg: '#f6ffed', text: '#52c41a', border: '#52c41a' },
};

export default function EventsPage() {
  const [selectedType, setSelectedType] = React.useState<string>('all');
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredEvents = upcomingEvents.filter((event) => {
    const matchesType = selectedType === 'all' || event.type === selectedType;
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          event.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesType && matchesSearch;
  });

  const eventTypes = ['all', 'Workshop', 'Career Fair', 'Webinar', 'Networking', 'Conference'];

  return (
    <>
      <Navbar />
      <main className="pt-0 min-h-screen bg-white text-gray-800">
        
        {/* Hero Section */}
        <section className="text-white py-16 relative overflow-hidden" style={{background: 'linear-gradient(135deg, #00b2e3 0%, #0099c7 100%)'}}>
          <div className="absolute inset-0 overflow-hidden opacity-10">
            <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
          
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">📅 Events Calendar</h1>
            <p className="text-xl md:text-2xl max-w-4xl text-blue-100">
              Join us for workshops, career fairs, webinars, and networking events designed to accelerate your tech career journey.
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="py-12 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Search Events</label>
                  <input
                    type="text"
                    placeholder="Search by title or description..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Event Type</label>
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    {eventTypes.map((type) => (
                      <option key={type} value={type}>
                        {type === 'all' ? 'All Events' : type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              
              <p className="text-sm text-gray-600">
                Showing <span className="font-semibold" style={{color: '#00b2e3'}}>{filteredEvents.length}</span> {filteredEvents.length === 1 ? 'event' : 'events'}
              </p>
            </div>
          </div>
        </section>

        {/* Events Grid */}
        <section className="py-12 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid gap-6 md:grid-cols-2">
              {filteredEvents.map((event, index) => (
                <EventCard key={event.id} event={event} index={index} />
              ))}
            </div>

            {filteredEvents.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 text-6xl mb-4">📅</div>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No events found</h3>
                <p className="text-gray-500">Try adjusting your search criteria.</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6" style={{background: 'linear-gradient(135deg, #212721 0%, #3a403a 100%)'}}>
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Want to Host an Event?
            </h2>
            <p className="text-xl mb-8 text-gray-300">
              Partner with EdUTec to host workshops, career fairs, or networking events for Ireland's tech community.
            </p>
            <Link
              href="mailto:info@edutec.ie"
              className="inline-block bg-white text-gray-800 px-8 py-4 rounded-full font-semibold hover:scale-105 hover:shadow-2xl transition-all duration-300 text-lg"
            >
              Get in Touch
            </Link>
          </div>
        </section>

      </main>
      <Footer />

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}

function EventCard({ event, index }: { event: Event; index: number }) {
  const [isVisible, setIsVisible] = React.useState(false);
  const cardRef = React.useRef<HTMLDivElement>(null);

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

  const colors = typeColors[event.type];
  const eventDate = new Date(event.date);
  const month = eventDate.toLocaleDateString('en-US', { month: 'short' });
  const day = eventDate.getDate();

  return (
    <div
      ref={cardRef}
      className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } ${event.featured ? 'ring-2 ring-blue-500' : ''}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex">
        {/* Date Badge */}
        <div className="flex-shrink-0 w-24 flex flex-col items-center justify-center p-4 text-white" style={{background: 'linear-gradient(135deg, #00b2e3 0%, #0099c7 100%)'}}>
          <div className="text-3xl font-bold">{day}</div>
          <div className="text-sm uppercase">{month}</div>
        </div>

        {/* Content */}
        <div className="flex-1 p-6">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                {event.title}
              </h3>
              <span
                className="inline-block px-3 py-1 rounded-full text-xs font-semibold"
                style={{
                  backgroundColor: colors.bg,
                  color: colors.text,
                  border: `1px solid ${colors.border}`,
                }}
              >
                {event.type}
              </span>
            </div>
            {event.featured && (
              <span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-xs font-bold rounded-full">
                ⭐ Featured
              </span>
            )}
          </div>

          <div className="space-y-2 mb-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <span>🕐</span>
              <span>{event.time}</span>
            </div>
            <div className="flex items-center gap-2">
              <span>📍</span>
              <span>{event.location}</span>
            </div>
          </div>

          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {event.description}
          </p>

          {event.registrationUrl ? (
            <Link
              href={event.registrationUrl}
              className="inline-flex items-center gap-2 text-white px-6 py-2 rounded-full hover:scale-105 transition-all duration-300 text-sm font-medium"
              style={{backgroundColor: '#00b2e3'}}
            >
              Register Now
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          ) : (
            <button
              className="inline-flex items-center gap-2 px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105"
              style={{backgroundColor: '#e6f7ff', color: '#00b2e3'}}
            >
              Coming Soon
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

