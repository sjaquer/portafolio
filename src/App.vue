<template>
  <div class="min-h-screen bg-dark text-light">
    <div class="max-w-7xl mx-auto px-4 py-8">
      <!-- Header Section -->
      <header class="mb-12 animate-fade-in">
        <nav class="flex justify-between items-center mb-16">
          <div class="flex items-center gap-4">
            <img src="/images/iconperso.jpg" alt="Profile" class="w-12 h-12 rounded-full border-2 border-primary">
            <h1 class="text-2xl font-montserrat font-bold">Sebastian Jaque</h1>
          </div>
          <div class="flex gap-6">
            <a v-for="link in socialLinks" 
               :key="link.name" 
               :href="link.url" 
               target="_blank"
               class="text-light hover:text-primary transition-colors">
              <i :class="link.icon" class="text-xl"></i>
            </a>
          </div>
        </nav>

        <!-- Hero Section -->
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div class="space-y-6 animate-slide-up">
            <h2 class="text-4xl md:text-5xl font-montserrat font-bold">
              <span class="text-primary">Desarrollador</span> & 
              <span class="text-accent">Diseñador</span>
            </h2>
            <p class="text-lg text-light/80">
              Especializado en desarrollo web, diseño 3D y fotografía profesional
            </p>
            <button @click="downloadCV" 
                    class="bg-primary text-light px-8 py-3 rounded-full hover:bg-primary/90 transition-colors">
              Descargar CV
            </button>
          </div>
          <div class="relative animate-slide-in">
            <div class="aspect-square rounded-2xl overflow-hidden">
              <img src="/images/iconperso.jpg" alt="Profile" class="w-full h-full object-cover">
            </div>
            <div class="absolute -bottom-6 -right-6 bg-accent p-4 rounded-xl">
              <p class="font-montserrat font-bold">7+ años de experiencia</p>
            </div>
          </div>
        </div>
      </header>

      <!-- Skills Grid -->
      <section class="mb-20 animate-fade-in">
        <h3 class="text-2xl font-montserrat font-bold mb-8">Habilidades</h3>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div v-for="skill in skills" 
               :key="skill.name"
               class="bg-light/5 p-6 rounded-xl hover:bg-light/10 transition-colors">
            <img :src="skill.icon" :alt="skill.name" class="w-12 h-12 mb-4">
            <h4 class="font-montserrat font-bold mb-2">{{ skill.name }}</h4>
            <p class="text-light/60 text-sm">{{ skill.description }}</p>
          </div>
        </div>
      </section>

      <!-- Projects Carousel -->
      <section class="mb-20">
        <h3 class="text-2xl font-montserrat font-bold mb-8">Proyectos & Fotografía</h3>
        <div class="relative overflow-hidden">
          <div class="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4">
            <div v-for="project in projects" 
                 :key="project.id"
                 class="flex-none w-80 snap-center">
              <div class="bg-light/5 rounded-xl overflow-hidden">
                <img :src="project.image" :alt="project.title" class="w-full h-48 object-cover">
                <div class="p-4">
                  <h4 class="font-montserrat font-bold mb-2">{{ project.title }}</h4>
                  <p class="text-light/60 text-sm">{{ project.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section class="animate-slide-up">
        <h3 class="text-2xl font-montserrat font-bold mb-8">Contacto</h3>
        <div class="bg-light/5 p-8 rounded-xl">
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div>
              <label class="block mb-2">Nombre</label>
              <input type="text" v-model="form.name" class="w-full bg-dark border border-light/20 rounded-lg px-4 py-2">
            </div>
            <div>
              <label class="block mb-2">Email</label>
              <input type="email" v-model="form.email" class="w-full bg-dark border border-light/20 rounded-lg px-4 py-2">
            </div>
            <div>
              <label class="block mb-2">Mensaje</label>
              <textarea v-model="form.message" rows="4" class="w-full bg-dark border border-light/20 rounded-lg px-4 py-2"></textarea>
            </div>
            <button type="submit" class="bg-accent text-dark font-bold px-8 py-3 rounded-full hover:bg-accent-dark transition-colors">
              Enviar Mensaje
            </button>
          </form>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const socialLinks = [
  { name: 'Instagram', url: 'https://www.instagram.com/sjaquer_', icon: 'fab fa-instagram' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/sjaquer', icon: 'fab fa-linkedin' },
  { name: 'GitHub', url: 'https://github.com/sjaquer', icon: 'fab fa-github' },
  { name: 'YouTube', url: 'https://www.youtube.com/@sjaquer', icon: 'fab fa-youtube' }
]

const skills = [
  { name: 'Diseño Web', icon: '/images/iconweb5.png', description: 'HTML5, CSS3, JavaScript' },
  { name: 'Diseño 3D', icon: '/images/iconweb2.png', description: 'Unreal Engine, Maya' },
  { name: 'Fotografía', icon: '/images/iconweb10.png', description: 'Lightroom, Photoshop' },
  { name: 'Desarrollo', icon: '/images/iconweb6.png', description: 'Python, SQL, VBA' }
]

const projects = [
  { id: 1, title: 'Fotografía Urbana', image: '/images/cam_1.webp', description: 'Capturando la esencia de la ciudad' },
  { id: 2, title: 'Diseño 3D', image: '/images/renders_1.webp', description: 'Modelado y renderizado arquitectónico' },
  { id: 3, title: 'Retratos', image: '/images/cam_2.webp', description: 'Fotografía de retrato profesional' },
  { id: 4, title: 'Renders', image: '/images/renders_2.webp', description: 'Visualización arquitectónica' }
]

const form = ref({
  name: '',
  email: '',
  message: ''
})

const downloadCV = () => {
  window.open('/pdf/CV SEBASTIAN JAQUE 2025.pdf', '_blank')
}

const handleSubmit = () => {
  // Implementar lógica de envío
  console.log('Form submitted:', form.value)
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Open+Sans:wght@400;600&display=swap');

.scrollbar-hide {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
</style>