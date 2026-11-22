import { meta } from '@/lib/meta';
import { Guide, FactBox } from '@/components/Guide';
import type { QA } from '@/components/Bits';
import { commons } from '@/content/places';

const d = 'Pookode Lake, Wayanad: boating rates, entry fee and timings, plus why this lake near Lakkidi makes an easy stop on the drive up from Kozhikode.';
export const metadata = meta('/pookode-lake/', 'Pookode Lake, Wayanad: Boating Rates & Timings', d, { image: 'terrace-view', type: 'article' });

const faqs: QA[] = [
  { q: 'What are the Pookode Lake timings?',
    a: <p>The Wayanad tourism council (DTPC) lists entry from 9 AM to 6 PM, with boating from 9 AM to 5 PM.</p>,
    text: 'The Wayanad tourism council (DTPC) lists entry from 9 AM to 6 PM, with boating from 9 AM to 5 PM.' },
  { q: 'What is the Pookode Lake entry fee?',
    a: <p>₹40 for adults and ₹30 for children, according to the DTPC. Boating is paid separately. Tickets are sold at the gate.</p>,
    text: 'Rs 40 for adults and Rs 30 for children, according to the DTPC. Boating is paid separately. Tickets are sold at the gate.' },
  { q: 'How much is boating at Pookode Lake?',
    a: <p>DTPC rates are ₹300 for a 2-seat boat, ₹450 for a 4-seat boat and ₹700 for a 7-seat rowing boat. The price is per boat.</p>,
    text: 'DTPC rates are Rs 300 for a 2-seat boat, Rs 450 for a 4-seat boat and Rs 700 for a 7-seat rowing boat. The price is per boat.' },
  { q: 'Where is Pookode Lake?',
    a: <p>Near Lakkidi and Vythiri, on the main road between Kozhikode and Kalpetta, about 12 km from Kalpetta. You pass close to it as you come up the Thamarassery ghat into Wayanad.</p>,
    text: 'Near Lakkidi and Vythiri, on the main road between Kozhikode and Kalpetta, about 12 km from Kalpetta. You pass close to it as you come up the Thamarassery ghat into Wayanad.' },
  { q: 'How long do you need at Pookode Lake?',
    a: <p>About an hour is enough for a boat ride and a short walk by the water. Add time if you want to walk all the way round or stop for a snack.</p>,
    text: 'About an hour is enough for a boat ride and a short walk by the water. Add time if you want to walk all the way round or stop for a snack.' },
];

