'use client';

import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import LogoBar from '../components/LogoBar';
import * as React from 'react';

export default function Home() {
  return (
    <>
    <Navbar />
    <main className="min-h-screen bg-white text-gray-800 font-sans">

        {/* Hero Section with image background */}
        <section className="px-6 py-24 md:py-32 text-center relative overflow-hidden" role="banner">
          {/* Image Background */}
          <div className="absolute inset-0 w-full h-full overflow-hidden" aria-hidden="true">
            <Image
              src="/homepage_hero_2.jpeg"
              alt=""
              fill
              className="object-cover opacity-35"
              priority
              quality={90}
            />
            {/* Gradient overlay for better text readability */}
            <div className="absolute inset-0" style={{background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.75) 0%, rgba(230, 247, 255, 0.75) 100%)'}}></div>
          </div>
          
          <div className="max-w-6xl mx-auto relative z-10 px-4">
            <h1 className="heading-1 mb-8 animate-slide-up" style={{color: '#212721'}}>
              Tech Careers Start Here
            </h1>
            <p className="body-large max-w-4xl mx-auto mb-10 text-gray-700 animate-fade-in" style={{animationDelay: '0.1s'}}>
              Empowering Ireland's next generation of tech talent through hands-on STEAM experiences, 
              industry partnerships, and real career pathways.
            </p>
            <div className="flex justify-center animate-fade-in" style={{animationDelay: '0.2s'}}>
              <Link
                href="/careers"
                className="btn-primary text-lg"
                aria-label="Explore tech career opportunities"
              >
                Explore Careers →
              </Link>
            </div>
          </div>
        </section>

        {/* Wave Divider */}
        <div className="relative w-full overflow-hidden" style={{height: '100px', backgroundColor: 'white'}}>
          <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0 C150,80 350,0 600,50 C850,100 1050,20 1200,80 L1200,120 L0,120 Z" fill="#f8fafc" opacity="0.5"></path>
            <path d="M0,20 C200,100 400,20 600,70 C800,120 1000,40 1200,100 L1200,120 L0,120 Z" fill="#f8fafc"></path>
          </svg>
        </div>

        {/* Featured Initiatives with hover effects */}
        <section className="py-24 px-6 bg-gray-50 relative" aria-labelledby="initiatives-heading">
          <div className="max-w-6xl mx-auto">
            <h2 id="initiatives-heading" className="heading-2 mb-6 text-center" style={{color: '#212721'}}>
              Empowering Through Action
            </h2>
            <p className="body-large text-center text-gray-600 mb-16 max-w-2xl mx-auto">
              Discover our innovative programmes designed to connect students with industry and build real tech careers
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <InitiativeCard
                icon="🎓"
                title="Pathways 2025"
                description="Join us on November 6th in Galway for Ireland's premier tech career event. Meet universities, employers, and discover your future."
                link="/initiatives/pathways"
                color="#00b2e3"
              />
              <InitiativeCard
                icon="🏫"
                title="Adopt a School"
                description="Tech companies partner with schools to provide equipment, mentorship, and real-world learning experiences."
                link="/initiatives/adopt-a-school"
                color="#00b2e3"
              />
              <InitiativeCard
                icon="🤝"
                title="Mentoring for Success"
                description="Free structured mentoring programme connecting tech professionals with emerging talent for career growth."
                link="/initiatives/mentoring"
                color="#00b2e3"
              />
            </div>
          </div>
      </section>

        {/* Diagonal Divider */}
        <div className="relative w-full overflow-hidden" style={{height: '80px'}}>
          <div className="absolute inset-0 bg-gray-50" style={{clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 50%)'}}></div>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white" style={{clipPath: 'polygon(0 50%, 100% 0, 100% 100%, 0 100%)'}}></div>
        </div>

        {/* Interactive Career Pathways Diagram */}
        <section className="py-24 px-6 bg-gradient-to-br from-blue-50 to-white relative shadow-inner" aria-labelledby="pathways-heading">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 id="pathways-heading" className="heading-2 mb-6" style={{color: '#212721'}}>
                Your Tech Career Journey
              </h2>
              <p className="body-large text-gray-600 max-w-3xl mx-auto">
                Discover how to transform your passion for technology into a rewarding career. 
                Follow the pathway from education to your dream job.
              </p>
            </div>

            <CareerPathwaysDiagram />
          </div>
        </section>

        {/* Curved Divider with Accent */}
        <div className="relative w-full overflow-hidden" style={{height: '100px'}}>
          <svg className="absolute top-0 w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0 L1200,0 L1200,120 C900,60 600,100 300,80 C150,70 75,85 0,90 Z" fill="white"></path>
          </svg>
          {/* Decorative accent line */}
          <div className="absolute bottom-0 left-0 right-0 h-1" style={{background: 'linear-gradient(90deg, transparent 0%, #00b2e3 50%, transparent 100%)'}}></div>
        </div>

        {/* itag Partnership Section */}
        <section className="py-24 px-6 bg-white relative" aria-labelledby="partnership-heading">
          {/* Decorative geometric elements */}
          <div className="absolute top-10 right-10 w-32 h-32 rounded-full opacity-5" style={{background: 'radial-gradient(circle, #00b2e3 0%, transparent 70%)'}}></div>
          <div className="absolute bottom-20 left-10 w-40 h-40 rounded-full opacity-5" style={{background: 'radial-gradient(circle, #00b2e3 0%, transparent 70%)'}}></div>
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-10 md:p-16 shadow-lg card-hover border border-gray-100">
              <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
                  <h2 id="partnership-heading" className="heading-2 mb-6" style={{color: '#212721'}}>
                    Powered by itag Skillnet
                  </h2>
                  <p className="body-large text-gray-700 mb-6">
                    EdUTec Careers is proudly supported by itag (Irish Technology Association Galway) 
                    and itag Skillnet Ireland, bringing together industry expertise, educational institutions, 
                    and emerging talent to shape Ireland's tech future.
                  </p>
                  <p className="body-normal text-gray-600 mb-8">
                    As part of itag's 25th anniversary celebration, we're committed to empowering the next 
                    generation of tech professionals through innovative programmes, industry partnerships, 
                    and real career pathways.
                  </p>
                  <Link
                    href="/about"
                    className="btn-primary"
                    aria-label="Learn more about EdUTec and itag partnership"
                  >
                    Learn More About Us
                  </Link>
                </div>
                <div className="flex flex-col gap-6 items-center">
                  <Image
                    src="/itag/itag Skillnet-Masthead-Full-colour.png"
                    alt="itag Skillnet Ireland"
                    width={300}
                    height={100}
                    className="object-contain hover:scale-105 transition-transform duration-300"
                  />
                  <Image
                    src="/itag/Itag 25 Years Logo Rgb (1).png"
                    alt="itag 25 Years Celebration"
                    width={250}
                    height={100}
                    className="object-contain hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Wave Transition to Events */}
        <div className="relative w-full overflow-hidden" style={{height: '80px', backgroundColor: 'white'}}>
          <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,50 Q300,100 600,50 T1200,50 L1200,120 L0,120 Z" fill="#f9fafb"></path>
          </svg>
        </div>

        {/* Mini Calendar Preview */}
        <MiniCalendarPreview />

        {/* Call to Action */}
        <section className="py-24 px-6 relative overflow-hidden" style={{background: 'linear-gradient(135deg, #00b2e3 0%, #0099c7 100%)'}} aria-labelledby="cta-heading">
          {/* Animated geometric background */}
          <div className="absolute top-10 right-20 w-64 h-64 rounded-full opacity-10 animate-pulse" style={{background: 'radial-gradient(circle, white 0%, transparent 70%)'}}></div>
          <div className="absolute bottom-10 left-20 w-80 h-80 rounded-full opacity-10" style={{background: 'radial-gradient(circle, white 0%, transparent 70%)', animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full opacity-5 transform -translate-x-1/2 -translate-y-1/2" style={{background: 'radial-gradient(circle, white 0%, transparent 70%)'}}></div>
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 id="cta-heading" className="heading-2 mb-8 text-white">
              Ready to Shape Ireland's Tech Future?
            </h2>
            <p className="body-large mb-12 text-blue-100 max-w-3xl mx-auto">
              Whether you're a student exploring careers, an educator seeking resources, 
              or a company looking to make an impact - we're here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/about"
                className="inline-block bg-white px-10 py-4 rounded-lg font-semibold transition-all duration-200 text-lg hover:shadow-xl hover:-translate-y-0.5"
                style={{color: '#00b2e3'}}
                aria-label="Learn about EdUTec and our mission"
              >
                Learn About Us
              </Link>
              <Link
                href="mailto:info@edutec.ie"
                className="inline-block border-2 border-white text-white px-10 py-4 rounded-lg font-semibold hover:bg-white transition-all duration-200 text-lg hover:shadow-xl hover:-translate-y-0.5"
                style={{'--hover-color': '#00b2e3'} as React.CSSProperties}
                aria-label="Contact EdUTec via email"
              >
                Get in Touch
              </Link>
        </div>
        </div>
        </section>

      </main>
      <LogoBar />
      <Footer />

      {/* Add custom CSS for animations */}
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

        .animate-fade-in-delay-2 {
          opacity: 0;
          animation: fadeIn 0.8s ease-out 0.4s forwards;
        }
      `}</style>
    </>
  );
}

// Mini Calendar Preview Component
function MiniCalendarPreview() {
  const [events, setEvents] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function loadEvents() {
      try {
        const { getUpcomingEvents } = await import('../events/eventData');
        const upcomingEvents = await getUpcomingEvents();
        setEvents(upcomingEvents.slice(0, 6)); // Show next 6 events
      } catch (error) {
        console.error('Error loading events:', error);
      } finally {
        setLoading(false);
      }
    }
    loadEvents();
  }, []);

  if (loading) {
    return (
      <section className="py-24 px-6 bg-gray-50 relative" aria-label="Loading upcoming events">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="skeleton h-10 w-64 mx-auto mb-4 rounded"></div>
            <div className="skeleton h-6 w-96 mx-auto rounded"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                <div className="flex gap-4 mb-4">
                  <div className="skeleton w-16 h-16 rounded-lg"></div>
                  <div className="flex-1">
                    <div className="skeleton h-6 w-full mb-2 rounded"></div>
                    <div className="skeleton h-4 w-20 rounded"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="skeleton h-4 w-full rounded"></div>
                  <div className="skeleton h-4 w-3/4 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 px-6 bg-gray-50 relative" aria-labelledby="events-preview-heading">
      {/* Decorative corner accents */}
      <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 rounded-tl-2xl opacity-20" style={{borderColor: '#00b2e3'}}></div>
      <div className="absolute top-0 right-0 w-20 h-20 border-t-4 border-r-4 rounded-tr-2xl opacity-20" style={{borderColor: '#00b2e3'}}></div>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 id="events-preview-heading" className="heading-2 mb-6 text-gray-900">
            Upcoming Events
          </h2>
          <p className="body-large text-gray-600 max-w-3xl mx-auto">
            Join us for workshops, career fairs, and networking opportunities
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {events.map((event, index) => {
            const eventDate = new Date(event.date);
            const day = eventDate.getDate();
            const month = eventDate.toLocaleString('en-US', { month: 'short' });
            
            return (
              <article
                key={event.id}
                className="card-hover bg-white rounded-xl shadow-md p-6 border border-gray-100"
              >
                <div className="flex gap-4 mb-4">
                  <div className="flex-shrink-0 w-16 h-16 rounded-lg flex flex-col items-center justify-center text-white" style={{backgroundColor: '#00b2e3'}}>
                    <div className="text-xs font-semibold">{month}</div>
                    <div className="text-2xl font-bold">{day}</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="heading-3 text-base text-gray-900 line-clamp-2 mb-2">
                      {event.title}
                    </h3>
                    {event.source === 'itag' && (
                      <span className="inline-block px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-700">
                        itag Event
                      </span>
                    )}
                  </div>
                </div>
                <div className="space-y-2 body-normal text-gray-600">
                  <div className="flex items-center gap-2">
                    <span role="img" aria-label="Time">🕐</span>
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span role="img" aria-label="Location">📍</span>
                    <span>{event.location}</span>
                  </div>
                </div>
                <p className="body-normal text-gray-700 mt-4 line-clamp-2">
                  {event.description}
                </p>
              </article>
            );
          })}
        </div>

        <div className="text-center">
          <Link
            href="/events"
            className="btn-primary text-lg"
            aria-label="View full events calendar"
          >
            View Full Calendar →
          </Link>
        </div>
      </div>

      {/* Smooth wave to CTA */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden" style={{height: '100px'}}>
        <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 L0,80 Q300,100 600,80 T1200,80 L1200,0 Z" fill="white" opacity="0.1"></path>
        </svg>
      </div>
    </section>
  );
}

// Career Pathways Diagram Component
function CareerPathwaysDiagram() {
  const [selectedPath, setSelectedPath] = React.useState<string | null>(null);

  const pathways = [
    {
      id: 'software',
      career: 'Software Developer',
      icon: '💻',
      color: '#00b2e3',
      bgColor: '#e6f7ff',
      duration: '3-4 Years',
      salaryRange: '€45k - €90k',
      demandLevel: 'Very High',
      step1: {
        title: 'Education Foundation',
        duration: '3-4 years',
        options: [
          { name: 'BSc Computer Science', level: 'NFQ Level 8', provider: 'University' },
          { name: 'Software Engineering', level: 'NFQ Level 8', provider: 'TU/University' },
          { name: 'Coding Bootcamp', level: 'Certificate', provider: 'Private Training' }
        ],
        description: 'Build fundamental programming and problem-solving skills'
      },
      step2: {
        title: 'Skill Development',
        duration: '1-2 years experience',
        skills: [
          { name: 'JavaScript', category: 'Programming' },
          { name: 'Python', category: 'Programming' },
          { name: 'React/Vue', category: 'Frameworks' },
          { name: 'Git/GitHub', category: 'Version Control' },
          { name: 'SQL', category: 'Databases' },
          { name: 'REST APIs', category: 'Integration' }
        ],
        description: 'Master modern development tools and methodologies'
      },
      step3: {
        title: 'Career Launch',
        roles: ['Junior Developer', 'Frontend Developer', 'Backend Developer', 'Full Stack Developer'],
        employers: ['Tech Companies', 'Startups', 'Financial Services', 'Consulting Firms'],
        growth: 'Senior → Lead → Architect',
        description: 'Enter the workforce and grow your career'
      },
      careerLink: '/careers',
      qualLink: '/qualifications'
    },
    {
      id: 'data',
      career: 'Data Scientist',
      icon: '📊',
      color: '#7c3aed',
      bgColor: '#f3e8ff',
      duration: '4-5 Years',
      salaryRange: '€50k - €100k',
      demandLevel: 'High',
      step1: {
        title: 'Education Foundation',
        duration: '4 years',
        options: [
          { name: 'BSc Data Science', level: 'NFQ Level 8', provider: 'University' },
          { name: 'Statistics & Analytics', level: 'NFQ Level 8', provider: 'University' },
          { name: 'MSc Data Analytics', level: 'NFQ Level 9', provider: 'Postgraduate' }
        ],
        description: 'Learn statistical analysis and data manipulation techniques'
      },
      step2: {
        title: 'Skill Development',
        duration: '1-2 years experience',
        skills: [
          { name: 'Python/R', category: 'Programming' },
          { name: 'SQL', category: 'Databases' },
          { name: 'Machine Learning', category: 'AI/ML' },
          { name: 'Pandas/NumPy', category: 'Data Tools' },
          { name: 'Tableau/PowerBI', category: 'Visualization' },
          { name: 'Statistics', category: 'Mathematics' }
        ],
        description: 'Build expertise in data analysis and predictive modeling'
      },
      step3: {
        title: 'Career Launch',
        roles: ['Data Analyst', 'Junior Data Scientist', 'ML Engineer', 'Business Intelligence Analyst'],
        employers: ['Tech Giants', 'Finance', 'Healthcare', 'Research Institutions'],
        growth: 'Senior → Lead → Chief Data Officer',
        description: 'Transform data into business insights and value'
      },
      careerLink: '/careers',
      qualLink: '/qualifications'
    },
    {
      id: 'cyber',
      career: 'Cybersecurity Specialist',
      icon: '🔒',
      color: '#dc2626',
      bgColor: '#fee2e2',
      duration: '3-4 Years',
      salaryRange: '€48k - €95k',
      demandLevel: 'Very High',
      step1: {
        title: 'Education Foundation',
        duration: '3-4 years',
        options: [
          { name: 'BSc Cybersecurity', level: 'NFQ Level 8', provider: 'University' },
          { name: 'Network Security Cert', level: 'NFQ Level 7-8', provider: 'TU/ATU' },
          { name: 'Ethical Hacking Cert', level: 'Professional Cert', provider: 'Industry' }
        ],
        description: 'Master security principles and threat detection'
      },
      step2: {
        title: 'Skill Development',
        duration: '1-2 years experience',
        skills: [
          { name: 'Network Security', category: 'Infrastructure' },
          { name: 'Penetration Testing', category: 'Offensive Security' },
          { name: 'SIEM Tools', category: 'Monitoring' },
          { name: 'Cryptography', category: 'Encryption' },
          { name: 'Linux/Unix', category: 'Systems' },
          { name: 'Python', category: 'Scripting' }
        ],
        description: 'Develop hands-on security testing and defense skills'
      },
      step3: {
        title: 'Career Launch',
        roles: ['Security Analyst', 'Penetration Tester', 'SOC Analyst', 'Security Engineer'],
        employers: ['Tech Companies', 'Banks', 'Government', 'Consulting'],
        growth: 'Senior → Manager → CISO',
        description: 'Protect organizations from cyber threats'
      },
      careerLink: '/careers',
      qualLink: '/qualifications'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Mobile View - Detailed Stacked Cards */}
      <div className="lg:hidden space-y-8">
        {pathways.map((pathway) => (
          <article key={pathway.id} className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 hover:shadow-2xl transition-all" style={{borderColor: pathway.color}} aria-label={`${pathway.career} career pathway`}>
            {/* Header */}
            <div className="p-6 pb-4" style={{backgroundColor: pathway.bgColor}}>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center text-3xl bg-white shadow-md">
                    {pathway.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{pathway.career}</h3>
                    <p className="text-sm font-medium" style={{color: pathway.color}}>{pathway.demandLevel} Demand</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="bg-white rounded-lg px-3 py-2">
                  <p className="text-gray-500 font-semibold">Duration</p>
                  <p className="text-gray-900 font-bold">{pathway.duration}</p>
                </div>
                <div className="bg-white rounded-lg px-3 py-2">
                  <p className="text-gray-500 font-semibold">Salary Range</p>
                  <p className="text-gray-900 font-bold">{pathway.salaryRange}</p>
                </div>
              </div>
            </div>

            <div className="p-6 space-y-5">
              {/* Step 1: Education */}
              <div className="relative">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold" style={{backgroundColor: pathway.color}}>
                    1
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 mb-1">{pathway.step1.title}</h4>
                    <p className="text-xs text-gray-500 mb-2">⏱ {pathway.step1.duration}</p>
                    <p className="text-sm text-gray-600 mb-3 italic">{pathway.step1.description}</p>
                    <div className="space-y-2">
                      {pathway.step1.options.map((opt, idx) => (
                        <div key={idx} className="bg-gray-50 rounded-lg p-2 text-xs">
                          <p className="font-semibold text-gray-900">{opt.name}</p>
                          <p className="text-gray-600">{opt.level} • {opt.provider}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Connector */}
              <div className="flex justify-center">
                <div className="w-px h-6 bg-gray-300"></div>
              </div>

              {/* Step 2: Skills */}
              <div className="relative">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold" style={{backgroundColor: pathway.color}}>
                    2
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 mb-1">{pathway.step2.title}</h4>
                    <p className="text-xs text-gray-500 mb-2">⏱ {pathway.step2.duration}</p>
                    <p className="text-sm text-gray-600 mb-3 italic">{pathway.step2.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {pathway.step2.skills.map((skill, idx) => (
                        <div key={idx} className="group relative">
                          <span className="px-3 py-1.5 rounded-lg text-xs font-semibold" style={{backgroundColor: pathway.bgColor, color: pathway.color}}>
                            {skill.name}
                          </span>
                          <span className="absolute hidden group-hover:block bottom-full left-1/2 transform -translate-x-1/2 mb-1 px-2 py-1 bg-gray-900 text-white text-xs rounded whitespace-nowrap">
                            {skill.category}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Connector */}
              <div className="flex justify-center">
                <div className="w-px h-6 bg-gray-300"></div>
              </div>

              {/* Step 3: Career */}
              <div className="relative">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold" style={{backgroundColor: pathway.color}}>
                    3
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 mb-1">{pathway.step3.title}</h4>
                    <p className="text-sm text-gray-600 mb-3 italic">{pathway.step3.description}</p>
                    <div className="space-y-3">
                      <div>
                        <p className="text-xs font-semibold text-gray-500 mb-2">Entry Roles:</p>
                        <div className="flex flex-wrap gap-1.5">
                          {pathway.step3.roles.map((role, idx) => (
                            <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded font-medium">
                              {role}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-gray-500 mb-2">Career Growth:</p>
                        <p className="text-sm font-medium text-gray-900">{pathway.step3.growth}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <Link href={pathway.qualLink} className="block w-full text-center px-4 py-3 rounded-lg text-white font-semibold hover:opacity-90 transition" style={{backgroundColor: pathway.color}}>
                Explore Qualifications →
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* Desktop View - Interactive Flow Diagram */}
      <div className="hidden lg:block">
        <div className="grid grid-cols-3 gap-6">
          {pathways.map((pathway) => (
            <article
              key={pathway.id}
              className="relative"
              onMouseEnter={() => setSelectedPath(pathway.id)}
              onMouseLeave={() => setSelectedPath(null)}
              aria-label={`${pathway.career} career pathway`}
            >
              {/* Pathway Container */}
              <div className={`transition-all duration-300 ${selectedPath === pathway.id ? 'scale-105' : 'scale-100'}`}>
                
                {/* Pathway Header with Key Info */}
                <div className="bg-white rounded-xl shadow-md p-5 mb-4 border-2 transition-all" style={{borderColor: selectedPath === pathway.id ? pathway.color : '#e5e7eb', backgroundColor: pathway.bgColor}}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center text-3xl">
                      {pathway.icon}
                    </div>
                    <div className="px-3 py-1 rounded-full text-xs font-bold" style={{backgroundColor: pathway.color, color: 'white'}}>
                      {pathway.demandLevel}
                    </div>
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 mb-3 text-center">{pathway.career}</h3>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="bg-white rounded-lg px-2 py-2 text-center">
                      <p className="text-gray-500 font-semibold mb-0.5">Timeline</p>
                      <p className="font-bold text-gray-900">{pathway.duration}</p>
                    </div>
                    <div className="bg-white rounded-lg px-2 py-2 text-center">
                      <p className="text-gray-500 font-semibold mb-0.5">Salary</p>
                      <p className="font-bold text-gray-900">{pathway.salaryRange}</p>
                    </div>
                  </div>
                </div>

                {/* Arrow Down */}
                <div className="flex justify-center -my-2 relative z-10">
                  <div className="w-0.5 h-4" style={{backgroundColor: selectedPath === pathway.id ? pathway.color : '#d1d5db'}}></div>
                  <div className="absolute top-2" style={{color: selectedPath === pathway.id ? pathway.color : '#d1d5db'}}>
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>

                {/* Step 1: Education Foundation */}
                <div className="bg-white rounded-xl shadow-md p-5 mb-4 border-2 hover:shadow-xl transition-all" style={{borderColor: selectedPath === pathway.id ? pathway.color : '#e5e7eb'}}>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm" style={{backgroundColor: pathway.color}}>
                      1
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-bold text-gray-900">{pathway.step1.title}</h4>
                      <p className="text-xs text-gray-500">⏱ {pathway.step1.duration}</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 mb-3 italic leading-relaxed">{pathway.step1.description}</p>
                  <div className="space-y-1.5">
                    {pathway.step1.options.map((opt, idx) => (
                      <div key={idx} className="rounded-lg p-2 text-xs" style={{backgroundColor: pathway.bgColor}}>
                        <p className="font-semibold text-gray-900 leading-tight">{opt.name}</p>
                        <p className="text-gray-600 text-xs">{opt.level}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Arrow Down */}
                <div className="flex justify-center -my-2 relative z-10">
                  <div className="w-0.5 h-4" style={{backgroundColor: selectedPath === pathway.id ? pathway.color : '#d1d5db'}}></div>
                  <div className="absolute top-2" style={{color: selectedPath === pathway.id ? pathway.color : '#d1d5db'}}>
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>

                {/* Step 2: Skill Development */}
                <div className="bg-white rounded-xl shadow-md p-5 mb-4 border-2 hover:shadow-xl transition-all" style={{borderColor: selectedPath === pathway.id ? pathway.color : '#e5e7eb'}}>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm" style={{backgroundColor: pathway.color}}>
                      2
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-bold text-gray-900">{pathway.step2.title}</h4>
                      <p className="text-xs text-gray-500">⏱ {pathway.step2.duration}</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 mb-3 italic leading-relaxed">{pathway.step2.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {pathway.step2.skills.map((skill, idx) => (
                      <div key={idx} className="group relative">
                        <span className="px-2 py-1 rounded-md text-xs font-semibold block" style={{backgroundColor: pathway.bgColor, color: pathway.color}}>
                          {skill.name}
                        </span>
                        <span className="absolute hidden group-hover:block bottom-full left-1/2 transform -translate-x-1/2 mb-1 px-2 py-1 bg-gray-900 text-white text-xs rounded whitespace-nowrap z-20">
                          {skill.category}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Arrow Down */}
                <div className="flex justify-center -my-2 relative z-10">
                  <div className="w-0.5 h-4" style={{backgroundColor: selectedPath === pathway.id ? pathway.color : '#d1d5db'}}></div>
                  <div className="absolute top-2" style={{color: selectedPath === pathway.id ? pathway.color : '#d1d5db'}}>
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>

                {/* Step 3: Career Launch */}
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg p-5 border-2 hover:shadow-2xl transition-all" style={{borderColor: selectedPath === pathway.id ? pathway.color : '#e5e7eb', boxShadow: selectedPath === pathway.id ? `0 10px 40px ${pathway.color}40` : undefined}}>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm" style={{backgroundColor: pathway.color}}>
                      3
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-bold text-gray-900">{pathway.step3.title}</h4>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 mb-3 italic leading-relaxed">{pathway.step3.description}</p>
                  
                  <div className="space-y-3 mb-4">
                    <div>
                      <p className="text-xs font-bold text-gray-500 mb-1.5">Entry Roles:</p>
                      <div className="flex flex-wrap gap-1">
                        {pathway.step3.roles.slice(0, 3).map((role, idx) => (
                          <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md font-medium">
                            {role}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-500 mb-1">Career Path:</p>
                      <p className="text-xs font-semibold text-gray-900">{pathway.step3.growth}</p>
                    </div>
                  </div>

                  <Link
                    href={pathway.qualLink}
                    className="block text-center px-4 py-2.5 rounded-lg text-white font-semibold text-sm hover:opacity-90 transition-all hover:scale-105 shadow-md"
                    style={{backgroundColor: pathway.color}}
                  >
                    View Qualifications →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Not sure which path is right for you?</p>
          <div className="flex gap-4 justify-center">
            <Link href="/careers" className="px-6 py-3 rounded-lg bg-white border-2 font-semibold hover:shadow-lg transition-all" style={{borderColor: '#00b2e3', color: '#00b2e3'}}>
              Explore All Careers
            </Link>
            <Link href="/qualifications" className="px-6 py-3 rounded-lg text-white font-semibold hover:opacity-90 transition-all" style={{backgroundColor: '#00b2e3'}}>
              Browse Qualifications
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// Initiative Card Component
function InitiativeCard({ icon, title, description, link, color }: { icon: string; title: string; description: string; link: string; color: string }) {
  return (
    <article className="card-hover bg-white rounded-xl shadow-md p-8 group border border-gray-100">
      <div 
        className="w-16 h-16 rounded-full mb-6 flex items-center justify-center transition-transform duration-200" 
        style={{backgroundColor: '#e6f7ff'}}
        aria-hidden="true"
      >
        <span className="text-3xl" role="img" aria-label={title}>{icon}</span>
      </div>
      <h3 className="heading-3 mb-4 transition-colors duration-200" style={{color: '#212721'}}>
        {title}
      </h3>
      <p className="body-normal text-gray-600 mb-8 leading-relaxed">
        {description}
      </p>
      <Link
        href={link}
        className="inline-flex items-center gap-2 btn-primary"
        aria-label={`Learn more about ${title}`}
      >
        Learn More
        <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </article>
  );
}
