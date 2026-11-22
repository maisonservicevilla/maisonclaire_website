import { meta } from '@/lib/meta';
import { Guide, FactBox } from '@/components/Guide';
import { commons } from '@/content/places';

const d = 'Kozhikode to Wayanad distance: about 76 km to Meppadi, 87–92 km from Calicut airport. The Thamarassery churam, heavy-vehicle hours and when to drive.';
export const metadata = meta('/calicut-to-wayanad/', 'Kozhikode to Wayanad Distance: Calicut Route & Churam Tips', d, { image: 'place-lakkidi', type: 'article' });

export default function Page() {
  return (
    <Guide path="/calicut-to-wayanad/" crumbs={[['/how-to-reach-wayanad/', 'How to reach Wayanad'], ['/calicut-to-wayanad/', 'Calicut to Wayanad']]}
      title={<>Calicut to Wayanad <em>by road</em></>} headline="Kozhikode to Wayanad distance: the Calicut route, the churam and the best time to drive" description={d}
      intro={<p>Kozhikode to Meppadi in Wayanad is about 76 km by road, roughly 1 hour 20 minutes with a clear road and closer to 2 hours on a normal day. From Calicut airport at Karipur it is about 87 to 92 km. Either way you climb the Thamarassery churam, the nine-bend ghat road up to Lakkidi.</p>}
      img="place-lakkidi" imgAlt="The view from Lakkidi over the forested ghat and its hairpin road"
      imgCaption={<>The view down the Thamarassery churam from Lakkidi, 20 km from the villa. Photo: <a href={commons('Lakkidi view point - vinnila2k24 (1).jpg')} target="_blank" rel="noopener">Vinayaraj</a>, <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener license">CC BY-SA 4.0</a></>}
      aside={<FactBox rows={[['From Kozhikode city', 'About 76 km'], ['From Calicut airport', 'About 87–92 km'], ['From Kozhikode station', 'About 78 km'], ['Drive time', 'About 1 h 20 min to 2 h'], ['Ghat road', 'Thamarassery churam, 9 bends'], ['Heavy lorries barred', '6 AM to 8 PM (since June 2026, check)']]} />}
      sources={[
        ['Kerala Tourism: Thamarassery Churam', 'https://www.keralatourism.org/destination/thamarassery-churam-unique/715/'],
        ['Onmanorama: widening works and snarls on the ghat road (June 2026)', 'https://www.onmanorama.com/kerala/top-news/2026/06/15/wayanad-ghat-road-disruptions.html'],
        ['Onmanorama: Onam holiday rush chokes the ghat road (August 2026)', 'https://www.onmanorama.com/news/kerala/2026/08/23/onam-holiday-rush-chokes-thamarassery-ghat-road-traffic-crawls-for-hours.html'],
        ['Wikipedia: Transportation in Wayanad (ghat roads)', 'https://en.wikipedia.org/wiki/Transportation_in_Wayanad'],
      ]}
      faqs={[
        { q: 'What is the distance from Kozhikode to Wayanad?', a: <p>Kozhikode to Meppadi is about 76 km by road. Kalpetta, the district town, is about 70 km from Kozhikode by the Thamarassery road. Allow 1 hour 20 minutes with a clear road and up to 2 hours on a normal day.</p>, text: 'Kozhikode to Meppadi is about 76 km by road. Kalpetta, the district town, is about 70 km from Kozhikode by the Thamarassery road. Allow 1 hour 20 minutes with a clear road and up to 2 hours on a normal day.' },
        { q: 'How far is Calicut airport from Wayanad?', a: <p>Calicut International Airport at Karipur is about 87 to 92 km from Meppadi. Plan on roughly 2 to 2.5 hours by taxi, longer on holidays when the churam is busy.</p>, text: 'Calicut International Airport at Karipur is about 87 to 92 km from Meppadi. Plan on roughly 2 to 2.5 hours by taxi, longer on holidays when the churam is busy.' },
        { q: 'How many hairpin bends are there on the Thamarassery churam?', a: <p>Nine. The ghat road climbs about 14 km from Adivaram to Lakkidi, the top of the pass.</p>, text: 'Nine. The ghat road climbs about 14 km from Adivaram to Lakkidi, the top of the pass.' },
        { q: 'Are heavy vehicles allowed on the Thamarassery ghat road?', a: <p>Since June 2026, multi-axle heavy vehicles have been kept off the churam from 6 AM to 8 PM while the bends are widened. Cars can use it at any hour. Rules can change, so check local news before you travel.</p>, text: 'Since June 2026, multi-axle heavy vehicles have been kept off the churam from 6 AM to 8 PM while the bends are widened. Cars can use it at any hour. Rules can change, so check local news before you travel.' },
        { q: 'Is there another road from Kozhikode to Wayanad?', a: <p>Yes. The Kuttiyadi ghat road via Perambra, Kuttiyadi and Padinjarathara climbs into north Wayanad and reaches Kalpetta in about 99 km. It is narrower and slower, but useful when the churam is blocked.</p>, text: 'Yes. The Kuttiyadi ghat road via Perambra, Kuttiyadi and Padinjarathara climbs into north Wayanad and reaches Kalpetta in about 99 km. It is narrower and slower, but useful when the churam is blocked.' },
      ]}
      related={[['/how-to-reach-wayanad/', 'How to reach Wayanad'], ['/lakkidi-viewpoint/', 'Lakkidi Viewpoint'], ['/malappuram-to-wayanad/', 'Malappuram to Wayanad'], ['/kochi-to-wayanad/', 'Kochi to Wayanad'], ['/weekend-villa-wayanad/', 'A weekend villa in Wayanad'], ['/wayanad-travel-update/', 'Wayanad travel update']]}
      stay="About 76 km from Kozhikode, 20 km past the top of the churam."
      next={{ href: '/lakkidi-viewpoint/', title: 'Lakkidi Viewpoint', img: 'place-lakkidi' }}
      updated={['2026-11-22', '22 November 2026']}
      about={{ '@type': 'Trip', name: 'Kozhikode to Wayanad by road' }}>
      <h2>The route from Kozhikode city</h2>
      <ol className="route" aria-label="Route from Kozhikode to Meppadi">
        <li><b>Kozhikode</b><span>Take NH 766, the Wayanad road</span></li>
        <li><b>Kunnamangalam</b><span>Out of the city traffic</span></li>
        <li><b>Koduvally</b><span>Good for a tea stop</span></li>
        <li><b>Thamarassery</b><span>Last town before the climb</span></li>
        <li className="warn"><b>Adivaram to Lakkidi</b><span>The churam: 14 km, 9 hairpin bends</span></li>
        <li><b>Vythiri</b><span>On the Wayanad plateau</span></li>
        <li><b>Chundale</b><span>Turn off for Meppadi</span></li>
        <li><b>Meppadi</b><span>Maison Claire</span></li>
      </ol>
      <p>From Kozhikode, follow NH 766 east through Kunnamangalam, Koduvally and Thamarassery. The ghat begins at Adivaram and tops out at Lakkidi. Carry on past Vythiri to Chundale, where the road to Meppadi branches off south. The full trip is about 76 km. On a quiet morning it takes about 1 hour 20 minutes; most days, allow closer to 2 hours.</p>

      <h2>From Calicut airport at Karipur</h2>
      <p>Calicut International Airport is the nearest airport to Wayanad and to the villa, about 87 to 92 km away. From the airport, drivers usually head towards Ramanattukara and the Kozhikode bypass, then pick up NH 766 for Wayanad. You skip the centre of Kozhikode, but you still climb the same churam. Plan on roughly 2 to 2.5 hours by taxi. If your flight lands in the evening on a long weekend, add more.</p>
      <p>Coming by train instead? Kozhikode railway station is about 78 km from the villa. Taxis wait outside, and KSRTC buses run up to Kalpetta, about 12 km from Meppadi.</p>

      <h2>Driving the Thamarassery churam</h2>
      <p>The churam is the one part of this trip that needs thought. It runs about 14 km from Adivaram at the bottom to Lakkidi at the top, around nine hairpin bends, and it is the main road between Kozhikode and Wayanad, so it carries buses, tourist cars and goods traffic.</p>
      <ul>
        <li><b>Heavy-vehicle hours.</b> Since 3 June 2026, multi-axle heavy vehicles have been barred from 6 AM to 8 PM while the national highway authority widens bends six to eight. That makes daytime easier for cars, and the night heavier with lorries.</li>
        <li><b>Holiday jams.</b> On long weekends and festival days the ghat can crawl for hours. During the Onam rush in August 2026, traffic stood still for long stretches.</li>
        <li><b>No parking at Lakkidi.</b> Parking at the Lakkidi viewpoint has been banned since the road reopened after the August 2025 mudslide near the ninth bend. Enjoy the view from the car, or stop further on where it is allowed.</li>
        <li><b>Monsoon.</b> From June to September the road is wet and slower, and it can close for a day after a landslip. Check our <a href="/wayanad-travel-update/">Wayanad travel update</a> before you set off.</li>
      </ul>
      <p>We have not been able to confirm how far the widening works have got. If you are travelling soon, a quick look at local news on the morning of your trip is worth the minute.</p>

      <h2>The best time of day to drive</h2>
      <p>Start early. Leaving Kozhikode between 6 and 9 AM usually means a quiet churam, cooler air and daylight for the bends. Late morning and early afternoon are fine on weekdays. Try to avoid the afternoon of the first day of a long weekend and the evening of the last, when traffic is heaviest in both directions. After 8 PM the heavy lorries come back on, so night driving on the ghat is slower and less pleasant, even though it is open.</p>

      <h2>If the churam is blocked: Kuttiyadi and Nadukani</h2>
      <p>There are other ways up. The Kuttiyadi ghat road runs from Kozhikode via Perambra and Kuttiyadi, through Thottilpalam and Padinjarathara in north Wayanad, reaching Kalpetta in about 99 km. It is a narrower road and less suited to big vehicles, but it is a fair escape when the main ghat is jammed. Add about 12 km from Kalpetta to Meppadi.</p>
      <p>The second option goes south through Mukkam, Areekode and Nilambur and climbs the Nadukani ghat. It is longer, but it lands near Meppadi at Vaduvanchal. The <a href="/malappuram-to-wayanad/">Malappuram to Wayanad</a> page has that route in detail.</p>

      <h2>Arriving at Maison Claire</h2>
      <p>The villa is in Kappamkolly, Meppadi, about 20 km past Lakkidi. Check-in is by door keypad; tell us roughly when you will clear the churam when you book. Restaurants are about 200 m away for a first dinner. If the ghat news looks bad on the morning you travel, WhatsApp us on +91 80060 01367; for dates and the whole-villa price, use the booking window. For more on the area, see <a href="/meppadi/">Meppadi</a> and <a href="/things-to-do-near-meppadi/">things to do near Meppadi</a>.</p>
    </Guide>
  );
}
