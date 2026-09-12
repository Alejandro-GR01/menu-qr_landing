import {
  Settings,
  Smartphone,
  Receipt,
  ShieldCheck,
  Store,
  Utensils,
  Package,
  ScanLine,
  Rocket,
} from 'lucide-react';
import type { ViewEntry, FunctionalArea, GetStartedStep } from '@/types';

const BASE = import.meta.env.BASE_URL;

function png(id: string, device: 'desktop' | 'mobile'): string {
  return `${BASE}views/${id}-${device}.png`;
}

export const VIEWS: ViewEntry[] = [
  // ─── Puesta en marcha ───────────────────────────────────────────────
  {
    id: 'login',
    title: 'Login',
    description:
      'Una sola puerta de entrada para el dueño y para los vendedores.',
    desktopSrc: png('login', 'desktop'),
    mobileSrc: png('login', 'mobile'),
    area: 'puesta-en-marcha',
    highlights: [
      'Cada rol entra con su propia cuenta.',
      'El vendedor llega directo al punto de venta.',
      'La configuración queda reservada para el dueño.',
    ],
  },
  {
    id: 'admin-config',
    title: 'Configuración + Promos',
    description:
      'Pones la identidad del local y activas tus promociones al instante.',
    desktopSrc: png('admin-config', 'desktop'),
    mobileSrc: png('admin-config', 'mobile'),
    area: 'puesta-en-marcha',
    highlights: [
      'Cargas nombre, logo y fondo de tu local.',
      'Activas y gestionas promociones del menú.',
      'Los cambios se ven al momento.',
    ],
  },
  {
    id: 'admin-categories',
    title: 'Categorías',
    description:
      'Armas la estructura del menú: secciones con iconos y un orden claro.',
    desktopSrc: png('admin-categories', 'desktop'),
    mobileSrc: png('admin-categories', 'mobile'),
    area: 'puesta-en-marcha',
    highlights: [
      'Creas categorías con nombre e icono.',
      'Reordenas las secciones como quedan mejor.',
      'Sumas nuevas secciones sin rehacer nada.',
    ],
  },
  {
    id: 'admin-products',
    title: 'Productos',
    description:
      'Cargas tus productos con precio y foto. Los reordenas con un arrastre.',
    desktopSrc: png('admin-products', 'desktop'),
    mobileSrc: png('admin-products', 'mobile'),
    area: 'puesta-en-marcha',
    highlights: [
      'Cargas productos con precio y descripción.',
      'Reordenas la carta arrastrando cada producto.',
      'Marcas el producto agotado y desaparece del menú.',
    ],
  },
  {
    id: 'admin-menu-preview',
    title: 'Vista previa del Menú',
    description:
      'Ves tu menú tal cual lo verá el cliente, antes de difundir el QR.',
    desktopSrc: png('admin-menu-preview', 'desktop'),
    mobileSrc: png('admin-menu-preview', 'mobile'),
    area: 'puesta-en-marcha',
    highlights: [
      'Revisas el menú en PC y en celular.',
      'Compruebas logo, colores y promociones.',
      'Evitas sorpresas cuando llega el cliente.',
    ],
  },

  // ─── El dueño ─────────────────────────────────────────────────────────
  {
    id: 'admin-dashboard',
    title: 'Dashboard',
    description:
      'Sabes cuánto vendiste hoy y qué plato se pidió más, en segundos.',
    desktopSrc: png('admin-dashboard', 'desktop'),
    mobileSrc: png('admin-dashboard', 'mobile'),
    area: 'dueno',
    highlights: [
      'Ves las ventas del día de un vistazo.',
      'Conoces los productos más vendidos.',
      'Decides qué impulsar sin planillas.',
    ],
  },
  {
    id: 'admin-shifts',
    title: 'Turnos',
    description:
      'Abres y cierras el turno del día y consultas cada cierre con su detalle.',
    desktopSrc: png('admin-shifts', 'desktop'),
    mobileSrc: png('admin-shifts', 'mobile'),
    area: 'dueno',
    highlights: [
      'Abres el turno y empiezas a vender.',
      'Cada cierre queda registrado con su detalle.',
      'Comparas la venta de cada turno al instante.',
    ],
  },
  {
    id: 'admin-qr',
    title: 'QR Menú',
    description:
      'Generas el QR de tu menú y lo imprimes con el tamaño justo.',
    desktopSrc: png('admin-qr', 'desktop'),
    mobileSrc: png('admin-qr', 'mobile'),
    area: 'dueno',
    highlights: [
      'Generas el QR de tu menú público.',
      'Eliges la resolución para imprimir.',
      'Lo colocas en mesas y barra.',
    ],
  },
  {
    id: 'admin-qr-wifi',
    title: 'QR WiFi',
    description:
      'Tus clientes se conectan a la red con un escaneo, sin tipear nada.',
    desktopSrc: png('admin-qr-wifi', 'desktop'),
    mobileSrc: png('admin-qr-wifi', 'mobile'),
    area: 'dueno',
    highlights: [
      'Generas un QR con los datos del WiFi.',
      'Los clientes se conectan al escanear.',
      'Dejas de deletrear la contraseña.',
    ],
  },
  {
    id: 'admin-sellers',
    title: 'Vendedores',
    description:
      'Das de alta a tu equipo para que cobre desde el punto de venta.',
    desktopSrc: png('admin-sellers', 'desktop'),
    mobileSrc: png('admin-sellers', 'mobile'),
    area: 'dueno',
    highlights: [
      'Creas la cuenta de cada vendedor.',
      'Cada venta queda asociada a quien la hizo.',
      'Das de baja al personal que ya no está.',
    ],
  },
  {
    id: 'admin-tickets',
    title: 'Tickets',
    description:
      'Consultas el historial completo de ventas y sabes quién vendió cuánto.',
    desktopSrc: png('admin-tickets', 'desktop'),
    mobileSrc: png('admin-tickets', 'mobile'),
    area: 'dueno',
    highlights: [
      'Revisas todas las ventas del día.',
      'Filtras por vendedor y por monto.',
      'Concilias la caja al cierre.',
    ],
  },
  {
    id: 'admin-db',
    title: 'Respaldo',
    description:
      'Haces una copia de seguridad de todo tu menú y tus ventas.',
    desktopSrc: png('admin-db', 'desktop'),
    mobileSrc: png('admin-db', 'mobile'),
    area: 'dueno',
    highlights: [
      'Exportas una copia de todo tu menú.',
      'Restauras datos si algo sale mal.',
      'Cambias de PC sin perder nada.',
    ],
  },
  {
    id: 'admin-printer',
    title: 'Impresora',
    description:
      'Conectas la impresora térmica y cada venta sale en ticket al instante.',
    desktopSrc: png('admin-printer', 'desktop'),
    mobileSrc: png('admin-printer', 'mobile'),
    area: 'dueno',
    highlights: [
      'Configuras la impresora térmica.',
      'Cada cierre de venta imprime su ticket.',
      'Ajustas el formato del comprobante.',
    ],
  },

  // ─── El cliente ─────────────────────────────────────────────────────────
  {
    id: 'menu-public',
    title: 'Menú Público',
    description:
      'El menú que tus clientes abren con la cámara: completo y con precios al día.',
    desktopSrc: png('menu-public', 'desktop'),
    mobileSrc: png('menu-public', 'mobile'),
    area: 'cliente',
    highlights: [
      'El cliente escanea con la cámara y abre el menú.',
      'Funciona sin internet, siempre.',
      'Sin apps, sin registros, sin datos personales.',
    ],
  },
  {
    id: 'menu-promotion',
    title: 'Menú + Promoción',
    description:
      'La promoción salta a la vista apenas el cliente abre el menú.',
    desktopSrc: png('menu-promotion', 'desktop'),
    mobileSrc: png('menu-promotion', 'mobile'),
    area: 'cliente',
    highlights: [
      'La promoción activa aparece en una burbuja.',
      'Todos la ven apenas abren el menú.',
      'Nadie necesita que le avisen.',
    ],
  },

  // ─── El vendedor ─────────────────────────────────────────────────────────
  {
    id: 'seller-pos',
    title: 'POS — Punto de Venta',
    description:
      'El vendedor carga la cuenta del cliente y el total se calcula solo.',
    desktopSrc: png('seller-pos', 'desktop'),
    mobileSrc: png('seller-pos', 'mobile'),
    area: 'vendedor',
    highlights: [
      'Cargas los productos del pedido.',
      'El total se calcula al momento.',
      'El ticket sale limpio al cobrar.',
    ],
  },
  {
    id: 'seller-cuentas',
    title: 'POS — Cuentas',
    description:
      'El vendedor lleva varias mesas en paralelo, cada una con su total.',
    desktopSrc: png('seller-cuentas', 'desktop'),
    mobileSrc: png('seller-cuentas', 'mobile'),
    area: 'vendedor',
    highlights: [
      'Abres una cuenta por mesa.',
      'Cada cuenta suma sus productos aparte.',
      'Vuelves a una mesa cuando el cliente la pide.',
    ],
  },
  {
    id: 'seller-tickets',
    title: 'POS — Tickets',
    description:
      'Cada vendedor consulta sus propias ventas del turno, sin mezclarse.',
    desktopSrc: png('seller-tickets', 'desktop'),
    mobileSrc: png('seller-tickets', 'mobile'),
    area: 'vendedor',
    highlights: [
      'Cada vendedor ve sus propios tickets.',
      'Consulta montos y estados.',
      'Rinde cuentas al final del turno.',
    ],
  },
];

