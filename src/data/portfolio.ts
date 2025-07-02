import { Experience, Education, Project, Skill } from '../types';

export const experiences: Experience[] = [
{
  id: '1',
  title: 'Asistente de Marketing Digital | Estrategia de Contenido y Optimización Web',
  company: 'NHL Publicidad',
  duration: 'Mayo 2025 - Actualidad',
  location: 'Lima, Perú',
  current: true,
  techStack: ['YouTube', 'SEO', 'Segmentación', 'Marketing de Contenidos', 'Gestión de Proyectos'],
  responsibilities: [
  'Diseñé pautas estratégicas de contenido para videos en YouTube, coordinando con el equipo de producción audiovisual.',
  'Analicé audiencias y realicé segmentación de mercado para optimizar campañas y decisiones de marca en plataformas digitales.',
  'Colaboré en la mejora de procesos internos y el posicionamiento SEO del sitio web para aumentar la eficiencia y visibilidad online.'
]

},

 {
    id: '2',
    title: 'Especialista Técnico en Soporte Informático | Diagnóstico y Mantenimiento',
    company: 'Freelance / Independiente',
    duration: 'Junio 2022 - Actualidad',
    location: 'Lima, Perú',
    techStack: ['Diagnóstico HW/SW', 'Optimización', 'Mantenimiento', 'Windows/Linux'],
    responsibilities: [
      'Diagnóstico y resolución de problemas de hardware y software para clientes corporativos y particulares.',
      'Implementación de soluciones de mejora en el rendimiento de sistemas, reduciendo tiempos de inactividad.',
      'Mantenimiento preventivo y correctivo para asegurar la operatividad de infraestructuras tecnológicas.'
    ]
  },
 
  {
    id: '3',
    title: 'Asistente de Logística y Abastecimiento | Prácticas Profesionales',
    company: 'Zeus Maritime',
    duration: 'Abril 2025 - Mayo 2025',
    location: 'Callao, Perú',
    techStack: ['Gestión de Órdenes', 'Facturación', 'Compras', 'Documentación Comercial'],
    responsibilities: [
      'Digitación y seguimiento de órdenes de compra en sistema interno de la compañía.',
      'Emisión de facturas y guías simplificadas para distribución y exportación.',
      'Elaboración de documentos institucionales para bancos y clientes internacionales.'
    ]
  },
  {
    id: '4',
    title: 'Desarrollador de Entornos 3D en Tiempo Real | Visualización Interactiva',
    company: 'Freelance / Independiente',
    duration: 'Febrero 2018 - Abril 2025',
    location: 'Lima, Perú',
    techStack: ['Unreal Engine', 'Autodesk Maya', 'Diseño 3D', 'Renderizado'],
    responsibilities: [
      'Diseño y desarrollo de escenarios interactivos 3D para videojuegos, arquitectura y simulaciones empresariales.',
      'Optimización de modelos y texturas 3D para mejorar rendimiento en entornos en tiempo real.',
      'Entrega de soluciones personalizadas para clientes en sectores como entretenimiento y bienes raíces.'
    ]
  },
  {
    id: '5',
    title: 'Técnico en Atención al Cliente y Soporte de Sistemas',
    company: 'Gomaju Internet Gaming',
    duration: 'Enero 2023 - Julio 2023',
    location: 'Lima, Perú',
    techStack: ['Soporte Técnico', 'Gestión de Inventario', 'Actualizaciones de Software'],
    responsibilities: [
      'Atención personalizada a usuarios y resolución de incidencias técnicas en tiempo real.',
      'Mantenimiento y actualización de equipos de juego para garantizar una experiencia óptima.',
      'Control de inventario de suministros y monitoreo del correcto funcionamiento del local.'
    ]
  },
  {
    id: '6',
    title: 'Asistente Administrativo y Analista de Procesos',
    company: 'Romaseda',
    duration: 'Setiembre 2018 - Febrero 2020',
    location: 'Lima, Perú',
    techStack: ['Excel Avanzado', 'Automatización', 'Reportes Financieros'],
    responsibilities: [
      'Gestión documental, control de inventarios y automatización de flujos administrativos.',
      'Diseño de reportes financieros para decisiones estratégicas.',
      'Implementación de soluciones digitales que redujeron los tiempos de gestión en un 30%.'
    ]
  }
];

