import { useEffect, useRef, useState } from "react";

interface LaptopFrameProps {
  /** Ruta base (PNG). Se intenta AVIF primero, fallback automático a PNG. */
  src: string;
  alt: string;
  className?: string;
}

export function LaptopFrame({ src, alt, className = "" }: LaptopFrameProps) {
  const clipId = `monitor-screen-${alt.replace(/\s/g, "")}`;
  const glassId = `monitor-glass-${alt.replace(/\s/g, "")}`;
  const avifSrc = src.replace(/\.(png|jpg|jpeg)$/i, ".avif");

  const imgRef = useRef<SVGImageElement | null>(null);
  const [currentSrc, setCurrentSrc] = useState(avifSrc);

  // Reset a AVIF cuando cambia la imagen
  useEffect(() => {
    setCurrentSrc(avifSrc);
  }, [avifSrc]);

  // Si el browser no soporta AVIF, cae a PNG via onerror
  useEffect(() => {
    const el = imgRef.current;
    if (!el) return;
    const onError = () => setCurrentSrc(src);
    el.addEventListener("error", onError);
    return () => el.removeEventListener("error", onError);
  }, [src]);

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <svg
        viewBox="0 0 800 600"
        className="w-full h-auto"
        role="img"
        aria-label={alt}
        style={{ filter: "drop-shadow(0 12px 48px rgba(0,0,0,0.45))" }}
      >
        <defs>
          <clipPath id={clipId}>
            <rect x={112} y={92} width={576} height={326} rx={10} />
          </clipPath>
          <linearGradient id={glassId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#fff" stopOpacity="0.08" />
            <stop offset="30%" stopColor="#fff" stopOpacity="0" />
            <stop offset="100%" stopColor="#fff" stopOpacity="0.02" />
          </linearGradient>
        </defs>

        {/* === BASE (stand) === */}

        {/* Shadow below base */}
        <rect
          x={280}
          y={527}
          width={240}
          height={8}
          rx={4}
          fill="#000"
          opacity="0.3"
        />

        {/* Base rectangle */}
        <rect
          x={280}
          y={515}
          width={240}
          height={12}
          rx={6}
          fill="#181818"
          stroke="#2a2a2a"
          strokeWidth={4}
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Stand neck */}
        <path
          d="M 375 430 L 385 515 L 415 515 L 425 430"
          fill="#181818"
          stroke="#2a2a2a"
          strokeWidth={4}
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* LED indicator */}
        <circle cx={400} cy={424} r={2.5} fill="#2a2a2a" opacity="0.6" />

        {/* === MONITOR === */}

        {/* Monitor body background */}
        <rect x={100} y={80} width={600} height={350} rx={18} fill="#151515" />

        {/* Screen background (black) */}
        <rect x={112} y={92} width={576} height={326} rx={10} fill="#000" />

        {/* Screenshot — intenta AVIF, fallback a PNG via onerror */}
        <image
          ref={imgRef}
          href={currentSrc}
          x={112}
          y={92}
          width={575}
          height={425}
          clipPath={`url(#${clipId})`}
          preserveAspectRatio="xMidYMid slice"
        />

        {/* Glass reflection */}
        <rect
          x={112}
          y={92}
          width={576}
          height={326}
          rx={10}
          fill={`url(#${glassId})`}
          pointerEvents="none"
        />

        {/* Monitor bezel (outer frame) */}
        <rect
          x={100}
          y={80}
          width={600}
          height={350}
          rx={18}
          fill="none"
          stroke="#333"
          strokeWidth={4}
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Monitor bezel (inner frame) */}
        <rect
          x={112}
          y={92}
          width={576}
          height={326}
          rx={10}
          fill="none"
          stroke="#2a2a2a"
          strokeWidth={2}
          opacity="0.4"
        />
      </svg>
    </div>
  );
}

