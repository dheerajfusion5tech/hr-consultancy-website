import { Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { Container, Section } from '@/components/layout/Section'
import { CheckCircle2, ArrowRight } from 'lucide-react'

const models = [
  'Fractional Head of People',
  'Project-based delivery',
  'Retained advisory',
  'Embedded recruitment desk',
]

const outcomes = [
  'Clear hiring scorecards and reduced time-to-offer',
  'Manager capability that reduces escalations',
  'Policy and process that auditors respect',
  'Leadership visibility into people metrics',
]

export function EmployerPage() {
  return (
    <div>
      <Section className="border-b border-border bg-muted/20">
        <Container className="py-16 sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">For employers</p>
          <h1 className="mt-3 max-w-2xl font-display text-4xl tracking-tight sm:text-5xl">
            HR support built for company leaders
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Whether you need a fractional head of people or a focused project team, we embed with clarity and accountability.
          </p>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-12 py-16 sm:py-20 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl tracking-tight sm:text-3xl">Engagement models</h2>
            <ul className="mt-8 space-y-4">
              {models.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
            <h3 className="font-semibold text-foreground">Typical outcomes</h3>
            <ul className="mt-5 space-y-3">
              {outcomes.map((o) => (
                <li key={o} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {o}
                </li>
              ))}
            </ul>
            <Button asChild className="mt-8 w-full group" size="lg">
              <Link to="/contact">
                Request a proposal
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Button>
          </div>
        </Container>
      </Section>

      <Section className="border-t border-border bg-muted/20">
        <Container className="grid items-center gap-10 py-16 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-border shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=900&q=80"
              alt="Employer partnership meeting"
              className="aspect-[16/10] w-full object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <h2 className="font-display text-3xl tracking-tight">How we work with leadership</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We start with a short diagnostic, agree success metrics, and report progress in language that boards and founders understand. No jargon, no vanity dashboards.
            </p>
          </div>
        </Container>
      </Section>
    </div>
  )
}
