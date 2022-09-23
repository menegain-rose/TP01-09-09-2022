<template>
    <div>
      <h2>
        Liste Fetch
      </h2>
      <div v-for="maison in maisons" :key="maison.nomMaison">
      <card class="w-1/2" v-bind="maison"/>
      </div>
    </div>

  </template>

<script setup lang="ts">
    import card from "../components/card.vue";

    export default {
    async setup() {
    const res = await fetch("maisons.json");
    const maisons = await res.json();
    return {
        }
      }
    }

</script>