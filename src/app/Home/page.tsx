'use client';

import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import * as React from 'react';

// Counter animation hook
function useCountUp(end: number, duration: number = 2000) {
  const [count, setCount] = React.useState(0);
  const [hasAnimated, setHasAnimated] = React.useState(false);

  React.useEffect(() => {
    if (!hasAnimated) return;
    
    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    
    requestAnimationFrame(step);
  }, [end, duration, hasAnimated]);

  return { count, setHasAnimated };
}

export default function Home() {
  const stats = [
    { value: 25, label: 'Years of Excellence', suffix: '' },
    { value: 500, label: 'Students Reached', suffix: '+' },
    { value: 50, label: 'Industry Partners', suffix: '+' },
    { value: 15, label: 'Schools Adopted', suffix: '' },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white text-gray-800 font-sans">
        
        {/* Hero Section with video background */}
        <section className="px-8 py-20 text-center relative overflow-hidden">
          {/* Video Background */}
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute w-full h-full object-cover opacity-20"
            >
              <source src="https://cdn.coverr.co/videos/coverr-coding-on-a-laptop-5307/1080p.mp4" type="video/mp4" />
            </video>
            {/* Gradient overlay */}
            <div className="absolute inset-0" style={{background: 'linear-gradient(135deg, rgba(230, 247, 255, 0.95) 0%, rgba(240, 249, 255, 0.95) 100%)'}}></div>
          </div>
          
          <div className="max-w-6xl mx-auto relative z-10">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in" style={{color: '#212721'}}>
              Tech Careers Start Here
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto mb-8 text-gray-700 animate-fade-in-delay">
              Empowering Ireland's next generation of tech talent through hands-on STEAM experiences, 
              industry partnerships, and real career pathways.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2">
              <Link
                href="/careers"
                className="inline-block text-white px-8 py-4 rounded-full font-semibold hover:scale-105 hover:shadow-xl transition-all duration-300 text-lg"
                style={{backgroundColor: '#00b2e3'}}
              >
                Explore Careers →
              </Link>
              <Link
                href="/initiatives/pathways"
                className="inline-block px-8 py-4 rounded-full font-semibold hover:scale-105 hover:shadow-xl transition-all duration-300 text-lg border-2 bg-white"
                style={{color: '#00b2e3', borderColor: '#00b2e3'}}
              >
                Pathways 2025 🎓
              </Link>
            </div>
          </div>
        </section>

        {/* Animated Impact Statistics */}
        <ImpactStatistics stats={stats} />

        {/* Featured Initiatives with hover effects */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center" style={{color: '#212721'}}>
              Empowering Through Action
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
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

        {/* Upcoming Events Preview */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-2" style={{color: '#212721'}}>
                  Upcoming Events
                </h2>
                <p className="text-gray-600">Join us for workshops, career fairs, and networking opportunities</p>
              </div>
              <Link
                href="/events"
                className="hidden md:inline-flex items-center gap-2 text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300"
                style={{backgroundColor: '#00b2e3'}}
              >
                View All Events
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {/* Featured Event - Pathways 2025 */}
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-2 border-blue-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-2xl" style={{backgroundColor: '#e6f7ff'}}>
                    🎓
                  </div>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-xs font-bold rounded-full">
                    ⭐ Featured
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2" style={{color: '#212721'}}>Pathways 2025</h3>
                <p className="text-sm text-gray-600 mb-3">Nov 6, 2025 • Galway</p>
                <p className="text-gray-600 mb-4 text-sm">Ireland's premier tech career fair. Meet universities and employers.</p>
                <Link
                  href="/initiatives/pathways"
                  className="inline-flex items-center gap-2 text-white px-4 py-2 rounded-full text-sm font-medium hover:scale-105 transition-all duration-300"
                  style={{backgroundColor: '#00b2e3'}}
                >
                  Learn More →
                </Link>
              </div>

              {/* Event 2 */}
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-2xl mb-4" style={{backgroundColor: '#e6f7ff'}}>
                  💻
                </div>
                <h3 className="text-xl font-semibold mb-2" style={{color: '#212721'}}>AI Workshop</h3>
                <p className="text-sm text-gray-600 mb-3">Nov 15, 2025 • Online</p>
                <p className="text-gray-600 mb-4 text-sm">Hands-on workshop exploring AI and machine learning fundamentals.</p>
                <Link
                  href="/events"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium hover:scale-105 transition-all duration-300"
                  style={{backgroundColor: '#e6f7ff', color: '#00b2e3'}}
                >
                  View Details →
                </Link>
              </div>

              {/* Event 3 */}
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-2xl mb-4" style={{backgroundColor: '#fff0f6'}}>
                  🤝
                </div>
                <h3 className="text-xl font-semibold mb-2" style={{color: '#212721'}}>Women in Tech</h3>
                <p className="text-sm text-gray-600 mb-3">Nov 22, 2025 • Limerick</p>
                <p className="text-gray-600 mb-4 text-sm">Networking evening for female tech professionals.</p>
                <Link
                  href="/events"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium hover:scale-105 transition-all duration-300"
                  style={{backgroundColor: '#e6f7ff', color: '#00b2e3'}}
                >
                  View Details →
                </Link>
              </div>
            </div>

            <div className="text-center mt-8 md:hidden">
              <Link
                href="/events"
                className="inline-flex items-center gap-2 text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300"
                style={{backgroundColor: '#00b2e3'}}
              >
                View All Events →
              </Link>
            </div>
          </div>
        </section>

        {/* Trending Skills Section */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center" style={{color: '#212721'}}>
              In-Demand Tech Skills
            </h2>
            <p className="text-center text-gray-600 mb-12">
              The most sought-after skills in Ireland's tech industry
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Python', 'JavaScript', 'React', 'Cloud Computing', 'Data Science', 'AI/ML', 'Cyber Security', 'DevOps', 'Java', 'SQL', 'AWS', 'Docker'].map((skill) => (
                <span
                  key={skill}
                  className="px-6 py-3 rounded-full font-semibold text-white hover:scale-110 transition-transform duration-300 cursor-pointer shadow-md"
                  style={{backgroundColor: '#00b2e3'}}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* University Partners */}
        <section className="py-16 px-6" style={{backgroundColor: '#f8fafc'}}>
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12" style={{color: '#212721'}}>
              Trusted by Leading Institutions
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
              <div className="text-lg font-semibold text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">University of Galway</div>
              <div className="text-lg font-semibold text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">University of Limerick</div>
              <div className="text-lg font-semibold text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">ATU</div>
              <div className="text-lg font-semibold text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">TUS</div>
              <div className="text-lg font-semibold text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">Skillnet Ireland</div>
            </div>
          </div>
        </section>

        {/* itag Partnership Section */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 md:p-12 shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{color: '#212721'}}>
                    Powered by itag Skillnet
                  </h2>
                  <p className="text-lg text-gray-700 mb-6">
                    EdUTec Careers is proudly supported by itag (Irish Technology Association Galway) 
                    and itag Skillnet Ireland, bringing together industry expertise, educational institutions, 
                    and emerging talent to shape Ireland's tech future.
                  </p>
                  <p className="text-gray-600 mb-6">
                    As part of itag's 25th anniversary celebration, we're committed to empowering the next 
                    generation of tech professionals through innovative programmes, industry partnerships, 
                    and real career pathways.
                  </p>
                  <Link
                    href="/about"
                    className="inline-block text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition"
                    style={{backgroundColor: '#00b2e3'}}
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

        {/* Call to Action with pulse animation */}
        <section className="py-20 px-6" style={{background: 'linear-gradient(135deg, #00b2e3 0%, #0099c7 100%)'}}>
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Shape Ireland's Tech Future?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Whether you're a student exploring careers, an educator seeking resources, 
              or a company looking to make an impact - we're here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/about"
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:scale-105 hover:shadow-2xl transition-all duration-300 text-lg"
              >
                Learn About Us
              </Link>
              <Link
                href="mailto:info@edutec.ie"
                className="inline-block border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 hover:scale-105 transition-all duration-300 text-lg"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </section>

      </main>
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

// Animated Statistics Component
function ImpactStatistics({ stats }: { stats: Array<{ value: number; label: string; suffix: string }> }) {
  const [isVisible, setIsVisible] = React.useState(false);
  const sectionRef = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 px-6" style={{backgroundColor: '#212721'}}>
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">Our Impact</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} isVisible={isVisible} delay={index * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({ value, label, suffix, isVisible, delay }: { value: number; label: string; suffix: string; isVisible: boolean; delay: number }) {
  const { count, setHasAnimated } = useCountUp(value);

  React.useEffect(() => {
    if (isVisible) {
      setTimeout(() => setHasAnimated(true), delay);
    }
  }, [isVisible, delay, setHasAnimated]);

  return (
    <div className="hover:scale-110 transition-transform duration-300">
      <div className="text-4xl md:text-5xl font-bold mb-2" style={{color: '#00b2e3'}}>
        {count}{suffix}
      </div>
      <div className="text-white">{label}</div>
    </div>
  );
}

// Initiative Card Component
function InitiativeCard({ icon, title, description, link, color }: { icon: string; title: string; description: string; link: string; color: string }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
      <div className="w-16 h-16 rounded-full mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300" style={{backgroundColor: '#e6f7ff'}}>
        <span className="text-3xl">{icon}</span>
      </div>
      <h3 className="text-2xl font-semibold mb-4 group-hover:text-blue-600 transition-colors" style={{color: '#212721'}}>{title}</h3>
      <p className="text-gray-600 mb-6 leading-relaxed">
        {description}
      </p>
      <Link
        href={link}
        className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300 text-white"
        style={{backgroundColor: color}}
      >
        Learn More
        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  );
}
