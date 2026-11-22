import { meta } from '@/lib/meta';
import { Guide, FactBox } from '@/components/Guide';
import type { QA } from '@/components/Bits';
import { places, commons } from '@/content/places';

const d = 'Best area to stay in Wayanad: Kalpetta, Vythiri, Meppadi, Sulthan Bathery or Mananthavady. What each town is close to and who it suits best.';
export const metadata = meta('/where-to-stay-in-wayanad/', 'Best Area to Stay in Wayanad: Town-by-Town Guide', d, { image: 'place-lakkidi', type: 'article' });

const photo = places.find((p) => p.id === 'lakkidi')!;

const faqs: QA[] = [
  { q: 'Which is the best area to stay in Wayanad?',
    a: <p>It depends on your plans. Kalpetta is the most central. Vythiri is first on the road from Kozhikode. Meppadi is quiet and closest to Chembra Peak, Soochipara Falls and 900 Kandi. Sulthan Bathery suits Edakkal Caves and the Bengaluru road. Mananthavady suits north Wayanad.</p>,
    text: 'It depends on your plans. Kalpetta is the most central. Vythiri is first on the road from Kozhikode. Meppadi is quiet and closest to Chembra Peak, Soochipara Falls and 900 Kandi. Sulthan Bathery suits Edakkal Caves and the Bengaluru road. Mananthavady suits north Wayanad.' },
  { q: 'Is Kalpetta or Vythiri better to stay in?',
    a: <p>Kalpetta is the district headquarters, a working town with shops and buses, and it sits in the middle of the district. Vythiri is closer to Pookode Lake and Lakkidi and is the first area you reach after the Thamarassery ghat road. Choose Kalpetta for convenience and Vythiri if you are arriving from Kozhikode and want the forest close by.</p>,
    text: 'Kalpetta is the district headquarters, a working town with shops and buses, and it sits in the middle of the district. Vythiri is closer to Pookode Lake and Lakkidi and is the first area you reach after the Thamarassery ghat road. Choose Kalpetta for convenience and Vythiri if you are arriving from Kozhikode and want the forest close by.' },
  { q: 'How far is Meppadi from Kalpetta?',
    a: <p>Meppadi is about 12 km from Kalpetta by road.</p>,
    text: 'Meppadi is about 12 km from Kalpetta by road.' },
  { q: 'Where should I stay in Wayanad for the Chembra Peak trek?',
    a: <p>Stay in or near Meppadi. The Forest Department permit is issued at the base camp near Meppadi, and starting early matters, so a short morning drive helps. Maison Claire is 12 km from Chembra Peak.</p>,
    text: 'Stay in or near Meppadi. The Forest Department permit is issued at the base camp near Meppadi, and starting early matters, so a short morning drive helps. Maison Claire is 12 km from Chembra Peak.' },
  { q: 'Where should I stay in Wayanad if I am driving from Bengaluru?',
    a: <p>Sulthan Bathery is the first big town you reach on the Bengaluru road after the Muthanga forest, so it saves time on arrival. Meppadi is further on, via Kalpetta, and suits you better if your plans are in south Wayanad.</p>,
    text: 'Sulthan Bathery is the first big town you reach on the Bengaluru road after the Muthanga forest, so it saves time on arrival. Meppadi is further on, via Kalpetta, and suits you better if your plans are in south Wayanad.' },
];

