import { site } from '@/content/site';
import { meta } from '@/lib/meta';
import { Img } from '@/components/Img';
import { Guide, FactBox } from '@/components/Guide';

const d = 'Where to stay in Meppadi, Wayanad: the town, distance from Kalpetta, nearby sights, and a private 4-bedroom pool villa for families and groups.';
export const metadata = meta('/meppadi/', 'Where to Stay in Meppadi, Wayanad | Private Villa in Meppadi', d, { image: 'exterior-day', type: 'article' });

export default function Page() {
  return (
    <Guide path="/meppadi/" crumbs={[['/location/', 'Location'], ['/meppadi/', 'Staying in Meppadi']]}
      title={<>Where to stay in Meppadi, <em>south Wayanad</em></>} headline="Where to stay in Meppadi, Wayanad" description={d}
      intro={<p>Meppadi is a small hill town about 12 km from Kalpetta. It sits close to Chembra Peak, Soochipara Falls and the 900 Kandi forest, which makes it a practical base for south Wayanad.</p>}
      img="exterior-day" imgAlt="Maison Claire villa in Meppadi with its garden path" imgCaption="Maison Claire, in the hills around Meppadi."
      aside={<FactBox rows={[['From Kalpetta', 'About 12 km'], ['Kozhikode station', 'About 78 km'], ['Calicut airport', 'About 87 km'], ['Chembra Peak', '12 km from the villa'], ['Soochipara Falls', '15 km from the villa']]} />}
      sources={[['Wikipedia: 900 Kandi (distances from Meppadi)', 'https://en.wikipedia.org/wiki/900_Kandi'], ['Wikipedia: Chembra Peak', 'https://en.wikipedia.org/wiki/Chembra_Peak']]}
      next={{ href: '/things-to-do-near-meppadi/', title: 'Things to do', img: 'pool-view-portrait' }}
      about={{ '@type': 'Place', name: 'Meppadi, Wayanad, Kerala' }}>
      <h2>Why stay in Meppadi</h2>
      <p>Many visitors to Wayanad base themselves in Kalpetta or Vythiri. Meppadi is quieter and further south, and that is its advantage: the town is the starting point for the Chembra Peak trek, and Soochipara Falls and the 900 Kandi forest are on roads that run out of it.</p>
      <p>If your plans include any of those, staying in Meppadi saves you the morning drive and lets you start early, before the day visitors arrive.</p>

      <h2>Getting to Meppadi</h2>
      <p>Meppadi is about 12 km from Kalpetta, the district headquarters. Buses run from Kalpetta to Meppadi, and jeeps run from Meppadi into the forest areas such as 900 Kandi. By train, the nearest station is Kozhikode, about 78 km away; Calicut International Airport is about 87 km. Coming from Bangalore, see the <a href="/bangalore-to-wayanad/">Bangalore to Wayanad route guide</a>.</p>

      <figure style={{ marginTop: 40 }}><div className="ph ratio-32"><Img name="exterior-pool" alt="The private pool beside the villa in Meppadi" sizes="(min-width: 900px) 56vw, 100vw" /></div><figcaption className="small">The pool at Maison Claire.</figcaption></figure>
      <h2>A private villa in Meppadi</h2>
      <p>Maison Claire is a {site.bedrooms}-bedroom service villa in the hills around Meppadi. You rent the whole house: four king bedrooms with attached bathrooms, three lounges, a full kitchen and a private infinity pool facing the mountains. It sleeps {site.sleeps}, or up to {site.maxGuests} with an extra guest in each room, which suits families and groups who would otherwise need several hotel rooms.</p>
      <p>Restaurants are about 200 m from the villa, and there is a medical college about 3 km away. <a href="/the-villa/">See the villa</a> or <a href="/rates-booking/">check your dates</a>.</p>

      <h2>A note on 2024</h2>
      <p>In July 2024 a landslide hit Mundakkai and Chooralmala, villages in the hills of Meppadi panchayat. Wayanad's tourism has reopened since. For current road and weather notes, read the <a href="/wayanad-travel-update/">Wayanad travel update</a>.</p>
    </Guide>
  );
}
