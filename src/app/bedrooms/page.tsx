import { site } from '@/content/site';
import { meta } from '@/lib/meta';
import { Header } from '@/components/Chrome';
import { Img } from '@/components/Img';
import { Crumbs, NextChapter } from '@/components/Bits';
import { BookingBand, TitleBlock } from '@/components/Sections';

export const metadata = meta('/bedrooms/', `Villa with ${site.ac ? 'AC' : 'King'} Bedrooms in Wayanad | Maison Claire`,
  `A villa with four ${site.ac ? 'air-conditioned' : 'king'} bedrooms in Meppadi, Wayanad: king beds, own bathrooms, two facing Chembra Peak. Up to 12 guests.`, { image: 'bedroom-mountain-view' });

const looks = [
  { img: 'bedroom-mountain-view', alt: 'Bedroom with a king bed and glass doors to a balcony facing the mountains', h: 'The peak view', t: 'Two of the bedrooms look straight out at Chembra Peak.' },
  { img: 'bedroom-balcony', alt: 'Bedroom with a carved wooden king bed and doors to a balcony', h: 'The carved bed', t: 'A carved wooden king bed and a balcony over the trees.' },
  { img: 'bedroom-grey', alt: 'Bedroom with a grey upholstered king bed and a framed sunset painting', h: 'The grey room', t: 'A grey upholstered king bed, wardrobe and dressing area.' },
  { img: 'bedroom-view-warm', alt: 'Evening light in a bedroom with balcony doors looking out to the hills', h: 'Evenings', t: 'Warm light inside, the hills outside the balcony doors.' },
];
const plan: [string, string, string][] = [
  ['Ground floor', '2 king bedrooms', 'Each with its own bathroom. Easy for grandparents: no stairs.'],
  ['Upstairs', '2 king bedrooms', 'Each with its own bathroom.'],
  ['Chembra Peak view', '2 of the 4 rooms', 'Wake up facing the highest peak in Wayanad.'],
];

export default function Page() {
  return (
    <>
      <Header />
      <main id="main">
        <TitleBlock
          crumbs={<Crumbs items={[['/the-villa/', 'The villa'], ['/bedrooms/', 'Bedrooms']]} />}
          title={<>Four {site.ac ? 'air-conditioned ' : ''}king bedrooms in Wayanad, <em>two facing the peak</em></>}
          intro={<p>Every bedroom at Maison Claire has a king bed and its own bathroom{site.ac ? ', and all four are air-conditioned' : ''}. Two are on the ground floor and two upstairs, and two of them look out at Chembra Peak.</p>}
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
              <p className="lead" style={{ marginTop: 24 }}>{site.sleeps} guests sleep in the four king beds{site.ac ? ', and every room is air-conditioned' : ''}. Each room also takes one extra guest, so the villa sleeps up to {site.maxGuests}. If you need a villa with air-conditioned bedrooms in Wayanad, this is one: an AC villa in Wayanad where all four bedrooms have air conditioning.</p>
            </div>
          </div>
        </section>

        <BookingBand />
        <NextChapter href="/kitchen-dining/" title="Kitchen & dining" img="kitchen-evening" />
      </main>
    </>
  );
}
