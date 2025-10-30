'use client';

import * as React from 'react';
import Head from 'next/head';
import Navbar from '../../components/NavBar';
import Footer from '../../components/Footer';

export default function AdoptASchoolPage() {
  // Structured data for SEO (JSON-LD)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Adopt-a-School Programme | iTAG EdUTec",
    "description": "Connecting tech companies with schools to enhance IT education and close the skills gap. See how Ericsson, Cisco, and HPE are making a difference in Irish schools.",
    "url": "https://www.itag.ie/initiatives/adopt-a-school",
    "publisher": {
      "@type": "Organization",
      "name": "iTAG (Ireland's Technology Association of Galway)",
      "url": "https://www.itag.ie"
    },
    "mainEntity": {
      "@type": "EducationalOrganization",
      "name": "EdUTec - iTAG Education Initiative",
      "description": "Pooling resources and fostering partnerships between tech companies and schools"
    }
  };

  React.useEffect(() => {
    // Dynamically set page title and meta tags
    document.title = "Adopt-a-School Programme | iTAG EdUTec - Connecting Tech Companies with Schools";
    
    // Set or update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Connect your tech company with Irish schools through iTAG\'s Adopt-a-School programme. Provide IT equipment, tech classes, and work placements to enhance STEM education in Galway.');
    
    // Add keywords meta tag
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', 'adopt a school, STEM education, tech education Ireland, iTAG Galway, EdUTec, school partnerships, tech companies, IT education, cybersecurity education, coding for schools');
    
    // Open Graph tags for social media
    const ogTags = [
      { property: 'og:title', content: 'Adopt-a-School Programme | iTAG EdUTec' },
      { property: 'og:description', content: 'See how leading tech companies like Ericsson, Cisco, and HPE are making a real impact in Irish schools through the Adopt-a-School programme.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://www.itag.ie/initiatives/adopt-a-school' },
      { property: 'og:image', content: 'https://www.itag.ie/adopt-a-school/cisco-calasanctius.jpeg' }
    ];
    
    ogTags.forEach(tag => {
      let ogTag = document.querySelector(`meta[property="${tag.property}"]`);
      if (!ogTag) {
        ogTag = document.createElement('meta');
        ogTag.setAttribute('property', tag.property);
        document.head.appendChild(ogTag);
      }
      ogTag.setAttribute('content', tag.content);
    });
    
    // Twitter Card tags
    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Adopt-a-School Programme | iTAG EdUTec' },
      { name: 'twitter:description', content: 'Connect your tech company with Irish schools to enhance IT education and close the skills gap.' }
    ];
    
    twitterTags.forEach(tag => {
      let twitterTag = document.querySelector(`meta[name="${tag.name}"]`);
      if (!twitterTag) {
        twitterTag = document.createElement('meta');
        twitterTag.setAttribute('name', tag.name);
        document.head.appendChild(twitterTag);
      }
      twitterTag.setAttribute('content', tag.content);
    });
  }, []);

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <Navbar />
      <main className="pt-0 min-h-screen bg-white text-gray-800">
        {/* Hero Section with Background Image */}
        <section 
          className="relative text-white py-20 md:py-28 lg:py-36 bg-cover bg-center"
          style={{
            backgroundImage: 'linear-gradient(rgba(0, 178, 227, 0.85), rgba(0, 153, 199, 0.85)), url(/adopt-a-school/Creagh%20NS%202.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Adopt a School
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">
              Building Lasting School–Industry Partnerships
            </p>
            <p className="text-lg sm:text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              For businesses and schools in the Galway region
            </p>
          </div>
        </section>

        {/* What Is Section */}
        <section className="py-12 md:py-16 lg:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6" style={{color: '#00b2e3'}}>
                What Is the Adopt a School Programme?
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                The Adopt a School initiative is a key programme aimed at strengthening the STEM talent pipeline by connecting tech companies with schools to enhance IT education and address the skills gap. As part of iTAG's core focus on talent development, <strong>EdUTec</strong> amplifies these efforts by pooling resources and fostering lasting partnerships.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8 mt-12">
              <div className="bg-gray-50 rounded-xl p-6 md:p-8 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto" style={{backgroundColor: '#00b2e3'}}>
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-center mb-3 text-gray-900">Early Engagement</h3>
                <p className="text-gray-700 text-center leading-relaxed">
                  Target students at the beginning of their educational journey to spark interest in STEM fields and technology careers.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 md:p-8 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto" style={{backgroundColor: '#00b2e3'}}>
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-center mb-3 text-gray-900">Industry Collaboration</h3>
                <p className="text-gray-700 text-center leading-relaxed">
                  Enable companies to "adopt" schools by providing IT equipment, workshops, mentorship, and real-world exposure to students.
            </p>
          </div>

              <div className="bg-gray-50 rounded-xl p-6 md:p-8 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto" style={{backgroundColor: '#00b2e3'}}>
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-center mb-3 text-gray-900">Teacher Support</h3>
                <p className="text-gray-700 text-center leading-relaxed">
                  Enhance teacher capabilities through training, resources, and ongoing support to deliver quality STEM education.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Take Part Section */}
        <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4" style={{color: '#00b2e3'}}>
                Why Take Part
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <svg className="w-8 h-8" style={{color: '#00b2e3'}} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Build a Diverse STEM Pipeline</h3>
                  <p className="text-gray-700">Aims to build a diverse and inclusive STEM talent pipeline from an early age, ensuring future workforce readiness.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <svg className="w-8 h-8" style={{color: '#00b2e3'}} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Provide Role Models</h3>
                  <p className="text-gray-700">Provides students with role models and real-world STEM applications, inspiring the next generation of tech professionals.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <svg className="w-8 h-8" style={{color: '#00b2e3'}} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Strengthen Community Ties</h3>
                  <p className="text-gray-700">Strengthens community ties between schools and industries in the region, creating lasting partnerships.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <svg className="w-8 h-8" style={{color: '#00b2e3'}} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Close the Skills Gap</h3>
                  <p className="text-gray-700">Address the technology skills gap by equipping students with essential digital skills from an early age.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-12 md:py-16 lg:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6" style={{color: '#00b2e3'}}>
                How It Works
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-gray-50 rounded-xl p-6 md:p-10 shadow-lg">
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                  iTAG EdUTec works to identify schools in the Galway region that would benefit from industry partnerships. We then offer member companies the opportunity to adopt a school for a full academic year.
                </p>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                  Through this programme, organisations provide:
                </p>
                <ul className="space-y-3 text-gray-700 text-lg">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 mr-3 flex-shrink-0 mt-1" style={{color: '#00b2e3'}} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span><strong>IT Equipment & Resources:</strong> Hardware, software, and learning materials</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 mr-3 flex-shrink-0 mt-1" style={{color: '#00b2e3'}} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span><strong>Tech Classes & Workshops:</strong> Hands-on coding, robotics, and cybersecurity sessions</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 mr-3 flex-shrink-0 mt-1" style={{color: '#00b2e3'}} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span><strong>Guest Speakers & Mentorship:</strong> Industry professionals sharing real-world insights</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 mr-3 flex-shrink-0 mt-1" style={{color: '#00b2e3'}} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span><strong>Work Placements & Site Visits:</strong> Exposure to professional tech environments</span>
                  </li>
                </ul>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed mt-6">
                  We guide you through every step, from initial introductions to activity delivery, ensuring these efforts enrich learning environments while nurturing a skilled and innovative future workforce.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories Section */}
        <section className="bg-gray-50 py-12 sm:py-14 md:py-16 lg:py-20" aria-labelledby="success-stories-heading">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 id="success-stories-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4" style={{color: '#00b2e3'}}>Success Stories</h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                Across Galway, schools that joined Adopt a School have seen remarkable transformations. See how leading tech companies are making a real impact through lasting partnerships.
              </p>
            </div>

            <div className="space-y-8 md:space-y-12">
              {/* Ericsson & Creagh National School */}
              <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <div className="md:flex">
                  <div className="md:w-2/5 overflow-hidden min-h-[250px] md:min-h-0">
                    <img 
                      src="/adopt-a-school/Creagh%20NS%202.jpg" 
                      alt="Students at Creagh National School Ballinasloe participating in Ericsson's STEM Programme with Micro:bit devices"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      width="600"
                      height="400"
                    />
                  </div>
                  <div className="md:w-3/5 p-4 sm:p-6 md:p-8 lg:p-10">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 md:mb-4" style={{color: '#00b2e3'}}>Ericsson & Creagh National School, Ballinasloe</h3>
                    <div className="space-y-3 md:space-y-4 text-gray-700 text-sm sm:text-base md:text-lg">
                      <p>
                        Students at Creagh National School took part in Ericsson's <strong>School STEM Programme</strong>, where they explored coding and technology through <strong>fun, interactive sessions</strong>. Using <strong>Micro:bit devices</strong>, pupils created interactive games like rock-paper-scissors and buzz-wire, gaining practical experience with coding and problem-solving.
                      </p>
                      <p>
                        The workshop also included an introduction to <strong>cybersecurity and online safety</strong>, equipping students with essential digital skills. Following the event, teachers plan to integrate Ericsson's online STEM resources into their classroom activities—ensuring the learning continues long after the visit.
                      </p>
                    </div>
                  </div>
                </div>
              </article>

              {/* Cisco & Calasanctius College */}
              <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <div className="md:flex md:flex-row-reverse">
                  <div className="md:w-2/5 overflow-hidden min-h-[250px] md:min-h-0">
                    <img 
                      src="/adopt-a-school/Cisco%20and%20calasanctius%201.jpeg" 
                      alt="Cisco Galway partnership with Calasanctius College Oranmore for Girls in IT and hackathon events"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      width="600"
                      height="400"
                    />
                  </div>
                  <div className="md:w-3/5 p-4 sm:p-6 md:p-8 lg:p-10">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 md:mb-4" style={{color: '#00b2e3'}}>Cisco & Calasanctius College, Oranmore</h3>
                    <div className="space-y-3 md:space-y-4 text-gray-700 text-sm sm:text-base md:text-lg">
                      <p>
                        Cisco Galway has partnered with Calasanctius College since 2007, delivering programmes that encourage students—particularly girls—to explore careers in technology.
                      </p>
                      <p>
                        Through <strong>Insight Days, Girls in IT events, hackathons</strong>, and <strong>transition year programmes</strong>, students gain exposure to real-world tech environments, learn to code, and collaborate on creative projects.
                      </p>
                      <blockquote className="italic text-gray-900 border-l-4 pl-4 my-4" style={{borderColor: '#00b2e3'}}>
                        "This Adopt-a-School is a transformative initiative that can have a lasting impact. To be able to promote STEM and support our local school in Oranmore where Cisco is based is an added bonus."
                      </blockquote>
                      <p className="text-xs sm:text-sm text-gray-600">
                        — <em>Audrey Bleach, Senior Engagement & Operations Manager, Cisco Galway</em>
                      </p>
                    </div>
                  </div>
                </div>
              </article>

              {/* HPE & Salerno Secondary School */}
              <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <div className="md:flex">
                  <div className="md:w-2/5 overflow-hidden min-h-[250px] md:min-h-0">
                    <img 
                      src="/adopt-a-school/Fidelity%20and%20high%20cross.jpeg" 
                      alt="HPE Galway partnership with Salerno Secondary School Salthill for Transition Year cybersecurity education"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      width="600"
                      height="400"
                    />
                  </div>
                  <div className="md:w-3/5 p-4 sm:p-6 md:p-8 lg:p-10">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 md:mb-4" style={{color: '#00b2e3'}}>Hewlett Packard Enterprise (HPE) & Salerno Secondary School, Salthill</h3>
                    <div className="space-y-3 md:space-y-4 text-gray-700 text-sm sm:text-base md:text-lg">
                      <p>
                        Transition Year students from Salerno Secondary School visited HPE Galway, meeting more than 40 professionals specializing in <strong>design, IT, cybersecurity, marketing, and communications</strong>.
                      </p>
                      <p>
                        The experience offered an inspiring look at life in Ireland's IT sector, highlighting the importance of <strong>curiosity</strong>, <strong>creativity</strong>, and <strong>collaboration</strong> in technology careers.
                      </p>
                      <p>
                        HPE's involvement extends beyond secondary education—partnering with <strong>Atlantic Technological University (ATU)</strong> to develop new qualifications such as the <strong>Higher Diploma in Science in Cybersecurity Risk and Compliance</strong> and <strong>Postgraduate Certificate in Cybersecurity Operations</strong>, supporting the next generation of cybersecurity professionals.
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Get Involved Section */}
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white" aria-labelledby="get-involved-heading">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 id="get-involved-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6" style={{color: '#00b2e3'}}>
                Get Involved
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed">
                Whether you're a business looking to make a difference, or a school eager to enhance STEM learning, Adopt a School offers a way to take action.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* For Schools */}
              <div className="bg-gray-50 rounded-xl p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-blue-200">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center mb-4 mx-auto" style={{backgroundColor: '#00b2e3'}}>
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{color: '#00b2e3'}}>For Schools</h3>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed mb-6 text-center">
                  Register your interest for the upcoming year and tell us about your current STEM activities. We'll match you with a company that can help you grow your resources and opportunities.
                </p>
                <div className="text-center">
                  <a
                    href="mailto:info@itag.ie?subject=School Interest - Adopt a School Programme"
                    className="inline-block text-white px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity duration-200 shadow-lg touch-manipulation"
                    style={{backgroundColor: '#00b2e3'}}
                    aria-label="Contact iTAG for schools"
                  >
                    Register Your School
                  </a>
                </div>
              </div>

              {/* For Businesses */}
              <div className="bg-gray-50 rounded-xl p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-blue-200">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center mb-4 mx-auto" style={{backgroundColor: '#00b2e3'}}>
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{color: '#00b2e3'}}>For Businesses</h3>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed mb-6 text-center">
                  You can adopt a school for a full academic year, providing funding, mentorship, or access to facilities. We'll guide you through every step, from initial introductions to activity delivery.
                </p>
                <div className="text-center">
                  <a
                    href="mailto:info@itag.ie?subject=Business Interest - Adopt a School Programme"
                    className="inline-block text-white px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity duration-200 shadow-lg touch-manipulation"
                    style={{backgroundColor: '#00b2e3'}}
                    aria-label="Contact iTAG for businesses"
                  >
                    Adopt a School
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="text-center mt-12">
              <p className="text-gray-600 text-lg mb-3">
                Have questions? Contact the iTAG EdUTec team
              </p>
              <a 
                href="mailto:info@itag.ie" 
                className="text-xl font-semibold hover:underline transition-all"
                style={{color: '#00b2e3'}}
              >
                info@itag.ie
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}


