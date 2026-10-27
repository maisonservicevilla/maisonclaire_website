import { site } from '@/content/site';
import { meta } from '@/lib/meta';
import { Header } from '@/components/Chrome';
import { Crumbs } from '@/components/Bits';
import { TitleBlock } from '@/components/Sections';

export const metadata = meta('/terms/', 'Booking Terms | Maison Claire Service Villa', 'Booking terms for direct stays at Maison Claire Service Villa, Meppadi, Wayanad.', { noindex: true });

export default function Page() {
  return (
    <>
      <Header />
      <main id="main">
        <TitleBlock crumbs={<Crumbs items={[['/terms/', 'Booking terms']]} />} title="Booking terms" intro={<p>Last updated 27 October 2026.</p>} />
        <section className="wrap" style={{ paddingBottom: 'var(--space)' }}>
          <div className="prose">
            <h2>Prices and payment</h2>
            <p>The price shown in the booking window is for the whole villa for the dates and number of guests you choose. Payment, deposit and cancellation terms are shown in the booking window before you confirm, and they form part of your booking.</p>
            <h2>Guests</h2>
            <p>The villa sleeps up to {site.maxGuests} guests (two per bedroom plus one extra in each room) unless we agree otherwise in writing. Every guest must show a valid photo ID, and the main guest must be 18 or older.</p>
            <h2>Check-out</h2>
            <p>Check-out is by {site.checkOut}.{site.checkIn ? ` Check-in is from ${site.checkIn}.` : ''}</p>
            <h2>House rules</h2>
            <p>Our <a href="/house-rules/">house rules</a> apply to every stay.</p>
            <h2>Bookings made on other websites</h2>
            <p>If you booked through Airbnb, Booking.com, MakeMyTrip or another platform, that platform's terms and cancellation policy apply to your booking.</p>
            <p className="small">Maison Claire Service Villa, {site.locality}, {site.district}, {site.state}. Registration no. {site.registrationNo}.</p>
          </div>
        </section>
      </main>
    </>
  );
}
