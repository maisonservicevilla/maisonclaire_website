import { site } from '@/content/site';
import { meta } from '@/lib/meta';
import { Landing } from '@/components/Landing';
import type { QA } from '@/components/Bits';

const qa = (q: string, text: string, a?: React.ReactNode): QA => ({ q, a: a ?? <p>{text}</p>, text });

const days: [string, string, React.ReactNode][] = [
  ['Arrival day', 'Pool and dinner', 'Let yourselves in with the door keypad, claim rooms, and get in the pool while the lights come on. Cook, or walk to the restaurants about 200 m away.'],
  ['Day two', 'Chembra Peak, 12 km', 'Be at the forest office near Meppadi early for the guided trek to the heart-shaped lake. Back by afternoon, feet up, then a swim.'],
  ['Day three', 'Falls and the glass bridge', 'Soochipara Falls (15 km) has a walk of about 2 km down to the water. Pair it with the 900 Kandi glass bridge (9 km) or Kanthanpara Falls (10 km).'],
  ['Last morning', 'Check-out 11 AM', <>Coffee on the balcony, pack up, and stop at Lakkidi on the way down to Kozhikode. Parking at the viewpoint is banned, so do not stop on the ghat; see our <a href="/lakkidi-viewpoint/">Lakkidi page</a> for details.</>],
];

export const metadata = meta('/friends-trip-villa-wayanad/', 'Wayanad Trip with Friends | Private Villa, Meppadi',
  'Planning a Wayanad trip with friends? Book a whole villa in Meppadi: four king rooms with bathrooms, three lounges and a private pool.', { image: 'living-teal' });

export default function Page() {
  return (
    <Landing path="/friends-trip-villa-wayanad/" crumb="Trips with friends" heroImg="living-teal" heroAlt="Lounge with a teal sectional sofa and windows onto the hills"
      title={<>A Wayanad trip with friends, <em>one house, four equal rooms</em></>}
      facts={['4 king rooms', '3 lounges', 'Private pool', 'Treks nearby']}
      lead={<>For a Wayanad trip with friends, Maison Claire gives you the whole house: four king bedrooms with their own bathrooms, three lounges and a lit pool, with no other guests. Nobody draws the short straw on rooms, so <em>the only argument left is who cooks</em>.</>}
      module={
        <section className="section--tight band-mist">
          <div className="wrap g12">
            <div className="c-1-4 stack"><p className="cap cap--pool">Three days, roughly</p><h2 className="d2">Plan the days, <em>keep the evenings</em></h2></div>
            <div className="c-6-7">
              <ol className="plan">{days.map(([n, w, d]) => <li key={n}><span className="plan__n">{n}</span><span className="cap cap--muted">{w}</span><span className="plan__d">{d}</span></li>)}</ol>
              <p className="lead" style={{ marginTop: 20 }}>A fuller version, with timings, is in our <a href="/wayanad-3-day-itinerary/">Wayanad 3-day itinerary</a>.</p>
            </div>
          </div>
        </section>
      }
      points={[
        { h: 'No box room, no sofa bed', t: <p>All four bedrooms have a king bed, an attached bathroom with a walk-in shower and air-conditioning. Two are on the ground floor and two upstairs, and two of the four face Chembra Peak, so toss a coin for those. See the rooms on our <a href="/bedrooms/">bedrooms page</a>.</p>, img: 'bedroom-grey-2', alt: 'Bedroom with a grey padded headboard, a sunset painting and a door through to the dining area' },
        { h: 'Three lounges for three moods', t: <p>One group wants a film, another wants cards, and someone always wants to sleep early. With three separate lounges and a terrace, a house of eight or twelve friends has room to spread out.</p>, img: 'living-grey', alt: 'Lounge with grey sofas' },
        { h: 'Pool evenings', t: <p>Back from the trek, the infinity pool is waiting, and its underwater lights mean the evening carries on after sunset. Only your group uses it. More on the <a href="/private-pool/">private pool</a>.</p>, img: 'pool-dusk', alt: 'Turquoise infinity pool at dusk with layered hills and a pink sky' },
      ]}
      plan={{ title: <>House rules, <em>briefly</em></>, body: <><p>The main guest must be 18 or over and every guest needs a photo ID. Pets are not allowed, and check-out is at 11 AM.</p><p>Read the full <a href="/house-rules/">house rules</a> before you book, and message us on WhatsApp about anything they do not cover. It is quicker to ask first than to change plans on the day.</p></> }}
      plan2={<p>Maison Claire is a villa for a friends group in Wayanad: one booking, the whole house, and a private pool villa for friends in Kerala with room for {site.sleeps}, or up to {site.maxGuests} with an extra guest in each room. Once the group chat agrees on a weekend, pick those dates in the booking window to see the whole-villa price.</p>}
      faqs={[
        qa('Can a group of friends book the whole villa?', 'Yes. The villa is rented whole to one group at a time, so nobody else shares the house or the pool. House rules apply to every booking.',
          <p>Yes. The villa is rented whole to one group at a time, so nobody else shares the house or the pool. <a href="/house-rules/">House rules</a> apply to every booking.</p>),
        qa('How many friends can stay?', `${site.sleeps} in the four king bedrooms, or up to ${site.maxGuests} with one extra guest in each room.`),
        qa('Are all the rooms the same?', 'Very nearly. All four have a king bed, an attached bathroom with a walk-in shower and air-conditioning. Two are on the ground floor, two are upstairs, and two face Chembra Peak.'),
        qa('How do we book the Chembra Peak trek?', 'Permits are issued by the forest department at the base camp near Meppadi, 12 km from the villa, and a guide goes with each group. Numbers and fees change, so confirm with the forest office on +91 4936 282001 before you go.'),
        qa('Is there a cook at the villa?', 'Ask us on WhatsApp about meals before you book. The kitchen is fully equipped for groups who want to cook, and restaurants are about 200 m away.'),
      ]}
      next={{ href: '/chembra-peak-trek/', title: 'Chembra Peak trek', img: 'bedroom-mountain-view' }} />
  );
}
