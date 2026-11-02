import { site } from '@/content/site';
import { BookButton, BookingMount, ContactLinks } from './Book';
import { Img } from './Img';

export function BookingBand({ title = 'Check dates for your stay', text = 'Choose your dates and group size to see live availability and the price for the whole villa.' }: { title?: string; text?: string }) {
  return (
    <section className="band-dark section--tight" aria-labelledby="book-band">
      <div className="wrap g12" style={{ alignItems: 'center' }}>
        <div className="c-1-5 stack">
          <img src="/brand/mark-cream.svg" alt="" width={56} height={56} loading="lazy" style={{ width: 56, height: 'auto' }} />
          <h2 id="book-band" className="d2">{title}</h2>
          <p style={{ color: 'var(--linen)' }}>{text}</p>
          <p className="small">Prefer to talk first?</p>
          <ContactLinks compact />
        </div>
        <div className="c-7-6"><BookingMount mode="search" /></div>
      </div>
    </section>
  );
}

export function DayTimeline() {
  const moments = [
    { t: 'Morning', img: 'balcony-view', alt: 'Two chairs on a bedroom balcony facing the mountains', line: 'Coffee on the balcony, with the hills right in front of you.' },
    { t: 'Midday', img: 'dining-counter', alt: 'Kitchen counter and dining chairs inside the villa', line: 'Cook together, then a long lunch at the table for eight.' },
    { t: 'Golden hour', img: 'pool-dusk-portrait', alt: 'The pool at dusk under a pink sky over the hills', line: 'Sit by the pool while the sky over the hills turns pink.' },
    { t: 'Night', img: 'villa-night-pool', alt: 'The villa and its pool lit up at night', line: 'The pool lights come on and the whole house glows.' },
  ];
  return (
    <ol className="day x">
      {moments.map((m, i) => (
        <li key={m.t}>
          <p className="cap cap--pool" style={{ marginBottom: 16 }}>{m.t}</p>
          <div className={`ph ${i % 2 ? 'ratio-43' : 'ratio-45'}`}><Img name={m.img} alt={m.alt} sizes="(min-width: 900px) 25vw, 90vw" /></div>
          <p className="serif">{m.line}</p>
        </li>
      ))}
    </ol>
  );
}

export const rooms = [
  { name: 'Peak-view bedroom', img: 'bedroom-mountain-view', alt: 'Bedroom with a king bed and glass doors facing the mountains', desc: 'Four king bedrooms with their own bathrooms, two on each floor. Two face Chembra Peak.' },
  { name: 'Carved-bed room', img: 'bedroom-balcony', alt: 'Bedroom with a carved wooden king bed and doors to a balcony', desc: 'A carved wooden king bed and a balcony over the trees.' },
  { name: 'Grey room', img: 'bedroom-grey', alt: 'Bedroom with a grey upholstered king bed and a framed painting', desc: 'A grey upholstered king bed and a dressing area.' },
  { name: 'Balconies', img: 'bedroom-garden', alt: 'Bedroom doors open to a balcony looking onto palm trees and hills', desc: 'Balconies look out over the palms to the hills.' },
  { name: 'Lounges', img: 'living-teal', alt: 'Lounge with a teal sofa and windows onto the hills', desc: 'Three separate lounges, one with a TV, so the group can spread out.' },
  { name: 'Kitchen', img: 'kitchen', alt: 'Kitchen with a fridge, hob, chimney and microwave', desc: 'A full kitchen with fridge, hob and chimney, microwave and washing machine.' },
  { name: 'Dining', img: 'dining-staircase', alt: 'Dining table for eight beside the glass staircase', desc: 'A table for eight beside the glass staircase.' },
  { name: 'Bathrooms', img: 'bathroom-green', alt: 'Bathroom with green stone walls and a wall-hung basin', desc: 'Four bathrooms, one for each bedroom, with walk-in showers.' },
  { name: 'The pool', img: 'exterior-pool', alt: 'The tiled pool beside the villa', desc: 'A private infinity-edge pool for your group only, lit up at night.' },
  { name: 'Garden', img: 'exterior-path', alt: 'Stone path across the lawn to the pool', desc: 'A lawn, a stone path and seats looking out at the hills.' },
];

