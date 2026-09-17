import { Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { Container, Section } from '@/components/layout/Section'
import { ArrowRight } from 'lucide-react'

const cases = [
  {
    industry: 'SaaS',
    title: 'Scaled engineering hiring 3× without quality loss',
    metric: '92% 90-day retention',
    summary: 'Introduced structured scorecards and hiring-manager coaching across three product lines. Time-to-offer fell 38% while quality-of-hire scores rose.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80',
  },
  {
    industry: 'Healthcare',
    title: 'Unified compliance framework for multi-site group',
    metric: 'Zero critical findings',
    summary: 'Policy harmonisation and practical process redesign across 14 locations. Audit readiness improved from reactive to continuous.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80',
  },
  {
    industry: 'Professional services',
    title: 'Leadership academy that changed promotion rates',
    metric: '+40% internal promotion',
    summary: '12-month programme with measured behaviour change and succession mapping. High-potential retention improved significantly.',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80',
  },
]

export function CaseStudiesPage() {
  return (
    <div>
      <Section className="border-b border-border bg-muted/20">
        <Container className="py-16 sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Case studies</p>
          <h1 className="mt-3 max-w-2xl font-display text-4xl tracking-tight sm:text-5xl">
            Evidence, not claims
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Selected outcomes from recent client engagements.
          </p>
        </Container>
      </Section>

      <Section>
        <Container className="space-y-12 py-16 sm:py-20">
          {cases.map((c) => (
            <article
              key={c.title}
              className="group overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:shadow-xl"
            >
              <div className="grid lg:grid-cols-5">
                <div className="lg:col-span-2 overflow-hidden">
                  <img
                    src={c.image}
                    alt={c.title}
                    className="aspect-[4/3] h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col justify-center p-8 lg:col-span-3 lg:p-10">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                    {c.industry}
                  </span>
                  <h2 className="mt-2 font-display text-2xl tracking-tight sm:text-3xl">{c.title}</h2>
                  <p className="mt-3 text-lg font-semibold text-foreground">{c.metric}</p>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{c.summary}</p>
                </div>
              </div>
            </article>
          ))}
        </Container>
      </Section>

      <Section className="border-t border-border">
        <Container className="py-16 text-center">
          <h2 className="font-display text-3xl">Have a similar challenge?</h2>
          <Button asChild size="lg" className="mt-8 group">
            <Link to="/contact">
              Talk about your situation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Button>
        </Container>
      </Section>
    </div>
  )
}
