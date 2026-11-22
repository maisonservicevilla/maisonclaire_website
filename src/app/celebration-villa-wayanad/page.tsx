import { site } from '@/content/site';
import { meta } from '@/lib/meta';
import { Landing } from '@/components/Landing';
import type { QA } from '@/components/Bits';

const qa = (q: string, text: string, a?: React.ReactNode): QA => ({ q, a: a ?? <p>{text}</p>, text });

const before: [string, string, string][] = [
  ['Tell us the occasion', 'When you book', 'Add a line to your booking request: a 60th birthday, a 25th anniversary, a first birthday. It helps us answer your questions properly.'],
  ['Ask before you plan extras', 'Decorations, cake, a cook', 'None of these are part of the booking as listed. Message us on WhatsApp first and we will tell you what works for your dates.'],
  ['Count everyone staying', `Up to ${site.maxGuests} guests`, 'The house sleeps 8, or 12 with one extra guest per room. If anyone is joining only for the evening, ask us before you invite them.'],
  ['Read the house rules', 'Before the day', 'The villa is a home, not an events hall. The house rules cover check-out, ID and what is allowed.'],
];

export const metadata = meta('/celebration-villa-wayanad/', 'Birthday Villa in Wayanad | Private Pool Celebrations',
  'A birthday villa in Wayanad for small family celebrations: milestone birthdays and anniversaries at a private pool villa in Meppadi, booked whole.', { image: 'balcony-view' });

export default function Page() {
  return (
    <Landing path="/celebration-villa-wayanad/" crumb="Celebrations" heroImg="balcony-view" heroAlt="Two chairs on a bedroom balcony facing the mountains"
      title={<>A birthday villa in Wayanad, <em>for the people who matter</em></>}
      facts={['Whole villa', 'Private pool', 'Table for 8', `Up to ${site.maxGuests} guests`]}
      lead={<>Maison Claire suits small family celebrations: a parent's 60th, a 25th anniversary, a first birthday with both sets of grandparents. You book the whole house, so the people at the table are your people. <em>If you want anything beyond a family dinner, ask us first.</em></>}
      module={
        <section className="section--tight band-mist">
          <div className="wrap g12">
            <div className="c-1-4 stack"><p className="cap cap--pool">Before you plan</p><h2 className="d2">Four things <em>to sort early</em></h2></div>
            <div className="c-6-7">
              <ol className="plan">{before.map(([n, w, d]) => <li key={n}><span className="plan__n">{n}</span><span className="cap cap--muted">{w}</span><span className="plan__d">{d}</span></li>)}</ol>
              <p className="lead" style={{ marginTop: 20 }}>The full list is on our <a href="/house-rules/">house rules</a> page.</p>
            </div>
          </div>
        </section>
      }
      points={[
        { h: 'Dinner at one table', t: <p>The dining table seats eight, and the full kitchen lets you cook the birthday person's favourite dish exactly the way they like it. For a night off, restaurants are about 200 m away. See the <a href="/kitchen-dining/">kitchen and dining room</a>.</p>, img: 'dining', alt: 'The dining table for eight inside the villa' },
        { h: 'Give them the room with the view', t: <p>Two of the four king bedrooms face Chembra Peak, the highest point in Wayanad. Put the couple celebrating their anniversary in one of those, and let them wake to the hills.</p>, img: 'bedroom-view-warm', alt: 'Evening light in a bedroom with balcony doors looking out to the hills' },
        { h: 'Photos by the water', t: <p>The infinity edge drops away towards the hills, which makes the pool the place for the family photo. Wait until dusk, when the underwater lights come on and the sky changes colour.</p>, img: 'pool-view-portrait', alt: 'The pool edge with the mountains beyond' },
      ]}
      plan={{ title: <>A celebration day, <em>gently</em></>, body: <><p>Start with something easy. <a href="/kanthanpara-waterfalls/">Kanthanpara Falls</a> is 10 km away and a short walk from the road, so grandparents can come too. Back for lunch, a long rest, a swim, then dinner at home.</p><p>Read what other families wrote on our <a href="/reviews/">reviews page</a>, and if the celebration is mostly about the children, our <a href="/wayanad-with-kids/">Wayanad with kids</a> guide has more ideas.</p></> }}
      plan2={<p>For an anniversary stay in Wayanad with a private pool, or a birthday with the whole family, Maison Claire is a celebration stay in Kerala where nobody else shares the house. Pick the date you are celebrating in the booking window to see the whole-villa price, and ask us on WhatsApp before you plan the cake or the decorations.</p>}
      faqs={[
        qa('Can we celebrate a birthday at the villa?', 'Yes, for a small family celebration among the people staying. Tell us the occasion when you book, and ask us before you plan anything extra.'),
        qa('Do you provide decorations or a cake?', 'Decorations, cakes and other extras are not part of the booking as listed. Ask us on WhatsApp before you book and we will tell you what is possible for your dates.'),
        qa('Can we invite guests who are not staying over?', 'Ask us before you invite anyone who is not staying. The villa is booked as a stay for your group, and house rules apply.',
          <p>Ask us before you invite anyone who is not staying. The villa is booked as a stay for your group, and <a href="/house-rules/">house rules</a> apply.</p>),
        qa('Is the villa good for an anniversary?', 'Yes. Two of the four king bedrooms face Chembra Peak, and the private pool is lit after dark. As you book the whole house, it suits an anniversary celebrated with family.'),
        qa('How many people can stay for a celebration?', `${site.sleeps} in the four king bedrooms, or up to ${site.maxGuests} with one extra guest in each room.`),
      ]}
      next={{ href: '/reviews/', title: 'Guest reviews', img: 'living-chesterfield' }} />
  );
}
