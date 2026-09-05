import { useMemo, useState } from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { LaptopFrame } from '@/components/DeviceMockup';
import { MobileFrame } from '@/components/DeviceMockup';
import { AREAS } from '@/data/views';
import type { ViewEntry } from '@/types';

interface ViewsShowcaseProps {
  views: ViewEntry[];
}

export function ViewsShowcase({ views }: ViewsShowcaseProps) {
  const [activeAreaId, setActiveAreaId] = useState(AREAS[0]?.id ?? 'setup');
  const [activeViewId, setActiveViewId] = useState(views[0]?.id ?? '');

  const activeArea = useMemo(
    () => AREAS.find((a) => a.id === activeAreaId) ?? AREAS[0],
    [activeAreaId],
  );

  const areaViews = useMemo(() => {
    if (!activeArea) return [];
    return views.filter((v) => v.area === activeArea.id);
  }, [views, activeArea]);

  const activeView = useMemo(
    () =>
      areaViews.find((v) => v.id === activeViewId) ?? areaViews[0],
    [areaViews, activeViewId],
  );

  function selectArea(areaId: string) {
    setActiveAreaId(areaId);
    const first = views.find((v) => v.area === areaId);
    if (first) setActiveViewId(first.id);
  }

  return (
    <div className="w-full">
      {/* ═══ Capa 1 — Tarjetas de Áreas funcionales ═══ */}
      <div className="grid sm:grid-cols-2 gap-4 mb-8">
        {AREAS.map((area) => {
          const viewCount = views.filter((v) => v.area === area.id).length;
          const isActive = area.id === activeArea?.id;
          const Icon = area.icon;
          return (
            <button
              key={area.id}
              onClick={() => selectArea(area.id)}
              aria-pressed={isActive}
              className={`group text-left p-5 rounded-2xl border transition-all duration-200 cursor-pointer ${
                isActive
                  ? 'border-primary/50 bg-bg-surface'
                  : 'border-border bg-bg-surface hover:border-primary/30'
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div
                  className={`p-2.5 rounded-xl transition-colors ${
                    isActive ? 'bg-primary/15 text-primary-text' : 'bg-primary/10 text-primary-text'
                  }`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary-text border border-primary/20">
                  {viewCount} {viewCount === 1 ? 'vista' : 'vistas'}
                </span>
              </div>

              <h3 className="mt-4 text-lg font-semibold text-text-primary">
                {area.title}
              </h3>
              <p className="mt-1 text-sm text-text-secondary leading-relaxed">
                {area.description}
              </p>

              <span
                className={`mt-4 inline-flex items-center gap-1 text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-primary-text'
                    : 'text-text-secondary group-hover:text-primary-text'
                }`}
              >
                Ver
                <ArrowRight
                  className={`w-4 h-4 transition-transform ${
                    isActive ? '' : 'group-hover:translate-x-1'
                  }`}
                />
              </span>
            </button>
          );
        })}
      </div>

      {/* ═══ Tabs horizontales de la vista activa por área ═══ */}
      {areaViews.length > 0 && (
        <div className="relative mb-8 -mx-4 px-4 overflow-x-auto scrollbar-none">
          <div className="flex gap-2 min-w-max pb-2">
            {areaViews.map((view) => {
              const isActive = view.id === activeView?.id;
              return (
                <button
                  key={view.id}
                  onClick={() => setActiveViewId(view.id)}
                  aria-pressed={isActive}
                  className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-primary/15 text-primary-text border border-primary/30'
                      : 'bg-bg-surface border border-border text-text-secondary hover:text-text-primary hover:border-primary/20'
                  }`}
                >
                  {view.title}
                </button>
              );
            })}
          </div>
          {/* Right fade — visual affordance signaling more content to scroll */}
          <div className="pointer-events-none absolute right-0 top-0 bottom-2 w-10 bg-gradient-to-l from-bg-primary to-transparent" />
        </div>
      )}

      {/* ═══ Mockups + Ficha de conocimiento ═══ */}
      {activeView && (
        <div className="animate-fade-in" key={`${activeArea?.id}-${activeView.id}`}>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 items-center">
            <div className="md:col-span-2">
              <LaptopFrame
                src={activeView.desktopSrc}
                alt={`${activeView.title} — vista desktop`}
              />
            </div>
            <div className="md:col-span-1 max-w-[180px] md:max-w-[220px] mx-auto">
              <MobileFrame
                src={activeView.mobileSrc}
                alt={`${activeView.title} — vista mobile`}
              />
            </div>
          </div>

          {/* ═══ Capa 2 — Ficha de conocimiento ═══ */}
          <div className="mt-8 rounded-2xl bg-bg-surface border border-border p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <h3 className="text-xl font-semibold text-text-primary">
                {activeView.title}
              </h3>
              <div className="flex flex-wrap justify-center gap-2">
                {activeView.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary-text border border-primary/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* 1 — Qué es */}
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
              {activeView.description}
            </p>

            {/* Grid de bloques */}
            <div className="mt-6 grid gap-6 lg:grid-cols-3">
              {/* 2 — Qué te permite hacer */}
              <div>
                <h4 className="text-sm font-semibold text-primary-text mb-3">
                  Qué te permite hacer
                </h4>
                <ul className="space-y-2.5">
                  {activeView.capabilities?.map((cap, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-text-secondary leading-snug"
                    >
                      <CheckCircle2 className="w-4 h-4 text-primary-text shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 3 — Cómo se usa */}
              <div>
                <h4 className="text-sm font-semibold text-primary-text mb-3">
                  Cómo se usa
                </h4>
                <ol className="space-y-2.5">
                  {activeView.steps?.map((step, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-text-secondary leading-snug"
                    >
                      <span className="w-5 h-5 shrink-0 rounded-full bg-primary/15 text-primary-text text-xs font-semibold flex items-center justify-center mt-0.5">
                        {i + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* 4 — Cuándo te sirve */}
              {activeView.useCase && (
                <div>
                  <h4 className="text-sm font-semibold text-primary-text mb-3">
                    Cuándo te sirve
                  </h4>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {activeView.useCase}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
