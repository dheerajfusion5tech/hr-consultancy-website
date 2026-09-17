import { Container, Section } from '@/components/layout/Section'

export function ProjectNotesPage() {
  return (
    <Section>
      <Container className="max-w-3xl py-16 sm:py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Documentation</p>
        <h1 className="mt-3 font-display text-4xl tracking-tight">Project notes</h1>
        <div className="mt-12 space-y-10 text-sm leading-relaxed text-muted-foreground">
          <section>
            <h2 className="font-display text-xl text-foreground">Project overview</h2>
            <p className="mt-3">
              HR Consultancy Website (project name: <code className="rounded bg-muted px-1.5 py-0.5 text-xs">hr-consultancy-website</code>).
              Frontend-only marketing site for an HR consultancy covering recruitment, training and compliance.
              Built with TanStack Start, TanStack Router, React, TypeScript, Tailwind CSS v4 and shadcn-style primitives.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl text-foreground">Design concept</h2>
            <p className="mt-3">
              <strong className="text-foreground">Precision Trust Lattice</strong> — a refined architectural visual language
              using soft geometric planes, precise spacing and a restrained primary accent. Communicates structured expertise
              and calm authority without generic SaaS or blue-corporate aesthetics.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl text-foreground">Design decisions</h2>
            <ul className="mt-3 list-disc space-y-1.5 pl-5">
              <li>Typography: Inter (body) + Instrument Serif (display headings)</li>
              <li>Colour: semantic CSS variables only; primary is a deep refined teal-indigo</li>
              <li>Light / dark themes via class on <code className="rounded bg-muted px-1 text-xs">html</code></li>
              <li>No hard-coded colours in TSX; Tailwind v4 token syntax</li>
              <li>Feature-based folder structure; thin route files</li>
              <li>Animations: restrained entrance and hover micro-interactions; no cursor gimmicks</li>
            </ul>
          </section>
          <section>
            <h2 className="font-display text-xl text-foreground">Pages</h2>
            <p className="mt-3">Home, Services, Case Studies, Employer, Contact, Project Notes (/project-notes).</p>
          </section>
          <section>
            <h2 className="font-display text-xl text-foreground">Technical architecture</h2>
            <p className="mt-3">
              TanStack Start + Vite, Netlify adapter (<code className="rounded bg-muted px-1 text-xs">@netlify/vite-plugin-tanstack-start</code>),
              Bun-friendly scripts. Mock data only; contact form is local state with success/error presentation.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl text-foreground">Development commands</h2>
            <pre className="mt-3 overflow-x-auto rounded-lg border border-border bg-muted p-4 text-xs text-foreground">
{`bun install
bun run dev
bun run build
bun run preview
bun run typecheck`}
            </pre>
          </section>
          <section>
            <h2 className="font-display text-xl text-foreground">Known limitations</h2>
            <p className="mt-3">
              No backend; form does not persist. Images use direct Unsplash URLs. Route tree is maintained for the six required routes.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl text-foreground">Future backend notes</h2>
            <p className="mt-3">
              Contact form can be wired to a server function or external form service.
              Case studies and services can move to a CMS or database with TanStack Query.
            </p>
          </section>
        </div>
      </Container>
    </Section>
  )
}
