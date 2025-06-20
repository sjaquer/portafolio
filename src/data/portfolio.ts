import { Experience, Education, Project, Skill } from '../types';

export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Desarrollador Full Stack Senior',
    company: 'TechCorp Solutions',
    duration: '2022 - Present',
    location: 'Remote',
    current: true,
    techStack: ['React', 'Node.js', 'TypeScript', 'AWS', 'MongoDB'],
    responsibilities: [
      'Lideré el desarrollo de más de 5 aplicaciones web empresariales que atienden a más de 10k usuarios',
      'Diseñé una infraestructura de microservicios escalable que redujo el tiempo de respuesta en un 40%',
      'Mentoricé a 3 desarrolladores junior y establecí procesos de revisión de código',
      'Implementé pipelines de CI/CD mejorando la eficiencia de despliegue en un 60%'
    ]
  },
  {
    id: '2',
    title: 'Desarrollador Full Stack',
    company: 'StartupXYZ',
    duration: '2020 - 2022',
    location: 'San Francisco, CA',
    techStack: ['Vue.js', 'Python', 'Django', 'PostgreSQL', 'Docker'],
    responsibilities: [
      'Desarrollé el MVP que aseguró $2M en financiación Serie A',
      'Construí un sistema de chat en tiempo real capaz de manejar más de 1000 usuarios concurrentes',
      'Optimicé las consultas a la base de datos reduciendo los tiempos de carga en un 50%',
      'Colaboré con el equipo de diseño en mejoras de UX/UI'
    ]
  },
  {
    id: '3',
    title: 'Desarrollador Frontend',
    company: 'Creative Agency',
    duration: '2019 - 2020',
    location: 'New York, NY',
    techStack: ['React', 'SCSS', 'Webpack', 'Adobe Creative Suite'],
    responsibilities: [
      'Creé sitios web responsivos para más de 20 clientes en la industria del entretenimiento',
      'Implementé animaciones personalizadas y funciones interactivas',
      'Colaboré con diseñadores para traducir bocetos en código perfecto',
      'Optimizé sitios para SEO y rendimiento alcanzando más de 95 en Lighthouse'
    ]
  }
];

export const education: Education[] = [
  {
    id: '1',
    degree: 'Licenciatura en Ciencias de la Computación',
    institution: 'University of California, Berkeley',
    duration: '2021 - 2025',
    status: 'Estudiante Actual',
    gpa: '3.8/4.0',
    relevant: ['Data Structures', 'Algorithms', 'Software Engineering', 'Machine Learning']
  },
  {
    id: '2',
    degree: 'Arquitecto Asociado de Soluciones AWS',
    institution: 'Amazon Web Services',
    duration: '2023',
    status: 'Certificado'
  },
  {
    id: '3',
    degree: 'Certificado de Desarrollador Frontend de Meta',
    institution: 'Meta (Coursera)',
    duration: '2022',
    status: 'Completado'
  }
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'Plataforma de Comercio Electrónico',
    description: 'Solución de comercio electrónico full-stack con inventario en tiempo real, procesamiento de pagos y panel de administración.',
    techStack: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
    liveUrl: 'https://demo-ecommerce.com',
    githubUrl: 'https://github.com/username/ecommerce-platform',
    category: 'web',
    featured: true
  },
  {
    id: '2',
    title: 'Aplicación de Gestión de Tareas',
    description: 'Herramienta colaborativa de gestión de proyectos con actualizaciones en tiempo real, compartición de archivos y analítica de equipo.',
    techStack: ['React Native', 'Firebase', 'Redux', 'TypeScript'],
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
    liveUrl: 'https://taskmanager-demo.com',
    githubUrl: 'https://github.com/username/task-manager',
    category: 'mobile',
    featured: true
  },
  {
    id: '3',
    title: 'Visualización Arquitectónica',
    description: 'Renderizados 3D fotorrealistas para complejo residencial moderno utilizando Unreal Engine 5.',
    techStack: ['Unreal Engine 5', 'Blender', 'Photoshop'],
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: '3d',
    featured: true
  },
  {
    id: '4',
    title: 'Video de Identidad de Marca',
    description: 'Gráficos en movimiento y producción de video para la campaña de lanzamiento de una startup tecnológica.',
    techStack: ['After Effects', 'Premiere Pro', 'Cinema 4D'],
    image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'video'
  }
];

export const skills: Skill[] = [
  // Programming Languages
  { name: 'JavaScript', category: 'Programación', proficiency: 95, icon: 'Code' },
  { name: 'TypeScript', category: 'Programación', proficiency: 90, icon: 'Code' },
  { name: 'Python', category: 'Programación', proficiency: 85, icon: 'Code' },
  { name: 'Java', category: 'Programación', proficiency: 80, icon: 'Code' },
  
  // Frontend
  { name: 'React', category: 'Frontend', proficiency: 95, icon: 'Globe' },
  { name: 'Vue.js', category: 'Frontend', proficiency: 85, icon: 'Globe' },
  { name: 'Next.js', category: 'Frontend', proficiency: 90, icon: 'Globe' },
  { name: 'Tailwind CSS', category: 'Frontend', proficiency: 95, icon: 'Palette' },
  
  // Backend
  { name: 'Node.js', category: 'Backend', proficiency: 90, icon: 'Server' },
  { name: 'Express.js', category: 'Backend', proficiency: 85, icon: 'Server' },
  { name: 'Django', category: 'Backend', proficiency: 80, icon: 'Server' },
  { name: 'GraphQL', category: 'Backend', proficiency: 75, icon: 'Database' },
  
  // Design & 3D
  { name: 'Unreal Engine', category: 'Creativo', proficiency: 85, icon: 'Gamepad2' },
  { name: 'Blender', category: 'Creativo', proficiency: 80, icon: 'Box' },
  { name: 'After Effects', category: 'Creativo', proficiency: 85, icon: 'Film' },
  { name: 'Photoshop', category: 'Creativo', proficiency: 90, icon: 'Image' },
  
  // Tools & Cloud
  { name: 'AWS', category: 'DevOps', proficiency: 85, icon: 'Cloud' },
  { name: 'Docker', category: 'DevOps', proficiency: 80, icon: 'Package' },
  { name: 'Git', category: 'DevOps', proficiency: 95, icon: 'GitBranch' },
  { name: 'MongoDB', category: 'Base de Datos', proficiency: 85, icon: 'Database' }
];