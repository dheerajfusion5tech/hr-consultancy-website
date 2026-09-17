import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Container, Section } from '@/components/layout/Section'
import { cn } from '@/lib/utils'

export function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus('error')
      return
    }
    setStatus('submitting')
    setTimeout(() => {
      setStatus('success')
      setForm({ name: '', company: '', email: '', phone: '', service: '', message: '' })
    }, 900)
  }

  const inputClass =
    'mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring'

  return (
    <div>
      <Section className="border-b border-border bg-muted/20">
        <Container className="py-16 sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Contact</p>
          <h1 className="mt-3 max-w-2xl font-display text-4xl tracking-tight sm:text-5xl">
            Let’s discuss your needs
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Share a few details and we will respond within one business day.
          </p>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-12 py-16 sm:py-20 lg:grid-cols-5">
          <div className="lg:col-span-3">
            {status === 'success' ? (
              <div className="rounded-2xl border border-success/30 bg-success/10 p-10 text-center">
                <p className="text-xl font-semibold text-foreground">Thank you</p>
                <p className="mt-2 text-muted-foreground">
                  Your inquiry has been recorded locally. In a production deployment this would reach our team.
                </p>
                <Button className="mt-6" onClick={() => setStatus('idle')}>
                  Send another message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium">
                      Name *
                    </label>
                    <input
                      id="name"
                      className={inputClass}
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      required
                      autoComplete="name"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="text-sm font-medium">
                      Company
                    </label>
                    <input
                      id="company"
                      className={inputClass}
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      autoComplete="organization"
                    />
                  </div>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="email" className="text-sm font-medium">
                      Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      className={inputClass}
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      required
                      autoComplete="email"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="text-sm font-medium">
                      Phone
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      className={inputClass}
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      autoComplete="tel"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="service" className="text-sm font-medium">
                    Service / requirement
                  </label>
                  <select
                    id="service"
                    className={inputClass}
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                  >
                    <option value="">Select…</option>
                    <option>Recruitment</option>
                    <option>Training</option>
                    <option>Compliance</option>
                    <option>Workforce strategy</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="text-sm font-medium">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className={cn(inputClass, 'resize-y')}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                  />
                </div>
                {status === 'error' && (
                  <p className="text-sm text-destructive" role="alert">
                    Please complete the required fields (name, email, message).
                  </p>
                )}
                <Button type="submit" size="lg" disabled={status === 'submitting'}>
                  {status === 'submitting' ? 'Sending…' : 'Send inquiry'}
                </Button>
              </form>
            )}
          </div>

          <div className="lg:col-span-2">
            <div className="sticky top-24 rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h3 className="font-semibold text-foreground">Consultancy details</h3>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li>hello@precisiontrust.example</li>
                <li>+1 (555) 010-2040</li>
                <li>Remote-first · Available across time zones</li>
              </ul>
              <div className="mt-6 aspect-video overflow-hidden rounded-lg border border-border bg-muted">
                <iframe
                  title="Location map"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=-0.15%2C51.50%2C-0.10%2C51.52&layer=mapnik"
                  className="h-full w-full border-0"
                  loading="lazy"
                />
              </div>
              <p className="mt-2 text-xs text-muted-foreground">Map is illustrative (OpenStreetMap).</p>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  )
}
