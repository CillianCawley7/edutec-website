'use client';

import * as React from 'react';
import Link from 'next/link';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import EventCalendar from '../components/EventCalendar';
import { type Event, getUpcomingEvents } from './eventData';

export default function EventsPage() {
  const [events, setEvents] = React.useState<Event[]>([]);
  const [loading, setLoading] = React.useState(true);

  // Fetch events on mount
  React.useEffect(() => {
    async function loadEvents() {
      try {
        const upcomingEvents = await getUpcomingEvents();
        setEvents(upcomingEvents);
      } catch (error) {
        console.error('Error loading events:', error);
      } finally {
        setLoading(false);
      }
    }
    loadEvents();
  }, []);

  return (
    <>
      <Navbar />
      <main className="pt-0 min-h-screen bg-gray-50">
        
        {/* Hero Section */}
        <section className="text-white py-16 relative" style={{background: 'linear-gradient(135deg, #00b2e3 0%, #0099c7 100%)'}}>
          <div className="max-w-7xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-3">
              Events Calendar
            </h1>
            <p className="text-lg text-blue-100">
              {events.length} upcoming events
            </p>
          </div>
        </section>

        {/* Calendar Section */}
        <section className="py-12 px-6">
          {loading ? (
            <div className="max-w-7xl mx-auto text-center py-20">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 mb-6" style={{borderColor: '#00b2e3'}}></div>
              <p className="text-lg text-gray-600">Loading events...</p>
            </div>
          ) : (
            <EventCalendar events={events} />
          )}
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 mt-8" style={{background: 'linear-gradient(135deg, #212721 0%, #3a403a 100%)'}}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Want to Host an Event?
            </h2>
            <p className="text-lg mb-8 text-gray-300">
              Partner with EdUTec to host workshops, career fairs, or networking events for Ireland's tech community.
            </p>
            <Link
              href="mailto:info@edutec.ie"
              className="inline-block text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity duration-200"
              style={{backgroundColor: '#00b2e3'}}
            >
              Get in Touch
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

