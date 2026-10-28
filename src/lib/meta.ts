import type { Metadata } from 'next';
import { SITE_URL, site } from '@/content/site';

export function meta(path: string, title: string, description: string, opts: { image?: string; noindex?: boolean; type?: 'website' | 'article' } = {}): Metadata {
  const url = SITE_URL + path;
  const image = '/og.jpg'; // JPEG sharing image: works in WhatsApp, Facebook, LinkedIn previews
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    robots: opts.noindex ? { index: false, follow: true } : { index: true, follow: true, 'max-image-preview': 'large' },
    openGraph: { type: opts.type || 'website', url, title, description, siteName: site.name, locale: 'en_IN', images: [{ url: image, width: 1200, height: 630, alt: site.canonicalName }] },
    twitter: { card: 'summary_large_image', title, description, images: [image] },
  };
}

export function lodgingSchema() {
  const s = site;
  const amenities = ['Private swimming pool', 'Infinity-edge pool', 'Full kitchen', 'Washing machine', 'Balconies', 'Dining area', 'Self check-in'];
  if (s.wifi) amenities.push('Wi-Fi');
  if (s.parking) amenities.push('Parking');
  return {
    '@context': 'https://schema.org',
    '@type': ['LodgingBusiness', 'VacationRental'],
    '@id': SITE_URL + '/#villa',
    name: s.name,
    alternateName: [s.shortName, 'Maison Claire Villa Wayanad', 'Maison Claire Service Villa Wayanad'],
    url: SITE_URL + '/',
    description: `A private four-bedroom villa with an infinity-edge pool in ${s.locality}, ${s.district}, ${s.state}. Booked whole, for one group at a time. Sleeps ${s.sleeps}, up to ${s.maxGuests} with an extra guest per room.`,
    image: [SITE_URL + '/img/pool-infinity-mountain-1200.jpg', SITE_URL + '/img/exterior-day-1200.jpg', SITE_URL + '/img/bedroom-mountain-view-1200.jpg', SITE_URL + '/og.jpg'],
    logo: SITE_URL + '/brand/logo-dark.svg',
    address: { '@type': 'PostalAddress', ...(s.fullAddress ? { streetAddress: s.fullAddress } : {}), addressLocality: s.locality, addressRegion: `${s.district}, ${s.state}`, addressCountry: s.country },
    ...(s.geo ? { geo: { '@type': 'GeoCoordinates', latitude: s.geo.lat, longitude: s.geo.lng } } : {}),
    ...(s.phone ? { telephone: s.phone } : {}),
    ...(s.email ? { email: s.email } : {}),
    ...(s.checkIn24 ? { checkinTime: s.checkIn24 } : {}),
    checkoutTime: s.checkOut24,
    numberOfRooms: s.bedrooms,
    ...(s.pets ? { petsAllowed: s.petsAllowed } : {}),
    containsPlace: { '@type': 'Accommodation', additionalType: 'EntirePlace', numberOfBedrooms: s.bedrooms, numberOfBathroomsTotal: s.bathrooms, occupancy: { '@type': 'QuantitativeValue', maxValue: s.maxGuests }, bed: { '@type': 'BedDetails', numberOfBeds: s.bedrooms, typeOfBed: 'King' } },
    amenityFeature: amenities.map((name) => ({ '@type': 'LocationFeatureSpecification', name, value: true })),
    identifier: { '@type': 'PropertyValue', name: 'Property registration number', value: s.registrationNo },
    sameAs: [...Object.values(s.listings), s.instagram],
    potentialAction: { '@type': 'ReserveAction', target: SITE_URL + '/rates-booking/' },
  };
}

export function articleSchema(path: string, headline: string, description: string, image: string, dateModified: string, about?: object) {
  return {
    '@context': 'https://schema.org', '@type': 'Article', headline, description,
    image: SITE_URL + `/img/${image}-1200.avif`, dateModified, datePublished: dateModified,
    mainEntityOfPage: SITE_URL + path,
    author: { '@type': 'Organization', name: site.name, url: SITE_URL + '/' },
    publisher: { '@type': 'Organization', name: site.name, logo: { '@type': 'ImageObject', url: SITE_URL + '/icon-512.png' } },
    ...(about ? { about } : {}),
  };
}
