import { meta } from '@/lib/meta';
import { Guide, FactBox } from '@/components/Guide';
import type { QA } from '@/components/Bits';
import { commons } from '@/content/places';

const d = 'Karapuzha Dam, Wayanad: timings, entry fee, the gardens and zipline, and how to pair it with Edakkal Caves. It is 24 km from our villa in Meppadi.';
export const metadata = meta('/karapuzha-dam/', 'Karapuzha Dam, Wayanad: Timings, Fees & Zipline', d, { image: 'place-karapuzha', type: 'article' });

const faqs: QA[] = [
  { q: 'What are the Karapuzha Dam timings?',
    a: <p>The Wayanad tourism council (DTPC) lists 9 AM to 6 PM. For questions on the day, the DTPC gives +91 4936 202246.</p>,
    text: 'The Wayanad tourism council (DTPC) lists 9 AM to 6 PM. For questions on the day, the DTPC gives +91 4936 202246.' },
  { q: 'What is the Karapuzha Dam entry fee?',
    a: <p>₹30 for adults and ₹10 for children under 15, according to the DTPC. The zipline and the rides in the adventure park are paid separately.</p>,
    text: 'Rs 30 for adults and Rs 10 for children under 15, according to the DTPC. The zipline and the rides in the adventure park are paid separately.' },
  { q: 'How much is the Karapuzha zipline?',
    a: <p>The DTPC lists ₹390 per person, for riders over 40 kg. Rides depend on the weather and on staff checks on the day.</p>,
    text: 'The DTPC lists Rs 390 per person, for riders over 40 kg. Rides depend on the weather and on staff checks on the day.' },
  { q: 'Can you visit Karapuzha Dam and Edakkal Caves on the same day?',
    a: <p>Yes. Both are 24 km from Maison Claire, in the same part of Wayanad. Do the Edakkal climb in the morning, because of its daily visitor limit, then spend the afternoon at Karapuzha. Remember Edakkal is closed on Mondays.</p>,
    text: 'Yes. Both are 24 km from Maison Claire, in the same part of Wayanad. Do the Edakkal climb in the morning, because of its daily visitor limit, then spend the afternoon at Karapuzha. Remember Edakkal is closed on Mondays.' },
  { q: 'Is Karapuzha Dam good for kids?',
    a: <p>Yes. It is flat and open, with gardens and walkways, and the adventure park has smaller rides. Some, like the zipline and giant swing, have a 40 kg minimum, so younger children may only be able to watch those.</p>,
    text: 'Yes. It is flat and open, with gardens and walkways, and the adventure park has smaller rides. Some, like the zipline and giant swing, have a 40 kg minimum, so younger children may only be able to watch those.' },
];