export default function Page() {
  return (
    <Guide path="/pookode-lake/" crumbs={[['/things-to-do-near-meppadi/', 'Things to do'], ['/pookode-lake/', 'Pookode Lake']]}
      title={<>Pookode <em>Lake</em></>} headline="Pookode Lake, Wayanad: boating rates, timings and entry fee" description={d}
      intro={<p>Pookode Lake is a small freshwater lake in the forest near Lakkidi, about 12 km from Kalpetta. The DTPC lists it as open 9 AM to 6 PM, with entry at ₹40 for adults and a 4-seat boat at ₹450; fees change, so confirm at the counter.</p>}
      img="place-lakkidi" imgAlt="The view from Lakkidi over the forested ghat and its hairpin road" imgCaption={<>This is Lakkidi viewpoint, a short way from Pookode Lake on the same road. We do not have a photo of the lake itself. Photo: <a href={commons('Lakkidi view point - vinnila2k24 (1).jpg')} target="_blank" rel="noopener">Vinayaraj</a>, <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener license">CC BY-SA 4.0</a></>}
      aside={<FactBox rows={[['Where', 'Near Lakkidi, 12 km from Kalpetta'], ['Entry hours', '9 AM to 6 PM'], ['Boating', '9 AM to 5 PM'], ['Entry', '₹40 adult, ₹30 child'], ['Time needed', 'About an hour'], ['Best season', 'September to March']]} />}
      sources={[
        ['DTPC Wayanad: Pookode Lake', 'https://www.dtpcwayanad.com/destination/pookode-lake-wayanad'],
        ['Kerala Tourism: Thamarassery churam', 'https://www.keralatourism.org/destination/thamarassery-churam-unique/715/'],
      ]}
      faqs={faqs}
      related={[
        ['/things-to-do-near-meppadi/', 'Things to do near Meppadi'],
        ['/lakkidi-viewpoint/', 'Lakkidi viewpoint'],
        ['/banasura-sagar-dam/', 'Banasura Sagar Dam'],
        ['/calicut-to-wayanad/', 'Calicut to Wayanad by road'],
        ['/karapuzha-dam/', 'Karapuzha Dam'],
      ]}
      stay="A stop on the way in from Kozhikode, then on to the villa in Meppadi."
      next={{ href: '/lakkidi-viewpoint/', title: 'Lakkidi viewpoint', img: 'place-lakkidi' }}
      about={{ '@type': 'TouristAttraction', name: 'Pookode Lake', address: { '@type': 'PostalAddress', addressRegion: 'Wayanad, Kerala', addressCountry: 'IN' } }}>
      <h2>What Pookode Lake is like</h2>
      <p>Pookode is a natural lake, not a dam, with forest around it. It is much smaller than the reservoirs at <a href="/banasura-sagar-dam/">Banasura</a> and <a href="/karapuzha-dam/">Karapuzha</a>, which is why it feels calm: close rather than vast, and a boat ride does not take long. There is a path by the water for walking. The DTPC also lists an aquarium, a fish spa and small shops for souvenirs and snacks near the entrance.</p>
      <p>It is a gentle place. No climbing, no long walk, nothing that needs planning. That is why it works so well with children, older relatives, or anyone who has just spent hours in a car.</p>

      <h2>Boating rates</h2>
      <p>The DTPC lists these prices, per boat. Fees change; confirm at the counter.</p>
      <ul>
        <li><b>2-seat boat:</b> ₹300</li>
        <li><b>4-seat boat:</b> ₹450</li>
        <li><b>7-seat rowing boat:</b> ₹700</li>
      </ul>
      <p>A family of four fits in one 4-seat boat. A group of 12 would need two 7-seat boats, or a mix. Boating runs from 9 AM to 5 PM, an hour before the gate closes, so do not leave it to the last minute. Boats can be stopped in heavy rain.</p>

      <h2>Timings and entry fee</h2>
      <p>The DTPC lists the lake as open from 9 AM to 6 PM, with entry at ₹40 for adults and ₹30 for children. Fees change; confirm at the counter. Tickets are sold at the gate only. For questions, the DTPC lists +91 75938 92951. Weekends and holidays are the busiest times, so a weekday morning is calmer.</p>

      <h2>A good stop on arrival day</h2>
      <p>If you are coming from Kozhikode, Calicut airport or the railway station, you climb the Thamarassery ghat road, 14 km and nine hairpin bends, up to Lakkidi at the top. The <a href="/lakkidi-viewpoint/">Lakkidi viewpoint</a> and the Chain Tree are right there, and Pookode Lake is a little further along the same road as you head into Wayanad.</p>
      <p>That makes it an easy first stop. Stretch your legs, take a short boat ride, have tea and a snack, then carry on to Meppadi. It breaks up the drive without adding a detour. If the ghat was slow, it also gives everyone a calm hour before you reach the villa. Our <a href="/calicut-to-wayanad/">Calicut to Wayanad</a> guide covers the drive in more detail.</p>

      <h2>Tips for a short visit</h2>
      <ul>
        <li>Carry cash for tickets and the boat. Card payment may not be available.</li>
        <li>Life jackets are worth asking for, especially for children. Keep them on for the whole ride.</li>
        <li>Paths by the water can be muddy after rain, so wear shoes you do not mind getting wet.</li>
        <li>If you only have half an hour, skip the extras and take a 2-seat or 4-seat boat out.</li>
        <li>Coming from Calicut airport with a big group? Agree who goes in which boat before you reach the counter. It saves time at a busy gate.</li>
      </ul>

      <h2>Pookode or Banasura?</h2>
      <p>Both have boats, but they are very different outings. Pookode is small, calm and on the main road, so it is easy to fit in on the way somewhere else. <a href="/banasura-sagar-dam/">Banasura Sagar</a> is a large reservoir about 21 km from Kalpetta, with speed boats, a 20-seat pontoon and a zipline, and it needs a half-day of its own. If you want a quiet row on arrival day, choose Pookode. If you want a bigger day on the water with the whole group, choose Banasura.</p>

      <h2>When to go</h2>
      <p>Pookode is pleasant all year, but it is at its greenest after the monsoon. From September to March the weather is usually kinder for being out on the water. In the monsoon, expect rain, and check the district alerts on our <a href="/wayanad-travel-update/">travel update</a> page before you set out.</p>

      <h2>After the lake</h2>
      <p>From Pookode, it is a straightforward drive on to Meppadi. Maison Claire is a private four-bedroom villa there, rented whole to one group, with its own infinity pool facing the hills. Check-in is by door keypad; when you book, tell us what time you expect to get in. After a quiet hour on the water, the next swim is in your own pool. Find your dates in the booking window, or message us on WhatsApp.</p>
    </Guide>
  );
}
