import { site } from '@/content/site';
import { meta } from '@/lib/meta';
import { Header } from '@/components/Chrome';
import { Img } from '@/components/Img';
import { Crumbs, JsonLd, NextChapter, Ribbon } from '@/components/Bits';
import { BookingBand, TitleBlock } from '@/components/Sections';
import { SITE_URL } from '@/content/site';

const d = 'Things to do near Meppadi, Wayanad: 900 Kandi glass bridge, Kanthanpara and Soochipara falls, Chembra Peak, Edakkal Caves, with distances.';
export const metadata = meta('/things-to-do-near-meppadi/', 'Things to Do near Meppadi, Wayanad | Places to Visit & Distances', d, { image: 'pool-view-portrait' });

const places = [
  { name: '900 Kandi glass bridge', km: 9, href: '/900-kandi-glass-bridge/', text: 'A forest estate reached by jeep from Meppadi, with off-road tracks and a glass bridge over the trees.' },
  { name: 'Kanthanpara Falls', km: 10, href: '/kanthanpara-waterfalls/', text: 'A smaller, quieter waterfall a short walk from the road, with a pool and rocks at its base.' },
  { name: 'Chembra Peak', km: 12, text: 'At 2,100 m, the highest point in the area. Treks start near Meppadi and run with local forest guides.' },
  { name: 'Soochipara Falls', km: 15, text: 'Also called Sentinel Rock Falls, reached by a forest path from the road. Best after the monsoon.' },
  { name: 'Lakkidi Viewpoint', km: 20, text: 'At the top of the Thamarassery ghat, looking down over the hairpin bends towards Kozhikode.' },
  { name: 'Edakkal Caves', km: 24, text: 'Rock shelters with ancient carvings on the walls, up a steep climb near Ambalavayal.' },
  { name: 'Karapuzha Dam', km: 24, text: 'A reservoir with gardens and open views, good for a slower afternoon.' },
];

export default function Page() {
  return (
    <>
      <Header current="/things-to-do-near-meppadi/" />
      <main id="main">
        <TitleBlock crumbs={<Crumbs items={[['/location/', 'Location'], ['/things-to-do-near-meppadi/', 'Things to do']]} />}
          title={<>Things to do <em>near Meppadi</em></>}
          intro={<p>Seven places within 25 km of the villa, from easy waterfall walks to a full-day peak trek. Distances are by road from Maison Claire.</p>} />
        <section className="wrap" style={{ paddingBottom: 'clamp(48px,6vw,96px)' }}>
          <Ribbon />
        </section>
        <section className="wrap" style={{ paddingBottom: 'var(--space)' }}>
          <ol className="ledger">
            {places.map((p, i) => (
              <li key={p.name} style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr)', gap: 6, padding: '24px 0' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: 16, alignItems: 'baseline' }}>
                  <h2 className="d4" style={{ fontSize: 'clamp(26px,2.6vw,34px)' }}><span className="cap cap--muted" style={{ marginRight: 14 }}>{String(i + 1).padStart(2, '0')}</span>{p.href ? <a href={p.href}>{p.name}</a> : p.name}</h2>
                  <span className="cap cap--pool" style={{ whiteSpace: 'nowrap' }}>{p.km} km</span>
                </div>
                <p className="body" style={{ maxWidth: 760 }}>{p.text}{p.href && <> <a href={p.href}>Read the guide</a>.</>}</p>
              </li>
            ))}
          </ol>
          <p className="small" style={{ marginTop: 20 }}>Opening times and entry rules at forest sites change with the season and the weather. Check on the day, especially in the rains. See the <a href="/wayanad-travel-update/">travel update</a>.</p>
        </section>
        <section className="section band-mist">
          <div className="wrap g12" style={{ alignItems: 'center' }}>
            <div className="c-1-6"><div className="ph ratio-43"><Img name="villa-night-pool" alt="The villa pool lit up at night" sizes="(min-width: 900px) 48vw, 100vw" /></div></div>
            <div className="c-8-5 stack">
              <p className="cap cap--pool">And at the end of the day</p>
              <h2 className="d2">Back to <em>your own pool</em></h2>
              <p className="lead">Sightseeing in the hills is tiring. Maison Claire has a private infinity pool, a full kitchen and four king bedrooms waiting when you get back.</p>
            </div>
          </div>
        </section>
        <BookingBand />
        <NextChapter href="/900-kandi-glass-bridge/" title="900 Kandi" img="terrace-view" />
      </main>
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'ItemList', name: 'Things to do near Meppadi, Wayanad', url: SITE_URL + '/things-to-do-near-meppadi/',
        itemListElement: places.map((p, i) => ({ '@type': 'ListItem', position: i + 1, item: { '@type': 'TouristAttraction', name: p.name, description: p.text, address: { '@type': 'PostalAddress', addressRegion: 'Wayanad, Kerala', addressCountry: 'IN' } } })) }} />
    </>
  );
}
