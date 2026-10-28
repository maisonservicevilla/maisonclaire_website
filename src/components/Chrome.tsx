import { nav, site } from '@/content/site';
import { BookButton } from './Book';

const menuLinks = [
  { href: '/', label: 'Home' },
  { href: '/the-villa/', label: 'The Villa' },
  { href: '/bedrooms/', label: 'Bedrooms' },
  { href: '/private-pool/', label: 'The Pool' },
  { href: '/gallery/', label: 'Gallery' },
  { href: '/location/', label: 'Location' },
  { href: '/things-to-do-near-meppadi/', label: 'Things to do' },
  { href: '/faq/', label: 'FAQ' },
  { href: '/rates-booking/', label: 'Rates & booking' },
];

export function Header({ current, over = false }: { current?: string; over?: boolean }) {
  return (
    <header className={over ? 'hdr hdr--over' : 'hdr'}>
      <a className="skip" href="#main">Skip to content</a>
      <div className="wrap hdr__in">
        <a href="/" className="hdr__logo" aria-label="Maison Claire Service Villa, home">
          {over ? (
            <>
              <img className="logo--photo" src="/brand/logo-cream.svg" alt="Maison Claire Service Villa" width={662} height={150} />
              <img className="logo--paper" src="/brand/logo-dark.svg" alt="" aria-hidden="true" width={662} height={150} loading="lazy" />
            </>
          ) : (
            <img src="/brand/logo-dark.svg" alt="Maison Claire Service Villa" width={662} height={150} />
          )}
        </a>
        <nav className="hdr__nav" aria-label="Main">
          {nav.map((n) => (
            <a key={n.href} href={n.href} aria-current={current === n.href ? 'page' : undefined}>{n.label}</a>
          ))}
          <BookButton className={over ? 'btn btn--light btn--sm hdr__book' : 'btn btn--dark btn--sm hdr__book'} />
        </nav>
        <details className="menu">
          <summary aria-label="Menu">Menu</summary>
          <div className="menu__panel">
            <nav aria-label="Site">
              <ul className="menu__list">
                {menuLinks.map((n, i) => (
                  <li key={n.href}>
                    <a href={n.href} aria-current={current === n.href ? 'page' : undefined}>
                      <span>{n.label}</span><span className="cap">{String(i).padStart(2, '0')}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="menu__foot">
              <BookButton className="btn btn--light">Check dates and book</BookButton>
              <p className="cap" style={{ textAlign: 'center', color: '#a99e86' }}>Meppadi · Wayanad · Kerala</p>
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}

const footerCols: { title: string; links: [string, string][] }[] = [
  { title: 'The villa', links: [['/the-villa/', 'The villa'], ['/bedrooms/', 'Bedrooms'], ['/private-pool/', 'Private pool'], ['/kitchen-dining/', 'Kitchen & dining'], ['/living-spaces/', 'Living spaces'], ['/gallery/', 'Gallery']] },
  { title: 'Stay with us', links: [['/rates-booking/', 'Rates & booking'], ['/family-holiday-villa-wayanad/', 'Family holidays'], ['/group-stay-villa-wayanad/', 'Group stays'], ['/weekend-villa-wayanad/', 'Weekend getaways'], ['/reviews/', 'Guest reviews'], ['/house-rules/', 'House rules']] },
  { title: 'Wayanad', links: [['/location/', 'Location'], ['/meppadi/', 'Staying in Meppadi'], ['/things-to-do-near-meppadi/', 'Things to do'], ['/900-kandi-glass-bridge/', '900 Kandi glass bridge'], ['/kanthanpara-waterfalls/', 'Kanthanpara Falls'], ['/bangalore-to-wayanad/', 'Bangalore to Wayanad'], ['/wayanad-travel-update/', 'Travel update']] },
  { title: 'Help', links: [['/faq/', 'FAQ'], ['/contact/', 'Contact'], ['/privacy/', 'Privacy'], ['/terms/', 'Booking terms']] },
];

export function Footer() {
  return (
    <footer className="ftr">
      <div className="wrap">
        <img className="ftr__logo" src="/brand/logo-cream.svg" alt="Maison Claire Service Villa" width={662} height={150} loading="lazy" />
        <div className="ftr__cols">
          {footerCols.map((c) => (
            <div key={c.title}>
              <h2 className="cap">{c.title}</h2>
              <ul className="x">{c.links.map(([h, l]) => <li key={h}><a href={h}>{l}</a></li>)}</ul>
            </div>
          ))}
          <div>
            <h2 className="cap">Also on</h2>
            <ul className="x">
              {Object.entries(site.listings).map(([k, v]) => <li key={k}><a href={v} rel="noopener" target="_blank">{k}</a></li>)}
              <li><a href={site.instagram} rel="noopener" target="_blank">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="ftr__base">
          <span>{site.name} · {site.locality}, {site.district}, {site.state}, India</span>
          <span>Registration no. {site.registrationNo} · © {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}

export function StickyBar() {
  return (
    <div className="bar" role="complementary" aria-label="Book your stay">
      <p className="bar__t"><b>The whole villa, just for you</b>4 bedrooms · private pool · up to {site.maxGuests} guests</p>
      <BookButton className="btn btn--dark">Book now</BookButton>
    </div>
  );
}
