export type Qualification = {
  id: string;
  title: string;
  provider: string;
  providerLogo?: string;
  nfqLevel?: number;
  pathway: 'University' | 'Apprenticeship' | 'Further Education' | 'Bootcamp';
  delivery: 'On-campus' | 'Online' | 'Hybrid';
  duration: string; // e.g. '4 years', '12 weeks'
  location?: string;
  costRange?: string;
  url: string;
  applyUrl?: string;
  outcomes: string[]; // career titles
  summary?: string;
  modules?: string[];
  entryRequirements?: string[];
  startDates?: string[];
  tags?: string[];
};

export const qualifications: Qualification[] = [
  {
    id: 'ug-cs-it-gy350',
    title: 'BSc (Hons) in Computer Science & IT',
    provider: 'University of Galway',
    providerLogo: '/logos/university-of-galway.png',
    nfqLevel: 8,
    pathway: 'University',
    delivery: 'On-campus',
    duration: '4 years',
    location: 'Galway',
    url: 'https://www.universityofgalway.ie/courses/undergraduate-courses/computer-science-and-information-technology.html',
    outcomes: ['Software Developer', 'Systems Analyst', 'Data Analyst'],
    summary:
      'Degree covering software engineering, algorithms, databases, and networks with strong industry links.',
    modules: ['Programming', 'Web Development', 'Databases', 'Networks'],
    entryRequirements: ['Leaving Cert Maths (H5)'],
  },
  {
    id: 'atu-cs-au361',
    title: 'BSc (Hons) in Computer Science',
    provider: 'ATU Letterkenny',
    providerLogo: '/logos/atu-logo.png',
    nfqLevel: 8,
    pathway: 'University',
    delivery: 'On-campus',
    duration: '4 years',
    location: 'Donegal',
    url: 'https://www.atu.ie/courses/bachelor-of-science-honours-computer-science',
    outcomes: ['Software Developer', 'Cloud Engineer'],
  },
  {
    id: 'ul-cs-lm121',
    title: 'BSc in Computer Systems',
    provider: 'University of Limerick',
    providerLogo: '/logos/ul-logo.png',
    nfqLevel: 8,
    pathway: 'University',
    delivery: 'On-campus',
    duration: '4 years',
    location: 'Limerick',
    url: 'https://www.ul.ie/courses/bachelor-science-computer-systems',
    outcomes: ['Software Developer', 'DevOps Engineer'],
  },
  {
    id: 'atu-software-au945',
    title: 'BSc (Hons) in Software Development',
    provider: 'ATU Galway',
    providerLogo: '/logos/atu-logo.png',
    nfqLevel: 8,
    pathway: 'University',
    delivery: 'On-campus',
    duration: '4 years',
    location: 'Galway',
    url: 'https://www.atu.ie/courses/bachelor-of-science-honours-software-development',
    outcomes: ['Software Developer', 'Mobile Developer'],
  },
  {
    id: 'postgrad-ai-ug',
    title: 'MSc in Artificial Intelligence',
    provider: 'University of Galway',
    providerLogo: '/logos/university-of-galway.png',
    nfqLevel: 9,
    pathway: 'University',
    delivery: 'On-campus',
    duration: '1 year',
    url: 'https://www.universityofgalway.ie/courses/taught-postgraduate-courses/computer-science-artificial-intelligence.html',
    outcomes: ['Machine Learning Engineer', 'AI Researcher'],
  },
  {
    id: 'bootcamp-fullstack',
    title: 'Full-Stack Web Development Bootcamp',
    provider: 'Tech Bootcamp',
    nfqLevel: undefined,
    pathway: 'Bootcamp',
    delivery: 'Online',
    duration: '16 weeks',
    costRange: '€3,000–€6,000',
    url: 'https://example.com/fullstack',
    outcomes: ['Web Developer', 'Junior Software Developer'],
  },
];


