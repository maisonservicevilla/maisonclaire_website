import { meta } from '@/lib/meta';
import { Guide, FactBox } from '@/components/Guide';

const d = 'A practical guide to 900 Kandi and its glass bridge near Meppadi, Wayanad: how to get there by jeep, what to expect, when to go, and where to stay 9 km away.';
export const metadata = meta('/900-kandi-glass-bridge/', '900 Kandi Glass Bridge, Wayanad: Guide & Stay Nearby', d, { image: 'terrace-view', type: 'article' });

export default function Page() {
  return (
    <Guide path="/900-kandi-glass-bridge/" crumbs={[['/things-to-do-near-meppadi/', 'Things to do'], ['/900-kandi-glass-bridge/', '900 Kandi glass bridge']]}
      title={<>900 Kandi <em>glass bridge</em></>} headline="900 Kandi glass bridge, Wayanad: how to visit and where to stay" description={d}
      intro={<p>A forest estate above Meppadi with off-road tracks and a glass bridge over the trees. It is 9 km from Maison Claire.</p>}
      img="terrace-view" imgAlt="Forested hills seen from the villa terrace" imgCaption="Forested hills from the terrace at Maison Claire. The bridge is 9 km away."
      aside={<FactBox rows={[['From the villa', '9 km'], ['From Meppadi town', 'About 14 km'], ['Getting there', 'Jeep from Meppadi'], ['Tickets', 'Bought at the site'], ['Best season', 'October to May']]} />}
      sources={[['Wikipedia: 900 Kandi', 'https://en.wikipedia.org/wiki/900_Kandi'], ['Housing.com: Wayanad glass bridge guide', 'https://housing.com/news/travellers-guide-to-wayanad-glass-bridge']]}
      next={{ href: '/kanthanpara-waterfalls/', title: 'Kanthanpara Falls', img: 'exterior-path' }}
      about={{ '@type': 'TouristAttraction', name: '900 Kandi', address: { '@type': 'PostalAddress', addressLocality: 'Meppadi', addressRegion: 'Wayanad, Kerala', addressCountry: 'IN' } }}>
      <h2>What 900 Kandi is</h2>
      <p>900 Kandi is an estate inside the forest above Meppadi. The name comes from a 900-acre farm owned by an early settler; the land has grown since, but the name stuck. The area became better known after the 2015 Malayalam film <em>Lord Livingstone 7000 Kandi</em> was shot there.</p>
      <p>Today people come for two things: the off-road jeep ride through the forest, and the glass bridge, a see-through walkway built out over the treetops.</p>

      <h2>How to get there</h2>
      <p>The route leaves the Meppadi to Soochipara Falls road beyond Kalladi. The last stretch is rough, so most visitors take one of the private jeeps that run from Meppadi rather than drive their own car. From Maison Claire it is about 9 km to the area.</p>

      <h2>Tickets and timings</h2>
      <p>The glass bridge is a paid attraction, with tickets sold at the site. Opening hours have been reported as daytime only, and they can change with the season or close at short notice in heavy rain. Ask your jeep driver the day before, or ask us when you arrive.</p>

      <h2>When to go</h2>
      <p>October to May is the most comfortable season. Go in the morning for clearer views over the forest; afternoons in the hills often bring cloud. In the monsoon, check whether the area is open before setting out.</p>

      <h2>Make a day of it</h2>
      <p>Soochipara Falls is on the same road out of Meppadi, so the two pair well. Kanthanpara Falls (10 km from the villa) is a gentler stop for an afternoon. See all <a href="/things-to-do-near-meppadi/">things to do near Meppadi</a>.</p>
    </Guide>
  );
}
