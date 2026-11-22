import { meta } from '@/lib/meta';
import { Guide, FactBox } from '@/components/Guide';
import type { QA } from '@/components/Bits';
import { places, commons } from '@/content/places';

const d = 'Places to visit in Wayanad with kids: easy picks like Kanthanpara, Pookode and Karapuzha, harder ones like Chembra and Edakkal, and water safety.';
export const metadata = meta('/wayanad-with-kids/', 'Places to Visit in Wayanad with Kids: A Family Guide', d, { image: 'place-karapuzha', type: 'article' });

const photo = places.find((p) => p.id === 'karapuzha')!;

const faqs: QA[] = [
  { q: 'What are the best places to visit in Wayanad with kids?',
    a: <p>The easiest are Kanthanpara Falls (a short walk from the road), boating at Pookode Lake and Banasura Sagar Dam, the gardens at Karapuzha Dam, and the jeep ride up to 900 Kandi. They need little walking and suit most ages.</p>,
    text: 'The easiest are Kanthanpara Falls (a short walk from the road), boating at Pookode Lake and Banasura Sagar Dam, the gardens at Karapuzha Dam, and the jeep ride up to 900 Kandi. They need little walking and suit most ages.' },
  { q: 'Can children do the Chembra Peak trek?',
    a: <p>Chembra is a long, steep guided trek to the heart-shaped lake, best for older children who already walk well on hills. The Forest Department sets the rules for the trek, so ask the forest office on +91 4936 282001 about children before you plan it.</p>,
    text: 'Chembra is a long, steep guided trek to the heart-shaped lake, best for older children who already walk well on hills. The Forest Department sets the rules for the trek, so ask the forest office on +91 4936 282001 about children before you plan it.' },
  { q: 'Is Edakkal Caves suitable for kids?',
    a: <p>The caves are fascinating, but the way up is a steep climb. Children who manage stairs and rocks well usually enjoy it. With toddlers, one adult may need to stay below. The site is closed on Mondays.</p>,
    text: 'The caves are fascinating, but the way up is a steep climb. Children who manage stairs and rocks well usually enjoy it. With toddlers, one adult may need to stay below. The site is closed on Mondays.' },
  { q: 'Is boating safe for children in Wayanad?',
    a: <p>Boating at Pookode Lake and Banasura Sagar Dam is listed by the district tourism council and is popular with families. Make sure every child wears a life jacket that fits, and ask for one if it is not handed out.</p>,
    text: 'Boating at Pookode Lake and Banasura Sagar Dam is listed by the district tourism council and is popular with families. Make sure every child wears a life jacket that fits, and ask for one if it is not handed out.' },
  { q: 'Is a villa with a pool safe for small children?',
    a: <p>A private pool is a treat, and it needs an adult watching whenever children are in or near it. At Maison Claire the pool is for your group only, so agree who is on watch. Ask us about the pool before you arrive if you have young swimmers.</p>,
    text: 'A private pool is a treat, and it needs an adult watching whenever children are in or near it. At Maison Claire the pool is for your group only, so agree who is on watch. Ask us about the pool before you arrive if you have young swimmers.' },
];

