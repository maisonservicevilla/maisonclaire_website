import { site } from '@/content/site';
import { meta } from '@/lib/meta';
import { Header } from '@/components/Chrome';
import { BookButton } from '@/components/Book';
import { Crumbs } from '@/components/Bits';
import { BookingBand, TitleBlock } from '@/components/Sections';

export const metadata = meta('/contact/', 'Contact Maison Claire Villa | Villa Booking Enquiry, Wayanad',
  'Get in touch with Maison Claire Service Villa in Meppadi, Wayanad: check dates and ask questions through the booking window, or find us on Instagram.');

export default function Page() {
  return (
    <>
      <Header />
      <main id="main">
        <TitleBlock crumbs={<Crumbs items={[['/contact/', 'Contact']]} />} title={<>Contact Maison Claire <em>about your stay</em></>}
          intro={<p>The quickest way to reach us is the booking window: pick your dates and send your question with them.</p>} />
        <section className="wrap" style={{ paddingBottom: 'var(--space)' }}>
          <dl className="ledger" style={{ maxWidth: 900 }}>
            <div><dt className="cap cap--muted">Dates and booking</dt><dd style={{ margin: 0 }}><BookButton className="btn btn--dark">Open the booking window</BookButton></dd></div>
            {site.whatsapp && <div><dt className="cap cap--muted">WhatsApp</dt><dd style={{ margin: 0 }}><a href={`https://wa.me/${site.whatsapp.replace(/\D/g, '')}`}>Message us</a></dd></div>}
            {site.phone && <div><dt className="cap cap--muted">Phone</dt><dd style={{ margin: 0 }}><a href={`tel:${site.phone}`}>{site.phone}</a></dd></div>}
            {site.email && <div><dt className="cap cap--muted">Email</dt><dd style={{ margin: 0 }}><a href={`mailto:${site.email}`}>{site.email}</a></dd></div>}
            <div><dt className="cap cap--muted">Instagram</dt><dd style={{ margin: 0 }}><a href={site.instagram} target="_blank" rel="noopener">@maison.claire_</a></dd></div>
            <div><dt className="cap cap--muted">Where</dt><dd style={{ margin: 0, textAlign: 'right' }}>{site.fullAddress ? site.fullAddress + ', ' : ''}{site.locality}, {site.district}, {site.state}</dd></div>
          </dl>
          <p className="small" style={{ marginTop: 24 }}>Booked through Airbnb, Booking.com or another site? Message us through that site so your booking details stay in one place.</p>
        </section>
        <BookingBand />
      </main>
    </>
  );
}
