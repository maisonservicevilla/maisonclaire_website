import { site } from '@/content/site';
import { meta } from '@/lib/meta';
import { Header } from '@/components/Chrome';
import { Img } from '@/components/Img';
import { Crumbs, NextChapter } from '@/components/Bits';
import { BookingBand, TitleBlock } from '@/components/Sections';

export const metadata = meta('/bedrooms/', `Villa with ${site.ac ? 'Air-Conditioned' : 'King'} Bedrooms in Wayanad | Maison Claire`,
  `Four king bedrooms${site.ac ? ' with AC' : ''}, each with its own bathroom and balcony, three with hill views. A 4 bedroom villa in Meppadi, Wayanad that sleeps 8.`, { image: 'bedroom-mountain-view' });

const looks = [
  { img: 'bedroom-mountain-view', alt: 'Bedroom with a king bed and glass doors to a balcony facing the mountains', h: 'The hill view', t: 'Glass doors open onto a balcony that faces the mountains.' },
  { img: 'bedroom-balcony', alt: 'Bedroom with a carved wooden king bed and doors to a balcony', h: 'The carved bed', t: 'A carved wooden king bed and a balcony over the trees.' },
  { img: 'bedroom-grey', alt: 'Bedroom with a grey upholstered king bed and a framed sunset painting', h: 'The grey room', t: 'A grey upholstered king bed, wardrobe and dressing area.' },
  { img: 'bedroom-view-warm', alt: 'Evening light in a bedroom with balcony doors looking out to the hills', h: 'Evenings', t: 'Warm light inside, the hills outside the balcony doors.' },
];
const plan: [string, string, string][] = [
  ['Bedroom 1', 'Ground floor', 'King bed · own bathroom · hill-view balcony'],
  ['Bedroom 2', 'Upstairs', 'King bed · own bathroom · hill-view balcony'],
  ['Bedroom 3', 'Upstairs', 'King bed · own bathroom · hill-view balcony'],
  ['Bedroom 4', 'Upstairs', 'King bed · own bathroom · balcony'],
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
          <div className="cards cards--4 cards--stagger cards--2m">
            {looks.map((r, i) => (
              <figure key={r.img} className="card">
                <div className="ph ratio-34"><Img name={r.img} alt={r.alt} priority={i < 2} sizes="(min-width: 1000px) 24vw, 50vw" /></div>
                <figcaption><h2 className="d4" style={{ marginTop: 4 }}>{r.h}</h2><p>{r.t}</p></figcaption>
              </figure>
            ))}
          </div>
        </section>


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
            <div className="c-1-4 stick"><p className="cap cap--pool" style={{ marginBottom: 16 }}>Who sleeps where</p><h2 className="d2">Sleeping arrangements</h2></div>
            <div className="c-6-7">
              <ol className="plan">
                {plan.map(([n, w, d]) => (
                  <li key={n}><span className="plan__n">{n}</span><span className="cap cap--muted">{w}</span><span className="plan__d">{d}</span></li>
                ))}
              </ol>
              <p className="lead" style={{ marginTop: 24 }}>{site.sleeps} guests sleep in the four king beds{site.ac ? ', and every room is air-conditioned' : ''}. Each room also takes one extra guest, so the villa sleeps up to {site.maxGuests}. If you want a villa with air-conditioned bedrooms in Wayanad, this is an AC villa in Wayanad: a villa with four air-conditioned bedrooms, all the same size.</p>
            </div>
          </div>
        </section>

        <BookingBand />
        <NextChapter href="/kitchen-dining/" title="Kitchen & dining" img="kitchen-evening" />
      </main>
    </>
  );
}
