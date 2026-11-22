import { meta } from '@/lib/meta';
import { Guide, FactBox } from '@/components/Guide';
import type { QA } from '@/components/Bits';
import { places, commons } from '@/content/places';

const d = 'A Wayanad 3 day itinerary from Meppadi: Lakkidi and Pookode, Chembra or Soochipara with 900 Kandi, then Edakkal and Karapuzha. Plus a 2-day plan.';
export const metadata = meta('/wayanad-3-day-itinerary/', 'Wayanad 3 Day Itinerary: A Plan Based in Meppadi', d, { image: 'place-edakkal', type: 'article' });

const photo = places.find((p) => p.id === 'edakkal')!;

const faqs: QA[] = [
  { q: 'Are 3 days enough for Wayanad?',
    a: <p>Three days is enough for the main sights of south and central Wayanad: Lakkidi, Pookode Lake, Chembra Peak or Soochipara Falls, 900 Kandi, Edakkal Caves and Karapuzha Dam. North Wayanad, around Mananthavady, needs another day.</p>,
    text: 'Three days is enough for the main sights of south and central Wayanad: Lakkidi, Pookode Lake, Chembra Peak or Soochipara Falls, 900 Kandi, Edakkal Caves and Karapuzha Dam. North Wayanad, around Mananthavady, needs another day.' },
  { q: 'Can I do Chembra and Soochipara on the same day?',
    a: <p>It is possible for fit walkers, but it makes for a long, tiring day. Most people choose one: Chembra for the trek and the heart-shaped lake, or Soochipara for a shorter forest walk to a waterfall. Both are close to Meppadi.</p>,
    text: 'It is possible for fit walkers, but it makes for a long, tiring day. Most people choose one: Chembra for the trek and the heart-shaped lake, or Soochipara for a shorter forest walk to a waterfall. Both are close to Meppadi.' },
  { q: 'Which day is Edakkal Caves closed?',
    a: <p>Edakkal Caves is closed on Mondays. On other days entry starts at 8:30 AM, there is no entry to the hilltop after 4 PM, and the daily cap of 1,920 visitors is often reached by afternoon.</p>,
    text: 'Edakkal Caves is closed on Mondays. On other days entry starts at 8:30 AM, there is no entry to the hilltop after 4 PM, and the daily cap of 1,920 visitors is often reached by afternoon.' },
  { q: 'What is a good 2 day Wayanad itinerary?',
    a: <p>Day 1: arrive via Lakkidi and Pookode Lake, then 900 Kandi or Kanthanpara Falls in the afternoon. Day 2: Edakkal Caves first thing, then Karapuzha Dam before you head home. Swap in Soochipara Falls if you prefer a forest walk to the caves.</p>,
    text: 'Day 1: arrive via Lakkidi and Pookode Lake, then 900 Kandi or Kanthanpara Falls in the afternoon. Day 2: Edakkal Caves first thing, then Karapuzha Dam before you head home. Swap in Soochipara Falls if you prefer a forest walk to the caves.' },
  { q: 'Where should I stay for a 3 day Wayanad trip?',
    a: <p>Meppadi works well for this plan because Chembra Peak (12 km), Soochipara Falls (15 km) and 900 Kandi (9 km) are close, and Edakkal and Karapuzha are 24 km away. Maison Claire is a private four-bedroom pool villa in Meppadi.</p>,
    text: 'Meppadi works well for this plan because Chembra Peak (12 km), Soochipara Falls (15 km) and 900 Kandi (9 km) are close, and Edakkal and Karapuzha are 24 km away. Maison Claire is a private four-bedroom pool villa in Meppadi.' },
];

