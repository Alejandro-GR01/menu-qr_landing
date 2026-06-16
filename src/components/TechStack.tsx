import type { TechBadge } from '@/types'

const TECH: TechBadge[] = [
  { name: 'Electron', description: 'App de escritorio multiplataforma' },
  { name: 'React', description: 'Interfaz de usuario moderna' },
  { name: 'Express', description: 'Servidor web embebido' },
  { name: 'SQLite', description: 'Base de datos local' },
  { name: 'TypeScript', description: 'Código tipado y seguro' },
  { name: 'Vite', description: 'Build rápido y moderno' },
  { name: 'Tailwind CSS', description: 'Estilos utilitarios' },
  { name: 'TanStack Query', description: 'Sincronización de datos' },
]

export function TechStack() {
  return (
    <section className="py-24 px-4 bg-bg-surface/50">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">
            Tecnologías que{' '}
            <span className="text-primary">la potencian</span>
          </h2>
          <p className="mt-4 text-text-secondary text-lg">
            Stack moderno, robusto y 100% offline
          </p>
        </div>

        {/* Badge grid */}
        <div className="flex flex-wrap justify-center gap-3">
          {TECH.map((tech) => (
            <div
              key={tech.name}
              className="group relative px-4 py-2.5 rounded-xl border border-border bg-bg-surface hover:border-primary/30 transition-all duration-200"
            >
              <span className="text-text-primary text-sm font-medium">{tech.name}</span>
              {/* Tooltip */}
              <div
                role="tooltip"
                className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 rounded-lg bg-[#2a2a2a] border border-border text-xs text-text-secondary whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
              >
                {tech.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
