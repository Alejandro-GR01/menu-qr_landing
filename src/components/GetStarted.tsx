import { GET_STARTED_STEPS } from '@/data/views';

export function GetStarted() {
  return (
    <section className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary">
            Arrancas en <span className="text-primary">5 pasos</span>
          </h2>
          <p className="mt-3 text-base text-text-secondary max-w-2xl mx-auto">
            De la PC apagada a tu menú viviendo en los celulares de tus clientes
            — en menos tiempo del que piensas.
          </p>
        </div>

        {/* Lista numerada — horizontal en desktop, vertical en mobile */}
        <ol className="grid gap-4 md:grid-cols-5 relative">
          {GET_STARTED_STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <li
                key={i}
                className="relative bg-bg-surface border border-border rounded-2xl p-5 animate-fade-in-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-7 h-7 shrink-0 rounded-full bg-primary-solid text-white text-sm font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                  <div className="p-2 rounded-lg bg-primary/10 text-primary-text">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-base font-semibold text-text-primary">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-sm text-text-secondary leading-relaxed">
                  {step.description}
                </p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
