import {
  Calendar,
  Users,
  Ticket,
  CreditCard,
  QrCode,
  Bell,
  BarChart3,
  Smartphone,
  Clock,
  LayoutDashboard,
  Shield,
  Zap,
  Globe,
  Heart,
  Music,
  Mountain,
  Waves,
  PartyPopper,
  Briefcase,
  Church,
  Trophy,
  Tent,
  Palette,
  Compass,
  GraduationCap,
  Handshake,
  type LucideIcon,
} from "lucide-react";

// ─── Navigation ─────────────────────────────────────────────
export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Events", href: "/events" },
  { label: "Membership", href: "/membership" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

// ─── Hero Section ───────────────────────────────────────────
export const HERO_SLIDES = [
  {
    id: 1,
    title: "Luxury Wedding",
    subtitle: "Create unforgettable wedding experiences",
    image:
      "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=2070&auto=format&fit=crop",
  },

  {
    id: 2,
    title: "Corporate Conference",
    subtitle: "Deliver impactful business events",
    image:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Mountain Hiking",
    subtitle: "Lead breathtaking outdoor adventures",
    image:
      "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Football Match",
    subtitle: "Organize thrilling sports tournaments",
    image:
      "https://imgs.search.brave.com/XaEJIcCO7cNtX507ZPdHqVKBb0oxyE-KUT-BUv8Qd94/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucGV4ZWxzLmNv/bS9waG90b3MvMzIx/MDg4NjYvcGV4ZWxz/LXBob3RvLTMyMTA4/ODY2L2ZyZWUtcGhv/dG8tb2YtZXhjaXRp/bmctZm9vdGJhbGwt/bWF0Y2gtYWN0aW9u/LWluLWZyYW5jZS5q/cGVnP2F1dG89Y29t/cHJlc3MmY3M9dGlu/eXNyZ2ImZHByPTEm/dz01MDA",
  },
  {
    id: 5,
    title: "Beach Festival",
    subtitle: "Host epic beach celebrations",
    image:
      "https://imgs.search.brave.com/wBiXlJz-3QeecTQlxUHPvvcsz4xTnDuo1C2kMsRRqto/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/bXVzaWNmZXN0aXZh/bHdpemFyZC5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMTgv/MTEvZHJlYW1maWVs/ZHMyMDE2LWltcHJl/c3Npb24tbG9jYXRp/b240LmpwZw",
  },
  {
    id: 6,
    title: "Music Concert",
    subtitle: "Produce spectacular live performances",
    image:
      "https://imgs.search.brave.com/kVjAgJVxwSGlBHs4Fqih72nvedEEJo6vBB4jZSRLOWo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQ2/NjM0ODg3L3Bob3Rv/L3JvY2stY29uY2Vy/dC5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9NTU3ZmVHYU1v/eG1VcGRnOHdaQ0J2/T3pQcXlMaC01c1ZI/TW9sRlZDeU9PYz0",
  },
  {
    id: 7,
    title: "Swimming Competition",
    subtitle: "Manage competitive aquatic events",
    image:
      "https://imgs.search.brave.com/uiFbve2_leXag_goQmHInXvWNsegnB9yDMFtv4yi8x4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNy8w/Ny8wMi8xMS8yMS9z/d2ltbWluZy0yNDY0/MTMzXzY0MC5qcGc",
  },
  {
    id: 8,
    title: "Family Picnic",
    subtitle: "Plan delightful family gatherings",
    image:
      "https://imgs.search.brave.com/Bv3jB6CHZ6462SXGdUzZk2RP6WGGaflDpt9x16kOOvw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMzkv/NTgzLzgwMi9zbWFs/bC9haS1nZW5lcmF0/ZWQtYWZyaWNhbi1m/YW1pbHktc2hhcmlu/Zy1qb3lmdWwtbW9t/ZW50cy1hdC1vdXRk/b29yLXBpY25pYy1z/bWlsaW5nLWFmcmlj/YW4tZmF0aGVyLXdp/dGgtY2hpbGRyZW4t/d2VhcmluZy10cmFk/aXRpb25hbC1hdHRp/cmUtZW5qb3lpbmct/YS1waWNuaWMtaW4t/YS1sdXNoLXBhcmst/cGhvdG8uanBn",
  },
] as const;

export const HERO_STATS = [
  { label: "Members", value: 50000, suffix: "+" },
  { label: "Events", value: 10000, suffix: "+" },
  { label: "Tickets Sold", value: 100000, suffix: "+" },
  { label: "Satisfaction", value: 95, suffix: "%" },
] as const;

// ─── Trusted By ─────────────────────────────────────────────
export const TRUSTED_LOGOS = [
  "TechCorp",
  "EventPro",
  "MediaHub",
  "SportMax",
  "CultureArts",
  "EduGlobal",
  "HealthFirst",
  "FinanceX",
  "TravelWise",
  "FoodFest",
  "MusicLive",
  "GreenOrg",
] as const;

// ─── Event Categories ───────────────────────────────────────
export interface EventCategory {
  id: string;
  name: string;
  icon: LucideIcon;
  eventCount: number;
  gradient: string;
  image: string;
}

export const EVENT_CATEGORIES: EventCategory[] = [
  {
    id: "weddings",
    name: "Weddings",
    icon: Heart,
    eventCount: 1240,
    gradient: "from-rose-500 to-pink-600",
    image:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "sports",
    name: "Sports",
    icon: Trophy,
    eventCount: 890,
    gradient: "from-blue-500 to-indigo-600",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "hiking",
    name: "Hiking",
    icon: Mountain,
    eventCount: 456,
    gradient: "from-emerald-500 to-teal-600",
    image:
      "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "picnic",
    name: "Picnic",
    icon: Tent,
    eventCount: 320,
    gradient: "from-amber-500 to-orange-600",
    image:
      "https://images.unsplash.com/photo-1506869640319-fea1a278e0dd?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "concerts",
    name: "Music Concerts",
    icon: Music,
    eventCount: 2100,
    gradient: "from-purple-500 to-violet-600",
    image:
      "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "swimming",
    name: "Swimming",
    icon: Waves,
    eventCount: 310,
    gradient: "from-cyan-500 to-blue-600",
    image:
      "https://images.unsplash.com/photo-1519315901367-f34f815049a8?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "beach",
    name: "Beach Events",
    icon: Compass,
    eventCount: 540,
    gradient: "from-yellow-500 to-amber-600",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "conferences",
    name: "Conferences",
    icon: Briefcase,
    eventCount: 1560,
    gradient: "from-slate-500 to-gray-700",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "seminars",
    name: "Seminars",
    icon: GraduationCap,
    eventCount: 780,
    gradient: "from-indigo-500 to-blue-700",
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "networking",
    name: "Networking",
    icon: Handshake,
    eventCount: 650,
    gradient: "from-teal-500 to-emerald-600",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "birthdays",
    name: "Birthday Parties",
    icon: PartyPopper,
    eventCount: 1890,
    gradient: "from-pink-500 to-rose-600",
    image:
      "https://images.unsplash.com/photo-1530103862676-de8892bf309c?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "religious",
    name: "Religious Gatherings",
    icon: Church,
    eventCount: 420,
    gradient: "from-violet-500 to-purple-700",
    image:
      "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "corporate",
    name: "Corporate Events",
    icon: Briefcase,
    eventCount: 980,
    gradient: "from-gray-600 to-slate-800",
    image:
      "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "charity",
    name: "Charity Events",
    icon: Heart,
    eventCount: 340,
    gradient: "from-red-500 to-rose-700",
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "festivals",
    name: "Festivals",
    icon: PartyPopper,
    eventCount: 760,
    gradient: "from-orange-500 to-red-600",
    image:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "cultural",
    name: "Cultural Events",
    icon: Palette,
    eventCount: 510,
    gradient: "from-fuchsia-500 to-pink-700",
    image:
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "outdoor",
    name: "Outdoor Adventures",
    icon: Compass,
    eventCount: 380,
    gradient: "from-green-500 to-emerald-700",
    image:
      "https://images.unsplash.com/photo-1444464666168-49b626f8a15b?q=80&w=800&auto=format&fit=crop",
  },
];

// ─── Featured Events ────────────────────────────────────────
export interface FeaturedEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  price: number;
  currency: string;
  remainingSeats: number;
  totalSeats: number;
  organizer: string;
  category: string;
  isFeatured?: boolean;
  image: string;
}

