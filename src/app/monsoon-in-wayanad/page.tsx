import { meta } from '@/lib/meta';
import { Guide, FactBox } from '@/components/Guide';
import type { QA } from '@/components/Bits';
import { places, commons } from '@/content/places';

const d = 'Wayanad in the monsoon: is it safe, what rain alerts mean, which places close, full waterfalls and tips for driving the ghat roads in the rain.';
export const metadata = meta('/monsoon-in-wayanad/', 'Wayanad in Monsoon: Is It Safe? Alerts & Travel Tips', d, { image: 'place-soochipara', type: 'article' });

const photo = places.find((p) => p.id === 'soochipara')!;

const faqs: QA[] = [
  { q: 'Is Wayanad safe to visit in the monsoon?',
    a: <p>Wayanad stays open to visitors in the monsoon, and most trips go without trouble. The risk comes with very heavy rain: on red or orange alerts the district can close tourist spots for the day, and there is a landslide risk in the hills. Check the alert before you travel, avoid driving at night and keep a flexible plan.</p>,
    text: 'Wayanad stays open to visitors in the monsoon, and most trips go without trouble. The risk comes with very heavy rain: on red or orange alerts the district can close tourist spots for the day, and there is a landslide risk in the hills. Check the alert before you travel, avoid driving at night and keep a flexible plan.' },
  { q: 'When is the monsoon in Wayanad?',
    a: <p>The main monsoon runs from June to September. Rain can continue into October, after which the cool, dry season begins.</p>,
    text: 'The main monsoon runs from June to September. Rain can continue into October, after which the cool, dry season begins.' },
  { q: 'Are tourist places in Wayanad closed during rain?',
    a: <p>Sometimes. When a heavy-rain alert is issued, the district administration can close tourist spots, especially forest and water sites, for the day. They reopen when the alert eases. Check district updates the evening before.</p>,
    text: 'Sometimes. When a heavy-rain alert is issued, the district administration can close tourist spots, especially forest and water sites, for the day. They reopen when the alert eases. Check district updates the evening before.' },
  { q: 'Where was the 2024 Wayanad landslide?',
    a: <p>On 30 July 2024 the landslides struck Mundakkai and Chooralmala, villages in the hills of Meppadi panchayat. Tourism across Wayanad has since reopened, and Chembra, Soochipara and other sites reopened on 3 August 2025.</p>,
    text: 'On 30 July 2024 the landslides struck Mundakkai and Chooralmala, villages in the hills of Meppadi panchayat. Tourism across Wayanad has since reopened, and Chembra, Soochipara and other sites reopened on 3 August 2025.' },
  { q: 'Is the Thamarassery ghat road open in the monsoon?',
    a: <p>It is normally open, but heavy rain can bring it to a halt. In August 2025 a mudslide near the ninth hairpin bend closed it for a time before it reopened. Check the news on the morning you drive, and travel in daylight.</p>,
    text: 'It is normally open, but heavy rain can bring it to a halt. In August 2025 a mudslide near the ninth hairpin bend closed it for a time before it reopened. Check the news on the morning you drive, and travel in daylight.' },
];

