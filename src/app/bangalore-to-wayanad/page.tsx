import { meta } from '@/lib/meta';
import { Guide, FactBox } from '@/components/Guide';

const d = 'Bangalore to Wayanad by road: the Mysuru–Bandipur route, 280–310 km, drive time, the 9 PM–6 AM forest closure and stops on the way to Meppadi.';
export const metadata = meta('/bangalore-to-wayanad/', 'Bangalore to Wayanad by Road: Route, Distance & Bandipur Timings', d, { image: 'pool-view-portrait', type: 'article' });

export default function Page() {
  return (
    <Guide path="/bangalore-to-wayanad/" crumbs={[['/location/', 'Location'], ['/bangalore-to-wayanad/', 'Bangalore to Wayanad']]}
      title={<>Bangalore to Wayanad <em>by road</em></>} headline="Bangalore to Wayanad by road: route, distance and forest timings" description={d}
      intro={<p>Most people drive from Bangalore through Mysuru and the Bandipur forest. Plan around one thing above all: the forest road closes at night.</p>}
      img="villa-night-pool" imgAlt="Maison Claire and its pool lit up at night" imgCaption="Maison Claire at night. Plan to arrive before dark: the forest road closes at 9 PM."
      aside={<FactBox rows={[['Distance', 'About 280–310 km'], ['Drive time', 'About 6–7.5 hours'], ['Main route', 'Via Mysuru and Bandipur'], ['Forest closed', '9 PM to 6 AM'], ['Best season', 'October to May']]} />}
      sources={[['Tejas Travels: Bangalore to Wayanad travel guide (2025)', 'https://www.tejastravels.com/blogs/travel-guides/bangalore-to-wayanad-travel-guide'], ['Wikipedia: 900 Kandi (Meppadi distances)', 'https://en.wikipedia.org/wiki/900_Kandi']]}
      next={{ href: '/location/', title: 'Location', img: 'terrace-view' }}
      about={{ '@type': 'Trip', name: 'Bangalore to Wayanad by road' }}>
      <h2>The usual route</h2>
      <ol className="route" aria-label="Route from Bangalore to Meppadi">
        <li><b>Bangalore</b><span>Start early</span></li>
        <li><b>Mysuru</b><span>Good place for breakfast</span></li>
        <li><b>Gundlupet</b><span>Last easy food stop</span></li>
        <li className="warn"><b>Bandipur forest</b><span>Closed to traffic 9 PM to 6 AM</span></li>
        <li><b>Sulthan Bathery</b><span>Into Kerala</span></li>
        <li><b>Kalpetta</b><span>About 12 km to go</span></li>
        <li><b>Meppadi</b><span>Maison Claire</span></li>
      </ol>
      <p>From Bangalore, take the highway to Mysuru, then continue south through Gundlupet and the Bandipur forest into Kerala. On the Kerala side the road reaches Sulthan Bathery; from there drive towards Kalpetta and on to Meppadi, about 12 km beyond Kalpetta.</p>
      <p>The full trip is roughly 280 to 310 km depending on where in Bangalore you start, and takes about six to seven and a half hours with normal traffic.</p>

      <h2>The night closure at Bandipur</h2>
      <p>The road through the Bandipur forest is closed to traffic from 9 PM to 6 AM to protect wildlife. If you reach the forest gate after 9 PM, you will wait until morning. Leave Bangalore early enough to be through the forest well before dark, and check the current timings before you set off, as rules can change.</p>

      <h2>Tips for the drive</h2>
      <ul>
        <li>Start early. Mornings out of Bangalore are quicker, and you arrive with daylight left.</li>
        <li>Eat in Mysuru or Gundlupet. Food stops thin out inside the forest.</li>
        <li>Carry water, some cash and your ID. Mobile signal drops in patches.</li>
        <li>Keep a FASTag on the car for the toll plazas.</li>
        <li>In the monsoon, expect slower driving and wet roads in the hills.</li>
      </ul>

      <h2>Arriving at Maison Claire</h2>
      <p>The villa has keypad self check-in, so you let yourselves in when you arrive. Tell us your arrival time when you book. Restaurants are about 200 m from the villa for a late first dinner.</p>
    </Guide>
  );
}
