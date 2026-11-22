import { meta } from '@/lib/meta';
import { Guide, FactBox } from '@/components/Guide';
import type { QA } from '@/components/Bits';

const d = 'Banasura Sagar Dam, Wayanad: timings, entry fee, boating prices for speed boat, shikara and a 20-seat pontoon, the zipline, and how to get there.';
export const metadata = meta('/banasura-sagar-dam/', 'Banasura Sagar Dam: Boating Prices, Timings & Zipline', d, { image: 'pool-infinity-mountain', type: 'article' });

const faqs: QA[] = [
  { q: 'What are the Banasura Sagar Dam timings?',
    a: <p>The Wayanad tourism council (DTPC) lists 9 AM to 5:30 PM. Boats can stop running in bad weather, so call +91 4936 273460 if you are planning around a boat ride.</p>,
    text: 'The Wayanad tourism council (DTPC) lists 9 AM to 5:30 PM. Boats can stop running in bad weather, so call +91 4936 273460 if you are planning around a boat ride.' },
  { q: 'What is the Banasura Sagar Dam entry fee?',
    a: <p>₹40 for adults and ₹20 for children, according to the DTPC. Boating, the zipline and cameras are charged separately.</p>,
    text: 'Rs 40 for adults and Rs 20 for children, according to the DTPC. Boating, the zipline and cameras are charged separately.' },
  { q: 'How much is boating at Banasura Sagar Dam?',
    a: <p>DTPC prices: speed boat ₹1,000 for up to 5 people, shikara ₹1,200 for up to 6, pontoon ₹2,000 for up to 20, and a two-seat kayak ₹450 for 30 minutes. Prices are per boat, not per person.</p>,
    text: 'DTPC prices: speed boat Rs 1,000 for up to 5 people, shikara Rs 1,200 for up to 6, pontoon Rs 2,000 for up to 20, and a two-seat kayak Rs 450 for 30 minutes. Prices are per boat, not per person.' },
  { q: 'Is there a zipline at Banasura Sagar Dam?',
    a: <p>Yes. The DTPC lists a zipline at ₹350 per person. Rides depend on the weather and on staff checks on the day.</p>,
    text: 'Yes. The DTPC lists a zipline at Rs 350 per person. Rides depend on the weather and on staff checks on the day.' },
  { q: 'How far is Banasura Sagar Dam from Kalpetta?',
    a: <p>About 21 km by road from the Kalpetta bus stand. From Maison Claire in Meppadi it is roughly 35 km, going through Kalpetta.</p>,
    text: 'About 21 km by road from the Kalpetta bus stand. From Maison Claire in Meppadi it is roughly 35 km, going through Kalpetta.' },
];

