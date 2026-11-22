import { meta } from '@/lib/meta';
import { Guide, FactBox } from '@/components/Guide';
import type { QA } from '@/components/Bits';
import { commons } from '@/content/places';

const d = 'Edakkal Caves timings: entry from 8:30 AM, no climb after 4 PM, closed Mondays, a cap of 1,920 visitors a day. Fees, the climb and tips.';
export const metadata = meta('/edakkal-caves/', 'Edakkal Caves Timings, Ticket Price & Daily Limit', d, { image: 'place-edakkal', type: 'article' });

const faqs: QA[] = [
  { q: 'What are the Edakkal Caves timings?',
    a: <p>Entry starts at 8:30 AM, and visitors are not allowed up to the hilltop after 4 PM. The caves are closed on Mondays.</p>,
    text: 'Entry starts at 8:30 AM, and visitors are not allowed up to the hilltop after 4 PM. The caves are closed on Mondays.' },
  { q: 'Is Edakkal Caves open on Monday?',
    a: <p>No. Edakkal Caves are closed every Monday. Plan your visit for another day of the week.</p>,
    text: 'No. Edakkal Caves are closed every Monday. Plan your visit for another day of the week.' },
  { q: 'What is the Edakkal Caves ticket price?',
    a: <p>As reported in January 2026: ₹50 for Indian visitors, ₹60 for foreign visitors, ₹25 for a still camera, ₹100 for a video camera and ₹70 for the jeep shuttle. Fees can change, so carry some cash.</p>,
    text: 'As reported in January 2026: Rs 50 for Indian visitors, Rs 60 for foreign visitors, Rs 25 for a still camera, Rs 100 for a video camera and Rs 70 for the jeep shuttle. Fees can change, so carry some cash.' },
  { q: 'Is there a daily limit at Edakkal Caves?',
    a: <p>Yes. The Archaeology Department allows 1,920 visitors a day. The limit is often reached by the afternoon, especially in winter, so arrive in the morning.</p>,
    text: 'Yes. The Archaeology Department allows 1,920 visitors a day. The limit is often reached by the afternoon, especially in winter, so arrive in the morning.' },
  { q: 'Is the Edakkal climb hard?',
    a: <p>It is a long, steep climb up the hill to the caves. Fit adults and older children manage it with rests. It is hard going for anyone with knee or heart problems, so they may prefer to wait below.</p>,
    text: 'It is a long, steep climb up the hill to the caves. Fit adults and older children manage it with rests. It is hard going for anyone with knee or heart problems, so they may prefer to wait below.' },
];

