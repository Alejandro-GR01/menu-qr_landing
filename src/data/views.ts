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

function avif(id: string, device: 'desktop' | 'mobile'): string {
  return `${BASE}views/${id}-${device}.avif`;
}

export const VIEWS: ViewEntry[] = [
  {
    id: 'admin-dashboard',
    title: 'Dashboard',
    description:
      'Panel principal con métricas del día: ventas, tickets y productos más vendidos.',
    desktopSrc: avif('admin-dashboard', 'desktop'),
    mobileSrc: avif('admin-dashboard', 'mobile'),
    tags: ['admin', 'dashboard'],
    area: 'admin',
    capabilities: [
      'Ver ventas y montos del día de un vistazo',
      'Conocer la cantidad de tickets cerrados',
      'Identificar los productos más vendidos',
    ],
    steps: [
      'Ingresas como admin para abrir el dashboard.',
      'Revisas los KPIs del día: ventas, tickets y promedios.',
      'Usas los rankings para decidir qué productos impulsar o reordenar.',
    ],
    useCase:
      'Al cierre del día quieres saber cuánto se vendió sin abrir una planilla — el dashboard te da el total en segundos y te muestra qué plato se llevó más pedidos.',
  },
  {
    id: 'login',
    title: 'Login',
    description:
      'Pantalla de inicio de sesión unificada para admin y vendedores.',
    desktopSrc: avif('login', 'desktop'),
    mobileSrc: avif('login', 'mobile'),
    tags: ['admin', 'vendedor'],
    area: 'admin',
    capabilities: [
      'Iniciar sesión como admin o como vendedor desde la misma pantalla',
      'Acceso con credenciales propias para cada rol',
      'Cada vendedor entra solo a sus funciones de POS, sin tocar la configuración',
    ],
    steps: [
      'Ingresas tu usuario y contraseña.',
      'Eliges el rol correspondiente (admin o vendedor).',
      'Entras al panel según tu perfil: admin al dashboard, vendedor al POS.',
    ],
    useCase:
      'Cuando tienes personal que cobra en el POS, cada vendedor entra con su propia cuenta y la app registra a quién corresponde cada ticket. Vos, como dueño, entras como admin con acceso a todo.',
  },
  {
    id: 'admin-config',
    title: 'Configuración + Promos',
    description:
      'Configuración del local (nombre, logo, fondo) y gestión de promociones activas.',
    desktopSrc: avif('admin-config', 'desktop'),
    mobileSrc: avif('admin-config', 'mobile'),
    tags: ['admin', 'configuración'],
    area: 'setup',
    capabilities: [
      'Configurar el nombre del local que se muestra en el menú',
      'Subir tu logo y elegir la imagen de fondo',
      'Crear y gestionar promociones activas del menú',
    ],
    steps: [
      'Andas a Configuración desde el panel admin.',
      'Cargas el nombre, el logo y el fondo de tu local.',
      'Creas una promoción y la activas para que aparezca en el menú público.',
    ],
    useCase:
      'El día que reinauguras con un logo nuevo o quieres lanzar un “2x1 en tragos”, lo cambias acá y el menú que ven tus clientes se actualiza al instante — sin reimprimir nada.',
  },
  {
    id: 'admin-categories',
    title: 'Categorías',
    description:
      'CRUD de categorías del menú con selector de iconos, nombre y orden personalizado.',
    desktopSrc: avif('admin-categories', 'desktop'),
    mobileSrc: avif('admin-categories', 'mobile'),
    tags: ['admin', 'CRUD'],
    area: 'setup',
    capabilities: [
      'Crear, editar y eliminar categorías del menú',
      'Elegir un icono para cada categoría (tragos, picadas, dulces…)',
      'Ordenar las categorías como quedan mejor en el menú',
    ],
    steps: [
      'Desde Categorías creas una nueva y le pones nombre.',
      'Le seleccionas un icono que la identifique a simple vista.',
      'La ordenas arrastrándola para definir la secuencia del menú.',
    ],
    useCase:
      'Cuando sumas una nueva sección de la carta, como “Menú del mediodía”, la creas con su icono y aparece en el lugar que elijas sin rehacer el menú completo.',
  },
  {
    id: 'admin-products',
    title: 'Productos',
    description:
      'CRUD de productos con drag & drop para reordenar, disponibles/no disponibles y productos porcionables.',
    desktopSrc: avif('admin-products', 'desktop'),
    mobileSrc: avif('admin-products', 'mobile'),
    tags: ['admin', 'CRUD'],
    area: 'setup',
    capabilities: [
      'Cargar productos con nombre, descripción y precio',
      'Arrastrar y soltar para reordenar el menú',
      'Marcar un producto como no disponible si se agotó',
      'Definir productos porcionables (ej. se sirve por peso)',
    ],
    steps: [
      'Agregas un producto y lo asignas a su categoría.',
      'Completas la descripción, el precio y, si aplica, lo marcas como porcionable.',
      'Lo arrastras para reordenarlo dentro de la categoría.',
      'Lo marcas como no disponible si se agota en el día.',
    ],
    useCase:
      'Cuando se te acaba la milanesa a la mitad del servicio, la marcas no disponible y desaparece del menú que ven tus clientes al instante — evitas que pidan algo que no tienes.',
  },
  {
    id: 'admin-qr',
    title: 'QR Menú',
    description:
      'Generador del QR del menú público con resolución configurable y descarga personalizada.',
    desktopSrc: avif('admin-qr', 'desktop'),
    mobileSrc: avif('admin-qr', 'mobile'),
    tags: ['admin', 'QR'],
    area: 'cliente',
    capabilities: [
      'Generar el QR que apunta al menú público de tu local',
      'Elegir la resolución según dónde lo imprimas',
      'Descargar el QR con un nombre personalizado',
    ],
    steps: [
      'Andas a la sección QR y eliges la pestaña del menú.',
      'Seleccionas la resolución según donde lo vayas a imprimir.',
      'Descargas el QR y lo colocas en las mesas o la barra.',
    ],
    useCase:
      'Cuando imprimes el QR para las cartas de las mesas, eliges una resolución alta para que escanee bien de lejos; el cliente lo acerca y abre tu menú sin instalar nada.',
  },
  {
    id: 'admin-qr-wifi',
    title: 'QR WiFi',
    description:
      'Generador del QR de la red WiFi para que los clientes se conecten automáticamente al escanear.',
    desktopSrc: avif('admin-qr-wifi', 'desktop'),
    mobileSrc: avif('admin-qr-wifi', 'mobile'),
    tags: ['admin', 'QR'],
    area: 'cliente',
    capabilities: [
      'Configurar red, SSID, contraseña y encriptación',
      'Generar un QR que conecta al WiFi al escanearlo',
      'Evitar que los clientes tipeen la contraseña a mano',
    ],
    steps: [
      'En la sección QR, abres la pestaña WiFi.',
      'Cargas el nombre de la red, la contraseña y el tipo de encriptación.',
      'Generas y descargas el QR para imprimirlo en el local.',
    ],
    useCase:
      'Cuando tus clientes te piden la contraseña del WiFi, el QR la resuelve en un escaneo sin que tengan que tipearla — y no tienes que deletrearla cada vez.',
  },
  {
    id: 'admin-menu-preview',
    title: 'Vista previa del Menú',
    description:
      'Previsualización del menú público renderizado con logo, colores, fondo y promoción configurados.',
    desktopSrc: avif('admin-menu-preview', 'desktop'),
    mobileSrc: avif('admin-menu-preview', 'mobile'),
    tags: ['admin', 'preview'],
    area: 'setup',
    capabilities: [
      'Ver exactamente cómo queda el menú antes de publicarlo',
      'Comprobar que logo, colores, fondo y promoción se ven bien',
      'Ver la misma vista en desktop y en celular',
    ],
    steps: [
      'Configuras el nombre, logo, colores y fondo del local.',
      'Abres la Vista previa del menú.',
      'Revisas cómo se ve en desktop y en celular antes de imprimir el QR.',
    ],
    useCase:
      'Antes de mandar a imprimir el QR, revisas la vista previa para asegurarte de que tu logo y tus colores se vean prolijos — no hay sorpresas cuando llega el cliente.',
  },
  {
    id: 'admin-sellers',
    title: 'Vendedores',
    description:
      'Gestión de vendedores para el modo POS: alta, edición, baja y credenciales de acceso.',
    desktopSrc: avif('admin-sellers', 'desktop'),
    mobileSrc: avif('admin-sellers', 'mobile'),
    tags: ['admin', 'vendedor', 'configuración'],
    area: 'admin',
    capabilities: [
      'Dar de alta vendedores que van a usar el POS',
      'Editar datos y asignar credenciales de acceso',
      'Dar de baja vendedores que ya no trabajan',
    ],
    steps: [
      'Andas a Vendedores desde el panel admin.',
      'Cargas un nuevo vendedor y le asignas sus credenciales.',
      'Lo editas o lo das de baja cuando cambie el personal.',
    ],
    useCase:
      'Cuando sumas a alguien al equipo de mozos que va a cobrar desde el POS, le creas su cuenta con sus credenciales y desde ahí registra sus propios tickets.',
  },
  {
    id: 'admin-tickets',
    title: 'Tickets',
    description:
      'Historial de tickets/ventas con montos, vendedor y estado para auditoría.',
    desktopSrc: avif('admin-tickets', 'desktop'),
    mobileSrc: avif('admin-tickets', 'mobile'),
    tags: ['admin', 'tickets'],
    area: 'admin',
    capabilities: [
      'Ver el historial completo de tickets y ventas',
      'Filtrar por vendedor, monto y estado',
      'Auditar qué vendió y quién lo vendió',
    ],
    steps: [
      'Entras a la sección de Tickets del panel admin.',
      'Revisas el historial con montos y estados.',
      'Filtras por vendedor para auditar las ventas de cada uno.',
    ],
    useCase:
      'Al cierre del día quieres conciliar la caja: entras a Tickets, filtras por vendedor y comprobas punto por punto qué vendió cada uno y por cuánto.',
  },
  {
    id: 'admin-printer',
    title: 'Impresora',
    description:
      'Configuración de la impresora térmica para tickets de venta.',
    desktopSrc: avif('admin-printer', 'desktop'),
    mobileSrc: avif('admin-printer', 'mobile'),
    tags: ['admin', 'configuración'],
    area: 'operacion',
    capabilities: [
      'Configurar la impresora térmica del local',
      'Emitir tickets de venta desde el POS',
      'Ajustar el ancho y formato del ticket impreso',
    ],
    steps: [
      'Conectas la impresora térmica a la PC que corre la app.',
      'La configuras desde la sección Impresora.',
      'Probas imprimir un ticket del POS.',
    ],
    useCase:
      'Cuando el mozo cobra desde el POS, quieres que salga el ticket impreso al instante — unos segundos después de cerrar la venta, la impresora térmica lo emite listo para entregar.',
  },
  {
    id: 'admin-db',
    title: 'Backup / Restore',
    description:
      'Exportación e importación de la base de datos desde el panel de administración.',
    desktopSrc: avif('admin-db', 'desktop'),
    mobileSrc: avif('admin-db', 'mobile'),
    tags: ['admin', 'configuración'],
    area: 'admin',
    capabilities: [
      'Exportar una copia de seguridad de toda la base de datos',
      'Restaurar datos desde una copia previa',
      'Asegurar tu menú, precios y ventas ante cualquier imprevisto',
    ],
    steps: [
      'Andas a Backup desde el panel admin.',
      'Exportas la base de datos para guardar una copia.',
      'Si lo necesitas, lo restauras desde una copia guardada.',
    ],
    useCase:
      'Antes de un cambio grande o al cambiarte de PC, exportas la base — si algo sale mal, restauras y tu menú y tus ventas vuelven exactamente como estaban.',
  },
  {
    id: 'menu-public',
    title: 'Menú Público',
    description:
      'Vista del menú que ven los clientes al escanear el QR: categorías, productos, precios y descripciones.',
    desktopSrc: avif('menu-public', 'desktop'),
    mobileSrc: avif('menu-public', 'mobile'),
    tags: ['público', 'menú'],
    area: 'cliente',
    capabilities: [
      'Mostrar las categorías y productos con sus precios',
      'Funcionar 100% sin internet desde la PC del local',
      'Abierto desde cualquier celular con la cámara, sin instalar nada',
    ],
    steps: [
      'El cliente escanea el QR con la cámara de su celular.',
      'Se abre el menú con categorías, productos y precios.',
      'Navegas las secciones y decides qué pedir.',
    ],
    useCase:
      'Un cliente sentado en la mesa escanea el QR y ve tu carta completa con precios al día — aunque se caiga internet, el menú sigue andando porque se sirve desde tu PC.',
  },
  {
    id: 'menu-promotion',
    title: 'Menú + Promoción',
    description:
      'Menú público con burbuja flotante de promoción activa para captar la atención de los clientes.',
    desktopSrc: avif('menu-promotion', 'desktop'),
    mobileSrc: avif('menu-promotion', 'mobile'),
    tags: ['público', 'menú'],
    area: 'cliente',
    capabilities: [
      'Mostrar la promoción activa en una burbuja flotante',
      'Captar la atención del cliente apenas abre el menú',
      'Combinar promociones con el menú completo',
    ],
    steps: [
      'Activas una promoción desde la configuración del local.',
      'El cliente escanea el QR y ve la burbuja al abrir el menú.',
      'La abres para conocer los detalles de la promo.',
    ],
    useCase:
      'Quieres que todos vean que hoy hay “2x1 en picadas” — activas la promoción y la burbuja salta apenas el cliente abre el menú, sin que nadie tenga que anunciarlo.',
  },
  {
    id: 'seller-pos',
    title: 'POS — Punto de Venta',
    description:
      'Punto de venta para vendedores: carga de productos, cálculo de total y cierre de ticket.',
    desktopSrc: avif('seller-pos', 'desktop'),
    mobileSrc: avif('seller-pos', 'mobile'),
    tags: ['vendedor', 'POS'],
    area: 'operacion',
    capabilities: [
      'Cargar productos y armar la cuenta del cliente',
      'Calcular el total automáticamente',
      'Cerrar el ticket e imprimirlo (si hay impresora)',
    ],
    steps: [
      'El vendedor entra a su cuenta e ingresa al POS.',
      'Agregas los productos que va pidiendo el cliente.',
      'El total se calcula solo y cierra el ticket al cobrar.',
    ],
    useCase:
      'Un mozo toma el pedido, carga cada ítem en el POS y el total se calcula al instante — el ticket sale limpio y no hay errores de suma a mano.',
  },
  {
    id: 'seller-tickets',
    title: 'POS — Tickets',
    description:
      'Tickets del vendedor: historial de sus propias ventas con montos y estados.',
    desktopSrc: avif('seller-tickets', 'desktop'),
    mobileSrc: avif('seller-tickets', 'mobile'),
    tags: ['vendedor', 'tickets'],
    area: 'operacion',
    capabilities: [
      'Ver el historial de las ventas propias del vendedor',
      'Consultar montos y estados de cada ticket',
      'Conciliar lo vendido a lo largo del turno',
    ],
    steps: [
      'El vendedor entra a la sección de sus tickets.',
      'Revisa sus ventas con montos y estados.',
      'Usas el historial para rendir cuentas al final del turno.',
    ],
    useCase:
      'Al terminar el turno, cada vendedor consulta sus propios tickets y sabe cuánto vendió — sin mezclarse con las ventas de otros.',
  },
];

export const AREAS: FunctionalArea[] = [
  {
    id: 'admin',
    title: 'Administración',
    description:
      'Vista completa del negocio: acceso, métricas, vendedores, ventas y respaldo.',
    icon: ShieldCheck,
    viewIds: ['login', 'admin-dashboard', 'admin-sellers', 'admin-tickets', 'admin-db'],
  },
  {
    id: 'setup',
    title: 'Puesta en marcha',
    description:
      'Dejas tu local listo en minutos: identidad, carta completa y el QR para las mesas.',
    icon: Settings,
    viewIds: ['admin-config', 'admin-categories', 'admin-products', 'admin-menu-preview'],
  },
  {
    id: 'cliente',
    title: 'Cliente',
    description:
      'Todo lo que ve y usa quien escanea el QR: menú, promos y conexión al WiFi.',
    icon: Smartphone,
    viewIds: ['admin-qr', 'admin-qr-wifi', 'menu-public', 'menu-promotion'],
  },
  {
    id: 'operacion',
    title: 'Operación diaria',
    description:
      'El día a día en el local: vendedores cobrando con el POS y emitiendo tickets.',
    icon: Receipt,
    viewIds: ['seller-pos', 'seller-tickets', 'admin-printer'],
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
