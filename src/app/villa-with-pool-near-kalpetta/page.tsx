import { site } from '@/content/site';
import { meta } from '@/lib/meta';
import { Landing } from '@/components/Landing';
import type { QA } from '@/components/Bits';

const qa = (q: string, text: string, a?: React.ReactNode): QA => ({ q, a: a ?? <p>{text}</p>, text });

const distances: { name: string; km: string; note: string }[] = [
  { name: 'Kalpetta town', km: 'About 12 km', note: 'Shops, banks and the bus stand' },
  { name: '900 Kandi glass bridge', km: '9 km', note: 'Reached by jeep through the forest' },
  { name: 'Kanthanpara Falls', km: '10 km', note: 'Short walk from the road' },
  { name: 'Chembra Peak', km: '12 km', note: 'Guided trek from the forest office near Meppadi' },
  { name: 'Soochipara Falls', km: '15 km', note: 'About 2 km walk down to the falls' },
  { name: 'Lakkidi Viewpoint', km: '20 km', note: 'Top of the Thamarassery ghat road' },
  { name: 'Edakkal Caves', km: '24 km', note: 'Closed on Mondays' },
  { name: 'Karapuzha Dam', km: '24 km', note: 'Reservoir views and a zipline' },
];

export const metadata = meta('/villa-with-pool-near-kalpetta/', 'Villa with Pool near Kalpetta | Maison Claire, Meppadi',
  'A villa with pool near Kalpetta: Maison Claire is about 12 km away in Meppadi, close to Chembra Peak, Kanthanpara Falls and the 900 Kandi bridge.', { image: 'pool-infinity-mountain' });

export default function Page() {
  return (
    <Landing path="/villa-with-pool-near-kalpetta/" crumb="Near Kalpetta" heroImg="pool-infinity-mountain" heroAlt="Infinity pool at Maison Claire facing the Wayanad hills in morning light"
      title={<>A villa with pool near Kalpetta, <em>on the Chembra side</em></>}
      facts={['12 km from Kalpetta', 'Chembra Peak 12 km', 'Private pool', 'Meppadi']}
      lead={<>Maison Claire is a private pool villa about 12 km from Kalpetta, in Kappamkolly near Meppadi. That puts you on the south side of the district, <em>closer to Chembra Peak and the waterfalls than the town is</em>, and a short drive from Kalpetta when you need it.</>}
      module={
        <section className="section--tight band-mist">
          <div className="wrap g12">
            <div className="c-1-4 stack"><p className="cap cap--pool">Distances</p><h2 className="d2">How far <em>is everything?</em></h2></div>
            <div className="c-6-7 prose">
              <table>
                <thead><tr><th scope="col">From the villa</th><th scope="col">By road</th><th scope="col">Good to know</th></tr></thead>
                <tbody>
                  {distances.map((d) => (
                    <tr key={d.name}><td>{d.name}</td><td>{d.km}</td><td>{d.note}</td></tr>
                  ))}
                </tbody>
              </table>
              <p className="small" style={{ marginTop: 16 }}>Road distances from the property listing. Driving times depend on traffic, weather and the hill roads, so allow extra.</p>
            </div>
          </div>
        </section>
      }
      points={[
        { h: 'Rooms that face Chembra', t: <p>Two of the four king bedrooms look towards Chembra Peak, at about 2,100 m the highest point in Wayanad. From a hotel in Kalpetta you would drive towards it. Here you wake up facing it.</p>, img: 'bedroom-mountain-view', alt: 'Bedroom with a king bed and glass doors facing the hills' },
        { h: 'Back from town, straight to the water', t: <p>Spend the morning in Kalpetta or at the sights, then walk the stone path across the lawn to a pool only your group uses. For the full details of the pool itself, see our <a href="/private-pool/">private pool</a> page.</p>, img: 'exterior-path', alt: 'Stone path across the lawn to the pool, with chairs' },
        { h: 'Quiet, but not remote', t: <p>Restaurants are about 200 m away, the medical college is 3 km and there is EV charging 6 km away. Balconies look out over palms to the hills, and the town is close enough for anything you forgot.</p>, img: 'bedroom-garden', alt: 'Bedroom with glass doors onto a balcony, palms and hills beyond' },
      ]}
      plan={{ title: <>Kalpetta or <em>Meppadi?</em></>, body: <><p>Kalpetta is the district's main town, and handy for shops and onward buses. Meppadi, 12 km south, is closer to the Chembra trek and the southern waterfalls, so you spend less time in the car on the days that matter. Read more about <a href="/meppadi/">Meppadi</a> and our <a href="/location/">location</a>.</p><p>Plans further east and north, such as Edakkal Caves near Sulthan Bathery or <a href="/banasura-sagar-dam/">Banasura Sagar Dam</a>, mean a longer drive from Meppadi, so give them a full day. Our guide to <a href="/where-to-stay-in-wayanad/">where to stay in Wayanad</a> compares the areas.</p></> }}
      plan2={<p>If you searched for a private pool villa in Kalpetta, Maison Claire is about 12 km away, with the whole house and pool for your group. It is also a pool villa near Chembra Peak, 12 km from the trek. Whatever brings you to Kalpetta, see free dates and the whole-villa price in the booking window, or WhatsApp us for directions from town.</p>}
      faqs={[
        qa('How far is the villa from Kalpetta?', 'About 12 km by road. The villa is in Kappamkolly, near Meppadi, on the south side of Kalpetta.'),
        qa('Is the villa close to Chembra Peak?', 'Yes. Chembra Peak is about 12 km away, and the trek starts from the forest office near Meppadi. Two of the four bedrooms face the peak.',
          <p>Yes. Chembra Peak is about 12 km away, and the trek starts from the forest office near Meppadi. Two of the four bedrooms face the peak. Read our <a href="/chembra-peak-trek/">Chembra Peak trek guide</a>.</p>),
        qa('Is the pool private?', 'Yes. The villa is rented whole to one group, so only your group uses the infinity pool. It has underwater lights for evening swims.',
          <p>Yes. The villa is rented whole to one group, so only your group uses the infinity pool. It has underwater lights for evening swims. More on the <a href="/private-pool/">pool page</a>.</p>),
        qa('Is Meppadi a good base for Wayanad?', 'For the south of the district, yes: the 900 Kandi glass bridge is 9 km away, Kanthanpara Falls 10 km, Chembra Peak 12 km and Soochipara Falls 15 km. Edakkal Caves and Karapuzha Dam are about 24 km.'),
        qa('Is the area open after the 2024 landslide?', 'Yes. The 2024 landslide hit Mundakkai and Chooralmala, villages in the hills of Meppadi panchayat. Tourism across Wayanad is open, though the district can close tourist spots for a day on heavy-rain alerts.',
          <p>Yes. The 2024 landslide hit Mundakkai and Chooralmala, villages in the hills of Meppadi panchayat. Tourism across Wayanad is open, though the district can close tourist spots for a day on heavy-rain alerts. See our <a href="/wayanad-travel-update/">travel update</a>.</p>),
      ]}
      next={{ href: '/meppadi/', title: 'Meppadi', img: 'balcony-view' }} />
  );
}