export const FEATURED_EVENTS: FeaturedEvent[] = [
  {
    id: "1",
    title: "Summer Music Festival 2026",
    date: "Jul 15, 2026",
    time: "4:00 PM",
    location: "Lagos Beach Arena",
    price: 15000,
    currency: "₦",
    remainingSeats: 142,
    totalSeats: 500,
    organizer: "EventPro Lagos",
    category: "Music Concerts",
    isFeatured: true,
    image:
      "https://images.unsplash.com/photo-1533174000273-e18fa4868297?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "2",
    title: "Corporate Leadership Summit",
    date: "Aug 3, 2026",
    time: "9:00 AM",
    location: "Eko Hotel & Suites",
    price: 50000,
    currency: "₦",
    remainingSeats: 48,
    totalSeats: 200,
    organizer: "BizConnect Africa",
    category: "Conferences",
    image:
      "https://images.unsplash.com/photo-1515169067868-5387ec356754?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "3",
    title: "Mountain Trail Adventure",
    date: "Jul 22, 2026",
    time: "6:00 AM",
    location: "Obudu Mountain Resort",
    price: 25000,
    currency: "₦",
    remainingSeats: 18,
    totalSeats: 30,
    organizer: "Trail Blazers NG",
    category: "Hiking",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "4",
    title: "Grand Wedding Expo 2026",
    date: "Sep 5, 2026",
    time: "10:00 AM",
    location: "Oriental Hotel Lagos",
    price: 5000,
    currency: "₦",
    remainingSeats: 280,
    totalSeats: 1000,
    organizer: "WedPlan Nigeria",
    category: "Weddings",
    isFeatured: true,
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "5",
    title: "Beach Volleyball Championship",
    date: "Aug 10, 2026",
    time: "8:00 AM",
    location: "Tarkwa Bay Beach",
    price: 3000,
    currency: "₦",
    remainingSeats: 64,
    totalSeats: 100,
    organizer: "SportMax NG",
    category: "Sports",
    image:
      "https://images.unsplash.com/photo-1518605368461-1e1e38ce81ba?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "6",
    title: "Tech Innovation Conference",
    date: "Sep 20, 2026",
    time: "9:00 AM",
    location: "Landmark Centre VI",
    price: 35000,
    currency: "₦",
    remainingSeats: 95,
    totalSeats: 300,
    organizer: "TechHub Africa",
    category: "Conferences",
    isFeatured: true,
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop",
  },
];

