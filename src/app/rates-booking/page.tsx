import { site } from '@/content/site';
import { meta } from '@/lib/meta';
import { Header } from '@/components/Chrome';
import { Img } from '@/components/Img';
import { BookingMount } from '@/components/Book';
import { Crumbs, Faq, type QA } from '@/components/Bits';
import { InShort } from '@/components/Sections';

export const metadata = meta('/rates-booking/', 'Book a 4 Bedroom Villa in Wayanad | Rates & Live Dates',
  'See live availability and the price for the whole of Maison Claire, a 4-bedroom private pool villa in Meppadi, Wayanad. One price for the villa, sleeps up to 12.', { image: 'exterior-day' });

const faqs: QA[] = [
  { q: 'Is the price for the whole villa?', a: <p>Yes. One nightly price covers the entire house for your group of up to {site.maxGuests}. The booking window shows the exact total, with any taxes, before you confirm.</p>, text: `Yes. One nightly price covers the entire house for a group of up to ${site.maxGuests}. The booking window shows the exact total before you confirm.` },
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
          <div className="g12 book">
            <div className="c-1-5 book__intro" style={{ display: 'grid', gap: 20 }}>
              <Crumbs items={[['/rates-booking/', 'Rates & booking']]} />
              <h1 className="d1" style={{ fontSize: 'clamp(42px,4.8vw,72px)' }}>Book a 4{'\u2011'}bedroom villa in Wayanad, <em>see live dates</em></h1>
              <p className="lead">Choose your dates and the number of guests. You will see what is free and the total price for the whole villa before you confirm anything.</p>
            </div>
            <div className="c-7-6 book__form">
              <h2 className="cap cap--pool" style={{ marginBottom: 16 }}>Live availability</h2>
              <BookingMount mode="inline" title="Booking form with live availability" />
            </div>
            <div className="c-1-5 book__more" style={{ display: 'grid', gap: 28 }}>
              <div className="trust">
                <div><b>Rated {site.ratings.google.score.toFixed(1)} on Google</b><span>{site.ratings.google.count} reviews, plus {site.ratings.airbnb.score} on Airbnb and {site.ratings.expedia.score}/10 on Expedia. <a href="/reviews/">Read them</a></span></div>
                {site.phone && <div><b>Questions before you book?</b><span>Call <a href={`tel:${site.phone}`}>{site.phoneDisplay}</a>{site.email ? <> or <a href={`mailto:${site.email}`}>email us</a></> : null}.</span></div>}
                <div><b>No surprises</b><span>The total, with any taxes, and the cancellation terms are shown before you pay.</span></div>
              </div>
              <ol className="ledger steps">
                <li><span className="cap cap--pool">1</span><span style={{ flex: 1 }}>Pick your dates and group size</span></li>
                <li><span className="cap cap--pool">2</span><span style={{ flex: 1 }}>See the price for the whole villa</span></li>
                <li><span className="cap cap--pool">3</span><span style={{ flex: 1 }}>Confirm, and you are booked</span></li>
              </ol>
              <div className="ph ratio-43 book__img"><Img name="exterior-day" alt="The two-storey villa and its lawn in daylight" sizes="(min-width: 900px) 38vw, 1px" /></div>
            </div>
          </div>
        </section>

        <InShort>
          <p>Book a 4 bedroom villa in Wayanad directly: Maison Claire is a villa rental for families and groups of up to {site.maxGuests}, priced for the whole villa rather than per room.</p>
        </InShort>

        <section className="band-dark section--tight">
          <div className="wrap g12">
            <div className="c-1-5 stack">
              <p className="cap" style={{ color: 'var(--linen)' }}>What you pay for</p>
              <h2 className="d2">One price for <em>the whole villa</em></h2>
            </div>
            <ul className="c-7-6 ticks">
              <li>All four king bedrooms</li>
              <li>Four attached bathrooms</li>
              <li>Private infinity pool</li>
              <li>Full kitchen and dining for 8</li>
              <li>Three lounges</li>
              <li>Garden and balconies</li>
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
