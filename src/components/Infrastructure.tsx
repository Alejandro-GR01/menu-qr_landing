import { Monitor, Wifi, Smartphone, Printer } from "lucide-react";

const CARDS = [
  {
    icon: Monitor,
    title: "Tu PC es el servidor",
    description:
      "La app corre 24/7 en tu PC y sirve el menú en http://IP_LOCAL:3000. No necesitas hosting ni servidor externo.",
  },
  {
    icon: Wifi,
    title: "Router = tu red local",
    description:
      "El router WiFi crea la red interna. La PC se conecta por WiFi o cable Ethernet — ambas opciones funcionan.",
  },
  {
    icon: Smartphone,
    title: "Clientes escanean y listo",
    description:
      "Escanean el QR en la mesa, abren el menú en el navegador y lo ven al instante. Sin apps, sin registros.",
  },
  {
    icon: Printer,
    title: "Tickets al toque",
    description:
      "El vendedor cobra desde el POS en su celular y la impresora térmica imprime el ticket al instante. Doble copia: cliente y barra. Funciona con cualquier impresora térmica: USB, Serial, TCP/IP o Bluetooth.",
  },
];

/* ── SVG helpers ── */

function SvgDefs() {
  return (
    <defs>
      {/* Gradient for device screens */}
      <linearGradient id="screenGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#1a1a1a" />
        <stop offset="100%" stopColor="#111" />
      </linearGradient>
      {/* Glow for active connections */}
      <filter id="glow">
        <feGaussianBlur stdDeviation="2" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      {/* Shadow for devices */}
      <filter id="shadow">
        <feDropShadow
          dx="0"
          dy="2"
          stdDeviation="3"
          floodColor="#000"
          floodOpacity="0.5"
        />
      </filter>
      {/* Arrow marker */}
      <marker
        id="arrowPrimary"
        viewBox="0 0 10 7"
        refX="9"
        refY="3.5"
        markerWidth="8"
        markerHeight="6"
        orient="auto"
      >
        <polygon points="0 0, 10 3.5, 0 7" fill="#C25E44" />
      </marker>
      <marker
        id="arrowGold"
        viewBox="0 0 10 7"
        refX="9"
        refY="3.5"
        markerWidth="8"
        markerHeight="6"
        orient="auto"
      >
        <polygon points="0 0, 10 3.5, 0 7" fill="#b8860b" />
      </marker>
      <marker
        id="arrowSecondary"
        viewBox="0 0 10 7"
        refX="9"
        refY="3.5"
        markerWidth="8"
        markerHeight="6"
        orient="auto"
      >
        <polygon points="0 0, 10 3.5, 0 7" fill="#A0A0A0" />
      </marker>
    </defs>
  );
}

/* ── Device shapes ── */

function LabelPill({
  x,
  y,
  label,
  fontSize = 9,
}: {
  x: number;
  y: number;
  label: string;
  fontSize?: number;
}) {
  const width = Math.ceil(label.length * fontSize * 0.56 + 18);
  const height = Math.round(fontSize + 8);
  return (
    <g>
      <rect
        x={x - width / 2}
        y={y - height / 2}
        width={width}
        height={height}
        rx={height / 2}
        fill="#1A1A1A"
        stroke="#2A2A2A"
        strokeWidth="1"
      />
      <text
        x={x}
        y={y + fontSize * 0.35}
        textAnchor="middle"
        fill="#FAFAFA"
        fontSize={fontSize}
        fontWeight="600"
        fontFamily="system-ui"
      >
        {label}
      </text>
    </g>
  );
}

function DesktopDevice({ x, y }: { x: number; y: number }) {
  return (
    <g filter="url(#shadow)" transform={`translate(${x},${y})`}>
      {/* Monitor body */}
      <rect
        x="0"
        y="0"
        width="120"
        height="80"
        rx="6"
        fill="#2A2A2A"
        stroke="#3a3a3a"
        strokeWidth="1"
      />
      {/* Screen */}
      <rect
        x="6"
        y="6"
        width="108"
        height="58"
        rx="3"
        fill="url(#screenGrad)"
      />
      {/* Screen content: Menu QR logo/text */}
      <text
        x="60"
        y="28"
        textAnchor="middle"
        fill="#D3775D"
        fontSize="10"
        fontWeight="bold"
        fontFamily="system-ui"
      >
        Menu QR
      </text>
      <text
        x="60"
        y="42"
        textAnchor="middle"
        fill="#A0A0A0"
        fontSize="7"
        fontFamily="system-ui"
      >
        :3000
      </text>
      {/* Green dot = running */}
      <circle cx="16" cy="14" r="3" fill="#22c55e" opacity="0.9" />
      {/* Stand */}
      <rect x="45" y="80" width="30" height="8" rx="2" fill="#3a3a3a" />
      <rect x="35" y="88" width="50" height="4" rx="2" fill="#2A2A2A" />
      <LabelPill x={60} y={108} label="PC del Local" fontSize={9} />
    </g>
  );
}

