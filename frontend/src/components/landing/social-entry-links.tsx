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
    <div className="grid w-fit max-w-full gap-3">
      {socialLinks.map((item) => {
        const Icon = item.icon;

        return (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className="group flex max-w-full items-center gap-2 rounded-md border border-[#d6249f] bg-[radial-gradient(circle_at_30%_110%,#fdf497_0%,#fdf497_12%,#fd5949_38%,#d6249f_62%,#285AEB_100%)] px-3 py-2 text-white transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
            aria-label={item.label}
          >
            <Icon className="h-5 w-5 shrink-0 transition group-hover:scale-105" />
            <span className="min-w-0">
              <span className="block text-[9px] font-black uppercase tracking-[0.18em] text-white/90">
                {item.label}
              </span>
              <span className="block truncate text-xs font-black">{item.value}</span>
            </span>
          </a>
        );
      })}
    </div>
  );
}
