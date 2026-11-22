import { site } from '@/content/site';
import { meta } from '@/lib/meta';
import { Landing } from '@/components/Landing';
import type { QA } from '@/components/Bits';

const qa = (q: string, text: string, a?: React.ReactNode): QA => ({ q, a: a ?? <p>{text}</p>, text });

const rooms: [string, number, number, number][] = [
  ['Ground floor, room 1', 2, 3, 3],
  ['Ground floor, room 2', 2, 3, 3],
  ['Upstairs, room 3', 2, 2, 3],
  ['Upstairs, room 4', 2, 2, 3],
];

export const metadata = meta('/villa-for-12-guests-wayanad/', 'Villa for 12 People in Wayanad | 4 BHK Villa, Meppadi',
  'A villa for 12 people in Wayanad: a 4 BHK villa in Meppadi rented as an entire property. Four king rooms sleep 8, or 12 with an extra guest per room.', { image: 'exterior-pool' });

export default function Page() {
  return (
    <Landing path="/villa-for-12-guests-wayanad/" crumb="Villa for 12" heroImg="exterior-pool" heroAlt="The two-storey villa behind its green-tiled infinity pool"
      title={<>A villa for 12 people in Wayanad, <em>and how it sleeps</em></>}
      facts={[`Sleeps ${site.sleeps} to ${site.maxGuests}`, '4 king rooms', '4 bathrooms', 'Entire property']}
      lead={<>Maison Claire sleeps {site.sleeps} in four king bedrooms, and up to {site.maxGuests} with one extra guest in each room. You rent the entire property, so the numbers below are the whole plan: <em>no other guests, no shared corridors</em>.</>}
      module={
        <section className="section--tight band-mist">
          <div className="wrap g12">
            <div className="c-1-4 stack"><p className="cap cap--pool">Sleeping plan</p><h2 className="d2">8, 10 or 12: <em>who goes where</em></h2></div>
            <div className="c-6-7 prose">
              <table>
                <thead><tr><th scope="col">Room</th><th scope="col">8 guests</th><th scope="col">10 guests</th><th scope="col">12 guests</th></tr></thead>
                <tbody>
                  {rooms.map(([r, a, b, c]) => <tr key={r}><td>{r}</td><td>{a}</td><td>{b}</td><td>{c}</td></tr>)}
                  <tr><th scope="row">Total</th><th>8</th><th>10</th><th>12</th></tr>
                </tbody>
              </table>
              <p>Each room has a king bed for two and its own bathroom with a walk-in shower. Enter your full group size in the booking window and tell us who is sharing which room.</p>
            </div>
          </div>
        </section>
      }
      points={[
        { h: 'Four king rooms on two floors', t: <p>Two bedrooms are on the ground floor and two upstairs, and all four are air-conditioned. Two of them face Chembra Peak. Split the house by family, by floor or by who wakes earliest. Every room is on our <a href="/bedrooms/">bedrooms page</a>.</p>, img: 'bedroom-balcony', alt: 'Bedroom with a carved headboard and balcony doors' },
        { h: 'Four bathrooms for twelve', t: <p>The morning queue is the real test of a big group. Here each bedroom has its own bathroom with a walk-in shower, so at full house it is three people to a bathroom, not twelve to two.</p>, img: 'bathroom-green', alt: 'Bathroom with green stone walls and a wall-hung basin' },
        { h: 'Space when everyone is in', t: <p>Three lounges, a terrace, balconies, a garden and the pool give a group of twelve somewhere to go besides the bedrooms. The dining table seats eight, so at full house eat in two sittings, or spread across the lounges and the lawn.</p>, img: 'villa-night-pool', alt: 'The villa and pool lit up at night' },
      ]}
      plan={{ title: <>Before you book <em>for 10 or 12</em></>, body: <><p>Count everyone, children included, and enter the full number in the booking window so the extra guests can be arranged. Every guest needs a photo ID, the main guest must be 18 or over, and pets are not allowed. The <a href="/house-rules/">house rules</a> have the rest.</p><p>Coming in more than one car? Ask us about parking on WhatsApp before you travel. If your group is mainly friends rather than family, our <a href="/group-stay-villa-wayanad/">group stays page</a> covers that side, and <a href="/the-villa/">the villa</a> page walks through every room.</p></> }}
      plan2={<p>Maison Claire is a 4 BHK villa in Wayanad rented as an entire property: four bedrooms, four bathrooms, three lounges, a kitchen and a private pool. As a big family villa in Kerala it takes up to {site.maxGuests} people. Once you have a head count, see live dates and the whole-villa price for that number on <a href="/rates-booking/">rates and booking</a>.</p>}
      faqs={[
        qa('Can 12 people stay at the villa?', `Yes. The four king bedrooms sleep ${site.sleeps}, two to a room, and each room takes one extra guest, so the villa sleeps up to ${site.maxGuests}.`),
        qa('How are the extra guests arranged?', 'Extra guests are arranged when you book. Enter your full group size in the booking window and tell us who is sharing which room.'),
        qa('Is Maison Claire a 4 BHK villa?', 'Yes. It has four king bedrooms, each with an attached bathroom and air-conditioning, plus three lounges, a full kitchen, a dining table for eight and a private pool.'),
        qa('Do we get the entire property?', 'Yes. The villa is rented whole to one group at a time, including the pool, garden and terrace.'),
        qa('How do we see the price for 10 or 12 guests?', 'Enter your exact group size in the booking window to see the whole-villa price for those dates. For anything else, WhatsApp is the quickest way to ask.'),
      ]}
      next={{ href: '/bedrooms/', title: 'The bedrooms', img: 'bedroom-grey-2' }} />
  );
}
