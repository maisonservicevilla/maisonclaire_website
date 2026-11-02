import { site } from '@/content/site';
import { meta } from '@/lib/meta';
import { Landing } from '@/components/Landing';

export const metadata = meta('/group-stay-villa-wayanad/', 'Group Stay Villa in Wayanad | Villa for Friends, Meppadi',
  'A private villa for groups in Meppadi, Wayanad: four king bedrooms, three lounges, a private pool and a kitchen. For friends and family, up to 12 guests.', { image: 'terrace-view' });

export default function Page() {
  return (
    <Landing path="/group-stay-villa-wayanad/" crumb="Group stays" heroImg="villa-night-pool" heroAlt="The villa and pool lit up at night"
      title={<>A group stay villa in Wayanad, <em>with nobody else around</em></>}
      facts={['4 king bedrooms', 'Up to 12 guests', 'Private pool', '3 lounges']}
      lead={<>Book the whole villa and the whole villa is yours: <em>four king bedrooms, three lounges and a pool</em>, with no reception desk and no other guests.</>}
      module={
        <section className="band-dark section--tight" aria-label="The villa for a group, in numbers">
          <div className="wrap nums nums--4">
            <div><b>{site.bedrooms}</b><span className="cap">King bedrooms</span></div>
            <div><b>{site.lounges}</b><span className="cap">Lounges</span></div>
            <div><b>{site.maxGuests}</b><span className="cap">Guests, at most</span></div>
            <div><b>1</b><span className="cap">Private pool</span></div>
          </div>
        </section>
      }
      points={[
        { h: 'Four king rooms, no arguments', t: <p>Every bedroom has a king bed and an attached bathroom, two on each floor. Nobody gets stuck with a box room, which is half the battle when eight friends share a house.</p>, img: 'bedroom-balcony', alt: 'Bedroom with a carved headboard and balcony doors' },
        { h: 'Room to spread out', t: <p>Three lounges mean the card players, the film watchers and the early sleepers can all have a corner. The terrace looks across to the hills.</p>, img: 'living-tv', alt: 'TV lounge with grey sofas' },
        { h: 'The pool, after dark', t: <p>The infinity pool has underwater lights, so the evening doesn't end when the sun goes down.</p>, img: 'pool-view-portrait', alt: 'The pool edge with the mountains beyond' },
      ]}
      plan={{ title: <>Trips for <em>a group</em></>, body: <><p>The Chembra Peak trek (12 km) starts near Meppadi and runs with forest department guides. Soochipara Falls (15 km) and the 900 Kandi glass bridge (9 km) make a good half-day pair.</p><p>Driving in from Bangalore? Read our <a href="/bangalore-to-wayanad/">Bangalore to Wayanad route guide</a>: the Bandipur forest road shuts at night.</p></> }}
      plan2={<p>Friends book the whole villa as a group villa rental: four king bedrooms, three lounges and the pool for 8 people, or up to 12 with an extra guest in each room. It is a private villa for groups in Meppadi, so nobody else shares the house or the pool.</p>}
      faqs={[
    { q: 'Is it a good villa for group stay in Wayanad?', a: <p>Yes. You book the whole house, so it works as an exclusive villa for group holidays: no other guests, no reception desk and the pool to yourselves. As a private villa for group accommodation it sleeps 8, or up to 12.</p>, text: 'Yes. You book the whole house, so it works as an exclusive villa for group holidays: no other guests, no reception desk and the pool to yourselves. As a private villa for group accommodation it sleeps 8, or up to 12.' },
        { q: 'How big a group can stay?', a: <p>Up to {site.maxGuests} guests: two per bedroom, plus one extra in each room.</p>, text: `Up to ${site.maxGuests} guests: two per bedroom, plus one extra in each room.` },
        { q: 'Are there any group rules?', a: <p>The main guest must be 18 or over, and every guest needs a photo ID. <a href="/house-rules/">House rules</a>.</p>, text: 'The main guest must be 18 or over, and every guest needs a photo ID.' },
        { q: 'Can we cook our own food?', a: <p>Yes, there is a full kitchen and a table for eight.</p>, text: 'Yes, there is a full kitchen and a table for eight.' },
      ]}
      next={{ href: '/weekend-villa-wayanad/', title: 'Weekend getaways', img: 'bedroom-view-warm' }} />
  );
}
