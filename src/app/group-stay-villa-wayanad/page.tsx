import { site } from '@/content/site';
import { meta } from '@/lib/meta';
import { Landing } from '@/components/Landing';

export const metadata = meta('/group-stay-villa-wayanad/', 'Group Stay Villa in Wayanad | Villa for Friends, Meppadi',
  'A private villa for groups in Meppadi, Wayanad: four equal king bedrooms, three lounges, a private pool and a kitchen. For friends and family, up to 12 guests.', { image: 'terrace-view' });

export default function Page() {
  return (
    <Landing path="/group-stay-villa-wayanad/" crumb="Group stays" heroImg="villa-night-pool" heroAlt="The villa and pool lit up at night"
      title={<>A group stay villa in Wayanad, <em>with nobody else around</em></>}
      facts={['4 equal bedrooms', 'Up to 12 guests', 'Private pool', '3 lounges']}
      lead={<>Book the whole villa and the whole villa is yours: <em>four equal rooms, three lounges and a pool</em>, with no reception desk and no other guests.</>}
      module={
        <section className="band-dark section--tight" aria-label="The villa for a group, in numbers">
          <div className="wrap nums nums--4">
            <div><b>{site.bedrooms}</b><span className="cap">Equal king bedrooms</span></div>
            <div><b>{site.lounges}</b><span className="cap">Lounges</span></div>
            <div><b>{site.maxGuests}</b><span className="cap">Guests, at most</span></div>
            <div><b>1</b><span className="cap">Private pool</span></div>
          </div>
        </section>
      }
      points={[
        { h: 'Four equal rooms, no arguments', t: <p>Every bedroom has a king bed, an attached bathroom and a balcony. Nobody gets stuck with the box room, which is half the battle when eight friends share a house.</p>, img: 'bedroom-balcony', alt: 'Bedroom with a carved headboard and balcony doors' },
        { h: 'Room to spread out', t: <p>Three lounges mean the card players, the film watchers and the early sleepers can all have a corner. The terrace and balconies look across to the hills.</p>, img: 'living-tv', alt: 'TV lounge with grey sofas' },
        { h: 'The pool, after dark', t: <p>The infinity pool has underwater lights, so the evening doesn't end when the sun goes down.</p>, img: 'pool-view-portrait', alt: 'The pool edge with the mountains beyond' },
      ]}
      plan={{ title: <>Trips for <em>a group</em></>, body: <><p>The Chembra Peak trek (12 km) starts near Meppadi and runs with forest department guides. Soochipara Falls (15 km) and the 900 Kandi glass bridge (9 km) make a good half-day pair.</p><p>Driving in from Bangalore? Read our <a href="/bangalore-to-wayanad/">Bangalore to Wayanad route guide</a>: the Bandipur forest road shuts at night.</p></> }}
      plan2={<p>A group villa rental and villa for group stay in Meppadi: a private villa for group accommodation, with eight guests in four equal bedrooms, or up to 12 with one extra guest in each. Think of it as a private villa for 8 to 10 guests, and an exclusive villa for group holidays: your group has the house and the pool to itself.</p>}
      faqs={[
        { q: 'How big a group can stay?', a: <p>Up to {site.maxGuests} guests: two per bedroom, plus one extra in each room.</p>, text: `Up to ${site.maxGuests} guests: two per bedroom, plus one extra in each room.` },
        { q: 'Are there any group rules?', a: <p>The main guest must be 18 or over, and every guest needs a photo ID. Groups of only men should check with us before booking. <a href="/house-rules/">House rules</a>.</p>, text: 'The main guest must be 18 or over, and every guest needs a photo ID. Groups of only men should check with the villa before booking.' },
        { q: 'Can we cook our own food?', a: <p>Yes, there is a full kitchen and a table for eight.</p>, text: 'Yes, there is a full kitchen and a table for eight.' },
      ]}
      next={{ href: '/weekend-villa-wayanad/', title: 'Weekend getaways', img: 'bedroom-view-warm' }} />
  );
}
