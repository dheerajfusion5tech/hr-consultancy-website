import { createFileRoute } from '@tanstack/react-router'
import { EmployerPage } from '@/features/employer/pages/EmployerPage'

export const Route = createFileRoute('/employer')({
  component: EmployerPage,
})
