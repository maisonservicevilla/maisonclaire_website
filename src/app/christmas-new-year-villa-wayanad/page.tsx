import { site } from '@/content/site';
import { meta } from '@/lib/meta';
import { Landing } from '@/components/Landing';
import type { QA } from '@/components/Bits';

const qa = (q: string, text: string, a?: React.ReactNode): QA => ({ q, a: a ?? <p>{text}</p>, text });

const roadPlan: [string, string, string][] = [
  ['Book early', 'Peak season', 'November to February is the busiest stretch of the Wayanad year, and the villa goes to one group per night. Christmas week and 31 December are the most sought-after nights of the season.'],
  ['Climb the ghat in daylight', 'Thamarassery churam', 'The road up from Kozhikode is 14 km with nine hairpin bends between Adivaram and Lakkidi. On holiday weekends traffic here has crawled for hours, so start early in the day.'],
  ['Driving from Bangalore', 'Bandipur forest road', 'The NH 766 stretch through Bandipur is closed to private vehicles from 9 PM to 6 AM. Plan to be through it well before nine.'],
  ['Leaving on 1 January', 'Check-out 11 AM', 'The ghat roads are busy on New Year\'s Day too. Pack the night before and leave early in the morning.'],
];

export const metadata = meta('/christmas-new-year-villa-wayanad/', 'New Year Villa in Wayanad | Christmas Stay, Maison Claire',
  'A new year villa in Wayanad for one group: private infinity pool, four king bedrooms and a kitchen in Meppadi. Peak dates go first, so plan early.', { image: 'pool-dusk' });

export default function Page() {
  return (
    <Landing path="/christmas-new-year-villa-wayanad/" crumb="Christmas & New Year" heroImg="pool-dusk-portrait" heroAlt="The pool lit up at dusk under a pink sky over the hills"
      title={<>A new year villa in Wayanad, <em>with the pool to yourselves</em></>}
      facts={['Whole villa', 'Private pool', `Up to ${site.maxGuests} guests`, 'Peak season']}
      lead={<>Yes, you can spend Christmas and New Year at Maison Claire, and the whole villa is yours: four king bedrooms, three lounges and a lit infinity pool for one group. These are the busiest nights of the Wayanad year, so <em>if you want them, ask early</em>.</>}
      module={
        <section className="section--tight band-mist">
          <div className="wrap g12">
            <div className="c-1-4 stack"><p className="cap cap--pool">Holiday planning</p><h2 className="d2">Dates first, <em>then the road</em></h2></div>
            <div className="c-6-7">
              <ol className="plan">{roadPlan.map(([n, w, d]) => <li key={n}><span className="plan__n">{n}</span><span className="cap cap--muted">{w}</span><span className="plan__d">{d}</span></li>)}</ol>
              <p className="lead" style={{ marginTop: 20 }}>Coming up from the coast? Our <a href="/calicut-to-wayanad/">Calicut to Wayanad guide</a> covers the ghat road and where to stop.</p>
            </div>
          </div>
        </section>
      }
      points={[
        { h: 'See in the year at your own pace', t: <><p>Here the countdown happens with your own people, in your own lounge or by your own pool, with the underwater lights on and the hills dark beyond the edge.</p><p>It is still a private home, so <a href="/house-rules/">house rules</a> apply. Read them, and message us before you plan anything beyond a quiet evening.</p></>, img: 'living-warm', alt: 'Sitting room with two beige sofas, a round rug and soft ceiling lights' },
        { h: 'Christmas lunch at one long table', t: <p>The dining table seats eight beside the glass staircase, and the kitchen has a fridge, a hob with a chimney and a microwave. Bring the plum cake and the family recipes from home. Restaurants are about 200 m away, though holiday opening hours can change, so check on the day.</p>, img: 'dining-staircase', alt: 'Dining table for eight beside the glass staircase' },
        { h: 'Stay for the whole week', t: <p>Christmas to New Year is a long stretch, and the house is set up for it. A washing machine, a full kitchen and four bedrooms with their own bathrooms mean five or six nights feel as easy as a weekend.</p>, img: 'kitchen-evening', alt: 'Kitchen in the evening with a black fridge, washing machine and microwave' },
      ]}
      plan={{ title: <>December <em>days out</em></>, body: <><p>December falls in the forest department's trekking season, so the <a href="/chembra-peak-trek/">Chembra Peak trek</a>, 12 km from the villa, is at its best. Numbers are limited and a guide goes with each group, so reach the base camp near Meppadi early and confirm the day's rules with the forest office on +91 4936 282001.</p><p>For slower days, Kanthanpara Falls (10 km) and the 900 Kandi glass bridge (9 km) are both close. Expect crowds at the well-known spots in holiday week. Read <a href="/wayanad-in-december/">Wayanad in December</a> for the weather, the crowds and what to pack, and <a href="/things-to-do-near-meppadi/">things to do near Meppadi</a> for more ideas.</p></> }}
      plan2={<p>A Christmas stay in Wayanad at Maison Claire means the whole house and a lit pool for your group alone, which makes it a new year private pool villa in Kerala rather than a room in a busy resort. For Wayanad in December for groups of up to {site.maxGuests}, see which holiday nights are still open in the booking window before the rest of the family has finished deciding, and WhatsApp us with questions about the week.</p>}
      faqs={[
        qa('Can we book the villa for Christmas and New Year?', 'Yes. The whole villa goes to one group. Open the booking window to see which December nights are still free and the whole-villa price for them. Bookings are requests that we confirm.'),
        qa('How early should we book for New Year in Wayanad?', 'As early as your group can agree on dates. November to February is peak season, and with only one group per night, Christmas week and 31 December are the most sought-after nights of the season.'),
        qa('Is there a New Year party at the villa?', 'No. We do not run events. The villa is a private house for your group, and house rules apply, so ask us on WhatsApp before you plan anything beyond a quiet evening.',
          <p>No. We do not run events. The villa is a private house for your group, and <a href="/house-rules/">house rules</a> apply, so ask us on WhatsApp before you plan anything beyond a quiet evening.</p>),
        qa('What are the roads like in late December?', 'Busy. The Thamarassery ghat road from Kozhikode has 14 km of hairpin bends and holiday traffic can stall for hours, so climb it early in the day. From Bangalore, the Bandipur forest road is closed to private vehicles from 9 PM to 6 AM.'),
        qa('How many guests can stay over the holidays?', `${site.sleeps} in the four king bedrooms, or up to ${site.maxGuests} with one extra guest in each room.`),
      ]}
      next={{ href: '/wayanad-in-december/', title: 'Wayanad in December', img: 'balcony-view' }} />
  );
}