// ─── Why Choose Us ──────────────────────────────────────────
export interface WhyChooseItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const WHY_CHOOSE_ITEMS: WhyChooseItem[] = [
  {
    icon: Shield,
    title: "Secure Payments",
    description:
      "End-to-end encrypted payment processing with multiple gateways for safe transactions.",
  },
  {
    icon: Zap,
    title: "Fast Registration",
    description:
      "One-click registration and seamless checkout for attendees in under 30 seconds.",
  },
  {
    icon: QrCode,
    title: "QR Code Check-in",
    description:
      "Instant QR-based check-in system for quick and contactless event entry management.",
  },
  {
    icon: Bell,
    title: "Instant Notifications",
    description:
      "Real-time push notifications, emails, and SMS alerts to keep everyone informed.",
  },
  {
    icon: Users,
    title: "Membership Management",
    description:
      "Comprehensive membership tiers, renewals, and community management tools.",
  },
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description:
      "Live dashboards with attendance, revenue, engagement metrics, and custom reports.",
  },
  {
    icon: CreditCard,
    title: "Multiple Payment Options",
    description:
      "Accept cards, bank transfers, mobile money, and international payment methods.",
  },
  {
    icon: Smartphone,
    title: "Mobile Friendly",
    description:
      "Fully responsive platform with dedicated mobile apps for iOS and Android.",
  },
  {
    icon: Clock,
    title: "Event Reminders",
    description:
      "Automated reminder system with customizable schedules before your events.",
  },
];

