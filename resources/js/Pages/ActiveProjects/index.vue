<template>
    <Head title="Proyectos Activos"/>

    <div class="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50">
        <img
            id="backgrund" 
            src="/images/background.jpg" 
            alt=""
            class="absolute -left-20 top-0 max-w-[1920px]"
        />

        <div class="fixed top-0 left-0 right-0 z-50 bg-blue-500/20">
            <div class="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
                <button @click="isOpen = !isOpen" class="p-2 text-white">
                    <svg class="fill-white w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" /></svg>
                </button>
                <h1 class="text-white text-lg">Proyectos Activos</h1>
            </div>
        </div>

        <div
            class="relative min-h-screen flex flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white"
        >
            <div class="relative w-full max-w-2xl px-6 lg:max-w-7xl">
                <div
                    class="grid grid-cols-2 items-center gap-2 py-10 lg:grid-cols-3"
                >
            
                    <!-- Nav Drawer -->
                    <div
                    :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
                    class="fixed top-0 left-0 z-40 w-64 h-full overflow-y-auto bg-gray-800 transition-transform duration-300"
                    >
                    <!-- Contenido del Nav Drawer -->
                    <div class="p-5">
                        <a href="#" class="block p-2 text-white">Inicio</a>
                        <a href="#" class="block p-2 text-white">Acerca de</a>
                        <a href="#" class="block p-2 text-white">Servicios</a>
                        <a href="#" class="block p-2 text-white">Contacto</a>
                    </div>
                    </div>
            
                    <!-- Overlay -->
                    <div
                        v-if="isOpen"
                        @click="isOpen = false"
                        class="fixed inset-0 z-30 bg-black/30"
                    ></div>
                </div>
            </div>
        </div>

        
        <div class="max-w-sm mx-auto bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 z-40 relative">
    <!-- Card Image (optional) -->
    <!-- <img class="rounded-t-lg" src="/path/to/your/image" alt=""> -->

    <!-- Card Content -->
    <div class="p-5">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Título de la Card</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Aquí va la descripción de lo que tu card contiene o representa. Puede ser un resumen de un artículo, una descripción de un producto, etc.</p>
        <a href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Leer más
            <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L15.586 11H3a1 1 0 110-2h12.586l-5.293-5.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
    </div>
</div>
        </div>
        
</template>

<script setup>
import { Head, Link } from '@inertiajs/vue3';
import { ref } from 'vue';

const isOpen = ref(false);
</script>