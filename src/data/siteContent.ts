const whatsAppNumber = '919876543210'

export const clinic = {
  name: 'SmileCare Dental',
  tagline: 'Precision care. Gentle hands. Confident smiles.',
  phoneDisplay: '+91 98765 43210',
  phoneTel: '+919876543210',
  whatsAppDisplay: 'WhatsApp',
  /** E.164 without + for wa.me */
  whatsAppTel: whatsAppNumber,
  whatsAppBookingUrl: `https://wa.me/${whatsAppNumber}?text=${encodeURIComponent(
    'Hi SmileCare Dental — I would like to book an appointment.',
  )}`,
  whatsAppGeneralUrl: `https://wa.me/${whatsAppNumber}?text=${encodeURIComponent(
    'Hi SmileCare Dental — I have a question.',
  )}`,
  googleReviewsUrl: 'https://www.google.com/maps/search/?api=1&query=SmileCare+Dental+Noida',
  email: 'hello@smilecaredental.example',
  addressLines: [
    'Plot 12, Health Hub Tower',
    'Sector 62, Noida',
    'Uttar Pradesh 201301',
  ],
  hours: [
    { days: 'Mon – Sat', time: '9:00 AM – 8:00 PM' },
    { days: 'Sunday', time: '10:00 AM – 2:00 PM' },
  ],
  mapEmbedSrc:
    'https://maps.google.com/maps?q=28.627981,77.3648567&z=15&output=embed&iwloc=near',
} as const

export const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Team', href: '#team' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'First visit', href: '#first-visit' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Book', href: '#booking' },
  { label: 'Contact', href: '#contact' },
] as const

/** Credibility row — replace with real accreditations when available */
export const trustStrip = [
  {
    title: 'Sterilisation traceability',
    subtitle: 'Class B autoclaves · pouch tracking · barrier protocols',
  },
  {
    title: 'Digital-first records',
    subtitle: 'Low-dose imaging · scan-based planning · encrypted charts',
  },
  {
    title: 'Transparent estimates',
    subtitle: 'Written plans before treatment · no surprise add-ons',
  },
  {
    title: 'Same-week consults',
    subtitle: 'Priority triage for pain, trauma, and swelling',
  },
] as const

export const team = [
  {
    name: 'Dr. Ananya Mehra',
    role: 'Lead Dentist · MDS (Endodontics)',
    image:
      'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80',
    alt: 'Dr. Ananya Mehra, lead dentist',
  },
  {
    name: 'Dr. Karan Bhalla',
    role: 'Implant & Oral Surgery',
    image:
      'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=400&q=80',
    alt: 'Dr. Karan Bhalla, implant and oral surgery',
  },
  {
    name: 'Ms. Ritu Malhotra',
    role: 'Head Hygienist · Preventive Care',
    image:
      'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=400&q=80',
    alt: 'Ms. Ritu Malhotra, head hygienist',
  },
  {
    name: 'Aisha Khan',
    role: 'Patient Care Coordinator',
    image:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    alt: 'Aisha Khan, patient care coordinator',
  },
] as const

export const firstVisit = {
  title: 'Your first visit — calm, clear, and on time.',
  subtitle:
    'Most new patients tell us the hardest part was simply making the call. Here is exactly what happens next.',
  steps: [
    {
      title: 'Warm handoff',
      body: 'A coordinator confirms your goals, medical notes, and insurance or payment preferences before you arrive.',
    },
    {
      title: 'Comprehensive assessment',
      body: 'Photos, gentle charting, and digital scans when needed — we co-review findings on-screen so you stay in control.',
    },
    {
      title: 'Prioritised plan',
      body: 'You leave with a sequenced plan, transparent fees, and the option to start same-day if you wish.',
    },
  ],
  reassurance:
    'First hygiene visits typically run 45–60 minutes. Complimentary parking and step-free access at our Sector 62 tower.',
} as const

export const bookingTimePreferences = [
  'Morning (9 AM – 12 PM)',
  'Afternoon (12 PM – 4 PM)',
  'Evening (4 PM – 8 PM)',
  'First available',
] as const

export const patientTypes = ['I am a new patient', 'I am an existing patient'] as const

export const hero = {
  eyebrow: 'Noida’s trusted dental studio',
  title: 'A calmer kind of dentistry — for smiles that last.',
  subtitle:
    'From preventive care to full smile makeovers, SmileCare Dental blends advanced technology with unhurried, personalised attention.',
  imageSrc:
    'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=900&q=80',
  imageAlt: 'Dentist in a modern clinic examining a patient with gentle care',
} as const

