'use client';

import Image from 'next/image';
import { Instagram, Menu } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { createWhatsappUrl, instagramUrl } from '@/lib/contact';

const navItems = [
  { href: '#metodo', label: 'Método' },
  { href: '#funciona', label: 'Cómo funciona' },
  { href: '#testimonios', label: 'Testimonios' },
  { href: '#galeria', label: 'Galería' },
];

export function LandingHeader() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#metodo');
  const evaluationUrl = createWhatsappUrl('Quiero mi evaluación técnica');

  useEffect(() => {
    const sections = navItems
      .map(({ href }) => document.getElementById(href.slice(1)))
      .filter((section): section is HTMLElement => section !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) setActiveSection(`#${visible.target.id}`);
      },
      { rootMargin: '-24% 0px -58% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-white/75 text-black backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <Brand />
        <nav className="hidden items-center gap-8 text-[11px] font-black uppercase text-black/80 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-sm transition hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              {item.label}
            </Link>
          ))}
          <a
            className="flex h-8 w-8 items-center justify-center rounded-md bg-[radial-gradient(circle_at_30%_110%,#fdf497_0%,#fdf497_12%,#fd5949_38%,#d6249f_62%,#285AEB_100%)] text-white transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            href={instagramUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <Instagram className="h-4 w-4" />
          </a>
        </nav>
        <div className="hidden lg:block">
          <Button asChild className="rounded-md bg-primary font-black uppercase text-white hover:bg-white hover:text-black focus-visible:ring-white">
            <a href={evaluationUrl} target="_blank" rel="noreferrer">Agenda tu evaluación técnica</a>
          </Button>
        </div>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="h-10 w-10 border-black/20 bg-white/50 text-black hover:bg-white focus-visible:ring-2 focus-visible:ring-primary lg:hidden"
              aria-label="Abrir menú"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent className="w-[min(20rem,100vw)] border-white/20 bg-primary text-white">
            <div className="flex h-full flex-col px-5 py-6">
              <Brand onClick={() => setOpen(false)} light />
              <nav className="mt-10 flex flex-col gap-2 text-sm font-black uppercase">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => {
                      setActiveSection(item.href);
                      setOpen(false);
                    }}
                    aria-current={activeSection === item.href ? 'location' : undefined}
                    className={`rounded-md px-3 py-3 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white ${
                      activeSection === item.href
                        ? 'bg-white text-black'
                        : 'text-white hover:bg-white/90 hover:text-black'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setOpen(false)}
                  className="flex min-h-11 w-fit max-w-full self-start items-center gap-2 rounded-md px-3 py-2 text-white transition hover:bg-black/20 hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <Instagram className="h-4 w-4" />
                  Instagram
                </a>
              </nav>
              <Button asChild className="mt-auto rounded-md bg-black font-black uppercase text-white hover:bg-black/85 focus-visible:ring-white">
                <a href={evaluationUrl} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>
                  Agenda tu evaluación técnica
                </a>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

function Brand({ onClick, light = false }: { onClick?: () => void; light?: boolean }) {
  return (
    <Link
      href="/"
      onClick={onClick}
      className={`flex items-center gap-3 ${light ? 'text-white' : 'text-black'} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary`}
    >
      <Image
        src="/assets/wexon-logo.png"
        alt="WEXON"
        width={72}
        height={72}
        className="h-[72px] w-[72px] rounded-md object-cover"
      />
      <div>
        <p className="text-xl font-black uppercase leading-none">WEXON</p>
        <p className={`text-[10px] font-bold uppercase tracking-[0.22em] ${light ? 'text-white/70' : 'text-black/70'}`}>
          Academia de tecnificación
        </p>
      </div>
    </Link>
  );
}