export default function Page() {
  return (
    <Guide path="/edakkal-caves/" crumbs={[['/things-to-do-near-meppadi/', 'Things to do'], ['/edakkal-caves/', 'Edakkal Caves']]}
      title={<>Edakkal Caves <em>timings</em></>} headline="Edakkal Caves timings, ticket price and daily visitor limit" description={d}
      intro={<p>Edakkal Caves open at 8:30 AM, no one is allowed up to the hilltop after 4 PM, and the site is closed on Mondays. Only 1,920 visitors are let in each day, so arrive in the morning. The caves are 24 km from Maison Claire.</p>}
      img="place-edakkal" imgAlt="Ancient carved figures and patterns on the rock walls of Edakkal Caves" imgCaption={<>Carvings inside Edakkal Caves, 24 km from the villa. Photo: <a href={commons('Edakkal Caves - Petroglyphs - 4.jpg')} target="_blank" rel="noopener">Ingo Mehling</a>, <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener license">CC BY-SA 4.0</a></>}
      aside={<FactBox rows={[['From the villa', '24 km'], ['Hours', '8:30 AM, last climb 4 PM'], ['Closed', 'Mondays'], ['Entry', '₹50 (Indian)'], ['Daily limit', '1,920 visitors'], ['Time needed', '2 to 3 hours']]} />}
      sources={[
        ['Onmanorama: Edakkal Caves daily limit and rules (Jan 2026)', 'https://www.onmanorama.com/travel/kerala/2026/01/03/daily-limit-kerala-edakkal-caves-rules.amp.html'],
        ['DTPC Wayanad: Edakkal Caves', 'https://www.dtpcwayanad.com/destination/edakkal-caves-wayanad'],
      ]}
      faqs={faqs}
      related={[
        ['/things-to-do-near-meppadi/', 'Things to do near Meppadi'],
        ['/karapuzha-dam/', 'Karapuzha Dam, nearby'],
        ['/chembra-peak-trek/', 'Chembra Peak trek'],
        ['/wayanad-3-day-itinerary/', 'A 3-day Wayanad itinerary'],
        ['/wayanad-with-kids/', 'Wayanad with kids'],
      ]}
      stay="24 km from Edakkal, so a morning start is easy."
      next={{ href: '/karapuzha-dam/', title: 'Karapuzha Dam', img: 'place-karapuzha' }}
      about={{ '@type': 'TouristAttraction', name: 'Edakkal Caves', address: { '@type': 'PostalAddress', addressRegion: 'Wayanad, Kerala', addressCountry: 'IN' } }}>
      <h2>Edakkal Caves timings at a glance</h2>
      <ul>
        <li><b>Opens:</b> 8:30 AM.</li>
        <li><b>Last entry to the hilltop:</b> 4 PM. After that you will be turned back at the gate.</li>
        <li><b>Closed:</b> every Monday.</li>
        <li><b>Daily limit:</b> 1,920 visitors, set by the Archaeology Department. It is often reached by the afternoon, especially in the winter season.</li>
      </ul>
      <p>Those last two points catch people out. If you drive over on a Monday, or turn up mid-afternoon on a busy December day, you may not get in at all. The safest plan is to arrive close to opening time on any day from Tuesday to Sunday. If your trip runs over a Monday, use that day for places near Meppadi instead, such as <a href="/soochipara-waterfalls/">Soochipara Falls</a> or the <a href="/900-kandi-glass-bridge/">900 Kandi glass bridge</a>.</p>

      <h2>What Edakkal is</h2>
      <p>Edakkal is not really a cave in the usual sense. It is a gap between huge boulders high on a hill near Ambalavayal, about 10 to 13 km from Sulthan Bathery. The rock walls inside are covered in very old carvings: human figures, animals and patterns cut into the stone. It is one of the best known historic sites in Kerala. The carvings show up best when you stand back and let your eyes adjust.</p>

      <h2>Ticket price</h2>
      <p>Onmanorama reported these fees in January 2026:</p>
      <ul>
        <li>Indian visitors: ₹50</li>
        <li>Foreign visitors: ₹60</li>
        <li>Jeep shuttle: ₹70</li>
        <li>Still camera: ₹25</li>
        <li>Video camera: ₹100</li>
      </ul>
      <p>Fees in Wayanad do change, and the DTPC page may show slightly different figures from time to time. Carry cash in small notes.</p>

      <h2>The climb</h2>
      <p>The visit involves a long climb from the road to the caves, steep in places. Take it slowly and stop when you need to. Most fit adults and older children manage it fine. For grandparents, anyone with knee or heart trouble, or a parent carrying a toddler, it is a lot. There is no shame in one person waiting below with the smaller ones while the rest go up. Wear shoes with grip, not sandals, and bring water.</p>

      <h2>Getting there from Meppadi</h2>
      <p>Edakkal is 24 km from Maison Claire by road, near Ambalavayal and about 10 to 13 km from Sulthan Bathery. The fees include a ₹70 jeep shuttle, and the rest of the way up is on foot. Leave the villa soon after breakfast so you are at the gate around opening time. On a weekend in December or January, that early start is the difference between getting in and being turned away once the 1,920 limit is reached.</p>

      <h2>What to bring</h2>
      <ul>
        <li>Shoes with grip for the climb.</li>
        <li>Water in a steel or reusable bottle. The caves and the area around them are a plastic-free zone, so leave plastic bags and wrapped snacks in the car.</li>
        <li>Cash in small notes for tickets, the jeep and camera fees.</li>
        <li>A cap. The walk up is tiring in the midday sun.</li>
      </ul>

      <h2>Combine Edakkal with Karapuzha Dam</h2>
      <p>Edakkal and <a href="/karapuzha-dam/">Karapuzha Dam</a> are both 24 km from the villa, in the same part of Wayanad, so they make a good day together. Climb to the caves first thing, while it is cool and before the limit fills. Have lunch nearby, then spend a slower afternoon in the gardens at Karapuzha. Our <a href="/wayanad-3-day-itinerary/">3-day Wayanad itinerary</a> shows how this fits around the <a href="/chembra-peak-trek/">Chembra trek</a> and the waterfalls closer to Meppadi.</p>

      <h2>Coming back to Meppadi</h2>
      <p>Maison Claire is a private four-bedroom villa in Meppadi, rented whole to one group. After the climb, your own pool facing the hills is waiting, with underwater lights for an evening swim. Choose dates that keep your cave day off a Monday in the booking window, and WhatsApp us if you want to talk the day through.</p>
    </Guide>
  );
}
