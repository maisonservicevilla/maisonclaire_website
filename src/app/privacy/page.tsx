import { site } from '@/content/site';
import { meta } from '@/lib/meta';
import { Header } from '@/components/Chrome';
import { Crumbs } from '@/components/Bits';
import { TitleBlock } from '@/components/Sections';

export const metadata = meta('/privacy/', 'Privacy Policy | Maison Claire Service Villa', 'How Maison Claire Service Villa handles your information on this website and in the booking window.', { noindex: true });

export default function Page() {
  return (
    <>
      <Header />
      <main id="main">
        <TitleBlock crumbs={<Crumbs items={[['/privacy/', 'Privacy']]} />} title="Privacy" intro={<p>Last updated 27 October 2026.</p>} />
        <section className="wrap" style={{ paddingBottom: 'var(--space)' }}>
          <div className="prose">
            <h2>What this website collects</h2>
            <p>This website itself does not ask for your name, phone number or email, and it does not set advertising cookies. Pages are plain files served by our hosting provider, which keeps standard technical logs (such as IP address and browser type) to run and protect the service.</p>
            <h2>The booking window</h2>
            <p>Bookings and booking requests are handled by Innrow, our booking system. When you open the booking window and enter your details, they go to Innrow and to us so we can manage your stay. Innrow's own privacy terms apply to that information.</p>
            <h2>Analytics</h2>
            <p>If we add website analytics in future, we will list the provider here and use it only to understand which pages are useful, not to sell or share your data.</p>
            <h2>Your choices</h2>
            <p>You can ask us what information we hold about your booking and ask us to correct or delete it, unless the law requires us to keep it (for example, guest ID records). Contact us through the booking window{site.email ? <> or at <a href={`mailto:${site.email}`}>{site.email}</a></> : null}.</p>
          </div>
        </section>
      </main>
    </>
  );
}