function RouterDevice({ x, y }: { x: number; y: number }) {
  return (
    <g filter="url(#shadow)" transform={`translate(${x},${y})`}>
      {/* Router body */}
      <rect
        x="0"
        y="10"
        width="70"
        height="30"
        rx="6"
        fill="#2A2A2A"
        stroke="#3a3a3a"
        strokeWidth="1"
      />
      {/* Antenna left */}
      <line
        x1="15"
        y1="10"
        x2="10"
        y2="-8"
        stroke="#A0A0A0"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="10" cy="-10" r="2.5" fill="#b8860b" />
      {/* Antenna right */}
      <line
        x1="55"
        y1="10"
        x2="60"
        y2="-8"
        stroke="#A0A0A0"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="60" cy="-10" r="2.5" fill="#b8860b" />
      {/* LED indicators */}
      <circle cx="18" cy="25" r="2" fill="#22c55e" opacity="0.8" />
      <circle cx="28" cy="25" r="2" fill="#22c55e" opacity="0.6" />
      <circle cx="38" cy="25" r="2" fill="#b8860b" opacity="0.7" />
      <circle cx="48" cy="25" r="2" fill="#C25E44" opacity="0.5" />
      <LabelPill x={35} y={65} label="Router WiFi" fontSize={9} />
    </g>
  );
}

function PhoneDevice({
  x,
  y,
  label,
  accent,
}: {
  x: number;
  y: number;
  label: string;
  accent: string;
}) {
  return (
    <g filter="url(#shadow)" transform={`translate(${x},${y})`}>
      {/* Phone body */}
      <rect
        x="0"
        y="0"
        width="48"
        height="85"
        rx="8"
        fill="#2A2A2A"
        stroke="#3a3a3a"
        strokeWidth="1"
      />
      {/* Screen */}
      <rect x="4" y="8" width="40" height="62" rx="4" fill="url(#screenGrad)" />
      {/* Dynamic Island */}
      <rect x="15" y="12" width="18" height="5" rx="2.5" fill="#000" />
      {/* Screen content */}
      <rect
        x="10"
        y="22"
        width="28"
        height="4"
        rx="1"
        fill={accent}
        opacity="0.6"
      />
      <rect
        x="10"
        y="30"
        width="20"
        height="3"
        rx="1"
        fill="#A0A0A0"
        opacity="0.3"
      />
      <rect
        x="10"
        y="37"
        width="28"
        height="3"
        rx="1"
        fill="#A0A0A0"
        opacity="0.2"
      />
      <rect
        x="10"
        y="44"
        width="15"
        height="3"
        rx="1"
        fill={accent}
        opacity="0.4"
      />
      <rect
        x="10"
        y="51"
        width="28"
        height="3"
        rx="1"
        fill="#A0A0A0"
        opacity="0.2"
      />
      <rect
        x="10"
        y="58"
        width="22"
        height="3"
        rx="1"
        fill="#A0A0A0"
        opacity="0.15"
      />
      {/* Home indicator */}
      <rect
        x="16"
        y="74"
        width="16"
        height="2"
        rx="1"
        fill="#A0A0A0"
        opacity="0.3"
      />
      <LabelPill x={24} y={96} label={label} fontSize={8} />
    </g>
  );
}

function PrinterDevice({ x, y }: { x: number; y: number }) {
  return (
    <g filter="url(#shadow)" transform={`translate(${x},${y})`}>
      {/* Printer body */}
      <rect
        x="0"
        y="10"
        width="65"
        height="35"
        rx="5"
        fill="#2A2A2A"
        stroke="#3a3a3a"
        strokeWidth="1"
      />
      {/* Paper output slot */}
      <rect
        x="8"
        y="5"
        width="49"
        height="8"
        rx="2"
        fill="#e8e0d4"
        opacity="0.9"
      />
      {/* Paper roll coming out */}
      <rect x="12" y="-12" width="41" height="20" rx="2" fill="#f5f0e8" />
      {/* Paper lines */}
      <line x1="16" y1="-6" x2="48" y2="-6" stroke="#ccc" strokeWidth="0.8" />
      <line x1="16" y1="-2" x2="40" y2="-2" stroke="#ccc" strokeWidth="0.8" />
      <line x1="16" y1="2" x2="44" y2="2" stroke="#ccc" strokeWidth="0.8" />
      <line x1="16" y1="6" x2="35" y2="6" stroke="#ccc" strokeWidth="0.8" />
      {/* Status LED */}
      <circle cx="55" cy="30" r="2.5" fill="#22c55e" opacity="0.8" />
      <LabelPill x={32} y={83} label="Impresora Térmica" fontSize={8.5} />
    </g>
  );
}

