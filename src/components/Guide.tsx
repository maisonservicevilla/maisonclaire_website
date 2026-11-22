import { SITE_URL } from '@/content/site';
import { articleSchema } from '@/lib/meta';
import { Header } from './Chrome';
import { Img } from './Img';
import { Crumbs, Faq, JsonLd, NextChapter, type QA } from './Bits';
import { BookButton, ContactLinks } from './Book';
import { BookingBand, TitleBlock } from './Sections';

export const UPDATED = '2026-10-27';
export const UPDATED_TEXT = '27 October 2026';

/** Shared layout for travel guides: photo, readable column of text, sources, booking. */
export function Guide(p: {
  path: string; crumbs: [string, string][]; title: React.ReactNode; headline: string; description: string; intro: React.ReactNode;
  img: string; imgAlt: string; imgCaption?: React.ReactNode; children: React.ReactNode; sources?: [string, string][]; aside?: React.ReactNode;
  next: { href: string; title: string; img: string }; about?: object;
  /** Questions answered at the end of the guide (also marked up as FAQPage). */
  faqs?: QA[];
  /** Related guides and pages, shown as "Plan the rest of your trip". */
  related?: [string, string][];
  /** One line for the villa card in the side column, e.g. "8 km from the Chembra trek office". */
  stay?: string;
  /** Override the last-checked date: [ISO date, display text]. */
  updated?: [string, string];
}) {
  const [upIso, upText] = p.updated || [UPDATED, UPDATED_TEXT];
  return (
    <>
      <Header current={p.path} />
      <main id="main">
        <TitleBlock crumbs={<Crumbs items={p.crumbs} />} title={p.title} intro={p.intro} aside={<p className="updated">Updated {upText}</p>} />
        <figure className="wrap"><div className="ph ratio-wide"><Img name={p.img} alt={p.imgAlt} priority sizes="(min-width: 1320px) 1272px, 100vw" /></div>{p.imgCaption && <figcaption className="small">{p.imgCaption}</figcaption>}</figure>
        <section className="wrap section--tight">
          <div className="g12">
            <article className="c-1-7 prose" style={{ maxWidth: 'none' }}>{p.children}
              {p.sources && p.sources.length > 0 && (
                <div className="sources">
                  <p className="cap cap--muted">Sources</p>
                  <ul className="small x">{p.sources.map(([t, u]) => <li key={u}><a href={u} rel="noopener" target="_blank">{t}<span className="sr-only"> (opens in a new tab)</span> ↗</a></li>)}</ul>
                </div>
              )}
            </article>
            <aside className="c-9-4 guide__aside" style={{ alignSelf: 'start', position: 'sticky', top: 110 }}>
              {p.aside}
              <StayCard line={p.stay} />
            </aside>
          </div>
        </section>
        {p.faqs && p.faqs.length > 0 && (
          <section className="wrap section--tight" aria-labelledby="guide-faq">
            <div className="g12">
              <div className="c-1-4"><h2 id="guide-faq" className="d2">Quick <em>answers</em></h2></div>
              <div className="c-6-7"><Faq items={p.faqs} /></div>
            </div>
          </section>
        )}
        {p.related && p.related.length > 0 && (
          <nav className="wrap related" aria-labelledby="guide-related">
            <p id="guide-related" className="cap cap--pool">Plan the rest of your trip</p>
            <ul className="x">{p.related.map(([h, t]) => <li key={h}><a href={h}>{t} <span aria-hidden="true">→</span></a></li>)}</ul>
          </nav>
        )}
        <BookingBand title="Stay close by" text="Maison Claire is a private four-bedroom pool villa in Meppadi. Check your dates." />
        <NextChapter href={p.next.href} title={p.next.title} img={p.next.img} />
      </main>
      <JsonLd data={articleSchema(p.path, p.headline, p.description, p.img, upIso, p.about)} />
    </>
  );
}

/** Villa card beside every guide: the shortest route from reading to an enquiry. */
export function StayCard({ line }: { line?: string }) {
  return (
    <div className="stay-card">
      <p className="cap cap--pool">Where to stay</p>
      <p className="stay-card__t">Maison Claire, a private 4-bedroom pool villa in Meppadi</p>
      <p className="small">{line || 'Booked whole, for one group of up to 12.'}</p>
      <BookButton className="btn btn--dark">Check dates</BookButton>
      <ContactLinks compact />
    </div>
  );
}

export function FactBox({ title = 'At a glance', rows }: { title?: string; rows: [string, React.ReactNode][] }) {
  return (
    <div className="note">
      <p className="cap cap--pool" style={{ marginBottom: 8 }}>{title}</p>
      <dl className="ledger" style={{ borderTop: 0, fontSize: 15 }}>
        {rows.map(([k, v]) => <div key={k}><dt style={{ color: 'var(--muted)' }}>{k}</dt><dd style={{ margin: 0, textAlign: 'right' }}>{v}</dd></div>)}
      </dl>
    </div>
  );
}
export const siteUrl = SITE_URL;
