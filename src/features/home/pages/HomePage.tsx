import { Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { Container, Section } from '@/components/layout/Section'
import { ArrowRight, Users, Shield, GraduationCap, Briefcase, Quote } from 'lucide-react'

const pillars = [
  {
    icon: Users,
    title: 'Talent precision',
    desc: 'Role-fit recruitment with structured scorecards, culture alignment and measurable quality of hire.',
  },
  {
    icon: GraduationCap,
    title: 'Capability building',
    desc: 'Training programmes designed for behaviour change, not just attendance certificates.',
  },
  {
    icon: Shield,
    title: 'Compliance calm',
    desc: 'Policy, process and risk handled so leadership can focus on growth without audit anxiety.',
  },
  {
    icon: Briefcase,
    title: 'Employer partnership',
    desc: 'Embedded support that scales with headcount, complexity and strategic priorities.',
  },
]

const stats = [
  { value: '120+', label: 'Roles placed annually' },
  { value: '94%', label: 'Client retention' },
  { value: '40%', label: 'Avg. time-to-hire reduction' },
  { value: '3×', label: 'Internal promotion lift' },
]

export function HomePage() {
  return (
    <div>
      <Section className="relative overflow-hidden border-b border-border">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,var(--primary),transparent)] opacity-[0.08]" />
        <Container className="relative py-20 sm:py-28 lg:py-32">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                HR Consultancy
              </p>
              <h1 className="mt-5 font-display text-4xl leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Precision people strategy for growing organisations
              </h1>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
                Recruitment, training and compliance delivered with calm authority and measurable outcomes. We partner with leadership teams who refuse generic solutions.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button asChild size="lg" className="group">
                  <Link to="/contact">
                    Start a conversation
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/services">Explore services</Link>
                </Button>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="aspect-[4/5] overflow-hidden rounded-2xl border border-border shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=900&q=80"
                  alt="Leadership team in discussion"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="eager"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 rounded-xl border border-border bg-card p-4 shadow-lg">
                <p className="text-2xl font-semibold text-foreground">94%</p>
                <p className="text-xs text-muted-foreground">Client retention rate</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="border-b border-border bg-muted/30">
        <Container className="grid grid-cols-2 gap-8 py-12 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-3xl tracking-tight text-foreground sm:text-4xl">{s.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </Container>
      </Section>

      <Section>
        <Container className="py-20 sm:py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Why us</p>
            <h2 className="mt-3 font-display text-3xl tracking-tight sm:text-4xl">
              Structured expertise, not templates
            </h2>
            <p className="mt-4 text-muted-foreground">
              Every engagement is designed around your operating model, culture and growth stage.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((item) => (
              <div
                key={item.title}
                className="group rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="border-y border-border bg-muted/20">
        <Container className="py-16 sm:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <Quote className="mx-auto h-8 w-8 text-primary/40" />
            <blockquote className="mt-6 font-display text-2xl leading-relaxed tracking-tight text-foreground sm:text-3xl">
              “They brought structure without bureaucracy. Our time-to-offer dropped and the quality of candidates improved immediately.”
            </blockquote>
            <p className="mt-6 text-sm font-medium text-muted-foreground">
              — Head of People, Series B SaaS
            </p>
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="py-20 text-center sm:py-24">
          <h2 className="font-display text-3xl tracking-tight sm:text-4xl">
            Ready for clearer HR outcomes?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            Tell us about your current challenges. We respond within one business day with a clear next step.
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link to="/contact">Book an exploratory call</Link>
          </Button>
        </Container>
      </Section>
    </div>
  )
}
