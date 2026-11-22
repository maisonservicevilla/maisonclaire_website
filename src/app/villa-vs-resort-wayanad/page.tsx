import { site } from '@/content/site';
import { meta } from '@/lib/meta';
import { Guide, FactBox } from '@/components/Guide';
import type { QA } from '@/components/Bits';

const d = 'Villa or resort in Wayanad? We compare privacy, pools, food, staff and cost per head for families and groups, and explain where homestays fit.';
export const metadata = meta('/villa-vs-resort-wayanad/', 'Villa or Resort in Wayanad? An Honest Comparison', d, { image: 'exterior-pool', type: 'article' });

const faqs: QA[] = [
  { q: 'Is a villa or a resort better for a family in Wayanad?',
    a: <p>For a family of six or more, a private villa usually works better: everyone sleeps under one roof, children can use the pool without strangers around, and you can cook simple meals. A resort is the easier choice for a couple or a small family who want restaurants and staff on hand.</p>,
    text: 'For a family of six or more, a private villa usually works better: everyone sleeps under one roof, children can use the pool without strangers around, and you can cook simple meals. A resort is the easier choice for a couple or a small family who want restaurants and staff on hand.' },
  { q: 'Is a private villa cheaper than a resort for a group?',
    a: <p>Often, yes. A resort charges per room, so the bill grows with every room you add. A villa is priced for the whole house, so the more people share it, up to its capacity, the lower the cost per head. For two people a villa is rarely the cheaper option.</p>,
    text: 'Often, yes. A resort charges per room, so the bill grows with every room you add. A villa is priced for the whole house, so the more people share it, up to its capacity, the lower the cost per head. For two people a villa is rarely the cheaper option.' },
  { q: 'What is the difference between a homestay and a villa in Kerala?',
    a: <p>Under Kerala Tourism rules, a classified homestay is a home where the owner and family live on the premises, with up to six rooms for guests. In a villa rented whole, your group has the house to itself.</p>,
    text: 'Under Kerala Tourism rules, a classified homestay is a home where the owner and family live on the premises, with up to six rooms for guests. In a villa rented whole, your group has the house to itself.' },
  { q: 'Can 12 people stay in one villa in Wayanad?',
    a: <p>Yes, if the villa is built for it. Maison Claire has four king bedrooms with attached bathrooms. It sleeps 8, or up to 12 with one extra guest in each room.</p>,
    text: 'Yes, if the villa is built for it. Maison Claire has four king bedrooms with attached bathrooms. It sleeps 8, or up to 12 with one extra guest in each room.' },
  { q: 'Do villas in Wayanad include food?',
    a: <p>It depends on the villa. At Maison Claire you get a full kitchen and a dining table for eight, and restaurants are about 200 m away. For anything beyond the house itself, ask us on WhatsApp before you book.</p>,
    text: 'It depends on the villa. At Maison Claire you get a full kitchen and a dining table for eight, and restaurants are about 200 m away. For anything beyond the house itself, ask us on WhatsApp before you book.' },
];

