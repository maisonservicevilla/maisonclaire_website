import { site } from '@/content/site';
import { meta, lodgingSchema } from '@/lib/meta';
import { Header } from '@/components/Chrome';
import { Img } from '@/components/Img';
import { BookButton } from '@/components/Book';
import { Chapter, Faq, JsonLd, Ratings, Ribbon, type QA } from '@/components/Bits';
import { BookingBand, DayTimeline, RoomExplorer } from '@/components/Sections';
import { InShort } from '@/components/Sections';

export const metadata = meta(
  '/',
  'Private Pool Villa in Wayanad | Maison Claire, Meppadi',
  'Book the whole of Maison Claire: a 4-bedroom villa in Meppadi, Wayanad with a private infinity pool facing the hills, a full kitchen and room for 8. Check live dates.',
);

const faqs: QA[] = [
  { q: 'Do we get the whole villa?', a: <p>Yes. You book the entire house, pool and garden included. No other guests stay while you are here.</p>, text: 'Yes. You book the entire house, pool and garden included. No other guests stay while you are here.' },
  { q: 'How many people can stay?', a: <p>The villa sleeps {site.sleeps} in four king bedrooms, each with its own bathroom.{site.extraGuests ? ` ${site.extraGuests}.` : ' If your group is bigger, ask us before you book.'}</p>, text: `The villa sleeps ${site.sleeps} in four king bedrooms, each with its own bathroom.` },
  { q: 'Where exactly is Maison Claire?', a: <p>In the hills around {site.locality} in south Wayanad, Kerala. The 900 Kandi glass bridge is 9 km away and Kanthanpara Falls is 10 km. <a href="/location/">See the location and directions</a>.</p>, text: `In the hills around ${site.locality} in south Wayanad, Kerala. The 900 Kandi glass bridge is 9 km away and Kanthanpara Falls is 10 km.` },
  { q: 'How do we book?', a: <p>Pick your dates in the booking window on this site. It shows live availability and the price for the whole villa. <a href="/rates-booking/">Rates and booking</a>.</p>, text: 'Pick your dates in the booking window on this website. It shows live availability and the price for the whole villa.' },
];

