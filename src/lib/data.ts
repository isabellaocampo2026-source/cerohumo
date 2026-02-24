// ============================================
// Cero Humo — Centralized Data
// ============================================

export const WHATSAPP_LINK =
  "https://wa.me/573053476462?text=Hola%2C%20quiero%20más%20info%20sobre%20SEO%20local";
export const WHATSAPP_PHONE = "+57 305 3476462";
export const SITE_URL = "https://cerohumo.lat";

// --- Types ---

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  text: string;
  name: string;
  business: string;
}

export interface CaseStudy {
  text: string;
}

export interface ServiceBullet {
  text: string;
}

export interface NAPData {
  name: string;
  address: string;
  phone: string;
  hours: string;
  mapQuery: string;
}

export interface LandingPageData {
  slug: string;
  citySlug: string;
  city: string;
  title: string;
  metaDescription: string;
  h1: string;
  subtitle: string;
  trustText: string;
  problemTitle: string;
  problemText: string;
  servicesTitle: string;
  services: ServiceBullet[];
  resultsTitle: string;
  cases: CaseStudy[];
  testimonials: Testimonial[];
  faqs: FAQItem[];
  nap: NAPData;
  schemaName: string;
  schemaUrl: string;
  ctaTitle: string;
  ctaSubtitle: string;
  otherServicesInCity: { label: string; href: string }[];
}

export interface CityHubData {
  slug: string;
  city: string;
  title: string;
  metaDescription: string;
  h1: string;
  subtitle: string;
  text: string;
  services: { label: string; href: string }[];
}

// --- City Hubs ---

export const cityHubs: CityHubData[] = [
  {
    slug: "bogota",
    city: "Bogotá",
    title: "SEO Local en Bogotá | Cero Humo — Tu Negocio en Google",
    metaDescription:
      "Servicio de SEO local en Bogotá. Posicionamos tu negocio en Google Maps y búsquedas locales. Agencia de marketing digital enfocada en resultados. Escríbenos.",
    h1: "SEO Local en Bogotá",
    subtitle:
      "Posicionamos tu negocio en Google para que los clientes en Bogotá te encuentren.",
    text: "Bogotá es una ciudad de más de 8 millones de personas. Cada día, miles de personas buscan servicios locales en Google: dentistas, restaurantes, abogados, talleres, tiendas. Si tu negocio no está en los primeros resultados de Google Maps, estás perdiendo clientes frente a tu competencia. En Cero Humo nos especializamos en SEO local para negocios en Bogotá. Desde Chapinero hasta Kennedy, desde Usaquén hasta Bosa, hacemos que te encuentren las personas que ya están buscando lo que tú vendes.",
    services: [
      {
        label: "Agencia de Marketing Digital en Bogotá",
        href: "/bogota/agencia-de-marketing-digital",
      },
      {
        label: "Empresas de Marketing en Bogotá",
        href: "/bogota/empresas-de-marketing",
      },
      {
        label: "Consultor SEO y Marketing en Bogotá",
        href: "/bogota/consultor-seo-y-marketing",
      },
    ],
  },
  {
    slug: "medellin",
    city: "Medellín",
    title: "SEO Local en Medellín | Cero Humo — Tu Negocio en Google",
    metaDescription:
      "SEO local en Medellín. Posicionamos tu negocio en Google Maps en El Poblado, Laureles, Envigado y todo el Valle de Aburrá. Escríbenos por WhatsApp.",
    h1: "SEO Local en Medellín",
    subtitle:
      "Hacemos que te encuentren en Google en Medellín y todo el Valle de Aburrá.",
    text: "Medellín es el hub de emprendimiento más dinámico de Colombia. La competencia digital crece cada semana en El Poblado, Laureles, Envigado, Sabaneta e Itagüí. Si tu negocio no aparece en Google Maps cuando alguien busca tu servicio, se va con otro. Sin pensarlo. En Cero Humo posicionamos negocios locales en todo el Valle de Aburrá. Hacemos que te encuentren las personas que ya están buscando activamente lo que tú ofreces.",
    services: [
      {
        label: "Agencia de Marketing Digital en Medellín",
        href: "/medellin/agencia-de-marketing-digital",
      },
    ],
  },
  {
    slug: "barranquilla",
    city: "Barranquilla",
    title: "SEO Local en Barranquilla | Cero Humo — Tu Negocio en Google",
    metaDescription:
      "SEO local en Barranquilla. Posicionamos tu negocio en Google Maps y búsquedas locales en el norte, centro y área metropolitana. Escríbenos.",
    h1: "SEO Local en Barranquilla",
    subtitle: "Tu negocio en Barranquilla visible en Google. Sin humo.",
    text: "Barranquilla está creciendo a un ritmo brutal. Negocios nuevos abren todos los días en el norte, Villa Country, el centro y toda el área metropolitana. La ventaja es que hay menos competencia digital que en Bogotá o Medellín, lo que significa que posicionarse ahora es más rápido y más barato. En Cero Humo hacemos SEO local para negocios en Barranquilla, Soledad, Malambo, Puerto Colombia y todo el área metropolitana.",
    services: [
      {
        label: "Agencia de Marketing Digital en Barranquilla",
        href: "/barranquilla/agencia-de-marketing-digital",
      },
    ],
  },
];

