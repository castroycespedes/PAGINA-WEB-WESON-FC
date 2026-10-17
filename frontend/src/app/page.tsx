import Image from 'next/image';
import {
  CalendarCheck,
  CircleAlert,
  ClipboardCheck,
  Eye,
  Footprints,
  MessageCircle,
  Route,
  ScanSearch,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ImageCarousel } from '@/components/landing/image-carousel';
import { LandingHeader } from '@/components/landing/landing-header';
import { SocialEntryLinks } from '@/components/landing/social-entry-links';
import { createWhatsappUrl, instagramUrl } from '@/lib/contact';

const evaluationWhatsappUrl = createWhatsappUrl('Quiero mi evaluación técnica');

const problems = [
  { icon: TrendingUp, title: 'Entrena, pero no despega.' },
  { icon: ShieldCheck, title: 'Le falta confianza con el balón.' },
  { icon: CircleAlert, title: 'Tiene miedo de equivocarse.' },
  { icon: Eye, title: 'En los partidos desaparece.' },
  { icon: Footprints, title: 'No se atreve a encarar.' },
  { icon: ScanSearch, title: 'La escuela tradicional no trabaja detalles técnicos.' },
];

const methodItems = [
  'Entrenamientos especializados con balón',
  'Desarrollo de técnica individual',
  'Mentalidad ganadora y confianza',
  'Ambiente positivo y motivador',
  'Entrenadores capacitados y apasionados',
];

const steps = [
  {
    number: '1',
    title: 'Agenda tu evaluación técnica',
    text: 'Elige el día y horario que mejor te convenga.',
    icon: CalendarCheck,
  },
  {
    number: '2',
    title: 'Evaluamos su nivel',
    text: 'Revisamos técnica, confianza y forma de competir.',
    icon: ClipboardCheck,
  },
  {
    number: '3',
    title: 'Entrenamos para transformar',
    text: 'Mejoramos hábitos, mentalidad y rendimiento en cancha.',
    icon: Route,
  },
];

const testimonials = [
  {
    quote:
      'Desde que mi hijo entrena aquí se le nota más seguro. Ahora disfruta cada partido y se atreve a más.',
    name: 'Paola G.',
    role: 'Mamá de Santiago, 10 años',
  },
  {
    quote:
      'El método es diferente. No solo enseñan a tocar el balón, también a pensar y competir mejor.',
    name: 'Andrés M.',
    role: 'Papá de Mateo, 12 años',
  },
  {
    quote:
      'Mi hijo era muy tímido. Hoy juega con más técnica, más seguridad y más alegría.',
    name: 'Carolina R.',
    role: 'Mamá de Emiliano, 9 años',
  },
];