/* ── Connection Arrows ── */

function ConnectionArrow({
  x1,
  y1,
  x2,
  y2,
  label,
  dashed,
  color,
  labelOffset = 0,
}: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  label: string;
  dashed?: boolean;
  color: string;
  labelOffset?: number;
}) {
  const midX = (x1 + x2) / 2 + 5;
  const midY = (y1 + y2) / 2;
  const markerId =
    color === "#C25E44"
      ? "arrowPrimary"
      : color === "#b8860b"
        ? "arrowGold"
        : "arrowSecondary";

  return (
    <g>
      <line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke={color}
        strokeWidth="1.5"
        strokeDasharray={dashed ? "6 4" : "none"}
        markerEnd={`url(#${markerId})`}
        opacity="0.7"
      />
      <text
        x={midX}
        y={midY + labelOffset - 6}
        textAnchor="middle"
        fill={color}
        fontSize="7"
        fontFamily="system-ui"
        fontWeight="500"
      >
        {label}
      </text>
    </g>
  );
}

/* ── Legend ── */

function ConnectionLegend({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x="0"
        y="0"
        fill="#FAFAFA"
        fontSize="8"
        fontWeight="600"
        fontFamily="system-ui"
      >
        Conexiones de la impresora:
      </text>
      <line x1="0" y1="10" x2="24" y2="10" stroke="#A0A0A0" strokeWidth="1.5" />
      <text x="28" y="13" fill="#A0A0A0" fontSize="7" fontFamily="system-ui">
        USB / Bluetooth a la PC
      </text>
      <line x1="0" y1="24" x2="24" y2="24" stroke="#b8860b" strokeWidth="1.5" />
      <text x="28" y="27" fill="#A0A0A0" fontSize="7" fontFamily="system-ui">
        Ethernet (TCP/IP) al router
      </text>
      <line
        x1="0"
        y1="38"
        x2="24"
        y2="38"
        stroke="#C25E44"
        strokeWidth="1.5"
        strokeDasharray="4 3"
      />
      <text x="28" y="41" fill="#A0A0A0" fontSize="7" fontFamily="system-ui">
        Por la red local (WiFi)
      </text>
    </g>
  );
}

/* ── Main Component ── */

