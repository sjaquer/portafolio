<template>
  <div class="min-h-screen bg-gradient-to-br from-primary to-secondary dark:from-dark dark:to-gray-800">
    <div class="container mx-auto px-4 py-8">
      <!-- Bento Grid Layout -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Header Section -->
        <header class="col-span-full bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-xl">
          <div class="flex flex-col md:flex-row items-center justify-between">
            <div class="flex items-center gap-4">
              <img :src="profileImage" alt="Profile" class="w-16 h-16 rounded-full">
              <h1 class="text-2xl font-montserrat font-bold text-white">Sebastian Jaque</h1>
            </div>
            <nav class="flex gap-4 mt-4 md:mt-0">
              <ThemeToggle />
              <SocialLinks />
            </nav>
          </div>
        </header>

        <!-- About Me Section -->
        <section class="col-span-full md:col-span-1 bg-white/10 backdrop-blur-md rounded-xl p-6">
          <h2 class="text-xl font-montserrat font-bold text-white mb-4">Sobre Mí</h2>
          <p class="text-white/90">
            Programador, diseñador y fotógrafo con experiencia en desarrollo web, diseño 3D y automatización.
          </p>
        </section>

        <!-- Skills Grid -->
        <section class="col-span-full md:col-span-2 bg-white/10 backdrop-blur-md rounded-xl p-6">
          <h2 class="text-xl font-montserrat font-bold text-white mb-4">Habilidades</h2>
          <SkillsGrid />
        </section>

        <!-- Experience Timeline -->
        <section class="col-span-full bg-white/10 backdrop-blur-md rounded-xl p-6">
          <h2 class="text-xl font-montserrat font-bold text-white mb-4">Experiencia</h2>
          <ExperienceTimeline />
        </section>

        <!-- Projects Gallery -->
        <section class="col-span-full bg-white/10 backdrop-blur-md rounded-xl p-6">
          <h2 class="text-xl font-montserrat font-bold text-white mb-4">Proyectos</h2>
          <ProjectsGallery />
        </section>

        <!-- Contact Form -->
        <section class="col-span-full bg-white/10 backdrop-blur-md rounded-xl p-6">
          <h2 class="text-xl font-montserrat font-bold text-white mb-4">Contacto</h2>
          <ContactForm />
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ThemeToggle from './components/ThemeToggle.vue'
import SocialLinks from './components/SocialLinks.vue'
import SkillsGrid from './components/SkillsGrid.vue'
import ExperienceTimeline from './components/ExperienceTimeline.vue'
import ProjectsGallery from './components/ProjectsGallery.vue'
import ContactForm from './components/ContactForm.vue'

const profileImage = ref('/images/iconperso.jpg')
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Open+Sans:wght@400;600&display=swap');

body {
  @apply font-opensans antialiased;
}
</style>