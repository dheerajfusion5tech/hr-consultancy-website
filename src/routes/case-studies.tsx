import { createFileRoute } from '@tanstack/react-router'
import { CaseStudiesPage } from '@/features/case-studies/pages/CaseStudiesPage'

export const Route = createFileRoute('/case-studies')({
  component: CaseStudiesPage,
})