export default function Page() {
  return (
    <Guide path="/wayanad-3-day-itinerary/" crumbs={[['/location/', 'Location'], ['/wayanad-3-day-itinerary/', '3-day itinerary']]}
      title={<>A 3-day Wayanad <em>itinerary</em></>} headline="Wayanad 3 day itinerary: a plan based in Meppadi" description={d}
      intro={<p>Spend day one driving up via Lakkidi and Pookode Lake, day two on the Chembra Peak trek or at Soochipara Falls with 900 Kandi in the afternoon, and day three at Edakkal Caves and Karapuzha Dam. Based in Meppadi, no single drive on days two and three is longer than 24 km.</p>}
      img="place-edakkal" imgAlt={photo.alt} imgCaption={<>Carvings inside Edakkal Caves, 24 km from the villa. Photo: <a href={commons(photo.credit.file)} target="_blank" rel="noopener">{photo.credit.by}</a>, <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener license">CC BY-SA 4.0</a></>}
      aside={<FactBox title="The plan" rows={[['Day 1', 'Lakkidi, Pookode, arrive'], ['Day 2', 'Chembra or Soochipara, 900 Kandi'], ['Day 3', 'Edakkal, Karapuzha'], ['Base', 'Meppadi'], ['Edakkal closed', 'Mondays']]} />}
      sources={[
        ['Onmanorama: Edakkal Caves daily limit and rules (Jan 2026)', 'https://www.onmanorama.com/travel/kerala/2026/01/03/daily-limit-kerala-edakkal-caves-rules.amp.html'],
        ['DTPC Wayanad: Pookode Lake', 'https://www.dtpcwayanad.com/destination/pookode-lake-wayanad'],
        ['DTPC Wayanad: Karapuzha Dam', 'https://www.dtpcwayanad.com/destination/karapuzha-dam-wayanad'],
        ['Kerala Tourism: Chembra Peak', 'https://keralatourism.org/destination/chembra-peak-wayanad/508'],
      ]}
      faqs={faqs}
      related={[['/lakkidi-viewpoint/', 'Lakkidi Viewpoint'], ['/pookode-lake/', 'Pookode Lake'], ['/chembra-peak-trek/', 'The Chembra Peak trek'], ['/900-kandi-glass-bridge/', '900 Kandi glass bridge'], ['/edakkal-caves/', 'Edakkal Caves'], ['/karapuzha-dam/', 'Karapuzha Dam']]}
      stay="9 km from 900 Kandi, 12 km from Chembra, 24 km from Edakkal."
      next={{ href: '/things-to-do-near-meppadi/', title: 'Things to do near Meppadi', img: 'pool-view-portrait' }}>
      <h2>Before you start</h2>
      <p>This plan assumes you arrive from Kozhikode up the Thamarassery ghat road and stay in Meppadi. All distances on days two and three are road distances from Maison Claire. Two rules shape it: Edakkal Caves is closed on Mondays, so do not put day three on a Monday, and the Chembra trek needs an early start. Coming from Bengaluru instead? Edakkal is near Sulthan Bathery, on your way in, so see it on day one and save Lakkidi and Pookode for a day trip later. See <a href="/how-to-reach-wayanad/">how to reach Wayanad</a>.</p>

      <h2>Day 1: up the ghat, Lakkidi and Pookode Lake</h2>
      <ol className="route" aria-label="Day 1 route to Meppadi">
        <li><b>Adivaram</b><span>Foot of the Thamarassery ghat</span></li>
        <li><b>Nine hairpin bends</b><span>14 km of ghat road</span></li>
        <li className="warn"><b>Lakkidi</b><span>No parking at the viewpoint since August 2025</span></li>
        <li><b>Pookode Lake</b><span>Boating 9 AM to 5 PM</span></li>
        <li><b>Chundale</b><span>Turn off for Meppadi</span></li>
        <li><b>Meppadi</b><span>Maison Claire</span></li>
      </ol>
      <p>The 14 km churam climbs from Adivaram to Lakkidi, which sits at about 700 metres and looks back down over the bends. Parking at the viewpoint itself has been banned since August 2025, so take the view slowly from the road and keep moving. The Chain Tree is on the same stretch. A little further on, <a href="/pookode-lake/">Pookode Lake</a>, about 12 km from Kalpetta, has boats for two, four or seven people. Entry runs 9 AM to 6 PM and boating 9 AM to 5 PM. From there, carry on to Chundale and turn off for Meppadi. Restaurants are about 200 m from the villa for a first dinner.</p>

      <h2>Day 2: Chembra or Soochipara, then 900 Kandi</h2>
      <p><b>Option A: the Chembra Peak trek (12 km).</b> At about 2,100 metres, Chembra is the highest point in Wayanad. Treks run with a Forest Department permit from the base camp near Meppadi, a guide goes with each group, and the walk ends at the heart-shaped lake; the summit itself is closed. Permit fees, group sizes and entry times have changed over the years, so call the forest office on +91 4936 282001 before you go and be at the base camp early. Read the <a href="/chembra-peak-trek/">Chembra trek guide</a>.</p>
      <p><b>Option B: Soochipara Falls (15 km).</b> A trail of about 2 km leads down from the entrance to the falls, which drop in three tiers. Hours have been listed as 8 AM to 5 PM. Allow time for the walk back up.</p>
      <p><b>Afternoon: 900 Kandi (9 km).</b> Take a jeep from Meppadi up to the forest estate and its glass bridge. If you are tired after the morning, <a href="/kanthanpara-waterfalls/">Kanthanpara Falls</a> (10 km) is a short walk from the road instead.</p>

      <h2>Day 3: Edakkal Caves and Karapuzha Dam</h2>
      <p><b>Morning: <a href="/edakkal-caves/">Edakkal Caves</a> (24 km).</b> Rock shelters near Ambalavayal with ancient carvings, at the top of a steep climb. Entry starts at 8:30 AM, there is no hilltop entry after 4 PM, and the daily cap of 1,920 visitors is often reached by afternoon, so go first thing. The site is plastic-free.</p>
      <p><b>Afternoon: <a href="/karapuzha-dam/">Karapuzha Dam</a> (24 km).</b> A reservoir with gardens and open views, open 9 AM to 6 PM, with a zipline for anyone with energy left. Then head home, or back to the villa for a last evening by the pool. If you are driving to Bengaluru, remember the Bandipur forest road closes to private vehicles at 9 PM.</p>

      <h2>Only have two days?</h2>
      <table>
        <thead><tr><th scope="col">Day</th><th scope="col">Morning</th><th scope="col">Afternoon</th></tr></thead>
        <tbody>
          <tr><th scope="row">Day 1</th><td>Drive up via Lakkidi and Pookode Lake</td><td>900 Kandi or Kanthanpara Falls</td></tr>
          <tr><th scope="row">Day 2</th><td>Edakkal Caves (not Monday) or Soochipara Falls</td><td>Karapuzha Dam, then home</td></tr>
        </tbody>
      </table>
      <p>Fit walkers who care most about Chembra can make day two the trek instead and skip Edakkal. With a group of six or more, a whole villa keeps everyone together at the end of each long day: pick your three nights in the <a href="/rates-booking/">booking window</a>, keeping day three off a Monday.</p>
    </Guide>
  );
}