const galleryImages = [
  '/assets/wexon-carousel-01.jpeg',
  '/assets/wexon-carousel-02.jpeg',
  '/assets/wexon-carousel-03.jpeg',
  '/assets/wexon-carousel-04.jpeg',
  '/assets/wexon-carousel-05.jpeg',
  '/assets/wexon-carousel-06.jpeg',
  '/assets/wexon-carousel-07.jpeg',
  '/assets/wexon-carousel-08.jpeg',
  '/assets/wexon-carousel-09.jpeg',
  '/assets/wexon-carousel-10.jpeg',
];

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <LandingHeader />
      <section className="relative min-h-[760px] overflow-hidden">
        <Image
          src="/assets/wexon-hero.jpeg"
          alt="Entrenamiento WEXON"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/85 to-primary/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-primary/25" />
        <div className="relative mx-auto flex min-h-[760px] max-w-7xl items-center px-5 py-28 sm:px-8 lg:px-10">
          <div className="max-w-2xl">
            <p className="mb-4 text-lg font-black uppercase tracking-[0.28em] text-[#facc15] sm:text-xl">
              WEXON
            </p>
            <h1 className="floating-title text-5xl font-black uppercase leading-[1.04] tracking-wide text-white sm:text-6xl lg:text-7xl">
              Formamos jugadores técnicos, creativos y seguros para competir{' '}
              <span className="text-[#facc15]">sin miedo.</span>
            </h1>
            <p className="mt-6 max-w-lg text-base font-medium leading-7 text-white">
              Desarrollamos técnica, confianza y mentalidad mediante entrenamientos especializados
              con balón para niños de 18 meses a 16 años.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="h-12 rounded-md bg-black px-6 font-black uppercase text-white hover:bg-black/85 focus-visible:ring-white">
                <a href={evaluationWhatsappUrl} target="_blank" rel="noreferrer">
                  <CalendarCheck className="h-4 w-4" />
                  Agenda tu evaluación técnica
                </a>
              </Button>
            </div>
            <p className="mt-3 text-xs font-semibold text-white">
              Evaluación técnica para niños de 18 meses a 16 años.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white px-5 py-14 text-primary sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.32em] text-primary">
            Entendemos lo que vives
          </p>
          <h2 className="mt-3 text-2xl font-black uppercase tracking-wide sm:text-3xl">
            ¿Te identificas con alguno de estos problemas?
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-6">
            {problems.map((problem) => {
              const Icon = problem.icon;

              return (
                <div key={problem.title} className="flex flex-col items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-primary/35 bg-primary/5 shadow-[0_0_22px_hsl(var(--primary)/0.10)]">
                    <Icon className="h-8 w-8 text-primary" strokeWidth={1.8} />
                  </div>
                  <p className="max-w-36 text-sm font-semibold leading-5 text-primary/80">
                    {problem.title}
                  </p>
                </div>
              );
            })}
          </div>
          <p className="mt-10 text-lg font-black">No estás solo. Y tiene solución.</p>
          <p className="mt-1 text-base font-bold text-primary">
            Estamos aquí para ayudarlo a cambiar su juego y su mentalidad.
          </p>
        </div>
      </section>

      <section id="metodo" className="overflow-hidden bg-primary text-white">
        <div className="mx-auto grid max-w-7xl items-stretch lg:min-h-[620px] lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col justify-center px-5 py-16 sm:px-8 lg:px-10">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#facc15] sm:text-base">
              Nuestro método
            </p>
            <h2 className="mt-3 max-w-xl text-4xl font-black uppercase leading-[1.08] tracking-wide text-white sm:text-5xl">
              Más que entrenamientos, formamos jugadores que juegan{' '}
              <span className="text-[#facc15]">sin miedo.</span>
            </h2>
            <p className="mt-5 max-w-lg text-sm font-semibold leading-6 text-white">
              Nuestro enfoque combina técnica, creatividad, inteligencia de juego y mentalidad
              para desarrollar jugadores completos dentro y fuera de la cancha.
            </p>
            <ul className="mt-6 space-y-3">
              {methodItems.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm font-bold text-white">
                  <Sparkles className="h-4 w-4 text-white" />
                  {item}
                </li>
              ))}
            </ul>
            <Button asChild className="mt-8 w-fit rounded-md bg-black font-black uppercase text-white hover:bg-black/85 focus-visible:ring-white">
              <a href={instagramUrl} target="_blank" rel="noreferrer">
                Conoce más sobre nuestro método
              </a>
            </Button>
          </div>
          <div className="relative min-h-[420px] lg:min-h-[620px]">
            <Image
              src="/assets/wexon-method.jpeg"
              alt="Equipo WEXON"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-y-0 left-0 w-2/5 bg-gradient-to-r from-primary via-primary/55 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-primary/35 to-transparent lg:hidden" />
          </div>
        </div>
      </section>

      <section id="funciona" className="border-y border-primary/20 bg-white px-5 py-14 text-black sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-center text-xs font-black uppercase tracking-[0.32em] text-black">
            Así es como funciona
          </p>
          <h2 className="floating-title mt-3 text-center text-3xl font-black uppercase leading-[1.08] tracking-wide text-black">
            Un proceso simple, efectivo y personalizado
          </h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <div key={step.number} className="flex gap-5 border border-primary/25 bg-white p-6">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-primary/10">
                    <Icon className="h-7 w-7 text-primary" strokeWidth={1.9} />
                  </div>
                  <div>
                    <p className="text-5xl font-black leading-none text-primary">{step.number}</p>
                    <h3 className="mt-2 text-base font-black uppercase">{step.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-black/80">{step.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="testimonios" className="bg-primary px-5 py-16 text-white sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-center text-xs font-black uppercase tracking-[0.32em] text-[#facc15]">
            Lo que dicen los padres
          </p>
          <h2 className="mt-3 text-center text-3xl font-black uppercase leading-[1.08] tracking-wide">
            Historias reales, resultados reales
          </h2>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="border border-white/30 bg-white/5 p-6 shadow-sm">
                <p className="text-4xl font-black leading-none text-white">"</p>
                <p className="mt-2 text-sm font-semibold leading-6 text-white">
                  {testimonial.quote}
                </p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-sm font-black text-black">
                    {testimonial.name.slice(0, 1)}
                  </div>
                  <div>
                    <p className="text-sm font-black">{testimonial.name}</p>
                    <p className="text-xs text-white/75">{testimonial.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="galeria" className="bg-white px-5 py-14 text-primary sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-center text-xs font-black uppercase tracking-[0.32em] text-[#facc15]">
            Ver es creer
          </p>
          <h2 className="floating-title mt-3 text-center text-3xl font-black uppercase leading-[1.08] tracking-wide text-primary">
            Ellos ya juegan sin miedo
          </h2>
          <div className="mt-8 h-72 overflow-hidden md:h-64">
            <ImageCarousel images={galleryImages} alt="Galería de entrenamientos WEXON" />
          </div>
        </div>
      </section>

      <section id="contacto" className="relative overflow-hidden border-t border-black/10">
        <Image
          src="/assets/wexon-contact.jpeg"
          alt="Evaluación técnica WEXON"
          fill
          className="scale-110 object-cover object-center blur-[2px]"
        />
        <div className="absolute inset-0 bg-white/70" />
        <div className="relative mx-auto min-h-[460px] max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
          <div className="max-w-2xl">
            <h2 className="floating-title text-4xl font-black uppercase leading-[1.14] tracking-wide text-black sm:text-5xl">
              Tu hijo puede jugar con más técnica,{' '}
              <span className="inline-block pt-1 text-[#facc15]">confianza y valentía.</span>
            </h2>
            <p className="mt-4 max-w-lg text-sm font-semibold leading-6 text-black/80">
              Agenda hoy su evaluación técnica y da el primer paso hacia su mejor versión.
            </p>
            <Button asChild className="mt-7 h-12 rounded-md bg-black px-6 font-black uppercase text-white hover:bg-black/85 focus-visible:ring-white">
              <a href={evaluationWhatsappUrl} target="_blank" rel="noreferrer">
                <CalendarCheck className="h-4 w-4" />
                Agenda tu evaluación técnica
              </a>
            </Button>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/20 bg-primary px-5 py-6 text-xs text-white/80 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/assets/wexon-logo.png"
              alt="WEXON"
              width={80}
              height={80}
              className="h-20 w-20 rounded-md object-cover"
            />
            <p>2026 WEXON Academia de Tecnificación. Todos los derechos reservados.</p>
          </div>
          <div className="flex flex-col items-end gap-3">
            <SocialEntryLinks />
          </div>
        </div>
        <div className="mx-auto mt-5 flex max-w-7xl flex-col items-center gap-1 text-center">
          <p className="text-[11px] font-semibold text-white/85">Hecho por Castro y Céspedes</p>
          <a className="text-[11px] text-white underline underline-offset-2 hover:text-white/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white" href="mailto:castroycespedes@gmail.com">
            castroycespedes@gmail.com
          </a>
        </div>
      </footer>
      <a
        href={evaluationWhatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-5 left-5 right-auto z-40 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:bg-[#1DA851] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 sm:left-auto sm:right-5"
      >
        <MessageCircle className="h-8 w-8" />
      </a>
    </main>
  );
}
