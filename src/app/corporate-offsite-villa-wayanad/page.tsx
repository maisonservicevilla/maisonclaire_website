import { site } from '@/content/site';
import { meta } from '@/lib/meta';
import { Landing } from '@/components/Landing';
import type { QA } from '@/components/Bits';

const qa = (q: string, text: string, a?: React.ReactNode): QA => ({ q, a: a ?? <p>{text}</p>, text });

const askFirst: [string, string, string][] = [
  ['Wi-Fi', 'Ask us', 'We do not list Wi-Fi as confirmed on this site. If the team needs to work online, check with us on WhatsApp before you book.'],
  ['GST invoice', 'Ask us', 'If your company needs a GST invoice, ask before you book so the booking can be set up the right way.'],
  ['Room sharing', `${site.sleeps} to ${site.maxGuests} people`, 'Four king rooms: two to a room sleeps 8, and one extra guest in each room takes the team to 12. Agree who shares before you arrive.'],
  ['Arrival', 'Self check-in', 'Check-in is by door keypad. Tell us when the team expects to arrive when you book, and we will confirm the check-in time.'],
];

export const metadata = meta('/corporate-offsite-villa-wayanad/', 'Team Outing Villa in Wayanad | Offsite from Bangalore',
  'A team outing villa in Wayanad for teams of up to 12: four king rooms, three lounges for sessions, treks nearby. An offsite within reach of Bangalore.', { image: 'living-warm' });

export default function Page() {
  return (
    <Landing path="/corporate-offsite-villa-wayanad/" crumb="Team offsites" heroImg="living-teal-light" heroAlt="Bright lounge with a teal sofa and tall windows"
      title={<>A team outing villa in Wayanad, <em>for small teams</em></>}
      facts={[`Up to ${site.maxGuests} people`, '3 lounges', 'Weekday stays', 'Treks nearby']}
      lead={<>For a team of up to {site.maxGuests}, Maison Claire works as a private base: four king bedrooms, three lounges to split into session rooms, and the Chembra Peak trek 12 km away. Book it for a few weekdays, <em>run the sessions in the morning and walk the hills after lunch</em>.</>}
      module={
        <section className="section--tight band-mist">
          <div className="wrap g12">
            <div className="c-1-4 stack"><p className="cap cap--pool">Ask us first</p><h2 className="d2">The practical <em>questions</em></h2></div>
            <div className="c-6-7">
              <ol className="plan">{askFirst.map(([n, w, d]) => <li key={n}><span className="plan__n">{n}</span><span className="cap cap--muted">{w}</span><span className="plan__d">{d}</span></li>)}</ol>
              <p className="lead" style={{ marginTop: 20 }}>Questions about the booking itself? See <a href="/rates-booking/">rates and booking</a> or our <a href="/faq/">FAQ</a>.</p>
            </div>
          </div>
        </section>
      }
      points={[
        { h: 'Pairs, or a room each', t: <p>Every bedroom has a king bed, an attached bathroom with a walk-in shower and air-conditioning. A team of eight shares in pairs. A leadership group of four can take a room each and still have the whole house.</p>, img: 'bedroom-grey', alt: 'Bedroom with a grey upholstered king bed and a framed sunset painting' },
        { h: 'Sessions with a view', t: <p>Three separate lounges let you run a planning session in one, breakout chats in another and keep the third for downtime. Take the stand-up out to the terrace, which looks over the trees to the hills. Bring your own flip charts and screens. The <a href="/living-spaces/">living spaces</a> page shows each room.</p>, img: 'terrace-view', alt: 'The terrace looking over the trees to the hills' },
        { h: 'Cook together, or eat out', t: <p>Cooking dinner together is a team exercise of its own, and nobody needs a slide deck for it. The kitchen has a fridge, a hob with a chimney and a microwave. On busy days, restaurants are about 200 m away.</p>, img: 'kitchen', alt: 'Villa kitchen with fridge and hob' },
      ]}
      plan={{ title: <>Team days <em>out</em></>, body: <><p>The <a href="/chembra-peak-trek/">Chembra Peak trek</a> is a proper team day: a guided walk from the forest office near Meppadi up to the heart-shaped lake. Numbers are capped, so confirm the day's rules with the forest office on +91 4936 282001. Soochipara Falls, 15 km away, has a walk of about 2 km down to the water.</p><p>If you plan Edakkal Caves (24 km), avoid Monday, when it is closed, and go early, because the daily visitor cap is often reached by afternoon. Driving from the city? Our <a href="/bangalore-to-wayanad/">Bangalore to Wayanad guide</a> explains the Bandipur forest road, closed to private vehicles from 9 PM to 6 AM.</p></> }}
      plan2={<p>The villa is about 280 to 310 km from Bengaluru via Mysuru, Gundlupet and Muthanga, which makes Maison Claire a corporate offsite within a day's drive of Bangalore and far enough to switch off. For a team retreat in Wayanad of up to {site.maxGuests} people, hold a few weekdays in the booking window, then send your Wi-Fi and invoice questions to us on WhatsApp.</p>}
      faqs={[
        qa('How many people can the villa take for a team outing?', `${site.sleeps} people two to a room, or up to ${site.maxGuests} with one extra guest in each of the four king bedrooms.`),
        qa('Is there Wi-Fi for work sessions?', 'Please ask us on WhatsApp before you book. Wi-Fi is not listed as confirmed on this site, so check it if your team needs to work online.'),
        qa('Can you provide a GST invoice?', 'Ask us before you book. Tell us your company details and we will let you know what we can provide.'),
        qa('Can we book on weekdays?', 'Yes. Pick your dates in the booking window to see which weekdays are free and the whole-villa price for them.'),
        qa('How far is the villa from Bangalore?', 'The villa is about 280 to 310 km from Bengaluru via Mysuru, Gundlupet and Muthanga. The Bandipur forest stretch is closed to private vehicles from 9 PM to 6 AM, so plan to clear it before then.'),
      ]}
      next={{ href: '/bangalore-to-wayanad/', title: 'Bangalore to Wayanad', img: 'exterior-day' }} />
  );
}
