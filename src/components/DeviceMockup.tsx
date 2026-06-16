import { type ReactNode } from 'react'

/* ─── LAPTOP SVG FRAME ─── */
interface LaptopFrameProps {
  src: string
  alt: string
  className?: string
  children?: ReactNode
}

export function LaptopFrame({ src, alt, className = '' }: LaptopFrameProps) {
  const screenW = 560
  const screenH = 350
  const bezel = 8
  const baseH = 80
  const totalH = screenH + baseH + 6

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <svg
        viewBox={`0 0 ${screenW + 40} ${totalH + 16}`}
        className="w-full h-auto laptop-svg"
        role="img"
        aria-label={alt}
      >
        <defs>
          <linearGradient id="lidGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3a3a3a" />
            <stop offset="100%" stopColor="#2a2a2a" />
          </linearGradient>
          <linearGradient id="baseGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2a2a2a" />
            <stop offset="40%" stopColor="#222" />
            <stop offset="100%" stopColor="#1a1a1a" />
          </linearGradient>
          <linearGradient id="screenGlare" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.04" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="hingeGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1a1a1a" />
            <stop offset="100%" stopColor="#222" />
          </linearGradient>
          <clipPath id={`screen-clip-${alt.replace(/\s/g, '')}`}>
            <rect x={20 + bezel} y={8 + bezel} width={screenW - bezel * 2} height={screenH - bezel * 2} rx={3} />
          </clipPath>
          <filter id="laptopShadow">
            <feDropShadow dx="0" dy="8" stdDeviation="16" floodColor="#000" floodOpacity="0.5" />
          </filter>
        </defs>

        <g filter="url(#laptopShadow)">
          {/* Lid outer */}
          <rect x={20} y={8} width={screenW} height={screenH} rx={14} fill="url(#lidGrad)" />
          {/* Screen inner */}
          <rect x={20 + bezel} y={8 + bezel} width={screenW - bezel * 2} height={screenH - bezel * 2} rx={3} fill="#000" />
          {/* Screenshot */}
          <image
            href={src}
            x={20 + bezel}
            y={8 + bezel}
            width={screenW - bezel * 2}
            height={screenH - bezel * 2}
            clipPath={`url(#screen-clip-${alt.replace(/\s/g, '')})`}
            preserveAspectRatio="xMidYMid slice"
          />
          {/* Glare overlay */}
          <rect x={20 + bezel} y={8 + bezel} width={screenW - bezel * 2} height={screenH - bezel * 2} rx={3} fill="url(#screenGlare)" />
          {/* Camera dot */}
          <circle cx={20 + screenW / 2} cy={8 + 6} r={2.5} fill="#1a1a1a" stroke="#444" strokeWidth={0.5} />
          <circle cx={20 + screenW / 2} cy={8 + 6} r={1} fill="#222" />

          {/* Hinge */}
          <rect x={20 + screenW * 0.15} y={8 + screenH - 2} width={screenW * 0.7} height={6} rx={3} fill="url(#hingeGrad)" />

          {/* Keyboard base */}
          <path
            d={`
              M ${20 - screenW * 0.04} ${8 + screenH + 2}
              L ${20 + screenW + screenW * 0.04} ${8 + screenH + 2}
              L ${20 + screenW + screenW * 0.08} ${8 + screenH + 2 + baseH}
              L ${20 - screenW * 0.08} ${8 + screenH + 2 + baseH}
              Z
            `}
            fill="url(#baseGrad)"
            rx={6}
          />
          {/* Keyboard surface */}
          <rect
            x={20 + screenW * 0.06}
            y={8 + screenH + 8}
            width={screenW * 0.88}
            height={baseH * 0.7}
            rx={4}
            fill="#181818"
          />
          {/* Keys */}
          {Array.from({ length: 6 }).map((_, row) =>
            Array.from({ length: 12 }).map((_, col) => (
              <rect
                key={`k-${row}-${col}`}
                x={20 + screenW * 0.08 + col * (screenW * 0.072)}
                y={8 + screenH + 12 + row * (baseH * 0.1)}
                width={screenW * 0.058}
                height={baseH * 0.075}
                rx={1.5}
                fill="#272727"
              />
            ))
          )}
          {/* Trackpad */}
          <rect
            x={20 + screenW / 2 - screenW * 0.08}
            y={8 + screenH + 8 + baseH * 0.72}
            width={screenW * 0.16}
            height={baseH * 0.18}
            rx={3}
            fill="#1f1f1f"
          />
        </g>
      </svg>
    </div>
  )
}

/* ─── MOBILE SVG FRAME ─── */
interface MobileFrameProps {
  src: string
  alt: string
  className?: string
}

export function MobileFrame({ src, alt, className = '' }: MobileFrameProps) {
  const phoneW = 240
  const phoneH = 500
  const cornerR = 36

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <svg
        viewBox={`0 0 ${phoneW + 20} ${phoneH + 20}`}
        className="w-full h-auto phone-svg"
        role="img"
        aria-label={alt}
      >
        <defs>
          <linearGradient id="phoneBodyGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3a3a3a" />
            <stop offset="50%" stopColor="#2a2a2a" />
            <stop offset="100%" stopColor="#222" />
          </linearGradient>
          <linearGradient id="phoneScreenGlare" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.03" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
          <clipPath id={`phone-clip-${alt.replace(/\s/g, '')}`}>
            <rect x={14} y={16} width={phoneW - 28} height={phoneH - 32} rx={4} />
          </clipPath>
          <filter id="phoneShadow">
            <feDropShadow dx="0" dy="8" stdDeviation="16" floodColor="#000" floodOpacity="0.5" />
          </filter>
        </defs>

        <g filter="url(#phoneShadow)">
          {/* Phone body */}
          <rect x={10} y={10} width={phoneW} height={phoneH} rx={cornerR} fill="url(#phoneBodyGrad)" stroke="#444" strokeWidth={2} />

          {/* Side buttons */}
          <rect x={10 - 3} y={120} width={3} height={40} rx={1.5} fill="#2a2a2a" />
          <rect x={10 - 3} y={170} width={3} height={50} rx={1.5} fill="#2a2a2a" />
          <rect x={10 + phoneW} y={150} width={3} height={55} rx={1.5} fill="#2a2a2a" />

          {/* Screen area */}
          <rect x={14} y={16} width={phoneW - 28} height={phoneH - 32} rx={4} fill="#000" />

          {/* Screenshot */}
          <image
            href={src}
            x={14}
            y={16}
            width={phoneW - 28}
            height={phoneH - 32}
            clipPath={`url(#phone-clip-${alt.replace(/\s/g, '')})`}
            preserveAspectRatio="xMidYMid slice"
          />
          {/* Glare */}
          <rect x={14} y={16} width={phoneW - 28} height={phoneH - 32} rx={4} fill="url(#phoneScreenGlare)" />

          {/* Dynamic Island */}
          <rect
            x={phoneW / 2 - 35}
            y={22}
            width={70}
            height={20}
            rx={10}
            fill="#000"
          />
          {/* Camera lens */}
          <circle cx={phoneW / 2 - 10} cy={32} r={4} fill="#111" stroke="#444" strokeWidth={0.5} />
          <circle cx={phoneW / 2 - 10} cy={32} r={2} fill="#222" />
          {/* Sensor */}
          <rect x={phoneW / 2 + 8} y={30} width={14} height={4} rx={2} fill="#1a1a1a" />

          {/* Home indicator */}
          <rect
            x={phoneW / 2 - 30}
            y={phoneH - 14}
            width={60}
            height={4}
            rx={2}
            fill="#333"
          />
        </g>
      </svg>
    </div>
  )
}
