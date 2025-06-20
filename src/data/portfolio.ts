import { Experience, Education, Project, Skill } from '../types';

export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Senior Full Stack Developer',
    company: 'TechCorp Solutions',
    duration: '2022 - Present',
    location: 'Remote',
    current: true,
    techStack: ['React', 'Node.js', 'TypeScript', 'AWS', 'MongoDB'],
    responsibilities: [
      'Led development of 5+ enterprise web applications serving 10k+ users',
      'Architected scalable microservices infrastructure reducing response time by 40%',
      'Mentored 3 junior developers and established code review processes',
      'Implemented CI/CD pipelines improving deployment efficiency by 60%'
    ]
  },
  {
    id: '2',
    title: 'Full Stack Developer',
    company: 'StartupXYZ',
    duration: '2020 - 2022',
    location: 'San Francisco, CA',
    techStack: ['Vue.js', 'Python', 'Django', 'PostgreSQL', 'Docker'],
    responsibilities: [
      'Developed MVP that secured $2M in Series A funding',
      'Built real-time chat system handling 1000+ concurrent users',
      'Optimized database queries reducing load times by 50%',
      'Collaborated with design team on UX/UI improvements'
    ]
  },
  {
    id: '3',
    title: 'Frontend Developer',
    company: 'Creative Agency',
    duration: '2019 - 2020',
    location: 'New York, NY',
    techStack: ['React', 'SCSS', 'Webpack', 'Adobe Creative Suite'],
    responsibilities: [
      'Created responsive websites for 20+ clients in entertainment industry',
      'Implemented custom animations and interactive features',
      'Collaborated with designers to translate mockups into pixel-perfect code',
      'Optimized sites for SEO and performance scoring 95+ on Lighthouse'
    ]
  }
];

export const education: Education[] = [
  {
    id: '1',
    degree: 'Bachelor of Science in Computer Science',
    institution: 'University of California, Berkeley',
    duration: '2021 - 2025',
    status: 'Current Student',
    gpa: '3.8/4.0',
    relevant: ['Data Structures', 'Algorithms', 'Software Engineering', 'Machine Learning']
  },
  {
    id: '2',
    degree: 'AWS Solutions Architect Associate',
    institution: 'Amazon Web Services',
    duration: '2023',
    status: 'Certified'
  },
  {
    id: '3',
    degree: 'Meta Frontend Developer Certificate',
    institution: 'Meta (Coursera)',
    duration: '2022',
    status: 'Completed'
  }
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with real-time inventory, payment processing, and admin dashboard.',
    techStack: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
    liveUrl: 'https://demo-ecommerce.com',
    githubUrl: 'https://github.com/username/ecommerce-platform',
    category: 'web',
    featured: true
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'Collaborative project management tool with real-time updates, file sharing, and team analytics.',
    techStack: ['React Native', 'Firebase', 'Redux', 'TypeScript'],
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
    liveUrl: 'https://taskmanager-demo.com',
    githubUrl: 'https://github.com/username/task-manager',
    category: 'mobile',
    featured: true
  },
  {
    id: '3',
    title: 'Architectural Visualization',
    description: 'Photorealistic 3D renderings for modern residential complex using Unreal Engine 5.',
    techStack: ['Unreal Engine 5', 'Blender', 'Photoshop'],
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: '3d',
    featured: true
  },
  {
    id: '4',
    title: 'Brand Identity Video',
    description: 'Motion graphics and video production for tech startup brand launch campaign.',
    techStack: ['After Effects', 'Premiere Pro', 'Cinema 4D'],
    image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'video'
  }
];

export const skills: Skill[] = [
  // Programming Languages
  { name: 'JavaScript', category: 'Programming', proficiency: 95, icon: 'Code' },
  { name: 'TypeScript', category: 'Programming', proficiency: 90, icon: 'Code' },
  { name: 'Python', category: 'Programming', proficiency: 85, icon: 'Code' },
  { name: 'Java', category: 'Programming', proficiency: 80, icon: 'Code' },
  
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
  { name: 'Unreal Engine', category: 'Creative', proficiency: 85, icon: 'Gamepad2' },
  { name: 'Blender', category: 'Creative', proficiency: 80, icon: 'Box' },
  { name: 'After Effects', category: 'Creative', proficiency: 85, icon: 'Film' },
  { name: 'Photoshop', category: 'Creative', proficiency: 90, icon: 'Image' },
  
  // Tools & Cloud
  { name: 'AWS', category: 'DevOps', proficiency: 85, icon: 'Cloud' },
  { name: 'Docker', category: 'DevOps', proficiency: 80, icon: 'Package' },
  { name: 'Git', category: 'DevOps', proficiency: 95, icon: 'GitBranch' },
  { name: 'MongoDB', category: 'Database', proficiency: 85, icon: 'Database' }
];