import { SITE_URL, site } from '@/content/site';
import { Img } from './Img';

export function JsonLd({ data }: { data: object | object[] }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }} />;
}

export function Crumbs({ items }: { items: [string, string][] }) {
  const all: [string, string][] = [['/', 'Home'], ...items];
  return (
    <>
      <nav aria-label="Breadcrumb">
        <ol className="crumbs cap">
          {all.map(([h, l], i) => (
            <li key={h}>{i === all.length - 1 ? <span aria-current="page">{l}</span> : <a href={h}>{l}</a>}</li>
          ))}
        </ol>
      </nav>
      <JsonLd data={{
        '@context': 'https://schema.org', '@type': 'BreadcrumbList',
        itemListElement: all.map(([h, l], i) => ({ '@type': 'ListItem', position: i + 1, name: l, item: SITE_URL + h })),
      }} />
    </>
  );
}

export function Chapter({ n, label, children }: { n?: string; label: string; children: React.ReactNode }) {
  return (
    <div className="chapter">
      <p className="cap cap--pool">{n ? `${n} — ` : ''}{label}</p>
      <div>{children}</div>
    </div>
  );
}

export function NextChapter({ href, title, img, alt }: { href: string; title: string; img: string; alt?: string }) {
  return (
    <a className="next" href={href}>
      <div className="wrap next__in">
        <div>
          <p className="cap cap--muted" style={{ marginBottom: 10 }}>Next</p>
          <p className="next__t">{title.split(' ').slice(0, -1).join(' ')}{title.includes(' ') ? ' ' : ''}<span className="nowrap">{title.split(' ').slice(-1)[0]}{'\u00a0'}<em aria-hidden="true">→</em></span></p>
        </div>
        <div className="ph ratio-169"><Img name={img} alt={alt || ''} sizes="320px" /></div>
      </div>
    </a>
  );
}

export type QA = { q: string; a: React.ReactNode; text: string };
export function Faq({ items, schema = true }: { items: QA[]; schema?: boolean }) {
  return (
    <>
      <div className="faq">
        {items.map((it, i) => (
          <details key={i} open={i === 0}>
            <summary>{it.q}</summary>
            <div className="ans">{it.a}</div>
          </details>
        ))}
      </div>
      {schema && <JsonLd data={{
        '@context': 'https://schema.org', '@type': 'FAQPage',
        mainEntity: items.map((it) => ({ '@type': 'Question', name: it.q, acceptedAnswer: { '@type': 'Answer', text: it.text } })),
      }} />}
    </>
  );
}

export function Ribbon() {
  const items = site.nearby;
  // group equal distances into one label on wide screens
  const merged: { name: string; km: number; href?: string }[] = [];
  for (const it of items) {
    const prev = merged[merged.length - 1];
    if (prev && prev.km === it.km) { prev.name = `${prev.name} & ${it.name}`; prev.href = undefined; } else merged.push({ ...it });
  }
  return (
    <ol className="ribbon" aria-label={`Road distances from ${site.shortName}`}>
      <li><span className="serif">{site.shortName}</span><span className="cap cap--muted">0 km</span></li>
      {merged.map((it, i) => {
        const last = i === merged.length - 1;
        const cls = last ? 'last down' : i % 2 === 0 ? 'up' : 'down';
        return (
          <li key={it.name} className={cls} style={{ ['--x' as string]: `${(it.km / 25) * 100}%` }}>
            {it.href ? <a href={it.href} className="serif">{it.name}</a> : <span className="serif">{it.name}</span>}
            <span className="cap cap--muted" style={{ display: 'block' }}>{it.km} km</span>
          </li>
        );
      })}
    </ol>
  );
}

export function Ratings({ compact = false }: { compact?: boolean }) {
  const r = site.ratings;
  return (
    <div style={{ textAlign: compact ? 'left' : 'center' }}>
      <p className="cap cap--pool" style={{ marginBottom: 24 }}>What guests say</p>
      <p className="d3" style={{ fontSize: compact ? undefined : 'clamp(32px, 4.2vw, 58px)' }}>
        Rated <em>{r.google.score.toFixed(1)} out of {r.google.outOf}</em> on Google, <em>{r.airbnb.score}</em> on Airbnb and <em>{r.expedia.score} out of {r.expedia.outOf}</em> on Expedia.
      </p>
      <p className="cap cap--muted" style={{ marginTop: 24 }}>{r.google.count + r.airbnb.count + r.expedia.count} reviews · as of {r.asOf}</p>
    </div>
  );
}

