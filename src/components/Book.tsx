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

export function BookingMount({ mode, title }: { mode: 'search' | 'inline'; title?: string }) {
  return (
    <div className={mode === 'inline' ? 'bk-inline' : 'bk-search'} data-innrow-mount={mode} aria-label={title || 'Check availability and book'} role="region">
      <div className="bk-fallback">
        <a href="/rates-booking/" className="btn btn--dark" data-innrow-open={site.innrowId}>Check dates and book</a>
        <span className="small">Live availability opens in a secure booking window.</span>
      </div>
    </div>
  );
}

/** Tiny loader. Plain JS, inlined in the page, ~1 KB. */
export const bookingLoader = `(function(){
var ID=${JSON.stringify(site.innrowId)},SRC='https://app.innrow.com/embed.js',state=0,queue=[];
function mount(){return document.querySelector('[data-innrow-mount]')}
function load(cb){
  if(cb)queue.push(cb);
  if(state===2){flush();return}
  if(state===1)return;
  state=1;
  var m=mount(),s=document.createElement('script');
  s.src=SRC;s.async=true;s.setAttribute('data-innrow',ID);
  if(!m){state=0;return}
  s.setAttribute('data-mode',m.getAttribute('data-innrow-mount'));m.appendChild(s);
  s.onload=function(){state=2;m.setAttribute('data-innrow-loaded','');setTimeout(flush,60)};
  s.onerror=function(){state=0;queue=[];};
}
function flush(){var q=queue;queue=[];q.forEach(function(f){f()})}
document.addEventListener('click',function(e){
  var a=e.target.closest&&e.target.closest('[data-innrow-open]');
  if(!a||!mount())return;
  if(state===2){if(a.tagName==='A')e.preventDefault();return}
  e.preventDefault();e.stopPropagation();
  load(function(){a.click()});
},true);
function watch(){
  var m=mount();
  if(!m||!('IntersectionObserver' in window))return;
  var io=new IntersectionObserver(function(es){if(es.some(function(x){return x.isIntersecting})){io.disconnect();load()}},{rootMargin:'300px 0px'});
  io.observe(m);
}
// wait until the page has loaded and React has finished hydrating before touching the DOM
function later(){(window.requestIdleCallback||setTimeout)(watch,{timeout:2500})}
if(document.readyState==='complete')setTimeout(later,800);else addEventListener('load',function(){setTimeout(later,800)});
})();`;
