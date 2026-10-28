import { site } from '@/content/site';
import { meta } from '@/lib/meta';
import { Landing } from '@/components/Landing';

const whoWhere: [string, string, string][] = [
  ['Bedroom 1', 'Ground floor', 'Good for grandparents: no stairs, king bed, own bathroom'],
  ['Bedroom 2', 'Upstairs', 'King bed, own bathroom, hill-view balcony'],
  ['Bedroom 3', 'Upstairs', 'King bed, own bathroom, hill-view balcony'],
  ['Bedroom 4', 'Upstairs', 'King bed, own bathroom, balcony'],
];

export const metadata = meta('/family-holiday-villa-wayanad/', 'Family Holiday Villa in Wayanad | Maison Claire, Meppadi',
  'A family-friendly holiday villa in Wayanad: four king bedrooms with bathrooms, a private pool and a full kitchen. Family accommodation in Meppadi for up to 12.', { image: 'living-chesterfield' });

export default function Page() {
  return (
    <Landing path="/family-holiday-villa-wayanad/" crumb="Family holidays" heroImg="dining" heroAlt="The dining table for eight inside the villa"
      title={<>A family holiday villa in Wayanad, <em>all under one roof</em></>}
      facts={['4 king bedrooms', '4 bathrooms', 'Private pool', 'Full kitchen']}
      lead={<>Three generations, one house. Grandparents get a quiet room of their own, the children get the pool, and <em>everyone eats at the same table</em> at the end of the day.</>}
      module={
        <section className="section--tight band-mist">
          <div className="wrap g12">
            <div className="c-1-4 stack"><p className="cap cap--pool">Who sleeps where</p><h2 className="d2">Room for <em>every branch</em> of the family</h2></div>
            <div className="c-6-7">
              <ol className="plan">{whoWhere.map(([n, w, d]) => <li key={n}><span className="plan__n">{n}</span><span className="cap cap--muted">{w}</span><span className="plan__d">{d}</span></li>)}</ol>
              <p className="lead" style={{ marginTop: 20 }}>Each room takes one extra guest, so the house sleeps up to {site.maxGuests}.</p>
            </div>
          </div>
        </section>
      }
      points={[
        { h: 'A bedroom and bathroom for each family', t: <p>All four bedrooms have a king bed and an attached bathroom, so two or three families can share without anyone queuing. Bedroom 1 is on the ground floor, which helps older relatives who would rather skip the stairs.</p>, img: 'bedroom-mountain-view', alt: 'Ground-floor bedroom with a king bed and balcony' },
        { h: 'Home cooking, if you want it', t: <p>The full kitchen means you can feed fussy eaters, babies and grandparents on their own timetable. Restaurants are about 200 m away for nights off.</p>, img: 'kitchen', alt: 'Villa kitchen with fridge and hob' },
        { h: 'A pool only your family uses', t: <p>No strangers at the poolside. Keep an adult with the children whenever they swim, and the rest of the family can watch from the lawn.</p>, img: 'exterior-pool', alt: 'The private pool beside the villa' },
      ]}
      plan={{ title: <>Family days out <em>nearby</em></>, body: <><p>Kanthanpara Falls (10 km) is a short walk from the road and easy for most ages. The 900 Kandi glass bridge (9 km) is reached by jeep through the forest, so the trip there is part of the fun.</p><p>Plan bigger trips, like Edakkal Caves (24 km), for the morning, and be back at the villa for the pool by late afternoon. More ideas in <a href="/things-to-do-near-meppadi/">things to do near Meppadi</a>.</p></> }}
      plan2={<p>Maison Claire is a family holiday home and a villa for family stay in Wayanad: family villa accommodation where a family reunion or a holiday with grandparents fits under one roof. As a spacious holiday villa for family gatherings, one price covers the house, which is often simpler than booking three or four hotel rooms.</p>}
      faqs={[
        { q: 'How many family members can stay?', a: <p>Up to {site.maxGuests}: two in each of the four king bedrooms, plus one extra guest per room.</p>, text: `Up to ${site.maxGuests}: two in each of the four king bedrooms, plus one extra guest per room.` },
        { q: 'Is there a ground-floor bedroom?', a: <p>Yes, Bedroom 1 is on the ground floor, with its own bathroom.</p>, text: 'Yes, Bedroom 1 is on the ground floor, with its own bathroom.' },
        { q: 'Can we cook for the children?', a: <p>Yes. The kitchen has a fridge, hob, microwave and a washing machine for the inevitable muddy clothes.</p>, text: 'Yes. The kitchen has a fridge, hob, microwave and a washing machine.' },
      ]}
      next={{ href: '/group-stay-villa-wayanad/', title: 'Group stays', img: 'terrace-view' }} />
  );
}