export default function Home() {
  return (
    <>
      <Header current="/" over />
      <main id="main">
        {/* HERO with Day / Dusk switch (no JavaScript) */}
        <section className="hero" aria-label="Maison Claire">
          <input className="dd-input" type="radio" name="dd" id="dd-day" defaultChecked aria-label="Show the pool in the morning" />
          <input className="dd-input" type="radio" name="dd" id="dd-dusk" aria-label="Show the pool at dusk" />
          <div className="hero__media">
            <Img name="pool-infinity-mountain" alt="Infinity pool at Maison Claire facing the Wayanad hills in morning light" priority sizes="100vw" />
            <div className="dusk-img" style={{ position: 'absolute', inset: 0 }}>
              <Img name="pool-dusk" alt="The same pool at dusk under a pink sky" sizes="100vw" />
            </div>
          </div>
          <div className="wrap hero__body" style={{ paddingTop: 120 }}>
            <p className="cap" style={{ color: 'var(--linen)', marginBottom: 18 }}>Meppadi · Wayanad · Kerala</p>
            <div className="hero__row">
              <h1 className="d1">A private pool villa in Wayanad, <em>facing the hills</em></h1>
              <div className="stack-s" style={{ paddingBottom: 8 }}>
                <span className="cap" style={{ color: 'var(--linen)', display: 'block' }}>See it at</span>
                <div className="dd" role="group" aria-label="Show the pool by day or at dusk">
                  <label htmlFor="dd-day">Day</label>
                  <label htmlFor="dd-dusk">Dusk</label>
                </div>
              </div>
            </div>
            <div className="hero__ctas">
              <BookButton className="btn btn--light">Check dates</BookButton>
              <a href="/the-villa/" className="btn btn--line-light">See the villa</a>
            </div>
            <div className="horizon">
              <span className="cap">{site.bedrooms} king bedrooms</span>
              <span className="cap">Private infinity pool</span>
              <span className="cap">Sleeps {site.sleeps}</span>
              <span className="cap" style={{ color: 'var(--linen)' }}><span className="dd-cap-day">Morning, from the pool deck</span><span className="dd-cap-dusk">Dusk, from the pool deck</span></span>
            </div>
          </div>
        </section>

        {/* 01 THE HOUSE */}
        <section className="section wrap">
          <Chapter n="01" label="The house">
            <h2 className="sr-only">The whole villa, just for your group</h2>
            <p className="d3">
              Maison Claire is a two-storey villa in the hills of Meppadi. You book <em>the whole house</em>: four king bedrooms, three lounges,
              a full kitchen and an infinity pool that looks straight out at the mountains.
            </p>
            <p style={{ marginTop: 32 }}><a className="textlink" href="/the-villa/">Walk through the house →</a></p>
          </Chapter>
          <div className="collage" style={{ marginTop: 'clamp(48px, 8vw, 120px)' }}>
            <figure>
              <div className="ph ratio-34"><Img name="pool-view-portrait" alt="Pool edge with a view across to the mountains" sizes="(min-width: 900px) 40vw, 60vw" /></div>
              <figcaption className="cap cap--muted">The pool deck, early morning</figcaption>
            </figure>
            <figure>
              <div className="ph ratio-43"><Img name="living-teal-light" alt="Bright lounge with a teal sofa and tall windows" sizes="(min-width: 900px) 45vw, 40vw" /></div>
              <figcaption className="cap cap--muted">One of three lounges</figcaption>
            </figure>
          </div>
        </section>

        {/* NUMBERS */}
        <section className="band-dark section--tight" aria-label="The villa in numbers">
          <div className="wrap nums">
            <div><b>{site.bedrooms}</b><span className="cap">King bedrooms</span></div>
            <div><b>{site.bathrooms}</b><span className="cap">Attached bathrooms</span></div>
            <div><b>{site.lounges}</b><span className="cap">Lounges</span></div>
            <div><b>1</b><span className="cap">Private infinity pool</span></div>
            <div><b>{site.sleeps}</b><span className="cap">Guests</span></div>
          </div>
        </section>

        <InShort>
          <p>Maison Claire is an entire villa for rent in Wayanad: a four-bedroom holiday home in Wayanad, in the hills near Meppadi, with a private pool, a fully equipped kitchen and three living rooms. One group books the whole house at a time, which makes it an exclusive holiday villa. It works as a private villa for family stay, a villa for friends and family in Wayanad, or a peaceful villa stay in Wayanad for two. If you are looking for a private villa in Meppadi, Wayanad, or a holiday villa near Meppadi, Wayanad, you can book this 4 bedroom villa directly on this site and see live dates.</p>
        </InShort>

        {/* 02 INSIDE */}
        <section className="section wrap">
          <Chapter n="02" label="Inside">
            <h2 className="d2">Ten spaces, <em>one group</em></h2>
          </Chapter>
          <RoomExplorer />
        </section>

        {/* 03 A DAY HERE */}
        <section className="section band-mist">
          <div className="wrap">
            <Chapter n="03" label="A day here">
              <h2 className="d2">From first light <em>to pool lights</em></h2>
            </Chapter>
            <DayTimeline />
          </div>
        </section>

        {/* 04 AROUND YOU */}
        <section className="section wrap">
          <Chapter n="04" label="Around you">
            <h2 className="d2">Waterfalls and peaks, <em>a short drive away</em></h2>
            <p className="lead" style={{ marginTop: 20, maxWidth: 620 }}>Every place below is within 25 km of the villa by road. Restaurants are within 200 m.</p>
          </Chapter>
          <Ribbon />
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: 12, marginTop: 24, borderTop: '1px solid var(--line)', paddingTop: 14 }}>
            <span className="cap cap--muted">Approximate road distances</span>
            <a className="textlink" href="/things-to-do-near-meppadi/">Things to do near Meppadi</a>
          </div>
        </section>

        {/* RATINGS */}
        <section className="section--tight" style={{ borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
          <div className="wrap" style={{ maxWidth: 1100 }}>
            <Ratings />
            <p style={{ textAlign: 'center', marginTop: 28 }}><a className="textlink" href="/reviews/">Read the reviews</a></p>
          </div>
        </section>

        {/* WHO IT SUITS */}
        <section className="section wrap">
          <Chapter n="05" label="Made for">
            <h2 className="d2">Time together, <em>without sharing walls</em></h2>
          </Chapter>
          <div className="cards cards--3">
            <a className="card" href="/family-holiday-villa-wayanad/">
              <div className="ph ratio-43"><Img name="living-chesterfield" alt="Sitting room with two beige sofas" sizes="(min-width: 1000px) 30vw, (min-width: 640px) 45vw, 100vw" /></div>
              <h3 className="d4">Family holidays</h3>
              <p>Grandparents, parents and children under one roof, with a kitchen for home-cooked meals.</p>
            </a>
            <a className="card" href="/group-stay-villa-wayanad/">
              <div className="ph ratio-43"><Img name="terrace-view" alt="Terrace looking over trees to the hills" sizes="(min-width: 1000px) 30vw, (min-width: 640px) 45vw, 100vw" /></div>
              <h3 className="d4">Trips with friends</h3>
              <p>Four equal king bedrooms, so nobody gets the small room. Long evenings by the pool.</p>
            </a>
            <a className="card" href="/weekend-villa-wayanad/">
              <div className="ph ratio-43"><Img name="bedroom-view-warm" alt="Warm-lit bedroom with balcony doors" sizes="(min-width: 1000px) 30vw, (min-width: 640px) 45vw, 100vw" /></div>
              <h3 className="d4">Weekend getaways</h3>
              <p>Two slow days in the hills, close to waterfalls and viewpoints.</p>
            </a>
          </div>
        </section>

        <BookingBand />

        {/* FAQ */}
        <section className="section wrap">
          <div className="g12">
            <div className="c-1-4"><p className="cap cap--pool" style={{ marginBottom: 16 }}>Good to know</p><h2 className="d2">Quick answers</h2></div>
            <div className="c-6-7">
              <Faq items={faqs} />
              <p style={{ marginTop: 24 }}><a className="textlink" href="/faq/">All questions</a></p>
            </div>
          </div>
        </section>
      </main>
      <JsonLd data={lodgingSchema()} />
    </>
  );
}
