import { meta } from '@/lib/meta';
import { Landing } from '@/components/Landing';
import { Img } from '@/components/Img';
import { BookButton } from '@/components/Book';

const weekend = [
  { t: 'Friday evening', img: 'villa-night-pool', alt: 'The villa and pool lit up at night', line: 'Let yourselves in with the door keypad, then a swim under the pool lights.' },
  { t: 'Saturday morning', img: 'balcony-view', alt: 'Two chairs on a balcony facing the mountains', line: 'Coffee on the balcony, a swim, then Kanthanpara Falls, 10 km away.' },
  { t: 'Saturday evening', img: 'kitchen-evening', alt: 'The villa kitchen in the evening', line: 'Cook together, or walk to the restaurants about 200 m away.' },
  { t: 'Sunday', img: 'exterior-path', alt: 'Stone path across the lawn to the pool', line: 'Check out by 11 AM. Heading to Kozhikode? Stop at Lakkidi Viewpoint.' },
];

export const metadata = meta('/weekend-villa-wayanad/', 'Weekend Villa Stay in Wayanad | Private Getaway, Meppadi',
  'A peaceful private villa for a weekend getaway in Wayanad: your own infinity pool, four king bedrooms and the hills of Meppadi. Plan your weekend.', { image: 'bedroom-view-warm' });

export default function Page() {
  return (
    <Landing path="/weekend-villa-wayanad/" crumb="Weekend getaways" heroImg="terrace-view" heroAlt="The terrace looking over the trees to the hills"
      title={<>A weekend villa in Wayanad, <em>two slow days</em></>}
      facts={['Private pool', 'Hill views', 'Self check-in', 'Meppadi']}
      lead={<>Arrive on Friday evening, let yourselves in, and don't drive anywhere until Sunday. <em>That is the whole plan</em>, if you want it to be.</>}
      module={
        <section className="section wrap" style={{ paddingTop: 0 }}>
          <p className="cap cap--pool" style={{ marginBottom: 'clamp(40px,5vw,64px)' }}>The weekend, hour by hour</p>
          <ol className="day x">
            {weekend.map((m, i) => (
              <li key={m.t}>
                <p className="cap cap--pool" style={{ marginBottom: 16 }}>{m.t}</p>
                <div className={`ph ${i % 2 ? 'ratio-43' : 'ratio-45'}`}><Img name={m.img} alt={m.alt} sizes="(min-width: 900px) 25vw, 90vw" /></div>
                <p className="serif">{m.line}</p>
              </li>
            ))}
          </ol>
          <div className="mid-cta"><BookButton className="btn btn--dark">Check this weekend</BookButton><a className="textlink" href="/bangalore-to-wayanad/">Driving from Bangalore</a></div>
        </section>
      }
      plan2={<p>Kozhikode station is about 78 km away and Bangalore 280 to 310 km, so a weekend villa stay works from either. Arrive on Friday, leave by 11 AM on Sunday, with your own pool in between.</p>}
      faqs={[
        { q: 'Can we book just for a weekend?', a: <p>Yes. Pick your dates in the booking window to see if the weekend is free and the price for those nights.</p>, text: 'Yes. Pick your dates in the booking window to see if the weekend is free and the price.' },
        { q: 'How late can we arrive?', a: <p>Check-in is self check-in with a door keypad, which makes a late arrival easier. Tell us your arrival time when you book. Drivers from Bangalore should note the Bandipur forest road is closed from 9 PM to 6 AM.</p>, text: 'Check-in is self check-in with a door keypad, which makes a late arrival easier. Tell us your arrival time when you book. The Bandipur forest road from Bangalore is closed from 9 PM to 6 AM.' },
      ]}
      next={{ href: '/location/', title: 'Location', img: 'balcony-view' }} />
  );
}
