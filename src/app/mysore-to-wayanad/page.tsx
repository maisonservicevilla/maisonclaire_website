import { meta } from '@/lib/meta';
import { Guide, FactBox } from '@/components/Guide';

const d = 'Mysore to Wayanad distance: about 145 km to Meppadi via Gundlupet and Bandipur, 3.5 to 4 hours. The 9 PM to 6 AM forest closure and the night route.';
export const metadata = meta('/mysore-to-wayanad/', 'Mysore to Wayanad Distance: Bandipur Route & Night Timings', d, { image: 'pool-dusk', type: 'article' });

export default function Page() {
  return (
    <Guide path="/mysore-to-wayanad/" crumbs={[['/how-to-reach-wayanad/', 'How to reach Wayanad'], ['/mysore-to-wayanad/', 'Mysore to Wayanad']]}
      title={<>Mysore to Wayanad, <em>before the forest closes</em></>} headline="Mysore to Wayanad distance: the Bandipur route, night closure and the Kutta alternative" description={d}
      intro={<p>Mysore to Meppadi in Wayanad is about 145 km by the usual road through Gundlupet and the Bandipur forest, roughly 3.5 to 4 hours. The forest stretch is closed to private vehicles from 9 PM to 6 AM, so time your drive around it.</p>}
      img="pool-dusk" imgAlt="The infinity pool at Maison Claire at dusk, with the hills beyond"
      imgCaption="The pool at Maison Claire at dusk, about 145 km from Mysuru. Leave Mysuru by early afternoon to clear Bandipur in daylight."
      aside={<FactBox rows={[['Distance', 'About 145 km'], ['Drive time', 'About 3.5–4 h'], ['Main route', 'Gundlupet, Bandipur, Muthanga'], ['Bandipur closed', '9 PM to 6 AM'], ['Night route', 'Gonikoppal and Kutta, about 170 km'], ['Bavali checkpost', 'Shuts at 6 PM']]} />}
      sources={[
        ['ThePrint: the Bandipur night traffic ban and the tunnel plan (February 2026)', 'https://theprint.in/india/a-tunnel-to-overcome-bandipur-night-traffic-ban-wayanad-pins-hope-on-polls-priyanka-and-gadkari/2845657'],
        ['Kerala Kaumudi: 14 years of the Bandipur night ban', 'https://keralakaumudi.com/en/kerala/general/14-years-since-bandipur-night-traffic-ban-travel-woes-continue-for-malayalees-1517117'],
        ['Wikipedia: Transportation in Wayanad (Mysore routes)', 'https://en.wikipedia.org/wiki/Transportation_in_Wayanad'],
        ['StayVista: Wayanad to Mysore distance and route', 'https://www.stayvista.com/blog/wayanad-to-mysore-distance-best-route-via-bandipur-drive-time-travel-guide/'],
      ]}
      faqs={[
        { q: 'What is the distance from Mysore to Wayanad?', a: <p>Mysuru to Kalpetta is about 130 to 140 km via Gundlupet and Bandipur, and Meppadi is about 12 km further, so roughly 145 km to the villa. The drive takes about 3.5 to 4 hours.</p>, text: 'Mysuru to Kalpetta is about 130 to 140 km via Gundlupet and Bandipur, and Meppadi is about 12 km further, so roughly 145 km to the villa. The drive takes about 3.5 to 4 hours.' },
        { q: 'What are the Bandipur forest timings?', a: <p>The NH 766 stretch through Bandipur is closed to private vehicles from 9 PM to 6 AM. The rule has been in place since 2009 and was still in force in 2026. Check before you travel in case it changes.</p>, text: 'The NH 766 stretch through Bandipur is closed to private vehicles from 9 PM to 6 AM. The rule has been in place since 2009 and was still in force in 2026. Check before you travel in case it changes.' },
        { q: 'Can I drive from Mysore to Wayanad at night?', a: <p>Yes, by the longer route through Hunsur, Gonikoppal and Kutta to Mananthavady, which stays open at night. It is about 170 km to Meppadi and the road is bumpy in places. The Bandipur road and the Bavali road are both closed at night.</p>, text: 'Yes, by the longer route through Hunsur, Gonikoppal and Kutta to Mananthavady, which stays open at night. It is about 170 km to Meppadi and the road is bumpy in places. The Bandipur road and the Bavali road are both closed at night.' },
        { q: 'What time does the Bavali checkpost close?', a: <p>The Bavali forest checkpost on the HD Kote to Mananthavady road shuts at 6 PM and the road is closed at night. It is the shortest way to Mananthavady, but only in the daytime.</p>, text: 'The Bavali forest checkpost on the HD Kote to Mananthavady road shuts at 6 PM and the road is closed at night. It is the shortest way to Mananthavady, but only in the daytime.' },
        { q: 'Do we see wild animals on the Bandipur road?', a: <p>Often. Deer, elephants and other animals cross the road through Bandipur and Muthanga. Drive slowly, stay in the car, and do not stop to feed or photograph animals at close range.</p>, text: 'Often. Deer, elephants and other animals cross the road through Bandipur and Muthanga. Drive slowly, stay in the car, and do not stop to feed or photograph animals at close range.' },
      ]}
      related={[['/bangalore-to-wayanad/', 'Bangalore to Wayanad'], ['/how-to-reach-wayanad/', 'How to reach Wayanad'], ['/ooty-to-wayanad/', 'Ooty to Wayanad'], ['/edakkal-caves/', 'Edakkal Caves'], ['/weekend-villa-wayanad/', 'A weekend villa in Wayanad'], ['/location/', 'Location']]}
      stay="About 145 km from Mysuru, 12 km past Kalpetta."
      next={{ href: '/bangalore-to-wayanad/', title: 'Bangalore to Wayanad', img: 'villa-night-pool' }}
      updated={['2026-11-22', '22 November 2026']}
      about={{ '@type': 'Trip', name: 'Mysore to Wayanad by road' }}>
      <h2>The usual route, through Bandipur</h2>
      <ol className="route" aria-label="Route from Mysuru to Meppadi">
        <li><b>Mysuru</b><span>South on NH 766</span></li>
        <li><b>Nanjangud</b><span>Temple town on the way out</span></li>
        <li><b>Gundlupet</b><span>Last easy food and fuel</span></li>
        <li className="warn"><b>Bandipur forest</b><span>Closed to private vehicles 9 PM to 6 AM</span></li>
        <li><b>Muthanga</b><span>Into Kerala, still forest</span></li>
        <li><b>Sulthan Bathery</b><span>First big Wayanad town</span></li>
        <li><b>Kalpetta</b><span>About 12 km to go</span></li>
        <li><b>Meppadi</b><span>Maison Claire</span></li>
      </ol>
      <p>From Mysuru, take NH 766 south through Nanjangud to Gundlupet, then into the Bandipur forest. The road crosses into Kerala and runs through the Muthanga part of the Wayanad sanctuary before reaching Sulthan Bathery. From there, head west to Kalpetta and on to Meppadi, about 12 km beyond Kalpetta. Mysuru to Kalpetta is about 130 to 140 km, so the villa is roughly 145 km away. Allow 3.5 to 4 hours.</p>
      <p>Coming from Bangalore, this is the second half of the same road. See our <a href="/bangalore-to-wayanad/">Bangalore to Wayanad</a> guide for the full drive.</p>

      <h2>The Bandipur night closure</h2>
      <p>The forest stretch of NH 766 through Bandipur, about 19.5 km between Moolehole and Maddur, has been closed to private vehicles from 9 PM to 6 AM since 2009 to protect wildlife. In February 2026 the ban was still in force, and a tunnel is being studied, but nothing has changed on the ground yet.</p>
      <p>If you reach the gate after 9 PM, you will wait until 6 AM or turn back for the longer route. A simple rule: leave Mysuru by 3 PM at the latest, and earlier if you want to arrive in daylight. Fill up at Gundlupet, as there is little inside the forest.</p>

      <h2>Driving at night: Gonikoppal and Kutta</h2>
      <ol className="route" aria-label="Night route from Mysuru to Meppadi">
        <li><b>Mysuru</b><span>West towards Hunsur</span></li>
        <li><b>Gonikoppal</b><span>Kodagu coffee country</span></li>
        <li><b>Kutta</b><span>Karnataka side of the border</span></li>
        <li><b>Mananthavady</b><span>North Wayanad</span></li>
        <li><b>Kalpetta</b><span>About 12 km to go</span></li>
        <li><b>Meppadi</b><span>Maison Claire</span></li>
      </ol>
      <p>If you are running late, the road through Hunsur, Gonikoppal and Kutta to Mananthavady stays open at night. It is longer, about 159 km from Mysuru to Kalpetta, so roughly 170 km to the villa, and the surface is bumpy in places. From Mananthavady, drive south to Kalpetta and on to Meppadi.</p>

      <h2>The Bavali road closes at 6 PM</h2>
      <p>The shortest way to Mananthavady is via HD Kote and Bavali on SH 33, about 115 km from Mysuru to Kalpetta. It is a forest road too, and the Bavali checkpost shuts at 6 PM. It is a good daytime option, especially if you want to see north Wayanad first, but do not plan an evening drive on it.</p>

      <h2>A simple plan for the day</h2>
      <p>Leaving Mysuru after breakfast, around 9 AM, gets you through Bandipur by late morning and to the villa in time for lunch. If you are coming from Bangalore the same day, aim to leave Mysuru by early afternoon at the latest. That gives you a margin for traffic in Nanjangud and Gundlupet, a tea stop, and the forest stretch in daylight, when it is easier to see animals on the road.</p>
      <p>On the way home, the same rule applies in reverse: be through Muthanga and Bandipur well before 9 PM. Check-out is at 11 AM, so a relaxed late-morning start still clears the forest with hours to spare.</p>

      <h2>Tips for the drive</h2>
      <ul>
        <li>Carry water and snacks; food stops are few between Gundlupet and Sulthan Bathery.</li>
        <li>Do not stop inside the forest, and never get out of the car near animals.</li>
        <li>Mobile signal drops in patches through Bandipur and Muthanga.</li>
        <li>Rules can change. Check the current timings before you set off.</li>
      </ul>

      <h2>Arriving at Maison Claire</h2>
      <p>If you come through Sulthan Bathery, <a href="/edakkal-caves/">Edakkal Caves</a> is a short detour from Sulthan Bathery and 24 km from the villa, a good stop on the way back. Check-in is by door keypad. If you might end up on the Kutta road, tell us your likely arrival time when you book. Plan the drive around Bandipur first, then lock in your dates in the booking window; WhatsApp us if the timings leave you unsure.</p>
    </Guide>
  );
}