export default function Page() {
  return (
    <Guide path="/where-to-stay-in-wayanad/" crumbs={[['/location/', 'Location'], ['/where-to-stay-in-wayanad/', 'Where to stay']]}
      title={<>Where to stay <em>in Wayanad</em></>} headline="Best area to stay in Wayanad: Kalpetta, Vythiri, Meppadi, Sulthan Bathery or Mananthavady" description={d}
      intro={<p>The best area to stay in Wayanad is the one closest to what you want to do. Kalpetta is the most central, Vythiri is first on the road from Kozhikode, Meppadi is quiet and closest to Chembra Peak and Soochipara Falls, Sulthan Bathery suits Edakkal Caves, and Mananthavady suits the north.</p>}
      img="place-lakkidi" imgAlt={photo.alt} imgCaption={<>Lakkidi, near Vythiri, at the top of the Thamarassery ghat road. Photo: <a href={commons(photo.credit.file)} target="_blank" rel="noopener">{photo.credit.by}</a>, <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener license">CC BY-SA 4.0</a></>}
      aside={<FactBox title="Pick by plan" rows={[['Central, first visit', 'Kalpetta'], ['Arriving from Kozhikode', 'Vythiri'], ['Chembra, Soochipara', 'Meppadi'], ['Edakkal, Bengaluru road', 'Sulthan Bathery'], ['Thirunelli, Coorg side', 'Mananthavady']]} />}
      sources={[
        ['Wikivoyage: Wayanad District', 'https://en.wikivoyage.org/wiki/Wayanad_District'],
        ['Wikipedia: Sultan Bathery', 'https://en.wikipedia.org/wiki/Sultan_Bathery'],
        ['Wikipedia: Mananthavady', 'https://en.wikipedia.org/wiki/Mananthavady'],
        ['Kerala Tourism: Chembra trek (distances from Meppadi)', 'https://keralatourism.org/ecotourism/trekking-programs/chembra-trek/14'],
      ]}
      faqs={faqs}
      related={[['/meppadi/', 'Staying in Meppadi'], ['/villa-with-pool-near-kalpetta/', 'A pool villa near Kalpetta'], ['/things-to-do-near-meppadi/', 'Things to do near Meppadi'], ['/how-to-reach-wayanad/', 'How to reach Wayanad'], ['/villa-vs-resort-wayanad/', 'Villa or resort?'], ['/wayanad-3-day-itinerary/', 'A 3-day itinerary']]}
      stay="In Meppadi, 12 km from Kalpetta and 12 km from Chembra Peak."
      next={{ href: '/meppadi/', title: 'Staying in Meppadi', img: 'exterior-day' }}>
      <h2>Wayanad is bigger than it looks</h2>
      <p>Wayanad is a whole district, not one town. Driving from one end to the other takes well over an hour on hill roads, so where you sleep decides how much of each day you spend in the car. Most visitors pick one of five bases. Here is what each is close to, and who it suits.</p>

      <h2>The five main areas compared</h2>
      <table>
        <thead><tr><th scope="col">Area</th><th scope="col">Close to</th><th scope="col">Suits</th></tr></thead>
        <tbody>
          <tr><th scope="row">Kalpetta</th><td>Pookode Lake (about 12 km), Karapuzha Dam (about 18 km), Banasura Sagar Dam (about 21 km)</td><td>A first visit, short trips, anyone who wants shops and buses nearby</td></tr>
          <tr><th scope="row">Vythiri</th><td>Pookode Lake, Lakkidi Viewpoint, the top of the Thamarassery ghat</td><td>Travellers coming up from Kozhikode</td></tr>
          <tr><th scope="row">Meppadi</th><td>Chembra Peak, Soochipara Falls, 900 Kandi, Kanthanpara Falls</td><td>Trekkers, families and groups who want quiet</td></tr>
          <tr><th scope="row">Sulthan Bathery</th><td>Edakkal Caves (about 10 to 13 km), the Bengaluru and Mysuru road</td><td>Drivers from Bengaluru, history lovers</td></tr>
          <tr><th scope="row">Mananthavady</th><td>Pazhassi Tomb, Thirunelli, the Kutta road towards Coorg</td><td>North Wayanad, temple visits, the Coorg link</td></tr>
        </tbody>
      </table>

      <h2>Kalpetta: the centre</h2>
      <p>Kalpetta is the district headquarters and sits in the middle of Wayanad, about 70 km from Kozhikode. As the main town it has plenty of shops and services, and buses link it to Meppadi and the rest of the district. Pookode Lake, Karapuzha Dam and Banasura Sagar Dam are all within about 21 km. The town itself is busy rather than scenic, so many people stay just outside it.</p>

      <h2>Vythiri: first stop from Kozhikode</h2>
      <p>Vythiri lies on the main road at the top of the Thamarassery ghat, at about 700 metres. Lakkidi Viewpoint and Pookode Lake are close, and it is the first part of Wayanad you reach when driving up from Kozhikode. It suits a short trip where you want to arrive, see the forest and avoid long drives. The main road through it can be slow on holiday weekends.</p>

      <h2>Meppadi: quiet, and close to the big walks</h2>
      <p>Meppadi is a small hill town about 12 km from Kalpetta. The Chembra Peak trek starts from a base camp near the town, and Soochipara Falls and 900 Kandi are on roads that run out of it. From Maison Claire, 900 Kandi is 9 km, Kanthanpara Falls 10 km, Chembra Peak 12 km and Soochipara Falls 15 km. Evenings are quiet, which is the point. The trade-off: Edakkal Caves and Karapuzha Dam are about 24 km away, and the north of the district is a longer drive. Read more about <a href="/meppadi/">staying in Meppadi</a>.</p>

      <h2>Sulthan Bathery: the east and the Bengaluru road</h2>
      <p>Sulthan Bathery is the district's biggest transport hub, on NH 766 towards Mysuru and Bengaluru. Edakkal Caves are about 10 to 13 km away, and the town makes sense if you are driving in from Bengaluru and want to stop soon after the border. Remember that the Bandipur forest stretch on that road is closed to private vehicles from 9 PM to 6 AM.</p>

      <h2>Mananthavady: the north</h2>
      <p>Mananthavady is about 30 km north of Kalpetta, on the Kabini River. Pazhassi Raja's tomb and museum are here, and Thirunelli is further north. It is also on the Kutta road towards Coorg, the one route out of Wayanad towards Karnataka that stays open at night. It suits pilgrims and anyone combining Wayanad with Coorg, but it is a long way from Chembra and Soochipara.</p>

      <h2>So which should you choose?</h2>
      <p>If your list has Chembra, Soochipara or 900 Kandi on it, or you simply want a calm house for a family or group, stay in Meppadi. If it has Edakkal and the Bengaluru road, look at Sulthan Bathery. If you are unsure, the centre of the district is never far: Maison Claire is 12 km from Kalpetta. See the <a href="/wayanad-3-day-itinerary/">3-day itinerary</a> for a plan based from Meppadi. If Meppadi is your answer, the <a href="/rates-booking/">booking window</a> shows which nights the house is free.</p>
    </Guide>
  );
}