// ─── Pricing Plans ──────────────────────────────────────────
export interface PricingPlan {
  name: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
  currency: string;
  features: { text: string; included: boolean }[];
  isPopular?: boolean;
  ctaText: string;
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Free",
    description: "Perfect for individuals and small events",
    monthlyPrice: 0,
    yearlyPrice: 0,
    currency: "₦",
    ctaText: "Get Started",
    features: [
      { text: "Up to 3 events per month", included: true },
      { text: "50 attendees per event", included: true },
      { text: "Basic event page", included: true },
      { text: "Email notifications", included: true },
      { text: "QR code check-in", included: true },
      { text: "Payment collection", included: false },
      { text: "Custom branding", included: false },
      { text: "Analytics dashboard", included: false },
      { text: "Priority support", included: false },
      { text: "API access", included: false },
    ],
  },
  {
    name: "Premium",
    description: "For growing organizations and frequent events",
    monthlyPrice: 9999,
    yearlyPrice: 99990,
    currency: "₦",
    isPopular: true,
    ctaText: "Start Free Trial",
    features: [
      { text: "Unlimited events", included: true },
      { text: "500 attendees per event", included: true },
      { text: "Custom event pages", included: true },
      { text: "Email & SMS notifications", included: true },
      { text: "QR code check-in", included: true },
      { text: "Payment collection", included: true },
      { text: "Custom branding", included: true },
      { text: "Analytics dashboard", included: true },
      { text: "Priority support", included: false },
      { text: "API access", included: false },
    ],
  },
  {
    name: "Enterprise",
    description: "For large organizations with advanced needs",
    monthlyPrice: 49999,
    yearlyPrice: 499990,
    currency: "₦",
    ctaText: "Contact Sales",
    features: [
      { text: "Unlimited events", included: true },
      { text: "Unlimited attendees", included: true },
      { text: "White-label event pages", included: true },
      { text: "All notification channels", included: true },
      { text: "Advanced QR check-in", included: true },
      { text: "Multi-gateway payments", included: true },
      { text: "Full custom branding", included: true },
      { text: "Advanced analytics & reports", included: true },
      { text: "24/7 priority support", included: true },
      { text: "Full API access & webhooks", included: true },
    ],
  },
];

// ─── How It Works ───────────────────────────────────────────
export interface HowItWorksStep {
  step: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
  {
    step: 1,
    title: "Create Event",
    description:
      "Set up your event in minutes with our intuitive event builder. Add details, images, pricing, and custom registration forms.",
    icon: Calendar,
  },
  {
    step: 2,
    title: "Invite Members",
    description:
      "Share your event with targeted audiences via email, SMS, social media, and direct links. Build your event community.",
    icon: Users,
  },
  {
    step: 3,
    title: "Collect Payments",
    description:
      "Securely collect ticket fees, membership dues, and donations through multiple payment gateways.",
    icon: CreditCard,
  },
  {
    step: 4,
    title: "Manage Attendees",
    description:
      "Track registrations, send reminders, manage check-ins with QR codes, and communicate with attendees in real-time.",
    icon: Ticket,
  },
  {
    step: 5,
    title: "Host Successful Event",
    description:
      "Deliver an amazing experience with real-time analytics, live check-in monitoring, and post-event reporting.",
    icon: LayoutDashboard,
  },
];

// ─── Statistics ─────────────────────────────────────────────
export const STATISTICS = [
  { value: 100000, suffix: "+", label: "Attendees" },
  { value: 15000, suffix: "+", label: "Events" },
  { value: 500, suffix: "+", label: "Organizations" },
  { value: 98, suffix: "%", label: "Success Rate" },
] as const;

// ─── Testimonials ───────────────────────────────────────────
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Adaeze Okwu",
    role: "Event Director",
    company: "WedPlan Nigeria",
    content:
      "Eventit transformed how we manage our wedding events. The QR check-in alone saved us hours of work. Our clients love the seamless registration experience.",
    rating: 5,
  },
  {
    id: "2",
    name: "Chidi Eze",
    role: "Sports Coordinator",
    company: "SportMax NG",
    content:
      "Managing tournaments has never been easier. From registration to real-time attendance tracking, Eventit handles everything. Absolute game changer!",
    rating: 5,
  },
  {
    id: "3",
    name: "Fatima Hassan",
    role: "Community Manager",
    company: "TechHub Africa",
    content:
      "We host over 50 tech meetups a year. Eventit's analytics and membership tools help us understand our community and grow engagement consistently.",
    rating: 5,
  },
  {
    id: "4",
    name: "Oluwaseun Adeyemi",
    role: "CEO",
    company: "EventPro Lagos",
    content:
      "The payment collection feature is flawless. We've processed over ₦50M in ticket sales without a single issue. The platform is rock solid.",
    rating: 5,
  },
  {
    id: "5",
    name: "Grace Mwangi",
    role: "Operations Lead",
    company: "CultureArts Foundation",
    content:
      "From cultural festivals to art exhibitions, Eventit adapts to any event type. The customization options are incredible and the support team is outstanding.",
    rating: 4,
  },
];