export default function Page() {
  return (
    <Guide path="/karapuzha-dam/" crumbs={[['/things-to-do-near-meppadi/', 'Things to do'], ['/karapuzha-dam/', 'Karapuzha Dam']]}
      title={<>Karapuzha <em>Dam</em></>} headline="Karapuzha Dam, Wayanad: timings, fees, gardens and zipline" description={d}
      intro={<p>Karapuzha Dam is a reservoir with landscaped gardens and a small adventure park, about 18 km from Kalpetta and 24 km from Maison Claire. The DTPC lists it as open 9 AM to 6 PM, with entry at ₹30 for adults and ₹10 for children; fees change, so confirm at the counter.</p>}
      img="place-karapuzha" imgAlt="Karapuzha reservoir with small islands and a mountain beyond" imgCaption={<>Karapuzha reservoir, 24 km from the villa. Photo: <a href={commons('Karapuzha Dam Reservoir.jpg')} target="_blank" rel="noopener">Ingo Mehling</a>, <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener license">CC BY-SA 4.0</a></>}
      aside={<FactBox rows={[['From the villa', '24 km'], ['Hours', '9 AM to 6 PM'], ['Entry', '₹30 adult, ₹10 child'], ['Zipline', '₹390 (over 40 kg)'], ['Time needed', '2 to 3 hours'], ['Best season', 'October to February']]} />}
      sources={[
        ['DTPC Wayanad: Karapuzha Dam', 'https://www.dtpcwayanad.com/destination/karapuzha-dam-wayanad'],
        ['Onmanorama: Edakkal Caves daily limit and rules (Jan 2026)', 'https://www.onmanorama.com/travel/kerala/2026/01/03/daily-limit-kerala-edakkal-caves-rules.amp.html'],
      ]}
      faqs={faqs}
      related={[
        ['/things-to-do-near-meppadi/', 'Things to do near Meppadi'],
        ['/edakkal-caves/', 'Edakkal Caves timings'],
        ['/banasura-sagar-dam/', 'Banasura Sagar Dam'],
        ['/pookode-lake/', 'Pookode Lake'],
        ['/wayanad-with-kids/', 'Wayanad with kids'],
        ['/wayanad-3-day-itinerary/', 'A 3-day Wayanad itinerary'],
      ]}
      stay="24 km from Karapuzha, and the same distance from Edakkal."
      next={{ href: '/edakkal-caves/', title: 'Edakkal Caves', img: 'place-edakkal' }}
      about={{ '@type': 'TouristAttraction', name: 'Karapuzha Dam', address: { '@type': 'PostalAddress', addressRegion: 'Wayanad, Kerala', addressCountry: 'IN' } }}>
      <h2>What to expect at Karapuzha</h2>
      <p>Karapuzha is an irrigation dam in the south-east of Wayanad, with a wide reservoir spreading out behind it. Small islands sit in the water, and on clear days you see hills on the far side. Next to the dam there are landscaped gardens and walkways, and there is an adventure park with a zipline and a set of rides.</p>
      <p>It asks very little of you. There is no steep climb and no long forest path. People come for a slow walk, a few rides, photographs over the water, and an hour on a bench while the light changes. That makes it a good afternoon after a harder morning somewhere else.</p>

      <h2>Timings and entry fee</h2>
      <p>The DTPC lists Karapuzha as open from 9 AM to 6 PM. It lists entry at ₹30 for adults and ₹10 for children under 15. Fees change; confirm at the counter. The DTPC page does not list a weekly closing day. If you want to check before you drive over, its contact numbers for the dam are +91 4936 202246 and +91 4936 247276.</p>

      <h2>Zipline and adventure park prices</h2>
      <p>The DTPC lists these, each per person. Fees change; confirm at the counter.</p>
      <ul>
        <li><b>Zipline:</b> ₹390, for riders over 40 kg.</li>
        <li><b>Giant swing:</b> ₹280, over 40 kg.</li>
        <li><b>Space tower:</b> ₹250.</li>
        <li><b>Twister</b> and <b>flying cinema:</b> ₹180 each.</li>
        <li><b>Flying chair:</b> ₹130.</li>
      </ul>
      <p>The DTPC also lists a ride for children under 40 kg and a VR zone. Rides can close in rain or wind, and staff make the final call on weight and safety. If the zipline is the main reason you are going, go earlier in the day.</p>

      <h2>Combine Karapuzha with Edakkal Caves</h2>
      <p><a href="/edakkal-caves/">Edakkal Caves</a> and Karapuzha are both 24 km from the villa, in the same corner of Wayanad near Ambalavayal, so they fit together well. Edakkal has a daily cap of 1,920 visitors and no one is allowed up to the hilltop after 4 PM, so it has to come first. A simple plan:</p>
      <ol className="route" aria-label="A day at Edakkal and Karapuzha from Meppadi">
        <li><b>Meppadi</b><span>Leave after an early breakfast</span></li>
        <li className="warn"><b>Edakkal Caves</b><span>Opens 8:30 AM, closed Mondays</span></li>
        <li><b>Lunch</b><span>Near Ambalavayal</span></li>
        <li><b>Karapuzha Dam</b><span>Gardens and rides, open until 6 PM</span></li>
        <li><b>Meppadi</b><span>Back for an evening swim</span></li>
      </ol>
      <p>Do not plan this on a Monday: Edakkal will be shut. Our <a href="/wayanad-3-day-itinerary/">3-day itinerary</a> shows how this day fits with the <a href="/chembra-peak-trek/">Chembra trek</a> and the waterfalls near Meppadi.</p>

      <h2>Getting there</h2>
      <p>Karapuzha is about 18 km from the Kalpetta bus stand and 24 km from Maison Claire in Meppadi. It is a straightforward drive on local roads, and you do not need a jeep or a guide. If you are coming from Edakkal, it is in the same area, so the move between the two is short.</p>

      <h2>Tips for families</h2>
      <p>Karapuzha is one of the easier places in Wayanad to take small children or grandparents. The paths are level, there is space to run about, and you can leave whenever someone is tired. Check the 40 kg rules before promising the zipline to a child, so nobody is disappointed at the counter. Bring a cap and water for a few hours outdoors, and carry cash for tickets and rides. Our <a href="/wayanad-with-kids/">Wayanad with kids</a> guide has more easy days out.</p>

      <h2>When to go</h2>
      <p>The reservoir is fuller after the monsoon, and the gardens are green from September onwards. October to February brings clearer skies and cooler afternoons, which suits a place where you are outdoors the whole time. Late afternoon is the nicest time to be by the water.</p>

      <h2>Back at the villa</h2>
      <p>Maison Claire is a private four-bedroom pool villa in Meppadi, rented whole to one group. After a day out, there is a pool facing the hills with underwater lights for a swim after dark, and a full kitchen and dining table for 8. Leave Karapuzha in the late afternoon light and you are back for that swim within the hour. Look for free dates in the booking window, or ask us anything on WhatsApp.</p>
    </Guide>
  );
}
