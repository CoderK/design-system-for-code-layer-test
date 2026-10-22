import { lazy, Suspense, useEffect, useState } from 'react'

import { Toaster } from '@/components/ui/sonner'
import { TooltipProvider } from '@/components/ui/tooltip'

type ExampleModule = { default: React.ComponentType }

const modules = import.meta.glob<ExampleModule>('./catalog/examples/*-example.tsx')

const examples = Object.entries(modules)
  .map(([path, load]) => {
    const name = path.replace('./catalog/examples/', '').replace('-example.tsx', '')
    return { name, title: toTitle(name), Component: lazy(load) }
  })
  .sort((a, b) => a.name.localeCompare(b.name))

function toTitle(name: string) {
  return name
    .split('-')
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(' ')
}

function currentName() {
  const name = window.location.hash.slice(1)
  return examples.some((example) => example.name === name) ? name : examples[0].name
}

function App() {
  const [name, setName] = useState(currentName)

  useEffect(() => {
    const onHashChange = () => setName(currentName())
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const selected = examples.find((example) => example.name === name) ?? examples[0]

  return (
    <TooltipProvider>
      <div className="flex min-h-screen">
        <nav className="sticky top-0 flex h-screen w-56 shrink-0 flex-col gap-1 overflow-y-auto border-r p-4">
          <div className="px-2 pb-3">
            <h1 className="text-sm font-semibold">Code Layer Test DS</h1>
            <p className="text-muted-foreground text-xs">
              {examples.length} shadcn/ui components
            </p>
          </div>
          {examples.map((example) => (
            <a
              key={example.name}
              href={`#${example.name}`}
              aria-current={example.name === selected.name ? 'page' : undefined}
              className="text-muted-foreground hover:bg-muted hover:text-foreground aria-[current=page]:bg-muted aria-[current=page]:text-foreground rounded-md px-2 py-1 text-sm"
            >
              {example.title}
            </a>
          ))}
        </nav>
        <main className="min-w-0 flex-1">
          <Suspense fallback={<p className="text-muted-foreground p-8 text-sm">Loading…</p>}>
            <selected.Component key={selected.name} />
          </Suspense>
        </main>
      </div>
      <Toaster />
    </TooltipProvider>
  )
}

export default App
