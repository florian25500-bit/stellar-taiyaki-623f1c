import { createFileRoute } from '@tanstack/react-router'
import GermanTestApp from '../components/GermanTestApp'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div className="w-full min-h-screen">
      <GermanTestApp />
    </div>
  )
}
