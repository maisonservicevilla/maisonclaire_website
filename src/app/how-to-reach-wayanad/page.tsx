import { meta } from '@/lib/meta';
import { Guide, FactBox } from '@/components/Guide';

const d = 'How to reach Wayanad: Calicut is the nearest airport, 87–92 km from Meppadi. Trains to Kozhikode, and road routes from Bengaluru, Mysuru and Kochi.';
export const metadata = meta('/how-to-reach-wayanad/', 'How to Reach Wayanad: Nearest Airport, Trains & Road Routes', d, { image: 'pool-infinity-mountain', type: 'article' });

const roads: [string, string, string, string][] = [
  ['/bangalore-to-wayanad/', 'Bengaluru', 'About 280–310 km, 6–7.5 h', 'Via Mysuru and Bandipur. The forest road is closed 9 PM to 6 AM.'],
  ['/mysore-to-wayanad/', 'Mysuru', 'About 145 km, 3.5–4 h', 'Via Gundlupet and Bandipur, or the longer Kutta road at night.'],
  ['/calicut-to-wayanad/', 'Kozhikode', 'About 76 km, 1 h 20 min–2 h', 'Up the Thamarassery churam, nine hairpin bends.'],
  ['/kochi-to-wayanad/', 'Kochi', 'About 250 km, 5–6 h', 'Via Kozhikode and Thamarassery, or via Nilambur and Nadukani.'],
  ['/kannur-to-wayanad/', 'Kannur', 'About 120–135 km, 3–3.5 h', 'Via the Palchuram or Nedumpoil ghat to Mananthavady.'],
  ['/malappuram-to-wayanad/', 'Malappuram', 'Roughly 100–120 km, 3–3.5 h', 'Via Nilambur and the Nadukani ghat, skipping the churam.'],
  ['/ooty-to-wayanad/', 'Ooty', 'Roughly 110–120 km, 3–3.5 h', 'Down the Naduvattam ghat to Gudalur, then into Kerala.'],
  ['', 'Chennai', 'Roughly 610 km, 10–11 h', 'Long drive; most people fly to Bengaluru or Calicut.'],
  ['', 'Hyderabad', 'Roughly 850 km, 13–14 h', 'Fly to Bengaluru, Calicut or Kannur and drive the last leg.'],
];

