/** Small line icons (24px grid, 1.5 stroke, currentColor). Decorative: always aria-hidden. */
const P: Record<string, React.ReactNode> = {
  waterfall: (<><path d="M4 4h16" /><path d="M7 4v9c0 2-1 3-1 5" /><path d="M12 4v11" /><path d="M17 4v9c0 2 1 3 1 5" /><path d="M3 20c2-1.2 4-1.2 6 0s4 1.2 6 0 4-1.2 6 0" /></>),
  peak: (<><path d="M2 20 9 7l4 6 2-3 7 10z" /><path d="m7.5 10 1.5 1.5L11 10" /></>),
  view: (<><circle cx="7" cy="14" r="3.5" /><circle cx="17" cy="14" r="3.5" /><path d="M10.5 14h3" /><path d="M5 10.5 7 5h3l1 4M19 10.5 17 5h-3l-1 4" /></>),
  cave: (<><path d="M3 20c0-8 4-14 9-14s9 6 9 14" /><path d="M9 20c0-4 1.3-7 3-7s3 3 3 7" /><path d="M8 9l1.5 1M15 9l-1.5 1M12 8.5V10" /></>),
  lake: (<><path d="M3 9l4-4 3 3 3-4 4 5 4-2" /><path d="M3 14c2-1.2 4-1.2 6 0s4 1.2 6 0 4-1.2 6 0" /><path d="M3 18c2-1.2 4-1.2 6 0s4 1.2 6 0 4-1.2 6 0" /></>),
  bridge: (<><path d="M2 10h20" /><path d="M2 14h20" /><path d="M5 10v4M10 10v4M14 10v4M19 10v4" /><path d="M3 20c3-4 6-6 9-6s6 2 9 6" /></>),
  jeep: (<><path d="M3 15V10l2-4h9l2 4h4v5" /><path d="M3 15h18" /><circle cx="7" cy="17" r="2" /><circle cx="17" cy="17" r="2" /><path d="M6 10h9" /></>),
  walk: (<><circle cx="13" cy="4.5" r="1.8" /><path d="m10 21 2-6 3 3v3" /><path d="m12 15-1-5 4 2 2 3" /><path d="m11 10-3 2v3" /></>),
  boot: (<><path d="M7 3h6v8l6 3c1 .5 2 1.5 2 3v2H4V3h3" /><path d="M4 16h17" /><path d="M10 7h3M10 10h3" /></>),
  car: (<><path d="M3 16v-4l2-5h14l2 5v4" /><path d="M3 16h18" /><circle cx="7" cy="16.5" r="1.8" /><circle cx="17" cy="16.5" r="1.8" /></>),
  clock: (<><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>),
  sun: (<><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></>),
  child: (<><circle cx="12" cy="5" r="2" /><path d="M12 8v7M8 10l4 2 4-2M10 21l2-6 2 6" /></>),
  pool: (<><path d="M3 17c2-1.2 4-1.2 6 0s4 1.2 6 0 4-1.2 6 0" /><path d="M3 21c2-1.2 4-1.2 6 0s4 1.2 6 0 4-1.2 6 0" /><path d="M8 14V5a2 2 0 0 1 4 0M16 14V5a2 2 0 0 1 4 0M8 9h8" /></>),
  home: (<><path d="M3 11 12 4l9 7" /><path d="M5 10v10h14V10" /><path d="M10 20v-5h4v5" /></>),
  wa: (<><path d="M4 20l1.3-3.8A8 8 0 1 1 8 19z" /><path d="M9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.7-2-1-1 .9c-1.2-.5-2.2-1.5-2.7-2.7l.9-1-1-2z" /></>),
  phone: (<><path d="M6 3h3l1.5 4-2 1.5a11 11 0 0 0 7 7l1.5-2 4 1.5v3a2 2 0 0 1-2 2A16 16 0 0 1 4 5a2 2 0 0 1 2-2z" /></>),
  pin: (<><path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z" /><circle cx="12" cy="10" r="2.5" /></>),
};

export type IconName = keyof typeof P;

export function Icon({ name, size = 24, className }: { name: IconName | string; size?: number; className?: string }) {
  return (
    <svg className={className ? `ico ${className}` : 'ico'} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      {P[name]}
    </svg>
  );
}
