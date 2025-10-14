'use client';

import * as React from 'react';
import Link from 'next/link';
import { type Event } from '../events/eventData';

type CalendarProps = {
  events: Event[];
};

type CalendarDay = {
  date: Date;
  dateStr: string;
  isCurrentMonth: boolean;
  isToday: boolean;
  events: Event[];
};

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export default function EventCalendar({ events }: CalendarProps) {
  const [currentDate, setCurrentDate] = React.useState(new Date());
  const [selectedEvent, setSelectedEvent] = React.useState<Event | null>(null);
  const [hoveredDay, setHoveredDay] = React.useState<string | null>(null);
  const [viewMode, setViewMode] = React.useState<'month' | 'list'>('month');

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  // Generate calendar days
  const calendarDays = React.useMemo(() => {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const prevLastDay = new Date(year, month, 0);
    
    const firstDayOfWeek = firstDay.getDay();
    const daysInMonth = lastDay.getDate();
    const daysInPrevMonth = prevLastDay.getDate();
    
    const days: CalendarDay[] = [];
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    // Previous month days
    for (let i = firstDayOfWeek - 1; i >= 0; i--) {
      const date = new Date(year, month - 1, daysInPrevMonth - i);
      const dateStr = date.toISOString().split('T')[0];
      days.push({
        date,
        dateStr,
        isCurrentMonth: false,
        isToday: false,
        events: events.filter(e => e.date === dateStr),
      });
    }
    
    // Current month days
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const dateStr = date.toISOString().split('T')[0];
      const isToday = dateStr === today.toISOString().split('T')[0];
      days.push({
        date,
        dateStr,
        isCurrentMonth: true,
        isToday,
        events: events.filter(e => e.date === dateStr),
      });
    }
    
    // Next month days to fill grid
    const remainingDays = 42 - days.length; // 6 weeks * 7 days
    for (let day = 1; day <= remainingDays; day++) {
      const date = new Date(year, month + 1, day);
      const dateStr = date.toISOString().split('T')[0];
      days.push({
        date,
        dateStr,
        isCurrentMonth: false,
        isToday: false,
        events: events.filter(e => e.date === dateStr),
      });
    }
    
    return days;
  }, [year, month, events]);

  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const prevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const goToToday = () => {
    setCurrentDate(new Date());
  };

  const upcomingEvents = React.useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return events
      .filter(e => new Date(e.date) >= today)
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
      .slice(0, 5);
  }, [events]);

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header Controls */}
      <div className="rounded-xl p-6 mb-6" style={{backgroundColor: '#212721', border: '1px solid rgba(0, 178, 227, 0.2)'}}>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <button
              onClick={prevMonth}
              className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-opacity-10 transition-colors duration-200"
              style={{color: '#00b2e3', backgroundColor: 'rgba(0, 178, 227, 0.1)'}}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <h2 className="text-2xl font-semibold text-white">
              {MONTHS[month]} {year}
            </h2>
            
            <button
              onClick={nextMonth}
              className="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-opacity-10 transition-colors duration-200"
              style={{color: '#00b2e3', backgroundColor: 'rgba(0, 178, 227, 0.1)'}}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="flex gap-3">
            <button
              onClick={goToToday}
              className="px-5 py-2 rounded-lg font-medium transition-opacity duration-200 hover:opacity-80"
              style={{
                backgroundColor: 'rgba(0, 178, 227, 0.1)',
                color: '#00b2e3',
                border: '1px solid rgba(0, 178, 227, 0.3)'
              }}
            >
              Today
            </button>
            
            <button
              onClick={() => setViewMode(viewMode === 'month' ? 'list' : 'month')}
              className="px-5 py-2 rounded-lg font-medium text-white transition-opacity duration-200 hover:opacity-90"
              style={{backgroundColor: '#00b2e3'}}
            >
              {viewMode === 'month' ? 'List View' : 'Calendar View'}
            </button>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Calendar Grid */}
        <div className="lg:col-span-2">
          {viewMode === 'month' ? (
            <div className="rounded-xl overflow-hidden" style={{backgroundColor: '#1a1d1f', border: '1px solid rgba(0, 178, 227, 0.1)'}}>
              {/* Day Headers */}
              <div className="grid grid-cols-7" style={{backgroundColor: '#212721', borderBottom: '1px solid rgba(0, 178, 227, 0.2)'}}>
                {DAYS.map(day => (
                  <div
                    key={day}
                    className="p-3 text-center font-semibold text-sm text-gray-400"
                  >
                    {day}
                  </div>
                ))}
              </div>

              {/* Calendar Days */}
              <div className="grid grid-cols-7">
                {calendarDays.map((day, index) => (
                  <CalendarDayCell
                    key={index}
                    day={day}
                    isHovered={hoveredDay === day.dateStr}
                    onHover={setHoveredDay}
                    onEventClick={setSelectedEvent}
                  />
                ))}
              </div>
            </div>
          ) : (
            <ListView events={events} onEventClick={setSelectedEvent} />
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Upcoming Events */}
          <div className="rounded-xl p-6" style={{backgroundColor: '#212721', border: '1px solid rgba(0, 178, 227, 0.2)'}}>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Coming Up Next
            </h3>
            <div className="space-y-3">
              {upcomingEvents.map((event, index) => (
                <UpcomingEventCard
                  key={event.id}
                  event={event}
                  index={index}
                  onClick={() => setSelectedEvent(event)}
                />
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="rounded-xl p-6" style={{backgroundColor: '#212721', border: '1px solid rgba(0, 178, 227, 0.2)'}}>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Event Stats
            </h3>
            <div className="space-y-3">
              <StatItem
                label="Total Events"
                value={events.length}
                color="#00b2e3"
              />
              <StatItem
                label="This Month"
                value={calendarDays.filter(d => d.isCurrentMonth && d.events.length > 0).length}
                color="#00b2e3"
              />
              <StatItem
                label="itag Events"
                value={events.filter(e => e.source === 'itag').length}
                color="#00b2e3"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Event Detail Modal */}
      {selectedEvent && (
        <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
      )}
    </div>
  );
}

function CalendarDayCell({
  day,
  isHovered,
  onHover,
  onEventClick,
}: {
  day: CalendarDay;
  isHovered: boolean;
  onHover: (date: string | null) => void;
  onEventClick: (event: Event) => void;
}) {
  const hasEvents = day.events.length > 0;
  const dayNum = day.date.getDate();

  return (
    <div
      className={`
        min-h-[140px] p-2 transition-colors duration-200 relative
        ${!day.isCurrentMonth ? 'opacity-40' : ''}
        ${day.isToday ? 'ring-2 ring-inset' : ''}
        ${hasEvents ? 'cursor-pointer' : ''}
      `}
      style={{
        backgroundColor: !day.isCurrentMonth ? '#1a1d1f' : hasEvents && isHovered ? 'rgba(0, 178, 227, 0.05)' : '#1a1d1f',
        borderRight: '1px solid rgba(0, 178, 227, 0.1)',
        borderBottom: '1px solid rgba(0, 178, 227, 0.1)',
        ...(day.isToday && { borderColor: '#00b2e3' })
      }}
      onMouseEnter={() => hasEvents && onHover(day.dateStr)}
      onMouseLeave={() => onHover(null)}
    >
      {/* Day Number */}
      <div className="flex justify-between items-start mb-1">
        <span
          className={`
            text-sm font-semibold w-7 h-7 flex items-center justify-center rounded-full
            ${day.isToday ? 'text-white' : ''}
            ${!day.isToday && day.isCurrentMonth ? 'text-gray-300' : 'text-gray-600'}
          `}
          style={day.isToday ? {backgroundColor: '#00b2e3'} : {}}
        >
          {dayNum}
        </span>
        {hasEvents && (
          <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{backgroundColor: 'rgba(0, 178, 227, 0.15)', color: '#00b2e3'}}>
            {day.events.length}
          </span>
        )}
      </div>

      {/* Event Dots/Pills */}
      <div className="space-y-1">
        {day.events.slice(0, 2).map((event, idx) => (
          <button
            key={event.id}
            onClick={() => onEventClick(event)}
            className="w-full text-left text-xs px-2 py-1 rounded transition-opacity duration-150 hover:opacity-80 line-clamp-2"
            style={{
              backgroundColor: 'rgba(0, 178, 227, 0.15)',
              color: '#00b2e3',
              border: '1px solid rgba(0, 178, 227, 0.3)',
            }}
            title={event.title}
          >
            {event.title}
          </button>
        ))}
        {day.events.length > 2 && (
          <button
            onClick={() => onEventClick(day.events[2])}
            className="text-xs font-semibold text-center w-full hover:underline"
            style={{color: '#00b2e3'}}
            title={`View ${day.events.length - 2} more events`}
          >
            +{day.events.length - 2} more
          </button>
        )}
      </div>

    </div>
  );
}

