import { site } from '@/content/site';
import { meta } from '@/lib/meta';
import { Header } from '@/components/Chrome';
import { Img } from '@/components/Img';
import { Crumbs, NextChapter, Ribbon } from '@/components/Bits';
import { BookingBand, TitleBlock } from '@/components/Sections';

export const metadata = meta('/location/', 'Villa near Meppadi, Wayanad | Location & How to Reach',
  'How to reach Maison Claire in Meppadi, Wayanad: 12 km from Kalpetta, 87 km from Calicut airport, 280–310 km from Bangalore. Falls and peaks nearby.', { image: 'terrace-view' });

export default function Page() {
  return (
    <>
      <Header current="/location/" />
      <main id="main">
        <TitleBlock crumbs={<Crumbs items={[['/location/', 'Location']]} />} title={<>Where to find us: <em>Meppadi, Wayanad</em></>}
          intro={<p>Maison Claire is in the green hills around Meppadi in south Wayanad, Kerala. Waterfalls, viewpoints and the Chembra peak are a short drive away.</p>} />

        <section className="wrap" style={{ paddingBottom: 'var(--space)' }}>
          <div className="g12" style={{ alignItems: 'start' }}>
            <div className="c-1-7"><div className="ph ratio-43 cap-h"><Img name="terrace-view" alt="View from the villa terrace over the trees to the hills" priority sizes="(min-width: 900px) 56vw, 100vw" /></div></div>
            <div className="c-9-4 note" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <p className="cap cap--pool">Address</p>
              <p className="d4">{site.name}<br />{site.fullAddress ? <>{site.fullAddress}<br /></> : null}{site.locality}, {site.district}, {site.state}{site.postalCode ? ` ${site.postalCode}` : ''}</p>
              {site.plusCode && <p className="small">Google Maps plus code: {site.plusCode} Meppadi</p>}
              {site.mapUrl && <a className="btn btn--dark" href={site.mapUrl} target="_blank" rel="noopener">Get directions on Google Maps</a>}
              {site.phone && <p className="small">Lost on the way? Call <a href={`tel:${site.phone}`}>{site.phoneDisplay}</a></p>}
            </div>
          </div>
        </section>

        <section className="section band-mist">
          <div className="wrap g12">
            <div className="c-1-4 stack"><p className="cap cap--pool">01 — Getting here</p><h2 className="d2">By road, <em>through the ghats</em></h2></div>
            <dl className="c-6-7 ledger">
              <div><dt className="d4">From Kalpetta</dt><dd style={{ margin: 0 }}>About 12 km to Meppadi</dd></div>
              <div><dt className="d4">From Kozhikode</dt><dd style={{ margin: 0 }}>Up the Thamarassery ghat, via Lakkidi</dd></div>
              <div><dt className="d4">From Bangalore</dt><dd style={{ margin: 0, textAlign: 'right' }}>280–310 km via Mysuru · <a href="/bangalore-to-wayanad/">route guide</a></dd></div>
              <div><dt className="d4">By train</dt><dd style={{ margin: 0 }}>Kozhikode station, about 78 km</dd></div>
              <div><dt className="d4">By air</dt><dd style={{ margin: 0 }}>Calicut airport, about 87 km</dd></div>
            </dl>
          </div>
          <p className="wrap small" style={{ marginTop: 16 }}>Distances are to Meppadi town and approximate.</p>
        </section>

        <section className="section wrap">
          <div className="chapter"><p className="cap cap--pool">02 — Around you</p><h2 className="d2">Everything here is <em>within 25 km</em></h2></div>
          <Ribbon />
          <p className="cap cap--muted" style={{ marginTop: 20 }}>Road distances from the villa, approximate</p>
        </section>

        <section className="section--tight wrap">
          <div className="g12">
            <div className="c-1-7">
              <p className="cap cap--pool" style={{ marginBottom: 24 }}>03 — Close by</p>
              <div className="close3">
                {site.everyday.map((e) => (
                  <div key={e.name} style={{ borderTop: '1px solid var(--bark)', paddingTop: 14 }}>
                    <p className="serif" style={{ fontSize: 'clamp(36px,5vw,72px)', lineHeight: 1 }}>{e.dist.split(' ')[0]}<span style={{ fontSize: '0.4em' }}> {e.dist.split(' ')[1]}</span></p>
                    <p className="cap cap--muted" style={{ marginTop: 10 }}>{e.name}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="c-9-4 note stack-s">
              <p className="cap cap--pool">Travel update</p>
              <p className="body">Before a trip in the rainy months, check our <a href="/wayanad-travel-update/">Wayanad travel update</a> for road and weather notes.</p>
            </div>
          </div>
        </section>
        <BookingBand />
        <NextChapter href="/things-to-do-near-meppadi/" title="Things to do" img="pool-view-portrait" />
      </main>
    </>
  );
}
