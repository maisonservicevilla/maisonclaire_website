import { meta } from '@/lib/meta';
import { Header } from '@/components/Chrome';
import { Img } from '@/components/Img';
import { Crumbs, JsonLd, NextChapter } from '@/components/Bits';
import { BookingBand, TitleBlock } from '@/components/Sections';
import { SITE_URL } from '@/content/site';
import manifest from '@/content/images.json';

export const metadata = meta('/gallery/', 'Maison Claire Villa Photos | Wayanad Pool Villa Gallery',
  'Photos of Maison Claire, Meppadi, Wayanad: the infinity pool by day and at dusk, four king bedrooms, three lounges and the kitchen.', { image: 'pool-infinity-mountain' });

const groups: { id: string; title: string; items: [string, string][] }[] = [
  { id: 'pool', title: 'The pool and garden', items: [['pool-infinity-mountain', 'Infinity pool facing the hills in morning light'], ['exterior-day', 'The two-storey villa from the garden'], ['pool-dusk', 'The pool at dusk under a pink sky'], ['pool-dusk-portrait', 'Pool lights at dusk'], ['pool-view-portrait', 'Pool edge with the mountains beyond'], ['villa-night-pool', 'The villa and pool at night'], ['exterior-pool', 'The rounded end of the pool beside the house'], ['exterior-path', 'Stone path across the lawn'], ['terrace-view', 'Terrace view over the trees']] },
  { id: 'bedrooms', title: 'Bedrooms and bathrooms', items: [['bedroom-mountain-view', 'Bedroom with a hill-view balcony'], ['bedroom-balcony', 'Bedroom with a carved headboard'], ['bedroom-grey', 'Bedroom with a grey headboard'], ['bedroom-grey-2', 'King bed with a grey headboard and wardrobe'], ['bedroom-garden', 'The carved-bed room in daylight'], ['bedroom-view-warm', 'Bedroom in the evening'], ['bedroom-warm', 'Bedroom with a carved headboard in warm light'], ['balcony-view', 'Balcony chairs facing the mountains'], ['bathroom-green', 'Bathroom with green stone walls']] },
  { id: 'living', title: 'Living, kitchen and dining', items: [['living-teal', 'Lounge with a teal sofa'], ['living-teal-light', 'The teal lounge in daylight'], ['living-grey', 'Lounge with grey sofas'], ['living-tv', 'TV lounge'], ['living-chesterfield', 'Sitting room with beige sofas'], ['living-warm', 'Sitting room in the evening'], ['dining', 'Dining table for eight'], ['dining-staircase', 'Dining area beside the glass staircase'], ['dining-counter', 'Counter and dining chairs'], ['kitchen', 'The kitchen'], ['kitchen-evening', 'The kitchen in the evening']] },
];

export default function Page() {
  return (
    <>
      <Header />
      <main id="main">
        <TitleBlock crumbs={<Crumbs items={[['/the-villa/', 'The villa'], ['/gallery/', 'Gallery']]} />}
          title={<>Maison Claire villa photos, <em>every room as it is</em></>}
          intro={<p>Every photo here is of Maison Claire itself: the pool, the bedrooms, the lounges and the kitchen, as they are.</p>} />
        <nav className="wrap" aria-label="Photo sections" style={{ marginBottom: 'clamp(28px,4vw,48px)' }}>
          <div className="chips">{groups.map((g) => <a key={g.id} href={`#${g.id}`}>{g.title} <span className="cap cap--muted" style={{ marginLeft: 8 }}>{g.items.length}</span></a>)}</div>
        </nav>
        {groups.map((g, gi) => (
          <section key={g.title} id={g.id} className="wrap" style={{ paddingBottom: 'clamp(48px,7vw,96px)' }} aria-labelledby={`g${gi}`}>
            <h2 id={`g${gi}`} className="cap cap--pool" style={{ marginBottom: 24, borderTop: '1px solid var(--bark)', paddingTop: 14 }}>{g.title}</h2>
            <div className="gal">
              {g.items.map(([img, alt], i) => (
                <figure key={img}>
                  <a href={`/img/${img}-${(manifest as Record<string,{widths:number[]}>)[img].widths.slice(-1)[0]}.avif`} aria-label={`Open larger photo in a new tab: ${alt}`} target="_blank" rel="noopener" style={{ display: 'block' }}>
                    <Img name={img} alt={alt} priority={gi === 0 && i === 0} sizes="(min-width: 1000px) 31vw, (min-width: 480px) 48vw, 100vw" style={{ width: '100%', borderRadius: 2 }} />
                  </a>
                  <figcaption className="small">{alt}</figcaption>
                </figure>
              ))}
            </div>
          </section>
        ))}
        <BookingBand />
        <NextChapter href="/rates-booking/" title="Rates & booking" img="exterior-day" />
      </main>
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'ImageGallery', name: 'Maison Claire Service Villa photos', url: SITE_URL + '/gallery/',
        image: groups.flatMap((g) => g.items.map(([img, alt]) => ({ '@type': 'ImageObject', contentUrl: `${SITE_URL}/img/${img}-${(manifest as Record<string,{widths:number[]}>)[img].widths.slice(-1)[0]}.avif`, caption: alt }))) }} />
    </>
  );
}