export default function Page() {
  return (
    <Guide path="/wayanad-with-kids/" crumbs={[['/location/', 'Location'], ['/wayanad-with-kids/', 'Wayanad with kids']]}
      title={<>Wayanad <em>with kids</em></>} headline="Places to visit in Wayanad with kids: easy days out and harder ones" description={d}
      intro={<p>The easiest places to visit in Wayanad with kids are Kanthanpara Falls, boating at Pookode Lake and Banasura Sagar Dam, the gardens at Karapuzha Dam and the jeep ride to 900 Kandi. Save the Chembra trek, the steep climb at Edakkal Caves and the 2 km trail at Soochipara Falls for older children who walk well.</p>}
      img="place-karapuzha" imgAlt={photo.alt} imgCaption={<>Karapuzha reservoir, 24 km from the villa. Photo: <a href={commons(photo.credit.file)} target="_blank" rel="noopener">{photo.credit.by}</a>, <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener license">CC BY-SA 4.0</a></>}
      aside={<FactBox title="With kids" rows={[['Easiest walk', 'Kanthanpara Falls'], ['Boating', 'Pookode, Banasura'], ['Gardens', 'Karapuzha Dam'], ['Hardest', 'Chembra trek'], ['Edakkal closed', 'Mondays']]} />}
      sources={[
        ['DTPC Wayanad: Pookode Lake', 'https://www.dtpcwayanad.com/destination/pookode-lake-wayanad'],
        ['DTPC Wayanad: Banasura Sagar Dam', 'https://www.dtpcwayanad.com/destination/banasura-sagar-dam-wayanad'],
        ['DTPC Wayanad: Karapuzha Dam', 'https://www.dtpcwayanad.com/destination/karapuzha-dam-wayanad'],
        ['Kerala Tourism: Sentinel Rock (Soochipara) Falls', 'https://www.keralatourism.org/destination/sentinel-rock-falls-wayanad/556'],
      ]}
      faqs={faqs}
      related={[['/family-holiday-villa-wayanad/', 'Family holiday villa'], ['/private-pool/', 'The private pool'], ['/kanthanpara-waterfalls/', 'Kanthanpara Falls'], ['/pookode-lake/', 'Pookode Lake'], ['/banasura-sagar-dam/', 'Banasura Sagar Dam'], ['/nri-family-holiday-wayanad/', 'Family trips home from abroad']]}
      stay="Two ground-floor bedrooms, a full kitchen for children's meals and a private pool."
      next={{ href: '/family-holiday-villa-wayanad/', title: 'Family holidays', img: 'living-chesterfield' }}>
      <h2>Easy days out and harder ones</h2>
      <p>Wayanad is good with children because so much of it is outdoors: water, boats, forest and open views. The catch is that some of the best-known sights involve real walking. Distances below are road distances from Maison Claire in Meppadi, or from Kalpetta where we do not have a figure from the villa.</p>
      <table>
        <thead><tr><th scope="col">Place</th><th scope="col">Distance</th><th scope="col">Effort</th><th scope="col">Good to know</th></tr></thead>
        <tbody>
          <tr><th scope="row">Kanthanpara Falls</th><td>10 km from the villa</td><td>Easy</td><td>Short walk from the road</td></tr>
          <tr><th scope="row">900 Kandi</th><td>9 km from the villa</td><td>Easy, bumpy</td><td>Jeep ride and glass bridge</td></tr>
          <tr><th scope="row">Pookode Lake</th><td>About 12 km from Kalpetta</td><td>Easy</td><td>Boating 9 AM to 5 PM</td></tr>
          <tr><th scope="row">Karapuzha Dam</th><td>24 km from the villa</td><td>Easy</td><td>Gardens, 9 AM to 6 PM</td></tr>
          <tr><th scope="row">Banasura Sagar Dam</th><td>About 35 km from the villa</td><td>Easy</td><td>Boats, 9 AM to 5:30 PM</td></tr>
          <tr><th scope="row">Soochipara Falls</th><td>15 km from the villa</td><td>Moderate</td><td>About 2 km trail each way</td></tr>
          <tr><th scope="row">Edakkal Caves</th><td>24 km from the villa</td><td>Hard</td><td>Steep climb, closed Mondays</td></tr>
          <tr><th scope="row">Chembra Peak</th><td>12 km from the villa</td><td>Hard</td><td>Long guided trek</td></tr>
        </tbody>
      </table>

      <h2>The easy picks</h2>
      <p><b><a href="/kanthanpara-waterfalls/">Kanthanpara Falls</a></b> is smaller and calmer than the famous falls, and the walk in from the road is short. Good for toddlers and grandparents alike.</p>
      <p><b><a href="/pookode-lake/">Pookode Lake</a></b> has boats for two, four or seven people. The tourism council lists a lower entry fee for children than for adults.</p>
      <p><b><a href="/karapuzha-dam/">Karapuzha Dam</a></b> has gardens and wide views over the reservoir, a good place to let children run about. Older ones may want the zipline.</p>
      <p><b><a href="/banasura-sagar-dam/">Banasura Sagar Dam</a></b> has speed boats, pontoon boats, shikaras and kayaks, with a lower children's entry fee. It is a longer drive from Meppadi, so make it a half day.</p>
      <p><b><a href="/900-kandi-glass-bridge/">900 Kandi</a></b> is reached by jeep from Meppadi on a rough forest track. Most children love the bumpy ride. The glass bridge over the treetops is the reward at the top.</p>

      <h2>The harder ones</h2>
      <p><b><a href="/chembra-peak-trek/">Chembra Peak</a></b> is a proper hill trek with a forest guide, ending at the heart-shaped lake. It suits older children who already enjoy long walks. Ask the forest office (+91 4936 282001) about any rules for children before you plan it.</p>
      <p><b><a href="/edakkal-caves/">Edakkal Caves</a></b> has ancient carvings that children find fascinating, but the way up is steep. Go early, as the daily visitor cap is often reached by afternoon, and remember it is closed on Mondays.</p>
      <p><b><a href="/soochipara-waterfalls/">Soochipara Falls</a></b> is about 2 km down a forest trail from the entrance, and the same back up. Fine for children who walk well; hard work with a toddler on your hip.</p>

      <h2>Safety around water</h2>
      <ul>
        <li>At waterfalls, keep children back from the edge and off wet rocks. Follow any instructions from staff about where you can go in.</li>
        <li>In the monsoon, do not let anyone into the water at falls or streams. Flows can rise fast.</li>
        <li>On boats, every child should wear a life jacket that fits.</li>
        <li>Carry a change of clothes for each child. Someone always gets wet.</li>
      </ul>

      <h2>A villa with a pool and children</h2>
      <p>A private pool is one of the best parts of a family trip, and it needs an adult watching whenever children are in or near the water. At Maison Claire the infinity-edge pool is for your group only, with no other guests around, which makes it easier to keep an eye on everyone. Agree who is on watch, and never leave children alone near the pool, even for a minute. Ask us about the pool before you arrive if you have young swimmers.</p>
      <p>Indoors, two of the four bedrooms are on the ground floor, the full kitchen makes children's meals and milk easy, and restaurants are about 200 m away. There is a medical college about 3 km from the villa. See our <a href="/family-holiday-villa-wayanad/">family holiday villa</a> page, or find dates that fit the school holidays in the <a href="/rates-booking/">booking window</a>.</p>
    </Guide>
  );
}
