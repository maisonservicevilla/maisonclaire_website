import { site } from '@/content/site';
import { meta } from '@/lib/meta';
import { Header } from '@/components/Chrome';
import { Img } from '@/components/Img';
import { BookingMount } from '@/components/Book';
import { Crumbs, Faq, type QA } from '@/components/Bits';
import { InShort } from '@/components/Sections';

export const metadata = meta('/rates-booking/', 'Book a 4 Bedroom Villa in Wayanad | Rates & Live Dates',
  'See live availability and the price for the whole of Maison Claire, a 4-bedroom private pool villa in Meppadi, Wayanad. One price for the villa, sleeps 8.', { image: 'bedroom-warm' });

const faqs: QA[] = [
  { q: 'Is the price for the whole villa?', a: <p>Yes. One nightly price covers the entire house for your group of up to {site.sleeps}. The booking window shows the exact total, with any taxes, before you confirm.</p>, text: `Yes. One nightly price covers the entire house for a group of up to ${site.sleeps}. The booking window shows the exact total before you confirm.` },
  { q: 'Is my booking confirmed straight away?', a: <p>The booking window tells you at each step whether you are sending a request or confirming a stay. You will get a confirmation once it is booked.</p>, text: 'The booking window tells you at each step whether you are sending a request or confirming a stay. You will get a confirmation once it is booked.' },
  { q: 'Can we book on Airbnb or Booking.com instead?', a: <p>Yes, Maison Claire is listed on {Object.keys(site.listings).slice(0, 3).join(', ')} and more. Booking here goes straight to us.</p>, text: 'Yes, Maison Claire is also listed on Airbnb, Booking.com and MakeMyTrip. Booking on this website goes straight to the villa.' },
  { q: 'What time is check-out?', a: <p>By {site.checkOut}.{site.checkIn ? ` Check-in is from ${site.checkIn}.` : ''}</p>, text: `Check-out is by ${site.checkOut}.` },
];

export default function Page() {
  return (
    <>
      <Header current="/rates-booking/" />
      <main id="main">
        <section className="wrap" style={{ paddingTop: 'clamp(24px,5vw,56px)', paddingBottom: 'var(--space)' }}>
          <div className="g12" style={{ alignItems: 'start' }}>
            <div className="c-1-5" style={{ display: 'grid', gap: 20 }}>
              <Crumbs items={[['/rates-booking/', 'Rates & booking']]} />
              <h1 className="d1" style={{ fontSize: 'clamp(42px,6vw,88px)' }}>Book a 4-bedroom villa in Wayanad, <em>see live dates</em></h1>
              <p className="lead">Choose your dates and the number of guests. You will see what is free and the total price for the whole villa before you confirm anything.</p>
              <ol className="ledger" style={{ marginTop: 8 }}>
                <li><span className="cap cap--pool">1</span><span style={{ flex: 1 }}>Pick your dates and group size</span></li>
                <li><span className="cap cap--pool">2</span><span style={{ flex: 1 }}>See the price for the whole villa</span></li>
                <li><span className="cap cap--pool">3</span><span style={{ flex: 1 }}>Confirm, and you are booked</span></li>
              </ol>
              <div className="ph ratio-45" style={{ marginTop: 16 }}><Img name="bedroom-warm" alt="Warm-lit bedroom with a king bed and carved headboard" priority sizes="(min-width: 900px) 38vw, 100vw" /></div>
            </div>
            <div className="c-7-6">
              <h2 className="cap cap--pool" style={{ marginBottom: 16 }}>Live availability</h2>
              <BookingMount mode="inline" title="Booking form with live availability" />
            </div>
          </div>
        </section>

        <InShort>
          <p>Book a 4 bedroom villa in Wayanad directly: Maison Claire is a villa rental for families and groups of up to {site.sleeps}, priced for the whole villa rather than per room.</p>
        </InShort>

        <section className="band-dark section--tight">
          <div className="wrap g12">
            <div className="c-1-5 stack">
              <p className="cap" style={{ color: 'var(--linen)' }}>What you pay for</p>
              <h2 className="d2">One price for <em>the whole villa</em></h2>
            </div>
            <ul className="c-7-6 ticks" style={{ color: 'var(--paper)' }}>
              <li style={{ borderColor: 'var(--line-dark)' }}>All four king bedrooms</li>
              <li style={{ borderColor: 'var(--line-dark)' }}>Four attached bathrooms</li>
              <li style={{ borderColor: 'var(--line-dark)' }}>Private infinity pool</li>
              <li style={{ borderColor: 'var(--line-dark)' }}>Full kitchen and dining for 8</li>
              <li style={{ borderColor: 'var(--line-dark)' }}>Three lounges</li>
              <li style={{ borderColor: 'var(--line-dark)' }}>Garden and balconies</li>
            </ul>
          </div>
        </section>

        <section className="section wrap">
          <div className="g12">
            <div className="c-1-4"><p className="cap cap--pool" style={{ marginBottom: 16 }}>Before you book</p><h2 className="d2">Straight answers</h2></div>
            <div className="c-6-7"><Faq items={faqs} /><p style={{ marginTop: 24 }}><a className="textlink" href="/house-rules/">House rules</a></p></div>
          </div>
        </section>
      </main>
    </>
  );
}