export const services = [
  {
    title: 'Teeth Cleaning & Prevention',
    description:
      'Guided hygiene visits, airflow polishing, and tailored maintenance plans to keep enamel strong and gums healthy.',
    image:
      'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Root Canal Therapy',
    description:
      'Microscope-assisted treatment, comfortable anaesthesia options, and same-day crowns when you need efficiency.',
    image:
      'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Dental Implants',
    description:
      '3D-planned placement, premium biomaterials, and restorative finishes that look and feel indistinguishable from natural teeth.',
    image:
      'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Braces & Invisalign',
    description:
      'Clear aligners and aesthetic fixed appliances for teens and adults — discreet options with predictable timelines.',
    image:
      'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=600&q=80',
  },
] as const

export const about = {
  name: 'Dr. Ananya Mehra, MDS',
  role: 'Lead Dentist & Cosmetic Specialist',
  yearsExperience: '14+ years of clinical excellence',
  bio: [
    'Dr. Mehra trained at leading institutes in India and the UK, with advanced fellowships in aesthetic and restorative dentistry. She believes every treatment plan should feel collaborative — never rushed.',
    'Her practice philosophy pairs evidence-based protocols with a warm chairside manner, especially for anxious patients and families visiting together.',
  ],
  credentials: [
    'MDS — Conservative Dentistry & Endodontics',
    'Member — Indian Academy of Aesthetic & Cosmetic Dentistry',
    'Digital smile design & full-mouth rehabilitation',
  ],
  portraitSrc:
    'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80',
  portraitAlt: 'Portrait of Dr. Ananya Mehra in clinical attire smiling warmly',
} as const

export const whyChooseUs = [
  {
    title: 'Clinical hygiene, elevated',
    description:
      'HEPA-filtered operatories, medical-grade sterilisation cycles, and single-use consumables wherever it matters.',
  },
  {
    title: 'Technology you can feel',
    description:
      'Digital scans replace messy impressions, low-dose radiography guides planning, and laser options reduce discomfort.',
  },
  {
    title: 'Transparent care journeys',
    description:
      'Treatment coordinators walk you through timelines, costs, and alternatives so you always know what to expect.',
  },
  {
    title: 'Anxiety-aware dentistry',
    description:
      'Noise-cancelling headphones, scent-free environments, and sedation choices for longer procedures.',
  },
] as const

export const testimonials = [
  {
    quote:
      'I avoided dentists for years. The team at SmileCare never judged me — they rebuilt my confidence along with my molars.',
    name: 'Priya S.',
    detail: 'Full-mouth rehabilitation',
    rating: 5,
  },
  {
    quote:
      'Invisalign here was seamless. Appointments ran on time, and I could see my simulation before we even started.',
    name: 'Rahul K.',
    detail: 'Orthodontics',
    rating: 5,
  },
  {
    quote:
      'My daughter actually asks when we get to go back. That says everything about how gentle they are with kids.',
    name: 'Neha V.',
    detail: 'Family dentistry',
    rating: 5,
  },
  {
    quote:
      'Implant surgery sounded scary, but it was quicker than a lunch break. Healing support was exceptional.',
    name: 'Arjun M.',
    detail: 'Implant placement',
    rating: 5,
  },
  {
    quote:
      'The whitening + bonding makeover was subtle but transformative. Friends keep asking if I changed my skincare routine.',
    name: 'Sana A.',
    detail: 'Cosmetic smile design',
    rating: 5,
  },
] as const

export const gallery = [
  {
    caption: 'Composite bonding — natural translucency restored',
    before: '/gallery/bonding-before.jpg',
    after: '/gallery/bonding-after.jpg',
    beforeAlt: 'Illustrative smile showing excess gingival display before cosmetic treatment',
    afterAlt: 'Illustrative close-up of teeth and lips after cosmetic dental work',
  },
  {
    caption: 'Aligner therapy — aligned arch in 11 months',
    before: '/gallery/aligner-before.jpg',
    after: '/gallery/aligner-after.jpg',
    beforeAlt: 'Illustrative clear orthodontic aligner tray before treatment',
    afterAlt: 'Illustrative aligned smile after orthodontic aligner therapy',
  },
  {
    caption: 'Professional whitening — lifted stains, even tone',
    before: '/gallery/whitening-before.jpg',
    after: '/gallery/whitening-after.jpg',
    beforeAlt: 'Illustrative natural smile before professional whitening',
    afterAlt: 'Illustrative bright smile after teeth whitening',
  },
] as const

export const bookingServices = [
  'Teeth cleaning / hygiene',
  'Root canal consultation',
  'Implant assessment',
  'Braces or Invisalign consult',
  'Cosmetic smile design',
  'Emergency visit',
] as const
