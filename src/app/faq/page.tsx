import { site } from '@/content/site';
import { meta } from '@/lib/meta';
import { Header } from '@/components/Chrome';
import { Crumbs, Faq, NextChapter, type QA } from '@/components/Bits';
import { BookingBand, TitleBlock } from '@/components/Sections';

export const metadata = meta('/faq/', 'Wayanad Villa FAQ | Maison Claire Service Villa, Meppadi',
  'Answers about staying at Maison Claire in Meppadi, Wayanad: guests, bedrooms, the private pool, kitchen, check-out, booking, getting here and what is nearby.');

const T = (q: string, text: string, a?: React.ReactNode): QA => ({ q, text, a: a || <p>{text}</p> });

const groups: { title: string; items: QA[] }[] = [
  { title: 'The villa', items: [
    T('Do we get the whole villa?', 'Yes. Maison Claire is rented as a whole house to one group at a time. The pool, garden, kitchen and all four bedrooms are yours.'),
    T('How many bedrooms and bathrooms are there?', `${site.bedrooms} bedrooms, each with a king bed and its own attached bathroom with a walk-in shower.`),
    T('How many guests can stay?', `Up to ${site.maxGuests}. The four king bedrooms sleep ${site.sleeps}, and each room takes one extra guest.`),
    T('Are the bedrooms air-conditioned?', site.ac ? 'Yes, the bedrooms have air conditioning.' : 'Please ask us before you book.'),
    T('Is there a kitchen?', 'Yes, a full kitchen with fridge, hob and chimney, microwave and a washing machine, plus a dining table for eight.'),
    T('Is the pool private?', 'Yes. The infinity-edge pool is only for your group, and it has underwater lights for evening swims.'),
    ...(site.wifi ? [T('Is there Wi-Fi?', 'Yes, there is Wi-Fi in the villa.')] : []),
    ...(site.parking ? [T('Is there parking?', site.parking + '.')] : []),
  ] },
  { title: 'Booking and stay', items: [
    T('How do I book?', 'Use the booking window on this website. It shows live dates and the price for the whole villa before you confirm.', <p>Use the <a href="/rates-booking/">booking window</a> on this website. It shows live dates and the price for the whole villa before you confirm.</p>),
    T('What time is check-in and check-out?', `Check-out is by ${site.checkOut}.${site.checkIn ? ` Check-in is from ${site.checkIn}.` : ' Your check-in time is shown when you book.'} Check-in is self check-in with a door keypad.`),
    T('What ID do we need?', 'Every guest needs a photo ID: passport, Aadhaar, driving licence or another government ID. The main guest must be 18 or older.'),
    T('Can we bring a pet?', site.pets || 'Please ask us before booking if you would like to bring a pet.'),
    T('Is Maison Claire a registered property?', `Yes. Its Kerala registration number is ${site.registrationNo}.`),
  ] },
  { title: 'Getting here and around', items: [
    T('Where is Maison Claire?', `In the hills around ${site.locality}, in south Wayanad, Kerala. Meppadi is about 12 km from Kalpetta.`, <p>In the hills around {site.locality}, in south Wayanad, Kerala. Meppadi is about 12 km from Kalpetta. <a href="/location/">Location and directions</a>.</p>),
    T('How far is Meppadi from Kalpetta?', 'About 12 km by road.'),
    T('What is the nearest airport and railway station?', 'Calicut International Airport is about 87 km from Meppadi, and Kozhikode railway station about 78 km.'),
    T('How do we get here from Bangalore?', 'By road via Mysuru and the Bandipur forest, roughly 280 to 310 km. The forest road is closed to traffic from 9 PM to 6 AM, so plan to cross it in daylight.', <p>By road via Mysuru and the Bandipur forest, roughly 280 to 310 km. The forest road is closed to traffic from 9 PM to 6 AM. <a href="/bangalore-to-wayanad/">Full route guide</a>.</p>),
    T('What is there to do nearby?', 'The 900 Kandi glass bridge is 9 km away, Kanthanpara Falls 10 km, Chembra Peak 12 km and Soochipara Falls 15 km.', <p>The 900 Kandi glass bridge is 9 km away, Kanthanpara Falls 10 km, Chembra Peak 12 km and Soochipara Falls 15 km. <a href="/things-to-do-near-meppadi/">Things to do near Meppadi</a>.</p>),
    T('Is Meppadi safe to visit now?', 'Tourism across Wayanad is open. The 2024 landslide hit Mundakkai and Chooralmala, villages in the hills of Meppadi panchayat. On heavy-rain alerts the district can close tourist spots for a day, so check before you set out.', <p>Tourism across Wayanad is open. The 2024 landslide hit Mundakkai and Chooralmala, villages in the hills of Meppadi panchayat. On heavy-rain alerts the district can close tourist spots for a day. <a href="/wayanad-travel-update/">Latest travel update</a>.</p>),
  ] },
];

export default function Page() {
  const all = groups.flatMap((g) => g.items);
  return (
    <>
      <Header current="/faq/" />
      <main id="main">
        <TitleBlock crumbs={<Crumbs items={[['/faq/', 'FAQ']]} />} title={<>Wayanad villa FAQ: <em>questions, answered plainly</em></>}
          intro={<p>The things people ask before booking Maison Claire. Can't find yours? Ask through the booking window.</p>} />
        <section className="wrap" style={{ paddingBottom: 'var(--space)' }}>
          {groups.map((g) => (
            <div key={g.title} className="g12" style={{ marginBottom: 56 }}>
              <h2 className="c-1-4 cap cap--pool" style={{ paddingTop: 22 }}>{g.title}</h2>
              <div className="c-6-7"><Faq items={g.items} schema={false} /></div>
            </div>
          ))}
        </section>
        <BookingBand />
        <NextChapter href="/house-rules/" title="House rules" img="living-teal-light" />
      </main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: all.map((q) => ({ '@type': 'Question', name: q.q, acceptedAnswer: { '@type': 'Answer', text: q.text } })) }) }} />
    </>
  );
}
