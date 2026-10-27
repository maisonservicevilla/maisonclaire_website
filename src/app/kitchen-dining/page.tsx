import { meta } from '@/lib/meta';
import { Header } from '@/components/Chrome';
import { Img } from '@/components/Img';
import { Crumbs, NextChapter } from '@/components/Bits';
import { BookingBand, TitleBlock } from '@/components/Sections';
import { InShort } from '@/components/Sections';

export const metadata = meta('/kitchen-dining/', 'Self Catering Villa in Wayanad with Full Kitchen | Maison Claire',
  'Cook your own meals at Maison Claire, a self catering villa in Meppadi, Wayanad: full kitchen with fridge, hob, microwave and washing machine, plus a table for eight.', { image: 'kitchen-evening' });

export default function Page() {
  return (
    <>
      <Header />
      <main id="main">
        <TitleBlock
          crumbs={<Crumbs items={[['/the-villa/', 'The villa'], ['/kitchen-dining/', 'Kitchen & dining']]} />}
          title={<>A self-catering villa: <em>cook what you like</em></>}
          intro={<p>Maison Claire is self-catering. The kitchen is a proper one, not a kettle-and-microwave corner, and the dining table seats eight.</p>}
        />
        <section className="wrap" style={{ paddingBottom: 'var(--space)' }}>
          <div className="g12" style={{ alignItems: 'start' }}>
            <div className="c-1-4 stack" style={{ paddingTop: 8 }}>
              <h2 className="cap cap--pool">In the kitchen</h2>
              <ul className="ticks" style={{ gridTemplateColumns: '1fr' }}>
                <li>Fridge</li>
                <li>Hob with chimney</li>
                <li>Microwave</li>
                <li>Washing machine</li>
                <li>Sink and long counters</li>
                <li>Dining table for eight</li>
              </ul>
              <p className="small">Restaurants are about 200 m away for the nights you would rather not cook.</p>
            </div>
            <div className="c-6-7"><div className="ph ratio-43"><Img name="kitchen-evening" alt="Kitchen in the evening with a black fridge, washing machine and microwave" priority sizes="(min-width: 900px) 55vw, 100vw" /></div></div>
            <div className="c-6-7" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0,1fr))', gap: 16 }}>
              <div className="ph ratio-45"><Img name="dining-staircase" alt="Dining table for eight beside the glass staircase" sizes="(min-width: 900px) 27vw, 50vw" /></div>
              <div className="ph ratio-45"><Img name="kitchen" alt="Kitchen with a window over the sink" sizes="(min-width: 900px) 27vw, 50vw" /></div>
            </div>
          </div>
        </section>
        <InShort>
          <p>Maison Claire is a self-catering villa in Wayanad, a villa with a fully equipped kitchen in Wayanad, and a villa with a dining room with a table for eight. For families it is a self-catering villa for families with small children; for everyone it is a family-friendly holiday villa with self-catering facilities, a villa with a kitchen and a pool, about 200 m from restaurants.</p>
        </InShort>

        <section className="section band-mist">
          <div className="wrap g12">
            <div className="c-1-5"><h2 className="d2">Why groups <em>like cooking here</em></h2></div>
            <div className="c-7-6 body lead">
              <p>Eating out three times a day with eight people gets tiring and expensive. With a kitchen of your own, breakfast happens in pyjamas and dinner happens when everyone is back from the falls.</p>
              <p>Bring groceries from Kalpetta or Meppadi on the way in. Kerala fish curry, a birthday cake, instant noodles at midnight: all of it works here.</p>
            </div>
          </div>
        </section>
        <BookingBand />
        <NextChapter href="/living-spaces/" title="Living spaces" img="living-warm" />
      </main>
    </>
  );
}
