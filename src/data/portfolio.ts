import { Experience, Education, Project, Skill } from '../types';

export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Director de Desarrollo de Negocios',
    company: 'Global Ventures Corp',
    duration: '2023 - Presente',
    location: 'Remote / Internacional',
    current: true,
    techStack: ['Análisis de Mercados', 'Estrategia Internacional', 'CRM', 'Power BI', 'SAP'],
    responsibilities: [
      'Lideré expansión internacional a 8 nuevos mercados generando $5M en ingresos',
      'Desarrollé estrategias de entrada al mercado con análisis competitivo profundo',
      'Gestioné alianzas estratégicas con socios comerciales en América Latina y Europa',
      'Implementé sistemas de análisis de datos para optimizar procesos comerciales'
    ]
  },
  {
    id: '2',
    title: 'Full Stack Developer & Marketing Specialist',
    company: 'TechMarketing Solutions',
    duration: '2022 - 2023',
    location: 'San Francisco, CA',
    techStack: ['React', 'Node.js', 'Google Analytics', 'Facebook Ads', 'SEO'],
    responsibilities: [
      'Desarrollé plataformas web que aumentaron conversiones en 150%',
      'Creé campañas de marketing digital con ROI promedio de 300%',
      'Implementé sistemas de automatización de marketing y CRM',
      'Produje contenido visual y fotográfico para campañas publicitarias'
    ]
  },
  {
    id: '3',
    title: 'Diseñador 3D & Fotógrafo Freelance',
    company: 'Estudio Creativo Independiente',
    duration: '2020 - Presente',
    location: 'Remote',
    current: true,
    techStack: ['Unreal Engine 5', 'Blender', 'Photoshop', 'Lightroom', 'After Effects'],
    responsibilities: [
      'Creé visualizaciones arquitectónicas fotorrealistas para 50+ proyectos',
      'Produje sesiones fotográficas comerciales y de producto para marcas reconocidas',
      'Desarrollé experiencias interactivas en Unreal Engine para presentaciones comerciales',
      'Gestioné proyectos creativos desde concepto hasta entrega final'
    ]
  },
  {
    id: '4',
    title: 'Analista de Negocios Internacionales',
    company: 'Export Solutions Inc',
    duration: '2019 - 2022',
    location: 'Miami, FL',
    techStack: ['Excel Avanzado', 'Tableau', 'SPSS', 'Comercio Internacional', 'Logística'],
    responsibilities: [
      'Analicé oportunidades de mercado en 15 países de América Latina',
      'Desarrollé modelos financieros para evaluación de inversiones internacionales',
      'Coordiné operaciones de importación/exportación por valor de $10M anuales',
      'Creé reportes ejecutivos y presentaciones para stakeholders internacionales'
    ]
  }
];

export const education: Education[] = [
  {
    id: '1',
    degree: 'Maestría en Administración de Negocios Internacionales',
    institution: 'Universidad de Miami Business School',
    duration: '2021 - 2023',
    status: 'Completado',
    gpa: '3.9/4.0',
    relevant: ['Estrategia Internacional', 'Marketing Global', 'Finanzas Corporativas', 'Análisis de Mercados']
  },
  {
    id: '2',
    degree: 'Licenciatura en Ingeniería de Software',
    institution: 'Universidad Tecnológica',
    duration: '2017 - 2021',
    status: 'Completado',
    gpa: '3.8/4.0',
    relevant: ['Desarrollo Web', 'Bases de Datos', 'Algoritmos', 'Ingeniería de Software']
  },
  {
    id: '3',
    degree: 'Certificación en Marketing Digital',
    institution: 'Google Digital Marketing Institute',
    duration: '2022',
    status: 'Certificado'
  },
  {
    id: '4',
    degree: 'Especialización en Diseño 3D y Visualización',
    institution: 'Epic Games - Unreal Engine',
    duration: '2021',
    status: 'Certificado'
  },
  {
    id: '5',
    degree: 'Certificación Profesional en Fotografía',
    institution: 'New York Institute of Photography',
    duration: '2020',
    status: 'Certificado'
  }
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'Plataforma E-commerce Internacional',
    description: 'Sistema completo de comercio electrónico con integración de pagos internacionales, análisis de mercado y dashboard ejecutivo.',
    techStack: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Google Analytics'],
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
    liveUrl: 'https://demo-ecommerce.com',
    githubUrl: 'https://github.com/username/ecommerce-platform',
    category: 'business',
    featured: true
  },
  {
    id: '2',
    title: 'Campaña de Marketing 360°',
    description: 'Estrategia integral de marketing digital incluyendo desarrollo web, fotografía de producto y análisis de conversiones.',
    techStack: ['WordPress', 'Google Ads', 'Facebook Ads', 'Photoshop', 'Analytics'],
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
    liveUrl: 'https://marketing-campaign-demo.com',
    category: 'marketing',
    featured: true
  },
  {
    id: '3',
    title: 'Visualización Arquitectónica Luxury Resort',
    description: 'Renderizado fotorrealista de complejo hotelero de lujo usando Unreal Engine 5 con iluminación dinámica y recorridos virtuales.',
    techStack: ['Unreal Engine 5', 'Blender', 'Photoshop', 'Lumion'],
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: '3d',
    featured: true
  },
  {
    id: '4',
    title: 'Sesión Fotográfica Comercial - Marca de Moda',
    description: 'Producción fotográfica completa para campaña de moda incluyendo dirección creativa, iluminación y post-producción.',
    techStack: ['Canon EOS R5', 'Lightroom', 'Photoshop', 'Capture One'],
    image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'photography',
    featured: true
  },
  {
    id: '5',
    title: 'App de Gestión de Negocios Internacionales',
    description: 'Aplicación móvil para tracking de operaciones comerciales internacionales con análisis de riesgo país y conversión de divisas.',
    techStack: ['React Native', 'Firebase', 'API REST', 'Chart.js'],
    image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=600',
    liveUrl: 'https://business-app-demo.com',
    githubUrl: 'https://github.com/username/business-app',
    category: 'development'
  },
  {
    id: '6',
    title: 'Fotografía de Producto - Línea Tecnológica',
    description: 'Serie fotográfica de productos tecnológicos con técnicas de iluminación especializada y composición minimalista.',
    techStack: ['Sony A7R IV', 'Profoto', 'Lightroom', 'Photoshop'],
    image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'photography'
  }
];

