import { meta } from '@/lib/meta';
import { Header } from '@/components/Chrome';
import { Img } from '@/components/Img';
import { Icon } from '@/components/Icons';
import { BookButton } from '@/components/Book';
import { Crumbs, JsonLd, NextChapter } from '@/components/Bits';
import { BookingBand } from '@/components/Sections';
import { SITE_URL } from '@/content/site';
import { places, typeLabel, commons } from '@/content/places';

const d = 'Things to do near Meppadi, Wayanad: 900 Kandi glass bridge, Kanthanpara and Soochipara falls, Chembra Peak and Edakkal Caves.';
export const metadata = meta('/things-to-do-near-meppadi/', 'Things to Do near Meppadi, Wayanad: 7 Places & Distances', d, { image: 'place-chembra' });

const counts = Object.entries(places.reduce<Record<string, number>>((a, p) => ({ ...a, [p.type]: (a[p.type] || 0) + 1 }), {}));
const byId = Object.fromEntries(places.map((p) => [p.id, p]));

const plans = [
  { icon: 'child', title: 'With children', time: 'Morning', stops: ['kanthanpara'], note: 'A short walk from the road to the falls, then back to the villa pool by lunch.' },
  { icon: 'jeep', title: 'Half-day pair', time: 'Half a day', stops: ['kandi', 'soochipara'], note: 'The jeep ride into 900 Kandi, then the forest path down to Soochipara Falls.' },
  { icon: 'boot', title: 'Full day', time: 'Start early', stops: ['chembra'], note: 'The Chembra trek runs with forest guides and takes most of the day. Check that it is open before you set out.' },
  { icon: 'sun', title: 'Caves and a reservoir', time: 'Morning to afternoon', stops: ['edakkal', 'karapuzha'], note: 'Climb up to Edakkal Caves in the morning, then a slower afternoon by the Karapuzha reservoir.' },
];