// --- Landing Pages ---

export const landingPages: LandingPageData[] = [
  // ---- BOGOTÁ: Agencia de Marketing Digital ----
  {
    slug: "agencia-de-marketing-digital",
    citySlug: "bogota",
    city: "Bogotá",
    title: "Agencia de Marketing Digital en Bogotá | Cero Humo — SEO Local",
    metaDescription:
      "Agencia de marketing digital en Bogotá enfocada en SEO local. Hacemos que tus clientes te encuentren en Google. +80 negocios posicionados. Escríbenos.",
    h1: "Agencia de Marketing Digital en Bogotá",
    subtitle:
      "Hacemos que tu negocio aparezca primero en Google cuando alguien en Bogotá busca lo que tú vendes.",
    trustText: "⭐ 4.9 en Google · +35 negocios en Bogotá",
    problemTitle:
      "Tus clientes te están buscando en Google. Y encuentran a tu competencia.",
    problemText:
      "En Bogotá hay más de 400 mil negocios. La mayoría no aparece en Google cuando alguien busca su servicio. Si tienes un negocio en Chapinero, Usaquén, Kennedy, Suba o cualquier zona de Bogotá y no estás en los primeros resultados de Google Maps, estás regalando clientes todos los días.\n\nNo necesitas más seguidores. No necesitas un logo nuevo. Necesitas que te encuentren las personas que ya están buscando lo que vendes. Eso es lo que hacemos.",
    servicesTitle: "Esto es lo que hacemos por tu negocio en Bogotá",
    services: [
      { text: "Optimización de tu perfil de Google Business para aparecer en Google Maps" },
      { text: "Posicionamiento web en las búsquedas que tus clientes hacen en Bogotá" },
      { text: "Estrategia de keywords locales enfocadas en tu zona y tu servicio" },
      { text: "Generación de reseñas reales de tus clientes en Google" },
      { text: "Reportes mensuales con métricas claras: llamadas, visitas, clics" },
      { text: "Optimización continua basada en datos, no en suposiciones" },
    ],
    resultsTitle: "Resultados en Bogotá",
    cases: [
      {
        text: "La Barra Roja, restaurante en Chapinero. En 3 meses pasaron de 4 a 38 llamadas mensuales desde Google Maps. Hoy tienen lista de espera los viernes.",
      },
      {
        text: "Dentiq, clínica dental en Usaquén. Posicionados en el top 3 de Google para 'dentista en Usaquén'. +52 pacientes nuevos en el primer trimestre.",
      },
    ],
    testimonials: [
      {
        text: "Llevaba dos años con la página web y nadie me encontraba. En dos meses con Cero Humo empecé a recibir llamadas de Google. Literal, sin humo.",
        name: "Carlos Méndez",
        business: "Dueño de ferretería en Kennedy",
      },
      {
        text: "Me dijeron exactamente qué iban a hacer y lo cumplieron. Mi consultorio aparece primero en Google Maps en mi zona. Eso es lo que necesitaba.",
        name: "Dra. Andrea Salazar",
        business: "Odontóloga en Chapinero",
      },
      {
        text: "Contraté tres agencias antes. Mucho humo, cero resultados. Estos manes son diferentes. Resultados en 8 semanas.",
        name: "Javier Ruiz",
        business: "Abogado en Usaquén",
      },
    ],
    faqs: [
      {
        question: "¿Cuánto cuesta el servicio de marketing digital en Bogotá?",
        answer:
          "Nuestros planes de SEO local en Bogotá arrancan desde $800.000 COP mensuales. El precio depende de tu sector, la competencia en tu zona y los objetivos que tengas. Escríbenos y te damos un número exacto sin compromiso.",
      },
      {
        question: "¿En cuánto tiempo veo resultados?",
        answer:
          "Los primeros resultados los ves entre 4 y 8 semanas. Mejoras en Google Maps suelen ser más rápidas. El posicionamiento orgánico toma más tiempo. Te damos un timeline realista desde el día uno, sin promesas falsas.",
      },
      {
        question: "¿Trabajan con negocios pequeños en Bogotá?",
        answer:
          "Sí. La mayoría de nuestros clientes son negocios locales: restaurantes, consultorios, talleres, tiendas, estudios de abogados. Si tus clientes te buscan en Google en Bogotá, te podemos ayudar.",
      },
      {
        question: "¿Qué necesito para empezar?",
        answer:
          "Solo necesitas escribirnos por WhatsApp. Analizamos tu situación actual en Google, te decimos qué se puede hacer y te damos una propuesta. Sin compromiso. Si te convence, arrancamos.",
      },
      {
        question: "¿Hacen contratos largos?",
        answer:
          "No. Trabajamos mes a mes. Si no ves resultados, te vas. Así de simple. Nos ganamos tu permanencia con resultados, no con cláusulas.",
      },
    ],
    nap: {
      name: "Cero Humo — Agencia de Marketing Digital en Bogotá",
      address: "Bogotá, Colombia",
      phone: "+57 305 3476462",
      hours: "Lunes a Viernes 8:00 AM - 6:00 PM",
      mapQuery: "Bogotá,Colombia",
    },
    schemaName: "Cero Humo — Agencia de Marketing Digital en Bogotá",
    schemaUrl: "https://cerohumo.lat/bogota/agencia-de-marketing-digital/",
    ctaTitle: "¿Quieres más clientes en Bogotá?",
    ctaSubtitle:
      "Escríbenos. Te decimos exactamente qué podemos hacer por tu negocio.",
    otherServicesInCity: [
      {
        label: "Empresas de Marketing en Bogotá",
        href: "/bogota/empresas-de-marketing",
      },
      {
        label: "Consultor SEO y Marketing en Bogotá",
        href: "/bogota/consultor-seo-y-marketing",
      },
    ],
  },

  // ---- BOGOTÁ: Empresas de Marketing ----
  {
    slug: "empresas-de-marketing",
    citySlug: "bogota",
    city: "Bogotá",
    title:
      "Empresas de Marketing en Bogotá | Cero Humo — SEO Local que Funciona",
    metaDescription:
      "¿Buscas empresas de marketing en Bogotá que den resultados reales? En Cero Humo hacemos SEO local para que tus clientes te encuentren en Google. Escríbenos.",
    h1: "Empresas de Marketing en Bogotá",
    subtitle:
      "No somos una empresa de marketing más. Somos la que hace que te encuentren en Google cuando tus clientes buscan lo que vendes en Bogotá.",
    trustText: "⭐ 4.9 en Google · +35 negocios en Bogotá",
    problemTitle:
      "Hay cientos de empresas de marketing en Bogotá. La mayoría te vende humo.",
    problemText:
      "Te ofrecen manejo de redes, diseño de logos, fotos bonitas para Instagram. Todo eso está bien. Pero nada de eso te trae clientes que ya están buscando tu servicio en Google ahora mismo.\n\nSi alguien en Suba busca 'plomero cerca de mí' o en Teusaquillo busca 'restaurante italiano', y tú no apareces... da igual cuántos likes tengas en Instagram. Estás perdiendo ventas reales todos los días.\n\nNosotros solo hacemos una cosa: que aparezcas en Google cuando tus clientes te buscan en Bogotá. Eso.",
    servicesTitle: "Esto es lo que hacemos por tu negocio en Bogotá",
    services: [
      { text: "Te posicionamos en Google Maps para búsquedas locales en Bogotá" },
      { text: "Optimizamos tu presencia en Google para las keywords que importan" },
      { text: "Trabajamos las zonas de Bogotá donde están tus clientes: Suba, Engativá, Fontibón, Teusaquillo, La Candelaria, Bosa" },
      { text: "Medimos todo: llamadas, clics, visitas a tu perfil" },
      { text: "Sin contratos largos. Mes a mes. Resultados o te vas." },
    ],
    resultsTitle: "Resultados en Bogotá",
    cases: [
      {
        text: "AutoLux, taller mecánico en Fontibón. No aparecía en Google. En 6 semanas estaba en el top 3 de 'taller mecánico Fontibón'. 27 llamadas nuevas el primer mes.",
      },
      {
        text: "Estética Bella, centro de estética en Suba. De 0 visitas desde Google a 120 visitas mensuales a su perfil en 2 meses. Agenda llena los sábados.",
      },
    ],
    testimonials: [
      {
        text: "Probé con dos empresas de marketing antes. Me vendieron redes sociales, diseño, de todo. Cero clientes nuevos. Con Cero Humo, en 5 semanas ya tenía llamadas de Google.",
        name: "Patricia Gómez",
        business: "Dueña de peluquería en Engativá",
      },
      {
        text: "Lo que más valoro es que no me enredaron. Me dijeron: esto hacemos, esto cuesta, en este tiempo ves resultados. Y cumplieron.",
        name: "Roberto Martínez",
        business: "Veterinaria en Suba",
      },
      {
        text: "Mi negocio estaba invisible en internet. Ahora cuando buscas 'ferretería en Kennedy' salgo de primero. Las ventas subieron un 40%.",
        name: "Óscar Peña",
        business: "Ferretería en Kennedy",
      },
    ],
    faqs: [
      {
        question:
          "¿Qué diferencia a Cero Humo de otras empresas de marketing en Bogotá?",
        answer:
          "Solo hacemos SEO local. No te vamos a ofrecer manejar tus redes, diseñarte un logo o hacer videos para TikTok. Nos enfocamos en una sola cosa: que aparezcas en Google cuando tus clientes en Bogotá buscan lo que vendes. Y lo hacemos muy bien.",
      },
      {
        question: "¿El SEO local funciona para cualquier tipo de negocio?",
        answer:
          "Funciona para cualquier negocio que tenga clientes locales que lo busquen en Google: restaurantes, clínicas, talleres, abogados, tiendas, gimnasios, servicios a domicilio. Si la gente busca tu servicio en Google en Bogotá, funciona.",
      },
      {
        question: "¿Cuánto cuesta trabajar con ustedes?",
        answer:
          "Depende de tu sector y competencia en Bogotá. Los planes arrancan desde $800.000 COP al mes. Escríbenos por WhatsApp y te damos un presupuesto exacto sin compromiso.",
      },
      {
        question: "¿Tengo que tener página web?",
        answer:
          "No necesariamente. Con un perfil de Google Business bien optimizado ya puedes recibir llamadas y clientes. Si no tienes web, te orientamos. Pero no es obligatorio para empezar.",
      },
    ],
    nap: {
      name: "Cero Humo — Empresas de Marketing en Bogotá",
      address: "Bogotá, Colombia",
      phone: "+57 305 3476462",
      hours: "Lunes a Viernes 8:00 AM - 6:00 PM",
      mapQuery: "Bogotá,Colombia",
    },
    schemaName: "Cero Humo — Empresas de Marketing en Bogotá",
    schemaUrl: "https://cerohumo.lat/bogota/empresas-de-marketing/",
    ctaTitle: "¿Quieres más clientes en Bogotá?",
    ctaSubtitle:
      "Escríbenos. Te decimos exactamente qué podemos hacer por tu negocio.",
    otherServicesInCity: [
      {
        label: "Agencia de Marketing Digital en Bogotá",
        href: "/bogota/agencia-de-marketing-digital",
      },
      {
        label: "Consultor SEO y Marketing en Bogotá",
        href: "/bogota/consultor-seo-y-marketing",
      },
    ],
  },

  // ---- BOGOTÁ: Consultor SEO ----
  {
    slug: "consultor-seo-y-marketing",
    citySlug: "bogota",
    city: "Bogotá",
    title: "Consultor SEO y Marketing en Bogotá | Cero Humo — SEO Local",
    metaDescription:
      "Consultor SEO y marketing en Bogotá. Especialistas en SEO local para negocios. Te posicionamos en Google Maps y búsquedas locales. Escríbenos por WhatsApp.",
    h1: "Consultor SEO y Marketing en Bogotá",
    subtitle:
      "Consultoría SEO enfocada en una sola cosa: que tu negocio en Bogotá aparezca en Google cuando tus clientes te buscan.",
    trustText: "⭐ 4.9 en Google · +35 negocios en Bogotá",
    problemTitle:
      'No necesitas un "consultor" que te haga un PDF bonito. Necesitas resultados.',
    problemText:
      "La mayoría de consultores SEO te hacen una auditoría de 40 páginas que no entiendes, te cobran y desaparecen. O peor: te dan 'recomendaciones' que tú tienes que implementar solo.\n\nSi tienes un negocio en Bogotá, en Chapinero, en el norte, en Teusaquillo, en cualquier zona, y quieres que te encuentren en Google, necesitas alguien que lo haga por ti. Que lo ejecute. Que te traiga llamadas y clientes, no documentos.\n\nEso hacemos. Somos el consultor SEO que no te vende humo.",
    servicesTitle: "Esto es lo que hacemos por tu negocio en Bogotá",
    services: [
      { text: "Auditoría real de tu visibilidad en Google en Bogotá (gratis)" },
      { text: "Estrategia SEO local personalizada para tu negocio y tu zona" },
      { text: "Ejecución completa: nosotros lo hacemos todo, tú te enfocas en tu negocio" },
      { text: "Optimización de Google Maps y búsquedas orgánicas locales" },
      { text: "Seguimiento mensual con números reales, no métricas de vanidad" },
      { text: "Acceso directo por WhatsApp. Sin tickets. Sin esperas." },
    ],
    resultsTitle: "Resultados en Bogotá",
    cases: [
      {
        text: "Dr. Jurídico, bufete de abogados en Teusaquillo. Posicionados en top 3 para 'abogado laboral Bogotá' en 10 semanas. 15 consultas nuevas mensuales desde Google.",
      },
      {
        text: "Pet House, veterinaria en el norte de Bogotá. De no aparecer en Google Maps a ser el resultado #1 en su zona. 33 llamadas nuevas al mes.",
      },
    ],
    testimonials: [
      {
        text: "Hablé con 4 consultores SEO. Tres me mandaron propuestas enormes que no entendí. Cero Humo me dijo en 5 minutos qué iban a hacer y cuándo iba a ver resultados. Y cumplieron.",
        name: "Martín Roa",
        business: "Arquitecto en Chapinero",
      },
      {
        text: "Necesitaba alguien que hiciera el trabajo, no que me diera tareas a mí. Ellos se encargan de todo. Yo solo veo cómo llegan las llamadas.",
        name: "Laura Díaz",
        business: "Fisioterapeuta en Usaquén",
      },
      {
        text: "El mejor dinero que he invertido en marketing en 5 años. Y lo digo habiendo gastado millones en cosas que no funcionaron.",
        name: "Felipe Arias",
        business: "Dueño de gimnasio en Suba",
      },
    ],
    faqs: [
      {
        question: "¿Qué hace un consultor SEO exactamente?",
        answer:
          "Un consultor SEO analiza cómo está tu negocio en Google y crea una estrategia para que aparezcas en los primeros resultados. En Cero Humo no solo te decimos qué hacer, lo hacemos por ti. Ejecución completa.",
      },
      {
        question: "¿Cuál es la diferencia entre SEO normal y SEO local?",
        answer:
          "El SEO local se enfoca en que aparezcas en Google Maps y en búsquedas con intención local. Por ejemplo: 'dentista en Chapinero' o 'restaurante cerca de mí'. Es lo que necesita un negocio que atiende clientes en una zona geográfica.",
      },
      {
        question: "¿Necesito conocimientos técnicos?",
        answer:
          "Cero. Nosotros nos encargamos de todo. Tú solo necesitas atender a los clientes nuevos que te llegan desde Google.",
      },
      {
        question: "¿Cuánto cuesta la consultoría SEO?",
        answer:
          "La auditoría inicial es gratis. Los planes de ejecución mensual arrancan desde $800.000 COP. Escríbenos por WhatsApp y te damos un presupuesto exacto según tu negocio.",
      },
    ],
    nap: {
      name: "Cero Humo — Consultor SEO y Marketing en Bogotá",
      address: "Bogotá, Colombia",
      phone: "+57 305 3476462",
      hours: "Lunes a Viernes 8:00 AM - 6:00 PM",
      mapQuery: "Bogotá,Colombia",
    },
    schemaName: "Cero Humo — Consultor SEO y Marketing en Bogotá",
    schemaUrl: "https://cerohumo.lat/bogota/consultor-seo-y-marketing/",
    ctaTitle: "¿Quieres más clientes en Bogotá?",
    ctaSubtitle:
      "Escríbenos. Te decimos exactamente qué podemos hacer por tu negocio.",
    otherServicesInCity: [
      {
        label: "Agencia de Marketing Digital en Bogotá",
        href: "/bogota/agencia-de-marketing-digital",
      },
      {
        label: "Empresas de Marketing en Bogotá",
        href: "/bogota/empresas-de-marketing",
      },
    ],
  },

  // ---- MEDELLÍN: Agencia de Marketing Digital ----
  {
    slug: "agencia-de-marketing-digital",
    citySlug: "medellin",
    city: "Medellín",
    title:
      "Agencia de Marketing Digital en Medellín | Cero Humo — SEO Local",
    metaDescription:
      "Agencia de marketing digital en Medellín especializada en SEO local. Hacemos que tus clientes te encuentren en Google Maps. Escríbenos por WhatsApp.",
    h1: "Agencia de Marketing Digital en Medellín",
    subtitle:
      "Hacemos que tu negocio en Medellín aparezca en Google cuando alguien busca lo que tú vendes. Sin humo.",
    trustText: "⭐ 4.9 en Google · +20 negocios en Medellín",
    problemTitle:
      "Medellín es la ciudad más competitiva de Colombia para negocios. ¿Y tú no apareces en Google?",
    problemText:
      "Medellín se mueve rápido. Emprendimientos por todos lados. Competencia brutal en El Poblado, Laureles, Envigado, Belén, Sabaneta. Si alguien busca tu servicio en Google y no te encuentra, se va con el que sí aparece. Así de simple.\n\nNo te estamos vendiendo seguidores ni likes. Te estamos diciendo que podemos hacer que cuando alguien en Medellín busque 'dentista cerca de mí' o 'restaurante en Laureles' o 'abogado en El Poblado', TÚ aparezcas. En Google Maps. En los primeros resultados. Ahí donde la gente hace clic y llama.",
    servicesTitle: "Esto es lo que hacemos por tu negocio en Medellín",
    services: [
      { text: "Te posicionamos en Google Maps en Medellín y su área metropolitana" },
      { text: "Optimización para búsquedas locales en El Poblado, Laureles, Envigado, Belén, Sabaneta, La Estrella, Itagüí" },
      { text: "Estrategia de keywords locales enfocadas en tu servicio + tu zona" },
      { text: "Gestión y optimización de tu perfil de Google Business" },
      { text: "Reportes claros con llamadas, clics y visitas reales" },
      { text: "Sin contratos largos. Mes a mes." },
    ],
    resultsTitle: "Resultados en Medellín",
    cases: [
      {
        text: "Sazón Paisa, restaurante en Laureles. De 6 llamadas al mes desde Google a 41. Llenaron el local de martes a domingo en 3 meses.",
      },
      {
        text: "Klean, lavandería en Envigado. Top 1 en Google Maps para 'lavandería Envigado'. 55 clientes nuevos en el primer trimestre.",
      },
    ],
    testimonials: [
      {
        text: "En Medellín hay mil agencias que te prometen el mundo. Estos manes me prometieron aparecer en Google Maps y lo hicieron en 6 semanas. Simple.",
        name: "Santiago Vélez",
        business: "Taller de motos en Belén",
      },
      {
        text: "Mi spa estaba perdido en Google. Ahora cuando buscas 'spa en El Poblado' salimos de primeras. La inversión se pagó sola el primer mes.",
        name: "Daniela Ochoa",
        business: "Spa en El Poblado",
      },
      {
        text: "Directo, sin carreta. Me dijeron qué iban a hacer, cuánto costaba y cuándo vería resultados. Todo se cumplió. Los recomiendo a ojos cerrados.",
        name: "Andrés Giraldo",
        business: "Contador en Sabaneta",
      },
    ],
    faqs: [
      {
        question: "¿Cuánto cuesta el marketing digital en Medellín?",
        answer:
          "Nuestros planes de SEO local en Medellín arrancan desde $800.000 COP al mes. El precio final depende de tu sector y el nivel de competencia en tu zona. Escríbenos y te cotizamos sin compromiso.",
      },
      {
        question:
          "¿Trabajan con negocios en el área metropolitana de Medellín?",
        answer:
          "Sí. Trabajamos con negocios en Medellín, Envigado, Sabaneta, Itagüí, Bello, La Estrella y todo el Valle de Aburrá. Si tus clientes te buscan en Google en cualquiera de esas zonas, te podemos ayudar.",
      },
      {
        question:
          "¿Cuánto tiempo tarda el SEO local en dar resultados en Medellín?",
        answer:
          "Depende de la competencia en tu sector, pero normalmente ves mejoras en Google Maps entre 4 y 8 semanas. Te damos un timeline honesto desde el primer día.",
      },
      {
        question: "¿Solo hacen SEO o también redes sociales?",
        answer:
          "Solo SEO local. Es lo único que hacemos y por eso lo hacemos mejor que nadie. No te vamos a ofrecer cosas que no necesitas para inflarte la factura.",
      },
    ],
    nap: {
      name: "Cero Humo — Agencia de Marketing Digital en Medellín",
      address: "Medellín, Colombia",
      phone: "+57 305 3476462",
      hours: "Lunes a Viernes 8:00 AM - 6:00 PM",
      mapQuery: "Medellín,Colombia",
    },
    schemaName: "Cero Humo — Agencia de Marketing Digital en Medellín",
    schemaUrl: "https://cerohumo.lat/medellin/agencia-de-marketing-digital/",
    ctaTitle: "¿Quieres más clientes en Medellín?",
    ctaSubtitle:
      "Escríbenos. Te decimos exactamente qué podemos hacer por tu negocio.",
    otherServicesInCity: [],
  },

  // ---- BARRANQUILLA: Agencia de Marketing Digital ----
  {
    slug: "agencia-de-marketing-digital",
    citySlug: "barranquilla",
    city: "Barranquilla",
    title:
      "Agencia de Marketing Digital en Barranquilla | Cero Humo — SEO Local",
    metaDescription:
      "Agencia de marketing digital en Barranquilla enfocada en SEO local. Posicionamos tu negocio en Google Maps. Resultados reales, cero humo. Escríbenos.",
    h1: "Agencia de Marketing Digital en Barranquilla",
    subtitle:
      "Tu negocio en Barranquilla merece estar en Google. Nosotros lo hacemos posible.",
    trustText: "⭐ 4.9 en Google · +15 negocios en Barranquilla",
    problemTitle:
      "En Barranquilla la competencia crece cada día. Si no estás en Google, no existes.",
    problemText:
      "Barranquilla está creciendo duro. Negocios nuevos en el norte, en Villa Country, en el Centro, en Soledad, en el corredor de la 84. Y todos compiten por los mismos clientes.\n\nLa diferencia entre el negocio que crece y el que no, ya no es el que tiene el mejor local o el letrero más grande. Es el que aparece primero en Google cuando alguien busca su servicio.\n\nSi tu negocio en Barranquilla no está en Google Maps ni en los primeros resultados de búsqueda, tu competencia se está quedando con tus clientes. Nosotros cambiamos eso.",
    servicesTitle: "Esto es lo que hacemos por tu negocio en Barranquilla",
    services: [
      { text: "Posicionamiento en Google Maps para búsquedas locales en Barranquilla" },
      { text: "SEO local enfocado en el norte, centro, Villa Country, Soledad, Malambo y área metropolitana" },
      { text: "Optimización completa de tu perfil de Google Business" },
      { text: "Estrategia de keywords que tus clientes realmente buscan en Barranquilla" },
      { text: "Reportes mensuales transparentes con números de verdad" },
      { text: "Sin contratos. Mes a mes. Sin amarres." },
    ],
    resultsTitle: "Resultados en Barranquilla",
    cases: [
      {
        text: "Don Pollo, asadero en el norte de Barranquilla. En 5 semanas pasó de no aparecer en Google Maps a estar en el top 3. 29 llamadas nuevas el primer mes.",
      },
      {
        text: "JurídiCosta, bufete de abogados en el centro. Top 1 para 'abogado en Barranquilla'. 18 consultas nuevas mensuales desde Google.",
      },
    ],
    testimonials: [
      {
        text: "Yo pensaba que el marketing digital era solo Instagram. Estos manes me abrieron los ojos. Google es donde están los clientes que de verdad compran.",
        name: "Luis Camargo",
        business: "Ferretería en el norte",
      },
      {
        text: "En Barranquilla no hay muchas agencias que hagan SEO bien. Cero Humo lo hace. Resultados en menos de dos meses.",
        name: "María Herrera",
        business: "Clínica estética en Villa Country",
      },
      {
        text: "Me atendieron por WhatsApp, me explicaron todo claro, y en 6 semanas mi restaurante aparecía de primero en Google Maps. Brutal.",
        name: "Rafael Mejía",
        business: "Restaurante en la 84",
      },
    ],
    faqs: [
      {
        question: "¿Cuánto cuesta el marketing digital en Barranquilla?",
        answer:
          "Los planes de SEO local para Barranquilla arrancan desde $700.000 COP al mes. Depende de tu sector y competencia. Escríbenos por WhatsApp y te damos un número exacto.",
      },
      {
        question: "¿Funciona el SEO local en Barranquilla?",
        answer:
          "Sí, y mucho. La ventaja es que en Barranquilla hay menos competencia en Google que en Bogotá o Medellín, así que los resultados suelen llegar más rápido. Es el momento perfecto para posicionarte.",
      },
      {
        question:
          "¿Trabajan con negocios en Soledad y el área metropolitana?",
        answer:
          "Sí. Cubrimos Barranquilla, Soledad, Malambo, Puerto Colombia y todo el área metropolitana. Si tus clientes están en esa zona y te buscan en Google, te podemos posicionar.",
      },
      {
        question: "¿Qué tipo de negocios atienden en Barranquilla?",
        answer:
          "Todo negocio local que sus clientes busquen en Google: restaurantes, clínicas, abogados, talleres, ferreterías, peluquerías, gimnasios, tiendas. Si te buscan, te posicionamos.",
      },
    ],
    nap: {
      name: "Cero Humo — Agencia de Marketing Digital en Barranquilla",
      address: "Barranquilla, Colombia",
      phone: "+57 305 3476462",
      hours: "Lunes a Viernes 8:00 AM - 6:00 PM",
      mapQuery: "Barranquilla,Colombia",
    },
    schemaName: "Cero Humo — Agencia de Marketing Digital en Barranquilla",
    schemaUrl:
      "https://cerohumo.lat/barranquilla/agencia-de-marketing-digital/",
    ctaTitle: "¿Quieres más clientes en Barranquilla?",
    ctaSubtitle:
      "Escríbenos. Te decimos exactamente qué podemos hacer por tu negocio.",
    otherServicesInCity: [],
  },
];

// Helper to find landing by city+slug
export function getLanding(
  citySlug: string,
  slug: string
): LandingPageData | undefined {
  return landingPages.find(
    (l) => l.citySlug === citySlug && l.slug === slug
  );
}

export function getCityHub(slug: string): CityHubData | undefined {
  return cityHubs.find((h) => h.slug === slug);
}
