import { meta } from '@/lib/meta';
import { Guide, FactBox, UPDATED_TEXT } from '@/components/Guide';

const d = 'Is Wayanad safe to visit now? A dated October 2026 update on Meppadi and Wayanad: weather, rain-alert closures, the 2024 landslide area and how to check.';
export const metadata = meta('/wayanad-travel-update/', 'Is Wayanad Safe to Visit Now? Wayanad Travel Update', d, { image: 'balcony-view', type: 'article' });

export default function Page() {
  return (
    <Guide path="/wayanad-travel-update/" crumbs={[['/location/', 'Location'], ['/wayanad-travel-update/', 'Travel update']]}
      title={<>Wayanad travel update, <em>October 2026</em></>} headline="Is Wayanad safe to visit now? Travel update, October 2026" description={d}
      intro={<p>A short, dated note on visiting Meppadi and Wayanad. We update it when something changes.</p>}
      img="balcony-view" imgAlt="Balcony chairs at the villa facing the hills" imgCaption="The view from a bedroom balcony at Maison Claire, Meppadi."
      aside={<FactBox title="Right now" rows={[['Season', 'Post-monsoon'], ['Mornings', 'Mist on high ground'], ['Tourist spots', 'Open; may close on heavy-rain alerts'], ['Last checked', UPDATED_TEXT]]} />}
      sources={[
        ['Onmanorama: Wayanad draped in mist as tourists flock to the hills (19 Oct 2026)', 'https://www.onmanorama.com/news/kerala/2026/10/19/wayanad-draped-in-mist-as-tourists-flock-to-the-hills.html'],
        ['Onmanorama: Orange alert, but sunny day (20 Oct 2026)', 'https://www.onmanorama.com/travel/travel-news/2026/10/20/faulty-orange-alert-confuses-tourists-visiting-wayanad-sparks-furore-on-social-media.html'],
        ['Onmanorama: Wayanad tourism faces Onam slump (8 Sep 2026)', 'https://www.onmanorama.com/news/kerala/2026/09/08/wayanad-tourism-faces-onam-slump-calls-grow-for-new-intiatives-and-fewer-blanket-restrictions.html'],
        ['Kerala Tourism: Brand Wayanad', 'https://www.keralatourism.org/brand-wayanad/launch'],
      ]}
      next={{ href: '/things-to-do-near-meppadi/', title: 'Things to do', img: 'pool-view-portrait' }}>
      <h2>The short answer</h2>
      <p>Yes, Wayanad is open to visitors. In late October 2026 the monsoon had eased, and local reports described busy viewpoints with morning mist over the valleys. The main thing to watch is the weather alert on the day you travel.</p>

      <h2>Rain alerts and closures</h2>
      <p>When the India Meteorological Department issues a heavy-rain alert for the district, the Wayanad District Disaster Management Authority can close tourist spots for the day. That happened on a weekend in October 2026 under an orange alert, which was later downgraded. If rain is forecast, check the alert level the evening before and plan a slow day at the villa if needed.</p>

      <h2>About the 2024 landslide</h2>
      <p>On 30 July 2024, landslides struck Mundakkai and Chooralmala, villages in the hills of Meppadi panchayat. Tourism across the district has since reopened, and the state is promoting Wayanad again through its Brand Wayanad campaign.</p>

      <h2>How to check before you go</h2>
      <ul>
        <li>Look up the IMD district alert for Wayanad the day before travel.</li>
        <li>Check the District Tourism Promotion Council for any closures.</li>
        <li>Ask us. We can tell you how things are around the villa that week.</li>
      </ul>
    </Guide>
  );
}
