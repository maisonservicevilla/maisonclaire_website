import { site } from '@/content/site';
import { meta } from '@/lib/meta';
import { Header } from '@/components/Chrome';
import { Img } from '@/components/Img';
import { Crumbs, Faq, NextChapter, type QA } from '@/components/Bits';
import { BookingBand, PhotoHero } from '@/components/Sections';
import { InShort } from '@/components/Sections';

export const metadata = meta('/private-pool/', 'Villa with Private Pool in Wayanad | Maison Claire, Meppadi',
  'A private infinity-edge pool facing the Wayanad hills, used only by your group. Lit at night. Book the whole 4-bedroom villa in Meppadi for families and groups.', { image: 'pool-dusk' });

const faqs: QA[] = [
  { q: 'Is the pool private?', a: <p>Yes. Only your group uses it. The villa is booked whole, so there are no other guests on the property.</p>, text: 'Yes. Only your group uses it. The villa is booked whole, so there are no other guests on the property.' },
  { q: 'Is the pool lit at night?', a: <p>Yes, it has underwater lights, so you can swim or sit by the water after dark.</p>, text: 'Yes, it has underwater lights, so you can swim or sit by the water after dark.' },
  { q: 'Is the pool safe for children?', a: <p>Children should be watched by an adult at all times near the water. {site.poolSize ? `The pool is ${site.poolSize}.` : 'Ask us for the depth before you book if you are travelling with small children.'}</p>, text: 'Children should be watched by an adult at all times near the water. Ask for the pool depth before booking if travelling with small children.' },
];

export default function Page() {
  return (
    <>
      <Header current="/private-pool/" over />
      <main id="main">
        <PhotoHero img="pool-dusk" alt="Turquoise infinity pool at dusk with layered hills and a pink sky"
          kicker={<Crumbs items={[['/private-pool/', 'The pool']]} />}
          title={<>A private infinity pool in Wayanad, <em>facing the hills</em></>}
          facts={['Your group only', 'Infinity edge', 'Lit after dark', 'Meppadi, Wayanad']} />

        <section className="section wrap">
          <div className="chapter">
            <p className="cap cap--pool">01 — The water</p>
            <p className="d3">The far edge of the pool drops away, so the water seems to run straight into the hills. Nobody else uses it while you stay. <em>Swim at sunrise, or after dinner under the lights.</em></p>
          </div>
          <div className="g12" style={{ marginTop: 'clamp(40px,6vw,96px)' }}>
            <figure className="c-1-6"><div className="ph ratio-45"><Img name="pool-view-portrait" alt="The pool in clear morning light with mountains beyond" sizes="(min-width: 900px) 48vw, 100vw" /></div><figcaption style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--bark)', paddingTop: 12 }}><span className="cap">Morning</span><span className="cap cap--muted">Clear views to the peaks</span></figcaption></figure>
            <figure className="c-7-6"><div className="ph ratio-45"><Img name="pool-dusk-portrait" alt="The pool lit up at dusk under a pink sky" sizes="(min-width: 900px) 48vw, 100vw" /></div><figcaption style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--bark)', paddingTop: 12 }}><span className="cap">Dusk</span><span className="cap cap--muted">Pool lights on</span></figcaption></figure>
          </div>
        </section>

        <InShort band>
          <p>Maison Claire is a private pool villa in Wayanad. The pool is used only by the group staying in the villa, which makes it a private pool villa for families with children, a private holiday home with pool for your family, and a villa with a swimming pool for groups of friends. Travelling with relatives? It is a private pool villa for family trips of up to twelve. If you want a peaceful villa for a group stay with a private pool, rather than a shared resort pool, this is it.</p>
        </InShort>

        <section className="band-dark section--tight" aria-label="Pool details">
          <div className="wrap">
            <p className="cap" style={{ color: 'var(--linen)', marginBottom: 24 }}>02 — The details</p>
            <dl className="glance" style={{ borderColor: 'var(--line-dark)', ['--n' as string]: site.poolSize ? 4 : 3 }}>
              <div style={{ borderColor: 'var(--line-dark)' }}><dt className="cap" style={{ color: '#c9bfa6' }}>Who uses it</dt><dd>Your group only</dd></div>
              <div style={{ borderColor: 'var(--line-dark)' }}><dt className="cap" style={{ color: '#c9bfa6' }}>Type</dt><dd>Outdoor, infinity edge</dd></div>
              <div style={{ borderColor: 'var(--line-dark)' }}><dt className="cap" style={{ color: '#c9bfa6' }}>After dark</dt><dd>Underwater lights</dd></div>
              {site.poolSize && <div style={{ borderColor: 'var(--line-dark)' }}><dt className="cap" style={{ color: '#c9bfa6' }}>Size</dt><dd>{site.poolSize}</dd></div>}
            </dl>
          </div>
        </section>

        <section className="section wrap">
          <div className="g12" style={{ alignItems: 'end' }}>
            <div className="c-1-5"><div className="ph ratio-34"><Img name="exterior-path" alt="Stone path across the lawn to the pool, with chairs" sizes="(min-width: 900px) 40vw, 100vw" /></div></div>
            <div className="c-7-6 stack">
              <p className="cap cap--pool">03 — Garden &amp; terrace</p>
              <h2 className="d2">A lawn, a stone path, <em>and seats facing the hills</em></h2>
              <p className="lead">Walk out across the lawn to the pool deck, where chairs look out over the valley.</p>
              <div className="ph ratio-32"><Img name="villa-night-pool" alt="The villa and pool lit up at night" sizes="(min-width: 900px) 48vw, 100vw" /></div>
            </div>
          </div>
        </section>

        <section className="section--tight wrap">
          <div className="g12">
            <div className="c-1-4"><h2 className="d2">Pool questions</h2></div>
            <div className="c-6-7"><Faq items={faqs} /></div>
          </div>
        </section>

        <BookingBand title="Have the pool to yourselves" />
        <NextChapter href="/location/" title="Location" img="terrace-view" />
      </main>
    </>
  );
}