export function Infrastructure() {
  return (
    <section className="py-24 px-4" id="infraestructura">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary animate-fade-in-up">
            Así funciona en <span className="text-primary">tu local</span>
          </h2>
          <p className="mt-4 text-text-secondary text-lg max-w-2xl mx-auto animate-fade-in-up animate-delay-100">
            Todo vive dentro de tu red local. Sin internet, sin servidores
            externos, sin mensualidades. Tu PC manda, tus clientes escanean, tus
            vendedores cobran.
          </p>
        </div>

        {/* SVG Diagram */}
        <div className="animate-fade-in-up animate-delay-200">
          <div className="rounded-2xl border border-border bg-bg-surface p-4 sm:p-6 lg:p-8 overflow-hidden">
            <svg
              viewBox="0 0 720 480"
              className="w-full h-auto -mb-8 lg:-mb-24"
              role="img"
              aria-label="Diagrama de infraestructura: la PC del local actúa como servidor, el router WiFi crea la red local, los clientes escanean el QR y ven el menú en su celular, los vendedores cobran desde el POS y la impresora térmica imprime los tickets — todo sin internet"
            >
              <SvgDefs />

              {/* ── Local network boundary (dashed rectangle) ── */}
              <rect
                x="12"
                y="12"
                width="696"
                height="388"
                rx="16"
                fill="none"
                stroke="#C25E44"
                strokeWidth="1.5"
                strokeDasharray="8 5"
                opacity="0.35"
              />

              {/* "100% LOCAL" badge — top-left inside */}

              {/* "SIN INTERNET" badge — outside the dashed rectangle */}
              <g transform="translate(20, 20)">
                <rect
                  x="0"
                  y="0"
                  width="100"
                  height="30"
                  rx="6"
                  fill="#1a1a1a"
                  stroke="#2A2A2A"
                  strokeWidth="1"
                />
                <g transform="translate(0, 4)">
                  <path
                    d="M12 2L3 7v5c0 5.25 3.75 10.05 9 11 5.25-.95 9-5.75 9-11V7l-9-5z"
                    fill="none"
                    stroke="#ef4444"
                    strokeWidth="1"
                  />
                  <line
                    x1="4"
                    y1="4"
                    x2="20"
                    y2="20"
                    stroke="#ef4444"
                    strokeWidth="1"
                  />
                </g>
                <text
                  x="50"
                  y="13"
                  textAnchor="middle"
                  fill="#A0A0A0"
                  fontSize="7"
                  fontFamily="system-ui"
                >
                  <tspan fontWeight="600" fill="#ef4444">
                    SIN INTERNET
                  </tspan>
                </text>
                <text
                  x="50"
                  y="24"
                  textAnchor="middle"
                  fill="#909090"
                  fontSize="6.5"
                  fontFamily="system-ui"
                >
                  100% offline
                </text>
              </g>

              {/* Connection Legend — top-right inside */}
              <ConnectionLegend x={470} y={22} />

              {/* ── Connection Arrows ── */}

              {/* PC ↔ Router: Ethernet (solid gold) */}
              <ConnectionArrow
                x1={178}
                y1={145}
                x2={300}
                y2={150}
                label="Ethernet"
                color="#b8860b"
                labelOffset={-4}
              />

              {/* PC ↔ Router: WiFi (dashed primary) */}
              <ConnectionArrow
                x1={178}
                y1={165}
                x2={300}
                y2={165}
                label="WiFi"
                dashed
                color="#C25E44"
                labelOffset={16}
              />

              {/* Router → Printer: TCP/IP (solid gold) */}
              <ConnectionArrow
                x1={370}
                y1={143}
                x2={553}
                y2={143}
                label="TCP/IP"
                color="#b8860b"
                labelOffset={-6}
              />

              {/* Router → Cliente: WiFi local (dashed primary) */}
              <ConnectionArrow
                x1={315}
                y1={170}
                x2={82}
                y2={268}
                label="WiFi local"
                dashed
                color="#C25E44"
                labelOffset={-8}
              />

              {/* Router → Vendedor: WiFi local (dashed gold) */}
              <ConnectionArrow
                x1={355}
                y1={160}
                x2={470}
                y2={260}
                label="WiFi local"
                dashed
                color="#b8860b"
                labelOffset={-8}
              />

              {/* Vendedor → Printer: ticket via network (gray) */}
              <ConnectionArrow
                x1={480}
                y1={330}
                x2={560}
                y2={169}
                label="Ticket por red"
                color="#A0A0A0"
                labelOffset={-74}
              />

              {/* ── Devices (drawn above connectors so the solid label pills clear the wiring) ── */}
              {/* PC del Local — left */}
              <DesktopDevice x={55} y={100} />

              {/* Router WiFi — center */}
              <RouterDevice x={300} y={125} />

              {/* Impresora Térmica — right */}
              <PrinterDevice x={555} y={115} />

              {/* Phone Client — bottom-left */}
              <PhoneDevice x={55} y={270} label="Cliente" accent="#C25E44" />

              {/* Phone Seller — bottom-right */}
              <PhoneDevice x={460} y={265} label="Vendedor" accent="#b8860b" />

              {/* ── Flow labels ── */}
              <text
                x="79"
                y="385"
                textAnchor="middle"
                fill="#C25E44"
                fontSize="7"
                fontFamily="system-ui"
                fontWeight="500"
              >
                Escanea el QR → ve el menú
              </text>
              <text
                x="490"
                y="385"
                textAnchor="middle"
                fill="#b8860b"
                fontSize="7"
                fontFamily="system-ui"
                fontWeight="500"
              >
                Cobra POS → imprime ticket
              </text>
            </svg>
          </div>
        </div>

        {/* Info Cards Grid */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CARDS.map((card, i) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="group p-5 rounded-2xl border border-border bg-bg-surface hover:border-primary/30 transition-all duration-200 animate-fade-in-up"
                style={{ animationDelay: `${(i + 2) * 100}ms` }}
              >
                <div className="p-2.5 rounded-xl bg-primary/10 text-primary-text w-fit mb-4 group-hover:bg-primary/15 transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-text-primary mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
