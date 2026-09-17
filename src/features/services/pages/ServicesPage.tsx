import { Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { Container, Section } from '@/components/layout/Section'
import { ArrowRight } from 'lucide-react'

const services = [
  {
    title: 'Recruitment',
    desc: 'End-to-end search, structured interviews and offer management for critical and volume roles. Scorecards, culture fit and quality-of-hire tracking included.',
    tags: ['Executive search', 'Volume hiring', 'Scorecards'],
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Training & Development',
    desc: 'Leadership programmes, skills academies and manager enablement designed for measurable behaviour change, not just attendance.',
    tags: ['Leadership', 'Manager enablement', 'Technical'],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Compliance & Policy',
    desc: 'Handbook refresh, policy design, risk audits and practical process that auditors respect and teams actually follow.',
    tags: ['Policy', 'Risk', 'Process'],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Workforce Strategy',
    desc: 'Org design, succession planning and capability mapping aligned to your growth plan and operating model.',
    tags: ['Org design', 'Succession', 'Capability'],
    image: 'https://images.unsplash.com/photo-1542744173-8e2bd1f9e2d0?auto=format&fit=crop&w=800&q=80',
  },
]

export function ServicesPage() {
  return (
    <div>
      <Section className="border-b border-border bg-muted/20">
        <Container className="py-16 sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Services</p>
          <h1 className="mt-3 max-w-2xl font-display text-4xl tracking-tight sm:text-5xl">
            HR solutions that scale with you
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Modular offerings you can engage individually or as a continuous partnership.
          </p>
        </Container>
      </Section>

      <Section>
        <Container className="space-y-16 py-16 sm:py-20">
          {services.map((s, i) => (
            <article
              key={s.title}
              className={`grid items-center gap-10 lg:grid-cols-2 ${i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}
            >
              <div className="overflow-hidden rounded-2xl border border-border shadow-lg">
                <img
                  src={s.image}
                  alt={s.title}
                  className="aspect-[16/10] w-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div>
                <h2 className="font-display text-3xl tracking-tight">{s.title}</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">{s.desc}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </Container>
      </Section>

      <Section className="border-t border-border bg-primary/5">
        <Container className="py-16 text-center">
          <h2 className="font-display text-3xl">Not sure which service fits?</h2>
          <p className="mx-auto mt-3 max-w-md text-muted-foreground">
            We will map the right combination to your current priorities.
          </p>
          <Button asChild size="lg" className="mt-8 group">
            <Link to="/contact">
              Discuss your requirements
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Button>
        </Container>
      </Section>
    </div>
  )
}
