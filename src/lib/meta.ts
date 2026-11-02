import type { Metadata } from 'next';
import { SITE_URL, site } from '@/content/site';

/** Photos that have a 1200px JPEG copy (scripts/share-images.mjs). */
export const SHARE = ['pool-infinity-mountain', 'pool-dusk', 'villa-night-pool', 'exterior-day', 'exterior-pool', 'bedroom-mountain-view', 'bedroom-balcony', 'living-teal', 'kitchen', 'dining-staircase', 'bathroom-green', 'balcony-view', 'bedroom-view-warm', 'kitchen-evening', 'living-chesterfield', 'living-warm', 'pool-view-portrait', 'terrace-view', 'place-chembra', 'place-kandi', 'place-kanthanpara', 'place-soochipara', 'place-lakkidi', 'place-edakkal', 'place-karapuzha'] as const;
export const jpg = (n: string) => `${SITE_URL}/img/${n}-1200.jpg`;

export function meta(path: string, title: string, description: string, opts: { image?: string; noindex?: boolean; type?: 'website' | 'article' } = {}): Metadata {
  const url = SITE_URL + path;
  // JPEG sharing image: works in WhatsApp, Facebook, LinkedIn previews. Pages with their own photo use its 1200px JPEG.
  const own = opts.image && (SHARE as readonly string[]).includes(opts.image);
  const image = own ? `/img/${opts.image}-1200.jpg` : '/og.jpg';
  const dims = own ? {} : { width: 1200, height: 630 };
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    robots: opts.noindex ? { index: false, follow: true } : { index: true, follow: true, 'max-image-preview': 'large' },
    openGraph: { type: opts.type || 'website', url, title, description, siteName: site.name, locale: 'en_IN', images: [{ url: image, ...dims, alt: site.canonicalName }] },
    twitter: { card: 'summary_large_image', title, description, images: [image] },
  };
}

export function lodgingSchema() {
  const s = site;
  // Google vacation-rental amenity names
  const amenities = ['pool', 'kitchen', 'microwave', 'washerDryer', 'balcony', 'tv', 'selfCheckinCheckout'];
  if (s.ac) amenities.push('ac');
  if (s.wifi) amenities.push('wifi');
  if (s.parking) amenities.push('freeParking');
  return {
    '@context': 'https://schema.org',
    '@type': 'VacationRental',
    '@id': SITE_URL + '/#villa',
    name: s.name,
    alternateName: [s.shortName, 'Maison Claire Villa Wayanad', 'Maison Claire Service Villa Wayanad'],
    url: SITE_URL + '/',
    description: `A private four-bedroom villa with an infinity-edge pool in ${s.locality}, ${s.district}, ${s.state}. Booked whole, for one group at a time. Sleeps ${s.sleeps}, up to ${s.maxGuests} with an extra guest per room.`,
    image: ['pool-infinity-mountain', 'pool-dusk', 'villa-night-pool', 'exterior-day', 'exterior-pool', 'bedroom-mountain-view', 'bedroom-balcony', 'living-teal', 'kitchen', 'dining-staircase', 'bathroom-green'].map(jpg),
    logo: SITE_URL + '/brand/logo-dark.svg',
    address: { '@type': 'PostalAddress', ...(s.fullAddress ? { streetAddress: s.fullAddress } : {}), ...(s.postalCode ? { postalCode: s.postalCode } : {}), addressLocality: s.locality, addressRegion: s.state, addressCountry: s.country },
    ...(s.geo ? { latitude: s.geo.lat, longitude: s.geo.lng, geo: { '@type': 'GeoCoordinates', latitude: s.geo.lat, longitude: s.geo.lng } } : {}),
    ...(s.phone ? { telephone: s.phone } : {}),
    ...(s.mapUrl ? { hasMap: s.mapUrl } : {}),
    ...(s.email ? { email: s.email } : {}),
    ...(s.checkIn24 ? { checkinTime: s.checkIn24 } : {}),
    checkoutTime: s.checkOut24,
    numberOfRooms: s.bedrooms,
    ...(s.pets ? { petsAllowed: s.petsAllowed } : {}),
    containsPlace: { '@type': 'Accommodation', additionalType: 'EntirePlace', numberOfBedrooms: s.bedrooms, numberOfBathroomsTotal: s.bathrooms, occupancy: { '@type': 'QuantitativeValue', value: s.maxGuests }, bed: { '@type': 'BedDetails', numberOfBeds: s.bedrooms, typeOfBed: 'King' } },
    amenityFeature: amenities.map((name) => ({ '@type': 'LocationFeatureSpecification', name, value: true })),
    identifier: { '@type': 'PropertyValue', name: 'Property registration number', value: s.registrationNo },
    sameAs: [...Object.values(s.listings), s.instagram, ...(s.mapUrl ? [s.mapUrl] : [])],
    potentialAction: { '@type': 'ReserveAction', target: SITE_URL + '/rates-booking/' },
  };
}

export function articleSchema(path: string, headline: string, description: string, image: string, dateModified: string, about?: object) {
  return {
    '@context': 'https://schema.org', '@type': 'Article', headline, description,
    image: (SHARE as readonly string[]).includes(image) ? jpg(image) : SITE_URL + '/og.jpg', dateModified, datePublished: dateModified,
    mainEntityOfPage: SITE_URL + path,
    author: { '@type': 'Organization', name: site.name, url: SITE_URL + '/' },
    publisher: { '@type': 'Organization', name: site.name, logo: { '@type': 'ImageObject', url: SITE_URL + '/icon-512.png' } },
    ...(about ? { about } : {}),
  };
}
