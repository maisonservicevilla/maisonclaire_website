import { SITE_URL } from '@/content/site';
import { articleSchema } from '@/lib/meta';
import { Header } from './Chrome';
import { Img } from './Img';
import { Crumbs, JsonLd, NextChapter } from './Bits';
import { BookingBand, TitleBlock } from './Sections';

export const UPDATED = '2026-10-27';
export const UPDATED_TEXT = '27 October 2026';

/** Shared layout for travel guides: photo, readable column of text, sources, booking. */
export function Guide(p: {
  path: string; crumbs: [string, string][]; title: React.ReactNode; headline: string; description: string; intro: React.ReactNode;
  img: string; imgAlt: string; imgCaption?: React.ReactNode; children: React.ReactNode; sources?: [string, string][]; aside?: React.ReactNode;
  next: { href: string; title: string; img: string }; about?: object;
}) {
  return (
    <>
      <Header current={p.path} />
      <main id="main">
        <TitleBlock crumbs={<Crumbs items={p.crumbs} />} title={p.title} intro={p.intro} aside={<p className="updated">Updated {UPDATED_TEXT}</p>} />
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
            {p.aside && <aside className="c-9-4 guide__aside" style={{ alignSelf: 'start', position: 'sticky', top: 110 }}>{p.aside}</aside>}
          </div>
        </section>
        <BookingBand title="Stay close by" text="Maison Claire is a private four-bedroom pool villa in Meppadi. Check your dates." />
        <NextChapter href={p.next.href} title={p.next.title} img={p.next.img} />
      </main>
      <JsonLd data={articleSchema(p.path, p.headline, p.description, p.img, UPDATED, p.about)} />
    </>
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