export default function Page() {
  return (
    <>
      <Header current="/things-to-do-near-meppadi/" />
      <main id="main">
        {/* Title + photo mosaic */}
        <section className="wrap ttd-hero">
          <div className="ttd-hero__text stack">
            <Crumbs items={[['/things-to-do-near-meppadi/', 'Things to do']]} />
            <h1 className="d1" style={{ fontSize: 'clamp(42px, 6.2vw, 92px)' }}>Things to do <em>near Meppadi</em></h1>
            <p className="lead">Seven places within 25 km of the villa, from easy waterfall walks to a full-day peak trek. Distances are by road from Maison Claire.</p>
            <p className="updated">Updated 27 October 2026</p>
          </div>
          <div className="mosaic" aria-label="Photos of places near Meppadi">
            <figure className="mosaic__a"><Img name="place-chembra" alt="The heart-shaped lake on the Chembra Peak trek" priority sizes="(min-width: 900px) 40vw, 100vw" /></figure>
            <figure className="mosaic__b"><Img name="place-kanthanpara" alt="Kanthanpara Falls over wide rock shelves" sizes="(min-width: 900px) 20vw, 50vw" /></figure>
            <figure className="mosaic__c"><Img name="place-edakkal" alt="Ancient carvings on the walls of Edakkal Caves" sizes="(min-width: 900px) 20vw, 50vw" /></figure>
          </div>
        </section>

        {/* At a glance: counts by kind */}
        <section className="wrap" aria-label="At a glance">
          <ul className="x glance-strip">
            <li><Icon name="pin" size={28} /><b>{places.length}</b><span>places</span></li>
            {counts.map(([t, n]) => <li key={t}><Icon name={t} size={28} /><b>{n}</b><span>{n > 1 ? typeLabel[t].toLowerCase() + 's' : typeLabel[t].toLowerCase()}</span></li>)}
            <li><Icon name="car" size={28} /><b>25</b><span>km at most</span></li>
          </ul>
        </section>

        {/* Distance chart */}
        <section className="section wrap" aria-labelledby="far">
          <div className="g12">
            <div className="c-1-4 stack">
              <p className="cap cap--pool">How far</p>
              <h2 id="far" className="d2">By road <em>from the villa</em></h2>
              <p className="body">Bars are to scale, 0 to 25 km. Tap a place to jump to it.</p>
            </div>
            <ol className="c-6-7 x dist" aria-label="Road distances from Maison Claire">
              {[...places].sort((a, b) => a.km - b.km).map((p) => (
                <li key={p.id}>
                  <a href={`#${p.id}`}>
                    <span className="dist__ico"><Icon name={p.type} /></span>
                    <span className="dist__name">{p.name}</span>
                    <span className="dist__km">{p.km} km</span>
                    <span className="dist__bar" style={{ ['--w' as string]: `${(p.km / 25) * 100}%` }} />
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Place cards */}
        <section className="wrap" style={{ paddingBottom: 'var(--space)' }} aria-label="The places">
          <div className="places">
            {places.map((p, i) => (
              <article key={p.id} id={p.id} className={i === 0 ? 'place place--lead' : 'place'}>
                <figure className="place__ph">
                  <div className="ph" style={p.pos ? { ['--pos' as string]: p.pos } : undefined}><Img name={p.img} alt={p.alt} sizes={i === 0 ? '(min-width: 900px) 58vw, 100vw' : '(min-width: 900px) 44vw, 100vw'} /></div>
                  <span className="place__n">{String(i + 1).padStart(2, '0')}</span>
                  <figcaption className="credit">Photo: <a href={commons(p.credit.file)} target="_blank" rel="noopener">{p.credit.by}</a>, <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener license">CC BY-SA 4.0</a></figcaption>
                </figure>
                <div className="place__body">
                  <p className="cap cap--pool place__type"><Icon name={p.type} size={18} />{typeLabel[p.type]}</p>
                  <h2 className="d3">{p.name}</h2>
                  <ul className="x chips2">
                    <li><Icon name="car" size={16} />{p.km} km</li>
                    <li><Icon name={p.effortIcon} size={16} />{p.effort}</li>
                  </ul>
                  <p className="body">{p.text}</p>
                  {p.href && <p><a className="textlink" href={p.href}>Read the guide →</a></p>}
                </div>
              </article>
            ))}
          </div>
          <p className="small" style={{ marginTop: 32, maxWidth: 760 }}>Opening times and entry rules at forest sites change with the season and the weather. Check on the day, especially in the rains. See the <a href="/wayanad-travel-update/">travel update</a>. Photos of the places are from Wikimedia Commons, credited under each one.</p>
        </section>

        {/* Plan a day */}
        <section className="section band-mist" aria-labelledby="plan">
          <div className="wrap">
            <div className="chapter"><p className="cap cap--pool">Plan a day</p><h2 id="plan" className="d2">Four easy ways <em>to fill a day</em></h2></div>
            <ol className="x plans">
              {plans.map((pl) => (
                <li key={pl.title} className="plan-card">
                  <div className="plan-card__top"><span className="plan-card__ico"><Icon name={pl.icon} size={26} /></span><span className="cap cap--muted">{pl.time}</span></div>
                  <h3 className="d4">{pl.title}</h3>
                  <ol className="x plan-card__route">
                    <li><Icon name="home" size={16} />Villa</li>
                    {pl.stops.map((s) => <li key={s}><a href={`#${s}`}><Icon name={byId[s].type} size={16} />{byId[s].name}</a></li>)}
                    <li><Icon name="pool" size={16} />Pool</li>
                  </ol>
                  <p className="body">{pl.note}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section wrap">
          <div className="g12" style={{ alignItems: 'center' }}>
            <div className="c-1-6"><div className="ph ratio-43"><Img name="villa-night-pool" alt="The villa pool lit up at night" sizes="(min-width: 900px) 48vw, 100vw" /></div></div>
            <div className="c-8-5 stack">
              <p className="cap cap--pool">And at the end of the day</p>
              <h2 className="d2">Back to <em>your own pool</em></h2>
              <p className="lead">Sightseeing in the hills is tiring. Maison Claire has a private infinity pool, a full kitchen and four king bedrooms waiting when you get back.</p>
              <div><BookButton className="btn btn--dark">Check dates</BookButton></div>
            </div>
          </div>
        </section>
        <BookingBand />
        <NextChapter href="/900-kandi-glass-bridge/" title="900 Kandi" img="place-kandi" />
      </main>
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'ItemList', name: 'Things to do near Meppadi, Wayanad', url: SITE_URL + '/things-to-do-near-meppadi/',
        itemListElement: places.map((p, i) => ({ '@type': 'ListItem', position: i + 1, item: { '@type': 'TouristAttraction', name: p.name, description: p.text, image: `${SITE_URL}/img/${p.img}-1200.jpg`, address: { '@type': 'PostalAddress', addressRegion: 'Wayanad, Kerala', addressCountry: 'IN' } } })) }} />
    </>
  );
}
