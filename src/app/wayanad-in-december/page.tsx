import { meta } from '@/lib/meta';
import { Guide, FactBox } from '@/components/Guide';
import type { QA } from '@/components/Bits';

const d = 'Wayanad in December: misty mornings, cool nights and the busiest weeks of the year. Crowds, ghat-road traffic, Bandipur timings and what to do.';
export const metadata = meta('/wayanad-in-december/', 'Wayanad in December: Weather, Crowds & Travel Tips', d, { image: 'pool-dusk', type: 'article' });

const faqs: QA[] = [
  { q: 'Is December a good time to visit Wayanad?',
    a: <p>Yes. December is in the cool, dry season, with misty mornings, cool nights and the forest treks open. It is also the busiest month, so book early and expect traffic around Christmas and New Year.</p>,
    text: 'Yes. December is in the cool, dry season, with misty mornings, cool nights and the forest treks open. It is also the busiest month, so book early and expect traffic around Christmas and New Year.' },
  { q: 'Is Wayanad cold in December?',
    a: <p>It is cool rather than cold in the day, and the nights and early mornings are chilly enough for a jacket, especially on high ground. Pack layers.</p>,
    text: 'It is cool rather than cold in the day, and the nights and early mornings are chilly enough for a jacket, especially on high ground. Pack layers.' },
  { q: 'Is Wayanad crowded at Christmas and New Year?',
    a: <p>Yes. The last two weeks of December are among the busiest of the year. Popular sites fill early, Edakkal Caves often reaches its daily visitor limit by afternoon, and the Thamarassery ghat road can back up for hours on holiday rush days.</p>,
    text: 'Yes. The last two weeks of December are among the busiest of the year. Popular sites fill early, Edakkal Caves often reaches its daily visitor limit by afternoon, and the Thamarassery ghat road can back up for hours on holiday rush days.' },
  { q: 'Is the Bandipur road open at night in December?',
    a: <p>No. The Bandipur forest stretch of NH 766 is closed to private vehicles from 9 PM to 6 AM all year, including December. If you are driving from Bengaluru or Mysuru, plan to be through the forest well before 9 PM.</p>,
    text: 'No. The Bandipur forest stretch of NH 766 is closed to private vehicles from 9 PM to 6 AM all year, including December. If you are driving from Bengaluru or Mysuru, plan to be through the forest well before 9 PM.' },
  { q: 'How early should I book a villa in Wayanad for New Year?',
    a: <p>As early as you can. Whole houses for large groups are limited, and Christmas and New Year dates go first. Check live dates in our booking window, or message us on WhatsApp.</p>,
    text: 'As early as you can. Whole houses for large groups are limited, and Christmas and New Year dates go first. Check live dates in our booking window, or message us on WhatsApp.' },
];

