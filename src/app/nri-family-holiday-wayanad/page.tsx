import { site } from '@/content/site';
import { meta } from '@/lib/meta';
import { Landing } from '@/components/Landing';
import type { QA } from '@/components/Bits';

const qa = (q: string, text: string, a?: React.ReactNode): QA => ({ q, a: a ?? <p>{text}</p>, text });

const arrivals: [string, string, string][] = [
  ['Calicut airport (Karipur)', 'About 87 to 92 km', 'The nearest airport. The road climbs the Thamarassery ghat to Lakkidi, then runs on to Meppadi. Allow extra time on holiday weekends.'],
  ['Kannur airport', 'About 110 to 120 km', 'Roughly 3 to 3.5 hours by road over the Palchuram or Nedumpoil ghat roads. Useful when Calicut flights are full.'],
  ['Kozhikode railway station', 'About 78 km', 'For relatives coming from elsewhere in Kerala by train. Wayanad has no railway line, so the last stretch is by road.'],
  ['Bengaluru airport', 'Long-haul, then a drive', 'The villa is about 280 to 310 km from Bengaluru via Mysuru, Gundlupet and Muthanga. The Bandipur forest road on the way is closed to private vehicles from 9 PM to 6 AM.'],
];

export const metadata = meta('/nri-family-holiday-wayanad/', 'Villa in Wayanad for NRI Family Holidays | Maison Claire',
  'A villa in Wayanad for NRI families home on holiday: four king bedrooms, a kitchen for home food and a private pool, about 90 km from Calicut airport.', { image: 'exterior-day' });

export default function Page() {
  return (
    <Landing path="/nri-family-holiday-wayanad/" crumb="NRI family holidays" heroImg="exterior-day" heroAlt="The two-storey white villa with a stone path through the garden"
      title={<>A villa in Wayanad for NRI families, <em>home for the holidays</em></>}
      facts={['Whole villa', '4 king bedrooms', 'Full kitchen', 'Calicut airport 87 to 92 km']}
      lead={<>Maison Claire is a whole-house villa in Meppadi, about 87 to 92 km by road from Calicut airport, with four king bedrooms so parents, cousins and grandparents can stay under one roof. When half the family flies in from the Gulf and the other half drives up from Kerala, <em>everyone lands in the same house</em>.</>}
      module={
        <section className="section--tight band-mist">
          <div className="wrap g12">
            <div className="c-1-4 stack"><p className="cap cap--pool">Getting everyone here</p><h2 className="d2">Flights, trains <em>and the ghat road</em></h2></div>
            <div className="c-6-7">
              <ol className="plan">{arrivals.map(([n, w, d]) => <li key={n}><span className="plan__n">{n}</span><span className="cap cap--muted">{w}</span><span className="plan__d">{d}</span></li>)}</ol>
              <p className="lead" style={{ marginTop: 20 }}>Plan a taxi from the airport for each arriving group. Check-in is by door keypad. Tell us your flight times when you book and we will confirm the check-in time. Route details are in our <a href="/calicut-to-wayanad/">Calicut to Wayanad</a> and <a href="/kannur-to-wayanad/">Kannur to Wayanad</a> guides.</p>
            </div>
          </div>
        </section>
      }
      points={[
        { h: 'Ground-floor rooms for the elders', t: <p>Two of the four bedrooms are on the ground floor, each with its own bathroom and walk-in shower, so grandparents never need the stairs. All four rooms are air-conditioned and have a king bed. The other two are upstairs, for the younger lot.</p>, img: 'bedroom-warm', alt: 'Bedroom with a wooden four-poster king bed, a painting of flowers and long curtains' },
        { h: 'Home food, cooked your way', t: <p>After months of eating out abroad, many families want one thing: a proper meal from their own kitchen. There is a fridge, a hob with a chimney and a microwave, plus a washing machine for the suitcases of travel clothes. Bring the masala tins from home and cook for the whole family.</p>, img: 'dining-counter', alt: 'Marble dining table with cream chairs and a wash basin beyond' },
        { h: 'Room for the whole reunion', t: <p>Three lounges mean the children can take over one with a film while the elders talk in another. The garden, terrace and a pool only your family uses fill the gaps between meals.</p>, img: 'living-chesterfield', alt: 'Sitting room with two beige sofas and a round rug' },
      ]}
      plan={{ title: <>Planning a trip <em>from the Gulf</em></>, body: <><p>Most NRI families come home in December or during the long summer school break. December sits in Wayanad's peak season: cool, dry and busy, so book early. Our <a href="/best-time-to-visit-wayanad/">best time to visit Wayanad</a> guide covers each season.</p><p>The summer break falls in the monsoon, from June to September. The hills are green and the villa is quiet, but heavy-rain alerts can close tourist spots for a day and the ghat roads need care. Read <a href="/monsoon-in-wayanad/">monsoon in Wayanad</a> and our <a href="/wayanad-travel-update/">Wayanad travel update</a> before you fix dates.</p></> }}
      plan2={<p>For a Gulf family holiday in Kerala in December, or a summer reunion, Maison Claire works as a family reunion villa in Kerala: one booking for the whole house, up to {site.maxGuests} guests. The drive from Calicut airport to the Wayanad villa is about 87 to 92 km. Once the flights are fixed, pick the dates in the booking window to see the whole-villa price, and send any travel questions to us on WhatsApp.</p>}
      faqs={[
        qa('How far is the villa from Calicut airport?', 'About 87 to 92 km by road, up the Thamarassery ghat. Kozhikode to Meppadi alone is about 1 hour 20 minutes without traffic and the airport is further out, so allow more, especially on holiday weekends.'),
        qa('Do you offer airport pickup?', 'Airport pickup is not part of the booking details we publish. Ask us on WhatsApp before you book, or plan a taxi from the airport.'),
        qa('Are there ground-floor rooms for elderly parents?', 'Yes. Two of the four bedrooms are on the ground floor, each with its own bathroom and walk-in shower.'),
        qa('Can we cook our own food?', 'Yes. The kitchen has a fridge, a hob with a chimney, a microwave and a washing machine, and the dining table seats eight. Restaurants are about 200 m away for nights off.'),
        qa('How many family members can stay?', `${site.sleeps} in the four king bedrooms, or up to ${site.maxGuests} with one extra guest in each room. Every guest needs a photo ID, and the main guest must be 18 or over.`),
      ]}
      next={{ href: '/calicut-to-wayanad/', title: 'Calicut to Wayanad', img: 'exterior-path' }} />
  );
}
