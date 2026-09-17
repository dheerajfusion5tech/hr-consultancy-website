import { Outlet, createRootRoute, HeadContent, Scripts } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import appCss from '../styles.css?url'
import { Button } from '@/components/ui/button'
import { Link } from '@tanstack/react-router'
import { Moon, Sun, Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Precision Trust — HR Consultancy' },
      { name: 'description', content: 'Premium HR solutions for recruitment, training and compliance.' },
    ],
    links: [{ rel: 'stylesheet', href: appCss }],
  }),
  component: RootComponent,
})

function RootComponent() {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <RootLayout>
          <Outlet />
        </RootLayout>
        <Scripts />
      </body>
    </html>
  )
}

function RootLayout({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('theme') as 'light' | 'dark' | null
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const initial = stored || (prefersDark ? 'dark' : 'light')
    setTheme(initial)
    document.documentElement.classList.toggle('dark', initial === 'dark')
  }, [])

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light'
    setTheme(next)
    localStorage.setItem('theme', next)
    document.documentElement.classList.toggle('dark', next === 'dark')
  }

  const nav = [
    { to: '/', label: 'Home' },
    { to: '/services', label: 'Services' },
    { to: '/case-studies', label: 'Case Studies' },
    { to: '/employer', label: 'Employer' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <Link to="/" className="font-display text-xl tracking-tight text-foreground">
            Precision <span className="text-primary">Trust</span>
          </Link>
          <nav className="hidden items-center gap-1 md:flex">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground [&.active]:text-primary"
                activeOptions={{ exact: item.to === '/' }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle theme">
              {theme === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            </Button>
            <Button asChild className="hidden sm:inline-flex" size="sm">
              <Link to="/contact">Get in touch</Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
        {mobileOpen && (
          <div className="border-t border-border md:hidden">
            <nav className="flex flex-col gap-1 p-4">
              {nav.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="rounded-md px-3 py-2.5 text-base font-medium text-muted-foreground hover:bg-accent hover:text-foreground"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button asChild className="mt-2" onClick={() => setMobileOpen(false)}>
                <Link to="/contact">Get in touch</Link>
              </Button>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-border bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="font-display text-lg">Precision Trust</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Structured HR expertise for modern organisations.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold">Navigate</p>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {nav.map((item) => (
                  <li key={item.to}>
                    <Link to={item.to} className="hover:text-foreground">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold">Contact</p>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>hello@precisiontrust.example</li>
                <li>+1 (555) 010-2040</li>
                <li>Remote-first · Global</li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold">Project</p>
              <div className="mt-3">
                <Button asChild variant="outline" size="sm">
                  <Link to="/project-notes">Project notes</Link>
                </Button>
              </div>
            </div>
          </div>
          <p className="mt-10 text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} Precision Trust HR Consultancy. Demo frontend.
          </p>
        </div>
      </footer>
    </div>
  )
}