// ─── FAQ ────────────────────────────────────────────────────
export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "How do I create my first event?",
    answer:
      "Simply sign up for a free account, click 'Create Event', and follow our intuitive step-by-step event builder. You can add event details, set pricing, customize registration forms, and publish your event in under 5 minutes.",
  },
  {
    question: "What payment methods are supported?",
    answer:
      "Eventit supports multiple payment gateways including bank cards (Visa, Mastercard), bank transfers, mobile money, USSD, and international payment methods. We integrate with leading payment providers for secure transactions.",
  },
  {
    question: "Is there a limit on the number of attendees?",
    answer:
      "Our Free plan supports up to 50 attendees per event. Premium plans support up to 500, and Enterprise plans offer unlimited attendees. You can upgrade your plan at any time as your events grow.",
  },
  {
    question: "How does the QR code check-in work?",
    answer:
      "Each registered attendee receives a unique QR code via email. At your event, use our mobile app or any device with a camera to scan QR codes for instant check-in. The system updates attendance in real-time.",
  },
  {
    question: "Can I customize my event page?",
    answer:
      "Yes! Premium and Enterprise plans offer full customization including custom colors, logos, branded URLs, and custom registration fields. You can make your event page match your brand identity perfectly.",
  },
  {
    question: "Do you offer refund management?",
    answer:
      "Yes, Eventit includes built-in refund management. You can set refund policies, process full or partial refunds, and automate refund windows. All refund activities are tracked in your dashboard.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Absolutely. We use bank-level encryption (SSL/TLS), comply with data protection regulations, and never share your data with third parties. Your event data and attendee information are fully protected.",
  },
  {
    question: "Can I export attendee data?",
    answer:
      "Yes, you can export your attendee lists, payment records, and event analytics in CSV, Excel, or PDF formats. Enterprise users also get access to our API for custom data integrations.",
  },
];

// ─── Footer ─────────────────────────────────────────────────
export const FOOTER_LINKS = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Blog", href: "/blog" },
    { label: "Press", href: "/press" },
  ],
  resources: [
    { label: "Help Center", href: "/help" },
    { label: "Guides", href: "/guides" },
    { label: "API Docs", href: "/api-docs" },
    { label: "Community", href: "/community" },
  ],
  support: [
    { label: "Contact Us", href: "/contact" },
    { label: "Live Chat", href: "/chat" },
    { label: "System Status", href: "/status" },
    { label: "Report Issue", href: "/report" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
    { label: "GDPR", href: "/gdpr" },
  ],
} as const;

export const SOCIAL_LINKS = [
  { label: "Twitter", href: "https://twitter.com/eventit" },
  { label: "Facebook", href: "https://facebook.com/eventit" },
  { label: "Instagram", href: "https://instagram.com/eventit" },
  { label: "LinkedIn", href: "https://linkedin.com/company/eventit" },
  { label: "YouTube", href: "https://youtube.com/eventit" },
] as const;

// ─── Platform Features ──────────────────────────────────────
export interface PlatformFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const PLATFORM_FEATURES: PlatformFeature[] = [
  {
    icon: Calendar,
    title: "Event Creation",
    description: "Build beautiful event pages with our drag-and-drop builder.",
  },
  {
    icon: CreditCard,
    title: "Payment Collection",
    description: "Collect fees securely through multiple payment gateways.",
  },
  {
    icon: Users,
    title: "Member Management",
    description: "Manage memberships, tiers, and community engagement.",
  },
  {
    icon: Ticket,
    title: "Attendance Tracking",
    description: "Real-time attendance monitoring with live dashboards.",
  },
  {
    icon: QrCode,
    title: "Digital Tickets",
    description: "Generate and distribute digital tickets with QR codes.",
  },
  {
    icon: Smartphone,
    title: "QR Scanning",
    description: "Fast contactless check-in with our mobile scanner.",
  },
  {
    icon: BarChart3,
    title: "Reports",
    description: "Comprehensive post-event reports and analytics.",
  },
  {
    icon: Bell,
    title: "Notifications",
    description: "Automated email, SMS, and push notification system.",
  },
  {
    icon: Globe,
    title: "Analytics",
    description: "Deep insights into attendee behavior and event performance.",
  },
];
