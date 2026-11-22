import { meta } from '@/lib/meta';
import { Guide, FactBox } from '@/components/Guide';
import type { QA } from '@/components/Bits';
import { commons } from '@/content/places';

const d = 'Lakkidi viewpoint sits at the top of the Thamarassery ghat road, above nine hairpin bends. Parking rules since 2025, the Chain Tree and when to go.';
export const metadata = meta('/lakkidi-viewpoint/', 'Lakkidi Viewpoint: Ghat Road View, Parking & Tips', d, { image: 'place-lakkidi', type: 'article' });

const faqs: QA[] = [
  { q: 'Where is Lakkidi viewpoint?',
    a: <p>At the top of the Thamarassery churam (ghat road) on NH 766, where the road from Kozhikode enters Wayanad. It is 20 km from Maison Claire in Meppadi.</p>,
    text: 'At the top of the Thamarassery churam (ghat road) on NH 766, where the road from Kozhikode enters Wayanad. It is 20 km from Maison Claire in Meppadi.' },
  { q: 'Can you park at Lakkidi viewpoint?',
    a: <p>Parking at the viewpoint itself has been banned since the August 2025 mudslides near the ninth bend. Follow the signs and the police on the day, and do not stop on the ghat road to take photos.</p>,
    text: 'Parking at the viewpoint itself has been banned since the August 2025 mudslides near the ninth bend. Follow the signs and the police on the day, and do not stop on the ghat road to take photos.' },
  { q: 'Is there an entry fee at Lakkidi viewpoint?',
    a: <p>We have not found any published entry fee. It is a roadside viewpoint rather than a ticketed site.</p>,
    text: 'We have not found any published entry fee. It is a roadside viewpoint rather than a ticketed site.' },
  { q: 'How many hairpin bends are there on the Thamarassery ghat?',
    a: <p>Nine, on a 14 km climb from Adivaram up to Lakkidi, according to Kerala Tourism.</p>,
    text: 'Nine, on a 14 km climb from Adivaram up to Lakkidi, according to Kerala Tourism.' },
  { q: 'What is the Chain Tree near Lakkidi?',
    a: <p>A tree by the main road near Lakkidi with a chain around it, which Kerala Tourism describes as steeped in local legend. It is a short stop on the same road as the viewpoint.</p>,
    text: 'A tree by the main road near Lakkidi with a chain around it, which Kerala Tourism describes as steeped in local legend. It is a short stop on the same road as the viewpoint.' },
];

