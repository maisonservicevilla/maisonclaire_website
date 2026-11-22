import { meta } from '@/lib/meta';
import { Guide, FactBox } from '@/components/Guide';
import type { QA } from '@/components/Bits';
import { commons } from '@/content/places';

const d = 'Soochipara waterfalls (Sentinel Rock Falls), Wayanad: entry fee, timings, the 2 km forest trail, whether you can bathe, and a stay 15 km away.';
export const metadata = meta('/soochipara-waterfalls/', 'Soochipara Waterfalls: Entry Fee, Timings & Trail', d, { image: 'place-soochipara', type: 'article' });

const faqs: QA[] = [
  { q: 'What is the Soochipara waterfalls entry fee?',
    a: <p>The Wayanad tourism council (DTPC) lists ₹150 for adults, ₹50 for students and ₹300 for foreign visitors. Some older reports give ₹100 for adults. Fees change; confirm at the counter. You can check with the DTPC contact for the falls on +91 85472 37513.</p>,
    text: 'The Wayanad tourism council (DTPC) lists Rs 150 for adults, Rs 50 for students and Rs 300 for foreign visitors. Some older reports give Rs 100 for adults. Fees change; confirm at the counter. You can check with the DTPC contact for the falls on +91 85472 37513.' },
  { q: 'What are the Soochipara waterfalls timings?',
    a: <p>The DTPC lists 8 AM to 5 PM. Tickets are sold at the gate only, and numbers are limited to about 500 visitors, so go in the morning.</p>,
    text: 'The DTPC lists 8 AM to 5 PM. Tickets are sold at the gate only, and numbers are limited to about 500 visitors, so go in the morning.' },
  { q: 'Can you bathe at Soochipara Falls?',
    a: <p>There is a pool at the bottom where people do go into the water, but staff decide where and when that is allowed, and they can stop bathing when the flow is strong. Follow their instructions, keep children close and never go near the main fall.</p>,
    text: 'There is a pool at the bottom where people do go into the water, but staff decide where and when that is allowed, and they can stop bathing when the flow is strong. Follow their instructions, keep children close and never go near the main fall.' },
  { q: 'How long is the walk to Soochipara waterfalls?',
    a: <p>About 2 km from the entrance down to the falls, on an uneven forest path. The walk back is uphill. Allow two to three hours for the visit.</p>,
    text: 'About 2 km from the entrance down to the falls, on an uneven forest path. The walk back is uphill. Allow two to three hours for the visit.' },
  { q: 'Is Sentinel Rock Falls the same as Soochipara?',
    a: <p>Yes. Sentinel Rock Falls and Soochipara are two names for the same falls. Kerala Tourism uses the English name, and both refer to the three-tier waterfall at Vellarimala, near Meppadi.</p>,
    text: 'Yes. Sentinel Rock Falls and Soochipara are two names for the same falls. Kerala Tourism uses the English name, and both refer to the three-tier waterfall at Vellarimala, near Meppadi.' },
];