function UpcomingEventCard({
  event,
  index,
  onClick,
}: {
  event: Event;
  index: number;
  onClick: () => void;
}) {
  const eventDate = new Date(event.date);
  const month = eventDate.toLocaleDateString('en-US', { month: 'short' });
  const day = eventDate.getDate();

  return (
    <button
      onClick={onClick}
      className="w-full text-left rounded-lg p-3 hover:bg-opacity-80 transition-opacity duration-200"
      style={{backgroundColor: '#1a1d1f', border: '1px solid rgba(0, 178, 227, 0.2)'}}
    >
      <div className="flex gap-3">
        <div className="flex-shrink-0 w-10 h-10 rounded-lg flex flex-col items-center justify-center text-white" style={{backgroundColor: '#00b2e3'}}>
          <div className="text-xs font-semibold">{month}</div>
          <div className="text-sm font-bold">{day}</div>
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-medium text-sm truncate text-gray-200">
            {event.title}
          </h4>
          <p className="text-xs text-gray-400 truncate">{event.time}</p>
          {event.source === 'itag' && (
            <span className="inline-block mt-1 text-xs px-2 py-0.5 rounded-full" style={{backgroundColor: 'rgba(0, 178, 227, 0.15)', color: '#00b2e3'}}>
              itag
            </span>
          )}
        </div>
      </div>
    </button>
  );
}

