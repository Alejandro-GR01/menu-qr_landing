import { useEffect, useMemo, useState } from 'react';
import { CheckCircle2, ChevronLeft, ChevronRight, Monitor } from 'lucide-react';
import { LaptopFrame, MobileFrame } from '@/components/DeviceMockup';
import { ContactButton } from '@/components/ContactButton';
import { AREAS } from '@/data/views';
import type { ViewEntry } from '@/types';

interface ViewsShowcaseProps {
  views: ViewEntry[];
}

function toPng(src: string): string {
  return src.replace(/\.avif$/i, '.png');
}

/** Comprueba que existan las imágenes PNG de la vista (los mockups hacen su propio AVIF→PNG). */
function useViewImagesPresent(desktopSrc: string, mobileSrc: string): boolean {
  const desktopPng = toPng(desktopSrc);
  const mobilePng = toPng(mobileSrc);

  const [present, setPresent] = useState(true);

  useEffect(() => {
    let cancelled = false;

    const check = async () => {
      const results = await Promise.all(
        [desktopPng, mobilePng].map(
          (url) =>
            new Promise<boolean>((resolve) => {
              const img = new Image();
              img.onload = () => resolve(true);
              img.onerror = () => resolve(false);
              if (url) img.src = url;
              else resolve(false);
            }),
        ),
      );
      if (!cancelled) setPresent(results.every(Boolean));
    };

    void check();
    return () => {
      cancelled = true;
    };
  }, [desktopPng, mobilePng]);

  return present;
}

/**
 * Placeholder elegante para cuando las imágenes de una vista todavía
 * no existen (ej. capturas de un próximo lanzamiento).
 */
function MockupPlaceholder({ alt }: { alt: string }) {
  return (
    <div
      role="img"
      aria-label={`${alt} — imagen en preparación`}
      className="w-full aspect-[4/3] rounded-2xl border border-dashed border-border bg-bg-surface flex flex-col items-center justify-center gap-3 text-text-secondary"
    >
      <Monitor className="w-10 h-10" aria-hidden="true" />
      <span className="text-sm px-6 text-center">Imagen en preparación</span>
    </div>
  );
}

export function ViewsShowcase({ views }: ViewsShowcaseProps) {
  const [activePersonaId, setActivePersonaId] = useState(AREAS[0]?.id ?? 'dueno');
  const [activeViewId, setActiveViewId] = useState('');

  const activePersona = useMemo(
    () => AREAS.find((a) => a.id === activePersonaId) ?? AREAS[0],
    [activePersonaId],
  );

  const personaViews = useMemo(
    () => views.filter((v) => v && v.area === activePersona?.id),
    [views, activePersona],
  );

  const activeView = useMemo(
    () => personaViews.find((v) => v.id === activeViewId) ?? personaViews[0],
    [personaViews, activeViewId],
  );

  const activeIndex = useMemo(
    () => personaViews.findIndex((v) => v.id === activeView?.id),
    [personaViews, activeView],
  );

  const imagesPresent = useViewImagesPresent(
    activeView?.desktopSrc ?? '',
    activeView?.mobileSrc ?? '',
  );

  function selectPersona(areaId: string) {
    setActivePersonaId(areaId);
    setActiveViewId('');
  }

  function goToView(index: number) {
    const next = personaViews[index];
    if (next) setActiveViewId(next.id);
  }

  return (
    <div className="w-full">
      {/* ═══ Chips de personas ═══ */}
      <div className="flex flex-wrap justify-center gap-2.5 mb-8">
        {AREAS.map((area) => {
          const Icon = area.icon;
          const isActive = area.id === activePersona?.id;
          return (
            <button
              key={area.id}
              type="button"
              onClick={() => selectPersona(area.id)}
              aria-pressed={isActive}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full border text-sm font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
                isActive
                  ? 'bg-primary/15 text-primary-text border-primary/40'
                  : 'bg-bg-surface text-text-secondary border-border hover:text-text-primary hover:border-primary/20'
              }`}
            >
              <span
                className={`flex items-center justify-center w-5 h-5 rounded-full text-xs ${
                  isActive ? 'bg-primary/20' : 'bg-primary/10'
                }`}
              >
                <Icon className="w-3.5 h-3.5" aria-hidden="true" />
              </span>
              {area.title}
            </button>
          );
        })}
      </div>

      {/* ═══ Vista activa ═══ */}
      {activeView && (
        <div
          key={`${activePersona?.id}-${activeView.id}`}
          className="animate-fade-in"
        >
          <div className="relative">
            {imagesPresent ? (
              <>
                <LaptopFrame
                  src={activeView.desktopSrc}
                  alt={`${activeView.title} en PC`}
                />
                <div className="absolute -right-2 -bottom-4 w-[42%] sm:w-[40%] sm:-right-3 sm:-bottom-5 md:w-[30%] md:-right-4 md:-bottom-8 lg:w-[26%] lg:-right-8 lg:-bottom-10 z-10">
                  <MobileFrame
                    src={activeView.mobileSrc}
                    alt={`${activeView.title} en celular`}
                  />
                </div>
              </>
            ) : (
              <MockupPlaceholder alt={activeView.title} />
            )}
          </div>

          {/* ═══ Mini ficha ═══ */}
          <div className="mt-12 md:mt-10 max-w-3xl mx-auto text-center">
            <p className="text-xs font-semibold tracking-widest uppercase text-primary/80">
              {activePersona?.title}
            </p>
            <h3 className="mt-2 text-2xl sm:text-3xl font-semibold text-text-primary">
              {activeView.title}
            </h3>
            <p className="mt-3 text-text-secondary leading-relaxed">
              {activeView.description}
            </p>

            <ul className="mt-5 flex flex-col items-center gap-2">
              {activeView.highlights?.map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 text-sm text-text-secondary text-left"
                >
                  <CheckCircle2
                    className="w-4 h-4 text-primary shrink-0"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-7 flex items-center justify-center">
              <ContactButton />
            </div>
          </div>

          {/* ═══ Navegación < • • • > ═══ */}
          {personaViews.length > 1 && (
            <div className="mt-8 flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={() =>
                  goToView(
                    (activeIndex - 1 + personaViews.length) % personaViews.length,
                  )
                }
                aria-label="Vista anterior"
                className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-bg-surface text-text-secondary hover:text-text-primary hover:border-primary/30 transition-all duration-200 cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" aria-hidden="true" />
              </button>

              <div className="flex items-center gap-2" role="tablist" aria-label="Vistas">
                {personaViews.map((view, i) => {
                  const isActive = view.id === activeView.id;
                  return (
                    <button
                      key={view.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      aria-label={`Ver ${view.title}`}
                      title={view.title}
                      onClick={() => goToView(i)}
                      className={`h-2 rounded-full transition-all duration-200 cursor-pointer ${
                        isActive ? 'w-6 bg-primary' : 'w-2 bg-border hover:bg-text-secondary'
                      }`}
                    />
                  );
                })}
              </div>

              <button
                type="button"
                onClick={() =>
                  goToView((activeIndex + 1) % personaViews.length)
                }
                aria-label="Vista siguiente"
                className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-bg-surface text-text-secondary hover:text-text-primary hover:border-primary/30 transition-all duration-200 cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}