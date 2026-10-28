import { site } from '@/content/site';
import { meta } from '@/lib/meta';
import { Header } from '@/components/Chrome';
import { BookButton } from '@/components/Book';
import { Crumbs } from '@/components/Bits';
import { Img } from '@/components/Img';
import { BookingBand, TitleBlock } from '@/components/Sections';

export const metadata = meta('/contact/', 'Contact Maison Claire Villa | Villa Booking Enquiry, Wayanad',
  'Get in touch with Maison Claire Service Villa in Meppadi, Wayanad: call, email or check live dates in the booking window. Address and Google Maps directions.');

export default function Page() {
  return (
    <>
      <Header />
      <main id="main">
        <TitleBlock crumbs={<Crumbs items={[['/contact/', 'Contact']]} />} title={<>Contact Maison Claire <em>about your stay</em></>}
          intro={<p>Call or email us with any question, or check live dates in the booking window. We are in Kappamkolly, Meppadi.</p>} />
        <section className="wrap" style={{ paddingBottom: 'var(--space)' }}>
          <div className="g12" style={{ alignItems: 'start' }}>
            <div className="c-1-7">
              <div className="ledger clist">
                {site.phone && <div><a className="crow" href={`tel:${site.phone}`}><span className="cap cap--muted">Call</span><span className="crow__v">{site.phoneDisplay}</span></a></div>}
                {site.whatsapp && <div><a className="crow" href={`https://wa.me/${site.whatsapp.replace(/\D/g, '')}`}><span className="cap cap--muted">WhatsApp</span><span className="crow__v">Message us</span></a></div>}
                {site.email && <div><a className="crow" href={`mailto:${site.email}`}><span className="cap cap--muted">Email</span><span className="crow__v">{site.email}</span></a></div>}
                <div><a className="crow" href={site.instagram} target="_blank" rel="noopener"><span className="cap cap--muted">Instagram</span><span className="crow__v">@maison.claire_<span className="sr-only"> (opens in a new tab)</span></span></a></div>
                <div><div className="crow"><span className="cap cap--muted">Dates and booking</span><BookButton className="btn btn--dark">Check dates</BookButton></div></div>
              </div>
              <p className="small" style={{ marginTop: 24 }}>Booked through Airbnb, Booking.com or another site? Message us through that site so your booking details stay in one place.</p>
            </div>
            <div className="c-9-4 stack">
              <div className="ph ratio-43"><Img name="exterior-day" alt="Maison Claire villa and its lawn in daylight" sizes="(min-width: 900px) 30vw, 100vw" /></div>
              <div className="note stack-s">
                <p className="cap cap--pool">Address</p>
                <p className="d4">{site.fullAddress ? <>{site.fullAddress}, </> : null}{site.locality}, {site.district}, {site.state} {site.postalCode}</p>
                {site.mapUrl && <a className="btn btn--line" href={site.mapUrl} target="_blank" rel="noopener" style={{ width: '100%' }}>Directions on Google Maps</a>}
              </div>
            </div>
          </div>
        </section>
        <BookingBand />
      </main>
    </>
  );
}
