import { site } from '@/content/site';
import { meta } from '@/lib/meta';
import { Header } from '@/components/Chrome';
import { Crumbs, NextChapter } from '@/components/Bits';
import { BookingBand, TitleBlock } from '@/components/Sections';

export const metadata = meta('/house-rules/', 'Maison Claire House Rules | Check-out, ID, Guests & Policies',
  'House rules at Maison Claire Service Villa, Meppadi, Wayanad: check-out time, photo ID, guest limit, self check-in and pool safety, in plain language.');

export default function Page() {
  const rules: [string, string][] = [
    ['Check-out', `By ${site.checkOut}.${site.checkIn ? ` Check-in from ${site.checkIn}.` : ''}`],
    ['Self check-in', 'You let yourselves in with a door keypad.'],
    ['Guests', `Up to ${site.maxGuests} guests: two per bedroom, plus one extra guest in each room.`],
    ['Photo ID', 'Every guest needs one: passport, Aadhaar, driving licence or another government ID.'],
    ['Main guest', 'The person who books must be 18 or older and stay at the villa.'],
    ['Pool safety', 'There is no lifeguard. Please keep an adult with children whenever they are near the pool.'],
    ...(site.pets ? [['Pets', site.pets] as [string, string]] : []),
    ...(site.events ? [['Parties and events', site.events] as [string, string]] : []),
  ];
  return (
    <>
      <Header />
      <main id="main">
        <TitleBlock crumbs={<Crumbs items={[['/the-villa/', 'The villa'], ['/house-rules/', 'House rules']]} />}
          title={<>Maison Claire <em>house rules</em></>} intro={<p>A short list so everyone knows what to expect. Cancellation terms are shown in the booking window before you pay.</p>} />
        <section className="wrap" style={{ paddingBottom: 'var(--space)', maxWidth: 1000 }}>
          <ol className="ledger rules">
            {rules.map(([k, v], i) => (
              <li key={k} style={{ justifyContent: 'flex-start', gap: 'clamp(16px,4vw,48px)' }}>
                <span className="serif" style={{ fontSize: 26, color: 'var(--pool)', minWidth: 32 }}>{['i','ii','iii','iv','v','vi','vii','viii','ix','x'][i]}</span>
                <span style={{ flex: '0 0 clamp(110px,22vw,200px)', fontWeight: 500 }}>{k}</span>
                <span className="body" style={{ flex: 1 }}>{v}</span>
              </li>
            ))}
          </ol>
          <p className="small" style={{ marginTop: 24 }}>Kerala registration number {site.registrationNo}. <a href="/terms/">Booking terms</a>.</p>
        </section>
        <BookingBand />
        <NextChapter href="/contact/" title="Contact" img="exterior-day" />
      </main>
    </>
  );
}
