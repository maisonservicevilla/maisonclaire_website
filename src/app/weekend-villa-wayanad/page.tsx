import { meta } from '@/lib/meta';
import { Landing } from '@/components/Landing';

export const metadata = meta('/weekend-villa-wayanad/', 'Weekend Villa Stay in Wayanad | Private Villa Getaway, Meppadi',
  'A peaceful private villa for a weekend getaway in Wayanad: your own infinity pool, four king bedrooms and the hills of Meppadi. Plan your weekend.', { image: 'bedroom-view-warm' });

export default function Page() {
  return (
    <Landing path="/weekend-villa-wayanad/" crumb="Weekend getaways" heroImg="pool-dusk" heroAlt="The private pool at dusk under a pink sky"
      title={<>A weekend villa in Wayanad, <em>two slow days</em></>}
      facts={['Private pool', 'Hill views', 'Self check-in', 'Meppadi']}
      lead={<>Arrive on Friday evening, let yourselves in, and don't drive anywhere until Sunday. <em>That is the whole plan</em>, if you want it to be.</>}
      points={[
        { h: 'Saturday morning', t: <p>Coffee on a balcony facing the hills, then a swim before anyone else is up. If you want to go out, Kanthanpara Falls is only 10 km away.</p>, img: 'balcony-view', alt: 'Balcony chairs facing the mountains' },
        { h: 'Saturday evening', t: <p>Cook dinner together in the full kitchen, or walk to the restaurants about 200 m away. Then back to the pool when the lights come on.</p>, img: 'villa-night-pool', alt: 'The villa and pool at night' },
        { h: 'Sunday', t: <p>Check-out is by 11 AM. Heading back towards Kozhikode? Stop at Lakkidi Viewpoint (20 km) at the top of the ghat road.</p>, img: 'terrace-view', alt: 'Terrace looking out over the trees' },
      ]}
      plan2={<p>Maison Claire is a peaceful villa for a weekend getaway and a private villa for a weekend trip from Bangalore, Kozhikode or Mysuru. For a private villa getaway with your own pool, book a weekend villa stay in Wayanad here.</p>}
      faqs={[
        { q: 'Can we book just for a weekend?', a: <p>Yes. Pick your dates in the booking window to see if the weekend is free and the price for those nights.</p>, text: 'Yes. Pick your dates in the booking window to see if the weekend is free and the price.' },
        { q: 'How late can we arrive?', a: <p>Check-in is self check-in with a door keypad, which makes a late arrival easier. Tell us your arrival time when you book. Drivers from Bangalore should note the Bandipur forest road is closed from 9 PM to 6 AM.</p>, text: 'Check-in is self check-in with a door keypad, which makes a late arrival easier. Tell us your arrival time when you book. The Bandipur forest road from Bangalore is closed from 9 PM to 6 AM.' },
      ]}
      next={{ href: '/location/', title: 'Location', img: 'terrace-view' }} />
  );
}