export default function Page() {
  return (
    <Guide path="/lakkidi-viewpoint/" crumbs={[['/things-to-do-near-meppadi/', 'Things to do'], ['/lakkidi-viewpoint/', 'Lakkidi viewpoint']]}
      title={<>Lakkidi <em>viewpoint</em></>} headline="Lakkidi viewpoint: the view over the Thamarassery ghat, parking and tips" description={d}
      intro={<p>Lakkidi viewpoint is at the top of the Thamarassery ghat road, where you look down over the forest and the hairpin bends you have just driven up from Kozhikode. It is 20 km from Maison Claire, and since August 2025 parking at the viewpoint itself is banned.</p>}
      img="place-lakkidi" imgAlt="The view from Lakkidi over the forested ghat and its hairpin road" imgCaption={<>The view from Lakkidi over the ghat road, 20 km from the villa. Photo: <a href={commons('Lakkidi view point - vinnila2k24 (1).jpg')} target="_blank" rel="noopener">Vinayaraj</a>, <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener license">CC BY-SA 4.0</a></>}
      aside={<FactBox rows={[['From the villa', '20 km'], ['Height', 'About 700 m'], ['Entry', 'No published fee'], ['Parking', 'Banned at the viewpoint'], ['Time needed', '15 to 30 minutes'], ['Best season', 'September to February']]} />}
      sources={[
        ['Kerala Tourism: Thamarassery churam', 'https://www.keralatourism.org/destination/thamarassery-churam-unique/715/'],
        ['Onmanorama: Thamarassery ghat road reopens (Aug 2025)', 'https://www.onmanorama.com/news/kerala/2025/08/29/thamarassery-ghat-road-reopens.html'],
        ['Onmanorama: Wayanad ghat road disruptions (Jun 2026)', 'https://www.onmanorama.com/kerala/top-news/2026/06/15/wayanad-ghat-road-disruptions.html'],
        ['Onmanorama: Onam holiday rush on the ghat road (Aug 2026)', 'https://www.onmanorama.com/news/kerala/2026/08/23/onam-holiday-rush-chokes-thamarassery-ghat-road-traffic-crawls-for-hours.html'],
      ]}
      faqs={faqs}
      related={[
        ['/things-to-do-near-meppadi/', 'Things to do near Meppadi'],
        ['/pookode-lake/', 'Pookode Lake, just along the road'],
        ['/calicut-to-wayanad/', 'Calicut to Wayanad by road'],
        ['/how-to-reach-wayanad/', 'How to reach Wayanad'],
        ['/chembra-peak-trek/', 'Chembra Peak trek'],
        ['/wayanad-travel-update/', 'Wayanad travel update'],
      ]}
      stay="20 km on from Lakkidi, so the viewpoint is your welcome to Wayanad on the drive in."
      next={{ href: '/pookode-lake/', title: 'Pookode Lake', img: 'place-lakkidi' }}
      about={{ '@type': 'TouristAttraction', name: 'Lakkidi Viewpoint', address: { '@type': 'PostalAddress', addressRegion: 'Wayanad, Kerala', addressCountry: 'IN' } }}>
      <h2>What you see from Lakkidi</h2>
      <p>The Thamarassery churam is the main road up into Wayanad from Kozhikode. Kerala Tourism describes it as a 14 km climb with nine hairpin bends, starting at Adivaram at the bottom and ending at Lakkidi at the top. From the viewpoint you look back down the way you came: forested slopes falling away towards the plains, with the road folding back on itself through the bends below. On a clear morning you can see a long way. In the monsoon, cloud often fills the valley and the view comes and goes in minutes.</p>
      <p>Lakkidi is about 700 metres above sea level. You feel the change. It is usually cooler and greener than Kozhikode, and for many visitors this is the moment the trip starts to feel like Wayanad.</p>

      <h2>Parking at the viewpoint: what changed in 2025</h2>
      <p>In late August 2025, a landslip and fresh mudslides near the ninth bend closed the ghat road. When it reopened, Onmanorama reported that parking at the Lakkidi viewpoint remained prohibited. We have not seen a report that this has been lifted. In practice, that means:</p>
      <ul>
        <li>Do not plan on pulling up at the viewpoint for a long stop.</li>
        <li>Never stop on the ghat road or on a bend to take photos. It holds up traffic and is unsafe.</li>
        <li>Follow the signs and any police instructions on the day. Rules here change after heavy rain.</li>
        <li>If you want time to look around, park legally further on in Lakkidi and walk back, if that is allowed when you visit.</li>
      </ul>

      <h2>Traffic on the ghat road</h2>
      <p>The churam is a busy national highway, not a quiet scenic drive. Since 3 June 2026, multi-axle heavy vehicles have been barred from the ghat between 6 AM and 8 PM, and the National Highways Authority began widening the sixth, seventh and eighth bends. We do not know how far that work has gone, so allow extra time. On holiday weekends the climb can crawl for hours: Onmanorama reported long jams during the Onam rush in August 2026. Driving up in the morning on a weekday is usually the easiest.</p>
      <p>During heavy-rain alerts, the authorities can stop traffic on the ghat altogether. Check our <a href="/wayanad-travel-update/">Wayanad travel update</a> and local news before you set off, and see <a href="/calicut-to-wayanad/">Calicut to Wayanad</a> for the full drive.</p>

      <h2>The Chain Tree and Pookode Lake</h2>
      <p>Close to Lakkidi on the same road is the Chain Tree, a tree with a chain around it that Kerala Tourism describes as steeped in legend. A little further into Wayanad is <a href="/pookode-lake/">Pookode Lake</a>, a small forest lake with rowing boats. Together they make an easy first hour in Wayanad if you are arriving from Kozhikode or Calicut airport: the view, a short look at the Chain Tree, then tea and a boat ride at the lake.</p>

      <h2>When to go</h2>
      <p>For clear views, September to February is best, when the air is drier after the monsoon. Early morning is often the clearest time of day. In the monsoon months the ghat is at its greenest and the mist can be lovely, but the road is slower and closures are more likely.</p>

      <h2>From Lakkidi to Meppadi</h2>
      <p>Maison Claire is 20 km from Lakkidi, in Meppadi. It is a private four-bedroom villa rented whole to one group, with an infinity pool facing the hills. Check-in is by door keypad; let us know roughly when you expect to arrive when you book, ghat traffic and all. Half an hour past the viewpoint you can be in the pool. Choose dates in the booking window, or WhatsApp us about your drive.</p>
    </Guide>
  );
}
