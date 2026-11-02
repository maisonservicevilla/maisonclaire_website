/**
 * ONE place for every fact about the villa.
 *
 * Rule: a fact only appears on the website when it is set here.
 * Fields marked "OWNER TO CONFIRM" are null until the owner confirms them;
 * pages hide anything that is null, so nothing unconfirmed is ever published.
 */

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.maisonclaire.in').replace(/\/$/, '');

export const site = {
  name: 'Maison Claire Service Villa',
  shortName: 'Maison Claire',
  canonicalName: 'Maison Claire Service Villa, Wayanad',
  locality: 'Meppadi',
  district: 'Wayanad',
  state: 'Kerala',
  country: 'IN',
  registrationNo: 'BFIF01-G120408-00099-2025',

  // Booking engine (Innrow). Every booking goes through it.
  innrowId: 'maisonclaire',

  // ---- Confirmed from listings and photos ----
  bedrooms: 4,
  bathrooms: 4,
  bedType: 'king',
  sleeps: 8, // standard: 2 per bedroom
  maxGuests: 12, // confirmed by owner: 2 + 1 extra in each of the 4 rooms
  checkOut: '11 AM',
  checkOut24: '11:00',
  floors: 2,
  lounges: 3,
  diningSeats: 8,
  ac: true, // confirmed by owner: all four bedrooms have AC
  bookingMode: 'request' as 'request' | 'instant', // confirmed by owner: Innrow bookings are requests the owner approves

  // ---- OWNER TO CONFIRM (null = hidden on the site) ----
  checkIn: null as string | null, // Airbnb says 3 PM, MakeMyTrip says 2 PM
  checkIn24: null as string | null,
  extraGuests: 'With one extra guest in each room, it takes up to 12' as string | null,
  pets: 'Pets are not allowed at the villa.' as string | null, // confirmed by owner
  petsAllowed: false,
  events: null as string | null,
  wifi: null as boolean | null,
  parking: null as string | null, // e.g. 'Parking for 3 cars inside the gate'
  powerBackup: null as boolean | null,
  poolSize: null as string | null,
  poolHours: null as string | null,
  fullAddress: 'Kappamkolly' as string | null, // from Google Business Profile
  postalCode: '673577',
  plusCode: 'H47F+F7M',
  mapUrl: 'https://maps.google.com/?cid=16396424023182901487' as string | null, // Google Business Profile
  geo: { lat: 11.5636875, lng: 76.1231875 } as { lat: number; lng: number } | null,
  phone: '+918006001367' as string | null, // Google Business Profile + Instagram
  phoneDisplay: '+91 80060 01367',
  whatsapp: '+918006001367' as string | null, // confirmed by owner: same as phone
  email: 'maisonservicevilla@gmail.com' as string | null, // published on the villa's Instagram

  ratings: {
    asOf: 'October 2026',
    airbnb: { score: 4.61, outOf: 5, count: 23, sub: { Cleanliness: 4.6, Accuracy: 4.7, 'Check-in': 4.7, Communication: 4.7, Location: 4.6, Value: 4.5 } },
    expedia: { score: 9.4, outOf: 10, count: 20 },
    google: { score: 5.0, outOf: 5, count: 22 },
  },

  listings: {
    Airbnb: 'https://www.airbnb.co.in/rooms/1547914327625260362',
    'Booking.com': 'https://www.booking.com/hotel/in/maison-claire-villa-service-wayanad.html',
    MakeMyTrip: 'https://www.makemytrip.com/hotels/maison_claire_service_villa_wayanad-details-wayanad.html',
    Expedia: 'https://www.expedia.com/Vythiri-Hotels-Maison-Claire-Service-Villa-Wayanad-4BR-Stay-Near-Attractions.h126642654.Hotel-Information',
    Agoda: 'https://www.agoda.com/en-in/maison-claire-service-villa-wayanad/hotel/wayanad-in.html',
    Goibibo: 'https://www.goibibo.com/hotels/maison-claire-service-villa-wayanad-hotel-in-wayanad-1030640403706199397/',
  } as Record<string, string>,
  instagram: 'https://www.instagram.com/maison.claire_/',

  // Road distances from the villa, as given in the property listing
  nearby: [
    { name: '900 Kandi glass bridge', km: 9, href: '/900-kandi-glass-bridge/' },
    { name: 'Kanthanpara Falls', km: 10, href: '/kanthanpara-waterfalls/' },
    { name: 'Chembra Peak', km: 12 },
    { name: 'Soochipara Falls', km: 15 },
    { name: 'Lakkidi Viewpoint', km: 20 },
    { name: 'Edakkal Caves', km: 24 },
    { name: 'Karapuzha Dam', km: 24 },
  ] as { name: string; km: number; href?: string }[],
  everyday: [
    { name: 'Restaurants', dist: '200 m' },
    { name: 'Medical college', dist: '3 km' },
    { name: 'EV charging', dist: '6 km' },
  ],
};

export const nav = [
  { href: '/the-villa/', label: 'The Villa' },
  { href: '/private-pool/', label: 'The Pool' },
  { href: '/location/', label: 'Location' },
  { href: '/things-to-do-near-meppadi/', label: 'Things to do' },
  { href: '/faq/', label: 'FAQ' },
];
