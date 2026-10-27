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
  img: string; imgAlt: string; children: React.ReactNode; sources?: [string, string][]; aside?: React.ReactNode;
  next: { href: string; title: string; img: string }; about?: object;
}) {
  return (
    <>
      <Header current={p.path} />
      <main id="main">
        <TitleBlock crumbs={<Crumbs items={p.crumbs} />} title={p.title} intro={p.intro} aside={<p className="updated">Updated {UPDATED_TEXT}</p>} />
        <div className="wrap"><div className="ph ratio-wide"><Img name={p.img} alt={p.imgAlt} priority sizes="(min-width: 1320px) 1272px, 100vw" /></div></div>
        <section className="wrap section--tight">
          <div className="g12">
            <article className="c-1-7 prose" style={{ maxWidth: 'none' }}>{p.children}
              {p.sources && p.sources.length > 0 && (
                <>
                  <h2 style={{ fontSize: 24 }}>Sources</h2>
                  <ul className="small">{p.sources.map(([t, u]) => <li key={u}><a href={u} rel="noopener" target="_blank">{t}</a></li>)}</ul>
                </>
              )}
            </article>
            <aside className="c-9-4" style={{ alignSelf: 'start', position: 'sticky', top: 24 }}>{p.aside}</aside>
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
