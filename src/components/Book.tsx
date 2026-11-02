import { site } from '@/content/site';

/**
 * Innrow booking integration.
 *
 * Every page has ONE booking "mount" (the dates-and-guests bar, or the full
 * booking form on /rates-booking/). The Innrow script is only fetched when
 * the mount scrolls near the screen, or when someone taps any "Book now"
 * button — so it never slows down the first load of a page.
 *
 * Any link with data-innrow-open opens the Innrow pop-up. Without
 * JavaScript, those links simply go to /rates-booking/.
 */
export function BookButton({ children = 'Book now', className = 'btn btn--dark', label }: { children?: React.ReactNode; className?: string; label?: string }) {
  return (
    <a href="/rates-booking/" className={className} data-innrow-open={site.innrowId} aria-label={label}>
      {children}
    </a>
  );
}

const waText = encodeURIComponent('Hi, I would like to check dates at Maison Claire.\nDates: \nGuests: ');
export const waLink = site.whatsapp ? `https://wa.me/${site.whatsapp.replace(/\D/g, '')}?text=${waText}` : null;
const mailLink = site.email ? `mailto:${site.email}?subject=${encodeURIComponent('Booking enquiry: Maison Claire')}&body=${encodeURIComponent('Dates: \nNumber of guests: \nName: ')}` : null;

/** Call / WhatsApp / email: shown with every booking area, and as the way to book if the booking window cannot load. */
export function ContactLinks({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? 'bk-alt bk-alt--compact' : 'bk-alt'}>
      {waLink && <a className="btn btn--wa" href={waLink} target="_blank" rel="noopener" data-track="whatsapp">WhatsApp us</a>}
      {site.phone && <a className="btn btn--line" href={`tel:${site.phone}`} data-track="call">Call {site.phoneDisplay}</a>}
      {!compact && mailLink && <a className="textlink" href={mailLink} data-track="email">Email us</a>}
    </div>
  );
}

export function BookingMount({ mode, title }: { mode: 'search' | 'inline'; title?: string }) {
  return (
    <div className={mode === 'inline' ? 'bk-inline' : 'bk-search'} data-innrow-mount={mode} aria-label={title || 'Check availability and book'} role="region">
      <div className="bk-fallback">
        {mode === 'inline'
          ? <p className="bk-fallback__msg"><span className="bk-wait">Loading live dates…</span><span className="bk-fail">The booking window could not load. Message, call or email us with your dates and group size, and we will reply with availability and the price.</span></p>
          : <a href="/rates-booking/" className="btn btn--dark" data-innrow-open={site.innrowId}>Check dates and book</a>}
        {mode === 'search' && <span className="small">Live availability opens in a secure booking window.</span>}
        {mode === 'inline' && <ContactLinks />}
      </div>
    </div>
  );
}

/** Tiny loader. Plain JS, inlined in the page, ~1.4 KB.
 * States: 0 idle, 1 loading, 2 ready, 3 failed (blocked, offline or too slow).
 * If the booking window cannot load, taps simply follow the link to /rates-booking/,
 * where the call / WhatsApp / email options take over. */
export const bookingLoader = `(function(){
var ID=${JSON.stringify(site.innrowId)},SRC='https://app.innrow.com/embed.js',state=0,pending=null,timer;
function mount(){return document.querySelector('[data-innrow-mount]')}
function fail(){if(state===2)return;state=3;clearTimeout(timer);var m=mount();if(m)m.setAttribute('data-innrow-failed','');
  var p=pending;pending=null;if(p&&p.href&&p.getAttribute('href')!==location.pathname)location.href=p.href;else if(m)m.scrollIntoView({block:'center'})}
function load(){
  if(state!==0)return;var m=mount();if(!m)return;state=1;
  var s=document.createElement('script');s.src=SRC;s.async=true;s.setAttribute('data-innrow',ID);s.setAttribute('data-mode',m.getAttribute('data-innrow-mount'));
  s.onload=function(){if(state!==1)return;state=2;clearTimeout(timer);m.setAttribute('data-innrow-loaded','');setTimeout(function(){var p=pending;pending=null;if(p)p.click()},60)};
  s.onerror=fail;timer=setTimeout(fail,6000);m.appendChild(s);
}
document.addEventListener('pointerdown',function(e){if(e.target.closest&&e.target.closest('[data-innrow-open]'))load()},{passive:true,capture:true});
document.addEventListener('click',function(e){
  var a=e.target.closest&&e.target.closest('[data-innrow-open]');
  if(!a||!mount()||state===3)return;
  if(state===2){if(a.tagName==='A')e.preventDefault();return}
  e.preventDefault();e.stopPropagation();pending=a;load();
},true);
addEventListener('pageshow',function(e){if(e.persisted&&state===1){state=0;pending=null;clearTimeout(timer)}});
function watch(){
  var m=mount();
  if(!m||!('IntersectionObserver' in window))return;
  var io=new IntersectionObserver(function(es){if(es.some(function(x){return x.isIntersecting})){io.disconnect();load()}},{rootMargin:'300px 0px'});
  io.observe(m);
}
function later(){(window.requestIdleCallback||setTimeout)(watch,{timeout:2500})}
if(document.readyState==='complete')setTimeout(later,800);else addEventListener('load',function(){setTimeout(later,800)});
})();`;

/**
 * Sticky header behaviour (plain JS, ~0.5 KB):
 * - after 40px of scrolling the header turns solid (on photo pages it starts transparent)
 * - on phones it slides away while you scroll down and comes back when you scroll up;
 *   the booking bar at the bottom of the screen stays put. On desktop it never hides.
 */
export const headerScript = `(function(){
var d=document.documentElement,last=window.scrollY,busy=false;
function upd(){
  var y=window.scrollY;
  d.classList.toggle('hdr-scrolled',y>40);
  var open=document.querySelector('.menu[open]');
  if(window.innerWidth<1000&&!open){
    if(y>last+8&&y>360)d.classList.add('hdr-hidden');
    else if(y<last-8||y<360)d.classList.remove('hdr-hidden');
  }else d.classList.remove('hdr-hidden');
  last=y;busy=false;
}
var mn=document.querySelector('.menu');
if(mn){mn.addEventListener('toggle',function(){var o=mn.open;['main','footer','.bar'].forEach(function(q){var el=document.querySelector(q);if(el){if(o)el.setAttribute('inert','');else el.removeAttribute('inert')}});});
addEventListener('keydown',function(e){if(e.key==='Escape'&&mn.open){mn.open=false;mn.querySelector('summary').focus()}});}
addEventListener('scroll',function(){if(!busy){busy=true;requestAnimationFrame(upd)}},{passive:true});
addEventListener('resize',upd,{passive:true});
upd();
})();`;
