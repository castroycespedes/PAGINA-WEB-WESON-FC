import { Instagram } from 'lucide-react';
import { instagramUrl } from '@/lib/contact';

const socialLinks = [
  {
    href: instagramUrl,
    label: 'Instagram',
    value: '@atwexon',
    icon: Instagram,
  },
];

export function SocialEntryLinks() {
  return (
    <div className="flex w-full justify-end sm:w-fit">
      {socialLinks.map((item) => {
        const Icon = item.icon;

        return (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className="group flex w-fit max-w-full items-center gap-1.5 rounded-md border border-[#d6249f] bg-[radial-gradient(circle_at_30%_110%,#fdf497_0%,#fdf497_12%,#fd5949_38%,#d6249f_62%,#285AEB_100%)] px-2 py-1.5 text-white transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary sm:gap-2 sm:px-3 sm:py-2"
            aria-label={item.label}
          >
            <Icon className="h-4 w-4 shrink-0 transition group-hover:scale-105 sm:h-5 sm:w-5" />
            <span className="min-w-0">
              <span className="block text-[8px] font-black uppercase tracking-[0.15em] text-white/90 sm:text-[9px] sm:tracking-[0.18em]">
                {item.label}
              </span>
              <span className="block truncate text-[11px] font-black sm:text-xs">{item.value}</span>
            </span>
          </a>
        );
      })}
    </div>
  );
}
