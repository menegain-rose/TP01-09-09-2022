<template>
  <nav>
    <h4 class="text-xl">
      <Bars3Icon class="inline-block h-5 w-5 text-blue-500" />
    </h4>
    <ul class="flex">
      <li>
        <router-link class="text-red-600 ml-4" to="/">
          <code class="font-mono">Index</code>
        </router-link>
      </li>
      <li>
        <router-link class="text-red-600 ml-4" to="/simple">
            <code class="font-mono">simple</code>
          </router-link>
      </li>
      <li>
        <router-link class="text-red-600 ml-4" to="/liste">
            <code class="font-mono">liste</code>
          </router-link>
      </li>
      <li>
        <router-link class="text-red-600 ml-4" to="/listefetch">
            <code class="font-mono">listefetch</code>
          </router-link>
      </li>
      <li>
        <router-link class="text-red-600 ml-4" to="/edit/new">
            <code class="font-mono">New</code>
          </router-link>
      </li>

      <li>
        <router-link class="text-red-600 ml-4" to="/pages/listsupabase">
            <code class="font-mono">listsupabase</code>
          </router-link>
      </li>
   
    </ul>
  </nav>

  <!-- Affiche les pages -->
  <Suspense>
  <router-view class="m-2 border-2 p-2" />
</Suspense>
</template>

<script setup lang="ts">
import { Bars3Icon } from '@heroicons/vue/20/solid'
</script>


