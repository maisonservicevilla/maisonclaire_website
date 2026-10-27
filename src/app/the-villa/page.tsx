import { site } from '@/content/site';
import { meta, lodgingSchema } from '@/lib/meta';
import { Header } from '@/components/Chrome';
import { Img } from '@/components/Img';
import { Crumbs, JsonLd, NextChapter } from '@/components/Bits';
import { BookingBand, TitleBlock } from '@/components/Sections';
import { InShort } from '@/components/Sections';

export const metadata = meta('/the-villa/', '4 Bedroom Villa with Private Pool in Meppadi | Maison Claire',
  'A two-storey, four-bedroom holiday home in Meppadi, Wayanad: king beds, attached bathrooms, three lounges, a full kitchen and a private infinity pool. Sleeps up to 12.', { image: 'exterior-day' });

export default function Page() {
  return (
    <>
      <Header current="/the-villa/" />
      <main id="main">
        <TitleBlock
          crumbs={<Crumbs items={[['/the-villa/', 'The villa']]} />}
          title={<>A four-bedroom villa with a private pool, <em>in Meppadi, Wayanad</em></>}
          intro={<p>Two floors. Four king bedrooms, each with its own bathroom and balcony. Three lounges, a full kitchen and the pool. All of it is for your group alone.</p>}
        />
        <div className="wrap"><div className="ph ratio-wide"><Img name="exterior-day" alt="The two-storey white villa with a stone path through the garden" priority sizes="(min-width: 1320px) 1272px, 100vw" /></div></div>

        <section className="wrap section--tight" aria-label="At a glance">
          <dl className="glance">
            <div><dt className="cap cap--muted">Bedrooms</dt><dd>{site.bedrooms}, king beds</dd></div>
            <div><dt className="cap cap--muted">Bathrooms</dt><dd>{site.bathrooms}, attached</dd></div>
            <div><dt className="cap cap--muted">Sleeps</dt><dd>{site.sleeps}–{site.maxGuests} guests</dd></div>
            <div><dt className="cap cap--muted">Pool</dt><dd>Private, infinity edge</dd></div>
            <div><dt className="cap cap--muted">Check-out</dt><dd>{site.checkOut}</dd></div>
          </dl>
        </section>

        <section className="section wrap">
          <div className="g12">
            <div className="c-1-5 stack">
              <p className="cap cap--pool">The idea</p>
              <h2 className="d2">One house, <em>one group</em></h2>
            </div>
            <div className="c-7-6 body lead">
              <p>Maison Claire is a service villa: you rent the whole house rather than a room in it. When you arrive, nobody else is staying. The pool, the lawn, the kitchen and all four bedrooms are yours until check-out.</p>
              <p>That is the difference from a resort. You eat when you like, swim when you like, and the children can be as loud as children are.</p>
            </div>
          </div>
        </section>

        <InShort band>
          <p>A 4 bedroom villa for rent in Meppadi, Wayanad, with a private pool. It is a spacious villa for large families and a four bedroom villa for family and friends: every room has a king bed and its own bathroom, and it is a villa with a dining room that seats eight. It is a holiday home with a kitchen and pool of its own, rented whole.</p>
        </InShort>

        <section className="section--tight wrap">
          <div className="cards cards--4 cards--stagger">
            <a className="card" href="/bedrooms/"><div className="ph ratio-34"><Img name="bedroom-mountain-view" alt="Bedroom with a king bed and a hill-view balcony" sizes="(min-width: 1000px) 24vw, (min-width: 640px) 45vw, 100vw" /></div><h3 className="d4">Bedrooms</h3><p>Four equal king rooms, each with a bathroom and a balcony.</p></a>
            <a className="card" href="/private-pool/"><div className="ph ratio-34"><Img name="pool-dusk-portrait" alt="The pool at dusk" sizes="(min-width: 1000px) 24vw, (min-width: 640px) 45vw, 100vw" /></div><h3 className="d4">The pool</h3><p>Private, with an infinity edge facing the hills.</p></a>
            <a className="card" href="/kitchen-dining/"><div className="ph ratio-34"><Img name="kitchen-evening" alt="The kitchen in the evening" sizes="(min-width: 1000px) 24vw, (min-width: 640px) 45vw, 100vw" /></div><h3 className="d4">Kitchen &amp; dining</h3><p>Cook your own meals and eat at a table for eight.</p></a>
            <a className="card" href="/living-spaces/"><div className="ph ratio-34"><Img name="living-warm" alt="Warm-lit lounge with beige sofas" sizes="(min-width: 1000px) 24vw, (min-width: 640px) 45vw, 100vw" /></div><h3 className="d4">Living spaces</h3><p>Three lounges and balconies for when the group splits up.</p></a>
          </div>
        </section>

        <section className="section band-mist">
          <div className="wrap g12">
            <div className="c-1-6 stack">
              <p className="cap cap--pool">Included in every stay</p>
              <ul className="ticks">
                <li>The entire villa</li>
                <li>Private infinity pool</li>
                <li>Full kitchen</li>
                <li>Washing machine</li>
                {site.ac && <li>Air-conditioned bedrooms</li>}
                <li>Balconies with hill views</li>
                <li>Three lounges and a TV</li>
                <li>Keypad self check-in</li>
                {site.wifi && <li>Wi-Fi</li>}
                {site.parking && <li>{site.parking}</li>}
              </ul>
            </div>
            <div className="c-8-5 stack">
              <p className="cap cap--pool">Good to know</p>
              <p className="body">Check-out is by {site.checkOut}{site.checkIn ? `, check-in from ${site.checkIn}` : ''}. Every guest needs a photo ID, and the main guest must be 18 or over. <a href="/house-rules/">Read the house rules</a>.</p>
              <p className="body">Kerala registration number {site.registrationNo}.</p>
            </div>
          </div>
        </section>

        <BookingBand title="See if your dates are free" />
        <NextChapter href="/private-pool/" title="The Pool" img="pool-dusk-portrait" />
      </main>
      <JsonLd data={lodgingSchema()} />
    </>
  );
}
