import { meta } from '@/lib/meta';
import { Guide, FactBox } from '@/components/Guide';

const d = 'Kannur to Wayanad distance: about 120–135 km from Kannur town and 110–120 km from Kannur airport to Meppadi, via the Palchuram or Nedumpoil ghats.';
export const metadata = meta('/kannur-to-wayanad/', 'Kannur to Wayanad Distance: Airport Route & Ghat Roads', d, { image: 'balcony-view', type: 'article' });

export default function Page() {
  return (
    <Guide path="/kannur-to-wayanad/" crumbs={[['/how-to-reach-wayanad/', 'How to reach Wayanad'], ['/kannur-to-wayanad/', 'Kannur to Wayanad']]}
      title={<>Kannur to Wayanad, <em>from the airport</em></>} headline="Kannur to Wayanad distance: Kannur airport and town to Meppadi by road" description={d}
      intro={<p>From Kannur airport to Meppadi is roughly 110 to 120 km, about 3 to 3.5 hours, climbing the Palchuram ghat to Mananthavady and then driving south through Kalpetta. From Kannur town it is about 120 to 135 km by the Nedumpoil ghat. All figures here are approximate.</p>}
      img="balcony-view" imgAlt="Two chairs on a balcony at Maison Claire facing the hills"
      imgCaption="A balcony at Maison Claire in Meppadi, roughly 110 to 120 km from Kannur airport."
      aside={<FactBox rows={[['From Kannur airport', 'About 110–120 km'], ['From Kannur town', 'About 120–135 km'], ['Drive time', 'About 3–3.5 h'], ['Ghat roads', 'Palchuram or Nedumpoil–Periya'], ['Enter Wayanad at', 'Mananthavady']]} />}
      sources={[
        ['StayVista: Kannur to Wayanad distance guide', 'https://www.stayvista.com/blog/kannur-to-wayanad-distance-complete-guide/'],
        ['Wikipedia: Transportation in Wayanad (ghat roads)', 'https://en.wikipedia.org/wiki/Transportation_in_Wayanad'],
        ['Onmanorama: alternative routes to Wayanad (August 2026)', 'https://www.onmanorama.com/news/kerala/2026/08/22/heavy-traffic-on-thamarassery-ghat-5-alternative-routes-to-reach-wayanad-this-onam.html'],
      ]}
      faqs={[
        { q: 'What is the distance from Kannur to Wayanad?', a: <p>Kannur town to Mananthavady, the first big Wayanad town, is about 85 km. To Kalpetta it is about 110 to 123 km depending on the source, and Meppadi is about 12 km further, so roughly 120 to 135 km to the villa.</p>, text: 'Kannur town to Mananthavady, the first big Wayanad town, is about 85 km. To Kalpetta it is about 110 to 123 km depending on the source, and Meppadi is about 12 km further, so roughly 120 to 135 km to the villa.' },
        { q: 'How far is Kannur airport from Wayanad?', a: <p>Kannur International Airport is about 100 to 108 km from Kalpetta, around 3 hours by road. Meppadi is about 12 km beyond Kalpetta, so allow 3 to 3.5 hours to the villa.</p>, text: 'Kannur International Airport is about 100 to 108 km from Kalpetta, around 3 hours by road. Meppadi is about 12 km beyond Kalpetta, so allow 3 to 3.5 hours to the villa.' },
        { q: 'Which airport is closer to Meppadi, Kannur or Calicut?', a: <p>Calicut is closer, about 87 to 92 km from the villa. Kannur is a sensible choice if your flight lands there or the fare is better, but the drive is a little longer.</p>, text: 'Calicut is closer, about 87 to 92 km from the villa. Kannur is a sensible choice if your flight lands there or the fare is better, but the drive is a little longer.' },
        { q: 'Is the Palchuram road safe at night?', a: <p>It is a steep, winding ghat road, narrow on the upper stretch, and is sometimes restricted in heavy rain. If you do not know it, drive it in daylight.</p>, text: 'It is a steep, winding ghat road, narrow on the upper stretch, and is sometimes restricted in heavy rain. If you do not know it, drive it in daylight.' },
      ]}
      related={[['/how-to-reach-wayanad/', 'How to reach Wayanad'], ['/calicut-to-wayanad/', 'Calicut to Wayanad'], ['/nri-family-holiday-wayanad/', 'NRI family holidays'], ['/family-holiday-villa-wayanad/', 'Family holiday villa'], ['/wayanad-travel-update/', 'Wayanad travel update']]}
      stay="Roughly 110 to 120 km from Kannur airport, in south Wayanad."
      next={{ href: '/nri-family-holiday-wayanad/', title: 'NRI family holidays', img: 'living-chesterfield' }}
      updated={['2026-11-22', '22 November 2026']}
      about={{ '@type': 'Trip', name: 'Kannur to Wayanad by road' }}>
      <h2>From Kannur airport: the Palchuram route</h2>
      <ol className="route" aria-label="Route from Kannur airport to Meppadi">
        <li><b>Kannur airport</b><span>At Mattannur, fuel here</span></li>
        <li><b>Iritty</b><span>Towards the hills</span></li>
        <li><b>Kottiyoor</b><span>Foot of the climb</span></li>
        <li className="warn"><b>Palchuram ghat</b><span>Steep and narrow, best in daylight</span></li>
        <li><b>Boys Town</b><span>Top of the ghat</span></li>
        <li><b>Mananthavady</b><span>North Wayanad</span></li>
        <li><b>Kalpetta</b><span>About 12 km to go</span></li>
        <li><b>Meppadi</b><span>Maison Claire</span></li>
      </ol>
      <p>Kannur International Airport is at Mattannur, inland from Kannur town. If your flight from the Gulf or from elsewhere in India lands here, the quickest way up is usually through Iritty, Peravoor and Kottiyoor, then the Palchuram ghat to Boys Town and Mananthavady. From Mananthavady, drive south to Kalpetta and on to Meppadi.</p>
      <p>Kannur airport to Kalpetta is about 100 to 108 km, around 3 hours. Add about 12 km for Meppadi, so plan on 3 to 3.5 hours to the villa. These are approximate; traffic and weather make a real difference on the ghat.</p>

      <h2>From Kannur town: the Nedumpoil ghat</h2>
      <ol className="route" aria-label="Route from Kannur town to Meppadi">
        <li><b>Kannur</b><span>East towards Kuthuparamba</span></li>
        <li><b>Kuthuparamba</b><span>Breakfast stop</span></li>
        <li className="warn"><b>Nedumpoil to Periya</b><span>The ghat climb</span></li>
        <li><b>Mananthavady</b><span>About 85 km from Kannur</span></li>
        <li><b>Kalpetta</b><span>About 12 km to go</span></li>
        <li><b>Meppadi</b><span>Maison Claire</span></li>
      </ol>
      <p>From Kannur town or Thalassery, head to Kuthuparamba and climb the Nedumpoil–Periya ghat road to Mananthavady, about 85 km and 2.5 hours. Kalpetta is about 110 to 123 km from Kannur by this road, so the villa is roughly 120 to 135 km away. A third option, via Thalassery, Mahe and Thottilpalam, joins the Kuttiyadi ghat; it is useful only if the other two are closed.</p>

      <h2>Which ghat to take</h2>
      <p>From the airport, Palchuram is usually quicker, but it narrows on the upper stretch and is sometimes restricted in heavy rain. Nedumpoil is the more direct choice from Kannur town and Thalassery. Both are winding roads with forest on the way, so watch for deer and other animals around dawn and dusk.</p>

      <h2>Planning around your flight</h2>
      <p>If you land in the morning, you can be at the villa by early afternoon, with the ghat behind you in daylight. If you land late in the evening, think about the drive honestly. Palchuram is steep and narrow at the top, and after a long flight it is not the road to learn in the dark. Some travellers stay a night near the airport and drive up after breakfast; others take a taxi with a driver who knows the ghat. Either is sensible.</p>
      <p>Bring snacks and water for the car, and keep some cash for tea stops in Iritty or Mananthavady. Mananthavady is the first big town in Wayanad and a good place for a meal before the last hour to Meppadi.</p>

      <h2>Tips for the drive</h2>
      <ul>
        <li>Fill up at Mattannur, Iritty or Kuthuparamba. Pumps are few on the climbs.</li>
        <li>Mobile signal drops on parts of both ghats. Download an offline map before you leave the airport.</li>
        <li>Use a low gear going downhill on the way back, rather than riding the brakes.</li>
        <li>In the monsoon, from June to September, add time and check the <a href="/wayanad-travel-update/">Wayanad travel update</a>.</li>
      </ul>

      <h2>Kannur or Calicut airport?</h2>
      <p>Calicut airport is closer to the villa, about 87 to 92 km by the Thamarassery churam; see <a href="/calicut-to-wayanad/">Calicut to Wayanad</a>. Kannur is a good choice when it has the better flight or fare, and its route avoids the busy churam. If you are flying in from the Gulf, pick whichever lands at a kinder hour. That matters more than 20 or 30 km.</p>

      <h2>Arriving at Maison Claire</h2>
      <p>After a long flight and a ghat drive, the villa gives you four king bedrooms with attached bathrooms, all air-conditioned, and a private pool for your group only. Check-in is by door keypad, so send us your landing time when you book and we will confirm when you can check in. Once your flight is fixed, look up the same dates in the booking window; for help with the ghat or a taxi plan, WhatsApp +91 80060 01367. Coming home for a family holiday? See <a href="/nri-family-holiday-wayanad/">NRI family holidays in Wayanad</a>.</p>
    </Guide>
  );
}