export default function Page() {
  return (
    <Guide path="/soochipara-waterfalls/" crumbs={[['/things-to-do-near-meppadi/', 'Things to do'], ['/soochipara-waterfalls/', 'Soochipara Falls']]}
      title={<>Soochipara <em>waterfalls</em></>} headline="Soochipara waterfalls (Sentinel Rock Falls): entry fee, timings and the trail" description={d}
      intro={<p>Soochipara waterfalls, also called Sentinel Rock Falls, drop about 200 m in three tiers at Vellarimala, 15 km from Maison Claire. The DTPC lists them as open 8 AM to 5 PM, and you reach them on a 2 km forest path from the gate.</p>}
      img="place-soochipara" imgAlt="Soochipara Falls dropping down a sheer rock face into the forest" imgCaption={<>Soochipara Falls, 15 km from the villa. Photo: <a href={commons('Soochippara waterfalls,Wayanad,kerala.jpg')} target="_blank" rel="noopener">Siyad Saffan Shah</a>, <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener license">CC BY-SA 4.0</a></>}
      aside={<FactBox rows={[['From the villa', '15 km'], ['Hours', '8 AM to 5 PM'], ['Entry (adult)', 'About ₹150'], ['Trail', 'About 2 km each way'], ['Time needed', '2 to 3 hours'], ['Best season', 'September to January']]} />}
      sources={[
        ['DTPC Wayanad: Soochipara Waterfalls', 'https://dtpcwayanad.com/destination/soochipara-waterfalls-wayanad'],
        ['Kerala Tourism: Sentinel Rock Falls', 'https://www.keralatourism.org/destination/sentinel-rock-falls-wayanad/556'],
        ['Wikipedia: Soochipara Falls', 'https://en.wikipedia.org/wiki/Soochipara_Falls'],
        ['Onmanorama: Wayanad lifts ban on tourism centres (Aug 2025)', 'https://www.onmanorama.com/news/kerala/2025/08/02/wayanad-lifts-ban-on-tourism-centres.html'],
      ]}
      faqs={faqs}
      related={[
        ['/things-to-do-near-meppadi/', 'Things to do near Meppadi'],
        ['/kanthanpara-waterfalls/', 'Kanthanpara Falls'],
        ['/chembra-peak-trek/', 'Chembra Peak trek'],
        ['/900-kandi-glass-bridge/', '900 Kandi glass bridge'],
        ['/monsoon-in-wayanad/', 'Wayanad in the monsoon'],
      ]}
      stay="15 km from Soochipara, so you can be at the gate when it opens."
      next={{ href: '/kanthanpara-waterfalls/', title: 'Kanthanpara Falls', img: 'place-kanthanpara' }}
      about={{ '@type': 'TouristAttraction', name: 'Soochipara Waterfalls', address: { '@type': 'PostalAddress', addressRegion: 'Wayanad, Kerala', addressCountry: 'IN' } }}>
      <h2>What you will see</h2>
      <p>Soochipara is the best known waterfall near Meppadi. The water falls in three stages down a steep rock face, about 200 metres in all, at Vellarimala on the edge of the forest. Kerala Tourism calls it Sentinel Rock Falls, and you will see both names on signs and maps. From the bottom you look up at the last and biggest drop, with spray drifting across the pool and the trees.</p>

      <h2>The 2 km trail</h2>
      <p>From the ticket counter, a forest path of about 2 km leads down to the falls. Expect uneven ground, roots and rocks, and slippery patches after rain. Going down is easy. Coming back is a steady climb, and it is the part people remember. Most fit adults and older children manage it at their own pace. If someone in your group has trouble with slopes or knees, think twice, or choose <a href="/kanthanpara-waterfalls/">Kanthanpara Falls</a> instead, where the walk from the road is short.</p>

      <h2>Entry fee, timings and tickets</h2>
      <p>The DTPC lists the falls as open from 8 AM to 5 PM. Its fees are ₹150 for adults, ₹50 for students and ₹300 for foreign visitors, and its wording suggests young children go free. Some older reports give a lower adult price of ₹100, so the fee may have gone up recently. Fees change; confirm at the counter. Tickets are sold at the counter only, and the DTPC sets a limit of about 500 visitors. If you want to check before you go, the DTPC lists +91 85472 37513 for the falls.</p>
      <p>Soochipara reopened on 3 August 2025 with most other tourist sites in Wayanad. Like any forest site, it can close for a day on a heavy-rain alert. Our <a href="/wayanad-travel-update/">Wayanad travel update</a> explains how that works.</p>

      <h2>Can you bathe at Soochipara?</h2>
      <p>The pool at the base is the reason many people come, and on calm days visitors do get into the water there. Staff at the site decide where you can go in and when, and they can stop bathing when the flow is strong. Follow what they say, even if others are ignoring it. Rocks near the falls are slippery, the current can be stronger than it looks, and you should never go close to where the water lands. Bring a change of clothes and a towel in a dry bag.</p>

      <h2>What to bring</h2>
      <ul>
        <li>Shoes with grip that can get wet. Flip-flops are a bad idea on the trail.</li>
        <li>Water and a snack for the walk back up.</li>
        <li>A towel and dry clothes if you hope to go in the water.</li>
        <li>Cash for tickets, since they are sold at the counter only.</li>
      </ul>

      <h2>When to go</h2>
      <p>The falls are at their fullest during and straight after the monsoon, but in June to August the path is wet and the site is more likely to close. September to January is the best balance: plenty of water, drier paths and cooler days. By late summer the flow drops a lot. In any season, go in the morning, before the crowds and before the visitor limit is reached.</p>

      <h2>Make a day of it</h2>
      <p>Soochipara is in the same corner of Wayanad as the villa, so it pairs well with nearby places. Do the falls in the morning, then drive back towards Meppadi for lunch, or add the <a href="/900-kandi-glass-bridge/">900 Kandi glass bridge</a> (9 km from the villa) in the afternoon. Keen walkers sometimes do the <a href="/chembra-peak-trek/">Chembra Peak trek</a> one day and Soochipara the next. See all <a href="/things-to-do-near-meppadi/">things to do near Meppadi</a>.</p>

      <h2>Where to stay</h2>
      <p>Maison Claire is a private four-bedroom villa in Meppadi, 15 km from Soochipara. Back from the falls by lunch, the infinity pool is yours for the afternoon, with nobody else from outside your group. Pick dates in the booking window, or WhatsApp us.</p>
    </Guide>
  );
}
