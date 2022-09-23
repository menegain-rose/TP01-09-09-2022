<template>
  <h2>
        Liste supabase
      </h2>
    {{ posts }}
  </template>

 // <script setup lang="ts">

  import { supabase } from "../supabase";
  console.log("supabase :", supabase); // pour vérifier et "garder" supabase dans le code
  const maisons = []; // à remplacer par l'appel à Supabase





 // import { supabase } from "../supabase";
 // console.log("supabase :", supabase); // pour vérifier et "garder" supabase dans le code
 // const maisons = []; // à remplacer par l'appel à Supabase
//
 // const res = await fetch(...)
 // const posts = await res.json()
//
 //   export default {
 // async setup() {
 //   const res = await fetch(...)
 //   const posts = await res.json()
 //   return {
 //     posts
 //   }
 // }
//}
//
</script>