export default function Page() {
  return (
    <Guide path="/villa-vs-resort-wayanad/" crumbs={[['/location/', 'Location'], ['/villa-vs-resort-wayanad/', 'Villa or resort']]}
      title={<>Villa or resort <em>in Wayanad?</em></>} headline="Villa or resort in Wayanad? A side-by-side comparison for families and groups" description={d}
      intro={<p>Pick a private villa if you are a family or group of six to twelve who want to stay together, with your own pool and kitchen. Pick a resort if there are only two or three of you, or if you want restaurants, staff and activities arranged for you.</p>}
      img="exterior-pool" imgAlt="The villa beside its private pool, with hills behind" imgCaption="Maison Claire and its private pool in Meppadi. Only your group uses it."
      aside={<FactBox title="In short" rows={[['Villa suits', 'Families and groups of 6 to 12'], ['Resort suits', 'Couples, small families'], ['Villa pricing', 'Whole house, shared by the group'], ['Resort pricing', 'Per room, plus meals'], ['Homestay', 'Owner lives on site']]} />}
      sources={[
        ['Kerala Tourism: guidelines for the classification of homestays', 'https://www.keralatourism.org/cls/homestays/guidelines.php'],
        ['Kerala Tourism: serviced villas scheme', 'https://www.keralatourism.org/cls/serviced-villas/serviced-villas-main.php'],
      ]}
      faqs={faqs}
      related={[['/family-holiday-villa-wayanad/', 'Family holiday villa'], ['/group-stay-villa-wayanad/', 'Group stays'], ['/villa-for-12-guests-wayanad/', 'A villa for 12 guests'], ['/private-pool/', 'The private pool'], ['/where-to-stay-in-wayanad/', 'Where to stay in Wayanad']]}
      stay="Four king bedrooms and one private pool, booked whole for up to 12."
      next={{ href: '/the-villa/', title: 'The villa', img: 'living-teal' }}>
      <h2>The short answer</h2>
      <p>Both are good ways to see Wayanad. The right one depends on how many of you there are and how you like to spend the evenings. A resort gives you service. A private villa gives you space and privacy. We run a villa, so we will try to be fair about where a resort does the job better.</p>

      <h2>What a resort does well</h2>
      <ul>
        <li><b>Food on site.</b> A restaurant, room service and someone else doing the washing up.</li>
        <li><b>Staff around the clock.</b> A front desk, daily housekeeping and help with taxis and bookings.</li>
        <li><b>Things to do.</b> Many resorts arrange guided walks, games or a spa, so you do not have to plan much.</li>
        <li><b>Good for two.</b> A couple pays for one room, not a whole house.</li>
      </ul>
      <p>The trade-off is that you share. The pool, the lawns and the dining room belong to every guest, and a group of four families may end up in rooms spread across different buildings, meeting only at meals.</p>

      <h2>What a private villa does well</h2>
      <ul>
        <li><b>Privacy.</b> The house is yours. No other guests in the corridor, at the pool or at breakfast.</li>
        <li><b>One pool for your group.</b> At Maison Claire the infinity-edge pool faces the hills and has underwater lights for evening swims.</li>
        <li><b>A kitchen.</b> Make tea at 6 AM, heat milk for a baby, or cook a simple dinner for everyone.</li>
        <li><b>Rooms together.</b> Everyone sleeps under one roof and meets in the same lounge.</li>
      </ul>
      <p>The trade-off is less service. There is no restaurant downstairs and no daily programme. You plan your own days, and the house is priced as a whole, so a small group pays for rooms it does not use.</p>

      <h2>Villa and resort side by side</h2>
      <table>
        <thead><tr><th scope="col"></th><th scope="col">Private villa</th><th scope="col">Resort</th></tr></thead>
        <tbody>
          <tr><th scope="row">Privacy</th><td>Whole house for one group</td><td>Shared with other guests</td></tr>
          <tr><th scope="row">Pool</th><td>Yours alone</td><td>Shared</td></tr>
          <tr><th scope="row">Food</th><td>Your own kitchen, or eat out</td><td>Restaurant and room service</td></tr>
          <tr><th scope="row">Staff</th><td>Self check-in, no front desk</td><td>Front desk, housekeeping</td></tr>
          <tr><th scope="row">Activities</th><td>You plan them</td><td>Often arranged for you</td></tr>
          <tr><th scope="row">Rooms</th><td>Together in one house</td><td>Can be spread out</td></tr>
          <tr><th scope="row">Best for</th><td>Families and groups</td><td>Couples and small families</td></tr>
        </tbody>
      </table>

      <h2>How the cost works out</h2>
      <p>A resort charges by the room, and meals usually come on top at resort prices. Book four rooms for four couples and you pay for four rooms, then four restaurant bills a day.</p>
      <p>A villa is priced for the whole house, and the group shares that one figure. Divide it by eight people and it looks very different from the same figure divided by two. Add your own breakfasts from the kitchen and the gap widens. This is why villas tend to make sense for groups and rarely for couples. To compare properly, take the full villa price for your dates and set it against the resort's room rate times the rooms you need, plus meals. Maison Claire's live dates and whole-villa price are in the <a href="/rates-booking/">booking window</a>.</p>

      <h2>What about a homestay?</h2>
      <p>A homestay sits between the two. Under Kerala Tourism's rules, a classified homestay is a home where the owner and family live on the premises, with up to six rooms for guests. You often get home cooking and local advice, but you are a guest in someone's house and may share it with other travellers. Kerala Tourism has a separate category for serviced villas, independent furnished homes with up to six guest rooms. A villa rented whole, like ours, keeps the house for your group alone.</p>

      <h2>Which one suits your group?</h2>
      <ul>
        <li><b>Two of you, wanting to be looked after:</b> a resort.</li>
        <li><b>Grandparents, parents and children:</b> a villa with ground-floor bedrooms. Maison Claire has two on the ground floor and two upstairs. See our <a href="/family-holiday-villa-wayanad/">family holiday villa</a> page.</li>
        <li><b>Friends or several couples:</b> a villa, so the evenings happen in one place. See <a href="/group-stay-villa-wayanad/">group stays</a>.</li>
        <li><b>A large group of up to {site.maxGuests}:</b> a villa that sleeps that many without splitting you up.</li>
      </ul>
      <p>If a villa sounds right, <a href="/the-villa/">see the house</a>, then set the whole-villa price for your dates in the booking window against the resort rooms you are weighing up. Questions about the house get the fastest answer on WhatsApp.</p>
    </Guide>
  );
}
