import { Header } from './Chrome';
import { Img } from './Img';
import { Crumbs, Faq, NextChapter, type QA } from './Bits';
import { BookingBand, PhotoHero, InShort } from './Sections';

/** Shared layout for the guest-type pages (family, group, weekend). Each page brings its own copy. */
export function Landing(p: {
  path: string; crumb: string; heroImg: string; heroAlt: string; title: React.ReactNode; facts: string[];
  lead: React.ReactNode; points: { h: string; t: React.ReactNode; img: string; alt: string }[];
  plan?: { title: React.ReactNode; body: React.ReactNode };
  plan2?: React.ReactNode;
  faqs: QA[]; next: { href: string; title: string; img: string };
}) {
  return (
    <>
      <Header over />
      <main id="main">
        <PhotoHero img={p.heroImg} alt={p.heroAlt} kicker={<Crumbs items={[[p.path, p.crumb]]} />} title={p.title} facts={p.facts} />
        <section className="section wrap">
          <div className="chapter"><p className="cap cap--pool">Why it works</p><div className="d3">{p.lead}</div></div>
        </section>
        {p.plan2 && <InShort band>{p.plan2}</InShort>}
        <section className="wrap" style={{ paddingBlock: 'var(--space)' }}>
          <div style={{ display: 'grid', gap: 'clamp(48px,7vw,104px)' }}>
            {p.points.map((pt, i) => (
              <div key={pt.h} className="g12" style={{ alignItems: 'center' }}>
                <div className={i % 2 ? 'c-7-6' : 'c-1-6'} style={{ order: i % 2 ? 2 : 0 }}><div className="ph ratio-32"><Img name={pt.img} alt={pt.alt} sizes="(min-width: 900px) 48vw, 100vw" /></div></div>
                <div className={i % 2 ? 'c-1-5 stack' : 'c-8-5 stack'} style={{ order: 1 }}>
                  <p className="cap cap--muted">{String(i + 1).padStart(2, '0')}</p>
                  <h2 className="d2" style={{ fontSize: 'clamp(32px,3.6vw,52px)' }}>{pt.h}</h2>
                  <div className="lead">{pt.t}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
        {p.plan && (
          <section className="section band-mist">
            <div className="wrap g12">
              <div className="c-1-4"><h2 className="d2">{p.plan.title}</h2></div>
              <div className="c-6-7 prose" style={{ maxWidth: 'none' }}>{p.plan.body}</div>
            </div>
          </section>
        )}
        <section className="section wrap">
          <div className="g12">
            <div className="c-1-4"><h2 className="d2">Questions</h2></div>
            <div className="c-6-7"><Faq items={p.faqs} /></div>
          </div>
        </section>
        <BookingBand />
        <NextChapter href={p.next.href} title={p.next.title} img={p.next.img} />
      </main>
    </>
  );
}
