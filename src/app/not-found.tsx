import { Header } from '@/components/Chrome';
import { BookButton } from '@/components/Book';

export const metadata = { title: 'Page not found | Maison Claire', robots: { index: false } };

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main" className="wrap" style={{ paddingBlock: 'var(--space)' }}>
        <p className="cap cap--pool">404</p>
        <h1 className="d1" style={{ marginTop: 16 }}>This page <em>isn't here</em></h1>
        <p className="lead" style={{ marginTop: 20, maxWidth: 560 }}>It may have moved. Try the villa, or check your dates.</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 32 }}>
          <BookButton className="btn btn--dark nf-main">Check dates</BookButton>
          <a className="btn btn--line" href="/">Home</a>
          <a className="btn btn--line" href="/the-villa/">The villa</a>
        </div>
      </main>
    </>
  );
}
