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
      <main className="pt-0 min-h-screen text-gray-800" style={{background: 'linear-gradient(to bottom, #f8fafc 0%, #ffffff 100%)'}}>
        
        {/* Hero Section */}
        <section className="text-white py-20 relative overflow-hidden" style={{background: 'linear-gradient(135deg, #00b2e3 0%, #0099c7 100%)'}}>
          {/* Animated background */}
          <div className="absolute inset-0 overflow-hidden opacity-10">
            <div className="absolute top-10 left-10 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{animationDelay: '0.5s'}}></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
            <div className="inline-block mb-4 px-4 py-2 bg-white bg-opacity-20 rounded-full text-sm font-semibold">
              🎉 {events.length} Upcoming Events
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              Events Calendar
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-blue-100 animate-fade-in-delay">
              Discover workshops, career fairs, webinars, and networking opportunities to accelerate your tech journey
            </p>
          </div>
        </section>

        {/* Calendar Section */}
        <section className="py-12 px-6">
          {loading ? (
            <div className="max-w-7xl mx-auto text-center py-20">
              <div className="inline-block animate-spin rounded-full h-16 w-16 border-b-4 border-blue-500 mb-6"></div>
              <p className="text-xl text-gray-600">Loading your events...</p>
            </div>
          ) : (
            <EventCalendar events={events} />
          )}
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 mt-12" style={{background: 'linear-gradient(135deg, #212721 0%, #3a403a 100%)'}}>
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Want to Host an Event?
            </h2>
            <p className="text-xl mb-10 text-gray-300 leading-relaxed">
              Partner with EdUTec to host workshops, career fairs, or networking events for Ireland's thriving tech community.
            </p>
            <Link
              href="mailto:info@edutec.ie"
              className="inline-block bg-white text-gray-800 px-10 py-5 rounded-full font-bold hover:scale-110 hover:shadow-2xl transition-all duration-300 text-lg"
            >
              Get in Touch →
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
        
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        
        .animate-fade-in-delay {
          opacity: 0;
          animation: fadeIn 0.8s ease-out 0.2s forwards;
        }
      `}</style>
    </>
  );
}

