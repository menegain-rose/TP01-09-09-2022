<template>
  <h2>
      Liste supabase
  </h2>

  <card class="w-1/2 mb-10" v-bind="maison" />


  </template>

<script setup lang="ts">
    import card from "../components/card.vue";


    import { supabase } from "../supabase";
    console.log("supabase :", supabase); // pour vérifier et "garder" supabase dans le code
    const maisons = []; // à remplacer par l'appel à Supabase

  let { data: Maison, error } = await supabase
  .from('Maison')
  .select('*')

</script>