export default function Page() {
  return (
    <Guide path="/wayanad-in-december/" crumbs={[['/location/', 'Location'], ['/wayanad-in-december/', 'Wayanad in December']]}
      title={<>Wayanad <em>in December</em></>} headline="Wayanad in December: weather, crowds and travel tips" description={d}
      intro={<p>December is one of the best months to visit Wayanad, with misty mornings, cool nights and the forest treks open. It is also the busiest month, so book early and plan your drive around holiday traffic on the ghat road and the 9 PM to 6 AM Bandipur closure.</p>}
      img="pool-dusk" imgAlt="The infinity pool at dusk with the hills fading behind it" imgCaption="The pool at Maison Claire at dusk. December evenings in Meppadi are cool."
      aside={<FactBox title="December at a glance" rows={[['Weather', 'Cool days, chilly nights'], ['Mornings', 'Often misty'], ['Crowds', 'Highest of the year'], ['Bandipur road', 'Closed 9 PM to 6 AM'], ['Book', 'Weeks ahead']]} />}
      sources={[
        ['MakeMyTrip: best time to visit Wayanad', 'https://www.makemytrip.com/tripideas/wayanad/best-time-to-visit'],
        ['Onmanorama: holiday rush chokes Thamarassery ghat road (Aug 2026)', 'https://www.onmanorama.com/news/kerala/2026/08/23/onam-holiday-rush-chokes-thamarassery-ghat-road-traffic-crawls-for-hours.html'],
        ['Onmanorama: Wayanad ghat road disruptions (Jun 2026)', 'https://www.onmanorama.com/kerala/top-news/2026/06/15/wayanad-ghat-road-disruptions.html'],
        ['ThePrint: the Bandipur night traffic ban (Feb 2026)', 'https://theprint.in/india/a-tunnel-to-overcome-bandipur-night-traffic-ban-wayanad-pins-hope-on-polls-priyanka-and-gadkari/2845657'],
      ]}
      faqs={faqs}
      related={[['/christmas-new-year-villa-wayanad/', 'Christmas and New Year at the villa'], ['/best-time-to-visit-wayanad/', 'Best time to visit Wayanad'], ['/calicut-to-wayanad/', 'Calicut to Wayanad'], ['/bangalore-to-wayanad/', 'Bangalore to Wayanad'], ['/chembra-peak-trek/', 'The Chembra Peak trek']]}
      stay="A whole house for your group over Christmas and New Year, with your own pool."
      next={{ href: '/christmas-new-year-villa-wayanad/', title: 'Christmas and New Year', img: 'villa-night-pool' }}>
      <h2>What December is like</h2>
      <p>December sits in the middle of Wayanad's cool season. The monsoon is long gone, the hills are still green, and many mornings start in mist that hangs over the valleys before burning off. Days are pleasant for walking. Nights are cool, and by late evening most people want a jacket or a blanket on the terrace.</p>

      <h2>Christmas and New Year crowds</h2>
      <p>November to February is peak season in Wayanad, and the last two weeks of December are the busiest of all. In 2026, Christmas Day and New Year's Day both fall on a Friday, which makes two long weekends in a row. Expect full car parks at the popular viewpoints, queues at the boating jetties and fuller restaurants.</p>
      <p>A few habits help. Go out early, when the sites open. Do the famous places on weekdays if you can. Keep one afternoon free for the house. Edakkal Caves has a cap of 1,920 visitors a day, which is often reached by afternoon, and it is closed on Mondays, so 28 December 2026 is not an option there.</p>

      <h2>The roads in December</h2>
      <p>Most people from Kozhikode and the Kerala side come up the Thamarassery churam, the 14 km ghat road with nine hairpin bends from Adivaram to Lakkidi. On holiday rush days it has backed up for hours. Since June 2026 multi-axle heavy vehicles have been barred from it between 6 AM and 8 PM, and widening work has been under way on some bends, so check the latest before you set off. Parking at Lakkidi viewpoint has been banned since August 2025.</p>
      <p>From Bengaluru and Mysuru, the Bandipur forest stretch of NH 766 is closed to private vehicles from 9 PM to 6 AM, holidays included. Leave early enough to clear it in daylight. Our <a href="/bangalore-to-wayanad/">Bangalore to Wayanad</a> and <a href="/calicut-to-wayanad/">Calicut to Wayanad</a> guides cover both routes.</p>

      <h2>What to do in December</h2>
      <ul>
        <li><b>The Chembra Peak trek.</b> December is in the trekking season. Start early and confirm the trek is open with the forest office on +91 4936 282001. See the <a href="/chembra-peak-trek/">Chembra guide</a>.</li>
        <li><b>Soochipara Falls.</b> Still flowing well after the monsoon, with drier paths. 15 km from the villa.</li>
        <li><b>900 Kandi.</b> The jeep ride and glass bridge, 9 km away. Clear mornings give the best views.</li>
        <li><b>Edakkal Caves.</b> Arrive close to the 8:30 AM opening to beat the visitor cap.</li>
        <li><b>A slow evening in.</b> Light the pool, cook together and stay off the roads after dark.</li>
      </ul>

      <h2>What to pack for December</h2>
      <ul>
        <li><b>Warm layers.</b> A fleece or light jacket for early starts, and something warm for evenings outside.</li>
        <li><b>Shoes with grip.</b> Trails are drier than in the monsoon, but forest paths and the climb at Edakkal are still uneven.</li>
        <li><b>Swimwear.</b> The pool at Maison Claire has underwater lights, and a short swim on a cool evening is a fine way to end the day.</li>
        <li><b>Cash and a water bottle.</b> Several forest sites sell tickets at the counter, and Edakkal is plastic-free.</li>
        <li><b>Photo ID for every guest.</b> The villa needs it at check-in.</li>
      </ul>
      <p>If your group includes grandparents or small children, keep each day to one or two sights. December days are short in the hills, and the light goes early under the trees. See our longer guide to the <a href="/best-time-to-visit-wayanad/">best time to visit Wayanad</a> for the rest of the year.</p>

      <h2>Book early</h2>
      <p>Whole houses that sleep a large group are few, and December dates go first. If you are planning a Christmas or New Year trip, check dates now. Our page on <a href="/christmas-new-year-villa-wayanad/">Christmas and New Year at Maison Claire</a> explains how the villa works for the holidays. If December is your month, look at the free nights in the <a href="/rates-booking/">booking window</a> soon, and send holiday questions to us on WhatsApp.</p>
    </Guide>
  );
}
