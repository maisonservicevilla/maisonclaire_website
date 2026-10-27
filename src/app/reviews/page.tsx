import { site } from '@/content/site';
import { meta } from '@/lib/meta';
import { Header } from '@/components/Chrome';
import { Crumbs, NextChapter } from '@/components/Bits';
import { BookingBand, TitleBlock } from '@/components/Sections';

export const metadata = meta('/reviews/', 'Maison Claire Villa Wayanad Reviews | Guest Ratings',
  `Guest ratings for Maison Claire Service Villa, Meppadi: ${site.ratings.airbnb.score}/5 on Airbnb from ${site.ratings.airbnb.count} reviews and ${site.ratings.expedia.score}/10 on Expedia from ${site.ratings.expedia.count}. Read them on each platform.`);

export default function Page() {
  const r = site.ratings;
  return (
    <>
      <Header />
      <main id="main">
        <TitleBlock crumbs={<Crumbs items={[['/reviews/', 'Reviews']]} />}
          title={<>Maison Claire reviews: <em>what guests have said</em></>}
          intro={<p>We don't copy reviews onto this site. Here are the scores, and links to read every review where it was written.</p>} />
        <section className="wrap" style={{ paddingBottom: 'var(--space)' }}>
          <div className="cards">
            <div className="stack" style={{ borderTop: '1px solid var(--bark)', paddingTop: 20 }}>
              <p className="cap cap--pool">Airbnb</p>
              <p className="serif" style={{ fontSize: 'clamp(72px,9vw,120px)', lineHeight: .9 }}>{r.airbnb.score}<span style={{ fontSize: '0.3em' }}> / {r.airbnb.outOf}</span></p>
              <p className="small">{r.airbnb.count} reviews, as of {r.asOf}</p>
              <dl className="ledger">
                {Object.entries(r.airbnb.sub).map(([k, v]) => <div key={k}><dt>{k}</dt><dd style={{ margin: 0 }}>{v}</dd></div>)}
              </dl>
              <a className="textlink" href={site.listings.Airbnb} target="_blank" rel="noopener">Read the reviews on Airbnb</a>
            </div>
            <div className="stack" style={{ borderTop: '1px solid var(--bark)', paddingTop: 20 }}>
              <p className="cap cap--pool">Expedia</p>
              <p className="serif" style={{ fontSize: 'clamp(72px,9vw,120px)', lineHeight: .9 }}>{r.expedia.score}<span style={{ fontSize: '0.3em' }}> / {r.expedia.outOf}</span></p>
              <p className="small">{r.expedia.count} reviews, as of {r.asOf}</p>
              <a className="textlink" href={site.listings.Expedia} target="_blank" rel="noopener">Read the reviews on Expedia</a>
              <p className="body" style={{ marginTop: 32 }}>Stayed with us? A short review on the site you booked through helps the next family or group decide. Thank you.</p>
            </div>
          </div>
        </section>
        <BookingBand />
        <NextChapter href="/faq/" title="Questions" img="balcony-view" />
      </main>
    </>
  );
}