interface MobileFrameProps {
  /** Ruta base (PNG). Se intenta AVIF primero, fallback automático a PNG. */
  src: string;
  alt: string;
  className?: string;
}

export function MobileFrame({ src, alt, className = "" }: MobileFrameProps) {
  const clipId = `phone-screen-${alt.replace(/\s/g, "")}`;
  const glassId = `phone-glass-${alt.replace(/\s/g, "")}`;
  const avifSrc = src.replace(/\.(png|jpg|jpeg)$/i, ".avif");

  const imgRef = useRef<SVGImageElement | null>(null);
  const [currentSrc, setCurrentSrc] = useState(avifSrc);

  // Reset a AVIF cuando cambia la imagen
  useEffect(() => {
    setCurrentSrc(avifSrc);
  }, [avifSrc]);

  // Si el browser no soporta AVIF, cae a PNG via onerror
  useEffect(() => {
    const el = imgRef.current;
    if (!el) return;
    const onError = () => setCurrentSrc(src);
    el.addEventListener("error", onError);
    return () => el.removeEventListener("error", onError);
  }, [src]);

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <svg
        viewBox="260 30 280 540"
        className="w-full h-auto max-h-full"
        role="img"
        aria-label={alt}
        style={{ filter: "drop-shadow(0 8px 32px rgba(0,0,0,0.5))" }}
      >
        <defs>
          <clipPath id={clipId}>
            <rect x={289} y={62} width={222} height={476} rx={34} />
          </clipPath>
          <linearGradient id={glassId} x1="0" y1="0" x2="1" y2="0.5">
            <stop offset="0%" stopColor="#fff" stopOpacity="0.1" />
            <stop offset="25%" stopColor="#fff" stopOpacity="0" />
            <stop offset="100%" stopColor="#fff" stopOpacity="0.03" />
          </linearGradient>
        </defs>

        {/* === SIDE BUTTONS === */}

        {/* Left buttons */}
        <rect x={274} y={140} width={5} height={25} rx={2} fill="#2a2a2a" />
        <rect x={274} y={180} width={5} height={50} rx={2} fill="#2a2a2a" />
        <rect x={274} y={240} width={5} height={50} rx={2} fill="#2a2a2a" />

        {/* Right button */}
        <rect x={521} y={190} width={5} height={70} rx={2} fill="#2a2a2a" />

        {/* === PHONE BODY === */}

        {/* Phone body background */}
        <rect x={277} y={50} width={246} height={500} rx={44} fill="#151515" />

        {/* Screen background (black) */}
        <rect x={289} y={62} width={222} height={476} rx={34} fill="#000" />

        {/* Screenshot — intenta AVIF, fallback a PNG via onerror */}
        <image
          ref={imgRef}
          href={currentSrc}
          x={289}
          y={62}
          width={222}
          height={476}
          clipPath={`url(#${clipId})`}
          preserveAspectRatio="xMidYMid slice"
        />

        {/* Glass reflection */}
        <rect
          x={289}
          y={62}
          width={222}
          height={476}
          rx={34}
          fill={`url(#${glassId})`}
          pointerEvents="none"
        />

        {/* Phone body outline */}
        <rect
          x={277}
          y={50}
          width={246}
          height={500}
          rx={44}
          fill="none"
          stroke="#333"
          strokeWidth={4}
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Screen bezel (inner frame) */}
        <rect
          x={289}
          y={62}
          width={222}
          height={476}
          rx={34}
          fill="none"
          stroke="#2a2a2a"
          strokeWidth={2}
          opacity="0.3"
        />

        {/* Notch / Dynamic Island */}
        <rect
          x={365}
          y={78}
          width={70}
          height={14}
          rx={7}
          fill="#1a1a1a"
          opacity="0.85"
        />

        {/* Home indicator */}
        <rect
          x={360}
          y={524}
          width={80}
          height={5}
          rx={2.5}
          fill="#2a2a2a"
          opacity="0.7"
        />
      </svg>
    </div>
  );
}