function StatItem({
  label,
  value,
  color,
}: {
  label: string;
  value: number;
  color: string;
}) {
  return (
    <div className="flex items-center justify-between p-3 rounded-lg" style={{backgroundColor: '#1a1d1f', border: '1px solid rgba(0, 178, 227, 0.15)'}}>
      <span className="text-sm text-gray-400">{label}</span>
      <span className="text-xl font-bold" style={{ color }}>
        {value}
      </span>
    </div>
  );
}

function ListView({
  events,
  onEventClick,
}: {
  events: Event[];
  onEventClick: (event: Event) => void;
}) {
  const sortedEvents = React.useMemo(() => {
    return [...events].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  }, [events]);

  const groupedByMonth = React.useMemo(() => {
    const groups: Record<string, Event[]> = {};
    sortedEvents.forEach(event => {
      const date = new Date(event.date);
      const key = `${date.getFullYear()}-${date.getMonth()}`;
      if (!groups[key]) groups[key] = [];
      groups[key].push(event);
    });
    return groups;
  }, [sortedEvents]);

  return (
    <div className="rounded-xl p-6 space-y-6" style={{backgroundColor: '#1a1d1f', border: '1px solid rgba(0, 178, 227, 0.1)'}}>
      {Object.entries(groupedByMonth).map(([key, monthEvents]) => {
        const [year, month] = key.split('-').map(Number);
        const monthName = MONTHS[month];
        
        return (
          <div key={key}>
            <h3 className="text-xl font-semibold mb-4 text-white">
              {monthName} {year}
            </h3>
            <div className="space-y-3">
              {monthEvents.map((event, index) => (
                <ListEventCard
                  key={event.id}
                  event={event}
                  index={index}
                  onClick={() => onEventClick(event)}
                />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function ListEventCard({
  event,
  index,
  onClick,
}: {
  event: Event;
  index: number;
  onClick: () => void;
}) {
  const eventDate = new Date(event.date);
  const dayName = eventDate.toLocaleDateString('en-US', { weekday: 'short' });
  const day = eventDate.getDate();

  return (
    <button
      onClick={onClick}
      className="w-full text-left rounded-xl p-4 hover:bg-opacity-80 transition-opacity duration-200"
      style={{backgroundColor: '#212721', border: '1px solid rgba(0, 178, 227, 0.2)'}}
    >
      <div className="flex gap-4">
        <div className="flex-shrink-0 w-14 h-14 rounded-lg flex flex-col items-center justify-center text-white" style={{backgroundColor: '#00b2e3'}}>
          <div className="text-xs font-semibold">{dayName}</div>
          <div className="text-xl font-bold">{day}</div>
        </div>
        <div className="flex-1">
          <h4 className="font-semibold text-base mb-1 text-white">
            {event.title}
          </h4>
          <div className="flex flex-wrap gap-2 mb-2 text-sm text-gray-400">
            <span>{event.time}</span>
            <span>•</span>
            <span>{event.location}</span>
          </div>
          <div className="flex gap-2">
            <span className="text-xs px-2 py-1 rounded-full" style={{backgroundColor: 'rgba(0, 178, 227, 0.15)', color: '#00b2e3'}}>
              {event.type}
            </span>
            {event.source === 'itag' && (
              <span className="text-xs px-2 py-1 rounded-full" style={{backgroundColor: 'rgba(0, 178, 227, 0.1)', color: '#00b2e3', border: '1px solid rgba(0, 178, 227, 0.3)'}}>
                itag Event
              </span>
            )}
          </div>
        </div>
      </div>
    </button>
  );
}

function EventModal({ event, onClose }: { event: Event; onClose: () => void }) {
  const eventDate = new Date(event.date);
  const formattedDate = eventDate.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative p-8 text-white" style={{background: 'linear-gradient(135deg, #00b2e3 0%, #0099c7 100%)'}}>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 flex items-center justify-center transition-all"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <h2 className="text-3xl font-bold mb-2">{event.title}</h2>
          <p className="text-blue-100">{formattedDate}</p>
        </div>

        {/* Content */}
        <div className="p-8 space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-xl">
              <span className="text-2xl">🕐</span>
              <div>
                <div className="text-xs text-gray-600">Time</div>
                <div className="font-semibold">{event.time}</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-xl">
              <span className="text-2xl">📍</span>
              <div>
                <div className="text-xs text-gray-600">Location</div>
                <div className="font-semibold">{event.location}</div>
              </div>
            </div>
          </div>

          <div className="flex gap-2">
            <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium">
              {event.type}
            </span>
            {event.source === 'itag' && (
              <span className="px-4 py-2 rounded-full bg-blue-50 text-blue-700 border-2 border-blue-200 font-medium">
                itag Event
              </span>
            )}
          </div>

          {event.description && (
            <div>
              <h3 className="font-bold text-lg mb-2" style={{color: '#212721'}}>
                About This Event
              </h3>
              <p className="text-gray-600 leading-relaxed">{event.description}</p>
            </div>
          )}

          {event.registrationUrl && (
            <Link
              href={event.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center py-4 rounded-xl text-white font-bold text-lg hover:opacity-90 transition-opacity duration-200 shadow-lg"
              style={{background: 'linear-gradient(135deg, #00b2e3 0%, #0099c7 100%)'}}
            >
              View Event Details →
            </Link>
          )}
        </div>
      </div>

    </div>
  );
}