export default function Page() {
  return (
    <Guide path="/banasura-sagar-dam/" crumbs={[['/things-to-do-near-meppadi/', 'Things to do'], ['/banasura-sagar-dam/', 'Banasura Sagar Dam']]}
      title={<>Banasura Sagar <em>Dam</em></>} headline="Banasura Sagar Dam: boating prices, timings and the zipline" description={d}
      intro={<p>Banasura Sagar Dam is a large reservoir about 21 km from Kalpetta. The DTPC lists it as open 9 AM to 5:30 PM, with entry at ₹40 for adults and a pontoon for up to 20 at ₹2,000; fees change, so confirm at the counter.</p>}
      img="pool-infinity-mountain" imgAlt="Infinity pool at Maison Claire facing the Wayanad hills in morning light" imgCaption="The pool at Maison Claire in Meppadi, roughly 35 km from Banasura Sagar Dam."
      aside={<FactBox rows={[['From the villa', 'About 35 km'], ['From Kalpetta', 'About 21 km'], ['Hours', '9 AM to 5:30 PM'], ['Entry', '₹40 adult, ₹20 child'], ['Time needed', '2 to 3 hours'], ['Best season', 'September to February']]} />}
      sources={[
        ['DTPC Wayanad: Banasura Sagar Dam', 'https://www.dtpcwayanad.com/destination/banasura-sagar-dam-wayanad'],
        ['Onmanorama: Wayanad lifts ban on tourism centres (Aug 2025)', 'https://www.onmanorama.com/news/kerala/2025/08/02/wayanad-lifts-ban-on-tourism-centres.html'],
      ]}
      faqs={faqs}
      related={[
        ['/things-to-do-near-meppadi/', 'Things to do near Meppadi'],
        ['/pookode-lake/', 'Pookode Lake'],
        ['/karapuzha-dam/', 'Karapuzha Dam'],
        ['/group-stay-villa-wayanad/', 'A villa for groups'],
        ['/wayanad-3-day-itinerary/', 'A 3-day Wayanad itinerary'],
      ]}
      stay="About 35 km from Banasura, through Kalpetta. Room for the whole group of up to 12."
      next={{ href: '/pookode-lake/', title: 'Pookode Lake', img: 'terrace-view' }}
      about={{ '@type': 'TouristAttraction', name: 'Banasura Sagar Dam', address: { '@type': 'PostalAddress', addressRegion: 'Wayanad, Kerala', addressCountry: 'IN' } }}>
      <h2>What Banasura Sagar is</h2>
      <p>Banasura Sagar is a large dam in the north-west of Wayanad, near the Banasura hills. The water behind it spreads into a wide reservoir with small islands, and the hills rise straight up from the far shore. It is one of the busiest places in the district on weekends, mostly because of the boats. A visit is easy going: there is no long walk or steep climb, which makes it a good day for mixed groups and grandparents.</p>

      <h2>Timings and entry fee</h2>
      <p>The DTPC lists the dam as open from 9 AM to 5:30 PM. The DTPC lists entry at ₹40 for adults and ₹20 for children, a still camera at ₹50 extra, and a ₹25 van service for the round trip. Fees change; confirm at the counter. All tickets are sold on site; there is no online booking. For questions on the day, the DTPC gives +91 4936 273460.</p>

      <h2>Boating prices</h2>
      <p>The DTPC lists these prices. Fees change; confirm at the counter. They are per boat, not per person, so a full boat works out much cheaper each.</p>
      <ul>
        <li><b>Speed boat:</b> ₹1,000 for up to 5 people.</li>
        <li><b>Shikara:</b> ₹1,200 for up to 6 people.</li>
        <li><b>Pontoon:</b> ₹2,000 for up to 20 people.</li>
        <li><b>Kayak:</b> ₹450 for two people, or ₹250 for a single seat, for 30 minutes.</li>
        <li><b>Korakil</b> (round coracle): ₹600 for up to 4 people.</li>
      </ul>
      <p>The pontoon is the one to know about if you are travelling as a big family or a group of friends. Twenty people fit, so a group of 12 can all go out together on one ticket. Queues for boats can build up from late morning on weekends and holidays. Boating can be stopped in high wind or heavy rain.</p>

      <h2>Zipline and other activities</h2>
      <p>The DTPC lists a zipline at ₹350 per person, and lists a few other water rides alongside the boats. Weight limits and safety checks are decided by the staff on the day. If anyone in your group is set on the zipline, go earlier rather than later, as it is popular and can close when the weather turns.</p>

      <h2>How to get there</h2>
      <p>The dam is about 21 km by road from the Kalpetta bus stand. From Maison Claire in Meppadi, you drive to Kalpetta first (about 12 km) and on from there, roughly 35 km in all. That is far enough that it makes sense as a half-day or a day out, rather than a quick stop. It pairs well with <a href="/pookode-lake/">Pookode Lake</a> on the Vythiri side of Kalpetta, if you want a day on the water. For the reservoir closer to Ambalavayal, see <a href="/karapuzha-dam/">Karapuzha Dam</a>.</p>

      <h2>Tips for the day</h2>
      <ul>
        <li>Carry cash. Tickets, boats and the zipline are paid on site.</li>
        <li>Wear life jackets on every boat, and keep children seated.</li>
        <li>Bring a cap and sunscreen: there is little shade out on the water.</li>
        <li>On weekends, arrive close to opening time and book your boat first.</li>
      </ul>

      <h2>When to go</h2>
      <p>The reservoir is fullest after the monsoon, from about September. From October to February the weather is usually dry and the mornings clear, which is the best time for the boats and the views. In the monsoon months, rides are more likely to stop. Weekdays are noticeably calmer than weekends.</p>

      <h2>A villa for the whole group</h2>
      <p>If the pontoon appeals because your group is large, Maison Claire may suit you too. It is rented whole: four king bedrooms with their own bathrooms, sleeping 8, or up to 12 with one extra guest in each room, and a private infinity pool facing the hills. See our <a href="/group-stay-villa-wayanad/">group stays</a> page. A day on the water with twelve people ends well with a pool nobody else uses. Check free dates in the booking window, or WhatsApp us to plan the day.</p>
    </Guide>
  );
}