export default function Page() {
  return (
    <Guide path="/monsoon-in-wayanad/" crumbs={[['/location/', 'Location'], ['/monsoon-in-wayanad/', 'Wayanad in the monsoon']]}
      title={<>Wayanad <em>in the monsoon</em></>} headline="Wayanad in the monsoon: is it safe, and what to expect" description={d}
      intro={<p>Wayanad stays open in the monsoon, from June to September, and the waterfalls are at their fullest. The thing to plan around is heavy rain: on red or orange alerts the district can close tourist spots for the day, so check the alert before you travel and keep your plans flexible.</p>}
      img="place-soochipara" imgAlt={photo.alt} imgCaption={<>Soochipara Falls, 15 km from the villa. Photo: <a href={commons(photo.credit.file)} target="_blank" rel="noopener">{photo.credit.by}</a>, <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener license">CC BY-SA 4.0</a></>}
      aside={<FactBox title="Monsoon at a glance" rows={[['Season', 'June to September'], ['Waterfalls', 'At their fullest'], ['Closures', 'Possible on heavy-rain alerts'], ['Drive', 'In daylight'], ['Check', 'District alerts the evening before']]} />}
      sources={[
        ['MakeMyTrip: best time to visit Wayanad', 'https://www.makemytrip.com/tripideas/wayanad/best-time-to-visit'],
        ['Onmanorama: Wayanad lifts ban on tourism centres (Aug 2025)', 'https://www.onmanorama.com/news/kerala/2025/08/02/wayanad-lifts-ban-on-tourism-centres.html'],
        ['Onmanorama: Thamarassery ghat road reopens (Aug 2025)', 'https://www.onmanorama.com/news/kerala/2025/08/29/thamarassery-ghat-road-reopens.html'],
      ]}
      faqs={faqs}
      related={[['/wayanad-travel-update/', 'Latest Wayanad travel update'], ['/best-time-to-visit-wayanad/', 'Best time to visit'], ['/soochipara-waterfalls/', 'Soochipara Falls'], ['/kanthanpara-waterfalls/', 'Kanthanpara Falls'], ['/living-spaces/', 'The lounges at the villa'], ['/how-to-reach-wayanad/', 'How to reach Wayanad']]}
      stay="Three lounges and a terrace for rainy afternoons, and a pool for the dry spells."
      next={{ href: '/wayanad-travel-update/', title: 'Travel update', img: 'balcony-view' }}>
      <h2>Is Wayanad safe in the monsoon?</h2>
      <p>For most visitors, yes, with sensible planning. Wayanad receives heavy rain from June to September, and the hills carry a landslide risk in the worst of it. Day to day, that mostly means wet roads, slower driving and the occasional day when the district closes tourist spots because of an alert. People who come in the monsoon and enjoy it tend to have one thing in common: they leave room in their plans.</p>

      <p>A simple rhythm works well. Go out in the morning, keep outings close to where you are staying, and be back before dark. Choose one sight a day rather than three, and treat anything more as a bonus.</p>

      <h2>What rain alerts mean for your trip</h2>
      <p>The India Meteorological Department issues colour-coded alerts by district. On orange and red alert days, the Wayanad district administration can close tourist spots, especially forest treks, waterfalls and boating, for the day. Closures can come at short notice, and sites reopen when the alert eases.</p>
      <ul>
        <li>Check the IMD alert for Wayanad the evening before each day out.</li>
        <li>Look for district updates on closures, and ask locally.</li>
        <li>Plan a back-up day at the villa in case your main outing is shut.</li>
      </ul>

      <h2>About the 2024 landslide</h2>
      <p>On 30 July 2024, landslides struck Mundakkai and Chooralmala, villages high in the hills of Meppadi panchayat. Tourism across the district has since reopened. Chembra Peak, Soochipara and the other Wayanad destinations reopened on 3 August 2025, apart from Kuruva Island. We keep a dated <a href="/wayanad-travel-update/">Wayanad travel update</a> with the latest we know.</p>

      <h2>What the monsoon is good for</h2>
      <p>This is when Wayanad's waterfalls are at their fullest. <a href="/soochipara-waterfalls/">Soochipara Falls</a>, three tiers dropping about 200 metres in all, and the smaller <a href="/kanthanpara-waterfalls/">Kanthanpara Falls</a> are both close to Meppadi. Do not go near the edge or into the water at any waterfall in this season: rocks are slippery and the flow can rise quickly. The hills are at their greenest, the tea gardens look freshly washed, and between showers the light can be very clear.</p>
      <p>The monsoon is not trekking season. Forest ecotourism sites list October to March as the best months for treks, and Chembra may be closed on wet days.</p>

      <h2>Driving in the rain</h2>
      <ul>
        <li><b>Drive in daylight.</b> Ghat roads are hard work in the dark and rain.</li>
        <li><b>Check the churam.</b> In August 2025 a mudslide near the ninth bend closed the Thamarassery ghat road for a time. It reopened, but parking at Lakkidi viewpoint is now banned.</li>
        <li><b>Allow extra time.</b> Kozhikode to Meppadi is about 76 km, around 1 hour 20 minutes without traffic. In heavy rain, plan for more.</li>
        <li><b>Keep the tank full and the phone charged.</b> Signal drops in patches on forest roads.</li>
        <li><b>From Bengaluru,</b> the Bandipur forest stretch closes to private vehicles from 9 PM to 6 AM.</li>
      </ul>

      <h2>What to pack for the monsoon</h2>
      <ul>
        <li><b>A proper rain jacket</b> and an umbrella. Showers can be heavy and sudden.</li>
        <li><b>Shoes with grip</b> that you do not mind getting wet, and dry socks for the evening.</li>
        <li><b>Quick-drying clothes</b> and a spare set for every day out.</li>
        <li><b>Insect repellent.</b> Forest paths are damp and buggy in the wet months.</li>
        <li><b>A torch and a power bank.</b> Useful on dark, wet evenings and on roads with patchy signal.</li>
        <li><b>Photo ID for every guest.</b> The villa needs it at check-in.</li>
      </ul>

      <h2>A rainy day at the villa</h2>
      <p>Some of the best monsoon days are spent indoors. Maison Claire has three lounges, a terrace and balconies facing the hills, and a full kitchen for a long lunch. When the rain stops, the pool is there. For a rainy-season stay, check dates and the whole-villa price in the <a href="/rates-booking/">booking window</a>, or ask us on WhatsApp how the week looks around Meppadi.</p>
    </Guide>
  );
}