export const skills: Skill[] = [
  // Negocios Internacionales
  { name: 'Estrategia Internacional', category: 'Negocios Internacionales', proficiency: 95, icon: 'Globe' },
  { name: 'Análisis de Mercados', category: 'Negocios Internacionales', proficiency: 90, icon: 'TrendingUp' },
  { name: 'Comercio Exterior', category: 'Negocios Internacionales', proficiency: 88, icon: 'Ship' },
  { name: 'Negociación Internacional', category: 'Negocios Internacionales', proficiency: 92, icon: 'Handshake' },
  
  // Desarrollo de Software
  { name: 'JavaScript/TypeScript', category: 'Desarrollo de Software', proficiency: 95, icon: 'Code' },
  { name: 'React/Next.js', category: 'Desarrollo de Software', proficiency: 92, icon: 'Globe' },
  { name: 'Node.js', category: 'Desarrollo de Software', proficiency: 88, icon: 'Server' },
  { name: 'Python', category: 'Desarrollo de Software', proficiency: 85, icon: 'Code' },
  
  // Marketing
  { name: 'Marketing Digital', category: 'Marketing', proficiency: 93, icon: 'Target' },
  { name: 'Google Ads', category: 'Marketing', proficiency: 90, icon: 'Search' },
  { name: 'Facebook/Meta Ads', category: 'Marketing', proficiency: 88, icon: 'Facebook' },
  { name: 'SEO/SEM', category: 'Marketing', proficiency: 87, icon: 'TrendingUp' },
  { name: 'Email Marketing', category: 'Marketing', proficiency: 85, icon: 'Mail' },
  { name: 'Analytics & Data', category: 'Marketing', proficiency: 90, icon: 'BarChart3' },
  
  // Diseño 3D
  { name: 'Unreal Engine 5', category: 'Diseño 3D', proficiency: 92, icon: 'Gamepad2' },
  { name: 'Blender', category: 'Diseño 3D', proficiency: 88, icon: 'Box' },
  { name: 'Lumion', category: 'Diseño 3D', proficiency: 85, icon: 'Lightbulb' },
  { name: 'SketchUp', category: 'Diseño 3D', proficiency: 80, icon: 'Cube' },
  
  // Fotografía
  { name: 'Fotografía Comercial', category: 'Fotografía', proficiency: 95, icon: 'Camera' },
  { name: 'Lightroom', category: 'Fotografía', proficiency: 93, icon: 'Image' },
  { name: 'Photoshop', category: 'Fotografía', proficiency: 90, icon: 'Palette' },
  { name: 'Fotografía de Producto', category: 'Fotografía', proficiency: 92, icon: 'Package' },
  { name: 'Iluminación de Estudio', category: 'Fotografía', proficiency: 88, icon: 'Zap' },
  
  // Herramientas de Análisis
  { name: 'Excel Avanzado', category: 'Análisis de Datos', proficiency: 95, icon: 'FileSpreadsheet' },
  { name: 'Power BI', category: 'Análisis de Datos', proficiency: 88, icon: 'BarChart' },
  { name: 'Tableau', category: 'Análisis de Datos', proficiency: 85, icon: 'PieChart' },
  { name: 'Google Analytics', category: 'Análisis de Datos', proficiency: 90, icon: 'Activity' }
];