export const AREAS: FunctionalArea[] = [
  {
    id: 'dueno',
    title: 'El dueño',
    description:
      'Ventas, QRs, equipo y respaldo: todo el control del negocio en una sola vista.',
    icon: ShieldCheck,
    viewIds: [
      'admin-dashboard',
      'admin-shifts',
      'admin-qr',
      'admin-qr-wifi',
      'admin-sellers',
      'admin-tickets',
      'admin-db',
      'admin-printer',
    ],
  },
  {
    id: 'puesta-en-marcha',
    title: 'Puesta en marcha',
    description:
      'Dejas tu local listo en minutos: identidad, carta completa y el QR para las mesas.',
    icon: Settings,
    viewIds: ['login', 'admin-config', 'admin-categories', 'admin-products', 'admin-menu-preview'],
  },
  {
    id: 'cliente',
    title: 'El cliente',
    description:
      'Todo lo que ve quien escanea el QR: menú al día y promociones a la vista.',
    icon: Smartphone,
    viewIds: ['menu-public', 'menu-promotion'],
  },
  {
    id: 'vendedor',
    title: 'El vendedor',
    description:
      'Cobrar con el punto de venta y rendir cuentas al final del turno.',
    icon: Receipt,
    viewIds: ['seller-pos', 'seller-cuentas', 'seller-tickets'],
  },
];

export const GET_STARTED_STEPS: GetStartedStep[] = [
  {
    icon: Store,
    title: 'Configuras tu local',
    description: 'Cargas el nombre, el logo y el fondo de tu negocio.',
  },
  {
    icon: Utensils,
    title: 'Armas las categorías',
    description: 'Categorías con iconos: tragos, picadas, dulces y lo que quieras.',
  },
  {
    icon: Package,
    title: 'Cargas los productos',
    description: 'Productos con precios, descripciones y estado de disponibilidad.',
  },
  {
    icon: ScanLine,
    title: 'Generas el QR del menú',
    description: 'Lo descargas, lo imprimes y lo cuelgas en las mesas.',
  },
  {
    icon: Rocket,
    title: 'Escanea y pruebas',
    description: 'Abres la app, escaneas el QR y miras el menú en tu celular.',
  },
];