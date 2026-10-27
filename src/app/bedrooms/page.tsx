import { site } from '@/content/site';
import { meta } from '@/lib/meta';
import { Header } from '@/components/Chrome';
import { Img } from '@/components/Img';
import { Crumbs, NextChapter } from '@/components/Bits';
import { BookingBand, TitleBlock } from '@/components/Sections';
import { InShort } from '@/components/Sections';

export const metadata = meta('/bedrooms/', `Villa with ${site.ac ? 'Air-Conditioned' : 'King'} Bedrooms in Wayanad | Maison Claire`,
  `Four king bedrooms${site.ac ? ' with AC' : ''}, each with its own bathroom and balcony, three with hill views. A 4 bedroom villa in Meppadi, Wayanad that sleeps 8.`, { image: 'bedroom-mountain-view' });

const rooms = [
  { n: 'No. 1', img: 'bedroom-mountain-view', alt: 'Bedroom 1 with a king bed and doors to a hill-view balcony', where: 'Ground floor', text: 'King bed, own bathroom and a balcony with a hill view. An extra mattress is available.' },
  { n: 'No. 2', img: 'bedroom-balcony', alt: 'Bedroom 2 with a carved headboard and balcony doors', where: 'Hill view', text: 'King bed, own bathroom and a balcony with a hill view.' },
  { n: 'No. 3', img: 'bedroom-grey', alt: 'Bedroom 3 with a grey headboard and a framed painting', where: 'Hill view', text: 'King bed, own bathroom and a balcony with a hill view.' },
  { n: 'No. 4', img: 'bedroom-garden', alt: 'Bedroom 4, bright, with balcony doors onto palm trees', where: 'Garden side', text: 'King bed, own bathroom and a balcony. An extra mattress is available.' },
];

export default function Page() {
  return (
    <>
      <Header />
      <main id="main">
        <TitleBlock
          crumbs={<Crumbs items={[['/the-villa/', 'The villa'], ['/bedrooms/', 'Bedrooms']]} />}
          title={<>Four {site.ac ? 'air-conditioned ' : ''}king bedrooms, <em>no small one</em></>}
          intro={<p>Every bedroom at Maison Claire has a king bed, its own bathroom and a balcony{site.ac ? ', and they are air-conditioned' : ''}. Three of them look out at the hills. Nobody in your group draws the short straw.</p>}
        />
        <section className="wrap" style={{ paddingBottom: 'var(--space)' }}>
          <div className="cards cards--4 cards--stagger">
            {rooms.map((r, i) => (
              <article key={r.n} className="card">
                <p className="serif" style={{ fontSize: 'clamp(44px,5vw,64px)', lineHeight: 1, color: 'var(--pool)', marginBottom: 12 }}>{r.n}</p>
                <div className="ph ratio-34"><Img name={r.img} alt={r.alt} priority={i === 0} sizes="(min-width: 1000px) 24vw, (min-width: 640px) 45vw, 100vw" /></div>
                <h2 className="cap" style={{ marginTop: 16 }}>{r.where}</h2>
                <p>{r.text}</p>
              </article>
            ))}
          </div>
        </section>

        <InShort>
          <p>{site.ac ? 'Maison Claire is a villa with four air-conditioned bedrooms in Meppadi. If you are searching for an AC villa in Wayanad or a villa with air-conditioned bedrooms in Wayanad, all four rooms here have AC, a king bed and an attached bathroom.' : 'Maison Claire has four king bedrooms, each with an attached bathroom and a balcony.'}</p>
        </InShort>

        <section className="section band-mist">
          <div className="wrap g12" style={{ alignItems: 'center' }}>
            <div className="c-1-5"><div className="ph ratio-34"><Img name="bathroom-green" alt="Bathroom with green stone walls, a basin and a wall-hung toilet" sizes="(min-width: 900px) 40vw, 100vw" /></div></div>
            <div className="c-7-6 stack">
              <p className="cap cap--pool">Bathrooms</p>
              <h2 className="d2">A bathroom <em>for every bedroom</em></h2>
              <p className="lead">No queue in the morning. Each of the four bathrooms is attached to its bedroom and has a walk-in shower.</p>
            </div>
          </div>
        </section>

        <section className="section wrap">
          <div className="g12">
            <div className="c-1-4"><h2 className="d2">Sleeping arrangements</h2></div>
            <div className="c-6-7 prose" style={{ maxWidth: 'none' }}>
              <table>
                <thead><tr><th scope="col">Room</th><th scope="col">Bed</th><th scope="col">Bathroom</th><th scope="col">Balcony</th></tr></thead>
                <tbody>
                  <tr><td>Bedroom 1 (ground floor)</td><td>King</td><td>Attached</td><td>Hill view</td></tr>
                  <tr><td>Bedroom 2</td><td>King</td><td>Attached</td><td>Hill view</td></tr>
                  <tr><td>Bedroom 3</td><td>King</td><td>Attached</td><td>Hill view</td></tr>
                  <tr><td>Bedroom 4</td><td>King</td><td>Attached</td><td>Yes</td></tr>
                </tbody>
              </table>
              <p>Total: {site.sleeps} guests in four king beds.{site.extraGuests ? ` ${site.extraGuests}.` : ' Bringing more people? Ask before you book.'}</p>
            </div>
          </div>
        </section>

        <BookingBand />
        <NextChapter href="/kitchen-dining/" title="Kitchen & dining" img="kitchen-evening" />
      </main>
    </>
  );
}