export default function Page() {
  return (
    <Guide path="/how-to-reach-wayanad/" crumbs={[['/location/', 'Location'], ['/how-to-reach-wayanad/', 'How to reach Wayanad']]}
      title={<>How to reach <em>Wayanad</em></>} headline="How to reach Wayanad: nearest airport, railway stations and road routes to Meppadi" description={d}
      intro={<p>The nearest airport to Wayanad is Calicut (Karipur), about 87 to 92 km from Meppadi, or 2 to 2.5 hours by road. Wayanad has no railway, so most rail travellers get off at Kozhikode, about 78 km away.</p>}
      img="pool-infinity-mountain" imgAlt="The infinity-edge pool at Maison Claire looking out to the mountains"
      imgCaption="The pool at Maison Claire, about 76 km from Kozhikode and 87 to 92 km from Calicut airport."
      aside={<FactBox rows={[['Nearest airport', 'Calicut (Karipur), about 87–92 km'], ['Other airports', 'Kannur; Bengaluru for long-haul'], ['Nearest station', 'Kozhikode, about 78 km'], ['Railway in Wayanad', 'None'], ['From Bengaluru', 'About 280–310 km'], ['Bandipur forest road', 'Closed 9 PM to 6 AM']]} />}
      sources={[
        ['Kerala Tourism: Chembra trek (distances to Meppadi)', 'https://keralatourism.org/ecotourism/trekking-programs/chembra-trek/14'],
        ['Wikivoyage: Wayanad District', 'https://en.wikivoyage.org/wiki/Wayanad_District'],
        ['Wikipedia: Transportation in Wayanad', 'https://en.wikipedia.org/wiki/Transportation_in_Wayanad'],
        ['Holidify: how to reach Wayanad (Chennai and Hyderabad distances)', 'https://www.holidify.com/places/wayanad/how-to-reach.html'],
      ]}
      faqs={[
        { q: 'Which is the nearest airport to Wayanad?', a: <p>Calicut International Airport at Karipur. It is about 87 to 92 km from Meppadi, roughly 2 to 2.5 hours by road up the Thamarassery churam.</p>, text: 'Calicut International Airport at Karipur. It is about 87 to 92 km from Meppadi, roughly 2 to 2.5 hours by road up the Thamarassery churam.' },
        { q: 'Is there a railway station in Wayanad?', a: <p>No. Wayanad has no railway line. The nearest major station is Kozhikode, about 78 km from the villa. From the Kochi side, Nilambur Road is another option, followed by a taxi up the Nadukani ghat.</p>, text: 'No. Wayanad has no railway line. The nearest major station is Kozhikode, about 78 km from the villa. From the Kochi side, Nilambur Road is another option, followed by a taxi up the Nadukani ghat.' },
        { q: 'How do I reach Wayanad from Bangalore?', a: <p>By road via Mysuru, Gundlupet and the Bandipur forest, about 280 to 310 km and 6 to 7.5 hours. The forest stretch is closed to private vehicles from 9 PM to 6 AM, so leave early.</p>, text: 'By road via Mysuru, Gundlupet and the Bandipur forest, about 280 to 310 km and 6 to 7.5 hours. The forest stretch is closed to private vehicles from 9 PM to 6 AM, so leave early.' },
        { q: 'Is Kannur or Calicut airport better for Wayanad?', a: <p>For Meppadi and south Wayanad, Calicut is closer, about 87 to 92 km. Kannur is about 110 to 120 km from the villa and suits north Wayanad, or whichever has the better flight.</p>, text: 'For Meppadi and south Wayanad, Calicut is closer, about 87 to 92 km. Kannur is about 110 to 120 km from the villa and suits north Wayanad, or whichever has the better flight.' },
        { q: 'Are there buses to Wayanad?', a: <p>Yes. KSRTC and private buses run to Kalpetta and Sulthan Bathery from Kozhikode, Bengaluru, Mysuru and Kochi. Kalpetta is about 12 km from Meppadi, so you will need a short taxi or auto ride to the villa.</p>, text: 'Yes. KSRTC and private buses run to Kalpetta and Sulthan Bathery from Kozhikode, Bengaluru, Mysuru and Kochi. Kalpetta is about 12 km from Meppadi, so you will need a short taxi or auto ride to the villa.' },
        { q: 'Can we drive into Wayanad at night?', a: <p>From Kerala, yes, the ghat roads stay open, but they are slower in the dark and the Thamarassery churam carries heavy lorries after 8 PM. From Karnataka, the Bandipur road is closed 9 PM to 6 AM and the Bavali road from 6 PM; the Kutta road via Gonikoppal stays open.</p>, text: 'From Kerala, yes, the ghat roads stay open, but they are slower in the dark and the Thamarassery churam carries heavy lorries after 8 PM. From Karnataka, the Bandipur road is closed 9 PM to 6 AM and the Bavali road from 6 PM; the Kutta road via Gonikoppal stays open.' },
      ]}
      related={[['/calicut-to-wayanad/', 'Calicut to Wayanad'], ['/bangalore-to-wayanad/', 'Bangalore to Wayanad'], ['/kochi-to-wayanad/', 'Kochi to Wayanad'], ['/mysore-to-wayanad/', 'Mysore to Wayanad'], ['/location/', 'Location and map'], ['/best-time-to-visit-wayanad/', 'Best time to visit Wayanad']]}
      stay="In Meppadi, about 76 km from Kozhikode and 12 km from Kalpetta."
      next={{ href: '/location/', title: 'Location', img: 'exterior-pool' }}
      updated={['2026-11-22', '22 November 2026']}
      about={{ '@type': 'Place', name: 'Wayanad', address: { '@type': 'PostalAddress', addressRegion: 'Kerala', addressCountry: 'IN' } }}>
      <h2>By air: which airport to fly into</h2>
      <ol className="route" aria-label="Route from Calicut airport to Meppadi">
        <li><b>Calicut airport</b><span>At Karipur, near Kondotty</span></li>
        <li><b>Kozhikode bypass</b><span>Join NH 766 for Wayanad</span></li>
        <li><b>Thamarassery</b><span>Foot of the ghat</span></li>
        <li className="warn"><b>Thamarassery churam</b><span>9 hairpin bends, slow on holidays</span></li>
        <li><b>Lakkidi</b><span>Top of the pass, about 20 km to go</span></li>
        <li><b>Meppadi</b><span>Maison Claire</span></li>
      </ol>
      <ul>
        <li><b>Calicut International Airport (Karipur).</b> The nearest airport to Wayanad and to the villa, about 87 to 92 km away, roughly 2 to 2.5 hours by taxi. It has domestic flights and flights from the Gulf. See <a href="/calicut-to-wayanad/">Calicut to Wayanad</a>.</li>
        <li><b>Kannur International Airport.</b> About 110 to 120 km from Meppadi, around 3 to 3.5 hours via the Palchuram ghat. Handy when it has the better flight. See <a href="/kannur-to-wayanad/">Kannur to Wayanad</a>.</li>
        <li><b>Kempegowda International Airport, Bengaluru.</b> The choice for many long-haul flights, then a full day's drive through Mysuru and Bandipur. See <a href="/bangalore-to-wayanad/">Bangalore to Wayanad</a>.</li>
      </ul>
      <p>Coimbatore airport is an option if you are combining Wayanad with Ooty; see <a href="/ooty-to-wayanad/">Ooty to Wayanad</a>.</p>

      <h2>By train: there is no railway in Wayanad</h2>
      <p>Trains stop short of the hills, so every rail trip ends with a taxi or bus.</p>
      <ul>
        <li><b>Kozhikode.</b> The main station, about 78 km from the villa.</li>
        <li><b>Nilambur Road.</b> From Kochi via Shoranur, then a taxi up the Nadukani ghat.</li>
        <li><b>Mysuru.</b> From Bengaluru, then about 145 km by road through Bandipur.</li>
      </ul>
      <p>Kozhikode is the easiest: it has the most trains, and taxis and KSRTC buses to Kalpetta wait outside. Nilambur Road, at the end of a branch line from Shoranur, suits travellers coming from Kochi and the south. Mysuru works if you are coming by train from Bengaluru and do not want to drive the whole way.</p>

      <h2>By road: distances from nearby cities</h2>
      <p>These are approximate road distances and times to Meppadi. Allow more on holidays and in the monsoon.</p>
      <ul>
        {roads.map(([href, city, dist, line]) => (
          <li key={city}><b>{href ? <a href={href}>{city}</a> : city}:</b> {dist}. {line}</li>
        ))}
      </ul>

      <h2>The roads into Wayanad</h2>
      <p>Wayanad is a plateau, so every road from Kerala climbs a ghat. The Thamarassery churam from Kozhikode is the main one, with nine hairpin bends over about 14 km. Others are the Kuttiyadi ghat from Vatakara, the Nedumpoil–Periya ghat from Thalassery, the Palchuram ghat from Iritty and the Nadukani ghat from Nilambur. From Karnataka, the main road runs through the Bandipur forest, closed to private vehicles from 9 PM to 6 AM, with a longer night route via Gonikoppal and Kutta.</p>
      <p>In the monsoon, from June to September, ghat roads can close for a day after heavy rain. Our <a href="/wayanad-travel-update/">Wayanad travel update</a> covers what to check.</p>

      <h2>Which way suits you</h2>
      <ul>
        <li><b>Flying from the Gulf or another Indian city.</b> Calicut first, Kannur second. Both are a half-day at most to the villa.</li>
        <li><b>Coming from Bengaluru.</b> Drive, and leave early enough to clear Bandipur before 9 PM. Or fly to Calicut if the drive is too long for your group.</li>
        <li><b>Coming from Kochi or south Kerala.</b> Drive or take the train to Kozhikode. The Nilambur road avoids the churam on busy weekends.</li>
        <li><b>Coming from Chennai or Hyderabad.</b> Fly to Bengaluru or Calicut. The drive is a long day or more.</li>
        <li><b>Travelling with young children or older parents.</b> The shortest option is Calicut airport or Kozhikode station, then about two hours by taxi.</li>
      </ul>

      <h2>Getting to Maison Claire</h2>
      <p>The villa is in Kappamkolly, Meppadi, about 12 km from Kalpetta and about 20 km from Lakkidi at the top of the churam. It is rented whole to one group of up to 12. Check-in is by door keypad, so share your train or flight times when you book and we will confirm the check-in time. Once you know your route, choose dates in the booking window; for turn-by-turn directions, WhatsApp us on +91 80060 01367. For the map and nearby places, see <a href="/location/">location</a>.</p>
    </Guide>
  );
}
