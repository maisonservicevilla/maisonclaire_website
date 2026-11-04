import { meta } from '@/lib/meta';
import { Guide, FactBox } from '@/components/Guide';

const d = 'Kanthanpara Falls near Meppadi, Wayanad: a quiet waterfall a short walk from the road. Entry, timings, best season and where to stay.';
export const metadata = meta('/kanthanpara-waterfalls/', 'Kanthanpara Waterfalls, Wayanad: Visitor Guide & Stay Nearby', d, { image: 'pool-view-portrait', type: 'article' });

export default function Page() {
  return (
    <Guide path="/kanthanpara-waterfalls/" crumbs={[['/things-to-do-near-meppadi/', 'Things to do'], ['/kanthanpara-waterfalls/', 'Kanthanpara Falls']]}
      title={<>Kanthanpara <em>Falls</em></>} headline="Kanthanpara Falls, Wayanad: a visitor guide" description={d}
      intro={<p>A smaller, quieter waterfall in south Wayanad, a short walk from the road. It is 10 km from Maison Claire.</p>}
      img="place-kanthanpara" imgAlt="Kanthanpara Falls pouring over wide rock shelves into a pool" imgCaption={<>Kanthanpara Falls, 10 km from the villa. Photo: <a href="https://commons.wikimedia.org/wiki/File:Wayanad_-_Kanthanpara_Waterfalls_-_1.jpg" target="_blank" rel="noopener">Ingo Mehling</a>, <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener license">CC BY-SA 4.0</a></>}
      aside={<FactBox rows={[['From the villa', '10 km'], ['Height', 'About 30 m'], ['Walk', 'Short, from the road'], ['Entry', 'Small fee'], ['Reported hours', 'About 9 AM to 4:30 PM']]} />}
      sources={[['Backpackers United: Kanthanpara Waterfalls', 'https://backpackersunited.in/destinations/wayanad/attraction/kanthanpara-waterfalls'], ['Kerala Tourism: Kanthanpara Waterfalls video', 'https://www.keralatourism.org/video-gallery/kanthanpara-waterfalls/1076']]}
      next={{ href: '/location/', title: 'Location', img: 'exterior-day' }}
      about={{ '@type': 'TouristAttraction', name: 'Kanthanpara Waterfalls', address: { '@type': 'PostalAddress', addressRegion: 'Wayanad, Kerala', addressCountry: 'IN' } }}>
      <h2>What to expect</h2>
      <p>Kanthanpara is smaller than Soochipara and Meenmutty, with a drop of about 30 metres into a pool surrounded by rocks. Because it is less famous, it is usually calmer, and the walk in from the road is short. That makes it a good choice with children or older relatives who would struggle on a long forest path.</p>

      <h2>Entry and timings</h2>
      <p>There is a small entry fee. Opening hours have been reported as roughly 9 AM to 4:30 PM, but forest sites in Wayanad can close in heavy rain, so check on the day. Plan on an hour or two here.</p>

      <h2>When to go</h2>
      <p>The falls are fullest during and just after the monsoon. From October to January there is still good water and the paths are drier. By late summer the flow drops.</p>

      <h2>Safety</h2>
      <p>Rocks near any waterfall are slippery. Keep children close, wear shoes with grip, and follow any instructions from staff at the site about where you can go in the water.</p>

      <h2>Combine it with</h2>
      <p>The 900 Kandi glass bridge (9 km from the villa) and Soochipara Falls (15 km) are both nearby. See all <a href="/things-to-do-near-meppadi/">things to do near Meppadi</a>.</p>
    </Guide>
  );
}
