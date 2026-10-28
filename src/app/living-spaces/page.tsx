import { meta } from '@/lib/meta';
import { Header } from '@/components/Chrome';
import { Img } from '@/components/Img';
import { Crumbs, NextChapter } from '@/components/Bits';
import { BookingBand, TitleBlock } from '@/components/Sections';

export const metadata = meta('/living-spaces/', 'Villa with Multiple Living Rooms in Wayanad | Maison Claire',
  'Three separate lounges, balconies and a terrace with mountain views. Space for a big family or group to be together, or apart, at Maison Claire in Meppadi, Wayanad.', { image: 'living-warm' });

export default function Page() {
  return (
    <>
      <Header />
      <main id="main">
        <TitleBlock
          crumbs={<Crumbs items={[['/the-villa/', 'The villa'], ['/living-spaces/', 'Living spaces']]} />}
          title={<>Three living rooms, so the group can be <em>together, or not</em></>}
          intro={<p>Big groups need more than one room to sit in. Maison Claire has three separate lounges, one with a TV, plus balconies and a terrace that face the hills.</p>}
        />
        <section className="wrap" style={{ paddingBottom: 'var(--space)' }}>
          <div className="cards cards--3">
            <figure><div className="ph ratio-34 r43m"><Img name="living-teal" alt="Lounge with a teal sectional sofa and windows onto the hills" priority sizes="(min-width: 1000px) 31vw, (min-width: 640px) 45vw, 100vw" /></div><figcaption><span className="cap cap--muted">The bright lounge</span><p>A teal sofa and tall windows onto the hills.</p></figcaption></figure>
            <figure><div className="ph ratio-34 r43m"><Img name="living-tv" alt="TV lounge with grey sofas and a round coffee table" sizes="(min-width: 1000px) 31vw, (min-width: 640px) 45vw, 100vw" /></div><figcaption><span className="cap cap--muted">The TV lounge</span><p>Grey sofas around a round coffee table, and the TV.</p></figcaption></figure>
            <figure><div className="ph ratio-34 r43m"><Img name="living-chesterfield" alt="Sitting room with two beige sofas and a round rug" sizes="(min-width: 1000px) 31vw, (min-width: 640px) 45vw, 100vw" /></div><figcaption><span className="cap cap--muted">The sitting room</span><p>Two beige sofas on a round rug, for quieter evenings.</p></figcaption></figure>
          </div>
        </section>
        <section className="section band-mist">
          <div className="wrap g12" style={{ alignItems: 'center' }}>
            <div className="c-1-6"><div className="ph ratio-43"><Img name="terrace-view" alt="Terrace with a potted plant looking out over trees to the mountains" sizes="(min-width: 900px) 48vw, 100vw" /></div></div>
            <div className="c-8-5 stack">
              <p className="cap cap--pool">Outside</p>
              <h2 className="d2">Balconies and <em>a mountain-view terrace</em></h2>
              <p className="lead">Every bedroom opens onto a balcony, and the terrace looks across the treetops to the peaks. Mornings here are slow for a reason.</p>
            </div>
          </div>
        </section>
        <BookingBand />
        <NextChapter href="/gallery/" title="Gallery" img="dining-staircase" />
      </main>
    </>
  );
}
