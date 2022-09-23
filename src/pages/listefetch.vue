<template>
    <div>
      <h2>
        Liste Fetch
      </h2>
      <card v-for="maison in maisons" :key="maison.titre" v-bind="maison">
      </card>
    </div>

  </template>

<script setup lang="ts">
    import card from "../components/card.vue";

    const res = await fetch("/maison.json");
    const maisons = await res.json();


</script>