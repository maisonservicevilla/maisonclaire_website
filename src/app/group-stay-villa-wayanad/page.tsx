import { site } from '@/content/site';
import { meta } from '@/lib/meta';
import { Landing } from '@/components/Landing';

export const metadata = meta('/group-stay-villa-wayanad/', 'Group Stay Villa in Wayanad | Villa for Friends, Meppadi',
  'A private villa for groups in Meppadi, Wayanad: four equal king bedrooms, three lounges, a private pool and a kitchen. For friends and family, sleeps 8.', { image: 'terrace-view' });

export default function Page() {
  return (
    <Landing path="/group-stay-villa-wayanad/" crumb="Group stays" heroImg="villa-night-pool" heroAlt="The villa and pool lit up at night"
      title={<>A group stay villa in Wayanad, <em>with nobody else around</em></>}
      facts={['4 equal bedrooms', 'Sleeps 8', 'Private pool', '3 lounges']}
      lead={<>Book the whole villa and the whole villa is yours: <em>four equal rooms, three lounges and a pool</em>, with no reception desk and no other guests.</>}
      points={[
        { h: 'Four equal rooms, no arguments', t: <p>Every bedroom has a king bed, an attached bathroom and a balcony. Nobody gets stuck with the box room, which is half the battle when eight friends share a house.</p>, img: 'bedroom-balcony', alt: 'Bedroom with a carved headboard and balcony doors' },
        { h: 'Room to spread out', t: <p>Three lounges mean the card players, the film watchers and the early sleepers can all have a corner. The terrace and balconies look across to the hills.</p>, img: 'living-tv', alt: 'TV lounge with grey sofas' },
        { h: 'The pool, after dark', t: <p>The infinity pool has underwater lights, so the evening doesn't end when the sun goes down.</p>, img: 'pool-dusk', alt: 'The pool at dusk under a pink sky' },
      ]}
      plan={{ title: <>Trips for <em>a group</em></>, body: <><p>The Chembra Peak trek (12 km) starts near Meppadi and runs with forest department guides. Soochipara Falls (15 km) and the 900 Kandi glass bridge (9 km) make a good half-day pair.</p><p>Driving in from Bangalore? Read our <a href="/bangalore-to-wayanad/">Bangalore to Wayanad route guide</a>: the Bandipur forest road shuts at night.</p></> }}
      plan2={<p>Maison Claire is a private villa for group accommodation in Wayanad and a group villa rental in Meppadi. Four equal bedrooms and a private pool make it an exclusive villa for group holidays and a villa for group stay that one group has to itself.</p>}
      faqs={[
        { q: 'How big a group can stay?', a: <p>Up to {site.sleeps} guests.{site.extraGuests ? ` ${site.extraGuests}.` : ' For a bigger group, ask before you book.'}</p>, text: `Up to ${site.sleeps} guests.` },
        { q: 'Are there any group rules?', a: <p>The main guest must be 18 or over, and every guest needs a photo ID. Groups of only men should check with us before booking. <a href="/house-rules/">House rules</a>.</p>, text: 'The main guest must be 18 or over, and every guest needs a photo ID. Groups of only men should check with the villa before booking.' },
        { q: 'Can we cook our own food?', a: <p>Yes, there is a full kitchen and a table for eight.</p>, text: 'Yes, there is a full kitchen and a table for eight.' },
      ]}
      next={{ href: '/weekend-villa-wayanad/', title: 'Weekend getaways', img: 'bedroom-view-warm' }} />
  );
}