export const education: Education[] = [
  {
    id: '1',
    degree: 'Bachiller en Administración y Negocios Internacionales',
    institution: 'Universidad Norbert Wiener',
    duration: '2022 - 2026',
    status: 'Estudiante Actual (7º ciclo)',
    certificateUrl: 'pdf/cert1.pdf',
    relevant: [
      'Transformación Digital',
      'Estrategia Empresarial',
      'Comercio Internacional',
      'Investigación Académica'
    ]
  },
  {
    id: '2',
    degree: 'Diplomado en Inteligencia Artificial para los Negocios',
    institution: 'IDAT',
    duration: '2025',
    status: 'En curso',
    certificateUrl: 'pdf/cert1.pdf',
    relevant: [
      'Machine Learning',
      'Chatbots',
      'Automatización con IA',
      'Análisis Predictivo'
    ]
  },
  {
    id: '3',
    degree: 'Curso de SQL y Bases de Datos Relacionales',
    institution: 'IDAT',
    duration: '2024 - 2025',
    status: 'Finalizado',
    certificateUrl: 'pdf/cert1.pdf',
    relevant: [
      'Consultas Avanzadas',
      'Modelado Relacional',
      'Optimización de Queries',
      'Análisis de Datos'
    ]
  },
  {
    id: '4',
    degree: 'Certificación de Inglés Avanzado',
    institution: 'Instituto SISE',
    duration: '2022',
    status: 'Completado',
    certificateUrl: 'pdf/cert1.pdf',
    relevant: [
      'Lectura Técnica',
      'Redacción Formal',
      'Comunicación Oral',
      'Entorno Profesional'
    ]
  }
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'Digital Bakery',
    description: 'Aplicación web para pedidos online de panadería en Lima, con sistema de gestión integrado. Diseñada para facilitar la compra a clientes y la administración para el negocio.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Zustand', 'Node.js', 'Express', 'PostgreSQL'],
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
    liveUrl: 'https://digitalbakery.vercel.app/',
    githubUrl: 'https://github.com/sjaquer/Proyect_Bakery',
    category: 'web',
    featured: true
  },
  {
    id: '2',
    title: 'Aplicación de Gestión de Tareas',
    description: 'Herramienta colaborativa para gestión de proyectos, tareas en tiempo real, archivos y analítica de equipo.',
    techStack: ['React Native', 'Firebase', 'Redux', 'TypeScript'],
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
    liveUrl: 'https://taskmanager-demo.com',
    githubUrl: 'https://github.com/username/task-manager',
    category: 'mobile',
    featured: true
  },
  {
    id: '3',
    title: 'Visualización Arquitectónica 3D',
    description: 'Renderizados realistas e inmersivos de proyectos residenciales usando Unreal Engine y Blender.',
    techStack: ['Unreal Engine 5', 'AutoDesk Maya', 'Photoshop'],
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: '3d',
    featured: true
  },
  {
    id: '4',
    title: 'Video de Identidad de Marca',
    description: 'Producción audiovisual para campaña de lanzamiento de una startup: motion graphics y edición profesional.',
    techStack: ['After Effects', 'Premiere Pro', 'Cinema 4D'],
    image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'video'
  }
];

export const skills: Skill[] = [
  // Programming Languages
  { name: 'JavaScript', category: 'Programación', proficiency: 85, icon: 'Code' },
  { name: 'TypeScript', category: 'Programación', proficiency: 80, icon: 'Code' },
  { name: 'Python', category: 'Programación', proficiency: 85, icon: 'Code' },
  { name: 'Java', category: 'Programación', proficiency: 30, icon: 'Code' },
  
  // Frontend
  { name: 'React', category: 'Frontend', proficiency: 75, icon: 'Globe' },
  { name: 'Vue.js', category: 'Frontend', proficiency: 85, icon: 'Globe' },
  { name: 'Next.js', category: 'Frontend', proficiency: 80, icon: 'Globe' },
  { name: 'Tailwind CSS', category: 'Frontend', proficiency: 95, icon: 'Palette' },
  
  // Backend
  { name: 'Node.js', category: 'Backend', proficiency: 80, icon: 'Server' },
  { name: 'Express.js', category: 'Backend', proficiency: 75, icon: 'Server' },
  { name: 'Django', category: 'Backend', proficiency: 60, icon: 'Server' },
  { name: 'GraphQL', category: 'Backend', proficiency: 45, icon: 'Database' },
  
  // Design & 3D
  { name: 'Unreal Engine', category: 'Creativo', proficiency: 90, icon: 'Gamepad2' },
  { name: 'AutoDesk Maya', category: 'Creativo', proficiency: 60, icon: 'Box' },
  { name: 'Danvinci Resolve', category: 'Creativo', proficiency: 55, icon: 'Film' },
  { name: 'Photoshop', category: 'Creativo', proficiency: 90, icon: 'Image' },
  
  // Tools & Cloud
  { name: 'AWS', category: 'DevOps', proficiency: 85, icon: 'Cloud' },
  { name: 'Docker', category: 'DevOps', proficiency: 80, icon: 'Package' },
  { name: 'Git', category: 'DevOps', proficiency: 95, icon: 'GitBranch' },
  { name: 'MongoDB', category: 'Base de Datos', proficiency: 85, icon: 'Database' }
];