/** Room explorer with no JavaScript: radio buttons + CSS. */
export function RoomExplorer() {
  const css = rooms.map((_, i) =>
    `#rx-${i}:checked~.rx__figs .rx-f${i}{display:block}` +
    `#rx-${i}:checked~.rx__tabs label[for=rx-${i}]{background:var(--bark);color:var(--paper);border-color:var(--bark)}` +
    `#rx-${i}:focus-visible~.rx__tabs label[for=rx-${i}]{outline:2px solid var(--pool);outline-offset:2px}` +
    `@media(min-width:900px){#rx-${i}:checked~.rx__tabs label[for=rx-${i}]{background:transparent;color:var(--bark);font-style:italic}}`
  ).join('');
  return (
    <div className="rx">
      <style dangerouslySetInnerHTML={{ __html: css }} />
      {rooms.map((r, i) => (
        <input key={r.name} className="rx__in" type="radio" name="rx" id={`rx-${i}`} defaultChecked={i === 0} aria-label={r.name} />
      ))}
      <div className="rx__tabs" role="group" aria-label="Choose a space in the villa">
        {rooms.map((r, i) => (
          <label key={r.name} htmlFor={`rx-${i}`} className="rx__tab"><span className="rx__num">{String(i + 1).padStart(2, '0')}</span>{r.name}</label>
        ))}
      </div>
      <div className="rx__figs">
        {rooms.map((r, i) => (
          <figure key={r.name} className={`rx__fig rx-f${i}`}>
            <div className="ph ratio-43"><Img name={r.img} alt={r.alt} sizes="(min-width: 900px) 55vw, 100vw" /></div>
            <figcaption><span className="cap cap--muted" style={{ whiteSpace: 'nowrap' }}>{String(i + 1).padStart(2, '0')} / {rooms.length}</span><span>{r.desc}</span></figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

/** Inner-page hero: full-bleed photo with the title on it. */
export function PhotoHero({ img, alt, title, kicker, facts, children }: { img: string; alt: string; title: React.ReactNode; kicker?: React.ReactNode; facts?: string[]; children?: React.ReactNode }) {
  return (
    <section className="hero hero--short">
      <div className="hero__media"><Img name={img} alt={alt} priority sizes="100vw" /></div>
      <div className="wrap hero__body">
        {kicker}
        <h1 className="d1" style={{ marginTop: 18 }}>{title}</h1>
        {children ?? <div className="hero__ctas"><BookButton className="btn btn--light">Check dates</BookButton></div>}
        {facts && <div className="horizon">{facts.map((f) => <span key={f} className="cap">{f}</span>)}</div>}
      </div>
    </section>
  );
}

/** Plain title block for text-led pages. */
export function TitleBlock({ crumbs, title, intro, aside }: { crumbs: React.ReactNode; title: React.ReactNode; intro?: React.ReactNode; aside?: React.ReactNode }) {
  return (
    <section className="wrap" style={{ paddingTop: 'clamp(24px, 5vw, 80px)', paddingBottom: 'clamp(40px, 5vw, 72px)' }}>
      <div className="g12" style={{ alignItems: 'end' }}>
        <div className="c-1-8 stack">
          {crumbs}
          <h1 className="d1" style={{ fontSize: 'clamp(42px, 6.2vw, 92px)' }}>{title}</h1>
        </div>
        <div className="c-9-4 stack">
          {intro && <div className="lead">{intro}</div>}
          {aside}
        </div>
      </div>
    </section>
  );
}

export { BookButton };
export const sleepsText = `${site.bedrooms} king bedrooms, sleeps ${site.sleeps}`;

/** "In short": a plain, factual answer block near the top of a page. Written for people first; it also gives search engines and AI assistants clear facts. */
export function InShort({ children, band = false }: { children: React.ReactNode; band?: boolean }) {
  return (
    <section className={band ? 'band-mist section--tight' : 'section--tight'} aria-label="About the villa">
      <div className="wrap g12">
        <div className="c-3-8 lead body">{children}</div>
      </div>
    </section>
  );
}
