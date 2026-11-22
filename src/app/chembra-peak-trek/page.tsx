import { meta } from '@/lib/meta';
import { Guide, FactBox } from '@/components/Guide';
import type { QA } from '@/components/Bits';
import { commons } from '@/content/places';

const d = 'Chembra Peak trek in Wayanad: how to get a permit at the Meppadi base camp, ticket price, the heart-shaped lake, timings and tips for families.';
export const metadata = meta('/chembra-peak-trek/', 'Chembra Peak Trek: Permit, Ticket Price & Heart Lake', d, { image: 'place-chembra', type: 'article' });

const faqs: QA[] = [
  { q: 'Is Chembra Peak open now?',
    a: <p>The trek reopened on 3 August 2025 along with other Wayanad destinations. The trail now ends at the heart-shaped lake, and the upper part towards the summit is closed. The forest department can close the trek in heavy rain, so call the forest office on +91 4936 282001 before you drive out.</p>,
    text: 'The trek reopened on 3 August 2025 along with other Wayanad destinations. The trail now ends at the heart-shaped lake, and the upper part towards the summit is closed. The forest department can close the trek in heavy rain, so call the forest office on +91 4936 282001 before you drive out.' },
  { q: 'How do I book the Chembra trek?',
    a: <p>The Wayanad tourism council (DTPC) lists booking as offline only, at the forest counter at the base camp near Meppadi. Numbers are capped each day, so arrive early in the morning. Every group walks with a forest guide.</p>,
    text: 'The Wayanad tourism council (DTPC) lists booking as offline only, at the forest counter at the base camp near Meppadi. Numbers are capped each day, so arrive early in the morning. Every group walks with a forest guide.' },
  { q: 'What is the Chembra Peak ticket price?',
    a: <p>Sources disagree. The DTPC lists ₹4,000 for a group of five plus ₹800 for each extra person, with lower student rates. An older Kerala Tourism page lists much lower group rates. Confirm the current fee with the forest office on +91 4936 282001.</p>,
    text: 'Sources disagree. The DTPC lists Rs 4,000 for a group of five plus Rs 800 for each extra person, with lower student rates. An older Kerala Tourism page lists much lower group rates. Confirm the current fee with the forest office on +91 4936 282001.' },
  { q: 'Can children do the Chembra trek?',
    a: <p>Children who are used to walking uphill usually manage the trail to the heart lake, but it is steep, open and hot by late morning. We have not found a published age rule, so ask the forest office before you go. With small children, a waterfall like Kanthanpara is an easier outing.</p>,
    text: 'Children who are used to walking uphill usually manage the trail to the heart lake, but it is steep, open and hot by late morning. We have not found a published age rule, so ask the forest office before you go. With small children, a waterfall like Kanthanpara is an easier outing.' },
  { q: 'Can you still climb to the top of Chembra Peak?',
    a: <p>No. The summit section is closed, and the guided trek turns back at the heart-shaped lake. The DTPC says the upper part is restricted because of wildlife.</p>,
    text: 'No. The summit section is closed, and the guided trek turns back at the heart-shaped lake. The DTPC says the upper part is restricted because of wildlife.' },
];

