import { site } from '@/content/site';
import { meta } from '@/lib/meta';
import { Header } from '@/components/Chrome';
import { Crumbs, NextChapter } from '@/components/Bits';
import { BookingBand, TitleBlock, BookButton } from '@/components/Sections';

export const metadata = meta('/reviews/', 'Maison Claire Villa Wayanad Reviews | Guest Ratings',
  `Guest ratings for Maison Claire Service Villa, Meppadi: ${site.ratings.google.score.toFixed(1)}/5 on Google from ${site.ratings.google.count} reviews, ${site.ratings.airbnb.score}/5 on Airbnb from ${site.ratings.airbnb.count} reviews and ${site.ratings.expedia.score}/10 on Expedia. Read them on each platform.`);

export default function Page() {
  const r = site.ratings;
  return (
    <>
      <Header />
      <main id="main">
        <TitleBlock crumbs={<Crumbs items={[['/reviews/', 'Reviews']]} />}
          title={<>Maison Claire reviews: <em>what guests have said</em></>}
          intro={<p>Here are the scores from each site, with links to read every review where it was written.</p>} />
        <section className="wrap" style={{ paddingBottom: 'clamp(56px,7vw,104px)' }}>
          <div className="cards cards--3 scores">
            {([
              ['Google', r.google.score.toFixed(1), r.google.outOf, r.google.count, site.mapUrl],
              ['Airbnb', String(r.airbnb.score), r.airbnb.outOf, r.airbnb.count, site.listings.Airbnb],
              ['Expedia', String(r.expedia.score), r.expedia.outOf, r.expedia.count, site.listings.Expedia],
            ] as [string, string, number, number, string | null][]).map(([name, score, of, n, url]) => (
              <div key={name} className="score">
                <p className="cap cap--pool">{name}</p>
                <p className="serif score__n">{score}<span> / {of}</span></p>
                <p className="small">{n} reviews, as of {r.asOf}</p>
                {url && <a className="textlink" href={url} target="_blank" rel="noopener">Read them on {name}<span className="sr-only"> (opens in a new tab)</span></a>}
              </div>
            ))}
          </div>
        </section>
        <section className="section--tight band-mist">
          <div className="wrap g12">
            <div className="c-1-5 stack">
              <p className="cap cap--pool">Airbnb, in detail</p>
              <h2 className="d2">What guests <em>scored highest</em></h2>
              <p className="lead">Accuracy, check-in and communication each score {r.airbnb.sub.Accuracy} out of 5.</p>
            </div>
            <div className="c-7-6 bars">
              {Object.entries(r.airbnb.sub).map(([k, v]) => <div key={k}><span>{k}</span><b className="serif" style={{ fontSize: 24, fontWeight: 400 }}>{v}</b><i style={{ ['--v' as string]: `${(v / 5) * 100}%` }} /></div>)}
            </div>
          </div>
        </section>
        <section className="section wrap">
          <div className="g12">
            <div className="c-1-5 stack">
              <h2 className="d3">Stayed with us?</h2>
              <p className="body">A short review on the site you booked through helps the next family or group decide. Thank you.</p>
              <div><BookButton className="btn btn--dark">Check dates</BookButton></div>
            </div>
            <div className="c-7-6">
              <p className="cap cap--muted" style={{ marginBottom: 8 }}>Maison Claire is also listed on</p>
              <ul className="x ledger">
                {Object.entries(site.listings).filter(([k]) => k !== 'Airbnb' && k !== 'Expedia').map(([k, v]) => <li key={k}><a href={v} target="_blank" rel="noopener">{k}<span className="sr-only"> (opens in a new tab)</span></a><span aria-hidden="true">↗</span></li>)}
              </ul>
            </div>
          </div>
        </section>
        <BookingBand />
        <NextChapter href="/faq/" title="Questions" img="balcony-view" />
      </main>
    </>
  );
}