export default function Page() {
  return (
    <Guide path="/chembra-peak-trek/" crumbs={[['/things-to-do-near-meppadi/', 'Things to do'], ['/chembra-peak-trek/', 'Chembra Peak trek']]}
      title={<>Chembra Peak <em>trek</em></>} headline="Chembra Peak trek: permit, ticket price and the heart-shaped lake" description={d}
      intro={<p>The Chembra Peak trek is a guided forest department walk from a base camp near Meppadi up to a heart-shaped lake on the slopes of Wayanad's highest hill, about 2,100 m. Get your permit at the base camp in the morning; entry is listed from 7 AM, and the counter is 12 km from Maison Claire.</p>}
      img="place-chembra" imgAlt="A small heart-shaped lake on a grassy hillside on the Chembra Peak trail" imgCaption={<>The heart-shaped lake on the Chembra trek, 12 km from the villa. Photo: <a href={commons('Chembra Peak Heart Lake.jpg')} target="_blank" rel="noopener">Ravi Dwivedi</a>, <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener license">CC BY-SA 4.0</a></>}
      aside={<FactBox rows={[['From the villa', '12 km'], ['Entry', 'From 7 AM (DTPC)'], ['Trek fee', 'Varies, confirm first'], ['Time needed', 'Half a day'], ['Best season', 'October to March']]} />}
      sources={[
        ['Kerala Tourism: Chembra Peak', 'https://keralatourism.org/destination/chembra-peak-wayanad/508'],
        ['Kerala Tourism: Chembra trek programme', 'https://keralatourism.org/ecotourism/trekking-programs/chembra-trek/14'],
        ['DTPC Wayanad: Chembra Peak', 'https://www.dtpcwayanad.com/destination/chembra-peak-wayanad'],
        ['Onmanorama: Wayanad lifts ban on tourism centres (Aug 2025)', 'https://www.onmanorama.com/news/kerala/2025/08/02/wayanad-lifts-ban-on-tourism-centres.html'],
      ]}
      faqs={faqs}
      related={[
        ['/things-to-do-near-meppadi/', 'Things to do near Meppadi'],
        ['/soochipara-waterfalls/', 'Soochipara waterfalls'],
        ['/900-kandi-glass-bridge/', '900 Kandi glass bridge'],
        ['/kanthanpara-waterfalls/', 'Kanthanpara Falls, an easier walk'],
        ['/best-time-to-visit-wayanad/', 'Best time to visit Wayanad'],
        ['/wayanad-with-kids/', 'Wayanad with kids'],
      ]}
      stay="12 km from the Chembra trek base camp, so you can be at the counter early."
      next={{ href: '/soochipara-waterfalls/', title: 'Soochipara waterfalls', img: 'place-soochipara' }}
      about={{ '@type': 'TouristAttraction', name: 'Chembra Peak', address: { '@type': 'PostalAddress', addressRegion: 'Wayanad, Kerala', addressCountry: 'IN' } }}>
      <h2>What the trek is like</h2>
      <p>Chembra is the highest point in Wayanad, at about 2,100 metres. The trek is run by the Kerala Forest Department, and a forest guide walks with every group. You start at the base camp near Meppadi, climb through tea and then open grassland, and reach Hridaya Saras, the small lake that looks like a heart from above.</p>
      <p>Kerala Tourism gives the walk from the base camp to the lake as about 3 km. It does not sound far, but most of it is uphill with little shade, so it feels longer. The lake is now the end point. The upper part of the hill towards the summit is closed, and the DTPC says this is because of wildlife.</p>

      <h2>Is Chembra open?</h2>
      <p>Chembra reopened on 3 August 2025, when the district lifted its ban on most tourist centres. The trek can still close for a day or more when there is a heavy-rain alert, or if the forest department decides the trail is unsafe. Before you set off, call the forest office on +91 4936 282001. Our <a href="/wayanad-travel-update/">Wayanad travel update</a> explains how these closures work.</p>

      <h2>Booking and ticket price</h2>
      <p>There is no reliable online booking. The DTPC lists Chembra as offline only: you queue at the counter at the base camp, pay, and wait for a guide. The same page lists a limit of 88 trekkers a day and entry from 7 AM to 3 PM. When the day's quota is used up, the counter closes, so on weekends and holidays aim to be there when it opens.</p>
      <p>The fee is where sources disagree most. The DTPC page lists ₹4,000 for a group of five Indian trekkers and ₹800 for each extra person, with student groups at ₹1,000 for five and foreign visitors at ₹8,000 for five. Kerala Tourism's trek page still shows far lower rates, which look out of date. Plan for the higher figure. Fees change; confirm at the counter or on the phone before you go. Carry cash.</p>

      <h2>Chembra with kids and older relatives</h2>
      <p>Older children who walk well often enjoy it, especially the lake at the end. The path is steep in places, can be slippery after rain, and the sun is strong on the open grass by late morning. We have not found a published minimum age, so ask the forest office. For toddlers or grandparents, <a href="/kanthanpara-waterfalls/">Kanthanpara Falls</a> or the <a href="/900-kandi-glass-bridge/">900 Kandi glass bridge</a> are gentler days out. Our <a href="/wayanad-with-kids/">Wayanad with kids</a> guide has more ideas.</p>

      <h2>What to bring</h2>
      <ul>
        <li>Shoes with grip. Sandals slide on the steep grass.</li>
        <li>Two litres of water each, a cap and sunscreen.</li>
        <li>A light rain jacket from June to October.</li>
        <li>Cash and photo ID for the permit.</li>
        <li>A small bag to carry your waste back down.</li>
      </ul>

      <h2>When to go</h2>
      <p>Forest ecotourism sites in Wayanad list October to March as the best months for trekking. The grass is green after the rains and the mornings are clear and cool. From June to September the trail is wet and closures are more likely. Start early in any season: the light is better and the climb is easier before the heat.</p>

      <h2>Staying close to the trek</h2>
      <p>Maison Claire is 12 km from Chembra, in Meppadi. Two of its four bedrooms look towards Chembra Peak, so you wake up facing the hill you walked. It is rented whole to one group, and being this close means you can reach the base camp counter soon after it opens. Look for a free morning in the booking window, or WhatsApp us if you want help planning the trek day.</p>
    </Guide>
  );
}
